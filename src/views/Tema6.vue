<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Servicios en PHP

    .fondo-personalizado-1.f1.mb-4
      .fondo-personalizado-1__contenido.pb-5
        .row.mb-5 
          .col-md-auto.mb-4.mb-md-0.order-first.order-md-last(data-aos="fade-down")
            .fondo-color-acento-contenido.py-3.px-5.borde-12
              figure
                img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 64px;")
          .col 
            p.mb-0(data-aos="fade-up") PHP es uno de los lenguajes de código abierto más utilizados y adecuados para el desarrollo de aplicaciones y servicios web; este puede ser introducido en HTML. Por ser un lenguaje gratuito, millones de páginas y portales web están creados con PHP. Su función es muy sencilla: el usuario utiliza aplicaciones o navegadores para realizar una solicitud a un servidor, el servidor recibe la petición, organiza la información solicitada y responde enviando la consulta por medio de una página web o aplicación "normal", pero su creación es "dinámica".

        .row.justify-content-center.mb-4(data-aos="zoom-in-out")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] PHP
            .tabla-a.tabla-personalizada-3
              table
                thead
                  tr
                    th.text-start Páginas estáticas
                    th.text-start(style="width: 130px;") Petición
                    th.text-start Respuesta
                tbody
                  tr(style="background-color: #E3DFEB;")
                    td Páginas dinámicas
                    td Petición
                    td Procesa, prepara y da respuesta
        
        p.fw-bold.mb-4(data-aos="fade-left") El proceso de los servicios PHP está estructurado de la siguiente manera:

        .row 
          .col-lg-7
            AcordionA.acordion-personalizado-1.mb-5(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
              div.ms-md-5(titulo="Creación de servicios en PHP")
                p.ps-md-2.mb-4.pt-md-0.pt-2 Los servicios web son una integración de aplicaciones web, básicamente se trata de un servidor que expone un segmento de su funcionalidad para que sus clientes (dispositivos, aplicaciones, computadores u otros servidores) utilicen sus servicios. En su gran mayoría, los servicios se constituyen en JavaScript, que también es un lenguaje de programación, pero igualmente funciona de buena manera con PHP.
              div.ms-md-5(titulo="Implementación de servicios en PHP")
                p.ps-md-2.mb-4.pt-md-0.pt-2 García (2003) describe que, para que un cliente tenga acceso a la información de un servicio, lo implemente y active el método en el servidor, hay un sistema de catálogo que, de manera predeterminada, efectúa todos los servicios web y sus métodos. De esta forma, con las credenciales adecuadas, un cliente tiene acceso a todas las funciones de los servicios web.
                p.ps-md-2.mb-4.pt-md-0.pt-2 Al momento de implementar un servicio web, se actualiza el WSDL, archivo de Lenguaje de Descripción de Servicios Web. Hay que recordar que cada servicio web tiene su propio WSDL, el cual contiene información sobre los servicios implementados en ese momento y también las firmas de métodos.
              div.ms-md-5(titulo="Consumo de métodos")
                p.ps-md-2.mb-4.pt-md-0.pt-2 El consumo de un servicio, en este caso en RESTFul, es tan sencillo como enviar un pedido en HTTP y procesar su respuesta.  
                p.ps-md-2.mb-4.pt-md-0.pt-2 Ejemplo:
                .me-lg-5
                  .bloque-codigo-personalizado.h-100
                    .cuerpo-bloque-codigo.p-4.h-100
                      code.text-wrap
                        | $res = file_get_contents("https://www.sena.edu.co/es-co/formacion/Paginas/Estudie-en-el-SENA.aspx");
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-up")
              img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 502px;")

    p.mb-5.fw-bold(data-aos="fade") Ejercicio práctico creación de servicios web

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .fondo-color-sistema-m.borde-12.p-4.p-md-5
          .row.align-items-center
            .col-lg-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 198px;")
            .col 
              p.mb-4 En el siguiente ejercicio, se observarán en detalle los temas que se han abordado en cuanto a servicios web. Se trabajará desde el punto de vista del creador de servicios y el cliente o consumidor de servicios:

              ul.lista-ul.lista-p-1.mb-0
                li.mb-1
                  span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                  span XAMPP
                li.mb-1
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span Editor de código fuente de licencia libre como = Notepad++ o NetBeans
                li.mb-0
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span Navegador web = #[em Chrome o Internet Explorer]

   
</template>

<script>
export default {
  name: 'Tema6',
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
