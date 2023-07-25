<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Documentos y gestión documental
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Teniendo en cuenta que los documentos representan la prueba que soporta todas aquellas acciones ejecutadas en su labor, y son un medio informativo, el cual debe estar a disposición de quien lo requiera, las organizaciones diseñan constantemente sistemas para la correcta gestión documental, siendo esta el conjunto de actividades técnicas de planificación administrativa y de manejo adecuado de la documentación en cualquier compañía.

    separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Documentos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png')  

      .col-lg-8
        p.mb-3 De acuerdo a la Ley 594 del 2000, reconoce que los documentos son producidos por entidades desde su origen hasta su destino final, institucionalizan las decisiones administrativas y constituyen una herramienta indispensable para la gestión administrativa, económica, política y cultural del Estado y la administración de justicia; son testimonio de los hechos y de las obras; documentan las personas, los derechos y las instituciones.
        p.mb-5 Es así como podemos concluir que los documentos son toda aquella información creada y recibida de cualquier tipo, sea por una organización o por un individuo en el desarrollo de sus actividades con respecto a sus obligaciones legales, sin importar cuál sea su medio utilizado.
 
    p.mb-5 A continuación, conocerá varias clases de documentos usados:

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-3.svg", alt="alt")          
              .crd_02__txt
                h3 Documentos textuales
                p Son todos aquellos que se basan en el lenguaje escrito.  
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-4.svg", alt="alt")          
              .crd_02__txt
                h3 Documentos sonoros
                p Son aquellos que se almacenan en un soporte magnetofónico, o que registre y/o almacene sonido.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-5.svg", alt="alt")          
              .crd_02__txt
                h3 Documentos audiovisuales
                p Son todos aquellos que se basan en imágenes y sonidos, por lo general se almacenan en cintas.  

          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-6.svg", alt="alt")          
              .crd_02__txt
                h3 Documentos fotográficos
                p Se refieren a las fotografías tomadas o evidenciadas sin importar el tipo de técnica utilizada.

    p.mb-5 Los documentos tienen características tanto externas como internas. A continuación, se conocerán cada una de ellas:

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-7.svg')  
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2 t-pur2")
          .row(titulo="Externas")
              p.pp-l Son aquellas que se observan a simple vista sin necesidad de leer el texto, y se refiere a la distribución del contenido y esquema de presentación:
              ul.lista-ul--color.mb-3.pp-l
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Extensión
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Formato
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Elementos gráficos
          .row(titulo="Internas")
              p.pp-l Son aquellas características que se observan al leer un texto, tales como la objetividad y la subjetividad, estas son:
              ul.lista-ul--color.mb-3.pp-l
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Lenguaje denotativo
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Marcas discursivas
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Coherencia y contextualización
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Información necesaria
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Estructura

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Importancia de los documentos

    p.mb-3 Se puede resaltar que los documentos juegan un papel importante en las organizaciones, ya que estos son la base para la toma de decisiones, y brindan un acceso oportuno a la información.

    p.mb-3 ¿Por qué la documentación es importante?


    p.mb-5 Es vital la documentación para el control de la calidad y de los procesos, debido a que:

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-8.svg", alt="alt")          
              .crd_02__txt
                p Facilita un mejor manejo de la información.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-9.svg", alt="alt")          
              .crd_02__txt
                p Facilita el acceso y control de documentos.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-10.svg", alt="alt")          
              .crd_02__txt
                p Contribuye a una mejor producción documental.
          .col-lg-6
            .crd_02.mb-5
              .crd_02__icon.dan
                img.img-100(src="@/assets/curso/temas/tema2/img-11.svg", alt="alt")          
              .crd_02__txt
                p Permite proporcionar un servicio eficiente.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2.px-5
          p Los documentos con el pasar de los años nunca pierden validez, pues son un apoyo tangible para la humanidad, debido a que a lo largo del tiempo recogen datos donde reposa la historia, la evolución e información concreta que ha sucedido en el pasado o que está ocurriendo en el ahora. Dicho de otro modo, los documentos preservan intacta la información que es importante y relevante, permiten conocer la evidencia de crecimiento y desarrollo de una situación en el entorno, además son una constancia física y escrita de un acontecimiento importante en el pasado o en el presente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 Es así como un documento cuenta la historia de una empresa desde sus orígenes hasta su trayectoria actual siendo consecuente con los objetivos trazados desde su inicio.   
        .cajon.color-primario.p-4.fnd-1.px-5
          p Hoy en día las organizaciones están a la vanguardia de la tecnología, esta es la que le ha restado importancia al manejo de la información en ‘papel’, pues con el pasar de los días los procesos son más eficaces, y con ello la tradición de documentar toda información en grandes bancos de documentos físicos es reemplazada por documentación electrónica almacenada en la nube.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-12.svg')  

    p.mb-5 Así mismo, cuando se tiene la información guardada de forma virtual las ventajas que obtienen son grandes pues agilizan procesos referentes a la búsqueda de documentos específicos, ahorro en el espacio físico, accesibilidad a documentos en tiempo real para la persona que lo requiera, poseer un soporte que no se deteriore con el pasar de los años y contribuir a la preservación y restauración de documentos. Sin embargo, es importante tener en cuenta las buenas prácticas de digitalización de la documentación con el fin de no presentar pérdida de información y tener el acceso a los documentos de acuerdo a la finalidad de cada proceso, así la información no es divulgada o manipulada.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Sin importar que tipo de información se albergue o el medio usado para su almacenamiento, la documentación ha sido parte de la humanidad para recoger por escrito cualquier tipo de acto o hecho, sea jurídico, social, legal, cultural, entre otros. Al tener documentada la información se tiene constancia de lo acontecido, y en caso de alguna auditoría, indagación o desacuerdo este soporte se puede presentar como prueba o factor determinante en la toma de alguna decisión.

        .cajon.color-acento-contenido.p-4.fnd-2.px-5
          p Las organizaciones diariamente producen documentos, y la administración debe velar para que este proceso, desde su origen hasta su destino final, se haga de manera correcta, ya que estos documentos representan el activo más importante de la organización, por ello su custodia y conservación merecen una especial atención.

    p.mb-5 De acuerdo con lo anterior, se puede concluir que los documentos son importantes en las organizaciones porque aportan en su historia, organización, control, fuente de información y toma de decisiones. A continuación, se muestra cada uno de ellos: 

    figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-14.svg') 

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Clasificación de los documentos

    p.mb-3 Recordemos que los documentos son los escritos, impresos, planos, dibujos, cuadros, mensajes de datos, fotografías, cintas cinematográficas, discos, grabaciones magnetofónicas, videograbaciones, radiografías, talones, contraseñas, cupones, etiquetas, sellos, y en general, todo objeto que tenga carácter representativo o declarativo, así como las inscripciones en lápidas, monumentos, edificios o similares. 
    p.mb-5 Los documentos se clasifican en tres categorías, de acuerdo a su naturaleza, finalidad y funcionalidad. A continuación se dará una breve explicación de ellas:

    .row.justify-content-between.align-items-between.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-15.svg')  
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta t-pur2")
          .row(titulo="Su naturaleza")
              p.pp-l Se clasifica en:
              p.pp-l Documento público: es aquel que es otorgado o autorizado por la ley o por un registrador, notario, secretario judicial u otro funcionario.
              p.pp-l Documento privado: es redactado por las partes interesadas sin necesidad de la intervención de un funcionario que le dé autoridad.
          .row(titulo="Su finalidad")
              p.pp-l Se pueden clasificar en: 
              p.pp-l.mb-0 
                b Documentos dispositivos: 
                | son todas las normas de obligatorio cumplimiento entre las cuales se encuentran: leyes, decretos, ordenanzas, acuerdos y resoluciones.
              p.pp-l.mb-0 
                b Documentos informativos: 
                | aquellos documentos de la función administrativa de una empresa.
              p.pp-l.mb-0 
                b Documentos testimoniales: 
                | son usados como prueba o testimonio.

          .row(titulo="Su funcionalidad")
              p.pp-l Se pueden clasificar en: 
              p.pp-l.mb-0 
                b Documentos específicos: 
                | aquellos que soportan las funciones y objetivos de la empresa u organización.
              p.pp-l.mb-0 
                b Documentos comunes: 
                | su función es apoyar la gestión empresarial.


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipología documental

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.fnd-1.px-5
          p Ahora estudiemos el concepto de tipología documental, el cual se refiere a los diversos formatos y tipos de documentos que selecciona y desarrolla una entidad en particular aplicados en las tareas de producción o recepción de documentos, de esta forma crear una dinámica unificada de todos los servicios y fuentes de archivos.

    .row.justify-content-center.align-items-between.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-16.svg')  

      .col-lg-8
        p.mb-3 Esta tipología es central, depende de los caracteres internos y externos que surgen o se determinan en el momento de la creación del documento y teniendo en cuenta la necesidad de un proceso para su creación. En el expediente administrativo se crea y gestionan documentos con características prácticas definidas en su diseño, asimismo revelar y cumplir los requisitos para la realización del trámite. Se debe asignar al expediente un nombre que puede ser arbitrario y regulado por alguna normativa.

    p.mb-5 En general, se pueden encontrar varios tipos de documentos en diferentes unidades administrativas, y se clasifican de acuerdo con:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        TabsA.color-acento-contenido.mb-5
          .tarjeta.tarjeta--azul2.p-4(titulo="El contenido")
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos dispositivos o imperativos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Testimoniales o probatorios
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Informativos o noticiosos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos sustantivos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos facilitativos
   
          .tarjeta.tarjeta--azul2.p-4(titulo="La tradición <br> documental")
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Original
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Copia
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Borrador
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Minuta
   
          .tarjeta.tarjeta--azul2.p-4(titulo="El nivel de<br> accesibilidad")
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos publicados
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos de libre acceso
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos no clasificados con confidencialidad
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos confidenciales
     
          .tarjeta.tarjeta--azul2.p-4(titulo="La clase")
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos textuales
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos no textuales
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos iconográficos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos sonoros
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos audiovisuales
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos magnéticos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Documentos materiales
       
          .tarjeta.tarjeta--azul2.p-4(titulo="El ente o <br>autor")
            ul.lista-ul--color.mb-3
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Públicos
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Privados     
   

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-17.png')      


    separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Gestión documental


    .row.justify-content-center.align-items-between.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-18.png')  

      .col-lg-7
        p.mb-3 Llegamos así a la gestión documental, procedimiento mediante el cual una entidad resguarda, clasifica y ordena los documentos desde su origen hasta su disposición final, cumpliendo principios que garanticen la fidelidad y conservación de estos.
        p.mb-5 Cada entidad debe aplicar un sistema de gestión que le garantice realizar un monitoreo constante, evaluando condiciones de almacenamiento, responsables y técnicas adecuadas para su permanencia. 

    p.mb-5 De acuerdo con las pautas otorgadas por el Archivo Central, como ente rector de la política archivística, se aborda el proceso tendiente a lograr una clasificación adecuada de los documentos que faciliten su conservación. Para la adecuada organización de archivos se debe seguir un proceso en donde se establece el vínculo origen que tuvo el documento desde su creación hasta su disposición final, como se presenta a continuación.

    
    .tarjeta.fnd-4.p-4.mb-5
      SlyderA
        .row.my-5
          .col-md-6.mb-4.mb-md-0
            h3 Clasificación
            p Es la identificación de documentos con características similares, teniendo en cuenta la estructura organizacional de la entidad y los trámites adelantados en cada una de sus dependencias; como resultando se obtienen agrupaciones de acuerdo a cada campo de trabajo. 
            p Según Godoy, J. & López, M. (2001) en la #[i Cartilla de clasificación documental] del Archivo Central indican que como proceso archivístico, la clasificación permite la identificación y el agrupamiento sistemático de documentos semejantes con características comunes teniendo como base la estructura orgánico - funcional de las instituciones y los trámites administrativos que adelantan las dependencias en el ejercicio de sus funciones. La clasificación debe reflejar la estructura de cada entidad de tal manera que las agrupaciones documentales resultantes correspondan a las subdivisiones que conforman la institución. (p. 7). Dicha clasificación se detalla de la siguiente manera:
            figure
              img(src='@/assets/curso/temas/tema2/img-t.svg')  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-19.svg')
        .row.my-5
          .col-md-6.mb-4.mb-md-0
            h3 Ordenación
            p Son esquemas que muestran la jerarquización y clasificación documental de la organización se pueden hacer de manera numérica o alfanumérica, en donde cada dígito representará el nivel jerárquico que tendrá la organización. 
            p Ejemplo:
            ul.lista-ul--color.mb-3.pp-l
              li.mb-0 
                i.fas.fa-check
                p.mb-0 <b>Primer dígito:</b> alcaldía. 
              li.mb-0 
                i.fas.fa-check
                p.mb-0 <b>Segundo dígito:</b> secretarías. 
              li.mb-0 
                i.fas.fa-check
                p.mb-0 <b>Tercer dígito: </b>oficinas dependientes de las secretarías.

          .col-md-6
            figure
              img.img-330(src='@/assets/curso/temas/tema2/img-20.svg')
        .row.my-5
          .col-md-6.mb-4.mb-md-0
            h3 Procedimientos técnicos
            p De acuerdo con lo contemplado en la ISO 15489-2 se relacionan los siguientes: 
            ul.lista-ul--color.mb-3.pp-l
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Incorporación
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Registro
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Clasificación
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Asignación de acceso y seguridad
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Definición de la disposición
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Almacenamiento
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Uso y trazabilidad
              li.mb-0 
                i.fas.fa-check
                p.mb-0 Disposición
         
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-21.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2.px-5.mb-5
          p Para explicar mejor la clasificación documental, se tomará como ejemplo el caso de un municipio en donde el fondo documental hace referencia a todos los documentos originados o recibidos en la administración de este municipio, y tendría el nombre de Fondo Documental Municipal de la ciudad que corresponda.
        .cajon.color-primario.p-4.fnd-1.px-5.mb-5
          p Las secciones documentales están conformadas por el conjunto de documentos originados o recibidos en cada dependencia de esa administración, para este caso secretarías, y tendría el nombre de Sección Documental de la Secretaría de Gobierno, Agricultura, entre otros.

    p.mb-5 Las subsecciones estarán conformadas por los documentos producidos o recibidos en los grupos de trabajo de cada dependencia, para este caso de cada secretaría. 


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Elementos de protección personal

    p.mb-3 En la gestión documental es fundamental el proceso de conservación de documentos, así como el equipamiento y lugar de almacenaje de dicha información, además se debe garantizar la accesibilidad y protección del personal responsable de esta. 

    p.mb-5 Se deben identificar factores como tipo de documentos y de formato físico o digital, objetivos que suplen, y todos aquellos que indiquen las características que deben tener el equipamiento y lugar de almacenaje, así como la indumentaria para su manipulación.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-22.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Los elementos mínimos de protección personal al manipular la documentación son:
                ul.lista-ul--color.mb-3.pp-l
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Uso de overol o bata manga larga preferiblemente ajustable
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Uso de tapabocas desechable
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Gorros desechables
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Guantes desechables
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Guantes industriales
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Gafas protectoras
                  li.mb-0 
                    i.fas.fa-check
                    p.mb-0 Y todos aquellos elementos que garanticen la salud del funcionario encargado de ello

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
