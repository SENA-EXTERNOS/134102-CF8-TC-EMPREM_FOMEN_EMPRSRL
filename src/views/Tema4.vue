<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Desarrollo de documentos organizacionales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Con el ánimo de orientar, a través de unas herramientas, el diseño de los diferentes documentos que se gestionan en una entidad, el Instituto Colombiano de Normas Técnicas y Certificación, ICONTEC, en el año 2009, diseñó la Guía Técnica Colombiana GTC 185, denominada “Documentación Organizacional”, la cual define los parámetros para el diseño de los diferentes documentos que se expiden en las organizaciones, iniciando con la formulación de algunos conceptos de las partes de cada documento, con el fin de identificar y afianzar la estructura, determinando el objeto y el alcance de cada uno.
  
      p.mb-5 El diseño de los documentos, de acuerdo con la guía, demarca una serie de recomendaciones técnicas, en relación a la impresión, diligenciamiento según las zonas o áreas del mismo, márgenes, estilos, fuente, elementos esenciales como datos y generalidades.
      p.mb-5 La GTC 185 definió los documentos más relevantes que se utilizan en una organización; en la guía se establece el alcance, estilos, fuente y las características que se deben tener en cuenta para su elaboración. A continuación, se presentan cada uno de estos documentos.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Comunicaciones
    p.mb-5 Se refiere a un documento de tipo organizacional, mediante el cual se establece interacción con entes externos e internos, a través de información. Es utilizado para hacer énfasis sobre un tema concreto y específico. Se puede elaborar de forma física o por medio electrónico, según la herramienta dispuesta para tal fin.
    p.mb-5 Los siguientes son los aspectos generales del documento comunicaciones:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-boton.mb-5.btn-s
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img-2.svg')
          .tarjeta.color-acento-botones.fnd-4.p-3(x="48.8%" y="12.6%" numero="+")
            h3 Fuente
            p Debe ser clara, agradable a la vista del lector; homogénea, con el fin de no presentar inconvenientes para su lectura, impresión, digitalización y microfilmación. <br> Los tamaños deben estar entre los 10 y 12 puntos, utilizados en los procesadores de texto.

          .tarjeta.color-acento-botones.fnd-4.p-3(x="48.8%" y="17.8%" numero="+")
            h3 Zona 1
            p Espacio para el membrete, el cual contiene: razón social, sigla o acrónimo, logotipo en caso de tenerlo, y el número de identificación tributaria (NIT).
          .tarjeta.color-acento-botones.fnd-4.p-3(x="74.5%" y="17.9%" numero="+")
            h3 Zona 3
            p Espacio superior derecho destinado al registro y radicación del documento.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="22.3%" y="23.5%" numero="+")
            h3 Márgenes
            p Superior entre 3 cm y 4 cm, inferior entre 2 cm y 3 cm, lateral izquierdo entre 3 cm y 4 cm, lateral derecho entre 2 cm y 3 cm.<br> Al imprimir por ambas caras de la hoja, se recomienda que los márgenes laterales sean simétricos a 3 cm.

          .tarjeta.color-acento-botones.fnd-4.p-3(x="45.7%" y="23.9%" numero="+")
            h3 Bloque extremo
            p Todas las líneas parten del margen izquierdo.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="59%" y="33.6%" numero="+")
            h3 Bloque
            p Las líneas de código, lugar de origen, fecha de elaboración, firma y cargo, se escriben partiendo del centro del escrito hacia el margen derecho.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="25.7%" y="57.1%" numero="+")
            h3 Semibloque
            p Conservando la distribución del estilo bloque, el primer renglón de cada párrafo tiene una sangría de 5 a 10 espacios.
          .tarjeta.color-acento-botones.fnd-4.p-3(x="44.4%" y="93.1%" numero="+")
            h3 Zona 2
            p Impresión de dirección, apartado, correo electrónico, sitio web, fax, teléfono, lugar de origen y país.

    p.mb-3 La documentación organizacional también contiene elementos esenciales que debemos conocer.
    p.mb-5 A continuación, se presentan cada uno de ellos:

    AcordionA(tipo="a" clase-tarjeta="tarjeta t-pur2 mb-5")
      .row(titulo="Identificación de páginas subsiguientes")
          p.pp-l El encabezado y el número de página correspondiente, permiten identificar el documento a partir de la segunda página; se deben ubicar en la parte superior izquierda, a cero o una interlínea libre de la zona 1, debidamente justificados y, para continuar con el texto, se dejan una o dos interlíneas libres.
      .row(titulo="Código")
          p.pp-l Ubicarlo a 3 o 4 cm del borde superior, dejando de cero a una interlínea libre cuando el papel tiene el logotipo o membrete, según el estilo.
      .row(titulo="Lugar de origen y fecha de elaboración")
          p.pp-l Datos a una o dos interlíneas libres del código y en forma completa en orden de: nombre del lugar de origen, día, mes (en minúscula) y año (sin separarlo con punto), según el estilo.
      .row(titulo="Datos del destinatario")
          p.pp-l A partir del lugar de origen y la fecha de elaboración, se recomienda dejar de dos a tres interlíneas libres, según la extensión de la comunicación; los datos pueden ocupar varias líneas, según el tipo de documento.
      .row(titulo="Denominación o título académico")
          p.pp-l Mayúscula sostenida; el nombre del destinatario en mayúscula y debe llevar los dos apellidos.
      .row(titulo="Cargo")
          p.pp-l Los nombres de cargos muy extensos se pueden distribuir en dos líneas, para guardar proporción visual con los otros datos; mayúscula sostenida.
      .row(titulo="Asunto")
          p.pp-l Con mayúscula sostenida seguida de dos puntos, sin negrilla y sin subrayar, a dos interlíneas libres, a partir del último dato del destinatario.
      .row(titulo="Cuerpo o texto")
          p.pp-l La redacción del cuerpo del documento debe ser de forma clara, breve, directa, sencilla y cortés.
      .row(titulo="Datos del remitente")
          p.pp-l Todo en mayúscula, no utilizar negrilla.
      .row(titulo="Líneas especiales")
          p.pp-l A dos interlíneas libres de los datos del remitente, en la misma fuente y con un tamaño de letra menor al utilizado en el texto; el bloque de anexos y copias se ubica a interlineado sencillo, sin abreviar y alineado. <br><br>El bloque correspondiente a redactor y transcriptor, se deja a una interlínea libre del anterior y también alineado.
      .row(titulo="Anexos")
          p.pp-l Se registra al final de la comunicación, a dos interlíneas libres del remitente.
          p.pp-l La palabra anexo, o anexos, según el caso, se escribe con mayúscula inicial, seguida de dos puntos (:). 
          p.pp-l A un espacio se enuncia la cantidad; entre paréntesis se relaciona el número de hojas, folios y el tipo de anexo, escritos de forma continua horizontalmente y separados por coma (,).
      .row(titulo="Copia")
          p.pp-l Mayúscula sostenida, sin abreviar y seguida de dos puntos (:), dos interlíneas libres del cargo del firmante o a interlineado sencillo de anexos, si los hay, contra el margen izquierdo; a un espacio se relacionan los destinatarios alineados así: tratamiento de cortesía o título, cargo y organización; al dirigirla a un funcionario de la misma entidad, se omite el nombre de la organización; no se debe abreviar.
      .row(titulo="Identificación ")
          p.pp-l Identificación del transcriptor, redactor y otros participantes en la elaboración de las comunicaciones: a dos interlíneas libres del remitente o a una interlínea libre de anexos y copias, nombres y apellidos y papel desempeñado por cada uno.
      .row(titulo="Cantidad de copias")
          p.pp-l De acuerdo a lineamientos y políticas establecidos en la organización.


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Cartas

    p.mb-3 Se refiere al documento escrito u oficio -en algunas organizaciones-, que se aplica para las relaciones entre las entidades y personas naturales o con los empleados; su utilización debe ser coherente con el acuerdo 060 del Archivo General de la Nación de 2001 y los lineamientos de elaboración y partes de la misma, las describe la GTC 185 en el numeral 5.4. 
    p.mb-5 Conozcamos los aspectos generales de la carta:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img-3.svg')

      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta t-pur2")
          .row(titulo="Características de redacción y presentación")
              ul.lista-ul--color.mb-3.pp-l
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 El objetivo es informar y persuadir a su destinatario.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Se debe tratar un solo tema por comunicación.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Redactar de forma clara, precisa, concreta y concisa.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Usar tratamiento respetuoso y cortés.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Redactar en primera persona del plural y usar el tratamiento de usted en singular o plural.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Emplear estilo gramatical natural, sencillo y continuo.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Utilizar los formatos normalizados en los manuales de cada organización.        
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Se debe distribuir el texto de acuerdo con su extensión.        
                    
          .row(titulo="Clases de cartas u oficios")
              ul.lista-ul--color.mb-3.pp-l
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Organizacionales: se producen en el desarrollo de las actividades de la organización.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Oficiales: se producen en las oficinas públicas y organizaciones del Estado.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Personales: se producen entre quienes se conocen; en ellas se permite utilizar un lenguaje informal.                                    
          .row(titulo="Utilización de las clases de cartas u oficios")
              ul.lista-ul--color.mb-3.pp-l
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Informar sobre un hecho, reportar necesidades o hacer solicitudes.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Regular o aclarar una situación.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Tramitar, desarrollar o agilizar un asunto.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Dar respuesta a una comunicación recibida.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Reiterar una información, un requerimiento o solicitud urgente.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Solicitar detalles sobre un asunto determinado.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Impugnar o corregir una situación.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Confirmar eventos ocurridos o pendientes.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Solicitar o remitir información, documentos u objetos.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Ofrecer agradecimientos, excus
                  as o condolencias.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Felicitar, invitar o convocar.
                li.mb-0 
                  i.fas.fa-check
                  p.mb-0 Hacer llamados de atención, entre otros.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Memorandos

    p.mb-5 Se refiere a un documento escrito, por el cual se trasmite información e imparten orientaciones y pautas entre las áreas, dependencias y niveles de coordinación jerárquica de la organización; su aplicación es de trámite inmediato. La siguiente imagen nos presenta un ejemplo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2 
          p.mb-0
            em Ejemplo de memorando
        figure
          img(src='@/assets/curso/temas/tema4/img-4.svg')  
          figcaption.mt-3 Nota. Tomado y adaptado de GTC 185 Documentación organizacional.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Circulares

    p.mb-5 Se refiere al documento dirigido a un grupo específico interno, con la finalidad de informar disposiciones, normas, lineamientos y políticas y, externamente, con el propósito dar a conocer reglas de negocios, nuevos productos o servicios, entre otros.

    .row.justify-content-center.align-items-between.mb-5
      .col-lg-4.col-md-3
        figure
          img(src='@/assets/curso/temas/tema4/img-5.svg')      
      .col-lg-8.col-md-9
        TabsA.color-acento-contenido.mb-5
          .tarjeta.tarjeta--azul2.p-4(titulo="Encabezado")
            p De cero a una interlínea libre de la zona 1 se escribe la palabra circular, en mayúscula sostenida y centrada, acompañada por el consecutivo que la identifica, si se requiere.    
          .tarjeta.tarjeta--azul2.p-4(titulo="Código")
            p Escribirlo a una o dos interlíneas libres del encabezado.    
          .tarjeta.tarjeta--azul2.p-4(titulo="Lugar y fecha")
            p Lugar de origen y fecha de elaboración. <br>Escribirlo a una o dos interlíneas libres del código.       
          .tarjeta.tarjeta--azul2.p-4(titulo="Encabezamiento <br>y destinatarios")
            p De dos a tres interlíneas libres de la fecha, se escribe la palabra para, en mayúscula sostenida, seguida del grupo destinatario de la circular y su ubicación, de acuerdo con el estilo utilizado.   
          .tarjeta.tarjeta--azul2.p-4(titulo="Asunto")
            p Se escribe a dos interlíneas libres de los datos del destinatario, contra el margen izquierdo.     
          .tarjeta.tarjeta--azul2.p-4(titulo="Texto")
            p Se inicia a las dos o tres interlíneas libres del asunto. Se escribe a interlineación sencilla y cada párrafo se separa del anterior, con una interlínea libre. En circulares de uno o dos párrafos, se puede dejar interlineación de uno y medio entre renglones y doble entre párrafos.     


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Actas

    p.mb-5 Se refiere al acto administrativo que se constituye en la constancia o memoria de las reuniones, cumple la finalidad de relacionar las actividades realizadas de acuerdo con la agenda planificada, registro de los asistentes y ausentes, además de la descripción de los compromisos generados, según el objeto de la misma. 
    p.mb-5 Lo invitamos a ver el siguiente video, para conocer los componentes del acta:
    figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/IIEdqAfuxu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    p.mb-5 La Guía Técnica Colombiana GTC 185, plantea las siguientes características de redacción y presentación, que se deben considerar en la elaboración de las actas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2
          ul.lista-ul--color.mb-3.pp-l
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Registrar el nombre del grupo que se reúne y si la reunión es de tipo ordinario o extraordinario.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Plasmar todo lo concerniente al desarrollo de la agenda de la reunión, evitando describir detalles intrascendentes.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 La redacción debe ser en tiempo pasado, excepto las de descargo, que deben redactarse en tiempo presente.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 No iniciar párrafos con gerundio, ni con lenguaje telegráfico; no debe tener errores técnicos, ortográficos, gramaticales, ni de puntuación. 
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Los párrafos deben ser concisos, claros y con énfasis en las decisiones tomadas.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Si existen divergencias o enmiendas sobre decisiones tomadas de algún participante, se deben registrar a petición del mismo.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 La presentación de originales y copias debe ser impecable, sin borrones ni repisados.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 En caso de existir votaciones acerca de una decisión, se debe indicar la cantidad de votos emitidos a favor, en contra, y en blanco.
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Para el caso de nombramientos, se registrarán los resultados y los nombres completos. 
            li.mb-0 
              i.fas.fa-check
              p.mb-0 Cuando sea necesario mencionar la intervención de uno de los asistentes, se hace con su nombre completo.

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Otros documentos 
    p.mb-5 Finalizamos explicando que existen otros tipos de documentos que complementan la gestión de las organizaciones, que, aplicados de manera adecuada, garantizarán la comunicación de las decisiones, con el fin que sean comprendidas y desarrolladas por cada una de las dependencias y áreas, fomentando las buenas prácticas en observancia a las políticas de la entidad y así asegurar el cumplimiento de los objetivos estratégicos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Otros documentos
                  p.text-small Para conocerlas, lo invitamos a leer el PDF  otros documentos.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('downloads/Otros_Documentos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download





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
