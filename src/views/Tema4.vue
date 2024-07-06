<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Creación de servicios
    
    p.mb-4(data-aos="fade-up") Indican que es una tecnología que establece unos estándares y protocolos que se utilizan para intercambiar datos entre distintas aplicaciones, plataformas y con diferentes o iguales lenguajes de programación. Por lo general, se utilizan estándares abiertos, lo que comúnmente se llama interoperabilidad; las organizaciones OASIS y W3C son los comités responsables de la arquitectura y la reglamentación de los servicios web. Sayago et al. (2019)

    .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/33.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La función es permitir que los dispositivos interactúen entre sí y presenten información dinámica al usuario, basándose en una arquitectura de referencia estándar, que hace posible su combinación para realizar integraciones entre las mismas aplicaciones.
    
    .cont-titulo-decorativo.p-2.mt-4.mb-4(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Creación de servicios
    
    p.mb-4 Para la creación de servicios, se debe seguir el siguiente proceso:

    .slider-personalizado-1.py-5.mb-4(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/36.png")
      img.imgf-2(src="@/assets/curso/temas/34.png")
      img.imgf-3(src="@/assets/curso/temas/35.png")
      .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-6.pe-lg-5.mb-4.mb-lg-0
                  h4.mb-4.c-color-sistema-l Desarrollo de servicios
                  p.mb-0 Se realiza en la parte de servicios o en la nube, y este tipo de desarrollo también se conoce como #[em backend]. Esta parte de la programación no es visible para el usuario y no se ejecuta en los dispositivos o navegadores del cliente. Aquí es donde se provee el servicio para que los clientes lo consuman (Recalde, 2019).
                .col-lg-6
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 506px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-6.pe-lg-5
                  h4.mb-4.c-color-sistema-l Ejecución de servicios
                  p.mb-0 Se realiza en la parte de servicios o en la nube, y este tipo de desarrollo también se conoce como #[em backend]. Esta parte de la programación no es visible para el usuario y no se ejecuta en los dispositivos o navegadores del cliente. Aquí es donde se provee el servicio para que los clientes lo consuman (Recalde, 2019).
                .col-lg-6
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 505px;")
          .row.justify-content-center
            .col-lg-11
              .row.align-items-center
                .col-lg-6.pe-lg-5
                  h4.mb-4.c-color-sistema-l Consumo de servicios
                  p.mb-0 Una vez el servicio es creado, es el turno de los usuarios para consumirlo. Por ello, se desarrollan o programan aplicaciones del lado del #[em frontend] para consumir dichos servicios; esto consiste en la conversión de datos en una interfaz gráfica, para que el usuario pueda interactuar con la información.
                .col-lg-6
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 505px;")
         
      

</template>

<script>
export default {
  name: 'Tema4',
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
