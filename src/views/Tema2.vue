<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Clases y objetos
    
    .fondo-personalizado-1.f1.bottom-1
      .fondo-personalizado-1__contenido
        .row.mb-4
          .col-lg-7(data-aos="fade-right")
            .fondo-color-sistema-j.py-5.px-4
              p.mb-0 Las clases son contenedores de información basados en atributos y en métodos de construcción, los cuales pueden modificar y consultar; son suficientes para representar objetos con los cuales se procesa información y se usan para hacer objetos que tienen un mismo comportamiento, estado e identidad.
          .col-lg-5.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 502px;")
        
        p.mb-0(data-aos="fade") #[b Ejemplo:]
        p.mb-4(data-aos="fade-left") Se tiene una clase “personas” (Mario, Margarita y Alejandro), donde el comportamiento de las personas es leer, trabajar, jugar, etc.; pueden estar en estado despierto o dormido; sus propiedades pueden ser color de ojos, género, estado civil, etc.
        p.mb-4 #[b Su sintaxis sería así:]

        .row.align-items-center
          .col-lg-3.mb-4
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  | class Persona {
                  br
                  | # Propiedades
                  br
                  | # Métodos
                  br
                  | }
          .col-lg-5.mb-4(data-aos="fade-left")
            .fondo-color-sistema-k.px-3.py-5.borde-8
              ul.lista-ul.lista-p-1.mb-0
                li
                  span.c-color-secundario(style="font-size: 25px;line-height: 0.7;") &bull;
                  span #[b Objeto:] el objeto es una instancia de una clase, la cual puede crear varias instancias de la misma clase.
                li.mb-0
                  span.c-color-secundario(style="font-size: 25px;line-height: 1;") &bull;
                  span #[b Ejemplo:] existe una sola clase “Persona”, pero muchos objetos de tipo persona pueden ser instancias de esta clase.
          .col-lg-4.mb-4(data-aos="fade")
            .fondo-color-sistema-i.borde-8.px-5.pt-3
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 249px;")
        
        p.mb-5(data-aos="fade") #[b A continuación, revise la diferencia entre clases y objetos con una analogía:]

        .row.justify-content-center.mb-5
          .col-lg-4.mb-4(data-aos="fade-up")
            .fondo-color-sistema-l.py-5.px-4.h-100
              figure.mb-5
                img.me-auto(src="@/assets/curso/temas/10.svg",style="max-width: 81px;")
              p.mb-4.text-white #[b Una clase]
              p.mb-0.text-white Es como el plano de un apartamento, define la forma del apartamento sobre el papel, con las relaciones entre las diferentes partes claramente definidas y planeadas, a pesar de que el apartamento no exista.
          .col-lg-4.mb-4(data-aos="fade-down")
            .fondo-color-acento-contenido.py-5.px-4.h-100
              figure.mb-5
                img.me-auto(src="@/assets/curso/temas/11.svg",style="max-width: 85px;")
              p.mb-4 #[b Un objeto]
              p.mb-0 Es el apartamento real construido de acuerdo a ese modelo; es decir, un objeto es una instancia de la clase.

    p.mb-0(data-aos="fade-left") #[b Ejemplo:]
    p.mb-4(data-aos="fade-left") En el siguiente ejemplo, se observará el código de un objeto.

    .row.justify-content-center.mb-5
      .col-lg-10
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
              | &nbsp;&nbsp;class Persona // Se define la clase Persona
              br
              | &nbsp;&nbsp;{
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;private $nombre; // Declaración del campo. Este debe ser de carácter privado.
              br
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;// Aquí adelante se utiliza un constructor, que es un método que lleva el nombre de la clase y que será el responsable de construir el objeto.
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;function Persona($nom)
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;{
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;nombre = $nom; // this hace referencia a la instancia actual, y se le asigna el valor al constructor-&gt;
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;}
              br
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;function setNombre($n) { // Métodos accesorios
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$this-&gt;nombre = $n;  // Métodos de escritura
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;}
              br
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;function getNombre() {  // Métodos de lectura
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return $this->nombre;
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;}
              br
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;public function Saluda($saludo) {  // Métodos se define como público, solo es un mensaje
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo $saludo."&lt;br&gt;";
              br
              | &nbsp;&nbsp;&nbsp;&nbsp;}
              br
              | &nbsp;&nbsp;}
              br
              br
              | &nbsp;&nbsp;$objPersona = new Persona("Mario Meneses"); // Se define el nombre del Objeto
              br
              | &nbsp;&nbsp;echo "&lt;p&gt;El objeto &lt;span style='color:red; font-weight:bold'&gt;objPersona&lt;/span&gt; se llama " .
              br
              | &nbsp;&nbsp;$objPersona-&gt;getNombre()."&lt;/p&gt;"; // se imprime el texto “el objeto se llama con estilos de color”
              br
              | &nbsp;&nbsp;$objPersona-&gt;Saluda("Hola, PHP!"); // se imprime el nombre escrito
              br
              | ?&gt;
    
    p.fw-bold.mb-0(data-aos="fade-right") Resultado
    p.mb-4(data-aos="fade-right") Si se ejecutara el código, daría este resultado.

    .row.justify-content-center(data-aos="zoom-in-out")
      .col-lg-6.col-md-9
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Resultado del ejemplo
        figure
          img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 610px;",alt='Resultado del código  de un navegador web mostrando una página con el título "Objetos en PHP." Debajo del título, se indica que el objeto objPersona se llama Mario Meneses. Además, hay un saludo que dice "Hola, Aprendiz SENA.')

</template>

<script>
export default {
  name: 'Tema2',
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
