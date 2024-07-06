<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Aplicación SOAP UI
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        p.mb-0(data-aos="fade") Según la organización SoapUI (s. f.), la aplicación SOAP UI es una herramienta muy versátil que sirve para probar, simular y obtener el código de aplicaciones #[em web service] y la transferencia de estado representacional. Esta herramienta está generada en código Java, funciona sobre SOAP, JMS, JDBC, API de REST, GraphQL y muchos servicios más, además de ser muy útil para que los futuros desarrolladores aprendan a crear API.

        .cont-titulo-decorativo.p-2.mt-4.mb-4(data-aos="flip-up")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Uso de la herramienta SOAP UI
        
        .row 
          .col-lg-8(data-aos="fade-down")
            .fondo-color-sistema-k.p-4.borde-12
              p.mb-0 Para probar un servicio web existente, se utilizan recursos y directorios de web #[em service] que se pueden acceder de manera libre, o diferentes páginas que proveen servicios, como almacenes, bibliotecas, supermercados, entre otros. Para esto, es necesario saber qué tipo de proyecto se utilizará en SOAP UI, ya sea #[em REST o SOAP].
          .col-lg-4.order-first.order-lg-last(data-aos="fade-down")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 400px;")

  
</template>

<script>
export default {
  name: 'Tema7',
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
