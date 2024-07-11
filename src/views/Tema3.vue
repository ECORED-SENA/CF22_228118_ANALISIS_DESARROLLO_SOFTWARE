<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Integración de aplicaciones (XML, SOAP, WSDL y UDDI)
    
    p.mb-5(data-aos="fade-left") Los servicios web permiten la nueva generación de aplicaciones basadas en Internet. Estos servicios admiten la comunicación de Internet de aplicación a aplicación, es decir, las aplicaciones en diferentes ubicaciones de la red se pueden integrar para funcionar como si fueran parte de un único sistema de #[em software] grande. Ejemplos de aplicaciones que los servicios web hacen posibles incluyen transacciones comerciales automatizadas y acceso directo (sin navegador) a dispositivos de escritorio y de mano, a las reservas, el comercio de acciones y los sistemas de seguimiento de pedidos.

    .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 Han surgido varios estándares clave que, juntos, forman la base de los servicios web: #[b XML] (#[em Extensible Markup Language]), #[b WSDL] (#[em Web Services Definition Language]), #[b SOAP] (#[em Simple Object Access Protocol]) y #[b UDDI] (#[em Universal Description, Discovery, and Integration]). Además, se ha especificado #[b ebXML] (#[em Electronic Business] XML) para facilitar la integración automatizada de procesos comerciales entre socios comerciales.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1	XML #[em Extensible Markup Language]
    
    .row.align-items-center
      .col-lg-6.mb-4(data-aos="fade-up")
        .bloque-texto-b.b-txt-b-1.p-4.ps-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="margin-left: -54px;")
            h4.mb-0 XML #[em (Extensible Markup Language)] es un lenguaje de marcas que define un conjunto de reglas para la codificación de documentos, se utiliza para estructurar información en cualquier fichero que contenga texto y es muy usado en el medio, debido a que es un estándar abierto y libre, creado por el consorcio #[em World Wide Web], W3C.
            i.fas.fa-quote-right
            br
            span Bianco (2005)
      .col-lg-2.mb-4(data-aos="fade")
        .fondo-color-acento-contenido.p-4.px-md-5.borde-12
          figure
            img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 73px;")
      .col-lg-4.mb-4(data-aos="fade-down")
        .fondo-color-sistema-k.borde-12.px-3.py-4
          p.mb-0 #[b Además, el lenguaje XML] proporciona una estructura para definir elementos, crear un formato y generar un lenguaje personalizado. Estos archivos están conformados por dos partes: #[em prolog y body].
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4(data-aos="fade-left")
        .fondo-color-sistema-l.py-5.px-4.h-100
          figure.mb-5
            img.me-auto(src="@/assets/curso/temas/14.svg",style="max-width: 95px;")
          p.mb-4.text-white.fw-bold #[em PROLOG]
          p.mb-0.text-white Son metadatos administrativos, como declaración XML, instrucción de procesamiento opcional, declaración de tipo de documento y comentarios.
      .col-lg-4.mb-4(data-aos="fade-right")
        .fondo-color-acento-contenido.py-5.px-4.h-100
          figure.mb-5
            img.me-auto(src="@/assets/curso/temas/15.svg",style="max-width: 95px;")
          p.mb-4.fw-bold #[em BODY]
          p.mb-0 Se compone de dos partes: estructural y de contenido (presente en los textos simples).
    
    .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5.py-md-5
        p.mb-0 El XML es de uso sencillo, por lo cual se utiliza en varios servicios web, haciendo posible una forma independiente de almacenar datos para que puedan ser compartidos por diferentes aplicaciones, logrando una óptima compatibilidad entre dispositivos.

    .fondo-personalizado-1.f1.bottom-1.top-0
      .fondo-personalizado-1__contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Estructura

        p.mb-4(data-aos="fade-left") El prólogo va en la primera línea de código. Aquí se declara que el documento es XML y qué versión se está utilizando. Vea el siguiente ejemplo:

        p.mb-4.fw-bold Ejemplo:

        .row 
          .col-lg-3.mb-4
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;?xml version="1.0"?&gt;
          .col-lg-3.mb-4
            .fondo-color-sistema-k.p-4.borde-12.h-100
              p.mb-0 Declaración normal, sirve para cualquier documento, solo especifica la versión.
          .col-lg-5.mb-4
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?&gt;
        
        p.mb-4(data-aos="zoom-in-out") Aquí está la versión y también se agrega el tipo de codificación y el #[em standalone], que se refiere a que es un documento autónomo.

        .row.justify-content-center.align-items-center 
          .col-lg-2.col-md-4.mb-4(data-aos="fade-right")
            figure
              img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 190px;")
          .col-lg-8.col-md-8.mb-4(data-aos="fade-left")
            .fondo-color-sistema-j.borde-12.p-4
              p.mb-0 En el cuerpo es donde va la programación. Hay que tener en cuenta un elemento principal llamado raíz, dentro del cual se encuentran el resto de los elementos. Este elemento es el “padre” de todos los demás elementos, y de él se derivan las ramas del árbol hasta el nivel más bajo.
        
        p.mb-4.fw-bold(data-aos="fade") Hay que tener en cuenta que XML es muy diferente de HTML, por ejemplo:

        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] Diferencias XML-HTML
            .tabla-a.tabla-personalizada-1
              table
                thead
                  tr
                    th XML
                    th.ps-lg-5.text-start Título de col2
                tbody
                  tr(style="background-color: #FFFBEA;")
                    td
                      div.p-lg-5
                        | &lt;libro&gt;
                        br
                        | &lt;autor&gt;Mario Meneses&lt;/autor&gt;
                        br
                        | &lt;titulo&gt;Guía de Aprendizaje XML &lt;/titulo&gt;
                        br
                        | &lt;precio moneda=“pesos”&gt;100.000 &lt;/precio&gt;
                        br
                        | &lt;/libro&gt;


                    td.align-content-start
                      div.p-lg-5
                        | &lt;b&gt;Mario Meneses&lt;/b&gt;
                        br
                        | &lt;b&gt;&lt;i&gt;Guía de Aprendizaje XML&lt;/i&gt;&lt;/b&gt;
                        br
                        | &lt;b&gt;precio: 100.000 $ &lt;/b&gt;

                  tr(style="background-color: #D6E1FD;")
                    td
                      div.px-lg-5.py-lg-2
                        span XML Utiliza etiquetas para definir el contenido y significado de esta información.


                    td.align-content-start
                      div.px-lg-5.py-lg-2.ms-lg-5
                        span HTML se centra en colocar etiquetas para representar información.
        
        p.mb-5(data-aos="fade") Para hacer un XML, se debe tener en cuenta la estructura de árbol, la cual es jerárquica. Debe haber un elemento raíz del cual se desprenden todos los demás. Estos no se pueden superponer entre ellos; al contrario, deben estar anidados. Por ejemplo, de la siguiente forma:

        .row.justify-content-center(data-aos="flip-up")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Estructuras
            .fondo-color-sistema-h.p-4
              figure
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/18.svg",style="max-width: 663px;",alt="Diagrama que representa la estructura de un libro. El libro está compuesto por Título, Autor, Precio y Descriptores. El Título y el Precio no tienen subdivisiones adicionales. El Autor se divide en Autor 1 y Autor 2. El Precio se divide en Moneda, y los Descriptores se dividen en Lenguajes.")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/19.svg",style="max-width: 412px;",alt="Diagrama que representa la estructura de un libro. El libro está compuesto por Título, Autor, Precio y Descriptores. El Título y el Precio no tienen subdivisiones adicionales. El Autor se divide en Autor 1 y Autor 2. El Precio se divide en Moneda, y los Descriptores se dividen en Lenguajes.")
    
    .fondo-personalizado-1.f1.bottom-1
      .fondo-personalizado-1__contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Etiquetas o #[em Tags]
        
        p.mb-4(data-aos="fade-left") En el anterior ejemplo, se observa que hay elementos en los cuales se describen los datos que se contienen, así:
        p.mb-0.fw-bold(data-aos="fade-left") Ejemplo:
        p.mb-4(data-aos="fade-left") En el ejercicio, se puede identificar que:

        .row 
          .col-lg-4.mb-4
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;titulo&gt;Guía de Aprendizaje XML&lt;/titulo&gt;
          .col-lg-7.mb-4
            .fondo-color-sistema-m.px-4.py-5.h-100.borde-12
              ul.lista-ul.lista-p-1.mb-0
                li
                  span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                  span Cuando se inicia una etiqueta, siempre se deben abrir así: #[b &lt;titulo&gt;]
                li.mb-0
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span Cuando se termina de describir un dato, siempre se debe cerrar así: #[b &lt;/titulo&gt;]

        .cont-titulo-decorativo.p-2.mt-3.mb-5(data-aos="fade")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Atributos
        
        p.mb-4(data-aos="fade-left") Un atributo sirve para proporcionar información extra sobre el elemento que lo contiene. Los atributos siempre están dentro de las etiquetas de apertura:
        p.mb-0.fw-bold(data-aos="fade-right") Ejemplo:
        p.mb-4(data-aos="fade-left") En el ejercicio, se puede observar que:
        .row.mb-4
          .col-lg-6.col-md-9
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;precio moneda="euros"&gt;30&lt;/precio&gt;
                  br
                  | &lt;precio moneda="pesos"&gt;80.000&lt;/precio&gt;
        
        p.mb-5(data-aos="fade") El atributo está entre comillas dobles, pero también puede ir entre comillas sencillas. En este caso específico, indica que la moneda de un libro es en euros, mientras que el otro es en pesos.

        .row.align-items-end.mb-5
          .col-lg-6
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;autor&gt;Mario Meneses&lt;/autor&gt;
                  br
                  | &lt;titulo&gt;Guía de Aprendizaje XML&lt;/titulo&gt;
                  br
                  | &lt;precio moneda="euros"&gt;30&lt;/precio&gt;
                  br
                  | &lt;autor&gt;Eduardo Benavides&lt;/autor&gt;
                  br
                  | &lt;titulo&gt;XML con ejemplos&lt;/titulo&gt;
                  br
                  | &lt;descriptor&gt;lenguajes&lt;/descriptor&gt;
                  br
                  | &lt;descriptor&gt;Programación&lt;/descriptor&gt;
                  br
                  | &lt;precio moneda="euros"&gt;30&lt;/precio&gt;
                  br
                  | &lt;precio moneda="pesos"&gt;80.000&lt;/precio&gt;

          .col-lg-6.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 429px;")
        
        p.mb-4.fw-bold Revisemos el siguiente ejercicio:

        .row.justify-content-center.mb-5
          .col-lg-6
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | &lt;Familia&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;Padres&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Padre nombre = "Mario"&gt;&lt;/Padre&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Madre nombre = "Margarita"&gt;&lt;/Madre&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;/Padres&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;Hijos&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nombre&gt; "Samuel" genero="Masculino"&lt;/Nombre&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nombre&gt; "Ana" genero="Femenino"&lt;/Nombre&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;/Hijos&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;Mascotas&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;gato&gt; nombre="Bills"&lt;/gato&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;perro&gt; nombre="Vegeta"&lt;/perro&gt;
                  br
                  | &nbsp;&nbsp;&nbsp;&lt;/Mascotas&gt;
                  br
                  | &lt;/Familia&gt;
        
        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-10
            .fondo-color-sistema-n.borde-12.p-4.p-lg-5
              p.mb-4.fw-bold Es posible probar y editar este código fuente de una manera muy sencilla:
              TabsA.tab-a-personalizado-1.color-acento-contenido
                .fondo-color-sistema-k.p-4.borde-10(titulo="PASO 1")
                  p.mb-0 Abrir el programa Notepad++
                .fondo-color-sistema-k.p-4.borde-10(titulo="PASO 2")
                  p.mb-0 Pegar o escribir el código.
                .fondo-color-sistema-k.p-4.borde-10(titulo="PASO 3")
                  p.mb-0 Dar clic en guardar como, seleccionar una ubicación y, en el nombre, escribir un nombre+.xml, así: Familia.xml
                .fondo-color-sistema-k.p-4.borde-10(titulo="PASO 4")
                  p.mb-0 Guardar los cambios.
                .fondo-color-sistema-k.p-4.borde-10(titulo="PASO 5")
                  p.mb-4 Ahora, al archivo que guardó, se le da clic derecho y se abre con el navegador Google Chrome, y debe aparecer en el navegador así:
                  .bloque-codigo-personalizado.h-100
                    .cuerpo-bloque-codigo.p-4.h-100.borde-12
                      code.text-wrap
                        | &lt;Familia&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;Padres&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Padre nombre = "Mario"&gt;&lt;/Padre&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Madre nombre = "Margarita"&gt;&lt;/Madre&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;/Padres&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;Hijos&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nombre&gt; "Samuel" genero="Masculino"&lt;/Nombre&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Nombre&gt; "Ana" genero="Femenino"&lt;/Nombre&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;/Hijos&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;Mascotas&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;gato&gt; nombre="Bills"&lt;/gato&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;perro&gt; nombre="Vegeta"&lt;/perro&gt;
                        br
                        | &nbsp;&nbsp;&nbsp;&lt;/Mascotas&gt;
                        br
                        | &lt;/Familia&gt;

        .fondo-color-sistema-m.p-4.p-lg-5.mb-1
          p.mb-4.fw-bold(data-aos="fade") De acuerdo con Bianco (2005), hay que recordar que:
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              ul.lista-ul.lista-p-1.mb-0.ps-lg-5
                li(data-aos="fade")
                  span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                  span Para editar el código, existen muchos programas, como: Microsoft Word, bloc de notas, Notepad++ y un sin número de editores.
                li(data-aos="fade")
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span Para visualizar, es mejor utilizar los navegadores Google Chrome o Mozilla Firefox, ya que otros pueden tener problemas de compatibilidad.
                li.mb-0(data-aos="fade")
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span XML hace distinción de la escritura en mayúsculas y minúsculas, por lo cual hay que tener cuidado en la escritura.
            .col-lg-5
              figure(data-aos="fade-up")
                img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 198px;")
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 SOAP #[em Simple Object Access Protocol]
    p.mb-4(data-aos="fade-left") SOAP es un acrónimo de Protocolo Simple de Acceso a Objetos. Es un protocolo de mensajería, basado en XML, para intercambiar información entre computadoras, y es una aplicación de la especificación XML. Profundice con el siguiente video:

    figure(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. SOAP Simple Object Access Protocol
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3.	WSDL Lenguaje de Descripción de Servicios Web
    
    p.mb-0(data-aos="fade-left") Según Gutiérrez (2016), es un lenguaje por medio del cual un servicio web describe, entre otras cosas, qué hace o qué funcionalidad implementa. Es el lenguaje de la interfaz pública para los servicios web. Es una descripción basada en XML de los requisitos funcionales necesarios para establecer una comunicación con los servicios web.

    .cont-titulo-decorativo.p-2.mt-4.mb-4(data-aos="fade-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Estructura de WSDL
    
    p.mb-5(data-aos="fade-up") Este archivo tiene una estructura jerárquica, por lo tanto, la información está anidada. Tiene dos tipos de descripciones:
    
    .row.justify-content-center
      .col-lg-5.mb-4(data-aos="fade-right")
        .fondo-color-sistema-l.p-4.h-100
          .row.align-items-center 
            .col-md-3
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 78px;")
            .col-md-9
              p.fw-bold.mb-3.text-white Descripciones abstractas
              p.mb-0.text-white Se refiere a la funcionalidad del servicio.
      .col-lg-5.mb-4(data-aos="fade-left")
        .fondo-color-acento-contenido.p-4.h-100
          .row.align-items-center 
            .col-md-3
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 77px;")
            .col-md-9
              p.fw-bold.mb-3 Descripciones concretas
              p.mb-0 Comunican datos específicos, como el protocolo de transmisión.
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .fondo-color-sistema-n.borde-12.p-4.p-lg-5
          p.mb-4.fw-bold El mismo autor resalta que WSDL recurre a 6 elementos principales:
          TabsA.tab-a-personalizado-1.color-acento-contenido
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 1")
              p.mb-0.fw-bold #[em Types]
              p.mb-0 Tipos de datos.
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 2")
              p.mb-0.fw-bold #[em Message]
              p.mb-0 Descripción de los datos a transferir.
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 3")
              p.mb-0.fw-bold #[em Interface]
              p.mb-0 Operaciones abstractas que describen la comunicación entre el servidor y el cliente (aún se llamaba portType en una versión anterior del estándar).
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 4")
              p.mb-0.fw-bold #[em Binding]
              p.mb-0 Información sobre el protocolo de transporte utilizado.
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 5")
              p.mb-0.fw-bold #[em Endpoint]
              p.mb-0 Información sobre la interfaz de comunicación, generalmente, en forma de un URI (aún se denominaba #[em port] en una versión anterior del estándar).
            .fondo-color-sistema-k.p-4.borde-10.h-100(titulo="Paso 6")
              p.mb-0.fw-bold #[em Service]
              p.mb-0 Puntos de acceso del servicio web.
    
    p.mb-0(data-aos="fade") Por medio del WSDL, el cliente tiene toda la información necesaria para acceder a un servicio web, el beneficio es que todos los sistemas poseen el mismo lenguaje, lo que hace que los servicios web sean multiplataforma.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 UDDI #[em Universal Description, Discovery, and Integration]
    
    p.mb-4(data-aos="fade-left") Para IBM Corporation (s. f.), UDDI (#[em Universal Description, Discovery, and Integration]) define un modo de publicar y encontrar información sobre servicios web. Incluye un esquema XML para mensajes SOAP que define un conjunto de documentos para describir información de empresas y servicios, un conjunto común de API para consultar y publicar información en los directorios, y una API para duplicar entradas de directorio entre nodos UDDI iguales.

    p.fw-bold.mb-4 UDDI tiene dos funciones:

    .row.justify-content-center 
      .col-lg-8(data-aos="fade-right")
        .fondo-color-sistema-l.p-4.mb-2
          p.mb-0.text-white Es un protocolo basado en SOAP que define cómo se comunican los clientes con los registros UDDI.
        .fondo-color-sistema-l.p-4.mb-4
          p.mb-0.text-white Es un conjunto de registros duplicados globales en particular.
        
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Protocolo UDDI
        .fondo-color-sistema-m.p-4.px-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 679px;",alt="Diagrama que representa la interacción entre el Usuario, el Proveedor de Servicios y UDDI. El Usuario registra y publica WSDL en UDDI, mientras que el Proveedor de Servicios busca y obtiene WSDL desde UDDI. El Usuario envía una petición SOAP en formato XML al Proveedor de Servicios, quien responde con una respuesta SOAP también en formato XML.")
    
    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      h2 3.5 REST #[em Representational State Transfer]
    
    p.mb-4(data-aos="fade-left") #[b El protocolo REST (#[em Representational State Transfer])] es una arquitectura cliente-servidor, en la cual un servicio es visto como un recurso que es identificado a través de una dirección URL, por medio de la cual puede ser accedido o consumido. Para acceder a estos servicios web, se hace uso de mensajes en formato simple, los cuales se intercambian entre cliente y servidor.
    p.mb-5.fw-bold Este define, a partir de HTTP, cuatro métodos:

    .row.justify-content-center.mb-1
      .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
        .fondo-color-primario.p-4.pt-lg-5.h-100
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/25.svg",style="max-width: 81px;")
          p.fw-bold.mb-0.text-white #[em GET]
          p.mb-0.text-white Es usado para enviar la representación de un recurso o servicio al cliente “consulta información”.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-primario.p-4.pt-lg-5.h-100
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/26.svg",style="max-width: 77px;")
          p.fw-bold.mb-0.text-white #[em PUT]
          p.mb-0.text-white Este es usado para transferir el estado de un cliente al recurso “actualiza un registro”.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-primario.p-4.pt-lg-5.h-100
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/27.svg",style="max-width: 120px;")
          p.fw-bold.mb-0.text-white #[em DELETE]
          p.mb-0.text-white Borra un recurso específico.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
        .fondo-color-primario.p-4.pt-lg-5.h-100
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/28.svg",style="max-width: 77px;")
          p.fw-bold.mb-0.text-white #[em POST]
          p.mb-0.text-white Es utilizado para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor “crear un nuevo registro”.
    
    .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/29.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 Para hacer uso de esta comunicación, se emplean los siguientes lenguajes o formatos: #[b XML, HTML y JSON. JSON] es el tipo de mensajes más difundido en diferentes servicios propios de redes sociales (Facebook y Twitter) y comunidades en Internet. Cada mensaje intercambiado contiene la información necesaria para el funcionamiento del servicio, de tal forma que, para cada servicio, el cliente y el servidor conocen el formato o protocolo interno de los mensajes.
    
    Separador 

    #t_3_6.titulo-segundo.color-acento-contenido
      h2 3.6 JSON #[em JavaScript Object Notation]
    
    .row.mb-5.align-items-center
      .col-lg-8(data-aos="fade-up")
        p.mb-4 #[b JSON #[em (JavaScript Object Notation)]] es un formato ligero de intercambio de datos. Es de fácil lectura y escritura para los usuarios y fácil de analizar y generar por parte de los dispositivos. Además, se basa en un subconjunto del lenguaje de programación JavaScript. Es compatible con la gran mayoría de lenguajes de programación, lo que lo hace el más popular y usado en los web #[em services]. (IBM Corporation, 2020).
        .fondo-color-sistema-m.p-4.px-md-5.borde-12
          p.mb-0 La cardinalidad, también llamada multiplicidad, indica la cantidad de elementos o instancias de una entidad A que se relacionan con una instancia de una entidad B y viceversa. Esta puede ser de cuatro tipos:
      .col-lg-4.order-first.order-lg-last(data-aos="fade-down")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 400px;")
    
    .row 
      .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
        .fondo-color-acento-contenido.p-4.py-md-5.h-100
          p.mb-4.fw-bold Uno a uno (única)
          p.mb-0 Una instancia de la entidad A se relaciona con una sola instancia de la entidad B.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-acento-contenido.p-4.py-md-5.h-100
          p.mb-4.fw-bold Uno a varios (múltiple)
          p.mb-0 Una instancia de la entidad A se relaciona con múltiples instancias de la entidad B.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-acento-contenido.p-4.py-md-5.h-100
          p.mb-4.fw-bold Varios a uno (múltiple)
          p.mb-0 Múltiples instancias de la entidad A se relacionan con una sola instancia de la entidad B.
      .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
        .fondo-color-acento-contenido.p-4.py-md-5.h-100
          p.mb-4.fw-bold Varios a varios (múltiple)
          p.mb-0 Múltiples instancias de la entidad A se relacionan con múltiples instancias de la entidad B.
    
    p.mb-5 A continuación, se presentan los siguientes ejemplos:
    .fondo-personalizado-1.f1.bottom-1
      .fondo-personalizado-1__contenido
        p.mb-2 #[b Ejemplo 1]
        p.mb-4 Se va a crear un objeto con el nombre negocio con cardinalidad única:

        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col-lg-6
            .fondo-color-sistema-m.p-4.p-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 469px;")
        
        p.mb-4(data-aos="fade-left") Se asignan los siguientes valores para las propiedades del objeto negocio:

        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.mb-4(data-aos="fade")
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Objeto:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Cliente
          .col-lg-3.col-md-6.mb-4(data-aos="fade")
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Propiedad:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span #[em nombre]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span #[em apellido]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span #[em streetAddress]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span #[em city]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span #[em state]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span codigopostal
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span telefonos[0]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span telefonos[1]
          .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Valor:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Alejandro
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Meneses
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Calle 5 con carrera 26
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Santa Marta
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Magdalena
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 760004
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 50158182332
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 61745896258
        
        p.mb-4 El formato Json quedaría de la siguiente forma:
        .row.justify-content-center.mb-5
          .col-lg-6
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | {
                  br
                  | "nombre": "Alejandro",
                  br
                  | "apellido": "Meneses",
                  br
                  | "address": {
                  br
                  | "streetAddress": "Calle 5 con carrera 26",
                  br
                  | "city": "Santa Marta",
                  br
                  | "state": "Magdalena",
                  br
                  | "postalCode": 760004
                  br
                  | },
                  br
                  | "telefonos": [
                  br
                  | "50158182332",
                  br
                  | "61745896258"
                  br
                  | ]
                  br
                  | }
    
    .fondo-personalizado-1.f1.bottom-1
      .fondo-personalizado-1__contenido
        p.mb-2.fw-bold Ejemplo 2
        p.mb-4 Se va a crear un objeto con el nombre negocio con cardinalidad múltiple:

        .row.justify-content-center.mb-4
          .col-lg-6
            .fondo-color-sistema-m.p-4.p-lg-5
              figure
                img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 468px;")
        
        p.mb-4 También, se asignan los siguientes valores para las propiedades del objeto negocio:

        .row.justify-content-center
          .col-lg-3.col-md-6.mb-4
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Objeto:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Address []
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Address []

          .col-lg-3.col-md-6.mb-4
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Propiedad:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span nombre
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span apellido
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span streetAddress
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span city
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span state
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span postalCode
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span telefonos[0]
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span telefonos[1]
          .col-lg-3.col-md-6.mb-4
            .d-flex.flex-column.h-100
              .fondo-color-sistema-p.p-4
                p.mb-0.text-white.fw-bold.text-center Valor:
              .fondo-color-sistema-m.p-4.h-100
                ul.lista-ul.lista-p-1.mb-0
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Alejandro
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Meneses
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Calle 5 con carrera 26
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Santa Marta
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Magdalena
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 760004
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Calle 18 No. 25-10
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Popayán
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span Cauca
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 761115
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 50158182332
                  li.mb-0
                    span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                    span 61745896258
        
        p.mb-4 El formato Json quedaría de la siguiente forma:

        .row.justify-content-center
          .col-lg-6
            .bloque-codigo-personalizado.h-100(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4.h-100
                code.text-wrap
                  | {
                  br
                  | "nombre": "Alejandro",
                  br
                  | "apellido": "Meneses",
                  br
                  | "address": [
                  br
                  | {
                  br
                  | "streetAddress": "Calle 5 con carrera 26",
                  br
                  | "city": "Santa Marta",
                  br
                  | "state": "Magdalena",
                  br
                  | "codigopostal": 760004
                  br
                  | },
                  br
                  | {
                  br
                  | "streetAddress": "Calle 18 No 25-10",
                  br
                  | "city": "Popayán",
                  br
                  | "state": "Cauca",
                  br
                  | "postalCode": 760004
                  br
                  | }
                  br
                  | ],
                  br
                  | "phoneNumbers": [
                  br
                  | "50158182332",
                  br
                  | "61745896258"
                  br
                  | ]
                  br
                  | }




          
      

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
