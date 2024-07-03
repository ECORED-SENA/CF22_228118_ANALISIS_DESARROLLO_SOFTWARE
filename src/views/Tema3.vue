<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Integración de aplicaciones (XML, SOAP, WSDL y UDDI)
    
    p.mb-5 Los servicios web permiten la nueva generación de aplicaciones basadas en Internet. Estos servicios admiten la comunicación de Internet de aplicación a aplicación, es decir, las aplicaciones en diferentes ubicaciones de la red se pueden integrar para funcionar como si fueran parte de un único sistema de #[em software] grande. Ejemplos de aplicaciones que los servicios web hacen posibles incluyen transacciones comerciales automatizadas y acceso directo (sin navegador) a dispositivos de escritorio y de mano, a las reservas, el comercio de acciones y los sistemas de seguimiento de pedidos.

    .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4.px-lg-5
        p.mb-0 Han surgido varios estándares clave que, juntos, forman la base de los servicios web: #[b XML] (#[em Extensible Markup Language]), #[b WSDL] (#[em Web Services Definition Language]), #[b SOAP] (#[em Simple Object Access Protocol]) y #[b UDDI] (#[em Universal Description, Discovery, and Integration]). Además, se ha especificado #[b ebXML] (Electronic Business XML) para facilitar la integración automatizada de procesos comerciales entre socios comerciales.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1	XML #[em Extensible Markup Language]

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
