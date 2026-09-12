# 🇪🇸 Xplorer España — Ciudades Asequibles para Vivir y Comprar Piso

Aplicación web interactiva para descubrir, filtrar y explorar las mejores ciudades de España para mudarse donde la compra de vivienda es asequible y existe una óptima calidad de vida y dotación de servicios públicos.

---

## 🌟 Características Principales

### 1. Catálogo de Vivienda Asequible
- Selección curada de ciudades españolas con precios por metro cuadrado extraordinariamente competitivos (desde **520 €/m²** hasta ~1.200 €/m²).
- Precios calculados para un piso medio de 85 m² (viviendas desde 44.000 € hasta ~100.000 €).
- Estimación de cuota hipotecaria mensual orientativa (desde ~165 €/mes).
- Filtros por precio máximo de metro cuadrado, Comunidad Autónoma, conexión de Alta Velocidad (AVE), presencia de Hospital General y cercanía a la costa.
- Ordenación por precio (€/m²), población o calidad de vida.

### 2. Fichas Detalladas y Exhaustivas por Ciudad
Cada ciudad cuenta con una ficha completa estructurada en pestañas temáticas:
- **🏠 Vivienda & Hipoteca**: precios, evolución anual, rentabilidad del alquiler y **Simulador de Hipoteca Interactivo** donde puedes ajustar el precio, la entrada inicial (%), el plazo de amortización (años) y el tipo de interés para recalcular en tiempo real la cuota mensual.
- **🏥 Sanidad & Hospitales**: hospital general de referencia, cartera de especialidades, número de centros de salud y dispositivos de urgencias 24h.
- **💼 Negocios & Empleo**: estructura económica, polígonos empresariales, rangos salariales medios y espacios de coworking para teletrabajadores.
- **🛒 Mercados & Coste de la Vida**: mercados tradicionales de abastos con productos locales frescos, supermercados presentes y comparativa de la cesta de la compra.
- **👥 Demografía & Clima**: censo de población, densidad, edad media, horas anuales de sol, temperaturas medias en verano e invierno, oferta educativa y zonas verdes.
- **🚄 Conectividad & Viajes**: estaciones de tren, tiempos de viaje en AVE / tren rápido a Madrid y capitales, autovías principales, aeropuertos cercanos y **Rutas Oficiales de Autobuses e Interurbanos** (con estación central, líneas nacionales/regionales/urbanas, empresas concesionarias, duración, frecuencias y horarios oficiales).
- **📸 Galería Multimedia**: fotografías de alta calidad de sus calles, monumentos y entornos naturales.

### 3. Mapa Interactivo de España
- Desarrollado con **Leaflet.js** sobre cartografía nítida y moderna de **CartoDB Voyager**.
- Marcadores con etiquetas de precio directo por color (verde < 750 €/m², ámbar 750–1.000 €/m², azul > 1.000 €/m²).
- Sincronización bidireccional: pasar el ratón por una tarjeta del listado resalta el marcador en el mapa y viceversa.
- Modos de visualización intercambiables con un solo clic:
  - **Vista Dividida**: Listado de tarjetas a la izquierda y mapa interactivo a la derecha.
  - **Vista Cuadrícula**: Catálogo completo en rejilla.
  - **Vista Mapa**: Mapa a pantalla completa con navegación ágil.

### 4. Herramienta de Comparación Lado a Lado
- Permite comparar 2 o 3 ciudades simultáneamente en una tabla detallada con indicadores destacados (vivienda, empleo, clima, sanidad y comunicaciones).

---

## 🚀 Cómo Ejecutar la Aplicación

No requiere ninguna instalación previa de Node.js ni compilación.

1. Abre directamente el archivo `index.html` con cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari, etc.).
2. Opcionalmente, puedes servir la carpeta con cualquier servidor local ligero:
   - Con **VS Code**: Clic derecho en `index.html` → *Open with Live Server*.
   - Con **Python**: Abre la terminal en la carpeta y ejecuta:
     ```bash
     python -m http.server 8000
     ```
     Y accede en tu navegador a `http://localhost:8000`.

---

## 📂 Estructura del Código

```
Xplorer_ESP/
├── index.html            # Estructura principal, barra de navegación, filtros y modales
├── css/
│   └── styles.css        # Estilos, maquetación responsive, badges y popups
├── js/
│   ├── app.js            # Controlador principal de la UI, filtros y sincronización
│   ├── map.js            # Inicialización y control del mapa interactivo con Leaflet
│   ├── modal.js          # Modal con pestañas detalladas y simulador hipotecario
│   ├── comparator.js     # Comparador de ciudades frente a frente
│   └── data/
│       └── cities.js     # Base de datos estructurada con las ciudades españolas
└── README.md             # Documentación del proyecto
```
