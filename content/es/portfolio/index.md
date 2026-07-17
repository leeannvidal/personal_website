---
title: "Mi Portafolio"
summary: "Lingüista con experiencia en investigación sociolingüística, curación de conjuntos de datos y ciencia de datos aplicada."
date: 2026-04-21
type: landing
sections:
  - block: page-header
    content:
      title: Portafolio
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: cta-card
    content:
      text: |
        Creo y analizo conjuntos de datos lingüísticos para aplicaciones de investigación y aprendizaje automático. Mi trabajo se enfoca en el diseño de anotaciones, la calidad de los datos y la conexión entre la investigación sociolingüística y los sistemas de IA del mundo real.
    design:
      card:
        css_class: 'glassmorphism-secondary glass-ring glass-shadow'
        text_color: 'auto'
        overlay_opacity: 0.1
      spacing:
        padding: ["1rem", "1rem", "0", "1rem"]
  - block: stats
    content:
      title:
      items:
        - statistic: "70k+"
          description: Tokens en conjuntos de datos lingüísticos
          sub_metric: Diseño, QA y análisis de extremo a extremo
        - statistic: "10+"
          description: Marcos de anotación diseñados
          sub_metric: Para flujos de trabajo lingüísticos y de ML
        - statistic: "ML"
          description: Anotación y QA de datos de habla
          sub_metric: Emoción, participación, patrones del habla
        - statistic: "UX"
          description: Perspectivas para IA conversacional
          sub_metric: Influyendo en el diseño de modelos y anotaciones
    design:
      layout: cards
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: portfolio
    content:
      title: "Proyectos Destacados"
      subtitle: "Datos lingüísticos, diseño de anotaciones y flujos de trabajo de aprendizaje automático"
      count: 2
      filters:
        folders:
          - tech_projects
      buttons:
        - name: Todos
          tag: '*'
      default_button_index: 0
    design:
      columns: 2
      fallback_icon: code-bracket
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: impact-cards
    content:
      title: "Métodos de Investigación"
      cards:
        - title: Investigación Cualitativa
          label: 
          description: |
            - Diseñé y realicé trabajo de campo lingüístico con hablantes de español puertorriqueño en Puerto Rico y Louisiana. <br><br>
            - Desarrollé protocolos de entrevista para investigación exploratoria y prueba de hipótesis.
        - title: Análisis Cuantitativo
          label: 
          description: |
            - Diseñé estudios en línea, codifiqué variables lingüísticas, extraje conjuntos de datos y realicé análisis estadístico de datos sociolingüísticos.
        - title: Diseño Experimental
          label: 
          description: |
            - Construí y ejecuté estudios en línea con Qualtrics y Prolific, incluyendo un estudio sobre el orden de palabras en español publicado en actas de conferencias.
          buttons: 
            - text: Materiales del Estudio de Orden de Palabras
              url: https://leeannvidal.github.io/documents/Portfolio/Vidal-Covas_Quantitative_Research_Spanish_Word_Order.pdf
            - text: Publicación sobre Orden de Palabras
              url: /es/publications/2023_vidal-covas_conference-paper
    design:
      columns: 3
      spacing:
        padding: ["0", "0", "0", "0"]
      card_size: "medium"
      card:
        css_class: "cta-glassmorphism"
        text_color: 'dark'
  - block: features
    id: ml-workflows
    content:
      title: "ML Aplicado y Flujos de Trabajo de Datos"
      subtitle: "Flujos de trabajo de anotación, QA y datos lingüísticos para sistemas de aprendizaje automático"
      items:
        - name: "Optimización de Flujos de Trabajo"
          description: "Mejoré los flujos de trabajo de anotación y QA para aumentar la consistencia, eficiencia y calidad de los datos en los proyectos."
        - name: "Diseño de Anotaciones"
          description: "Diseñé esquemas de anotación y directrices para variables lingüísticas y flujos de trabajo de datos de ML."
        - name: "QA de Conjuntos de Datos"
          description: "Validé conjuntos de datos anotados para consistencia, precisión y utilidad en contextos de investigación y ML."
        - name: "Anotación de Habla y Lenguaje"
          description: "Anoté audio para participación emocional, ritmo del habla, nivel de energía y experiencia de cliente/agente."
        - name: "Ingeniería de Prompts"
          description: "Probé y refiné prompts para modelos de IA con el fin de mejorar la precisión de las tareas y los resultados de anotación."
        - name: "Prueba de Modelos"
          description: "Probé modelos de lenguaje preentrenados y proporcioné sugerencias de calibración basadas en perspectivas lingüísticas y de anotación."
    design:
        spacing:
          padding: ["0", "0", "0", "0"]
  - block: tech-stack
    id: technical-toolkit
    content:
      title: "Herramientas Técnicas"
      categories:
        - name: "Datos y Análisis"
          items:
            - name: R
              icon: devicon/rstudio
              level: advanced
            - name: Python
              icon: brands/python
              level: beginner
            - name: Regex
              icon: code-bracket
            - name: Excel / Google Sheets
              level: advanced
              icon: table-cells
        - name: "Investigación y Experimentación"
          items:
            - name: Qualtrics
              icon: custom/xm
            - name: Prolific
              icon: custom/prolific
        - name: "Flujos de Trabajo y Control de Versiones"
          items:
            - name: Git
              icon: custom/git
            - name: GitHub
              icon: brands/github
            - name: Bash / Terminal
              icon: brands/gnubash
            - name: VS Code
              icon: custom/vscode_logo
        - name: "Web y Documentación"
          items:
            - name: HTML
              icon: code-bracket
            - name: Markdown
              icon: document-text
            - name: HugoBlox
              icon: squares-2x2
        - name: "Herramientas Lingüísticas y de Investigación"
          items:
            - name: Praat
              icon: custom/praatlogo
            - name: ELAN
              icon: custom/ELANlogo
            - name: LaTeX
              icon: devicon/latex
    design:
      style: grid
      show_levels: false
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: cta-card
    content:
      title: "Impacto en UX e Industria"
      text: |
        - Traduzco la investigación lingüística en perspectivas prácticas para IA conversacional, estrategia de anotación y diseño de modelos. <br>
        <br>
        - Mi trabajo ha apoyado decisiones relacionadas con patrones del habla, pausas llenas, señales de participación y variación lingüística, ayudando a tender puentes entre la comunicación humana y los sistemas de aprendizaje automático.
    design:
      card:
        css_class: 'glassmorphism-secondary glass-ring glass-shadow text-gray-900'
        text_color: 'auto'
        overlay_opacity: 0.1
      spacing:
        padding: ["1rem", "1rem", "0", "1rem"]
---
