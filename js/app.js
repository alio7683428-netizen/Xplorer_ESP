// Controlador Principal de la Aplicación Xplorer España
const CITIES_DATA = window.CITIES_DATA || [];

class XplorerApp {
  constructor() {
    this.cities = [...CITIES_DATA];
    this.filteredCities = [...CITIES_DATA];
    
    // Estado de filtros y vista
    this.state = {
      searchQuery: '',
      maxPrice: 'all',
      region: 'all',
      activeFilterChips: new Set(),
      sortBy: 'price-asc',
      viewMode: 'split', // 'split' | 'grid' | 'map'
      favorites: this.loadFavorites()
    };

    // Gestores de componentes
    this.modal = new CityModalManager('city-detail-modal');
    this.comparator = new CityComparatorManager('comparator-modal', this.cities);
    this.mapManager = new SpainMapManager('map', (cityId) => {
      this.highlightCard(cityId);
    });

    this.initDOMReferences();
    this.bindEvents();
    this.populateRegionFilter();
    this.render();
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('xplorer_esp_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('xplorer_esp_favorites', JSON.stringify(this.state.favorites));
    } catch (e) {}
  }

  toggleFavorite(cityId, event) {
    if (event) event.stopPropagation();
    const index = this.state.favorites.indexOf(cityId);
    if (index > -1) {
      this.state.favorites.splice(index, 1);
    } else {
      this.state.favorites.push(cityId);
    }
    this.saveFavorites();
    this.renderCards();
    this.updateFavCounter();
  }

  initDOMReferences() {
    this.searchInput = document.getElementById('search-input');
    this.mobileSearchInput = document.getElementById('mobile-search-input');
    this.priceSelect = document.getElementById('filter-price');
    this.regionSelect = document.getElementById('filter-region');
    this.sortSelect = document.getElementById('sort-select');
    this.cardsContainer = document.getElementById('cities-grid');
    this.resultsCountEl = document.getElementById('results-count');
    this.filterChips = document.querySelectorAll('.filter-chip');
    this.viewButtons = document.querySelectorAll('.view-btn');
    this.mainContainer = document.querySelector('.main-content');
    this.openComparatorBtn = document.getElementById('btn-open-comparator');
    this.favCounterEl = document.getElementById('fav-counter');
    this.mobileFab = document.getElementById('mobile-view-fab');
  }

  populateRegionFilter() {
    if (!this.regionSelect) return;
    const regions = [...new Set(this.cities.map(c => c.region))].sort();
    regions.forEach(region => {
      const opt = document.createElement('option');
      opt.value = region;
      opt.textContent = region;
      this.regionSelect.appendChild(opt);
    });
  }

  bindEvents() {
    // Sincronización de buscador (Desktop y Móvil)
    const handleSearch = (e) => {
      const val = e.target.value;
      this.state.searchQuery = val.toLowerCase().trim();
      if (this.searchInput && this.searchInput !== e.target) this.searchInput.value = val;
      if (this.mobileSearchInput && this.mobileSearchInput !== e.target) this.mobileSearchInput.value = val;
      this.applyFilters();
    };

    if (this.searchInput) {
      this.searchInput.addEventListener('input', handleSearch);
    }

    if (this.mobileSearchInput) {
      this.mobileSearchInput.addEventListener('input', handleSearch);
    }

    // Filtro de precio máximo por m²
    if (this.priceSelect) {
      this.priceSelect.addEventListener('change', (e) => {
        this.state.maxPrice = e.target.value;
        this.applyFilters();
      });
    }

    // Filtro de Comunidad Autónoma
    if (this.regionSelect) {
      this.regionSelect.addEventListener('change', (e) => {
        this.state.region = e.target.value;
        this.applyFilters();
      });
    }

    // Ordenación
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', (e) => {
        this.state.sortBy = e.target.value;
        this.applySorting();
        this.renderCards();
      });
    }

    // Chips de filtrado rápido (AVE, Hospital, Costa, Favoritos)
    this.filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const filterType = chip.getAttribute('data-filter');
        if (this.state.activeFilterChips.has(filterType)) {
          this.state.activeFilterChips.delete(filterType);
          chip.classList.remove('active');
        } else {
          this.state.activeFilterChips.add(filterType);
          chip.classList.add('active');
        }
        this.applyFilters();
      });
    });

    // Conmutador de vistas (Split / Cuadrícula / Mapa)
    this.viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-view');
        this.setViewMode(mode);
      });
    });

    // Botón Flotante para Móviles (FAB)
    if (this.mobileFab) {
      this.mobileFab.addEventListener('click', () => {
        if (this.state.viewMode === 'map') {
          this.setViewMode('split');
        } else {
          this.setViewMode('map');
        }
      });
    }

    // Botón abrir comparador
    if (this.openComparatorBtn) {
      this.openComparatorBtn.addEventListener('click', () => {
        this.comparator.open();
      });
    }

    // Reajuste automático en cambios de tamaño y rotación de pantalla
    window.addEventListener('resize', () => {
      this.mapManager.invalidate();
    });

    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.mapManager.invalidate();
      }, 200);
    });
  }

  setViewMode(mode) {
    this.state.viewMode = mode;
    this.viewButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === mode);
    });

    if (this.mainContainer) {
      this.mainContainer.classList.remove('view-split-mode', 'view-grid-mode', 'view-map-mode');
      this.mainContainer.classList.add(`view-${mode}-mode`);
    }

    this.updateMobileFab();

    // Invalida tamaño del mapa tras transición CSS
    setTimeout(() => {
      this.mapManager.invalidate();
    }, 200);
  }

  updateMobileFab() {
    if (!this.mobileFab) return;
    if (this.state.viewMode === 'map') {
      this.mobileFab.innerHTML = `<span class="fab-icon">📋</span><span class="fab-text">Ver Lista</span>`;
      this.mobileFab.setAttribute('aria-label', 'Cambiar a vista de lista');
    } else {
      this.mobileFab.innerHTML = `<span class="fab-icon">🗺️</span><span class="fab-text">Ver Mapa</span>`;
      this.mobileFab.setAttribute('aria-label', 'Cambiar a vista de mapa');
    }
  }

  applyFilters() {
    this.filteredCities = this.cities.filter(city => {
      // 1. Búsqueda por texto
      if (this.state.searchQuery) {
        const q = this.state.searchQuery;
        const matchesName = city.name.toLowerCase().includes(q);
        const matchesProvince = city.province.toLowerCase().includes(q);
        const matchesRegion = city.region.toLowerCase().includes(q);
        const matchesTags = city.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesProvince && !matchesRegion && !matchesTags) {
          return false;
        }
      }

      // 2. Precio máximo m²
      if (this.state.maxPrice !== 'all') {
        const max = parseFloat(this.state.maxPrice);
        if (city.priceM2 > max) return false;
      }

      // 3. Comunidad Autónoma
      if (this.state.region !== 'all') {
        if (city.region !== this.state.region) return false;
      }

      // 4. Chips de Servicios
      if (this.state.activeFilterChips.has('ave') && !city.hasAVE) return false;
      if (this.state.activeFilterChips.has('hospital') && !city.hasHospital) return false;
      if (this.state.activeFilterChips.has('coastal') && !city.coastal) return false;
      if (this.state.activeFilterChips.has('favs') && !this.state.favorites.includes(city.id)) return false;

      return true;
    });

    this.applySorting();
    this.render();
  }

  applySorting() {
    switch (this.state.sortBy) {
      case 'price-asc':
        this.filteredCities.sort((a, b) => a.priceM2 - b.priceM2);
        break;
      case 'price-desc':
        this.filteredCities.sort((a, b) => b.priceM2 - a.priceM2);
        break;
      case 'pop-desc':
        this.filteredCities.sort((a, b) => b.demographics.population - a.demographics.population);
        break;
      case 'quality-desc':
        this.filteredCities.sort((a, b) => b.qualityOfLifeScore - a.qualityOfLifeScore);
        break;
    }
  }

  render() {
    this.renderCards();
    this.mapManager.renderMarkers(this.filteredCities);
    this.updateResultsCount();
    this.updateFavCounter();
    this.updateMobileFab();
  }

  updateResultsCount() {
    if (this.resultsCountEl) {
      this.resultsCountEl.innerHTML = `Mostrando <strong>${this.filteredCities.length}</strong> ciudades asequibles para mudarse`;
    }
  }

  updateFavCounter() {
    if (this.favCounterEl) {
      this.favCounterEl.innerText = this.state.favorites.length;
    }
  }

  renderCards() {
    if (!this.cardsContainer) return;

    if (this.filteredCities.length === 0) {
      this.cardsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: white; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <div style="font-size: 2.8rem; margin-bottom: 0.75rem;">🔍</div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #0f172a;">No se encontraron ciudades con esos filtros</h3>
          <p style="color: #64748b; margin-top: 0.4rem; font-size: 0.9rem;">Prueba a ampliar el rango de precio m² o desmarcar algunos filtros de servicios.</p>
          <button class="btn-primary" style="margin-top: 1.25rem;" onclick="window.app.resetFilters()">
            Restablecer todos los filtros
          </button>
        </div>
      `;
      return;
    }

    this.cardsContainer.innerHTML = this.filteredCities.map(city => {
      const isFav = this.state.favorites.includes(city.id);
      const priceClass = city.priceM2 < 750 ? 'badge-green' : (city.priceM2 < 1000 ? 'badge-amber' : 'badge-blue');

      return `
        <article class="city-card" id="card-${city.id}" onclick="window.app.openCityDetails('${city.id}')">
          <div class="card-img-container">
            <img src="${city.heroImage}" alt="${city.name}" class="card-img" loading="lazy">
            <div class="card-badge-price ${priceClass}">
              <span>🏷️</span>
              <span>${city.priceM2} €/m²</span>
            </div>
            <button class="card-favorite-btn ${isFav ? 'active' : ''}" 
                    onclick="window.app.toggleFavorite('${city.id}', event)" 
                    title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
                    aria-label="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#ef4444' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
          </div>

          <div class="card-body">
            <div class="card-title-row">
              <h2 class="city-title">${city.name}</h2>
              <span class="city-province">${city.province}</span>
            </div>

            <p class="city-summary">${city.summary}</p>

            <!-- Estadísticas clave -->
            <div class="card-stats-grid">
              <div class="stat-item">
                <span class="stat-label">Piso ~85m²</span>
                <span class="stat-value" style="color:#2563eb;">${city.avgFlatPrice.toLocaleString('es-ES')} €</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Hipoteca Est.</span>
                <span class="stat-value">${city.estimatedMortgage} €/mes</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Población</span>
                <span class="stat-value">${(city.demographics.population / 1000).toFixed(1)}k hab.</span>
              </div>
            </div>

            <!-- Etiquetas / Tags -->
            <div class="card-tags">
              ${city.tags.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>

            <!-- Acciones Rápidas -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.85rem;padding-top:0.75rem;border-top:1px solid #f1f5f9;gap:6px;">
              <button class="btn-outline" style="padding:6px 10px;font-size:0.78rem;" onclick="window.app.locateOnMap('${city.id}', event)">
                📍 Ver en mapa
              </button>
              <button class="btn-primary" style="padding:6px 12px;font-size:0.8rem;">
                Ficha Completa →
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Sincronizar hover entre tarjetas y mapa
    this.filteredCities.forEach(city => {
      const cardEl = document.getElementById(`card-${city.id}`);
      if (cardEl) {
        cardEl.addEventListener('mouseenter', () => {
          this.mapManager.highlightCity(city.id);
        });
        cardEl.addEventListener('mouseleave', () => {
          this.mapManager.unhighlightCity(city.id);
        });
      }
    });
  }

  locateOnMap(cityId, event) {
    if (event) event.stopPropagation();
    
    // Si estamos en pantallas pequeñas (<768px), pasar a vista mapa
    if (window.innerWidth <= 768) {
      this.setViewMode('map');
      setTimeout(() => {
        this.mapManager.focusCity(cityId, 11);
      }, 300);
    } else {
      this.mapManager.focusCity(cityId);
      if (this.state.viewMode === 'grid') {
        this.setViewMode('split');
        setTimeout(() => {
          this.mapManager.focusCity(cityId);
        }, 300);
      }
    }
  }

  highlightCard(cityId) {
    const card = document.getElementById(`card-${cityId}`);
    if (card) {
      document.querySelectorAll('.city-card').forEach(c => c.classList.remove('highlighted'));
      card.classList.add('highlighted');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  openCityDetails(cityId) {
    const city = this.cities.find(c => c.id === cityId);
    if (city) {
      this.modal.open(city);
    }
  }

  resetFilters() {
    this.state.searchQuery = '';
    this.state.maxPrice = 'all';
    this.state.region = 'all';
    this.state.activeFilterChips.clear();
    
    if (this.searchInput) this.searchInput.value = '';
    if (this.mobileSearchInput) this.mobileSearchInput.value = '';
    if (this.priceSelect) this.priceSelect.value = 'all';
    if (this.regionSelect) this.regionSelect.value = 'all';
    this.filterChips.forEach(c => c.classList.remove('active'));

    this.applyFilters();
  }
}

// Inicialización global
document.addEventListener('DOMContentLoaded', () => {
  window.app = new XplorerApp();
});
