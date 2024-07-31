export default {
  global: {
    componenteFormativo: 'Servicios web con PHP',
    descripcionCurso:
      'Los servicios web, también conocidos como web <em>services</em>, son un conjunto de protocolos que facilitan la comunicación entre dispositivos, permitiendo intercambiar información (datos). Un servicio web tiene una interfaz que oculta los detalles de implementación, para que se pueda utilizar independientemente de la plataforma de <em>hardware</em> o <em>software</em> en la que se implementa, e independientemente del lenguaje de programación en el que está escrito.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos o funciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Clases y objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Integración de aplicaciones (XML, SOAP, WSDL y UDDI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'XML “Extensible Markup Language”',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'SOAP <em>Simple Object Access Protocol</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'WSDL Lenguaje de Descripción de Servicios Web',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'UDDI <em>Universal Description, Discovery, and Integration</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'REST <em>Representational State Transfer</em>',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'JSON <em>JavaScript Object Notation</em>',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Creación de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conexiones a SQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Servicios en PHP',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Aplicación SOAP UI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF22_DU.pdf',
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
  complementario: [
    {
      tema: 'Integración de aplicaciones (XML, SOAP, WSDL y UDDI)',
      referencia:
        'IBM (s. IBM Corporation. (s. f.). <em>UDDI (Universal Description, Discovery, and Integration)</em>.',
      tipo: 'Página web',
      link:
        'https://www.ibm.com/docs/es/rsas/7.5.0?topic=standards-universal-description-discovery-integration-uddi',
    },
    {
      tema: 'Servicios en PHP',
      referencia:
        'Meneses, M. (2021a). <em>Creación archivos PHP en el localhost</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/9MXAQGGxCN4',
    },
    {
      tema: 'Servicios en PHP',
      referencia:
        'Meneses, M. (2021b). <em>Web Services programación Front End Consumo de servicios web</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/MV3dSZx5iTo',
    },
    {
      tema: 'Aplicación SOAP UI',
      referencia:
        'SoapUI. (s. f.). <em>Accelerating API Quality Through Testing</em>.',
      tipo: 'Página web',
      link: 'https://www.soapui.org/',
    },
  ],
  glosario: [
    {
      termino: '<em>API</em>',
      significado:
        'la interfaz de programación de aplicaciones es un conjunto de subrutinas, funciones y procedimientos que ofrece cierta biblioteca para ser utilizada por otro <em>software</em> como una capa de abstracción.',
    },
    {
      termino: '<em>BackEnd</em>',
      significado:
        'es la parte del desarrollo web que se encarga de que toda la lógica de una página web funcione. Se trata del conjunto de acciones que pasan en una web pero que no vemos, como, por ejemplo, la comunicación con el servidor.',
    },
    {
      termino: '<em>FrontEnd</em>',
      significado:
        'el desarrollo web <em>FrontEnd</em> consiste en la conversión de datos en una interfaz gráfica, para que el usuario pueda ver e interactuar con la información de forma digital, usando HTML, CSS y JavaScript.',
    },
    {
      termino: '<em>REST</em>',
      significado:
        'la Transferencia de Estado Representacional, o <em>REST</em>, es un estilo de arquitectura <em>software</em> para sistemas hipermedia distribuidos, como la World Wide Web.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, J. (2017). Entorno de programación intencional basado en XML. Universidad Politécnica de Madrid. ',
      link: 'https://oa.upm.es/49793/1/PFC_JOSE_ANTONIO_ALVAREZ_PEREZ.pdf',
    },
    {
      referencia:
        'Bianco, P. (2005). Desarrollo de Aplicaciones Basadas en XML Web Service para Dispositivos Móviles con Microsoft. NET Compact Framework. Universidad de Belgrano.',
      link: '',
    },
    {
      referencia:
        'Chanchí, G., Campo, W., Amaya, J. y Arciniegas, J. (2011). Esquema de servicios para Televisión Digital Interactiva, basados en el protocolo REST-JSON. Cuadernos de Informática, 6(1), p. 233-240.',
      link:
        'http://seer.ufrgs.br/cadernosdeinformatica/article/view/v6n1p233-240',
    },
    {
      referencia:
        'Eslava, V. (2013). El nuevo PHP. Conceptos avanzados. Bubok.',
      link: '',
    },
    {
      referencia: 'García, A. (2003). Manual práctico de SQL.',
      link:
        'https://www.lawebdelprogramador.com/cursos/archivos/ManualPracticoSQL.pdf',
    },
    {
      referencia:
        'Gonzáles, S. y Pelissier, C. (2002). Programación con PHP. Universidad Técnica Federico Santa María.',
      link:
        'http://profesores.elo.utfsm.cl/~agv/elo330/2s02/projects/pelissier/informe.pdf',
    },
    {
      referencia:
        'Gutiérrez, A. (2016). Elaboración de un servicio web para el registro de operaciones entre clientes:(infraestructura de fibra óptica NEBA de Telefónica). Universidad Carlos III de Madrid.',
      link: '',
    },
    {
      referencia: 'IBM Corporation. (2015). IBM integration Bus 10.0.0.',
      link:
        'https://www.ibm.com/docs/es/integration-bus/10.0?topic=ssmkhh-10-0-0-com-ibm-etools-mft-doc-bi12017—htm',
    },
    {
      referencia:
        'IBM Corporation. (2020). Formato Json (JavaScript Object Notation).',
      link:
        'https://www.ibm.com/docs/es/baw/20.x?topic=formats-javascript-object-notation-json-format',
    },
    {
      referencia:
        'IBM Corporation. (s. f.). UDDI (Universal Description, Discovery, and Integration).',
      link:
        'https://www.ibm.com/docs/es/rsas/7.5.0?topic=standards-universal-description-discovery-integration-uddi',
    },
    {
      referencia:
        'Ortiz, A., Otón, S. y Barchino, R. (2005). Learning Objects universal publishing and location Architecture using Web Services. Universidad de Alcalá.',
      link:
        'https://www.researchgate.net/publication/267217723_Learning_Objects_universal_publishing_and_location_Architecture_using_Web_Services',
    },
    {
      referencia:
        'Paz, K. (s. f.). Media aritmética simple. Universidad Rafael Landívar.',
      link:
        'https://fgsalazar.net/LANDIVAR/ING-PRIMERO/boletin07/URL_07_BAS01.pdf',
    },
    {
      referencia:
        'Sayago, J., Flores, E. y Recalde, A. (2019). Análisis comparativo entre los estándares orientados a servicios web SOAP, REST y GRAPHQL. Revista Antioqueña de las Ciencias Computacionales y la Ingeniería de Software (RACCIS), 9(2), p. 10-22.',
      link: 'http://dx.doi.org/10.5281/zenodo.3592004',
    },
    {
      referencia:
        'SoapUI. (s. f.). Acelerando la calidad de la API a través de pruebas.',
      link: 'https://www.soapui.org/',
    },
    {
      referencia:
        'Villate, J. (2001). Introducción al XML. Universidad de Oporto.',
      link:
        'https://docplayer.es/1640770-Introduccion-al-xml-jaime-e-villate-universidad-de-oporto-villate-fe-up-pt-5-de-mayo-de-2001.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Mario Fernando Meneses Calvache',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
