// Gestor de la Ficha Detallada de Ciudad, Simulador Hipotecario y Minimapa Sanitario
class CityModalManager {
  constructor(modalOverlayId) {
    this.overlay = document.getElementById(modalOverlayId);
    this.currentCity = null;
    this.healthMap = null;
    this.initEvents();
  }

  initEvents() {
    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Cerrar al hacer clic en el backdrop
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });

      const closeBtn = this.overlay.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }
    }
  }

  open(city) {
    this.currentCity = city;
    this.renderContent(city);
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Inicializar simulador hipotecario con los datos de esta ciudad
    this.initMortgageSimulator(city.avgFlatPrice);
  }

  close() {
    if (this.healthMap) {
      this.healthMap.remove();
      this.healthMap = null;
    }
    if (this.overlay) {
      this.overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Lógica de cálculo de cuota mensual de hipoteca (método francés)
  calculateMortgage(price, downPaymentPct, years, annualInterestRate) {
    const loanAmount = price * (1 - downPaymentPct / 100);
    const monthlyRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = years * 12;
    
    if (monthlyRate === 0) return loanAmount / numberOfPayments;

    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                           (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - loanAmount;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      loanAmount: Math.round(loanAmount),
      totalInterest: Math.round(totalInterest),
      downPayment: Math.round(price * (downPaymentPct / 100))
    };
  }

  initMortgageSimulator(initialPrice) {
    const priceInput = document.getElementById('sim-price');
    const downPaymentInput = document.getElementById('sim-downpayment');
    const yearsInput = document.getElementById('sim-years');
    const interestInput = document.getElementById('sim-interest');

    if (!priceInput) return;

    priceInput.value = initialPrice;

    const updateCalc = () => {
      const price = parseFloat(priceInput.value) || 0;
      const downPct = parseFloat(downPaymentInput.value) || 20;
      const years = parseInt(yearsInput.value) || 25;
      const interest = parseFloat(interestInput.value) || 2.8;

      const result = this.calculateMortgage(price, downPct, years, interest);

      const resultEl = document.getElementById('sim-result-payment');
      const loanEl = document.getElementById('sim-result-loan');
      const downEl = document.getElementById('sim-result-down');
      const interestEl = document.getElementById('sim-result-interest');

      if (resultEl) resultEl.innerText = `${result.monthlyPayment.toLocaleString('es-ES')} € / mes`;
      if (loanEl) loanEl.innerText = `${result.loanAmount.toLocaleString('es-ES')} €`;
      if (downEl) downEl.innerText = `${result.downPayment.toLocaleString('es-ES')} €`;
      if (interestEl) interestEl.innerText = `${result.totalInterest.toLocaleString('es-ES')} €`;
    };

    priceInput.addEventListener('input', updateCalc);
    downPaymentInput.addEventListener('input', updateCalc);
    yearsInput.addEventListener('change', updateCalc);
    interestInput.addEventListener('input', updateCalc);

    updateCalc();
  }

  initHealthcareMap(city) {
    if (this.healthMap) {
      this.healthMap.remove();
      this.healthMap = null;
    }

    const mapContainer = document.getElementById('healthcare-mini-map');
    if (!mapContainer || typeof L === 'undefined') return;

    const centerCoords = (city.healthcare && city.healthcare.hospitalCoords) 
      ? city.healthcare.hospitalCoords 
      : city.coordinates;

    this.healthMap = L.map('healthcare-mini-map', {
      center: centerCoords,
      zoom: 13,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap, © CARTO'
    }).addTo(this.healthMap);

    const hospitalIcon = L.divIcon({
      className: 'custom-health-marker marker-hospital-h',
      html: 'H',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });

    const healthCenterIcon = L.divIcon({
      className: 'custom-health-marker marker-healthcenter-a',
      html: 'A',
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -13]
    });

    const markers = [];

    if (city.healthcare && city.healthcare.facilities && city.healthcare.facilities.length > 0) {
      city.healthcare.facilities.forEach(fac => {
        const icon = fac.type === 'hospital' ? hospitalIcon : healthCenterIcon;
        const badgeColor = fac.type === 'hospital' ? '#ef4444' : '#10b981';
        const badgeText = fac.type === 'hospital' ? '🏥 HOSPITAL DE REFERENCIA' : '🚑 ATENCIÓN PRIMARIA / URGENCIAS';
        
        const popupContent = `
          <div style="font-family:inherit;min-width:200px;padding:4px 2px;">
            <span style="display:inline-block;font-size:0.68rem;font-weight:700;color:${badgeColor};margin-bottom:4px;letter-spacing:0.04em;">
              ${badgeText}
            </span>
            <strong style="display:block;font-size:0.92rem;color:#0f172a;margin-bottom:4px;line-height:1.3;">
              ${fac.name}
            </strong>
            <div style="font-size:0.8rem;color:#64748b;margin-bottom:3px;">
              📍 ${fac.address}
            </div>
            <div style="font-size:0.78rem;font-weight:600;color:#059669;">
              🕒 ${fac.emergency}
            </div>
          </div>
        `;
        const m = L.marker(fac.coords, { icon: icon }).bindPopup(popupContent).addTo(this.healthMap);
        markers.push(m);
      });
    } else if (city.healthcare && city.healthcare.hospitalCoords) {
      const m = L.marker(city.healthcare.hospitalCoords, { icon: hospitalIcon })
        .bindPopup(`<strong>${city.healthcare.mainHospital}</strong>`)
        .addTo(this.healthMap);
      markers.push(m);
    }

    if (markers.length > 1) {
      const group = L.featureGroup(markers);
      this.healthMap.fitBounds(group.getBounds().pad(0.2));
    }
  }

  renderContent(city) {
    const container = document.getElementById('modal-dynamic-content');
    if (!container) return;

    container.innerHTML = `
      <!-- Hero de la Ciudad -->
      <div class="modal-hero">
        <img src="${city.heroImage}" alt="${city.name}" class="modal-hero-img">
        <div class="modal-hero-gradient">
          <div style="font-size:0.85rem;text-transform:uppercase;letter-spacing:0.06em;color:#38bdf8;font-weight:700;">
            ${city.province} • ${city.region}
          </div>
          <h1 class="modal-title">${city.name}</h1>
          <div class="modal-subtitle">${city.summary}</div>
          <div class="modal-badges">
            ${city.tags.map(t => `<span class="modal-badge-pill">✓ ${t}</span>`).join('')}
            <span class="modal-badge-pill" style="background:rgba(16, 185, 129, 0.3);border:1px solid #10b981;">
              €/m² medio: ${city.priceM2} €
            </span>
          </div>
        </div>
      </div>

      <!-- Barra de Pestañas -->
      <div class="modal-tabs">
        <button class="modal-tab-btn active" data-tab="tab-housing">🏠 Vivienda & Hipoteca</button>
        <button class="modal-tab-btn" data-tab="tab-healthcare">🏥 Sanidad & Hospitales</button>
        <button class="modal-tab-btn" data-tab="tab-economy">💼 Negocios & Empleo</button>
        <button class="modal-tab-btn" data-tab="tab-markets">🛒 Mercados & Coste de Vida</button>
        <button class="modal-tab-btn" data-tab="tab-demographics">👥 Demografía & Clima</button>
        <button class="modal-tab-btn" data-tab="tab-connectivity">🚄 Conectividad & Viajes</button>
      </div>

      <!-- Cuerpo del Modal con Contenido por Pestaña -->
      <div class="modal-body">
        
        <!-- PESTAÑA 1: VIVIENDA & HIPOTECA -->
        <div class="tab-pane active" id="tab-housing">
          <div class="detail-grid">
            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">💰</div>
                <div class="detail-card-title">Precios de Compra</div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Precio metro cuadrado:</span>
                <strong style="color:#059669;font-size:1rem;">${city.priceM2} €/m²</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Piso medio (85 m²):</span>
                <strong style="color:#2563eb;font-size:1rem;">${city.avgFlatPrice.toLocaleString('es-ES')} €</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Tendencia de precio:</span>
                <strong>${city.housing.priceTrend}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:#64748b;font-size:0.88rem;">Rentabilidad alquiler bruto:</span>
                <strong style="color:#d97706;">${city.housing.rentalYield}</strong>
              </div>
            </div>

            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">🔑</div>
                <div class="detail-card-title">Situación Inmobiliaria</div>
              </div>
              <p class="detail-text">${city.housing.description}</p>
            </div>
          </div>

          <!-- Simulador de Hipoteca Interactivo -->
          <div class="mortgage-box">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
              <div>
                <span style="text-transform:uppercase;font-size:0.75rem;letter-spacing:0.06em;color:#94a3b8;font-weight:700;">
                  SIMULADOR HIPOTECARIO EN ${city.name.toUpperCase()}
                </span>
                <h3 style="font-size:1.35rem;font-weight:700;margin-top:2px;">Calcula tu cuota mensual estimada</h3>
              </div>
              <div style="text-align:right;">
                <span style="font-size:0.75rem;color:#94a3b8;display:block;">Cuota mensual estimada:</span>
                <div class="mortgage-result-badge" id="sim-result-payment">${city.estimatedMortgage} € / mes</div>
              </div>
            </div>

            <div class="simulator-controls">
              <div class="sim-input-group">
                <label for="sim-price">Precio Vivienda (€)</label>
                <input type="number" id="sim-price" step="1000" min="20000" max="500000" inputmode="numeric">
              </div>
              <div class="sim-input-group">
                <label for="sim-downpayment">Entrada / Ahorro inicial (%)</label>
                <input type="number" id="sim-downpayment" value="20" min="0" max="80" step="5" inputmode="numeric">
              </div>
              <div class="sim-input-group">
                <label for="sim-years">Plazo de amortización</label>
                <select id="sim-years">
                  <option value="15">15 años</option>
                  <option value="20">20 años</option>
                  <option value="25" selected>25 años</option>
                  <option value="30">30 años</option>
                </select>
              </div>
              <div class="sim-input-group">
                <label for="sim-interest">Interés fijo anual (%)</label>
                <input type="number" id="sim-interest" value="2.8" step="0.1" min="0.5" max="10" inputmode="decimal">
              </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));gap:1rem;margin-top:1.25rem;padding-top:1.25rem;border-top:1px solid #334155;font-size:0.85rem;">
              <div>
                <span style="color:#94a3b8;display:block;">Aportación de entrada:</span>
                <strong id="sim-result-down">-- €</strong>
              </div>
              <div>
                <span style="color:#94a3b8;display:block;">Importe del préstamo:</span>
                <strong id="sim-result-loan">-- €</strong>
              </div>
              <div>
                <span style="color:#94a3b8;display:block;">Total intereses estimados:</span>
                <strong id="sim-result-interest" style="color:#fde047;">-- €</strong>
              </div>
            </div>
          </div>

          ${city.idealistaListings && city.idealistaListings.length > 0 ? `
            <div class="idealista-section">
              <div class="idealista-header">
                <div>
                  <h4 style="font-size:1.15rem;font-weight:700;color:#0f172a;margin-bottom:2px;">
                    🔥 5 Oportunidades de Vivienda en Venta
                  </h4>
                  <p style="font-size:0.85rem;color:#64748b;">
                    Inmuebles destacados en ${city.name} con enlace directo
                  </p>
                </div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                  <div class="idealista-brand-badge">
                    <span>🏠 Idealista</span>
                  </div>
                  <a href="https://www.fotocasa.es/es/comprar/viviendas/${encodeURIComponent(city.name.toLowerCase())}/todas-las-zonas/l" target="_blank" rel="noreferrer noopener" style="font-size:0.75rem;color:#475569;text-decoration:none;padding:4px 9px;border:1px solid #cbd5e1;border-radius:6px;background:white;font-weight:600;display:inline-flex;align-items:center;gap:4px;" title="Ver ofertas también en Fotocasa">
                    <span>🏢</span> Ver en Fotocasa ↗
                  </a>
                </div>
              </div>

              <div class="idealista-grid">
                ${city.idealistaListings.map(listing => `
                  <div class="idealista-card">
                    <div class="idealista-card-img-wrap">
                      <img src="${listing.image}" alt="${listing.title}" loading="lazy">
                      <div class="idealista-card-price-badge">
                        ${listing.price.toLocaleString('es-ES')} €
                      </div>
                    </div>
                    <div class="idealista-card-body">
                      <div class="idealista-card-title" title="${listing.title}">
                        ${listing.title}
                      </div>
                      <div class="idealista-card-features">
                        <span class="idealista-feat-pill">📐 ${listing.m2} m²</span>
                        <span class="idealista-feat-pill">🛏️ ${listing.rooms} habs</span>
                        <span class="idealista-feat-pill">🚿 ${listing.baths} ${listing.baths === 1 ? 'baño' : 'baños'}</span>
                        <span class="idealista-feat-pill">🏢 ${listing.floor}</span>
                      </div>
                      <a href="${listing.url}" target="_blank" rel="noopener noreferrer" class="idealista-card-btn">
                        Ver oferta en Idealista ↗
                      </a>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Galería Fotográfica de la Ciudad y Entorno Turístico -->
          <div style="margin-top:2rem;">
            <h4 style="margin-bottom:0.75rem;font-size:1.15rem;font-weight:700;color:#0f172a;">
              📸 Imágenes del lugar, patrimonio y entorno turístico
            </h4>
            <div class="modal-gallery-grid">
              ${city.images.map(img => `
                <div class="gallery-item">
                  <img src="${img}" alt="${city.name}" loading="lazy">
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- PESTAÑA 2: SANIDAD & HOSPITALES -->
        <div class="tab-pane" id="tab-healthcare">
          <div class="detail-grid">
            <div class="detail-card">
              ${city.healthcare.hospitalImage ? `
                <div class="health-card-media">
                  <img src="${city.healthcare.hospitalImage}" alt="${city.healthcare.mainHospital}" loading="lazy">
                </div>
              ` : ''}
              <div class="detail-card-header">
                <div class="detail-icon-wrap" style="background:#fee2e2;color:#ef4444;">🏥</div>
                <div class="detail-card-title">Hospital de Referencia</div>
              </div>
              <p style="font-weight:700;color:#0f172a;margin-bottom:0.5rem;font-size:0.95rem;">
                ${city.healthcare.mainHospital}
              </p>
              <p class="detail-text">${city.healthcare.description}</p>
            </div>

            <div class="detail-card">
              ${city.healthcare.healthCenterImage ? `
                <div class="health-card-media">
                  <img src="${city.healthcare.healthCenterImage}" alt="Red de Atención y Urgencias" loading="lazy">
                </div>
              ` : ''}
              <div class="detail-card-header">
                <div class="detail-icon-wrap" style="background:#d1fae5;color:#10b981;">🚑</div>
                <div class="detail-card-title">Red de Atención y Urgencias</div>
              </div>
              <div style="margin-bottom:0.5rem;">
                <span style="color:#64748b;font-size:0.85rem;display:block;">Centros de Salud de Atención Primaria:</span>
                <strong style="font-size:1.1rem;color:#0f172a;">${city.healthcare.healthCentersCount} centros en el municipio</strong>
              </div>
              <div style="margin-top:0.75rem;">
                <span style="color:#64748b;font-size:0.85rem;display:block;">Dispositivos de Urgencias:</span>
                <p class="detail-text">${city.healthcare.emergencyServices}</p>
              </div>
            </div>
          </div>

          <!-- Minimapa Interactivo de Centros Sanitarios -->
          <div class="health-map-wrapper">
            <div class="health-map-header">
              <div>
                <h4 style="font-size:1.05rem;font-weight:700;color:#0f172a;margin-bottom:2px;">
                  🗺️ Mapa de Infraestructuras Sanitarias en ${city.name}
                </h4>
                <p style="font-size:0.82rem;color:#64748b;">
                  Ubicación exacta del hospital comarcal y centros de atención médica de urgencia
                </p>
              </div>
              <div class="health-map-legend">
                <div class="health-legend-item">
                  <span class="health-legend-badge-h">H</span>
                  <span>Hospital</span>
                </div>
                <div class="health-legend-item">
                  <span class="health-legend-badge-a">A</span>
                  <span>Atención / Urgencias</span>
                </div>
              </div>
            </div>
            <div id="healthcare-mini-map"></div>
          </div>
        </div>

        <!-- PESTAÑA 3: NEGOCIOS & EMPLEO -->
        <div class="tab-pane" id="tab-economy">
          <div class="detail-grid">
            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">💼</div>
                <div class="detail-card-title">Estructura Empresarial y Polígonos</div>
              </div>
              <p class="detail-text" style="margin-bottom:0.75rem;"><strong>Sectores clave:</strong> ${city.economyAndBusiness.mainIndustries}</p>
              <p class="detail-text" style="margin-bottom:0.75rem;"><strong>Parques Industriales:</strong> ${city.economyAndBusiness.industrialParks}</p>
              <p class="detail-text">${city.economyAndBusiness.description}</p>
            </div>

            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">💻</div>
                <div class="detail-card-title">Empleo y Teletrabajo</div>
              </div>
              <div style="margin-bottom:0.75rem;">
                <span style="color:#64748b;font-size:0.85rem;display:block;">Salario medio bruto estimado:</span>
                <strong style="color:#059669;font-size:1.05rem;">${city.employmentAndJobs.avgSalaryRange}</strong>
              </div>
              <p class="detail-text" style="margin-bottom:0.75rem;">${city.employmentAndJobs.description}</p>
              <div>
                <span style="color:#64748b;font-size:0.85rem;display:block;margin-bottom:4px;">Espacios de Coworking disponibles:</span>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">
                  ${city.employmentAndJobs.coworkingSpaces.map(c => `<span class="tag-pill highlight">${c}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PESTAÑA 4: MERCADOS & COSTE DE VIDA -->
        <div class="tab-pane" id="tab-markets">
          <div class="detail-grid">
            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">🥬</div>
                <div class="detail-card-title">Mercados de Abastos Locales</div>
              </div>
              <p class="detail-text" style="margin-bottom:0.75rem;"><strong>Mercado Municipal:</strong> ${city.marketsAndGroceries.municipalMarkets}</p>
              <p class="detail-text"><strong>Cadena de supermercados:</strong> ${city.marketsAndGroceries.supermarkets}</p>
            </div>

            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">🏷️</div>
                <div class="detail-card-title">Coste de la Cesta de la Compra</div>
              </div>
              <div style="margin-bottom:0.75rem;">
                <span style="color:#64748b;font-size:0.85rem;display:block;">Índice de Ahorro:</span>
                <p class="detail-text" style="font-weight:600;color:#059669;">${city.marketsAndGroceries.groceryCostIndex}</p>
              </div>
              <div style="background:#f1f5f9;padding:0.75rem;border-radius:8px;">
                <span style="font-size:0.8rem;color:#475569;display:block;">Puntuación Global de Coste de Vida:</span>
                <div style="display:flex;align-items:center;gap:10px;margin-top:4px;">
                  <div style="flex:1;height:8px;background:#cbd5e1;border-radius:4px;overflow:hidden;">
                    <div style="width:${city.costOfLivingScore * 10}%;height:100%;background:#10b981;"></div>
                  </div>
                  <strong style="color:#0f172a;">${city.costOfLivingScore} / 10</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PESTAÑA 5: DEMOGRAFÍA & CLIMA -->
        <div class="tab-pane" id="tab-demographics">
          <div class="detail-grid">
            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">👥</div>
                <div class="detail-card-title">Datos Poblacionales</div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Población censada:</span>
                <strong>${city.demographics.population.toLocaleString('es-ES')} hab.</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Densidad demográfica:</span>
                <strong>${city.demographics.density}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Edad media de la población:</span>
                <strong>${city.demographics.averageAge} años</strong>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:#64748b;font-size:0.88rem;">Población extranjera:</span>
                <strong style="color:#2563eb;">${city.demographics.foreignPopulationPct}</strong>
              </div>
            </div>

            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">☀️</div>
                <div class="detail-card-title">Clima y Horas de Sol</div>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Días de sol al año:</span>
                <strong style="color:#d97706;font-size:1.05rem;">☀️ ${city.demographics.climate.sunnyDays} días</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Temperatura media Verano:</span>
                <strong>${city.demographics.climate.avgTempSummer}</strong>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
                <span style="color:#64748b;font-size:0.88rem;">Temperatura media Invierno:</span>
                <strong>${city.demographics.climate.avgTempWinter}</strong>
              </div>
              <p class="detail-text" style="margin-top:6px;">${city.demographics.climate.description}</p>
            </div>
          </div>

          ${city.demographics.climate.monthlyTemps ? `
          <div class="detail-card" style="margin-top:1rem;">
            <div class="detail-card-header">
              <div class="detail-icon-wrap">📊</div>
              <div class="detail-card-title">Temperatura Promedio por Mes (°C)</div>
            </div>
            ${(() => {
              const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
              const temps = city.demographics.climate.monthlyTemps;
              const maxT = Math.max(...temps);
              const minT = Math.min(...temps);
              const chartH = 90;
              const padTop = 18;
              const barW = 28;
              const gap = 12;
              const totalW = months.length * (barW + gap) - gap;
              const svgH = chartH + padTop + 24;

              const getColor = (t) => {
                if (t <= 8) return '#60a5fa';
                if (t <= 14) return '#34d399';
                if (t <= 22) return '#fbbf24';
                return '#f87171';
              };

              const bars = temps.map((t, i) => {
                const barH = Math.max(6, Math.round((t - minT + 2) / (maxT - minT + 2) * chartH));
                const x = i * (barW + gap);
                const y = padTop + chartH - barH;
                const color = getColor(t);
                return `
                  <g>
                    <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="5" fill="${color}" opacity="0.85"/>
                    <text x="${x + barW/2}" y="${y - 5}" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">${t}°</text>
                    <text x="${x + barW/2}" y="${svgH - 8}" text-anchor="middle" font-size="9" fill="#64748b">${months[i]}</text>
                  </g>`;
              }).join('');

              return `<div style="overflow-x:auto;">
                <svg viewBox="0 0 ${totalW} ${svgH}" width="100%" style="display:block;max-width:100%;">
                  ${bars}
                </svg>
                <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;font-size:0.75rem;color:#64748b;">
                  <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#60a5fa;"></span>Frío (≤8°C)</span>
                  <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#34d399;"></span>Templado (9-14°C)</span>
                  <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#fbbf24;"></span>Agradable (15-22°C)</span>
                  <span style="display:flex;align-items:center;gap:4px;"><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:#f87171;"></span>Caluroso (≥23°C)</span>
                </div>
              </div>`;
            })()}
          </div>
          ` : ''}

          <div class="detail-card" style="margin-top:1rem;">
            <div class="detail-card-header">
                <div class="detail-icon-wrap">🎓</div>
                <div class="detail-card-title">Educación y Espacios Verdes</div>
            </div>
            <p class="detail-text" style="margin-bottom:0.5rem;"><strong>Universidad / Estudios Superiores:</strong> ${city.educationAndCulture.universities}</p>
            <p class="detail-text" style="margin-bottom:0.5rem;"><strong>Centros escolares:</strong> ${city.educationAndCulture.schoolsCount}</p>
            <p class="detail-text"><strong>Parques y Naturaleza:</strong> ${city.educationAndCulture.natureAndParks}</p>
          </div>
        </div>

        <!-- PESTAÑA 6: CONECTIVIDAD & VIAJES -->
        <div class="tab-pane" id="tab-connectivity">
          <div class="detail-grid">
            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">🚄</div>
                <div class="detail-card-title">Red Ferroviaria</div>
              </div>
              <div style="margin-bottom:0.75rem;">
                <span style="color:#64748b;font-size:0.8rem;display:block;">Estación de tren:</span>
                <strong>${city.transportAndConnectivity.trainStation}</strong>
              </div>
              ${(() => {
                const labelMap = {
                  travelTimeToMadrid: 'Tiempo de viaje a Madrid',
                  travelTimeToSevilla: 'Tiempo de viaje a Sevilla',
                  travelTimeToAlicanteBeach: 'Tiempo a Playas / Costa',
                  travelTimeToLeon: 'Tiempo de viaje a León',
                  travelTimeToJaen: 'Tiempo de viaje a Jaén',
                  travelTimeToGranada: 'Tiempo de viaje a Granada',
                  travelTimeToValladolid: 'Tiempo de viaje a Valladolid',
                  travelTimeToCoruna: 'Tiempo de viaje a A Coruña',
                  travelTimeToSantiago: 'Tiempo de viaje a Santiago',
                  travelTimeToAlicante: 'Tiempo de viaje a Alicante',
                  travelTimeToValencia: 'Tiempo de viaje a Valencia',
                  travelTimeToBarcelona: 'Tiempo de viaje a Barcelona',
                  travelTimeToMurcia: 'Tiempo de viaje a Murcia',
                  travelTimeToAguilasBeach: 'Tiempo a Playas de Águilas',
                  travelTimeToMalaga: 'Tiempo de viaje a Málaga',
                  travelTimeToCadiz: 'Tiempo de viaje a Cádiz'
                };
                const entries = Object.entries(city.transportAndConnectivity)
                  .filter(([k, v]) => k.startsWith('travelTime') && typeof v === 'string');
                if (!entries.length) return '';
                return entries.map(([k, val]) => `
                  <div style="background:#eff6ff;padding:0.75rem;border-radius:8px;margin-bottom:0.75rem;">
                    <span style="color:#1d4ed8;font-size:0.8rem;display:block;font-weight:600;">${labelMap[k] || 'Tiempo de viaje'}:</span>
                    <strong style="color:#1e40af;font-size:1.05rem;">⏱️ ${val}</strong>
                  </div>
                `).join('');
              })()}
            </div>

            <div class="detail-card">
              <div class="detail-card-header">
                <div class="detail-icon-wrap">🚗</div>
                <div class="detail-card-title">Carreteras y Aeropuertos</div>
              </div>
              <p class="detail-text" style="margin-bottom:0.75rem;"><strong>Autovías y accesos:</strong> ${city.transportAndConnectivity.highways}</p>
              <p class="detail-text"><strong>Aeropuerto más cercano:</strong> ${city.transportAndConnectivity.nearestAirport}</p>
            </div>
          </div>

          ${city.transportAndConnectivity.busRoutes ? `
            <div class="bus-routes-section">
              <div class="bus-routes-card">
                <div class="bus-routes-header">
                  <div class="bus-routes-title-group">
                    <div class="detail-icon-wrap" style="background:#e0e7ff;color:#4338ca;font-size:1.2rem;">🚌</div>
                    <div>
                      <div class="detail-card-title" style="color:#1e1b4b;font-size:1.05rem;">Rutas Oficiales de Autobuses y Horarios</div>
                      <div style="color:#64748b;font-size:0.82rem;">Líneas oficiales regulares, operadores y frecuencias horarias</div>
                    </div>
                  </div>
                  ${city.transportAndConnectivity.busRoutes.station ? `
                    <div class="bus-station-pill">
                      <span>📍</span>
                      <span>${city.transportAndConnectivity.busRoutes.station}</span>
                    </div>
                  ` : ''}
                </div>

                <div class="bus-grid">
                  ${(city.transportAndConnectivity.busRoutes.mainLines || []).map(line => {
                    let badgeClass = 'bus-badge-default';
                    if (line.type === 'Nacional') badgeClass = 'bus-badge-nacional';
                    else if (line.type === 'Regional') badgeClass = 'bus-badge-regional';
                    else if (line.type === 'Urbano') badgeClass = 'bus-badge-urbano';

                    return `
                      <div class="bus-line-card">
                        <div>
                          <div class="bus-line-card-header">
                            <span class="bus-destination">${line.destination}</span>
                            <span class="bus-badge ${badgeClass}">${line.type || 'Línea'}</span>
                          </div>

                          <div class="bus-operator-row">
                            <span style="color:#64748b;">🏢 Operador:</span>
                            <strong style="color:#1e293b;">${line.company}</strong>
                          </div>
                        </div>

                        <div class="bus-details-grid">
                          <div class="bus-detail-item">
                            <span class="bus-detail-label">⏱️ Duración</span>
                            <span class="bus-detail-val">${line.duration}</span>
                          </div>
                          <div class="bus-detail-item">
                            <span class="bus-detail-label">🔄 Frecuencia</span>
                            <span class="bus-detail-val">${line.frequency}</span>
                          </div>
                          <div class="bus-detail-item full-width">
                            <span class="bus-detail-label">🕒 Horario estimado salidas</span>
                            <span class="bus-detail-val" style="color:#2563eb;">${line.firstLastDepartures}</span>
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>

                <div class="bus-notice-box">
                  <span style="font-size:1.1rem;">💡</span>
                  <div>
                    <strong>Información de Servicio:</strong> Los horarios y frecuencias corresponden a las concesiones oficiales regulares (lunes a domingo). Consulta en las taquillas de la estación de autobuses o plataformas oficiales de los operadores para refuerzos en días festivos y venta anticipada de billetes.
                  </div>
                </div>
              </div>
            </div>
          ` : ''}
        </div>

      </div>
    `;

    // Asignar listeners a las pestañas del modal
    const tabs = container.querySelectorAll('.modal-tab-btn');
    const panes = container.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        try {
          tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } catch (e) {}

        const tabId = tab.getAttribute('data-tab');
        const targetPane = container.querySelector(`#${tabId}`);
        if (targetPane) targetPane.classList.add('active');

        // Si se abre la pestaña de Sanidad, inicializar o redibujar el minimapa
        if (tabId === 'tab-healthcare') {
          this.initHealthcareMap(city);
          setTimeout(() => {
            if (this.healthMap) {
              this.healthMap.invalidateSize();
            }
          }, 150);
        }
      });
    });
  }
}

if (typeof window !== 'undefined') {
  window.CityModalManager = CityModalManager;
}
