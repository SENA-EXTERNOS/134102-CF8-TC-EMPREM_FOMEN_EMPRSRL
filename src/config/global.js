export default {
  global: {
    componenteFormativo: 'Gestión documental, archivo y normatividad',
    descripcionCurso:
      'Las organizaciones deben resguardar la información que resulta de la realización de sus actividades en el día a día. Realizar esta tarea de forma adecuada y óptima requiere de organización, atención intelectual, y técnica por parte de los responsables de salvaguardar esta información. Aquí se estudiarán conceptos y nociones para comprender la importancia que tiene este proceso en la preservación de la documentación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia y evolución de los archivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentos y gestión documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Documentos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gestión documental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Archivos de gestión e instrumentos archivísticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo de documentos organizacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Redacción de documentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alonso, J., García, M., & Lloveras, M. (s.f.). La norma ISO 15489: Un marco sistemático de buenas prácticas de gestión documental en las organizaciones. La norma ISO 15489 (rclis.org)',
      link:
        'http://eprints.rclis.org/12263/1/Alonso_Garcia_Lloveras_-_La_norma_ISO_15489.pdf',
    },
    {
      referencia:
        'Archivo General de la Nación. Colombia. (2012). Objetivos. Archivo General de la Nación.',
      link: 'https://www.archivogeneral.gov.co/Conozcanos/objetivos',
    },
    {
      referencia:
        'Comité Técnico de Normalización número 50. (s.f.). Información y documentación. Gestión de documentos. Informe técnico ISO/TR 15489-1. Universidad de Málaga.',
      link: 'https://www.uma.es/media/tinyimages/file/ISO_15489.2.pdf',
    },
    {
      referencia:
        'Decreto 1080 de 2015. [Ministerio de Cultura]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Cultura. Mayo 26 de 2015.',
    },
    {
      referencia: 'Definición. DE. (2011). Definición de archivo.',
      link: 'https://definicion.de/archivo/',
    },
    {
      referencia:
        'Godoy, J., & López, M. (2001). Cartilla de clasificación Documental. Archivo General de la Nación.',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/MANUALES/CLASIFICACION%20DOCUMENTAL.pdf',
    },
    {
      referencia:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. Julio 14 de 2000. DO. No. 44.093',
    },
    {
      referencia:
        'Ministerio de justicia y derecho. (2015). Normograma y gestión documental. ',
      link:
        'https://www.minjusticia.gov.co/programas-co/SIG/Informes/Memoria%20-%20Normograma%20y%20documental.pdf',
    },
    {
      referencia:
        'Parra, G. (2017). La gestión documental en las universidades públicas de Bogotá D.C.: Aplicación Normatividad. Información archivística Rio de Janeiro.',
      link: 'https://brapci.inf.br/index.php/res/download/54475',
    },
  ],
  glosario: [
    {
      termino: 'Archivo',
      significado:
        'conjunto de documentos sea cual fuere su fecha, forma y soporte material, acumulados en un proceso natural por una persona o entidad pública o privada en el transcurso de su gestión.',
    },
    {
      termino: 'Conservación documental',
      significado:
        'comprende las estrategias y técnicas específicas para la protección de los materiales de archivo.',
    },
    {
      termino: 'Fondo documental',
      significado:
        'conjunto de documentos producidos por una persona natural o jurídica en desarrollo de sus funciones o actividades.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'conjunto de actividades administrativas y técnicas, tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades.',
    },
    {
      termino: 'Instrumentos archivísticos',
      significado:
        'son herramientas de gestión documental que permiten a la entidad el manejo óptimo de su acervo documental de acuerdo con los lineamientos establecidos.',
    },
    {
      termino: 'Organización documental',
      significado:
        'conjunto de actividades técnicas y administrativas cuya finalidad es la agrupación de documental relacionada en forma jerárquica con criterios orgánicos o funcionales.',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades mutuamente relacionadas, o que interactúan para generar valor, mediante la transformación de elementos de entrada en resultados.',
    },
    {
      termino: 'Serie documental',
      significado:
        'es el conjunto de unidades documentales de estructura y contenido homogéneos, producidos de un mismo órgano o sujeto productor como consecuencia del ejercicio de sus funciones específicas.',
    },
    {
      termino: 'Tabla de retención documental',
      significado:
        'listado de series documentales con sus correspondientes tipos, en donde se les establece el tiempo de permanencia en cada una de las fases del ciclo vital del documento.',
    },
    {
      termino: 'Tipología documental',
      significado:
        'se refiere a los diversos formatos y tipos de documentos que selecciona y desarrolla una entidad en particular aplicados en las tareas de producción o recepción de documentos.',
    },
  ],
  complementario: [
    {
      tema: 'Historia y evolución de los archivos',
      referencia:
        'Flórez, J. (2011). Guía metodológica para la investigación de historias institucionales. 14_Guía_Metodológica_Historias_Institucionales.pdf (secretariageneral.gov.co)',
      tipo: 'PDF',
      link:
        'https://archivobogota.secretariageneral.gov.co/sites/default/files/documentacion-archivo/14_Gui%CC%81a_Metodolo%CC%81gica_Historias_Institucionales.pdf',
    },
    {
      tema: 'Historia y evolución de los archivos',
      referencia:
        'Departamento administrativo de la función pública. (2015). Guía para la organización de archivos de gestión y transferencias documentales. MANUAL DE CALIDAD (funcionpublica.gov.co)',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/documents/418537/506991/2.+Guia+para+la+Organizaci%25C3%25B3n+de+los+Archivos+de+Gesti%25C3%25B3n+y+Transferencias+documentales+V3.pdf/040e3005-c101-4ae4-be58-97e56c10bd49',
    },
    {
      tema: 'Documentos',
      referencia:
        'Ley 594 de 2000. Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones. Julio 14 de 2000. DO. No. 44.093 http://www.secretariasenado.gov.co/senado/basedoc/ley_0594_2000.html ',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0594_2000.html',
    },
    {
      tema: 'Clasificación documental',
      referencia:
        'Godoy, J., & López, M. (2001). Cartilla de clasificación Documental. Archivo General de la Nación. CLASIFICACION DOCUMENTAL.pdf (archivogeneral.gov.co)',
      tipo: 'PDF',
      link:
        'https://www.archivogeneral.gov.co/caja_de_herramientas/docs/5.%20organizacion/MANUALES/CLASIFICACION%20DOCUMENTAL.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}