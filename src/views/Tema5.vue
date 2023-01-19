<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Redacción de documentos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.fnd-img.bl-izq 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Por otra parte, la elaboración de documentos organizacionales, exige del desarrollo de competencias, habilidades y destrezas de los diferentes funcionarios autorizados para tal fin, quienes no solo deben seguir protocolos y lineamientos establecidos, según la guía de gestión documental o de gestión integral que la entidad aplique, sino para redactar los diferentes documentos con la certeza de cumplir con los objetivos estratégicos, con la capacidad de informar y persuadir a través de una manera integral, con orden, claridad, precisión, objetividad y coherencia.
    p.mb-5 Para ello se deben tener presentes algunos elementos de la comunicación escrita, que sin lugar a dudas contribuirán a mejorar este aspecto importante en la ejecución de un proceso administrativo. 

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Tipología textual 

    p.mb-3 Son representaciones a las que apelan los emisores, con el fin de diseñar textos, según la intención de expresar, informar, comunicar, realizar solicitudes, o dejar constancia de alguna situación.

    p.mb-5 Los tipos de texto son:


    .row.justify-content-center.align-items-center
              .col-sm-6.col-xl-4.mb-4.mb-xl-5.hh1.img-239
                .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.svg')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Señala las características de un objeto, conlleva a un análisis y desglose de los elementos de un objeto, a partir de la observación, la realidad, la imaginación, y de los recursos.

              .col-sm-6.col-xl-4.mb-4.mb-xl-5.hh1.img-239
                .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-3.png')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Relata hechos en los que intervienen personajes y que se desarrollan en el espacio y en el tiempo; sobresalen los enfoques de situación inicial, compilación y desenlace.

              .col-sm-6.col-xl-4.mb-4.mb-xl-5.hh1.img-239
                .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-4.png')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Es el texto discursivo que incluye las particularidades de otros textos y las desglosa; se denota una posición y estrategias de convencimiento al lector. 

              .col-sm-6.col-xl-4.mb-4.mb-xl-5.hh1.img-239
                .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-5.png')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp La finalidad es comunicar información aunada a explicar y profundizar en los componentes de la información, con analogías y ejemplos.

              .col-sm-6.col-xl-4.mb-4.mb-xl-5.hh1.img-239
                .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.fnd-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-6.png')})`}")
                    .tarjeta-flip__contenido.p-4.p-xl-5.fnd-4
                      p.text-center.pp Comprende el diseño de reglamentos, normas, parámetros, lineamientos e indicaciones de funcionamiento, o para cumplir objetivos.
    br


    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Categorías gramaticales 

    p.mb-3 Continuemos con las categorías gramaticales, las cuales son los componentes esenciales para la redacción; son tipos de palabras que se caracterizan por condicionar el significado de una palabra.
    p.mb-5 Las categorías gramaticales son nueve, conozcamos cada una de ellas:

    SlyderF.mb-5.row(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-7.svg' alt='AvatarTop')
        h3.text-center.text-white Sustantivo
        p.text-center.px-4.text-white Palabra que se utiliza para nombrar personas, animales, plantas, cosas, ideas o sentimientos y, para designar realidades físicas y conceptos abstractos.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-8.svg' alt='AvatarTop')
        h3.text-center.text-white Pronombre
        p.text-center.px-4.text-white Reemplaza a otros términos que designan personas o cosas.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-9.svg' alt='AvatarTop')
        h3.text-center.text-white Adjetivo
        p.text-center.px-4.px-md-2.text-white Complementa el sentido del sustantivo, lo acompaña, le aporta cualidades y características que proporcionan información sobre sus estados o realidades, con distintas naturalezas.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-10.svg' alt='AvatarTop')
        h3.text-center.text-white Adverbio
        p.text-center.px-4.text-white Palabra que modifica o complementa a un verbo, a un adjetivo o a otro adverbio.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-11.svg' alt='AvatarTop')
        h3.text-center.text-white Verbo
        p.text-center.px-4.text-white Palabra o categoría gramatical que se puede modificar para darle sentido a una acción que realice un individuo, e indica el tiempo en el que tiene lugar la acción.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-12.svg' alt='AvatarTop')
        h3.text-center.text-white Preposición
        p.text-center.px-4.text-white Palabra que se utiliza para indicar la relación que tienen dos o más palabras entre sí.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-13.svg' alt='AvatarTop')
        h3.text-center.text-white Conjunción
        p.text-center.px-4.text-white Palabra que sirve para establecer uniones entre dos o más palabras y no conservan relación entre sí.
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-14.svg' alt='AvatarTop')
        h3.text-center.text-white Interjección
        p.text-center.px-4.text-white Es una palabra o una expresión que se pronuncia en tono exclamativo y expresa un estado de ánimo. Siempre va entre signos de admiración.
    br
    ul.lista-ul--color
      li 
        i.fas.fa-square
        | 
        h3.mb-0.text-black El párrafo      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-5 Otro punto importante para tratar es el párrafo, conjunto de oraciones de un texto dando coherencia al mismo; inicia con una mayúscula y termina con un punto y aparte; está dividido en idea principal, siendo el aparte donde se evidencia la introducción y el aspecto que se va a desarrollar; en la idea secundaria, matiza la idea principal con datos, ejemplos, contextos de tiempo, lugares para justificar la idea principal. 

      .col-lg-5        
        figure
          img(src='@/assets/curso/temas/tema5/img-15.svg')

    p.mb-5 En el párrafo, es importante tener presente:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.d-flex
          .col-lg-6.fnd-7.p-5    
            figure.mb-4
              img.img-241(src='@/assets/curso/temas/tema5/img-16.svg')
            h3.text-center Signos de puntuación
            p.mb-0.text-center Componentes que reproducen la entonación del lenguaje oral, con la única intención de comprender acertadamente el texto, conllevando a una interpretación clara por parte del lector.
          .col-lg-6.fnd-7-.p-5 
            figure.mb-4
              img.img-241(src='@/assets/curso/temas/tema5/img-17.svg')
            h3.text-center Conectores
            p.mb-0.text-center Cumplen la función de articular palabras, frases o enunciados, determinando relaciones semánticas de párrafos en un texto.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5        
        figure
          img(src='@/assets/curso/temas/tema5/img-18.svg')    
      .col-lg-7
        p Estos conectores se dividen en: 
        ul.lista-ul--color.mb-3.pp-l
          li.mb-0 
            i.fas.fa-check
            p.mb-0 
              b Orden cronológico:
              | lo más importante, después, por fin, primero, segundo, tercero, para empezar.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 
              b Grupo: agrupadores de ideas; 
              | de modo accesorio, sobre todo, de todos modos, de cualquier forma, cabe destacar, al mismo tiempo.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 
              b Grupo: opositores;  
              | aunque en otro sentido, no obstante, por otra parte, como contrapartida, sin embargo, a pesar de, a diferencia de.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 
              b Grupo: ejemplificante;  
              | por ejemplo, tal es el caso, así como, tal como, tal vez así, similarmente.
          li.mb-0 
            i.fas.fa-check
            p.mb-0 
              b Grupo: parafraseadores o explicadores;  
              | es decir, al principio, en otras palabras, de todos modos, en todo caso, lo que es lo mismo, de cualquier manera.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2
          p Asimismo, la función del párrafo es comunicativa, por cuanto la idea es expresar ideas, emociones, sentimientos, opiniones, respuestas, inquietudes; además, debe emplear un vocabulario correcto pero sencillo, sin tecnicismos con recursos estilísticos literarios, como la metonimia, la prosopopeya, la comparación, la metáfora, la antítesis, la hipérbole, la sinestesia y la paradoja, entre otros, y aquellos recursos relacionados con el sonido: hipérbaton, anáfora, onomatopeya, paralelismo y paranomasia, por mencionar algunos.

    p.mb-5 En cuando a los elementos para la construcción de párrafos, tenemos:     


    .row.justify-content-center.align-items-between.mb-5
   
      .col-lg-8
        TabsA.color-acento-contenido.mb-5
          .tarjeta.tarjeta--azul2.p-4(titulo="Claridad")
            ul.lista-ul--color.mb-3.pp-l
              li.mb-0 
                i.fas.fa-check
                p Existe entendimiento de lo allí planteado.
              li.mb-0 
                i.fas.fa-check
                p Manifestación de forma clara y jerarquizada de las ideas.
              li.mb-0 
                i.fas.fa-check
                p Fácil comprensión.                
          .tarjeta.tarjeta--azul2.p-4(titulo="Cohesión")
            ul.lista-ul--color.mb-3.pp-l
              li.mb-0 
                i.fas.fa-check
                p Relación o articulación entre las diferentes palabras.
              li.mb-0 
                i.fas.fa-check
                p Unidad conceptual del texto. 
          .tarjeta.tarjeta--azul2.p-4(titulo="Coherencia")
            ul.lista-ul--color.mb-3.pp-l
              li.mb-0 
                i.fas.fa-check
                p Relación del contenido con una cualidad semántica que origine una estructura ordenada y un sentido lógico.       
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema5/img-19.svg')   

    ul.lista-ul--color.mb-3
      li 
        i.fas.fa-square
        | 
        h3.text-black Ortografía - Redacción de textos 
    p.mb-5 Para facilitar la comprensión de la información dentro de los diferentes documentos, es preciso que los funcionarios encargados de realizar los diversos actos administrativos, apliquen los lineamientos que regulan la escritura, siendo relevante a la hora de transmitir el mensaje de forma clara, sin dar margen a una interpretación errada, confusiones y malos entendidos generando, por el contrario, una buena imagen de las partes interesadas, en cuanto a competencia, formación y toma de conciencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.fnd-1.px-5
          p Todo funcionario público o de una entidad privada, debe redactar currículums, comunicaciones, oficios, informes, actas e incluso correos electrónicos entre otros documentos; escribir puede ser una tarea compleja que requiere práctica; por lo tanto, se debe considerar: delimitar la temática, investigar sobre el tema, establecer subtemas, definir la extensión del texto, diseñar una radiografía textual, escribir, leer y corregir.

    p.mb-5 Para mejorar habilidades escritas, se sugiere tener en cuenta los siguientes principios fundamentales para la redacción de cualquier escrito informativo, documental, científico, oficial o particular:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img-20.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.trg.rbiz.fnd-4-
            .p-4
              p.text-center El documento debe ser escrito ordenadamente, con propiedad y corrección; esto es, sin errores sintácticos ni ortográficos. Para hacerlo, la lógica y la gramática son de utilidad.
      .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img-21.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.trg.fnd-4
            .p-4
              p.text-center Los términos utilizados serán de uso común para lograr el entendimiento. 
      .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img-22.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.trg.fnd-4-
            .p-4
              p.text-center El escrito debe contener los datos del destinatario y los que permitan identificar el mensaje con el propósito de facilitar la realimentación. 
      .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img-23.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.trg.rbder.fnd-4
            .p-4
              p.text-center El tema tratado deberá manejar la información necesaria para que exista integridad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10             
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
            .tarjeta-avatar
              img.img-135(src='@/assets/curso/temas/tema5/img-24.svg' alt='AvatarTop')
              .tarjeta.color-acento-botones.trg.rbiz.fnd-4-
                .p-4
                  p.text-center Deben evitarse los elementos obvios e innecesarios. 
          .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
            .tarjeta-avatar
              img.img-135(src='@/assets/curso/temas/tema5/img-25.svg' alt='AvatarTop')
              .tarjeta.trg.color-acento-botones.fnd-4
                .p-4
                  p.text-center Debe ser legible y con espacios suficientes.
          .col-md-6.col-lg.mb-5.mb-lg-0.m-0.p-0
            .tarjeta-avatar
              img.img-135(src='@/assets/curso/temas/tema5/img-26.svg' alt='AvatarTop')
              .tarjeta.trg.color-acento-botones.rbder.fnd-4-
                .p-4.px-5
                  p.text-centerp Un buen escrito debe cumplir con las tres C: claro, conciso y cortés. 

    p.mb-5 También se presentan algunas sugerencias para el caso de la redacción de correos electrónicos.


    SlyderF.mb-5.row(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-27.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Redactar el correo electrónico como una nota personal a los empleados.  
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-28.svg' alt='AvatarTop')
        p.text-center.px-4.text-white El receptor debe dirigirse en segunda persona.  
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-29.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Redactar los mensajes de forma concisa, agradable, clara y de conversación (se recomienda que no excedan de 300 palabras).  
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-30.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Dividir el texto en segmentos cortos y legibles. Dividir los relatos con subtítulos.  
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-31.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Leer el correo electrónico de otras personas es inmoral, por lo que debe evitarse.   
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-32.svg' alt='AvatarTop')
        p.text-center.px-4.text-white No abrir un correo electrónico que tenga un anexo y remitentes desconocidos, debido a que puede contener virus.   
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-33.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Responder en cuanto pueda y de manera cortés.   
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-34.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Nunca responder un mensaje de correo electrónico cuando esté enojado.   
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-35.svg' alt='AvatarTop')
        p.text-center.px-4.text-white No reenviar un correo electrónico sin autorización del remitente original.  
      .tarjeta.color-acento.p-4.fnd-6.tarjeta-avatar1
        .row.justify-content-center.mb-3
          .col-8
            img.img-150.img-t(src='@/assets/curso/temas/tema5/img-36.svg' alt='AvatarTop')
        p.text-center.px-4.text-white Usar palabras sencillas, oraciones concretas y verbos activos.   
    
    
    p.mb-3 En la elaboración de documentos organizacionales, se deberán observar las consecuencias potenciales de fallar.
    p.mb-5 Por cuanto todo funcionario y entidad, desde la alta dirección, debe prever contingencias ante errores, inexactitudes o falencias que se originen y si no se cumplen de forma adecuada los parámetros expuestos en el diseño y desarrollo de todos los actos administrativos ya descritos, se debe considerar lo siguiente:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .crd_02.crd_03.fnd-41-.rbt 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Evidenciar que los funcionarios de la organización no cuenten con la idoneidad, competencia, ni formación necesaria, para la elaboración de documentos.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no se tengan presentes la normatividad y los protocolos de imagen, estilo y control, en la realización de documentos.   
        .crd_02.crd_03.fnd-41- 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que los documentos organizacionales, no garanticen o transmitan la información requerida por la alta dirección, de forma clara, exacta y objetiva.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p No tener en cuenta las directrices establecidas en la Guía Técnica Colombiana GTC 185.  
        .crd_02.crd_03.fnd-41- 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no existan protocolos, guías, manuales, procesos, procedimientos e instructivos, que definan la gestión documental en la organización.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no se utilizan adecuadamente los formatos existentes según el objeto o la finalidad que se quiera transmitir.    
        .crd_02.crd_03.fnd-41- 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no se realice oportunamente actualización a los funcionarios del sistema de gestión documental.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p La disminución de la productividad.    
        .crd_02.crd_03.fnd-41- 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p No garantizar la validez procesal del documento.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p No soportar los procesos de la organización, con información confiable.    
        .crd_02.crd_03.fnd-41- 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no se contemplen las expectativas y necesidades de la organización, en la elaboración de documentos.  
        .crd_02.crd_03 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que no se cumpla con los tiempos definidos para el cumplimiento de las actividades administrativas.    
        .crd_02.crd_03.fnd-41-.rbb 
          .crd_02__icon.dan
            img.img-33(src="@/assets/curso/temas/tema5/img-37.svg", alt="alt")          
          .crd_02__txt
            p Que se afecte la seguridad de la información.  
       
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.fnd-img
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-38.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Cuando se redactan documentos, las normas APA se constituyen en un conjunto de lineamientos de presentación y de organización de información, con orientaciones estandarizadas de carácter general, diseñadas para presentar artículos o trabajos de investigación, metodológicos y académicos entre otros; estas pautas de la American Psychological Association, son catalogadas como un manual de autoridad, en cuanto a innovación de normas, regulación de conceptos, formato, fuentes y referencias, facilitando la comprensión en la interpretación de textos, mediante unos componentes de presentación normalizados, apelando a evitar redundancias, pleonasmos u otras expresiones incorrectas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normas APA versión 7
                  p.text-small Para conocerlas, lo invitamos a hacer clic en: Normas APA versión 7
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://normas-apa.org/wp-content/uploads/Guia-Normas-APA-7ma-edicion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.fnd-2
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.












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
