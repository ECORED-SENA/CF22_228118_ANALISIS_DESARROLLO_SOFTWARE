<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.py-5.px-2(style="border-radius: 20px;")
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama que sintetice   los componentes de los servicios web con PHP. Se describen los métodos y funciones, incluyendo la segmentación del trabajo en subrutinas y la reutilización, además de la visibilidad (pública, privada, protegida). Se explican las clases como contenedores de información con atributos y métodos, y los objetos como instancias de clases. La integración de aplicaciones incluye XML, SOAP, WSDL y UDDI, destacando sus funciones y diferencias. La creación de servicios abarca el desarrollo, ejecución y consumo de servicios, enfatizando la importancia de los estándares y protocolos para la integración de datos entre aplicaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
