---
title: "Rincón del Código"
summary: "Herramientas, recursos y mi trayectoria de aprendizaje en R, Praat y LaTeX."
date: 2026-04-20
type: landing
sections:
  - block: page-header
    content:
      title: "Rincón del Código"
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: cta-image-paragraph
    content:
      items:
        - title: Mi Trayectoria de Aprendizaje
          text: |
            Aprendí a programar resolviendo problemas reales: automatizando flujos de trabajo, analizando datos y construyendo herramientas para apoyar la investigación y la enseñanza. <br> <br>

            Con el tiempo, este enfoque me llevó a desarrollar pipelines de datos reproducibles, flujos de trabajo de anotación y scripts para el análisis lingüístico. Esta página destaca tanto las herramientas que utilizo como los flujos de trabajo que he construido a lo largo del camino. <br> <br>

            Si estás empezando a programar: *empieza con pequeños pasos, mantén la curiosidad y construye a medida que avanzas*.
          image: images/coding_plants.png
        - title: "Proyecto Destacado: Flujo de Trabajo Reproducible en R"
          text: |
            Mi trabajo de programación más completo proviene de mi disertación, donde desarrollé un flujo de trabajo completamente reproducible para limpiar, analizar y visualizar datos sociolingüísticos. <br> <br>

            El proyecto incluye scripts modulares, funciones personalizadas y pipelines automatizados que generan tablas y visualizaciones listas para publicación. Aunque el conjunto de datos es privado, el repositorio demuestra mi enfoque para el análisis de datos escalable y reproducible. <br> <br>

            Este trabajo refleja cómo diseño sistemas orientados a la eficiencia, la claridad y la reutilización en proyectos complejos.
          image: images/r_workflow_2.png
          button:
            text: 'Ver Repositorio en GitHub'
            url: 'https://github.com/leeannvidal/dissertation_data_analysis/tree/main'
    design:
      spacing:
        padding: ["0", 0, "0", "0"]
  - block: impact-cards
    content:
      title: "Áreas Técnicas"
      subtitle: "Herramientas y flujos de trabajo que utilizo en investigación y proyectos de datos"
      cards:
        - title: "R y Análisis de Datos"
          label: "Modelos estadísticos y automatización"
          description: "Usado para limpieza de datos, análisis estadístico y visualización. Construyo scripts modulares y flujos de trabajo reproducibles para grandes conjuntos de datos."
        - title: "Praat y Análisis del Habla"
          label: "Anotación y scripting"
          description: "Usado para análisis fonético y anotación del habla. Escribo scripts para automatizar el etiquetado, la extracción y el preprocesamiento para análisis posteriores."
        - title: "LaTeX y Documentación"
          label: "Informes reproducibles"
          description: "Usado para generar documentos estructurados, tablas e informes. Integrado con flujos de trabajo de R para salidas automatizadas."
        - title: "Diseño de Flujos de Trabajo"
          label: "Conectando herramientas y sistemas"
          description: "Conecto herramientas (R, Praat, LaTeX) en pipelines cohesivos que apoyan la investigación, la anotación y el análisis de datos."
    design:
      columns: 2
      spacing:
        padding: ["0", "0", "0", "0"]
      card_size: "medium"
      card:
        css_class: "glassmorphism-light glass-ring glass-shadow"
  - block: impact-cards
    content:
      title: "Scripts Útiles de Praat"
      subtitle: "Los scripts a continuación son herramientas para asistir en el análisis lingüístico con Praat. Los he anotado cuidadosamente para facilitar su uso y ayudarte a empezar de forma rápida y efectiva."
      cards:
        - title: Automatización de TextGrid
          label: 
          description: Scripts para añadir etiquetas, modificar niveles y gestionar anotaciones.
          buttons: 
            - text: Añadir Etiquetas desde CSV a TextGrid
              url: https://github.com/leeannvidal/leeannvidal.github.io/blob/main/code/Add_Labels_from_CSV_to_TextGrid.praat
              icon: custom/praat
            - text: Crear Nuevos Niveles en TextGrid
              url: https://github.com/leeannvidal/leeannvidal.github.io/blob/main/code/Create_New_Tiers_in_TextGrid.praat
              icon: custom/praat
        - title: Procesamiento de Etiquetas con Regex
          label: 
          description: Transformaciones basadas en patrones para limpiar y estandarizar anotaciones.
          buttons: 
            - text: Cambiar Etiquetas de Intervalos con Regex
              url: https://github.com/leeannvidal/leeannvidal.github.io/blob/main/code/Change_Interval_Labels_with_Regex.praat
              icon: custom/praat
        - title: Extracción de Datos
          label: 
          description: Script para exportar anotaciones en formatos estructurados para análisis en R.
          buttons: 
            - text: Extraer Anotaciones a CSV
              url: https://github.com/leeannvidal/leeannvidal.github.io/blob/main/code/Extract_Annotations_to_CSV.praat
              icon: custom/praat
    design:
      columns: 3
      spacing:
        padding: ["0", "0", "0", "0"]
      card_size: "medium"
      card:
        css_class: "glassmorphism-light glass-ring glass-shadow"
---
