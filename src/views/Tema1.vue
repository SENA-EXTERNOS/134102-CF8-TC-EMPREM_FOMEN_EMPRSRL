<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia y evolución de los archivos

    p Es necesario iniciar este componente conociendo de dónde proviene la palabra archivo, esta procede del latín <em>archivum,</em> aunque su origen más remoto se encuentra en la lengua griega y puede traducirse como ‘residencia de los magistrados’. El término se utiliza para nombrar al conjunto ordenado de documentos que una sociedad, una institución o una persona elabora en el marco de sus actividades y funciones. (Definición. De, 2011, <em>definición de archivo,</em> párr. 1)
    p.mb-5 Para conocer la importancia de la historia de los archivos en la sociedad se invita a ver el siguiente video:


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UkbOeuNM8YY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Historia institucional en el marco de la archivística

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.fnd-1.px-5
   
          p.mb-0 Es importante conocer, también, sobre el estudio de la historia institucional, este según Gómez, J. (s.f.), es el análisis histórico de las instituciones que integran la organización administrativa del estado, desde el origen jurídico que las fundamenta. Se ocupa de comprender a las instituciones políticas en su función administrativa, estructura, evolución histórica y en su proceso de acción o intervención en la sociedad (p.1).

    p.mb-5 En ella se resaltan los cambios que han tenido las instituciones a lo largo del tiempo determinando aspectos trascendentales y necesarios como lo es el alcance, este permite reconocer y construir una recopilación memorial desde sus orígenes legales, antecedentes y desarrollo de funciones, hasta el contenido en donde se detalla la transformación administrativa estructural resultante de la evolución de esta normativa o rediseño orgánico-funcional de la institución.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Siendo así, la historia institucional enmarca diversos preceptos que sirven de orientación tanto en instituciones públicas como privadas, determinando factores como el entorno, los recursos tecnológicos o financieros, los objetivos, la estructura administrativa, entre otros.

    p.mb-5 Tomemos como referente las instituciones públicas, estas son las mayores productoras de documentos y archivos; teniendo en cuenta el grado de operaciones desarrolladas a lo largo de su existencia y con base en sus actividades esenciales. Es así como los archivos garantizan que estas instituciones puedan brindar información oportuna a quien lo requiera y dar cumplimiento a la normativa vigente. 
    p.mb-5 Por consiguiente, es entendible que las instituciones deban apelar a su historia, puesto que esta proporciona la evolución resultante a través de los cambios normativos, buscando mantener los archivos en conformidad con la estructura orgánica y respetando el principio de procedencia y orden original. 
 
    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Naturaleza jurídica nacional e internacional 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img-2.svg')  

      .col-lg-6
        p.mb-3 Al construir la historia institucional se debe tener en cuenta el aspecto legal, revisando las alteraciones o cambios surgidos en la legislación a través de las diferentes estructuras políticas y económicas detallando lo que cada una de ellas le haya aportado.

        p.mb-5 En las normas archivísticas encontramos gran variedad, entre las más conocidas están las que se relacionan con las normas de gestión documental como las ISAD (G), ISAAR (CPF), ISDF, ISDIAH, DTDs, NEDA, NODAC, NOGADA, ARANOR, y las que dan orientación en descripción archivística como la ISO 15489, ISO 303000, entre otras.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2.px-5
   
          p Además de las normas, es importante conocer las leyes que tiene el estado colombiano para reglamentar lo concerniente a los archivos desde su creación hasta el acceso y uso de los mensajes de datos, del comercio electrónico y las firmas digitales, de esta forma garantizar el uso correcto y adecuado de los documentos.

    p.mb-5 La Figura 1 presenta la distribución gráfica de las normas de gestión documental y descripción archivística:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          p.mb-0
            em Normas de gestión documental y descripción archivística
        figure
          img(src='@/assets/curso/temas/tema1/img-3.png')  

    p.mb-5 A continuación, conocerá algunas de las normas de gestión documental y descripción archivística:

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-4.svg')  
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta t-pur2")
          .row(titulo="ISAAR (CPF)")
              p.pp-l Es una norma internacional y tiene como objetivo establecer encabezamientos autorizados para describir las entidades (instituciones, personas y familias) asociadas a la producción y a la gestión de los archivos. Esta norma fue aprobada en el año 2004 en el Congreso Internacional de Archivos (ICA), cuenta con 4 áreas que son: identificación, descripción, relaciones y control, además tiene 2 funciones puntuales: controlar la creación y empleo de los encabezamientos y describir una entidad, familia y/o persona proporcionando toda la información que disponga.

          .row(titulo="DTDS (EAD, EAC y EAG)")
              p.pp-l En estas se encuentran tres normas claves en el archivo de documentos y se basan principalmente en que todos los documentos de un mismo tipo posean una estructura común, de modo que se codifiquen usando el mismo conjunto de etiquetas o vocabulario. La primera es la norma de Descripción Archivística Codificada (EAD) usada para la codificación en formato electrónico de descripciones de documentos de archivo, la segunda es la Norma de Contexto Archivístico Codificado (EAC) que permite la codificación en formato XML de los registros de autoridad y la tercera es la Norma de Guía de Archivo Codificada (EAG) que es una herramienta para la redacción de guías de archivo en formato electrónico.

          .row(titulo="ISO (Organización Internacional de Normalización)")
              p.pp-l Nació tras la Segunda Guerra Mundial y es la encargada de promover el desarrollo de normas internacionales de fabricación, comercio y comunicación para todas las ramas industriales. Su función principal es buscar la estandarización de normas de productos y de seguridad para las empresas u organizaciones a nivel internacional.



    p.mb-5 Igual que las normas, es importante conocer algunas de las leyes reglamentarias del archivo.

    p.mb-5 Estas leyes son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        TabsC.color-acento-contenido.mb-5
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 80 de<br> 1989")
            p Por la cual se crea el Archivo General de la Nación y se dictan otras disposiciones.       
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 4 de<br> 1993")
            p Obligación de las entidades oficiales de entregar y recibir inventariados los documentos de los archivos.       
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 44 de<br> 1993")
            p Sobre derechos de autor, funcionarios públicos.       
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 527 de<br> 1999")
            p Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.       
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 594 de<br> 2000")
            p Por medio de la cual se dicta la Ley General de Archivos y se dictan otras disposiciones.       
          .tarjeta.tarjeta--azul2.p-4.mb-4(titulo="Ley 734 de<br> 2002")
            p Código Disciplinario Único.       

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-5.svg')  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.tarjeta--azul2.px-5
          p.mb-0 Recuerde que estas normas, en su naturaleza, definen y establecen el alcance y uso de los documentos, el método y la duración de la conservación; así como el flujo de documentos históricos que se transferirán a los archivos históricos y los estándares de calidad. Además, se deben cumplir los procesos estipulados, y no se puede tomar ninguna decisión sin consultar la normativa vigente.

    br
    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Estructura orgánico funcional de la empresa

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-7
        p.mb-3 Las instituciones emplean los organigramas como una herramienta visual que les ayuda de manera gráfica a delimitar y fijar jerarquías, funciones y responsabilidades. Estos a su vez permiten tener una mejor división del trabajo y un mayor control en la comunicación interna de los colaboradores. 
        p.mb-5 La normativa cambiante obliga a las entidades, en su mayoría estatales, a realizar modificaciones constantes en su estructura orgánica y funcional, mientras que en las entidades privadas dependen más de sus políticas internas. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-6.svg')  

    br
    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Normograma
    .row.justify-content-between.align-items-between.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-7.svg')  
      .col-lg-7
        p.mb-5 Las organizaciones deben dar balances de todas sus actuaciones, por lo tanto, es de su competencia revisar a qué normas obedece con el objetivo de dar cumplimiento, así mismo, estas deben ser socializadas con sus colaboradores. Es por ello que el uso de un ‘normograma’ facilita dicha tarea, ya que es una herramienta que permite a las entidades públicas y privadas delimitar las normas que regulan sus actuaciones en desarrollo con su objeto misional. (<em>Normograma y gestión documental,</em> Ministerio de justicia y derecho, 2015, p. 3). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img.px-lg-1(src="@/assets/curso/temas/tema1/img-8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normograma y Gestión documental
                  p.text-small Para conocer un ejemplo de normograma haga clic en Normograma y Gestión documental. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.minjusticia.gov.co/programas-co/SIG/Informes/Memoria%20-%20Normograma%20y%20documental.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 El normograma debe incluir la normativa tanto externa como interna (Ministerio de justicia y derecho, 2015).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.d-flex
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img-9.svg' alt='AvatarTop')
              .tarjeta.fnd-3
                .p-4
                  h2.text-center Normativa externa
                  p.mx-3 Se encuentran las leyes, decretos, acuerdos, circulares, resoluciones, que afectan la gestión de la entidad.     
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/img-10.svg' alt='AvatarTop')
              .tarjeta.fnd-3
                .p-4
                  h2.text-center Normativa interna
                  p.mx-3 Están los reglamentos, estatutos, manuales y, en general, los actos de interés para la entidad que permiten identificar las competencias, responsabilidades y funciones de las dependencias de la organización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2.px-5
          p.mb-0 Es importante tener presente que cada institución puede diseñar su formato, no existe uno genérico para las instituciones, sin embargo, en las organizaciones privadas este va de la mano con las políticas internas en las que debe definir, personalizar y aplicar lo que se considere, además este se debe ajustar a la organización, consultando los requisitos y directrices bajo su respectivo ordenamiento jurídico.




</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
