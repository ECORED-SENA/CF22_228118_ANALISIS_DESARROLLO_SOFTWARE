<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Métodos o funciones
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-7
            .fondo-color-sistema-j.py-5.px-4(data-aos="fade-right")
              p.mb-0 #[b De acuerdo con Gonzáles y Pelissier (2002)], los métodos o funciones permiten segmentar el trabajo que hace un programa en subtareas o tareas más pequeñas, enfocadas en un fin específico, y se pueden utilizar cuantas veces se necesite. Estas están separadas del programa principal, pero aportan a su objetivo.
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 502px;")

        .bloque-texto-g.b-txt-g-1.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El uso de funciones da la capacidad de agrupar varias instrucciones de código bajo un solo nombre. Con el nombre de la función, es posible invocarla las veces que se necesite, permitiendo utilizar esta función repetidamente según sea necesario.
        
        p.mb-0(data-aos="fade") #[b Ejemplo:]
        p.mb-5(data-aos="fade") La función se define con la siguiente sintaxis:
        .row.align-items-center.mb-4(data-aos="flip-up")
          .col-lg-6
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  | &lt;?php
                  br
                  br
                  | function media_aritmetica($a, $b){ //Aquí definimos la función y la llamamos media_arimetica y las variables a y b
                  br
                  | $media=($a+$b)/2; //escribimos la fórmula de la media, en este caso de 2 números divididos entre 2
                  br
                  | return $media; // aquí la función retorna el valor de la media
                  br
                  | }
                  br
                  | echo media_aritmetica(7,9),”&lt;br&gt;”; // aquí ingresamos los números, en este caso 7 y 9
                  br
                  | echo media_aritmetica(300,500),”&lt;br&gt;”; ?&gt; //aquí ingresamos otros dos números 300 y 500

          .col-lg-6.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 610px;")

        .fondo-color-sistema-k.p-4.px-lg-5.mb-4(data-aos="fade-right")
          p.mb-0 #[b Nota:] el símbolo “//” quiere decir que no hace parte del código, se utiliza para hacer comentarios sobre el código, por lo cual se pone en color azul.
        
        p.mb-4(data-aos="fade-left") #[b La función devuelve como resultados los números 8 y 400.]

        .row.align-items-center.mb-4
          .col(data-aos="fade-up")
            p.mb-0 En el ejemplo anterior, se describe la sintaxis de una función que calcula la media aritmética de dos o más números, pero es necesario recordar qué es la media aritmética. Según Paz (s. f.), #[b “La media aritmética o promedio simple se calcula sumando los valores de interés y dividiendo entre el número de valores sumados”]. Para el caso anterior, se suman 2 números y el resultado se divide entre 2, así:
          .col-md-auto.order-first.order-md-last(data-aos="fade-down")
            .fondo-color-primario.mb-4.mb-md-0.py-3.px-5.borde-8
              figure
                img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 66px;")
        
        .row.align-items-center.pb-5(data-aos="fade-down")
          .col-lg-3.mb-4.mb-lg-0.px-lg-0.px-md-5
            .fondo-color-sistema-l.py-3.px-5.borde-8.mx-lg-0.mx-md-5
              .text-white.fw-bold.text-center(style="font-size: 22px;border-bottom: 2px solid white;") $a + $b
              .text-white.fw-bold.text-center(style="font-size: 22px") 2
          .col-lg-9
            .fondo-color-sistema-k.p-4
              p.mb-0 Los autores, además, dicen que estos tienen 3 tipos de visibilidad: #[em Public] “Pública”, #[em Private] “Privada”, o #[em Protected] “Protegidas”, si no se especifica, se sobreentiende que es privada.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
