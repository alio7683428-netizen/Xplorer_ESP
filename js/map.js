// Gestor del Mapa Interactivo de España con Leaflet
class SpainMapManager {
  constructor(containerId, onCitySelectCallback) {
    this.containerId = containerId;
    this.onCitySelect = onCitySelectCallback;
    this.map = null;
    this.markersMap = new Map(); // id -> L.marker
    this.initMap();
  }

  initMap() {
    // Coordenadas centrales de España peninsular
    const SPAIN_CENTER = [39.9, -3.7];
    const DEFAULT_ZOOM = 6;

    this.map = L.map(this.containerId, {
      center: SPAIN_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: true,
      minZoom: 5,
      maxZoom: 17
    });

    // Capa base CartoDB Voyager para una estética limpia, luminosa y moderna
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    // Ajustar mapa en caso de cambios de tamaño
    setTimeout(() => {
      this.map.invalidateSize();
    }, 250);
  }

  // Determinar color y clase de precio
  getPriceClass(priceM2) {
    if (priceM2 < 750) return 'marker-price-green';
    if (priceM2 < 1000) return 'marker-price-amber';
    return 'marker-price-blue';
  }

  // Renderizar marcadores de una lista de ciudades
  renderMarkers(cities) {
    // Eliminar marcadores previos
    this.markersMap.forEach(marker => this.map.removeLayer(marker));
    this.markersMap.clear();

    if (!cities || cities.length === 0) return;

    const bounds = L.latLngBounds();

    cities.forEach(city => {
      const priceClass = this.getPriceClass(city.priceM2);
      
      const customIcon = L.divIcon({
        className: 'custom-leaflet-div-icon',
        html: `
          <div class="custom-map-marker ${priceClass}" id="marker-${city.id}">
            <span>${city.name}</span>
            <span style="opacity:0.85;margin-left:5px;font-size:0.74rem;">${city.priceM2}€/m²</span>
          </div>
        `,
        iconSize: [null, null],
        iconAnchor: [60, 16]
      });

      const marker = L.marker(city.coordinates, { icon: customIcon }).addTo(this.map);

      // Contenido del Popup
      const popupContent = `
        <div class="popup-card">
          <img src="${city.heroImage}" alt="${city.name}" class="popup-img">
          <div class="popup-body">
            <div class="popup-title">${city.name}</div>
            <div class="popup-sub">${city.province} (${city.region})</div>
            <div class="popup-metrics">
              <div>
                <span style="color:#64748b;font-size:0.7rem;display:block;">PRECIO M²</span>
                <strong style="color:#0f172a;">${city.priceM2} €/m²</strong>
              </div>
              <div style="text-align:right;">
                <span style="color:#64748b;font-size:0.7rem;display:block;">PISO 85m² (aprox)</span>
                <strong style="color:#2563eb;">${city.avgFlatPrice.toLocaleString('es-ES')} €</strong>
              </div>
            </div>
            <button class="popup-btn" onclick="window.app.openCityDetails('${city.id}')">
              Ver Ficha Completa
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        closeButton: true,
        offset: [0, -10]
      });

      marker.on('click', () => {
        if (this.onCitySelect) {
          this.onCitySelect(city.id);
        }
      });

      this.markersMap.set(city.id, marker);
      bounds.extend(city.coordinates);
    });

    // Si hay varias ciudades y no está bloqueado por el usuario, reajustar vista
    if (cities.length > 1 && bounds.isValid()) {
      this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
    }
  }

  // Destacar un marcador desde la lista de tarjetas
  highlightCity(cityId) {
    const markerEl = document.getElementById(`marker-${cityId}`);
    if (markerEl) {
      markerEl.classList.add('active-marker');
    }
  }

  unhighlightCity(cityId) {
    const markerEl = document.getElementById(`marker-${cityId}`);
    if (markerEl) {
      markerEl.classList.remove('active-marker');
    }
  }

  // Centrar y enfocar una ciudad concreta en el mapa
  focusCity(cityId, zoom = 11) {
    const marker = this.markersMap.get(cityId);
    if (marker) {
      this.map.flyTo(marker.getLatLng(), zoom, {
        animate: true,
        duration: 1.2
      });
      setTimeout(() => {
        marker.openPopup();
      }, 1250);
    }
  }

  invalidate() {
    if (this.map) {
      this.map.invalidateSize();
    }
  }
}

if (typeof window !== 'undefined') {
  window.SpainMapManager = SpainMapManager;
}
