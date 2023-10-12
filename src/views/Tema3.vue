<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Archivos de gestión e instrumentos archivísticos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Los instrumentos archivísticos de acuerdo al Archivo General de la Nación en el decreto 1080 de 2015, son herramientas de gestión documental que permiten a la entidad el manejo óptimo de su acervo documental de acuerdo con los lineamientos establecidos. (Capítulo V).

    p.mb-5 Existen dos principios básicos de archivo: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center

              .col-sm-10.col-xl-6.mb-4.mb-xl-0.hh1.img-384
                .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-2.svg')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Dando lugar a un diseño integrado de gestión de documentos sin comprometer la configuración de la red, los archivos servirán como residencias sucesivas para los documentos según su antigüedad.

              .col-sm-10.col-xl-6.mb-4.mb-xl-0.hh1.img-384
                .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-3.svg')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Determina la clasificación, organización, descripción y distribución, permitiendo identificarlos con anticipación y facilitando su evaluación.
    br

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 Las razones más comunes que pueden desperdiciar este principio inicial son:
        ul.lista-ul--color.mb-3.pp-l
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Ignorancia o desconocimiento de las partes (los empleados de cada oficina).
          li.mb-0 
            i.fas.fa-check
            p.mb-0 No tener instrucciones para usar procedimientos.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Desconocimiento del manejo físico de los documentos porque el propio trámite o la administración dictan el arreglo correspondiente.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Deshabilite de las acciones, no permitir el seguimiento rápido de registros y el no especifique si una acción está en curso o en qué etapa se encuentra.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Los métodos incorrectos para ubicar documentos que dieron como resultado secuencias que no reflejan las operaciones existentes.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Agrupación por tipo de documento: pedido, certificado, correo recibido, correo enviado, factura, certificado.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 El proceso de producción y distribución de documentos incorrectos como documentos duplicados o mala gestión en el envío de copias.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 Desenfoque de la diferencia entre antecedentes y documentos de respaldo.        
      .col-lg-4 
        figure
          img(src='@/assets/curso/temas/tema3/img-4.svg')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.fnd-1.px-5
          p.mb-0 Por ello, el mejor método organizativo que se puede aplicar en el archivo es recrear y respetar el orden original en el que los documentos estuvieron o debieron estar en manos de sus creadores. Después de completar los pasos de identificación se pueden clasificar los documentos.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Elementos del archivo

    p.mb-3 Tenga presente que al desarrollar la creación del archivo, es necesario registrar los datos necesarios para que el sistema pueda determinar la ubicación del archivo y controlar sus registros lógicos.
    p.mb-5 Y las partes que lo conforman son:        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-5.svg')


          .tarjeta.color-acento-botones.fnd-4.p-3(x="95.5%" y="10.9%" numero="+")
            h3 Archivadores de anillas:
            p Permiten guardar documentos de forma vertical protegiéndolos y dándoles una clasificación, pueden ser de material plástico o cartón.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="76.8%" y="30.3%" numero="+")
            h3 Carpetas: 
            p Son usadas para guardar los documentos y pueden ser de tamaño carta u oficio.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="53.8%" y="71.7%" numero="+")
            h3 Subcarpetas: 
            p Se utilizan dentro de las carpetas de archivo separando los documentos, son de cartulina y tienen un color diferente para una mejor organización.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="87.1%" y="93.5%" numero="+")
            h3 Carpetas colgantes:
            p Son puestas dentro de los muebles archivadores con guías dentro.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="82%" y="69%" numero="+")
            h3 Guías para archivo:
            p Son tarjetas indicadoras hechas de cartón puestas en la parte superior de la carpeta, evidenciando el título o nombre del asunto del documento o el número.




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
