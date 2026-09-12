// Comparador de Ciudades frente a frente con soporte responsive táctil y columna fija
class CityComparatorManager {
  constructor(modalOverlayId, allCities) {
    this.overlay = document.getElementById(modalOverlayId);
    this.allCities = allCities;
    this.selectedCityIds = ["puertollano", "elda-petrer", "zamora"]; // Ciudades preseleccionadas por defecto
    this.initEvents();
  }

  initEvents() {
    // Cerrar al pulsar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay && this.overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Cerrar al pulsar el fondo o botón
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

  open(preselectedId = null) {
    if (preselectedId && !this.selectedCityIds.includes(preselectedId)) {
      if (this.selectedCityIds.length >= 3) {
        this.selectedCityIds.pop();
      }
      this.selectedCityIds.push(preselectedId);
    }
    this.render();
    if (this.overlay) {
      this.overlay.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.overlay) {
      this.overlay.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  addCity(cityId) {
    if (!this.selectedCityIds.includes(cityId) && this.selectedCityIds.length < 3) {
      this.selectedCityIds.push(cityId);
      this.render();
    }
  }

  removeCity(cityId) {
    if (this.selectedCityIds.length > 1) {
      this.selectedCityIds = this.selectedCityIds.filter(id => id !== cityId);
      this.render();
    }
  }

  render() {
    const container = document.getElementById('comparator-content');
    if (!container) return;

    const citiesToCompare = this.selectedCityIds.map(id => this.allCities.find(c => c.id === id)).filter(Boolean);

    // Encontrar mínimos para destacar
    const minPriceM2 = Math.min(...citiesToCompare.map(c => c.priceM2));

    container.innerHTML = `
      <div style="padding: 1.5rem 1.25rem 0.75rem 1.25rem;">
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a;">Comparador de Ciudades</h2>
        <p style="color: #64748b; font-size: 0.88rem; margin-top: 2px;">
          Compara precios de compra, servicios, hospitales y oportunidades laborales para tomar la mejor decisión.
        </p>

        <!-- Selector de ciudades -->
        <div style="display:flex;align-items:center;gap:10px;margin-top:1rem;flex-wrap:wrap;">
          <span style="font-size:0.85rem;font-weight:600;color:#334155;">Añadir ciudad (máx 3):</span>
          <select id="comparator-add-select" class="filter-select" style="min-width:200px;max-width:100%;">
            <option value="">-- Seleccionar otra ciudad --</option>
            ${this.allCities
              .filter(c => !this.selectedCityIds.includes(c.id))
              .map(c => `<option value="${c.id}">${c.name} (${c.priceM2} €/m²)</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="comparator-table-wrap" style="padding: 0.5rem 1.25rem 2rem 1.25rem;">
        <table class="comparator-table">
          <thead>
            <tr>
              <th style="width:28%;min-width:140px;">Métrica / Indicador</th>
              ${citiesToCompare.map(c => `
                <th style="width:${72 / citiesToCompare.length}%;min-width:170px;">
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
                    <div>
                      <strong style="font-size:1.05rem;color:#0f172a;">${c.name}</strong>
                      <div style="font-size:0.75rem;color:#64748b;font-weight:normal;">${c.province} (${c.region})</div>
                    </div>
                    ${citiesToCompare.length > 1 ? `
                      <button class="remove-city-btn" data-id="${c.id}" style="background:transparent;border:none;cursor:pointer;color:#94a3b8;font-size:1.2rem;padding:4px;" title="Quitar de la comparativa" aria-label="Quitar ${c.name}">
                        ✕
                      </button>
                    ` : ''}
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Precio medio / m²</strong></td>
              ${citiesToCompare.map(c => `
                <td class="${c.priceM2 === minPriceM2 ? 'winner-highlight' : ''}">
                  <strong style="font-size:1.05rem;">${c.priceM2} €/m²</strong>
                  ${c.priceM2 === minPriceM2 ? '<span style="font-size:0.75rem;display:block;color:#059669;">★ Más económico</span>' : ''}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Piso de 85 m² (estimado)</strong></td>
              ${citiesToCompare.map(c => `
                <td><strong style="color:#2563eb;">${c.avgFlatPrice.toLocaleString('es-ES')} €</strong></td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Cuota hipoteca aprox. (25 años)</strong></td>
              ${citiesToCompare.map(c => `
                <td><strong>${c.estimatedMortgage} € / mes</strong></td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Conexión AVE directo</strong></td>
              ${citiesToCompare.map(c => `
                <td>${c.hasAVE ? '🚄 <strong>Sí (Alta Velocidad)</strong>' : '❌ No'}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Hospital de referencia</strong></td>
              ${citiesToCompare.map(c => `
                <td style="font-size:0.85rem;">🏥 ${c.healthcare.mainHospital}</td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Población & Clima</strong></td>
              ${citiesToCompare.map(c => `
                <td style="font-size:0.85rem;">
                  <div>👥 ${c.demographics.population.toLocaleString('es-ES')} hab.</div>
                  <div style="margin-top:4px;">☀️ <strong>${c.demographics.climate.sunnyDays} días</strong> de sol</div>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Sectores Laborales</strong></td>
              ${citiesToCompare.map(c => `
                <td style="font-size:0.82rem;color:#334155;">
                  ${c.employmentAndJobs.topSectors.join(', ')}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Salario medio bruto</strong></td>
              ${citiesToCompare.map(c => `
                <td style="font-size:0.85rem;color:#059669;font-weight:600;">
                  ${c.employmentAndJobs.avgSalaryRange}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Coste de Vida</strong></td>
              ${citiesToCompare.map(c => `
                <td>
                  <strong style="color:#10b981;font-size:1.05rem;">${c.costOfLivingScore} / 10</strong>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td><strong>Ficha Completa</strong></td>
              ${citiesToCompare.map(c => `
                <td>
                  <button class="btn-primary" style="padding:6px 12px;font-size:0.8rem;width:100%;justify-content:center;" onclick="window.app.openCityDetails('${c.id}')">
                    Ver Ficha
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    // Eventos de quitar ciudad
    container.querySelectorAll('.remove-city-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cityId = e.currentTarget.getAttribute('data-id');
        this.removeCity(cityId);
      });
    });

    // Evento selector añadir ciudad
    const select = container.querySelector('#comparator-add-select');
    if (select) {
      select.addEventListener('change', (e) => {
        if (e.target.value) {
          this.addCity(e.target.value);
        }
      });
    }
  }
}

if (typeof window !== 'undefined') {
  window.CityComparatorManager = CityComparatorManager;
}
