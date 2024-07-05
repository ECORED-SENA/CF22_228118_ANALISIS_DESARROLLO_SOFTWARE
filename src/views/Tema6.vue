<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Servicios en PHP

    .fondo-personalizado-1.f1.mb-4
      .fondo-personalizado-1__contenido.pb-5
        .row.mb-5 
          .col-md-auto.mb-4.mb-md-0.order-first.order-md-last
            .fondo-color-acento-contenido.py-3.px-5.borde-12
              figure
                img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 64px;")
          .col 
            p.mb-0 PHP es uno de los lenguajes de código abierto más utilizados y adecuados para el desarrollo de aplicaciones y servicios web; este puede ser introducido en HTML. Por ser un lenguaje gratuito, millones de páginas y portales web están creados con PHP. Su función es muy sencilla: el usuario utiliza aplicaciones o navegadores para realizar una solicitud a un servidor, el servidor recibe la petición, organiza la información solicitada y responde enviando la consulta por medio de una página web o aplicación "normal", pero su creación es "dinámica".

        .row.justify-content-center.mb-4
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
        
        p.fw-bold.mb-4 El proceso de los servicios PHP está estructurado de la siguiente manera:

        p(style="color: red;") slider aca!!

    p.mb-5.fw-bold Ejercicio práctico creación de servicios web

    .row.justify-content-center 
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
