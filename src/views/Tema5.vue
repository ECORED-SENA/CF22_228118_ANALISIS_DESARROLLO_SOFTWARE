<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conexiones a SQL
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5
        p.mb-4 Para iniciar con este tema, es preciso recordar que SQL (#[em Structured Query Language]) es un lenguaje de consulta estructurado, definido como la base de las bases de datos relacionales con el lenguaje de alto nivel estándar.

        p.mb-4.fw-bold De acuerdo con García (2003), SQL agrupa tres tipos de sentencias con objetivos particulares, en los siguientes lenguajes:

        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5
            .fondo-color-sistema-p.borde-12.py-3.px-4.px-md-5.mb-2
              p.mb-0.text-white #[b DDL] (Lenguaje de Definición de Datos)
            .fondo-color-sistema-p.borde-12.py-3.px-4.px-md-5.mb-2
              p.mb-0.text-white #[b DML] (Lenguaje de Manipulación de Datos)
            .fondo-color-sistema-p.borde-12.py-3.px-4.px-md-5.mb-2
              p.mb-0.text-white #[b DCL] (Lenguaje de Control de Datos)
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 295px;")
        
        p.mb-4 El grupo de sentencias de SQL soporta la definición y declaración de los objetos de la base de datos, tales como:
        
        .row.justify-content-center 
          .col-lg-7
            .borde-12.fondo-color-sistema-j.overflow-hidden.tabla-personalizada-2
              table
                tbody
                  tr
                    td.ps-lg-5 #[em #[b DATABASE:]]
                    td.ps-lg-5 base de datos misma
                  tr
                    td.ps-lg-5 #[em #[b PROCEDURE:]]
                    td.ps-lg-5 los procedimientos almacenados
                  tr
                    td.ps-lg-5 #[em #[b TRIGGER:]]
                    td.ps-lg-5 los disparadores
                  tr
                    td.ps-lg-5 #[em #[b DEFAULT:]]
                    td.ps-lg-5 valores por defecto
                  tr
                    td.ps-lg-5 #[em #[b CREATE, ALTER y DROP INDEX:]]
                    td.ps-lg-5 índices
                  tr
                    td.ps-lg-5 #[em #[b VIEW:]]
                    td.ps-lg-5 Vistas
                  tr
                    td.ps-lg-5 #[em #[b TABLE:]]
                    td.ps-lg-5 tablas
        
        .cont-titulo-decorativo.p-2.mt-5.mb-5
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Grupo de sentencias de SQL
        
        .row 
          .col-md-auto.mb-4.mb-md-0
            .fondo-color-acento-contenido.py-2.px-5.borde-12
              figure
                img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 68px;")
          .col 
            p.mb-0.pt-lg-3 Para el ejemplo que se realizará más adelante, en el cual se unirán todos los temas, se utilizará phpMyAdmin, que es una herramienta escrita en PHP cuya función es administrar MySQL a través de páginas web, utilizando cualquier navegador.

</template>

<script>
export default {
  name: 'Tema5',
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
