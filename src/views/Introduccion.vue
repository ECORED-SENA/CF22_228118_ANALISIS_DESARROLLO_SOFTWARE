<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-color-sistema-i.p-4.borde-12.mb-4
      .row.align-items-center
        .col
          p.mb-0 En el mundo de la programación y desarrollo de <em>software</em>, la organización y estructuración del código son fundamentales para asegurar la eficiencia y facilidad de mantenimiento de las aplicaciones. Este documento aborda conceptos esenciales como métodos o funciones, clases y objetos, y la integración de aplicaciones mediante estándares como XML, SOAP, WSDL y UDDI. Además, se explora el proceso de creación de servicios, destacando su desarrollo, ejecución y consumo. Estos temas son cruciales para los desarrolladores que buscan construir sistemas robustos y escalables, capaces de interactuar con diversas aplicaciones y plataformas. A través de una comprensión clara y concisa de estos elementos, se sientan las bases para la creación de soluciones tecnológicas que respondan a las necesidades actuales del mercado.
        .col-lg-auto.order-first.order-lg-last
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 266px;")

    .row.align-items-center.mb-5
      .col
        p.mb-0 La correcta utilización de métodos o funciones permite segmentar el trabajo en tareas más pequeñas y manejables, facilitando su reutilización y mantenimiento. Por otro lado, la definición clara de clases y objetos es fundamental para la organización del código, proporcionando una estructura lógica que mejora la eficiencia del desarrollo y la claridad del programa. Estos conceptos no solo optimizan el proceso de programación, sino que también permiten una mejor colaboración entre equipos de desarrollo, ya que el código se vuelve más legible y comprensible.
      .col-lg-auto.order-first
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 295px;")

    .row.align-items-center.mb-4
      .col
        p.mb-0 La integración de aplicaciones mediante XML, SOAP, WSDL y UDDI es un componente vital en la creación de servicios web modernos. Estos estándares permiten que diferentes aplicaciones se comuniquen e interactúen entre sí, independientemente de las plataformas o lenguajes de programación utilizados. Al dominar estos procesos, los desarrolladores pueden crear servicios que sean accesibles y utilizables por una amplia gama de sistemas, asegurando la interoperabilidad y ampliando el alcance y la funcionalidad de las aplicaciones. Esta integración es esencial para construir soluciones tecnológicas que sean tanto versátiles como adaptables a las cambiantes demandas del mercado.
      .col-md-auto.mb-4.mb-lg-0.order-first.order-md-last
        .fondo-color-acento-contenido.px-5.py-4.borde-12
          figure
            img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 73px;")
    
    p.mb-0 #[b Le deseamos muchos éxitos en este proceso de aprendizaje.]
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
