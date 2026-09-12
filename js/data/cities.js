// Base de datos detallada de ciudades de España con vivienda asequible para mudarse
window.CITIES_DATA = [
  {
    id: "puertollano",
    name: "Puertollano",
    province: "Ciudad Real",
    region: "Castilla-La Mancha",
    coordinates: [38.6872, -4.1073],
    priceM2: 520,
    avgFlatPrice: 44200,
    avgRentPrice: 380,
    estimatedMortgage: 165,
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Conexión AVE", "Hospital General", "Hub Hidrógeno Verde", "Pisos < 50.000€"],
    hasAVE: true,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.6,
    qualityOfLifeScore: 8.2,
    summary: "Una de las ciudades con el metro cuadrado más económico de toda España. Destaca por su conexión de alta velocidad AVE (a sólo 1h 15min de Madrid Atocha) y su transformación hacia las energías renovables y la química sostenible.",
    demographics: {
      population: 45537,
      density: "201 hab/km²",
      averageAge: 44.8,
      foreignPopulationPct: "5.8%",
      climate: {
        sunnyDays: 295,
        avgTempSummer: "33°C máx / 19°C mín",
        avgTempWinter: "13°C máx / 2°C mín",
        monthlyTemps: [7, 9, 12, 15, 20, 26, 30, 29, 24, 17, 11, 7],
        description: "Mediterráneo continentalizado, inviernos frescos y veranos cálidos y soleados."
      }
    },
    housing: {
      priceM2: 520,
      avgFlatPrice: 44200,
      priceTrend: "+1.8% anual",
      rentalYield: "8.9%",
      description: "Pisos de 3 habitaciones y 85-90 m² en buen estado desde 35.000 € hasta 60.000 €. Oportunidades de vivienda reformada en el centro por menos de 55.000 €."
    },
    idealistaListings: [
      {
        title: "Piso luminoso de 3 dormitorios cerca del Paseo San Gregorio",
        price: 39000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/puertollano-ciudad-real/"
      },
      {
        title: "Vivienda céntrica reformada con terraza y ascensor",
        price: 49500,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/puertollano-ciudad-real/"
      },
      {
        title: "Piso amplio junto a la Estación del AVE",
        price: 43000,
        m2: 88,
        rooms: 3,
        baths: 1,
        floor: "1ª planta exterior",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/puertollano-ciudad-real/"
      },
      {
        title: "Ático con gran terraza y vistas despejadas",
        price: 58000,
        m2: 100,
        rooms: 4,
        baths: 2,
        floor: "5ª planta con terraza de 25m²",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/puertollano-ciudad-real/"
      },
      {
        title: "Casa unifamiliar con patio y garaje privado",
        price: 65000,
        m2: 130,
        rooms: 4,
        baths: 2,
        floor: "Chalet adosado de 2 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/puertollano-ciudad-real/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Santa Bárbara de Puertollano (con nuevo gran hospital universitario en fase final)",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [38.6835, -4.1165],
      healthCentersCount: 4,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias 24h, helisuperficie médica y ambulancias UVIs móviles",
      description: "Cobertura sanitaria completa del SESCAM con hospital de especialidades en el casco urbano y centros de salud distribuidos en todos los distritos.",
      facilities: [
        { name: "Hospital Santa Bárbara", type: "hospital", coords: [38.6835, -4.1165], address: "Ctra. de Malagón, s/n", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Puertollano 1 (Barataria)", type: "health_center", coords: [38.6920, -4.1080], address: "Calle Barataria, 4", emergency: "Atención Primaria y Urgencias" },
        { name: "Centro de Salud Puertollano 2 (Díaz Ambrona)", type: "health_center", coords: [38.6850, -4.1020], address: "Plaza San José, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud Puertollano 3", type: "health_center", coords: [38.6900, -4.1200], address: "Calle Gran Capitán, 12", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Energías limpias, planta pionera de hidrógeno verde (Iberdrola/Fertiberia), petroquímica e industria metalmecánica.",
      industrialParks: "Polígonos La Nava I, II y III, y Polígono Escaparate.",
      localCommerce: "Centro comercial abierto en Calle Aduana y Paseo San Gregorio, con cientos de tiendas de proximidad y franquicias.",
      description: "Polo industrial en transición hacia la economía circular y la tecnología fotovoltaica e hidrógeno verde, con apoyo institucional al emprendimiento."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal de Abastos de Puertollano (productos frescos locales de La Mancha, carnes de monte, quesos manchegos y huerta).",
      supermarkets: "Mercadona (3), Carrefour, Lidl, Dia, ALDI, Supeco.",
      groceryCostIndex: "Muy asequible (-22% frente a la media de Madrid o Barcelona)."
    },
    employmentAndJobs: {
      topSectors: ["Energía e Industria Química", "Construcción y Mantenimiento", "Logística y Servicios", "Sanidad y Educación"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking Cámara de Comercio", "Centro de Empresas Innovadoras de Puertollano"],
      avgSalaryRange: "18.000 € - 27.000 € brutos/año",
      description: "Perfil industrial técnico muy demandado, junto a una pujante comunidad de teletrabajadores que aprovechan la conexión AVE diaria a Madrid."
    },
    transportAndConnectivity: {
      hasAVE: true,
      trainStation: "Estación de Puertollano (AVE línea Madrid - Sevilla / Málaga)",
      travelTimeToMadrid: "1 hora y 15 minutos (AVE)",
      travelTimeToSevilla: "1 hora y 20 minutos (AVE)",
      highways: "Autovía A-41 hacia Ciudad Real / Madrid y futura autovía A-43.",
      nearestAirport: "Aeropuerto de Madrid-Barajas (a 220 km por autovía o directo en tren).",
      busRoutes: {
        station: "Estación de Autobuses de Puertollano (Calle Malagón / Paseo de San Gregorio)",
        mainLines: [
          { destination: "Madrid (Estación Sur Méndez Álvaro)", company: "AISA / Interbús", frequency: "8 salidas diarias (L-D)", duration: "2h 30min", firstLastDepartures: "06:30 - 20:30", type: "Nacional" },
          { destination: "Ciudad Real (Hospital General / Campus UCLM)", company: "AISA", frequency: "Cada 45 min (laborables)", duration: "40 min", firstLastDepartures: "06:45 - 21:30", type: "Regional" },
          { destination: "Córdoba y Sevilla", company: "Socibus", frequency: "4 frecuencias diarias", duration: "1h 45min (Córdoba) / 2h 50min (Sevilla)", firstLastDepartures: "08:15 - 19:45", type: "Nacional" },
          { destination: "Red Urbana Municipal (Hospital, Centro, Polígonos)", company: "Autobuses Urbanos de Puertollano (AUP)", frequency: "Cada 15-20 min (4 líneas)", duration: "Servicio continuo urbano", firstLastDepartures: "07:00 - 22:30", type: "Urbano" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus universitario de la UCLM a 35 km (Ciudad Real, 14 min en tren Avant) e Instituto de Sistemas Fotovoltaicos de Concentración.",
      schoolsCount: "14 colegios de infantil y primaria, 5 institutos de secundaria y conservatorio de música.",
      culturalHighlights: "Museo de la Minería, Auditorio Municipal Pedro Almodóvar, Fuente Agria histórica en el Paseo de San Gregorio.",
      natureAndParks: "Paseo de San Gregorio, Parque del Pozo Norte y proximidad al Parque Natural del Valle de Alcudia y Sierra Madrona."
    }
  },
  {
    id: "talavera-de-la-reina",
    name: "Talavera de la Reina",
    province: "Toledo",
    region: "Castilla-La Mancha",
    coordinates: [39.9635, -4.8308],
    priceM2: 780,
    avgFlatPrice: 66300,
    avgRentPrice: 480,
    estimatedMortgage: 248,
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["A 1h de Madrid", "Hospital Universitario", "Hub Tecnológico", "Río Tajo"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.1,
    qualityOfLifeScore: 8.6,
    summary: "Segunda ciudad más poblada de la provincia, famosa por su cerámica Patrimonio de la Humanidad (UNESCO). Se consolida como polo tecnológico con la llegada de centros de datos y tecnológicas internacionales, a sólo 115 km de Madrid por la A-5.",
    demographics: {
      population: 83247,
      density: "448 hab/km²",
      averageAge: 43.6,
      foreignPopulationPct: "11.2%",
      climate: {
        sunnyDays: 285,
        avgTempSummer: "34°C máx / 18°C mín",
        avgTempWinter: "12°C máx / 3°C mín",
        monthlyTemps: [7, 9, 12, 15, 20, 26, 30, 29, 24, 17, 11, 7],
        description: "Clima mediterráneo continental templado por la vega del río Tajo."
      }
    },
    housing: {
      priceM2: 780,
      avgFlatPrice: 66300,
      priceTrend: "+3.2% anual",
      rentalYield: "7.8%",
      description: "Amplísima oferta de pisos de 80 a 100 m² entre 50.000 € y 85.000 €. Zonas residenciales con piscina y garaje por menos de 100.000 €."
    },
    idealistaListings: [
      {
        title: "Piso reformado de 3 habs en zona Tres Olivos",
        price: 59000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/talavera-de-la-reina-toledo/"
      },
      {
        title: "Vivienda céntrica con balcón cerca de Jardines del Prado",
        price: 68000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/talavera-de-la-reina-toledo/"
      },
      {
        title: "Piso exterior muy luminoso con garaje incluido",
        price: 75000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "4ª planta con garaje",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/talavera-de-la-reina-toledo/"
      },
      {
        title: "Ático dúplex con terraza solárium y vistas al río Tajo",
        price: 92000,
        m2: 110,
        rooms: 4,
        baths: 2,
        floor: "5ª planta dúplex",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/talavera-de-la-reina-toledo/"
      },
      {
        title: "Chalet adosado con patio y piscina comunitaria",
        price: 115000,
        m2: 160,
        rooms: 4,
        baths: 3,
        floor: "Chalet 3 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/talavera-de-la-reina-toledo/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital General Universitario Nuestra Señora del Prado",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [39.9575, -4.8145],
      healthCentersCount: 6,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias hospitalarias completo, UCI y unidades de hemodiálisis",
      description: "Hospital de tercer nivel con más de 400 camas y todas las especialidades médicas esenciales para la comarca.",
      facilities: [
        { name: "Hospital General Universitario Nuestra Señora del Prado", type: "hospital", coords: [39.9575, -4.8145], address: "Ctra. de Madrid, s/n", emergency: "Urgencias Generales y Pediátricas 24h" },
        { name: "Centro de Salud La Algodonera", type: "health_center", coords: [39.9610, -4.8320], address: "Calle Carnicerías, 1", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Talavera Centro", type: "health_center", coords: [39.9600, -4.8350], address: "Plaza del Pan, 3", emergency: "Atención Primaria" },
        { name: "Centro de Salud La Estación", type: "health_center", coords: [39.9670, -4.8250], address: "Paseo de la Estación, 14", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Sector TIC y centros de datos (proyectos de multinacionales tecnológicas), cerámica artística, distribución logística y agroalimentario.",
      industrialParks: "Polígono Torrehierro (uno de los mayores de la región) y Polígono Marfagón.",
      localCommerce: "Animado centro comercial peatonal (Calle San Francisco, Trinidad) y el Centro Comercial Los Alfares.",
      description: "Creciente foco de atracción para empresas de software, ciberseguridad y servicios en la nube gracias al CRID (Centro Regional de Innovación Digital)."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de Talavera (recientemente remodelado y con espacio gastronómico) y Mercado de la Estación.",
      supermarkets: "Mercadona (4), Carrefour, ALDI, Lidl, Alcampo, Dia, Ahorramas.",
      groceryCostIndex: "Muy ventajoso, con abundantes productos de proximidad de las vegas del Tajo y el Tiétar."
    },
    employmentAndJobs: {
      topSectors: ["Tecnologías de la Información", "Comercio y Logística", "Sanidad y Educación", "Agroindustria"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Centro Regional de Innovación Digital (CRID)", "Coworking Talavera Tech Hub"],
      avgSalaryRange: "19.000 € - 30.000 € brutos/año",
      description: "Ideal para nómadas digitales y empleados en modelo híbrido que deban acudir a Madrid 1 o 2 días por semana."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Talavera de la Reina (Trenes Regionales y Media Distancia a Madrid en 1h 15min; futura línea de Alta Velocidad Madrid-Lisboa)",
      travelTimeToMadrid: "1 hora en autobús directo / coche por A-5",
      highways: "Autovía del Suroeste A-5 directa a Madrid y Extremadura.",
      nearestAirport: "Madrid-Barajas Adolfo Suárez a 125 km.",
      busRoutes: {
        station: "Estación de Autobuses de Talavera de la Reina (Calle Toledo, s/n)",
        mainLines: [
          { destination: "Madrid (Intercambiador Príncipe Pío / Estación Sur)", company: "Avanza Bus (Auto-Res)", frequency: "Cada 30 min (alta frecuencia)", duration: "1h 15min", firstLastDepartures: "05:30 - 22:30", type: "Nacional" },
          { destination: "Toledo Capital", company: "Samar / Monbus", frequency: "Cada 60 min", duration: "55 min", firstLastDepartures: "06:45 - 21:15", type: "Regional" },
          { destination: "Plasencia, Navalmoral y Cáceres", company: "CEVESA / Avanza", frequency: "5 frecuencias diarias", duration: "1h 20min (Plasencia) / 2h (Cáceres)", firstLastDepartures: "07:30 - 20:00", type: "Regional" },
          { destination: "Red Urbana Ebe Talavera (Líneas 1 a 6)", company: "Monbus Talavera", frequency: "Cada 15 min", duration: "Conexión Hospital, Polígonos y Centro", firstLastDepartures: "06:30 - 23:00", type: "Urbano" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Talavera de la UCLM (Grados en Informática, Enfermería, Terapia Ocupacional, Podología y ADE).",
      schoolsCount: "22 colegios y 9 institutos de educación secundaria y formación profesional.",
      culturalHighlights: "Museo Ruiz de Luna de Cerámica, Basílica de la Virgen del Prado, murallas califales y puentes del Tajo.",
      natureAndParks: "Jardines del Prado, Parque de la Alameda y riberas del Río Tajo con sendas ciclables."
    }
  },
  {
    id: "elda-petrer",
    name: "Elda - Petrer",
    province: "Alicante",
    region: "Comunidad Valenciana",
    coordinates: [38.4779, -0.7915],
    priceM2: 690,
    avgFlatPrice: 58650,
    avgRentPrice: 430,
    estimatedMortgage: 219,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Cerca de la Playa (25 min)", "Hospital General", "Clima Mediterráneo", "Capital del Calzado"],
    hasAVE: false,
    hasHospital: true,
    coastal: true,
    costOfLivingScore: 9.3,
    qualityOfLifeScore: 8.8,
    summary: "Conurbación vibrante de casi 90.000 habitantes en el valle del Vinalopó, a tan sólo 25-30 minutos de las playas de Alicante y su aeropuerto internacional. Ofrece uno de los costes de vivienda más competitivos del levante mediterráneo.",
    demographics: {
      population: 87100,
      density: "1.020 hab/km²",
      averageAge: 44.1,
      foreignPopulationPct: "8.7%",
      climate: {
        sunnyDays: 310,
        avgTempSummer: "31°C máx / 20°C mín",
        avgTempWinter: "16°C máx / 6°C mín",
        monthlyTemps: [11, 12, 14, 17, 21, 26, 29, 29, 25, 20, 15, 11],
        description: "Clima mediterráneo seco con inviernos suaves y más de 300 días de sol garantizados al año."
      }
    },
    housing: {
      priceM2: 690,
      avgFlatPrice: 58650,
      priceTrend: "+2.5% anual",
      rentalYield: "8.4%",
      description: "Pisos luminosos de 80-95 m² entre 45.000 € y 70.000 €. Casas tradicionales de pueblo en Petrer con vistas al castillo por 75.000 €."
    },
    idealistaListings: [
      {
        title: "Piso céntrico con balcón soleado en Elda",
        price: 52000,
        m2: 88,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/elda-alicante/"
      },
      {
        title: "Casa de pueblo con encanto y terraza en Petrer",
        price: 69000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "Casa adosada 2 plantas",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/petrer-alicante/"
      },
      {
        title: "Piso amplio y reformado en Gran Avenida",
        price: 62000,
        m2: 95,
        rooms: 4,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/elda-alicante/"
      },
      {
        title: "Ático con vistas a la sierra y terraza de 30m²",
        price: 79000,
        m2: 105,
        rooms: 3,
        baths: 2,
        floor: "4ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/elda-alicante/"
      },
      {
        title: "Vivienda moderna en urbanización con piscina comunitaria",
        price: 94000,
        m2: 115,
        rooms: 3,
        baths: 2,
        floor: "2ª planta con garaje",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/petrer-alicante/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital General Universitario de Elda 'Virgen de la Salud'",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [38.4845, -0.7930],
      healthCentersCount: 7,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias Comarcal 24h, helipuerto y amplia cartera de especialidades",
      description: "Hospital de referencia para todo el Alto y Medio Vinalopó, complementado por una densa red de centros de salud de atención primaria.",
      facilities: [
        { name: "Hospital Universitario Virgen de la Salud", type: "hospital", coords: [38.4845, -0.7930], address: "Ctra. Elda-Sax, s/n", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Acacias (Elda)", type: "health_center", coords: [38.4750, -0.7910], address: "Calle Las Acacias, 12", emergency: "Atención Primaria y Urgencias PAC" },
        { name: "Centro de Salud Petrer I", type: "health_center", coords: [38.4830, -0.7750], address: "Av. Reina Sofía, 2", emergency: "Atención Primaria" },
        { name: "Centro de Salud Marina Española", type: "health_center", coords: [38.4720, -0.7980], address: "Calle Marina Española, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Industria internacional del calzado y marroquinería de alta gama, servicios, logística y metalmecánica.",
      industrialParks: "Polígono Finca Lacy, Campo Alto, Les Pedreres y Salinetas.",
      localCommerce: "Intensa actividad comercial en el eje céntrico de Elda (Gran Avenida, Calle Jardines) y el CC Bassa el Ràfol.",
      description: "Fuerte tradición industrial exportadora combinada con un dinamismo de pequeña y mediana empresa de servicios."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Central de Elda y Mercado Municipal de La Frontera (Petrer), con excelente oferta de pescados de la lonja de Santa Pola y verduras del Vinalopó.",
      supermarkets: "Mercadona (5), Carrefour, Hiperber, Consum, ALDI, Lidl, Dia.",
      groceryCostIndex: "Muy económico; precios agrícolas directos del campo alicantino."
    },
    employmentAndJobs: {
      topSectors: ["Fabricación de Calzado y Moda", "Sector Sanitario y Administrativo", "Comercio y Distribución", "Servicios Remotos"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking Elda Emprende", "Espai Coworking Petrer"],
      avgSalaryRange: "18.500 € - 26.500 € brutos/año",
      description: "Ecosistema manufacturero de prestigio mundial, muy atractivo para personas que trabajan en Alicante pero prefieren pagar la mitad por su casa."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Elda-Petrer (Línea de Cercanías y Media Distancia directa a Alicante en 25 min y a Valencia y Madrid)",
      travelTimeToAlicanteBeach: "25 minutos en coche o tren",
      highways: "Autovía del Mediterráneo interior A-31 directa al puerto y aeropuerto de Alicante.",
      nearestAirport: "Aeropuerto de Alicante-Elche Miguel Hernández (a sólo 34 km, 25 min).",
      busRoutes: {
        station: "Estación de Autobuses de Elda-Petrer (Av. de Madrid / Calle Nueva)",
        mainLines: [
          { destination: "Alicante (Estación Central / Puerto / Universidad UA)", company: "Vectalia (Subús)", frequency: "Cada 30-40 min", duration: "35 min", firstLastDepartures: "06:15 - 22:15", type: "Regional" },
          { destination: "Aeropuerto Alicante-Elche (ALC)", company: "Vectalia Interurbano", frequency: "6 salidas diarias directas", duration: "30 min", firstLastDepartures: "06:30 - 20:30", type: "Regional" },
          { destination: "Valencia / Benidorm", company: "ALSA", frequency: "5 salidas diarias", duration: "1h 45min (Valencia) / 1h 10min (Benidorm)", firstLastDepartures: "07:30 - 20:00", type: "Nacional" },
          { destination: "Línea Urbana Intermunicipal Elda - Petrer", company: "Autobuses Urbanos de Elda", frequency: "Cada 15 min", duration: "Recorrido continuo entre ambos municipios", firstLastDepartures: "07:00 - 22:00", type: "Urbano" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Sede universitaria de la Universidad de Alicante, Centro de Idiomas e Instituto Superior de Diseño del Calzado.",
      schoolsCount: "25 centros escolares, 8 institutos y escuela oficial de idiomas.",
      culturalHighlights: "Museo del Calzado (único en Europa), Castillo de Petrer, Teatro Castelar y fiestas de Moros y Cristianos de renombre nacional.",
      natureAndParks: "Parque de la Concordia, Paraje Natural del Arenal del Almorxó y Sierra del Cid para escalada y senderismo."
    }
  },
  {
    id: "ponferrada",
    name: "Ponferrada",
    province: "León",
    region: "Castilla y León",
    coordinates: [42.5466, -6.5909],
    priceM2: 790,
    avgFlatPrice: 67150,
    avgRentPrice: 420,
    estimatedMortgage: 251,
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["El Bierzo Verde", "Hospital del Bierzo", "Castillo Templario", "Camino de Santiago"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.4,
    qualityOfLifeScore: 9.1,
    summary: "Capital de la comarca de El Bierzo, famosa por su majestuoso Castillo Templario, su entorno de viñedos y montañas, y una gastronomía excepcional. Posee una de las mejores relaciones entre calidad de vida, servicios y coste de vivienda en el norte peninsular.",
    demographics: {
      population: 63052,
      density: "219 hab/km²",
      averageAge: 46.2,
      foreignPopulationPct: "6.9%",
      climate: {
        sunnyDays: 240,
        avgTempSummer: "28°C máx / 14°C mín",
        avgTempWinter: "9°C máx / 1°C mín",
        monthlyTemps: [4, 6, 9, 12, 16, 21, 24, 23, 19, 13, 8, 4],
        description: "Microclima berciano especial: más suave que la meseta leonesa y menos lluvioso que Galicia."
      }
    },
    housing: {
      priceM2: 790,
      avgFlatPrice: 67150,
      priceTrend: "+1.5% anual",
      rentalYield: "7.5%",
      description: "Pisos de 90 m² en zonas residenciales modernas (como La Rosaleda) con garaje y trastero por 70.000 € - 95.000 €. En el casco antiguo, pisos para entrar a vivir desde 45.000 €."
    },
    idealistaListings: [
      {
        title: "Piso seminuevo con garaje y trastero en La Rosaleda",
        price: 72000,
        m2: 88,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ponferrada-leon/"
      },
      {
        title: "Apartamento coqueto junto al Castillo de los Templarios",
        price: 54000,
        m2: 75,
        rooms: 2,
        baths: 1,
        floor: "1ª planta exterior",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ponferrada-leon/"
      },
      {
        title: "Piso exterior luminoso con terraza en zona Alta",
        price: 64000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "2ª planta soleada",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ponferrada-leon/"
      },
      {
        title: "Ático con terraza panorámica hacia los Montes Aquilanos",
        price: 88000,
        m2: 102,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ponferrada-leon/"
      },
      {
        title: "Casa de piedra con bodega y jardín en el entorno berciano",
        price: 98000,
        m2: 145,
        rooms: 4,
        baths: 2,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ponferrada-leon/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Público de El Bierzo",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [42.5620, -6.6180],
      healthCentersCount: 4,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y ambulancia medicalizada SAMUR",
      description: "Hospital comarcal con amplia gama de especialidades y excelente reputación médica, además de centros de salud de atención continuada.",
      facilities: [
        { name: "Hospital de El Bierzo", type: "hospital", coords: [42.5620, -6.6180], address: "Ctra. Fuentesnuevas, s/n", emergency: "Urgencias Comarcales 24h" },
        { name: "Centro de Salud Ponferrada I (San Antonio)", type: "health_center", coords: [42.5480, -6.5920], address: "Calle Obispo Osmundo, s/n", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Ponferrada II (Pico Tuerto)", type: "health_center", coords: [42.5450, -6.5990], address: "Av. del Castillo, 102", emergency: "Atención Primaria" },
        { name: "Centro de Salud Ponferrada III (Cuatrovientos)", type: "health_center", coords: [42.5610, -6.6020], address: "Calle Juan de Austria, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Agroalimentaria de calidad (Denominaciones de Origen de vino Mencía, manzana reineta, botillo), eólica, pizarra, sector forestal y turismo cultural.",
      industrialParks: "Polígono Industrial del Bierzo (PIB) y Polígono La Llanada.",
      localCommerce: "Centro urbano comercial muy activo y Centro Comercial El Rosal con más de 100 locales comerciales y salas de cine.",
      description: "Transición ecológica activa con proyectos punteros en biorrefinería y energías limpias respaldados por el CIUDEN."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de Ponferrada (con zona gastronómica 'GastroBierzo' de tapeo y productos locales de huerta).",
      supermarkets: "Carrefour, Mercadona (3), Gadis, ALDI, Froiz, Dia.",
      groceryCostIndex: "Excepcionalmente bajo; la riqueza agrícola del Bierzo permite comprar producto fresco a precios muy reducidos."
    },
    employmentAndJobs: {
      topSectors: ["Agroalimentación y Enoturismo", "Industria Eólica y Metalúrgica", "Sanidad y Servicios Sociales", "Servicios Tecnológicos"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking La Estación", "Centro de Innovación Tecnológica CIUDEN"],
      avgSalaryRange: "19.000 € - 28.000 € brutos/año",
      description: "Entorno soñado para amantes de la naturaleza, el ciclismo de montaña y el teletrabajo con aire puro y costes mínimos."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Ponferrada (Conexión directa con León, Madrid, A Coruña y Vigo)",
      travelTimeToLeon: "1 hora en tren o coche (AVE en León a Madrid en 2h)",
      highways: "Autovía del Noroeste A-6 (Madrid - A Coruña) con acceso directo.",
      nearestAirport: "Aeropuerto de León (a 100 km) y Aeropuerto de Santiago de Compostela (a 190 km).",
      busRoutes: {
        station: "Estación de Autobuses de Ponferrada (Av. de la Libertad, 46)",
        mainLines: [
          { destination: "Madrid (Intercambiador Moncloa / T4 Barajas)", company: "ALSA (Servicio Supra)", frequency: "7 salidas diarias", duration: "3h 45min", firstLastDepartures: "07:00 - 23:15", type: "Nacional" },
          { destination: "León Capital (Conexión AVE)", company: "ALSA", frequency: "Cada hora", duration: "1h 15min", firstLastDepartures: "06:45 - 21:30", type: "Regional" },
          { destination: "A Coruña, Santiago y Vigo", company: "ALSA / Monbus", frequency: "6 frecuencias diarias", duration: "2h (A Coruña) / 2h 30min (Santiago)", firstLastDepartures: "08:00 - 20:30", type: "Nacional" },
          { destination: "Red Urbana Comarcal TUP El Bierzo", company: "Transporte Urbano de Ponferrada", frequency: "Cada 20 min (6 líneas)", duration: "Conexión Hospital, La Rosaleda y Pueblos", firstLastDepartures: "06:45 - 22:30", type: "Urbano" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Ponferrada de la Universidad de León (Grados en Fisioterapia, Enfermería, Ingeniería Geomática e Ingeniería Forestal).",
      schoolsCount: "16 centros de educación básica, 6 institutos y Escuela Oficial de Idiomas.",
      culturalHighlights: "Castillo de los Templarios, Museo de la Energía (La Fábrica de Luz), Museo del Bierzo y Teatro Bergidum.",
      natureAndParks: "Las Médulas (Patrimonio de la Humanidad UNESCO a 25 min), Valle del Silencio y Parque de la Concordia."
    }
  },
  {
    id: "linares",
    name: "Linares",
    province: "Jaén",
    region: "Andalucía",
    coordinates: [38.0942, -3.6338],
    priceM2: 640,
    avgFlatPrice: 54400,
    avgRentPrice: 390,
    estimatedMortgage: 203,
    heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Campus Universitario", "Hospital San Agustín", "Gran Tradición de Tapas", "Precios Mínimos"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.7,
    qualityOfLifeScore: 8.3,
    summary: "Segunda ciudad de la provincia de Jaén, con ilustre tradición minera y ajedrecística internacional. Dispone de un moderno campus politécnico universitario, un gran hospital comarcal y pisos extraordinariamente económicos.",
    demographics: {
      population: 55729,
      density: "282 hab/km²",
      averageAge: 44.5,
      foreignPopulationPct: "4.5%",
      climate: {
        sunnyDays: 300,
        avgTempSummer: "35°C máx / 20°C mín",
        avgTempWinter: "14°C máx / 4°C mín",
        monthlyTemps: [8, 10, 13, 16, 21, 27, 31, 30, 25, 18, 12, 8],
        description: "Mediterráneo continental andaluz, cielos despejados la mayor parte del año y otoños templados."
      }
    },
    housing: {
      priceM2: 640,
      avgFlatPrice: 54400,
      priceTrend: "+1.2% anual",
      rentalYield: "8.6%",
      description: "Pisos de 3 o 4 dormitorios por entre 38.000 € y 65.000 €. Abundancia de viviendas exteriores listas para habitar."
    },
    idealistaListings: [
      {
        title: "Piso amplio y reformado en Calle Corredera",
        price: 45000,
        m2: 90,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/linares-jaen/"
      },
      {
        title: "Vivienda exterior con balcón junto al Campus Universitario",
        price: 48000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "3ª planta muy luminosa",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/linares-jaen/"
      },
      {
        title: "Piso céntrico con ascensor y calefacción",
        price: 58000,
        m2: 100,
        rooms: 4,
        baths: 2,
        floor: "4ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/linares-jaen/"
      },
      {
        title: "Ático con gran terraza y vistas despejadas",
        price: 69000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/linares-jaen/"
      },
      {
        title: "Casa unifamiliar con patio andaluz y garaje",
        price: 82000,
        m2: 150,
        rooms: 4,
        baths: 2,
        floor: "Casa adosada 2 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/linares-jaen/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Universitario San Agustín de Linares",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [38.1020, -3.6390],
      healthCentersCount: 4,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias 24h con unidad de cuidados intensivos y cirugía ambulatoria",
      description: "Hospital público con moderna dotación tecnológica que atiende a toda la zona norte de la provincia de Jaén.",
      facilities: [
        { name: "Hospital Universitario San Agustín", type: "hospital", coords: [38.1020, -3.6390], address: "Av. San Cristóbal, s/n", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Los Marqueses", type: "health_center", coords: [38.0930, -3.6350], address: "Calle Menéndez Pelayo, 22", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud San José", type: "health_center", coords: [38.0960, -3.6420], address: "Calle Viriato, 1", emergency: "Atención Primaria" },
        { name: "Centro de Salud Arrayanes", type: "health_center", coords: [38.0870, -3.6280], address: "Calle Alfonso X El Sabio, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Industria de componentes ferroviarios, automoción y maquinaria, sector oleícola (aceite de oliva virgen extra) y comercio.",
      industrialParks: "Polígono Industrial Los Rubiales y Parque Empresarial Santana.",
      localCommerce: "Centro comercial abierto muy dinámico en el entorno de la Calle Corredera de San Marcos y Pasaje del Comercio.",
      description: "Especialización en ingeniería y software tecnológico en el Parque Científico y Tecnológico del Campus de Linares."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal de Abastos 'Santiago' (gran variedad de embutidos tradicionales, aceites jiennenses y verduras).",
      supermarkets: "Mercadona (3), Carrefour, Dia, ALDI, Lidl, Maskompra.",
      groceryCostIndex: "Líder en ahorro; la cesta de la compra es una de las más baratas del sur de Europa."
    },
    employmentAndJobs: {
      topSectors: ["Ingeniería y Tecnología (Campus Científico)", "Agroalimentario del Olivar", "Sanidad y Cuidados", "Hostelería y Comercio"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Linares Coworking Hub", "Vivero de Empresas Cámara de Linares"],
      avgSalaryRange: "18.000 € - 26.000 € brutos/año",
      description: "La cultura de la tapa gratuita con la consumición hace que la vida social y de ocio sea sumamente barata y animada."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Linares-Baeza (importante nudo ferroviario con conexiones directas a Madrid, Sevilla, Granada y Barcelona)",
      travelTimeToJaen: "35 minutos en autovía A-32",
      highways: "Autovía A-32 (Linares - Albacete) y conexión directa a la A-4 (Autovía de Andalucía).",
      nearestAirport: "Aeropuerto de Granada-Jaén a 125 km (1h 15 min).",
      busRoutes: {
        station: "Estación de Autobuses de Linares (Calle Rualbarre)",
        mainLines: [
          { destination: "Jaén Capital (Estación Central / Hospital)", company: "Consorcio Metropolitano / Samar", frequency: "Cada 30-45 min", duration: "40 min", firstLastDepartures: "06:30 - 21:45", type: "Regional" },
          { destination: "Madrid (Estación Sur Méndez Álvaro)", company: "Samar / Socibus", frequency: "6 salidas diarias", duration: "3h 15min", firstLastDepartures: "07:15 - 20:30", type: "Nacional" },
          { destination: "Úbeda y Baeza", company: "ALSA / Interurbano", frequency: "Cada 60 min", duration: "25 min (Baeza) / 35 min (Úbeda)", firstLastDepartures: "07:00 - 21:00", type: "Regional" },
          { destination: "Granada y Córdoba", company: "ALSA", frequency: "5 salidas diarias", duration: "1h 30min (Granada) / 1h 45min (Córdoba)", firstLastDepartures: "08:00 - 19:30", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus Científico-Tecnológico de Linares de la Universidad de Jaén (Escuela Politécnica Superior).",
      schoolsCount: "18 colegios y 7 institutos con amplios ciclos de formación profesional.",
      culturalHighlights: "Museo de Raphael (nacido en Linares), Museo Arqueológico de Cástulo, Museo de la Minería y emblemático Torneo Internacional de Ajedrez.",
      natureAndParks: "Parque de Cantarranas, Sendas Mineras de la Vía Verde del Aceite y proximidad a Sierra Morena."
    }
  },
  {
    id: "ubeda",
    name: "Úbeda",
    province: "Jaén",
    region: "Andalucía",
    coordinates: [38.0121, -3.3713],
    priceM2: 780,
    avgFlatPrice: 66300,
    avgRentPrice: 440,
    estimatedMortgage: 248,
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Patrimonio Humanidad UNESCO", "Hospital San Juan de la Cruz", "Joyas del Renacimiento", "Calidad de Vida"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.2,
    qualityOfLifeScore: 9.3,
    summary: "Ciudad Patrimonio de la Humanidad por la UNESCO junto a su hermana Baeza. Famosa por sus palacios renacentistas, alfarería milenaria, extraordinaria gastronomía y gran calidad de vida, con precios inmobiliarios muy asequibles.",
    demographics: {
      population: 34062,
      density: "85 hab/km²",
      averageAge: 44.0,
      foreignPopulationPct: "4.1%",
      climate: {
        sunnyDays: 290,
        avgTempSummer: "33°C máx / 19°C mín",
        avgTempWinter: "13°C máx / 3°C mín",
        monthlyTemps: [7, 9, 12, 15, 20, 26, 30, 29, 24, 17, 11, 7],
        description: "Mediterráneo continentalizado de media altitud (750 msnm), noches de verano frescas y aire limpio."
      }
    },
    housing: {
      priceM2: 780,
      avgFlatPrice: 66300,
      priceTrend: "+2.0% anual",
      rentalYield: "7.9%",
      description: "Pisos señoriales y luminosos de 90 m² por 60.000 € - 85.000 €. Casas históricas con patio andaluz en el centro monumental por 90.000 € - 140.000 €."
    },
    idealistaListings: [
      {
        title: "Piso señorial con balcones cerca de la Plaza Vázquez de Molina",
        price: 64000,
        m2: 90,
        rooms: 3,
        baths: 1,
        floor: "1ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ubeda-jaen/"
      },
      {
        title: "Vivienda moderna y luminosa en zona comercial",
        price: 72000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ubeda-jaen/"
      },
      {
        title: "Piso amplio exterior con plaza de garaje incluida",
        price: 79000,
        m2: 105,
        rooms: 4,
        baths: 2,
        floor: "2ª planta con plaza de parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ubeda-jaen/"
      },
      {
        title: "Ático con vistas a la sierra y terraza soleada",
        price: 95000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "4ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ubeda-jaen/"
      },
      {
        title: "Casa señorial histórica con patio tradicional renacentista",
        price: 129000,
        m2: 180,
        rooms: 5,
        baths: 3,
        floor: "Casa palaciega en casco histórico",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ubeda-jaen/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital San Juan de la Cruz de Úbeda",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [38.0060, -3.3790],
      healthCentersCount: 3,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias comarcal 24 horas y especialidades médicas y quirúrgicas",
      description: "Centro hospitalario de referencia en la comarca de La Loma, recientemente renovado con tecnología diagnóstica avanzada.",
      facilities: [
        { name: "Hospital San Juan de la Cruz", type: "hospital", coords: [38.0060, -3.3790], address: "Ctra. de Linares, s/n", emergency: "Urgencias Comarcales 24h" },
        { name: "Centro de Salud Úbeda Este", type: "health_center", coords: [38.0130, -3.3700], address: "Calle Cronista Cazabán, 4", emergency: "Atención Primaria y Urgencias" },
        { name: "Centro de Salud Úbeda Oeste", type: "health_center", coords: [38.0110, -3.3760], address: "Av. de la Libertad, 33", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Turismo cultural de alta calidad, producción de Aceite de Oliva Virgen Extra (AOVE) de máxima categoría mundial, alfarería y artesanía.",
      industrialParks: "Polígono Industrial Los Cerros.",
      localCommerce: "Potente centro comercial comarcal con calles peatonales (Calle Obispo Cobos, Mesones) repletas de tiendas y talleres artesanos.",
      description: "Economía basada en el comercio, los servicios administrativos de la comarca y la atracción de viajeros e inversores culturales."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal de Abastos de Úbeda (joya de productos de la huerta, quesos artesanos, aceitunas y carnes de caza).",
      supermarkets: "Mercadona (2), Carrefour, Dia, ALDI, Lidl, Masymas.",
      groceryCostIndex: "Bajísimo; dieta mediterránea pura con aceite de oliva directo de cooperativa a precios imbatibles."
    },
    employmentAndJobs: {
      topSectors: ["Turismo y Hostelería Gourmet", "Industria del Aceite y Agroalimentario", "Sanidad y Docencia", "Comercio Comarcal"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Espacio de Coworking Centro Cultural Hospital de Santiago"],
      avgSalaryRange: "18.500 € - 27.000 € brutos/año",
      description: "Paz, belleza arquitectónica inigualable y una agenda cultural constante (festivales de música antigua, danza, teatro y poesía)."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Linares-Baeza a sólo 15 minutos en coche/autobús",
      travelTimeToGranada: "1 hora y 15 minutos por autovía",
      highways: "Autovía A-32 y autovía A-316 (Autovía del Olivar).",
      nearestAirport: "Aeropuerto Federico García Lorca Granada-Jaén a 130 km.",
      busRoutes: {
        station: "Estación de Autobuses de Úbeda (Calle San José, s/n)",
        mainLines: [
          { destination: "Jaén Capital", company: "ALSA / Consorcio Metropolitano", frequency: "Cada 45 min", duration: "50 min", firstLastDepartures: "06:45 - 21:30", type: "Regional" },
          { destination: "Granada (Estación Central de Autobuses)", company: "ALSA", frequency: "6 salidas diarias", duration: "1h 30min", firstLastDepartures: "07:30 - 20:00", type: "Regional" },
          { destination: "Madrid (Estación Sur Méndez Álvaro)", company: "Samar", frequency: "5 salidas diarias", duration: "3h 45min", firstLastDepartures: "07:00 - 19:30", type: "Nacional" },
          { destination: "Línea Conexión Baeza y Cazorla", company: "ALSA / Autocares Muñoz", frequency: "Cada 30 min (Baeza) / 4 salidas (Cazorla)", duration: "15 min (Baeza) / 50 min (Cazorla)", firstLastDepartures: "07:00 - 21:30", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Centro Universitario Sagrada Familia (adscrito a la Universidad de Jaén) y sede de la UNED.",
      schoolsCount: "12 colegios, Escuela de Arte 'Casa de las Torres' y 4 institutos.",
      culturalHighlights: "Capilla de El Salvador, Palacio de las Cadenas, Sinagoga del Agua y Barrio de los Alfareros.",
      natureAndParks: "Parque de la Vandelvira y proximidad directa al Parque Natural de las Sierras de Cazorla, Segura y Las Villas."
    }
  },
  {
    id: "tomelloso",
    name: "Tomelloso",
    province: "Ciudad Real",
    region: "Castilla-La Mancha",
    coordinates: [39.1578, -3.0232],
    priceM2: 670,
    avgFlatPrice: 56950,
    avgRentPrice: 400,
    estimatedMortgage: 213,
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Capital del Vino", "Hospital General", "Gran Dinamismo Comercial", "Lagunas de Ruidera Cerca"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.5,
    qualityOfLifeScore: 8.5,
    summary: "El mayor productor vinícola del mundo y uno de los núcleos agroindustriales y de transporte más dinámicos de Castilla-La Mancha. Ciudad muy emprendedora, con hospital propio y situada a 30 km del paraíso natural de las Lagunas de Ruidera.",
    demographics: {
      population: 36086,
      density: "149 hab/km²",
      averageAge: 43.1,
      foreignPopulationPct: "14.3%",
      climate: {
        sunnyDays: 290,
        avgTempSummer: "33°C máx / 18°C mín",
        avgTempWinter: "12°C máx / 1°C mín",
        monthlyTemps: [5, 8, 11, 14, 19, 26, 30, 29, 23, 16, 9, 5],
        description: "Clima manchego continental seco y soleado, con noches refrescantes."
      }
    },
    housing: {
      priceM2: 670,
      avgFlatPrice: 56950,
      priceTrend: "+1.9% anual",
      rentalYield: "8.3%",
      description: "Pisos de 90 m² con garaje entre 45.000 € y 65.000 €. Casas unifamiliares con patio manchego y bodega tradicional por menos de 110.000 €."
    },
    idealistaListings: [
      {
        title: "Piso amplio y céntrico de 3 dormitorios con balcón",
        price: 49000,
        m2: 90,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tomelloso-ciudad-real/"
      },
      {
        title: "Vivienda moderna con garaje y trastero cerca del centro",
        price: 59000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "1ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tomelloso-ciudad-real/"
      },
      {
        title: "Piso exterior muy soleado con cocina equipada",
        price: 52000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "3ª planta exterior",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tomelloso-ciudad-real/"
      },
      {
        title: "Ático con amplia terraza de 35m² y barbacoa",
        price: 78000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "4ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tomelloso-ciudad-real/"
      },
      {
        title: "Casa típica manchega con patio privado y cueva-bodega",
        price: 92000,
        m2: 170,
        rooms: 4,
        baths: 2,
        floor: "Casa independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tomelloso-ciudad-real/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital General de Tomelloso",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [39.1480, -3.0110],
      healthCentersCount: 3,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Urgencias 24h, helipuerto y hospital de día médico-quirúrgico",
      description: "Hospital moderno construido en 2007 que cubre la comarca con más de 120 camas y tecnología diagnóstica avanzada.",
      facilities: [
        { name: "Hospital General de Tomelloso", type: "hospital", coords: [39.1480, -3.0110], address: "Vereda de Socuéllamos, s/n", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Tomelloso 1", type: "health_center", coords: [39.1580, -3.0240], address: "Calle Doña Crisanta, 45", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Tomelloso 2", type: "health_center", coords: [39.1620, -3.0180], address: "Calle Concordia, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Vitivinícola (mayor cooperativa vinícola de Europa, Virgen de las Viñas), destilerías de brandy, logística y transporte terrestre, metalurgia y agroalimentación.",
      industrialParks: "Polígono Industrial El Bombo y Polígono Los Portales.",
      localCommerce: "Centro urbano sumamente comercial y activo, con una arraigada cultura de comercio familiar y hostelería.",
      description: "Gran espíritu emprendedor sin dependencia exclusiva del sector público; tasa de empresas per cápita muy superior a la media regional."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal de Tomelloso (famoso por sus quesos artesanos manchegos y carnes de cordero).",
      supermarkets: "Mercadona (2), Carrefour Express, Lidl, Dia, ALDI, Family Cash.",
      groceryCostIndex: "Excepcionalmente barato, con venta directa de bodegas y productores locales."
    },
    employmentAndJobs: {
      topSectors: ["Agroindustria y Enología", "Transporte Internacional de Mercancías", "Metalmecánica y Maquinaria", "Sanidad y Servicios"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Centro de Empresas CLIPE Tomelloso"],
      avgSalaryRange: "18.500 € - 27.500 € brutos/año",
      description: "Excelente para profesionales vinculados al sector agroalimentario, logística o teletrabajadores que busquen tranquilidad y vivienda baratísima."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Alcázar de San Juan a 25 min (nudo ferroviario clave) o conexión de autobuses interurbanos directos",
      travelTimeToMadrid: "1 hora y 45 minutos por autovía A-43 y A-4",
      highways: "Autovía de los Viñedos CM-42 y Autovía A-43.",
      nearestAirport: "Madrid-Barajas a 175 km.",
      busRoutes: {
        station: "Estación de Autobuses de Tomelloso (Calle Socuéllamos / Estación)",
        mainLines: [
          { destination: "Madrid (Estación Sur Méndez Álvaro)", company: "Samar", frequency: "8 frecuencias diarias", duration: "1h 55min", firstLastDepartures: "06:15 - 20:00", type: "Nacional" },
          { destination: "Ciudad Real y Albacete", company: "AISA / Monbus", frequency: "6 salidas diarias", duration: "1h (Ciudad Real) / 1h 15min (Albacete)", firstLastDepartures: "06:45 - 20:45", type: "Regional" },
          { destination: "Alcázar de San Juan (Enlace tren)", company: "Interurbano AISA", frequency: "Cada 60 min", duration: "25 min", firstLastDepartures: "06:30 - 21:30", type: "Regional" },
          { destination: "Lagunas de Ruidera (Parque Natural)", company: "Samar Línea Turística", frequency: "4 frecuencias/día (fines de semana reforzado)", duration: "30 min", firstLastDepartures: "08:30 - 19:30", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Escuela de Arte y Superior de Diseño Antonio López y sede de la UNED.",
      schoolsCount: "13 colegios de primaria y 4 institutos de secundaria.",
      culturalHighlights: "Museo Antonio López Torres, Cuevas subterráneas típicas del vino, Museo del Carro y posada de los Portales.",
      natureAndParks: "Parque Natural de las Lagunas de Ruidera (a sólo 25 minutos en coche, perfecto para baño, kayak y senderismo)."
    }
  },
  {
    id: "zamora",
    name: "Zamora",
    province: "Zamora",
    region: "Castilla y León",
    coordinates: [41.5034, -5.7446],
    priceM2: 1100,
    avgFlatPrice: 93500,
    avgRentPrice: 520,
    estimatedMortgage: 350,
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Capital de Provincia", "Conexión AVE (1h a Madrid)", "Segura y Tranquila", "Río Duero"],
    hasAVE: true,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 8.9,
    qualityOfLifeScore: 9.4,
    summary: "Capital provincial ribereña del Duero con el mayor conjunto de iglesias románicas urbanas de Europa. Tranquila, segura, transitable a pie y conectada por AVE con Madrid Chamartín en sólo 1 hora y 10 minutos.",
    demographics: {
      population: 59475,
      density: "398 hab/km²",
      averageAge: 48.3,
      foreignPopulationPct: "5.1%",
      climate: {
        sunnyDays: 270,
        avgTempSummer: "30°C máx / 15°C mín",
        avgTempWinter: "9°C máx / 1°C mín",
        monthlyTemps: [3, 6, 9, 12, 17, 22, 26, 25, 20, 13, 7, 3],
        description: "Clima mediterráneo continental mesetario, con veranos muy agradables y libres de agobio térmico."
      }
    },
    housing: {
      priceM2: 1100,
      avgFlatPrice: 93500,
      priceTrend: "+2.1% anual",
      rentalYield: "6.8%",
      description: "Pisos de 3 dormitorios de 85 m² en barrios consolidados desde 75.000 € hasta 115.000 €. Una de las capitales de provincia con mejores precios de España."
    },
    idealistaListings: [
      {
        title: "Piso reformado de 3 dormitorios junto a Santa Clara",
        price: 88000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/zamora-zamora/"
      },
      {
        title: "Vivienda exterior muy luminosa en barrio Los Bloques",
        price: 79000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "3ª planta exterior",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/zamora-zamora/"
      },
      {
        title: "Piso con garaje y trastero cerca de la Estación AVE",
        price: 99000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "2ª planta con plaza de parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/zamora-zamora/"
      },
      {
        title: "Ático con terraza y vistas panorámicas a la Catedral",
        price: 125000,
        m2: 105,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/zamora-zamora/"
      },
      {
        title: "Chalet adosado con jardín privado en Vista Alegre",
        price: 149000,
        m2: 170,
        rooms: 4,
        baths: 3,
        floor: "Chalet 3 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/zamora-zamora/"
      }
    ],
    healthcare: {
      mainHospital: "Complejo Asistencial de Zamora (Hospital Virgen de la Concha y Hospital Provincial)",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [41.5160, -5.7480],
      healthCentersCount: 5,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Urgencias 24h, UCI y todas las especialidades sanitarias autonómicas de SACYL",
      description: "Servicio de salud de primer nivel sin masificaciones ni listas de espera prolongadas.",
      facilities: [
        { name: "Hospital Virgen de la Concha", type: "hospital", coords: [41.5160, -5.7480], address: "Av. Requejo, 35", emergency: "Urgencias Generales y Traumatología 24h" },
        { name: "Centro de Salud Santa Elena", type: "health_center", coords: [41.5060, -5.7460], address: "Calle Santa Elena, 12", emergency: "Atención Primaria y Urgencias PAC" },
        { name: "Centro de Salud Puerta Nueva", type: "health_center", coords: [41.5020, -5.7380], address: "Calle Puerta Nueva, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud Virgen de la Concha", type: "health_center", coords: [41.5140, -5.7500], address: "Av. Requejo, 37", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Agroalimentación de élite (Queso Zamorano D.O., Vino Toro D.O., legumbres Fuentesaúco), sector servicios, turismo monumental y funcionariado.",
      industrialParks: "Polígono Industrial La Hiniesta y Polígono Los Llanos.",
      localCommerce: "Comercio de proximidad en la Calle Santa Clara y Plaza Mayor, con gran fidelidad vecinal.",
      description: "Excelente ciudad para jubilación activa o para teletrabajadores que quieran la categoría de capital de provincia con conexión AVE."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de Zamora (edificio modernista de 1904 repleto de puestos tradicionales).",
      supermarkets: "Mercadona (4), Carrefour, Dia, ALDI, Lidl, Alimerka, Froiz.",
      groceryCostIndex: "Bajo y con excelente producto castellano de matanza y huerta del Duero."
    },
    employmentAndJobs: {
      topSectors: ["Administración Pública y Educación", "Sector Sanitario", "Industria Láctea y Agroalimentaria", "Teletrabajo"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Zamora Coworking Espacio", "Vivero de Empresas de la Cámara"],
      avgSalaryRange: "20.000 € - 30.000 € brutos/año",
      description: "Cero atascos diarios; se puede ir a pie o en bicicleta a cualquier punto en menos de 20 minutos."
    },
    transportAndConnectivity: {
      hasAVE: true,
      trainStation: "Estación de Zamora (AVE directo Madrid Chamartín en 1h 10 min, y hacia Galicia)",
      travelTimeToMadrid: "1 hora y 10 minutos (AVE)",
      highways: "Autovía Ruta de la Plata A-66 y Autovía del Duero A-11.",
      nearestAirport: "Aeropuerto de Valladolid (a 100 km) y Madrid-Barajas (AVE directo en 1h 20 min).",
      busRoutes: {
        station: "Estación de Autobuses de Zamora (Calle Alfonso Peña, s/n)",
        mainLines: [
          { destination: "Salamanca (Campus y Estación)", company: "Avanza Bus (Auto-Res)", frequency: "Cada 45-60 min", duration: "45 min", firstLastDepartures: "06:45 - 22:00", type: "Regional" },
          { destination: "Madrid (Moncloa / Méndez Álvaro)", company: "Avanza Bus", frequency: "8 frecuencias diarias", duration: "2h 45min", firstLastDepartures: "06:30 - 20:30", type: "Nacional" },
          { destination: "Valladolid Capital", company: "Linecar", frequency: "Cada hora", duration: "1h 15min", firstLastDepartures: "07:00 - 21:00", type: "Regional" },
          { destination: "Puebla de Sanabria y Benavente", company: "Tamame / Vía de la Plata", frequency: "5 salidas diarias", duration: "50 min (Benavente) / 1h 15min (Sanabria)", firstLastDepartures: "08:00 - 20:00", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus Viriato de Zamora (Universidad de Salamanca - Grados en Enfermería, Informática, Relaciones Laborales y Magisterio).",
      schoolsCount: "19 centros escolares, conservatorio y 6 institutos de secundaria.",
      culturalHighlights: "Catedral de Zamora con su cúpula bizantina, Castillo de Zamora, Museo Baltasar Lobo y famosa Semana Santa (Interés Turístico Internacional).",
      natureAndParks: "Paseo fluvial de las Aceñas de Chiva y Olivares a orillas del Duero, Parque de la Marina y Parque Natural de Arribes del Duero (a 45 min)."
    }
  },
  {
    id: "palencia",
    name: "Palencia",
    province: "Palencia",
    region: "Castilla y León",
    coordinates: [42.0095, -4.5286],
    priceM2: 1220,
    avgFlatPrice: 103700,
    avgRentPrice: 550,
    estimatedMortgage: 388,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Conexión AVE", "Ciudad más verde de España", "Automoción Renault", "Capital Tranquila"],
    hasAVE: true,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 8.8,
    qualityOfLifeScore: 9.5,
    summary: "Reconocida constantemente como una de las ciudades con más metros cuadrados de zonas verdes por habitante de España. Cuenta con factoría de Renault, excelente AVE (a 1h 20m de Madrid y 25m de Valladolid) y un estilo de vida pulcro y apacible.",
    demographics: {
      population: 76331,
      density: "798 hab/km²",
      averageAge: 47.4,
      foreignPopulationPct: "6.2%",
      climate: {
        sunnyDays: 260,
        avgTempSummer: "29°C máx / 14°C mín",
        avgTempWinter: "8°C máx / 0°C mín",
        monthlyTemps: [3, 5, 9, 12, 16, 21, 24, 24, 19, 12, 7, 3],
        description: "Mediterráneo continental puro, veranos frescos muy apetecibles para huir del calor sofocante del sur."
      }
    },
    housing: {
      priceM2: 1220,
      avgFlatPrice: 103700,
      priceTrend: "+2.3% anual",
      rentalYield: "6.4%",
      description: "Pisos muy cuidados de 85 m² en zonas consolidadas entre 80.000 € y 125.000 €. Parque residencial de calidad constructiva contrastada."
    },
    idealistaListings: [
      {
        title: "Piso cuidado y soleado junto al Parque del Salón",
        price: 92000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "3ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/palencia-palencia/"
      },
      {
        title: "Vivienda céntrica en Calle Mayor con ascensor",
        price: 105000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "2ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/palencia-palencia/"
      },
      {
        title: "Piso exterior con garaje en barrio San Antonio",
        price: 110000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "4ª planta con garaje y trastero",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/palencia-palencia/"
      },
      {
        title: "Ático con terraza amplia y vistas al Cristo del Otero",
        price: 135000,
        m2: 105,
        rooms: 3,
        baths: 2,
        floor: "6ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/palencia-palencia/"
      },
      {
        title: "Chalet unifamiliar con jardín en zona residencial",
        price: 168000,
        m2: 180,
        rooms: 4,
        baths: 3,
        floor: "Chalet adosado",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/palencia-palencia/"
      }
    ],
    healthcare: {
      mainHospital: "Complejo Asistencial Universitario de Palencia (Hospital Río Carrión y San Telmo)",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [42.0190, -4.5380],
      healthCentersCount: 6,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de Urgencias 24h, UCI y helicóptero de emergencias 112",
      description: "Nuevo bloque técnico hospitalario en ampliación dotado con tecnología de vanguardia y atención personalizada.",
      facilities: [
        { name: "Hospital Universitario Río Carrión", type: "hospital", coords: [42.0190, -4.5380], address: "Av. Donantes de Sangre, s/n", emergency: "Urgencias Generales y UCI 24h" },
        { name: "Centro de Salud Jardinillos", type: "health_center", coords: [42.0120, -4.5310], address: "Calle Jardinillos, 4", emergency: "Atención Primaria y Urgencias PAC" },
        { name: "Centro de Salud Eras del Bosque", type: "health_center", coords: [42.0080, -4.5200], address: "Calle Eras del Bosque, 18", emergency: "Atención Primaria" },
        { name: "Centro de Salud La Puebla", type: "health_center", coords: [42.0100, -4.5270], address: "Calle La Puebla, 22", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Industria de automoción (Factoría Renault de Villamuriel), agroalimentación (Galletas Gullón, Siro, Seda Outspan), metal y distribución.",
      industrialParks: "Polígono Industrial de Palencia (uno de los más extensos del norte).",
      localCommerce: "La animada Calle Mayor peatonal es el corazón vertebrador del comercio, repleta de cafeterías y tiendas de moda.",
      description: "Economía sólida con empleo industrial estable y convenios laborales bien retribuidos."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de Palencia (Plaza Mayor/Calle Burgos, con lechazo churro palentino y quesos castellanos).",
      supermarkets: "Mercadona (4), Carrefour, ALDI, Lidl, Alimerka, Dia, Gadis.",
      groceryCostIndex: "Muy asequible y con producto de la huerta palentina de gran categoría."
    },
    employmentAndJobs: {
      topSectors: ["Industria del Automóvil y Auxiliar", "Agroalimentación y Fabricación", "Sanidad y Educación", "Sector Ferroviario"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Espacio Coworking Palencia Avanza", "Vivero de Empresas CEEI"],
      avgSalaryRange: "22.000 € - 32.000 € brutos/año",
      description: "Uno de los salarios medios más competitivos en relación con el bajo precio de la vivienda de toda la comunidad."
    },
    transportAndConnectivity: {
      hasAVE: true,
      trainStation: "Estación de Palencia (Nudo AVE norte hacia Madrid, Santander, Asturias y Galicia)",
      travelTimeToMadrid: "1 hora y 20 minutos (AVE)",
      travelTimeToValladolid: "25 minutos en tren o autovía A-67",
      highways: "Autovía A-67 (Palencia - Santander) y A-62 (Autovía de Castilla).",
      nearestAirport: "Aeropuerto de Valladolid a sólo 45 km.",
      busRoutes: {
        station: "Estación de Autobuses de Palencia (Junto a Estación del Norte/AVE)",
        mainLines: [
          { destination: "Valladolid (Estación de Autobuses / Universidades)", company: "La Regional V.S.A.", frequency: "Cada 30 min", duration: "35 min", firstLastDepartures: "06:15 - 22:30", type: "Regional" },
          { destination: "Santander y Torrelavega", company: "ALSA", frequency: "6 salidas diarias", duration: "2h", firstLastDepartures: "07:30 - 21:00", type: "Nacional" },
          { destination: "Burgos, Bilbao y San Sebastián", company: "ALSA", frequency: "5 salidas diarias", duration: "1h (Burgos) / 2h 45min (Bilbao)", firstLastDepartures: "08:00 - 20:15", type: "Nacional" },
          { destination: "Madrid (Intercambiador Moncloa / T4)", company: "ALSA", frequency: "7 frecuencias diarias", duration: "2h 45min", firstLastDepartures: "06:30 - 20:00", type: "Nacional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus La Yutera de Palencia (Universidad de Valladolid - Grados en Agrónomas, Forestales, Magisterio, Relaciones Laborales).",
      schoolsCount: "22 colegios, conservatorio profesional y 8 institutos.",
      culturalHighlights: "Catedral de San Antolín ('La Bella Desconocida'), estatua del Cristo del Otero (una de las más altas del mundo) y Calle Mayor.",
      natureAndParks: "Parque del Salón de Isabel II, Ribera del Río Carrión, Isla Dos Aguas y Monte El Viejo."
    }
  },
  {
    id: "lugo",
    name: "Lugo",
    province: "Lugo",
    region: "Galicia",
    coordinates: [43.0097, -7.5560],
    priceM2: 1150,
    avgFlatPrice: 97750,
    avgRentPrice: 490,
    estimatedMortgage: 365,
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Muralla Romana UNESCO", "Hospital HULA Moderno", "Gastronomía Gallega", "Seguridad Ciudadana"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.0,
    qualityOfLifeScore: 9.6,
    summary: "Ciudad bimilenaria rodeada por la única muralla romana del mundo conservada íntegra (UNESCO). Famosa por el lema '...e para comer, Lugo', presume de uno de los hospitales más modernos de España (HULA), naturaleza exuberante y bajísimo coste de vida.",
    demographics: {
      population: 97211,
      density: "294 hab/km²",
      averageAge: 46.8,
      foreignPopulationPct: "7.1%",
      climate: {
        sunnyDays: 220,
        avgTempSummer: "25°C máx / 13°C mín",
        avgTempWinter: "10°C máx / 3°C mín",
        monthlyTemps: [7, 8, 10, 12, 15, 18, 21, 21, 18, 14, 10, 7],
        description: "Oceánico con influencia de montaña; temperaturas veraniegas deliciosas y entorno verde todo el año."
      }
    },
    housing: {
      priceM2: 1150,
      avgFlatPrice: 97750,
      priceTrend: "+2.8% anual",
      rentalYield: "6.9%",
      description: "Pisos amplios de 90-100 m² en barrios como Augas Férreas, Fontiñas o Acea de Olga entre 75.000 € y 115.000 €."
    },
    idealistaListings: [
      {
        title: "Piso amplio y luminoso en Fontiñas con terraza",
        price: 85000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lugo-lugo/"
      },
      {
        title: "Vivienda exterior con vistas a la Muralla Romana",
        price: 105000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lugo-lugo/"
      },
      {
        title: "Piso seminuevo en Augas Férreas con garaje y trastero",
        price: 118000,
        m2: 100,
        rooms: 3,
        baths: 2,
        floor: "2ª planta con plaza de garaje",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lugo-lugo/"
      },
      {
        title: "Ático dúplex con terraza solárium y vistas despejadas",
        price: 139000,
        m2: 120,
        rooms: 4,
        baths: 2,
        floor: "5ª planta dúplex",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lugo-lugo/"
      },
      {
        title: "Casa de piedra gallega con finca a 5 min del centro",
        price: 155000,
        m2: 190,
        rooms: 4,
        baths: 3,
        floor: "Casa independiente con jardín",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lugo-lugo/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Universitario Lucus Augusti (HULA)",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [43.0270, -7.5320],
      healthCentersCount: 7,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias puntero, robótica Da Vinci, unidad de ictus y oncología avanzada",
      description: "El HULA es uno de los hospitales más vanguardistas, espaciosos y con mejores índices de satisfacción de usuarios de toda España.",
      facilities: [
        { name: "Hospital Universitario Lucus Augusti (HULA)", type: "hospital", coords: [43.0270, -7.5320], address: "Rúa Doutor Ulises Romero, 1", emergency: "Urgencias Generales y Materno-Infantiles 24h" },
        { name: "Centro de Saúde Praza de Ferrol", type: "health_center", coords: [43.0120, -7.5570], address: "Praza de Ferrol, 11", emergency: "Atención Primaria y Urgencias PAC" },
        { name: "Centro de Saúde Illas Canarias", type: "health_center", coords: [43.0170, -7.5450], address: "Rúa Illas Canarias, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Saúde Sagrado Corazón", type: "health_center", coords: [43.0230, -7.5600], address: "Rúa Serra de Ancares, 1", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Sector lácteo y agroganadero (primer productor lácteo de España), aeronáutica no tripulada (Polo Aeroespacial de Rozas), madera y servicios sanitarios.",
      industrialParks: "Polígono Industrial O Ceao y Polígono As Gándaras.",
      localCommerce: "Centro histórico peatonal repleto de comercios tradicionales, vinotecas de Riberas del Miño y tiendas de ropa.",
      description: "Gran crecimiento en el sector biotecnológico y tecnologías de drones e innovación aeroespacial con apoyo de la Xunta."
    },
    marketsAndGroceries: {
      municipalMarkets: "Plaza de Abastos de Lugo y Mercado Municipal de Quiroga Ballesteros (mariscos de las rías, pulpo á feira, ternera gallega suprema y quesos de O Cebreiro).",
      supermarkets: "Mercadona (4), Gadis (7), Froiz, Carrefour, ALDI, Lidl.",
      groceryCostIndex: "La mejor relación calidad/precio de España en alimentos frescos; marisco y carnes extraordinarias a precios asequibles."
    },
    employmentAndJobs: {
      topSectors: ["Sanidad y Biotecnología", "Industria Agroalimentaria y Láctea", "Tecnología Aeroespacial", "Sector Público y Docencia"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Lugo Coworking O Ceao", "Centro de Iniciativas Empresariais"],
      avgSalaryRange: "20.000 € - 29.000 € brutos/año",
      description: "Enorme calidad de vida para familias: tapas gratuitas abundantes con cada consumición, colegios de proximidad y aire limpio."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Lugo (enlaces a A Coruña, Monforte de Lemos y Madrid; modernización de vía rápida en marcha)",
      travelTimeToCoruna: "55 minutos por autovía A-6",
      travelTimeToSantiago: "1 hora por autovía A-54",
      highways: "Autovía A-6 (Madrid - A Coruña) y autovía A-54 directa a Santiago de Compostela.",
      nearestAirport: "Aeropuerto de Santiago de Compostela (a 90 km) y A Coruña (a 95 km).",
      busRoutes: {
        station: "Estación Intermodal de Autobuses de Lugo (Praza da Constitución, s/n)",
        mainLines: [
          { destination: "A Coruña (Estación y Hospitales)", company: "Monbus / Arriva", frequency: "Cada 45 min", duration: "1h 10min", firstLastDepartures: "06:30 - 21:30", type: "Regional" },
          { destination: "Santiago de Compostela (Campus y Aeropuerto)", company: "Monbus", frequency: "Cada 60 min", duration: "1h 20min", firstLastDepartures: "07:00 - 21:00", type: "Regional" },
          { destination: "Ourense y Vigo", company: "Monbus", frequency: "6 salidas diarias", duration: "1h 20min (Ourense) / 2h 15min (Vigo)", firstLastDepartures: "07:30 - 20:30", type: "Regional" },
          { destination: "Madrid (Moncloa / Méndez Álvaro)", company: "ALSA (Servicio Supra)", frequency: "5 salidas diarias", duration: "5h", firstLastDepartures: "08:00 - 23:30", type: "Nacional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Lugo de la Universidad de Santiago de Compostela (USC) - Facultades punteras en Veterinaria, Agronomía, Humanidades y ADE.",
      schoolsCount: "26 centros de enseñanza y 9 institutos.",
      culturalHighlights: "Paseo por lo alto de la Muralla Romana (2 km iluminados transitables), Catedral de Santa María, Termas Romanas y fiesta del Arde Lucus.",
      natureAndParks: "Parque Rosalía de Castro, Reserva de la Biosfera 'Terras do Miño' y senderos fluviales del Miño y Rato."
    }
  },
  {
    id: "ourense",
    name: "Ourense",
    province: "Ourense",
    region: "Galicia",
    coordinates: [42.3364, -7.8642],
    priceM2: 1280,
    avgFlatPrice: 108800,
    avgRentPrice: 530,
    estimatedMortgage: 407,
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Capital Termal", "Conexión AVE (2h 15m Madrid)", "Campus Universitario", "Río Miño"],
    hasAVE: true,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 8.7,
    qualityOfLifeScore: 9.3,
    summary: "Capital termal de Galicia, con manantiales de aguas termales al aire libre a más de 60°C a orillas del Miño. Cuenta con conexión de Alta Velocidad AVE a Madrid en 2h 15m, ambiente universitario, casco antiguo peatonal y precios inmobiliarios muy moderados.",
    demographics: {
      population: 103756,
      density: "1.226 hab/km²",
      averageAge: 48.0,
      foreignPopulationPct: "8.9%",
      climate: {
        sunnyDays: 245,
        avgTempSummer: "31°C máx / 16°C mín",
        avgTempWinter: "12°C máx / 4°C mín",
        monthlyTemps: [8, 9, 12, 14, 18, 22, 25, 25, 21, 16, 11, 8],
        description: "Microclima ourensano en el valle del Miño: veranos más calurosos y soleados que el resto de Galicia e inviernos suaves."
      }
    },
    housing: {
      priceM2: 1280,
      avgFlatPrice: 108800,
      priceTrend: "+2.6% anual",
      rentalYield: "6.5%",
      description: "Pisos de 3 dormitorios de 85 m² en barrios como O Couto, As Lagoas o Mariñamansa por 85.000 € - 130.000 €."
    },
    idealistaListings: [
      {
        title: "Piso luminoso con vistas en O Couto",
        price: 92000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "3ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ourense-ourense/"
      },
      {
        title: "Vivienda céntrica con balcón cerca de Rúa do Paseo",
        price: 115000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "2ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ourense-ourense/"
      },
      {
        title: "Piso exterior en As Lagoas cerca de la Universidad",
        price: 108000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "1ª planta exterior",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ourense-ourense/"
      },
      {
        title: "Ático con amplia terraza y vistas al río Miño",
        price: 145000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ourense-ourense/"
      },
      {
        title: "Chalet con jardín y piscina en urbanización cercana",
        price: 185000,
        m2: 200,
        rooms: 4,
        baths: 3,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ourense-ourense/"
      }
    ],
    healthcare: {
      mainHospital: "Complejo Hospitalario Universitario de Ourense (CHUO)",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [42.3310, -7.8540],
      healthCentersCount: 8,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias de alta tecnología, edificio de hospitalización nuevo y helipuerto 24h",
      description: "Macrohospital universitario de primer nivel recientemente ampliado con quirófanos integrados de última generación.",
      facilities: [
        { name: "Hospital Universitario CHUO", type: "hospital", coords: [42.3310, -7.8540], address: "Rúa Ramón Puga Noguerol, 54", emergency: "Urgencias Generales y Materno 24h" },
        { name: "Centro de Saúde Valle Inclán", type: "health_center", coords: [42.3390, -7.8620], address: "Rúa Valle Inclán, 14", emergency: "Atención Primaria y Urgencias PAC" },
        { name: "Centro de Saúde A Ponte", type: "health_center", coords: [42.3480, -7.8680], address: "Av. de Santiago, 32", emergency: "Atención Primaria" },
        { name: "Centro de Saúde Novoa Santos", type: "health_center", coords: [42.3300, -7.8560], address: "Rúa Juan XXIII, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Moda y confección (sede histórica de grandes diseñadores), automoción (CIE Automotive), enología D.O. Ribeiro y turismo termal.",
      industrialParks: "Polígono Industrial San Cibrao das Viñas (el mayor de Galicia interior).",
      localCommerce: "Centro comercial peatonal animadísimo en Rúa do Paseo, Santo Domingo y Plaza Mayor.",
      description: "Potente base manufacturera en San Cibrao que convive con un floreciente sector tecnológico y de turismo de salud y balnearios."
    },
    marketsAndGroceries: {
      municipalMarkets: "Plaza de Abastos de Ourense (histórico mercado de abastos junto a As Burgas) y Mercado de A Ponte.",
      supermarkets: "Gadis (6), Mercadona (4), Froiz, Carrefour, Lidl, ALDI.",
      groceryCostIndex: "Muy económico; tradición de empanadas artesanas, pan de Cea (IGP) y vinos de ribeira a precios reducidos."
    },
    employmentAndJobs: {
      topSectors: ["Sector Sanitario y Cuidados", "Industria Auxiliar de Automoción", "Textil y Moda", "Hostelería y Termalismo"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Espacio Arroelo Coworking", "Cámara de Comercio de Ourense"],
      avgSalaryRange: "21.000 € - 30.000 € brutos/año",
      description: "La llegada del AVE ha convertido a Ourense en destino predilecto para profesionales madrileños y gallegos que teletrabajan a tiempo parcial."
    },
    transportAndConnectivity: {
      hasAVE: true,
      trainStation: "Estación de Ourense-Empalme (puerta de entrada del AVE a Galicia: 2h 15m a Madrid, 35m a Santiago, 1h a A Coruña)",
      travelTimeToMadrid: "2 horas y 15 minutos (AVE)",
      travelTimeToSantiago: "38 minutos (Avant)",
      highways: "Autovía A-52 (Rías Baixas a Madrid y Vigo) y Autovía AG-53 a Santiago.",
      nearestAirport: "Aeropuerto de Vigo (a 95 km) y Santiago de Compostela (a 105 km).",
      busRoutes: {
        station: "Estación Intermodal de Ourense (Junto a Ourense-Empalme)",
        mainLines: [
          { destination: "Vigo y Pontevedra", company: "Monbus", frequency: "Cada hora", duration: "1h 10min (Vigo) / 1h 25min (Pontevedra)", firstLastDepartures: "06:30 - 21:30", type: "Regional" },
          { destination: "Santiago de Compostela y A Coruña", company: "Monbus", frequency: "8 frecuencias diarias", duration: "1h 15min (Santiago)", firstLastDepartures: "07:00 - 21:00", type: "Regional" },
          { destination: "Madrid (Estación Sur / Barajas T4)", company: "ALSA", frequency: "4 frecuencias diarias", duration: "5h 15min", firstLastDepartures: "08:15 - 23:45", type: "Nacional" },
          { destination: "Verín, Xinzo y Chaves (Portugal)", company: "Monbus / Auto-Viaçao", frequency: "6 salidas diarias", duration: "50 min (Verín) / 1h 20min (Chaves)", firstLastDepartures: "07:30 - 20:00", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Ourense de la Universidad de Vigo (Grados en Informática, Derecho, Empresariales, Historia y Turismo).",
      schoolsCount: "28 centros educativos y 11 institutos.",
      culturalHighlights: "Fuentes termales de As Burgas, Termas de Outariz y Chavasqueira, Catedral de San Martín con el Pórtico del Paraíso y Puente Romano sobre el Miño.",
      natureAndParks: "Paseo termal del Miño (más de 14 km peatonales y ciclables), Parque de San Lázaro y Parque Miño."
    }
  },
  {
    id: "alcoi",
    name: "Alcoi / Alcoy",
    province: "Alicante",
    region: "Comunidad Valenciana",
    coordinates: [38.7054, -0.4743],
    priceM2: 740,
    avgFlatPrice: 62900,
    avgRentPrice: 420,
    estimatedMortgage: 235,
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Campus UPV Politécnico", "Hospital Verge dels Lliris", "Entre Parques Naturales", "Modernismo y Puentes"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.3,
    qualityOfLifeScore: 9.0,
    summary: "Conocida como la 'Ciudad de los Puentes' y pionera de la Revolución Industrial en el Levante. Enclavada entre dos Parques Naturales espectaculares (Font Roja y Mariola), cuenta con campus de la prestigiosa Universidad Politécnica de Valencia y precios de vivienda excepcionalmente bajos a 45 min de Alicante.",
    demographics: {
      population: 59381,
      density: "472 hab/km²",
      averageAge: 45.2,
      foreignPopulationPct: "8.1%",
      climate: {
        sunnyDays: 295,
        avgTempSummer: "30°C máx / 18°C mín",
        avgTempWinter: "13°C máx / 4°C mín",
        monthlyTemps: [9, 10, 13, 16, 20, 25, 28, 28, 23, 18, 13, 9],
        description: "Mediterráneo de montaña; veranos menos bochornosos que en la costa y aire puro de pinar y carrascal."
      }
    },
    housing: {
      priceM2: 740,
      avgFlatPrice: 62900,
      priceTrend: "+2.1% anual",
      rentalYield: "8.5%",
      description: "Pisos de 85 m² en barrios como Santa Rosa o Ensanche entre 45.000 € y 75.000 €. Casas modernistas y con vistas a la montaña por precios muy reducidos."
    },
    idealistaListings: [
      {
        title: "Piso soleado y reformado en Santa Rosa",
        price: 55000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/alcoy-alcoi-alicante/"
      },
      {
        title: "Vivienda exterior con balcón en el Ensanche",
        price: 65000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/alcoy-alcoi-alicante/"
      },
      {
        title: "Piso amplio junto al Campus Politécnico UPV",
        price: 70000,
        m2: 95,
        rooms: 4,
        baths: 2,
        floor: "1ª planta ideal inversores",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/alcoy-alcoi-alicante/"
      },
      {
        title: "Ático con gran terraza y vistas al Parque Font Roja",
        price: 89000,
        m2: 105,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/alcoy-alcoi-alicante/"
      },
      {
        title: "Casa señorial modernista en el casco histórico",
        price: 110000,
        m2: 160,
        rooms: 4,
        baths: 2,
        floor: "Casa con terraza",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/alcoy-alcoi-alicante/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital General Universitari Verge dels Lliris",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [38.7060, -0.4630],
      healthCentersCount: 5,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y helicóptero de emergencias",
      description: "Hospital comarcal público de alta capacidad que atiende a toda la comarca de l'Alcoià y El Comtat.",
      facilities: [
        { name: "Hospital Verge dels Lliris", type: "hospital", coords: [38.7060, -0.4630], address: "Polígon Caramanxel, s/n", emergency: "Urgencias Comarcales 24h" },
        { name: "Centro de Salud La Bassa", type: "health_center", coords: [38.6980, -0.4760], address: "Calle Camí, 42", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud La Fàbrica", type: "health_center", coords: [38.7040, -0.4790], address: "Carrer de la Sardina, 2", emergency: "Atención Primaria" },
        { name: "Centro de Salud Plaça de Dins", type: "health_center", coords: [38.7000, -0.4730], address: "Plaça de Dins, 8", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Industria textil técnica, cosmética y packaging, metalmecánica, diseño industrial y tecnologías de la información.",
      industrialParks: "Polígono Cotes Baixes, Cotes Altes y Santiago Payá.",
      localCommerce: "Comercio tradicional en el casco histórico y ejes de Alameda Camilo Sesto y Avenida País Valencià.",
      description: "Fuerte sinergia entre los ingenieros graduados en la UPV y el tejido empresarial industrial exportador."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercat de Sant Roc y Mercat de Sant Mateu (productos de montaña, embutidos tradicionales como la sobrasada alcoyana y frutas del Comtat).",
      supermarkets: "Mercadona (3), Carrefour, Consum (3), ALDI, Lidl, Dia.",
      groceryCostIndex: "Muy asequible; vida diaria barata con mercados tradicionales de barrio."
    },
    employmentAndJobs: {
      topSectors: ["Ingeniería y Diseño Industrial", "Sector Textil y Plásticos", "Docencia e Investigación Universitaria", "Sanidad"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Ágora Alcoy Coworking Municipal", "Espai Coworking Cotes Baixes"],
      avgSalaryRange: "19.500 € - 28.500 € brutos/año",
      description: "Población universitaria dinámica (miles de estudiantes de ingeniería) que aportan vida joven y ambiente cultural a la ciudad."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Alcoi (Línea ferroviaria con Xàtiva y Valencia)",
      travelTimeToAlicante: "45 minutos por autovía A-7",
      travelTimeToValencia: "1 hora y 10 minutos por autovía A-7",
      highways: "Autovía del Mediterráneo interior A-7 directa a Alicante y Valencia.",
      nearestAirport: "Aeropuerto de Alicante-Elche a 65 km (45 min en coche).",
      busRoutes: {
        station: "Estación de Autobuses de Alcoy (Carrer Joan Gil Albert, s/n)",
        mainLines: [
          { destination: "Alicante (Estación / Plaza Luceros / Universidad)", company: "Vectalia (Subús)", frequency: "Cada 45 min", duration: "55 min", firstLastDepartures: "06:15 - 21:45", type: "Regional" },
          { destination: "Valencia (Estación de Autobuses)", company: "ALSA / La Concepción", frequency: "Cada 60 min", duration: "1h 30min", firstLastDepartures: "06:45 - 20:30", type: "Regional" },
          { destination: "Gandía y Costa Blanca", company: "ALSA", frequency: "4 frecuencias diarias", duration: "1h", firstLastDepartures: "08:00 - 19:45", type: "Regional" },
          { destination: "Ibi, Onil y Villena", company: "Autocares Martínez", frequency: "6 salidas diarias", duration: "35 min", firstLastDepartures: "07:15 - 20:00", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus d'Alcoi de la Universitat Politècnica de València (UPV) y Escuela Superior de Arte y Diseño (EASD).",
      schoolsCount: "17 colegios y 5 institutos de secundaria.",
      culturalHighlights: "Fiesta de Moros y Cristianos (de Interés Turístico Internacional), Cabalgata de Reyes Magos (la más antigua de España), Ruta del Modernismo y Teatro Calderón.",
      natureAndParks: "Parque Natural del Carrascal de la Font Roja (uno de los bosques mediterráneos mejor conservados de la península) y Parque Natural de la Sierra de Mariola."
    }
  },
  {
    id: "caceres",
    name: "Cáceres",
    province: "Cáceres",
    region: "Extremadura",
    coordinates: [39.4753, -6.3723],
    priceM2: 1200,
    avgFlatPrice: 102000,
    avgRentPrice: 520,
    estimatedMortgage: 382,
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Patrimonio Humanidad UNESCO", "Hospital Universitario", "Campus Universitario", "Gastronomía"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 8.9,
    qualityOfLifeScore: 9.5,
    summary: "Su Ciudad Monumental es el tercer conjunto histórico-artístico medieval y renacentista mejor conservado de Europa (UNESCO). Ciudad verde, universitaria, con bajísima criminalidad, hospital universitario de vanguardia y precios muy accesibles.",
    demographics: {
      population: 96255,
      density: "55 hab/km²",
      averageAge: 44.9,
      foreignPopulationPct: "5.4%",
      climate: {
        sunnyDays: 290,
        avgTempSummer: "33°C máx / 19°C mín",
        avgTempWinter: "13°C máx / 3°C mín",
        monthlyTemps: [7, 9, 13, 16, 21, 27, 31, 30, 25, 18, 11, 7],
        description: "Mediterráneo continental con cielos extraordinariamente limpios y luminosos la mayor parte del año."
      }
    },
    housing: {
      priceM2: 1200,
      avgFlatPrice: 102000,
      priceTrend: "+2.4% anual",
      rentalYield: "6.8%",
      description: "Pisos de 85 m² en zonas residenciales modernas (como R-66, Nuevo Cáceres o Castellanos) entre 80.000 € y 120.000 €."
    },
    idealistaListings: [
      {
        title: "Piso soleado de 3 dormitorios en Nuevo Cáceres",
        price: 95000,
        m2: 88,
        rooms: 3,
        baths: 2,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/caceres-caceres/"
      },
      {
        title: "Vivienda céntrica reformada junto a Plaza Mayor",
        price: 110000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/caceres-caceres/"
      },
      {
        title: "Piso en R-66 con piscina comunitaria y garaje",
        price: 125000,
        m2: 100,
        rooms: 3,
        baths: 2,
        floor: "1ª planta con plaza de parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/caceres-caceres/"
      },
      {
        title: "Ático con gran terraza de 35m² en Montesol",
        price: 148000,
        m2: 115,
        rooms: 4,
        baths: 2,
        floor: "4ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/caceres-caceres/"
      },
      {
        title: "Chalet pareado con amplio jardín privado",
        price: 175000,
        m2: 190,
        rooms: 4,
        baths: 3,
        floor: "Chalet 2 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/caceres-caceres/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Universitario de Cáceres (inaugurado recientemente con alta tecnología)",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [39.4620, -6.3460],
      healthCentersCount: 7,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias de máxima categoría, cirugía robótica y UCI",
      description: "Moderno complejo hospitalario público con helisuperficie y todas las especialidades sanitarias autonómicas.",
      facilities: [
        { name: "Hospital Universitario de Cáceres", type: "hospital", coords: [39.4620, -6.3460], address: "Av. de la Universidad, s/n", emergency: "Urgencias Generales y UCI 24h" },
        { name: "Centro de Salud Manuel Encinas", type: "health_center", coords: [39.4720, -6.3770], address: "Av. Virgen de Guadalupe, 20", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Plaza de Argel", type: "health_center", coords: [39.4790, -6.3650], address: "Plaza de Argel, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud San Pedro de Alcántara", type: "health_center", coords: [39.4730, -6.3820], address: "Av. Cervantes, 8", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Sector tecnológico y software (Centro de Cirugía de Mínima Invasión CCMI, Parque Científico y Tecnológico), turismo cultural, administración pública y gastronomía.",
      industrialParks: "Polígono Industrial Las Capellanías y Polígono Charca Musia.",
      localCommerce: "Comercio alrededor de Calle Pintores, San Pedro de Alcántara y Centro Comercial Ruta de la Plata.",
      description: "Ecosistema de investigación biomédica y tecnológica en auge con talento formado en la Universidad de Extremadura."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de la Plaza Mayor / Calle Ronda del Carmen y Mercado de San Blas.",
      supermarkets: "Mercadona (4), Carrefour, Lidl, ALDI, Dia, Tambo.",
      groceryCostIndex: "Muy asequible; jamón ibérico de Dehesa de Extremadura, pimentón de la Vera y quesos Torta del Casar a precios de origen."
    },
    employmentAndJobs: {
      topSectors: ["Tecnología y Biomédica", "Administración Pública y Educación", "Hostelería y Turismo", "Sanidad"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Garaje 2.0 Coworking Municipal", "Cáceres Tech Hub"],
      avgSalaryRange: "20.000 € - 29.000 € brutos/año",
      description: "Excelente ciudad para criar hijos o teletrabajar: aire limpio, distancias cortas, ambiente cultural y gran seguridad ciudadana."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Cáceres (conexión por tren Alvia rápido a Madrid en 2h 45 min; futura línea de alta velocidad)",
      travelTimeToMadrid: "2 horas y 45 minutos por autovía A-5 / A-58",
      highways: "Autovía Ruta de la Plata A-66 (Gijón - Sevilla) y Autovía A-58.",
      nearestAirport: "Aeropuerto de Badajoz a 90 km y Madrid-Barajas a 300 km.",
      busRoutes: {
        station: "Estación de Autobuses de Cáceres (Calle Túnez, s/n)",
        mainLines: [
          { destination: "Madrid (Estación Sur Méndez Álvaro)", company: "Avanza Bus (Auto-Res)", frequency: "Cada 1h 30min (8 salidas/día)", duration: "3h 15min", firstLastDepartures: "06:00 - 21:30", type: "Nacional" },
          { destination: "Mérida y Badajoz Capital", company: "LEDA / ALSA", frequency: "Cada 60 min", duration: "50 min (Mérida) / 1h 15min (Badajoz)", firstLastDepartures: "06:45 - 21:45", type: "Regional" },
          { destination: "Salamanca (Línea Vía de la Plata)", company: "ALSA", frequency: "6 frecuencias diarias", duration: "2h 15min", firstLastDepartures: "07:30 - 20:00", type: "Nacional" },
          { destination: "Sevilla (Plaza de Armas)", company: "ALSA Ruta de la Plata", frequency: "5 salidas diarias", duration: "3h 15min", firstLastDepartures: "08:15 - 19:30", type: "Nacional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Cáceres de la Universidad de Extremadura (UEX) - Facultades de Informática, Politécnica, Veterinaria, Enfermería y Derecho.",
      schoolsCount: "27 centros de educación y 9 institutos.",
      culturalHighlights: "Ciudad Monumental (escenario histórico de cine y televisión), Museo Helga de Alvear de Arte Contemporáneo y festival WOMAD.",
      natureAndParks: "Parque del Príncipe (inmenso pulmón verde urbano con museo de esculturas al aire libre) y proximidad al Parque Nacional de Monfragüe."
    }
  },
  {
    id: "ferrol",
    name: "Ferrol",
    province: "A Coruña",
    region: "Galicia",
    coordinates: [43.4832, -8.2369],
    priceM2: 890,
    avgFlatPrice: 75650,
    avgRentPrice: 430,
    estimatedMortgage: 283,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Ciudad Costera", "Hospital Arquitecto Marcide", "Playas Salvajes de Surf", "Precios Mínimos en la Costa"],
    hasAVE: false,
    hasHospital: true,
    coastal: true,
    costOfLivingScore: 9.3,
    qualityOfLifeScore: 8.9,
    summary: "Ciudad costera en una ría espectacular, cuna de la construcción naval en España y rodeada de algunas de las mejores playas de arena blanca y olas de surf de Europa (Doniños, Pantín). Ofrece el metro cuadrado costero más barato de todo el norte de España.",
    demographics: {
      population: 64180,
      density: "782 hab/km²",
      averageAge: 47.9,
      foreignPopulationPct: "5.8%",
      climate: {
        sunnyDays: 215,
        avgTempSummer: "23°C máx / 15°C mín",
        avgTempWinter: "13°C máx / 7°C mín",
        monthlyTemps: [10, 11, 12, 13, 15, 18, 20, 21, 19, 16, 13, 10],
        description: "Oceánico templado puro, sin extremos de frío ni calor; ideal para amantes de las temperaturas suaves y la brisa marina."
      }
    },
    housing: {
      priceM2: 890,
      avgFlatPrice: 75650,
      priceTrend: "+3.1% anual",
      rentalYield: "7.7%",
      description: "Pisos de 85 m² en el centro histórico de la Magdalena o en Ultramar entre 50.000 € y 85.000 €. Áticos con vistas a la ría por menos de 115.000 €."
    },
    idealistaListings: [
      {
        title: "Piso clásico con galerías en el Barrio de la Magdalena",
        price: 68000,
        m2: 88,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior con galería",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ferrol-a-coruna/"
      },
      {
        title: "Vivienda exterior reformada y luminosa en Ultramar",
        price: 74000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ferrol-a-coruna/"
      },
      {
        title: "Piso con vistas a la ría y plaza de garaje",
        price: 85000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "4ª planta con ascensor y parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ferrol-a-coruna/"
      },
      {
        title: "Ático con terraza solárium y vistas panorámicas al mar",
        price: 110000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ferrol-a-coruna/"
      },
      {
        title: "Casa unifamiliar con jardín a 5 min de la playa de Doniños",
        price: 135000,
        m2: 165,
        rooms: 4,
        baths: 2,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/ferrol-a-coruna/"
      }
    ],
    healthcare: {
      mainHospital: "Complejo Hospitalario Universitario de Ferrol (CHUF - Hospital Arquitecto Marcide)",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [43.5040, -8.2120],
      healthCentersCount: 6,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias 24h, ampliación de nuevo bloque quirúrgico y hospital de día",
      description: "Hospital público de alta resolución con amplia dotación de especialidades médicas y quirúrgicas.",
      facilities: [
        { name: "Hospital Arquitecto Marcide (CHUF)", type: "hospital", coords: [43.5040, -8.2120], address: "Ctra. San Pedro de Leixa, s/n", emergency: "Urgencias Generales y Pediátricas 24h" },
        { name: "Centro de Saúde Fontenla Maristany", type: "health_center", coords: [43.4860, -8.2280], address: "Praza de España, s/n", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Saúde Caranza", type: "health_center", coords: [43.4920, -8.2080], address: "Av. Castelao, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Saúde Serantes", type: "health_center", coords: [43.4980, -8.2460], address: "Ctra. de Catabois, 18", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Construcción naval militar y civil de alta tecnología, energía eólica marina (offshore wind), logística portuaria y defensa.",
      industrialParks: "Polígono Industrial Río do Pozo (uno de los mayores polígonos del norte gallego) y A Gándara.",
      localCommerce: "Comercio en la cuadrícula modernista del Barrio de la Magdalena y Centro Comercial Odeón.",
      description: "Centro neurálgico de la eólica marina flotante en Europa, con gran volumen de contratación técnica industrial."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal de la Magdalena y Mercado de Recimil (pescados y mariscos frescos recién descargados de la lonja).",
      supermarkets: "Gadis (7), Mercadona (3), Froiz, Alcampo, Lidl, ALDI.",
      groceryCostIndex: "Extraordinariamente barato en pescados de lonja (merluza del pincho, pulpo, nécoras) y pan gallego tradicional."
    },
    employmentAndJobs: {
      topSectors: ["Ingeniería Naval e Industrial", "Energía Eólica Marina", "Sanidad y Cuidados", "Logística y Puerto"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking Ferrolterra", "Espazo Compartido Ferrol"],
      avgSalaryRange: "20.500 € - 31.000 € brutos/año",
      description: "Paraíso para apasionados del mar, deportes náuticos y surf que quieran vivir junto al océano pagando una fracción de los precios de otras costas."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Ferrol (Conexión directa con A Coruña y línea de ancho métrico Feve por la costa cantábrica)",
      travelTimeToCoruna: "35 minutos en coche o autobús por autopista AP-9",
      highways: "Autopista del Atlántico AP-9 y autovía Ferrol-Vilalba AG-64 conectando con la A-6.",
      nearestAirport: "Aeropuerto de A Coruña a sólo 45 km (35 min).",
      busRoutes: {
        station: "Estación de Autobuses de Ferrol (Praza Camilo José Cela, s/n)",
        mainLines: [
          { destination: "A Coruña (Estación de Autobuses / Plaza de Pontevedra)", company: "Arriva Galicia (Directo AP-9)", frequency: "Cada 30 min (alta frecuencia)", duration: "40 min", firstLastDepartures: "06:00 - 22:30", type: "Regional" },
          { destination: "Santiago de Compostela", company: "Monbus", frequency: "Cada 60 min", duration: "1h 15min", firstLastDepartures: "06:45 - 21:15", type: "Regional" },
          { destination: "Lugo, Ourense y Madrid", company: "ALSA / Arriva", frequency: "5 salidas diarias", duration: "1h 30min (Lugo) / 6h (Madrid)", firstLastDepartures: "07:30 - 23:00", type: "Nacional" },
          { destination: "Playas de Doniños, San Xurxo y Pantín", company: "Maitours / Arriva Litoral", frequency: "Cada 30-45 min en temporada", duration: "20 min", firstLastDepartures: "08:00 - 21:30", type: "Urbano" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Ferrol de la Universidade da Coruña (UDC) - Escuela Politécnica de Ingeniería Naval e Industrial y Facultad de Enfermería y Podología.",
      schoolsCount: "18 colegios y 7 institutos.",
      culturalHighlights: "Barrio de la Magdalena (trazado modernista con galerías de cristal), Castillo de San Felipe y Museo Naval.",
      natureAndParks: "Playas vírgenes de Doniños, San Xurxo y Santa Comba, Parque de Reina Sofía y mirador de Monte Ventoso."
    }
  },
  {
    id: "tortosa",
    name: "Tortosa",
    province: "Tarragona",
    region: "Cataluña",
    coordinates: [40.8125, 0.5216],
    priceM2: 860,
    avgFlatPrice: 73100,
    avgRentPrice: 460,
    estimatedMortgage: 274,
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["A 20 min del Delta del Ebro", "Hospital Verge de la Cinta", "Río Ebro y Castillo", "Campus URV"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.2,
    qualityOfLifeScore: 9.1,
    summary: "Histórica capital de las Terres de l'Ebre, dominada por el imponente Castillo de la Suda y cruzada por el río Ebro. A las puertas del Parque Natural del Delta del Ebro y del macizo de Els Ports, con campus universitario y precios de vivienda mínimos en Cataluña.",
    demographics: {
      population: 34639,
      density: "158 hab/km²",
      averageAge: 44.3,
      foreignPopulationPct: "19.5%",
      climate: {
        sunnyDays: 285,
        avgTempSummer: "31°C máx / 20°C mín",
        avgTempWinter: "14°C máx / 5°C mín",
        monthlyTemps: [9, 10, 13, 16, 20, 24, 28, 27, 23, 18, 13, 9],
        description: "Mediterráneo suave y soleado, protegido por las sierras circundantes y con brisa marina del delta."
      }
    },
    housing: {
      priceM2: 860,
      avgFlatPrice: 73100,
      priceTrend: "+2.7% anual",
      rentalYield: "8.1%",
      description: "Pisos de 85 m² en barrios como Ferreries o Temple entre 55.000 € y 85.000 €. Ocasiones singulares en fincas con vistas al río Ebro."
    },
    idealistaListings: [
      {
        title: "Piso soleado y reformado en Ferreries",
        price: 62000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tortosa-tarragona/"
      },
      {
        title: "Vivienda luminosa con vistas al río Ebro en Temple",
        price: 74000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tortosa-tarragona/"
      },
      {
        title: "Piso exterior amplio cerca del Campus URV",
        price: 69000,
        m2: 95,
        rooms: 4,
        baths: 2,
        floor: "1ª planta con terraza",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tortosa-tarragona/"
      },
      {
        title: "Ático con gran terraza panorámica al Castillo de la Suda",
        price: 95000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tortosa-tarragona/"
      },
      {
        title: "Casa de campo con huerto y olivos a 5 min del núcleo urbano",
        price: 118000,
        m2: 150,
        rooms: 4,
        baths: 2,
        floor: "Finca rústica con vivienda",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/tortosa-tarragona/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital de Tortosa Verge de la Cinta (HTVC)",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [40.8140, 0.5260],
      healthCentersCount: 3,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias comarcal 24h, UCI y helicóptero del SEM",
      description: "Hospital público de referencia para todas las Terres de l'Ebre, con amplia cartera de especialidades médicas.",
      facilities: [
        { name: "Hospital Verge de la Cinta (HTVC)", type: "hospital", coords: [40.8140, 0.5260], address: "Carrer de les Esplanetes, 14", emergency: "Urgencias Territoriales 24h" },
        { name: "CAP Tortosa Est", type: "health_center", coords: [40.8110, 0.5210], address: "Plaça Corona d'Aragó, s/n", emergency: "Atención Primaria y CUAP" },
        { name: "CAP Ferreries", type: "health_center", coords: [40.8100, 0.5120], address: "Carrer Llarg de Sant Vicent, 45", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Agroalimentación de calidad (aceite D.O. Baix Ebre, arroz del Delta, cítricos), industria de la madera e innovación sostenible, servicios y turismo de naturaleza.",
      industrialParks: "Polígono Industrial Baix Ebre y Polígono Catalunya Sud.",
      localCommerce: "Eje comercial tradicional en el Carrer Sant Blai, Carrer de l'Àngel y Plaça de l'Àngel.",
      description: "Atracción reciente de grandes inversiones industriales internacionales que dinamizan la creación de empleo técnico."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercat Municipal de Tortosa (espectacular edificio modernista con pescados directos de las lonjas de Sant Carles de la Ràpita y verduras del huerto del Ebro).",
      supermarkets: "Mercadona (2), Bonpreu, Carrefour Market, Dia, ALDI, Lidl.",
      groceryCostIndex: "Muy económico en frutas, verduras y pescado mediterráneo fresco."
    },
    employmentAndJobs: {
      topSectors: ["Industria y Madera Tecnológica", "Agroalimentario y Arroz", "Sanidad y Servicios Públicos", "Docencia"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking Baix Ebre", "Espai Coworking Tortosa"],
      avgSalaryRange: "19.000 € - 28.000 € brutos/año",
      description: "Ubicación estratégica a medio camino entre Barcelona y Valencia (a hora y media en tren de ambas)."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Tortosa y enlace cercano a la estación de l'Aldea (trenes Euromed y Rodalies R16 directos a Tarragona y Barcelona)",
      travelTimeToBarcelona: "1 hora y 45 minutos en tren o coche por AP-7",
      highways: "Autopista del Mediterráneo AP-7 y carretera C-12 (Eix de l'Ebre).",
      nearestAirport: "Aeropuerto de Reus a 75 km y Barcelona-El Prat a 160 km.",
      busRoutes: {
        station: "Estación de Autobuses de Tortosa (Carrer de la Creu de Corder / Hife)",
        mainLines: [
          { destination: "Barcelona Capital / Aeropuerto El Prat (T1 y T2)", company: "Hife (Línea Exprés.cat)", frequency: "Cada 1h 30min", duration: "2h", firstLastDepartures: "05:45 - 21:30", type: "Regional" },
          { destination: "Tarragona y Reus", company: "Hife", frequency: "Cada 60 min", duration: "1h 10min", firstLastDepartures: "06:30 - 21:00", type: "Regional" },
          { destination: "Delta del Ebro (Deltebre, Amposta, Sant Carles)", company: "Hife", frequency: "Cada 45 min", duration: "25-40 min", firstLastDepartures: "07:00 - 21:30", type: "Regional" },
          { destination: "Castellón y Valencia", company: "Hife / ALSA", frequency: "6 salidas diarias", duration: "1h 45min (Castellón) / 2h 30min (Valencia)", firstLastDepartures: "07:30 - 20:15", type: "Nacional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus Terres de l'Ebre de la Universitat Rovira i Virgili (URV - Grados en Enfermería, Educación Infantil y Primaria y ADE).",
      schoolsCount: "11 centros educativos y 4 institutos.",
      culturalHighlights: "Castillo de la Suda (hoy Parador Nacional), Catedral de Santa María de Tortosa, Reales Colegios renacentistas y Fiesta del Renacimiento.",
      natureAndParks: "Parque Natural del Delta del Ebro (flamencos, arrozales y playas infinitas a 25 min) y Vía Verde de la Val de Zafán."
    }
  },
  {
    id: "lorca",
    name: "Lorca",
    province: "Murcia",
    region: "Región de Murcia",
    coordinates: [37.6749, -1.7001],
    priceM2: 880,
    avgFlatPrice: 74800,
    avgRentPrice: 470,
    estimatedMortgage: 280,
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Hospital Rafael Méndez", "300 Días de Sol", "Castillo de Lorca", "Campus Universitario"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.3,
    qualityOfLifeScore: 8.8,
    summary: "Conocida como la 'Ciudad del Sol' y la 'Ciudad de los Cien Escudos'. Dotada de un majestuoso castillo medieval fortaleza, campus universitario de ciencias de la salud, hospital general y un comercio vibrante a 25 minutos de las playas de Águilas.",
    demographics: {
      population: 97151,
      density: "58 hab/km²",
      averageAge: 42.8,
      foreignPopulationPct: "21.3%",
      climate: {
        sunnyDays: 315,
        avgTempSummer: "33°C máx / 21°C mín",
        avgTempWinter: "17°C máx / 6°C mín",
        monthlyTemps: [12, 13, 15, 18, 22, 27, 30, 30, 26, 21, 16, 12],
        description: "Clima mediterráneo subtropical semiárido; prácticamente sin días nublados y con inviernos sumamente suaves."
      }
    },
    housing: {
      priceM2: 880,
      avgFlatPrice: 74800,
      priceTrend: "+2.3% anual",
      rentalYield: "7.9%",
      description: "Pisos de 85 a 95 m² en zonas como San José, La Viña o Sutullena entre 60.000 € y 85.000 €. Amplia oferta de viviendas luminosas."
    },
    idealistaListings: [
      {
        title: "Piso soleado de 3 habitaciones en Sutullena",
        price: 66000,
        m2: 88,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lorca-murcia/"
      },
      {
        title: "Vivienda amplia en San José con terraza y ascensor",
        price: 76000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lorca-murcia/"
      },
      {
        title: "Piso exterior en La Viña con plaza de garaje",
        price: 82000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "1ª planta con parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lorca-murcia/"
      },
      {
        title: "Ático con gran terraza solárium y vistas al Castillo",
        price: 99000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lorca-murcia/"
      },
      {
        title: "Chalet con parcela y piscina en la huerta de Lorca",
        price: 139000,
        m2: 175,
        rooms: 4,
        baths: 2,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/lorca-murcia/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital General Universitario Rafael Méndez",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [37.6950, -1.6820],
      healthCentersCount: 7,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y quirófanos de alta resolución",
      description: "Hospital universitario que asiste a toda el área de salud III de la Región de Murcia.",
      facilities: [
        { name: "Hospital Universitario Rafael Méndez", type: "hospital", coords: [37.6950, -1.6820], address: "Ctra. Nacional 340, km 589", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Lorca Centro", type: "health_center", coords: [37.6740, -1.6990], address: "Calle Floridablanca, 1", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud San Diego", type: "health_center", coords: [37.6780, -1.6910], address: "Av. Europa, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud La Viña", type: "health_center", coords: [37.6690, -1.7080], address: "Calle Carretera de Granada, 40", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Agroalimentación avanzada y exportación hortofrutícola a toda Europa, industria cárnica, comercio comarcal y cerámica.",
      industrialParks: "Polígono Industrial Saprelorca (uno de los polígonos más dinámicos de la comarca).",
      localCommerce: "Centro comercial urbano peatonal en Calle Corredera, Avenida Juan Carlos I y Parque Almenara.",
      description: "Potente motor económico agrícola y logístico con gran empuje empresarial."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado Municipal del Carmen y Mercado de San Cristóbal (hortalizas y frutas recién cogidas de la huerta murciana).",
      supermarkets: "Mercadona (4), Carrefour, Lidl, ALDI, Consum, Dia.",
      groceryCostIndex: "Sumamente bajo; la 'Huerta de Europa' ofrece vegetales y frutas a los precios más bajos del continente."
    },
    employmentAndJobs: {
      topSectors: ["Agroindustria y Exportación", "Comercio y Logística", "Sanidad y Cuidados", "Construcción"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking CEEIM Lorca", "Vivero de Empresas de Lorca"],
      avgSalaryRange: "18.500 € - 27.000 € brutos/año",
      description: "Ideal para disfrutar de sol permanente, vida activa al aire libre y vivienda barata cerca del mar."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Lorca Sutullena (conexión de Cercanías con Murcia y futura parada del AVE Murcia - Almería)",
      travelTimeToMurcia: "45 minutos por autovía A-7 o tren",
      travelTimeToAguilasBeach: "25 minutos por autovía RM-11",
      highways: "Autovía del Mediterráneo A-7 y Autovía Lorca-Águilas RM-11.",
      nearestAirport: "Aeropuerto Internacional de la Región de Murcia (a 65 km) y Alicante-Elche (a 115 km).",
      busRoutes: {
        station: "Estación de Autobuses de Lorca (Plaza Carruajes / Sutullena)",
        mainLines: [
          { destination: "Murcia Capital (Estación San Andrés / Hospitales)", company: "ALSA / Interbus", frequency: "Cada 30-45 min", duration: "50 min", firstLastDepartures: "06:15 - 22:00", type: "Regional" },
          { destination: "Playas de Águilas y Mazarrón", company: "ALSA", frequency: "Cada hora", duration: "35 min (Águilas) / 45 min (Mazarrón)", firstLastDepartures: "07:00 - 21:30", type: "Regional" },
          { destination: "Almería, Granada y Málaga", company: "ALSA", frequency: "6 salidas diarias", duration: "1h 45min (Almería) / 2h 45min (Granada)", firstLastDepartures: "07:45 - 20:30", type: "Nacional" },
          { destination: "Madrid (Estación Sur)", company: "ALSA", frequency: "6 frecuencias diarias", duration: "4h 30min", firstLastDepartures: "07:00 - 23:30", type: "Nacional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus de Lorca de la Universidad de Murcia (Grados en Enfermería y Nutrición Humana).",
      schoolsCount: "29 centros escolares y 9 institutos.",
      culturalHighlights: "Fortaleza del Sol (Castillo de Lorca con la única sinagoga medieval no profanada de España), Semana Santa de Lorca (bordados de oro y seda únicos) y Palacio de Guevara.",
      natureAndParks: "Parque Almirante Bastarreche, Sierra Espuña (a 30 min) y Calnegre y Cabo Cope (calas vírgenes a 30 min)."
    }
  },
  {
    id: "plasencia",
    name: "Plasencia",
    province: "Cáceres",
    region: "Extremadura",
    coordinates: [40.0307, -6.0898],
    priceM2: 890,
    avgFlatPrice: 75650,
    avgRentPrice: 440,
    estimatedMortgage: 283,
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Puerta del Valle del Jerte", "Hospital Virgen del Puerto", "Doble Catedral", "Naturaleza Fluvial"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 9.3,
    qualityOfLifeScore: 9.3,
    summary: "Capital del norte de Extremadura, fundada en la Edad Media junto al río Jerte. Posee dos catedrales históricas, murallas intactas, un hospital comarcal de referencia y es la puerta de entrada a los cerezos en flor del Valle del Jerte y la comarca de La Vera.",
    demographics: {
      population: 39247,
      density: "389 hab/km²",
      averageAge: 45.4,
      foreignPopulationPct: "5.1%",
      climate: {
        sunnyDays: 280,
        avgTempSummer: "32°C máx / 18°C mín",
        avgTempWinter: "12°C máx / 3°C mín",
        monthlyTemps: [7, 9, 12, 15, 20, 26, 29, 28, 23, 17, 11, 7],
        description: "Mediterráneo de media montaña, con noches estivales refrescantes gracias a las aguas del río Jerte y la sierra."
      }
    },
    housing: {
      priceM2: 890,
      avgFlatPrice: 75650,
      priceTrend: "+2.0% anual",
      rentalYield: "7.6%",
      description: "Pisos de 85 m² en zonas como Los Manantiales, San Juan o Ciudad Jardín entre 55.000 € y 85.000 €. Casas con jardín en las afueras por precios muy contenidos."
    },
    idealistaListings: [
      {
        title: "Piso soleado de 3 dormitorios en Los Manantiales",
        price: 65000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/plasencia-caceres/"
      },
      {
        title: "Vivienda céntrica reformada junto a la Plaza Mayor",
        price: 78000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/plasencia-caceres/"
      },
      {
        title: "Piso exterior con terraza y vistas a la muralla",
        price: 72000,
        m2: 90,
        rooms: 3,
        baths: 1,
        floor: "1ª planta con terraza",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/plasencia-caceres/"
      },
      {
        title: "Ático con vistas al río Jerte y terraza solárium",
        price: 98000,
        m2: 105,
        rooms: 3,
        baths: 2,
        floor: "4ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/plasencia-caceres/"
      },
      {
        title: "Chalet independiente con parcela ajardinada en Ciudad Jardín",
        price: 145000,
        m2: 175,
        rooms: 4,
        baths: 2,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/plasencia-caceres/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Virgen del Puerto de Plasencia",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [40.0380, -6.0790],
      healthCentersCount: 4,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y helisuperficie médica",
      description: "Hospital público que cubre el norte cacereño con una completa cartera de servicios médicos.",
      facilities: [
        { name: "Hospital Virgen del Puerto", type: "hospital", coords: [40.0380, -6.0790], address: "Paraje Valcorchero, s/n", emergency: "Urgencias Generales 24h" },
        { name: "Centro de Salud Luis de Toro", type: "health_center", coords: [40.0310, -6.0910], address: "Calle Luis de Toro, s/n", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud San Miguel", type: "health_center", coords: [40.0360, -6.0820], address: "Av. de España, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud La Data", type: "health_center", coords: [40.0240, -6.0960], address: "Calle Obispo Laso, s/n", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Agroalimentario (cerezas del Jerte con D.O., pimentón de la Vera, embutidos ibéricos), turismo rural y ecológico, comercio y servicios.",
      industrialParks: "Polígono Industrial de Plasencia.",
      localCommerce: "Centro histórico peatonal en torno a la Plaza Mayor con animado mercado semanal todos los martes desde el siglo XII.",
      description: "Fuerte dinamismo comercial de cabecera comarcal que atrae a más de 120.000 habitantes de las comarcas vecinas."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos Municipal y Mercado Tradicional de la Plaza Mayor (los martes con frutas y hortalizas de huerta serrana).",
      supermarkets: "Mercadona (2), Carrefour, Dia, ALDI, Lidl.",
      groceryCostIndex: "Muy económico en productos de la huerta, quesos artesanos de cabra y embutidos."
    },
    employmentAndJobs: {
      topSectors: ["Agroalimentación y Fruta", "Sanidad y Cuidados", "Turismo Rural y Cultural", "Comercio Comarcal"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Centro de Empresas y Coworking de Plasencia"],
      avgSalaryRange: "18.500 € - 26.500 € brutos/año",
      description: "Paraíso de piscinas naturales fluviales, cerezos en flor y aire puro con un coste de vida muy moderado."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Plasencia (trenes Alvia rápidos hacia Madrid y Extremadura sur)",
      travelTimeToMadrid: "2 horas y 15 minutos por autovía EX-A1 y A-5",
      highways: "Autovía Ruta de la Plata A-66 y autovía autonómica EX-A1.",
      nearestAirport: "Aeropuerto de Madrid-Barajas a 240 km y Salamanca a 125 km.",
      busRoutes: {
        station: "Estación de Autobuses de Plasencia (Calle Tornavacas, 2)",
        mainLines: [
          { destination: "Madrid (Intercambiador Príncipe Pío / Estación Sur)", company: "CEVESA / Samar", frequency: "7 salidas diarias", duration: "2h 45min", firstLastDepartures: "06:15 - 20:30", type: "Nacional" },
          { destination: "Cáceres Capital y Mérida", company: "ALSA / Interbus", frequency: "Cada 60 min", duration: "1h (Cáceres) / 1h 45min (Mérida)", firstLastDepartures: "06:45 - 21:00", type: "Regional" },
          { destination: "Salamanca (Vía de la Plata)", company: "ALSA", frequency: "6 salidas diarias", duration: "1h 30min", firstLastDepartures: "07:30 - 20:00", type: "Nacional" },
          { destination: "Valle del Jerte, La Vera y Las Hurdes", company: "Autocares Mirat", frequency: "5 frecuencias diarias", duration: "20-45 min según municipio", firstLastDepartures: "07:00 - 20:30", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Centro Universitario de Plasencia de la Universidad de Extremadura (Grados en Enfermería, Podología, ADE e Ingeniería Forestal).",
      schoolsCount: "13 colegios y 5 institutos.",
      culturalHighlights: "Catedral Vieja y Catedral Nueva, Acueducto de San Antón, Murallas medievales con sus torres y Puerta del Sol.",
      natureAndParks: "Parque de La Isla (gran parque fluvial en el río Jerte con zonas de baño natural), Parque de los Pinos y Parque Nacional de Monfragüe (a 20 min)."
    }
  },
  {
    id: "algeciras",
    name: "Algeciras",
    province: "Cádiz",
    region: "Andalucía",
    coordinates: [36.1408, -5.4562],
    priceM2: 1050,
    avgFlatPrice: 89250,
    avgRentPrice: 550,
    estimatedMortgage: 334,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Puerto Internacional", "Hospital Punta de Europa", "Frente a Gibraltar", "Playas y Parque Natural"],
    hasAVE: false,
    hasHospital: true,
    coastal: true,
    costOfLivingScore: 8.9,
    qualityOfLifeScore: 8.7,
    summary: "Ciudad portuaria clave en el Estrecho de Gibraltar y sede del mayor puerto del Mediterráneo occidental en tráfico de mercancías. Rodeada por las playas del Rinconcillo y Getares y el Parque Natural de Los Alcornocales, con gran oferta laboral logística y vivienda muy económica frente a la Costa del Sol.",
    demographics: {
      population: 122368,
      density: "1.423 hab/km²",
      averageAge: 41.5,
      foreignPopulationPct: "10.4%",
      climate: {
        sunnyDays: 295,
        avgTempSummer: "28°C máx / 20°C mín",
        avgTempWinter: "16°C máx / 9°C mín",
        monthlyTemps: [13, 14, 15, 17, 20, 23, 26, 26, 24, 20, 16, 13],
        description: "Mediterráneo oceánico con brisas del Estrecho; veranos suaves sin el calor abrasador del interior."
      }
    },
    housing: {
      priceM2: 1050,
      avgFlatPrice: 89250,
      priceTrend: "+3.4% anual",
      rentalYield: "7.8%",
      description: "Pisos de 85 m² en zonas consolidadas como San Bernabé, Rinconcillo o San José Artesano entre 65.000 € y 105.000 €."
    },
    idealistaListings: [
      {
        title: "Piso soleado cerca de la Playa del Rinconcillo",
        price: 78000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/algeciras-cadiz/"
      },
      {
        title: "Vivienda en San Bernabé con plaza de garaje y piscina",
        price: 96000,
        m2: 95,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor y parking",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/algeciras-cadiz/"
      },
      {
        title: "Piso céntrico con balcón junto a Plaza Alta",
        price: 85000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "1ª planta muy luminoso",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/algeciras-cadiz/"
      },
      {
        title: "Ático con vistas a la Bahía y Peñón de Gibraltar",
        price: 129000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático con terraza",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/algeciras-cadiz/"
      },
      {
        title: "Chalet unifamiliar con jardín en zona Getares",
        price: 175000,
        m2: 180,
        rooms: 4,
        baths: 3,
        floor: "Chalet independiente",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/algeciras-cadiz/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Universitario Punta de Europa",
      hospitalImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [36.1180, -5.4480],
      healthCentersCount: 6,
      healthCenterImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y helisuperficie",
      description: "Centro hospitalario de referencia en el Campo de Gibraltar dotado con modernas unidades diagnósticas.",
      facilities: [
        { name: "Hospital Universitario Punta de Europa", type: "hospital", coords: [36.1180, -5.4480], address: "Ctra. de Getares, s/n", emergency: "Urgencias Generales y UCI 24h" },
        { name: "Centro de Salud Algeciras Centro", type: "health_center", coords: [36.1310, -5.4490], address: "Calle Prim, 4", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Algeciras Norte", type: "health_center", coords: [36.1430, -5.4590], address: "Calle Donantes de Sangre, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud Saladillo", type: "health_center", coords: [36.1210, -5.4430], address: "Calle Federico García Lorca, 12", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Logística y transporte marítimo internacional (Puerto Bahía de Algeciras), refinería y petroquímica, metalurgia y aduanas.",
      industrialParks: "Polígono Industrial Cortijo Real y Zona Franca de la Bahía de Algeciras.",
      localCommerce: "Centro comercial urbano en Calle Ancha, Plaza Alta y Centro Comercial Puerta Europa.",
      description: "Eje estratégico del comercio global intercontinental con cientos de empresas de consignación, transporte y servicios marítimos."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos 'Ingeniero Torroja' (edificio icónico con su cúpula de hormigón armado, repleto de atún rojo de almadraba y pescados del Estrecho).",
      supermarkets: "Mercadona (4), Carrefour, Lidl, ALDI, Dia, Supeco.",
      groceryCostIndex: "Bajo en pescados frescos de la bahía y frutas de la comarca."
    },
    employmentAndJobs: {
      topSectors: ["Logística Portuaria e Internacional", "Industria Pesada y Energía", "Sanidad y Aduanas", "Trabajadores en Gibraltar"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Coworking Cámara Campo de Gibraltar", "Espacio Algeciras Emprende"],
      avgSalaryRange: "21.000 € - 33.000 € brutos/año",
      description: "Sueldos elevados en el sector portuario y en puestos de Gibraltar, mientras que el coste de la vivienda es mucho menor que en Marbella o Málaga."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Algeciras (línea directa a Madrid y Granada)",
      travelTimeToMalaga: "1 hora y 15 minutos por autovía A-7 / AP-7",
      travelTimeToCadiz: "1 hora por autovía A-381 (Ruta del Toro)",
      highways: "Autovía del Mediterráneo A-7 y Autovía A-381.",
      nearestAirport: "Aeropuerto de Gibraltar a 20 km y Aeropuerto de Málaga-Costa del Sol a 115 km.",
      busRoutes: {
        station: "Estación de Autobuses San Bernardo (Calle San Bernardo, 1)",
        mainLines: [
          { destination: "Málaga / Costa del Sol (Marbella, Fuengirola)", company: "Avanza Bus (Portillo)", frequency: "Cada 60 min", duration: "1h 45min", firstLastDepartures: "06:15 - 22:00", type: "Regional" },
          { destination: "Cádiz Capital y Jerez de la Frontera", company: "Transportes Comes", frequency: "Cada hora", duration: "1h 15min (Cádiz) / 1h 30min (Jerez)", firstLastDepartures: "06:30 - 21:30", type: "Regional" },
          { destination: "Sevilla (Estación Plaza de Armas)", company: "DAMAS / Comes", frequency: "8 frecuencias diarias", duration: "2h 30min", firstLastDepartures: "06:00 - 20:30", type: "Regional" },
          { destination: "La Línea de la Concepción / Gibraltar", company: "Consorcio Metropolitano (M-120)", frequency: "Cada 30 min", duration: "35 min", firstLastDepartures: "06:30 - 22:30", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Campus Bahía de Algeciras de la Universidad de Cádiz (Escuela Técnica Superior de Ingeniería, Enfermería y Relaciones Laborales).",
      schoolsCount: "32 colegios y 12 institutos.",
      culturalHighlights: "Plaza Alta, Parque María Cristina, Museo Municipal de Algeciras y ruta de Paco de Lucía (nacido en Algeciras).",
      natureAndParks: "Playas del Rinconcillo y Getares, Parque Natural del Estrecho y Parque Natural de Los Alcornocales (la mayor masa de alcornocales de Europa)."
    }
  },
  {
    id: "avila",
    name: "Ávila",
    province: "Ávila",
    region: "Castilla y León",
    coordinates: [40.6567, -4.6813],
    priceM2: 1140,
    avgFlatPrice: 96900,
    avgRentPrice: 510,
    estimatedMortgage: 362,
    heroImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["Muralla Medieval UNESCO", "Hospital Nuestra Señora de Sonsoles", "A 1h de Madrid", "Aire Puro y Seguridad"],
    hasAVE: false,
    hasHospital: true,
    coastal: false,
    costOfLivingScore: 8.9,
    qualityOfLifeScore: 9.6,
    summary: "Capital de provincia situada a más de 1.100 msnm con la muralla medieval mejor conservada del planeta (UNESCO). Conocida por su extraordinaria seguridad ciudadana, aire de montaña y cercanía a Madrid (a sólo 1h 20 min en tren o coche).",
    demographics: {
      population: 58149,
      density: "251 hab/km²",
      averageAge: 45.8,
      foreignPopulationPct: "7.9%",
      climate: {
        sunnyDays: 265,
        avgTempSummer: "28°C máx / 14°C mín",
        avgTempWinter: "8°C máx / -1°C mín",
        monthlyTemps: [2, 4, 7, 10, 15, 19, 23, 22, 17, 11, 6, 2],
        description: "Mediterráneo continental de alta montaña; veranos idílicos y frescos que son un bálsamo frente a la calima de las grandes urbes."
      }
    },
    housing: {
      priceM2: 1140,
      avgFlatPrice: 96900,
      priceTrend: "+2.5% anual",
      rentalYield: "6.7%",
      description: "Pisos de 85 m² en zonas como San Roque, Sonsoles o Hervencias entre 70.000 € y 110.000 €."
    },
    idealistaListings: [
      {
        title: "Piso soleado en San Roque con vistas a la sierra",
        price: 82000,
        m2: 85,
        rooms: 3,
        baths: 1,
        floor: "2ª planta exterior",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/avila-avila/"
      },
      {
        title: "Vivienda céntrica exterior junto a la Muralla y Arco del Alcázar",
        price: 105000,
        m2: 92,
        rooms: 3,
        baths: 2,
        floor: "3ª planta con ascensor",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/avila-avila/"
      },
      {
        title: "Piso en Hervencias con garaje y trastero",
        price: 98000,
        m2: 90,
        rooms: 3,
        baths: 2,
        floor: "1ª planta con plaza de parking",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/avila-avila/"
      },
      {
        title: "Ático con amplia terraza panorámica a las murallas",
        price: 135000,
        m2: 110,
        rooms: 3,
        baths: 2,
        floor: "5ª planta ático",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/avila-avila/"
      },
      {
        title: "Chalet pareado con jardín privado en zona Sonsoles",
        price: 165000,
        m2: 180,
        rooms: 4,
        baths: 3,
        floor: "Chalet 2 plantas",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
        url: "https://www.idealista.com/venta-viviendas/avila-avila/"
      }
    ],
    healthcare: {
      mainHospital: "Hospital Nuestra Señora de Sonsoles",
      hospitalImage: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
      hospitalCoords: [40.6470, -4.6730],
      healthCentersCount: 4,
      healthCenterImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      emergencyServices: "Servicio de urgencias hospitalarias 24h, UCI y unidad de radioterapia avanzada",
      description: "Complejo asistencial público dotado con tecnología diagnóstica moderna y tiempos de espera muy reducidos.",
      facilities: [
        { name: "Hospital Nuestra Señora de Sonsoles", type: "hospital", coords: [40.6470, -4.6730], address: "Av. Juan Carlos I, s/n", emergency: "Urgencias Generales y UCI 24h" },
        { name: "Centro de Salud Ávila Estación", type: "health_center", coords: [40.6580, -4.6860], address: "Paseo de la Estación, 24", emergency: "Atención Primaria y PAC" },
        { name: "Centro de Salud Ávila Sureste", type: "health_center", coords: [40.6480, -4.6760], address: "Calle Virgen de la Soterraña, s/n", emergency: "Atención Primaria" },
        { name: "Centro de Salud Ávila Norte", type: "health_center", coords: [40.6650, -4.6920], address: "Calle San Pedro Bautista, 10", emergency: "Atención Primaria" }
      ]
    },
    economyAndBusiness: {
      mainIndustries: "Industria de automoción (planta Nissan y proveedores auxiliares), sector agroalimentario (carne de ternera de Ávila con IGP), Escuela Nacional de Policía y turismo.",
      industrialParks: "Polígono Industrial Las Hervencias y Polígono Vicolozano.",
      localCommerce: "Comercio tradicional en la Calle Duque de Alba, Plaza de Santa Teresa y Centro Comercial El Bulevar.",
      description: "Ciudad universitaria y formativa con más de 3.000 agentes en formación continua en la Escuela Nacional de Policía."
    },
    marketsAndGroceries: {
      municipalMarkets: "Mercado de Abastos de Ávila (Plaza de Abastos, con ternera abulense y legumbres de El Barco de Ávila).",
      supermarkets: "Mercadona (3), Carrefour, Dia, ALDI, Lidl.",
      groceryCostIndex: "Muy asequible y con carnes de calidad excepcional."
    },
    employmentAndJobs: {
      topSectors: ["Formación Policial y Seguridad", "Industria de Automoción", "Sanidad y Docencia", "Teletrabajo para Madrid"],
      remoteWorkFriendly: true,
      coworkingSpaces: ["Ávila Coworking Espacio", "Vivero de Empresas de la Cámara"],
      avgSalaryRange: "21.000 € - 30.000 € brutos/año",
      description: "Muy popular entre trabajadores remotos de Madrid que buscan una vivienda barata, colegios de barrio tranquilos y fines de semana en la sierra de Gredos."
    },
    transportAndConnectivity: {
      hasAVE: false,
      trainStation: "Estación de Ávila (Trenes Media Distancia y Cercanías directos a Madrid Príncipe Pío y Chamartín en 1h 20 min)",
      travelTimeToMadrid: "1 hora y 15 minutos por autopista de peaje AP-51 o autovía",
      highways: "Autovía A-50 hacia Salamanca y autopista AP-51 conectando con la AP-6 hacia Madrid.",
      nearestAirport: "Madrid-Barajas a 125 km y Valladolid a 130 km.",
      busRoutes: {
        station: "Estación de Autobuses de Ávila (Av. de Madrid, 2)",
        mainLines: [
          { destination: "Madrid (Intercambiador Moncloa / Méndez Álvaro)", company: "Jiménez Dorado Autocares", frequency: "Cada 45-60 min", duration: "1h 15min", firstLastDepartures: "06:00 - 22:00", type: "Nacional" },
          { destination: "Salamanca (Estación de Autobuses)", company: "Avanza Bus (Auto-Res)", frequency: "Cada 60 min", duration: "1h", firstLastDepartures: "06:45 - 21:45", type: "Regional" },
          { destination: "Segovia Capital", company: "Linecar", frequency: "6 salidas diarias", duration: "55 min", firstLastDepartures: "07:00 - 20:30", type: "Regional" },
          { destination: "Valle del Tiétar y Sierra de Gredos (Arenas de San Pedro)", company: "Cevesa / Muñoz", frequency: "5 frecuencias diarias", duration: "1h 15min", firstLastDepartures: "07:30 - 19:45", type: "Regional" }
        ]
      }
    },
    educationAndCulture: {
      universities: "Universidad Católica de Ávila (UCAV) y Campus de Ávila de la Universidad de Salamanca (USAL - Grados en Enfermería, Educación y Turismo).",
      schoolsCount: "17 colegios y 6 institutos.",
      culturalHighlights: "Muralla medieval de Ávila (2,5 km de perímetro transitable con 87 torreones), Catedral del Salvador, Convento de Santa Teresa y Basílica de San Vicente.",
      natureAndParks: "Parque del Soto, riberas del Río Adaja y Parque Regional de la Sierra de Gredos a menos de 45 minutos."
    }
  }
];

if (typeof window !== 'undefined') {
  window.CITIES_DATA = CITIES_DATA;
}
