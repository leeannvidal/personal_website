---
title: "Mi Portafolio"
summary: "Científica del lenguaje que une la investigación sociolingüística y la IA: evaluación de modelos, curación de conjuntos de datos, diseño de anotaciones y automatización de flujos de trabajo."
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
        Evalúo modelos de IA, construyo y analizo conjuntos de datos lingüísticos y automatizo los flujos de trabajo que los rodean. Mi trabajo une la investigación sociolingüística y los sistemas de IA del mundo real, con un enfoque en la evaluación de modelos, el diseño de anotaciones y la calidad de los datos.
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
        - statistic: "LLM"
          description: Evaluación de modelos de vanguardia
          sub_metric: Pruebas basadas en hechos que exponen fallos
        # - statistic: "70k+"
        #   description: Tokens en conjuntos de datos lingüísticos
        #   sub_metric: Diseño, QA y análisis de extremo a extremo
        - statistic: "EN·ES"
          description: Bilingüe nativa
          sub_metric: Datos lingüísticos en inglés y español
        # - statistic: "10+"
        #   description: Marcos de anotación diseñados
        #   sub_metric: Para flujos de trabajo lingüísticos y de ML
        - statistic: "ML"
          description: Anotación y QA de datos de habla
          sub_metric: Emoción, participación, patrones del habla
        - statistic: "UX"
          description: Perspectivas para IA conversacional
          sub_metric: Investigación que cambió una decisión de producto
        # Tarjetas de reserva, para intercambiar cuando quieras:
        # - statistic: "~15 h/semana"
        #   description: Trabajo manual automatizado
        #   sub_metric: Flujos reutilizables en R y Praat
        # - statistic: "10+ años"
        #   description: Investigación lingüística
        #   sub_metric: Datos, anotación y análisis
    design:
      layout: cards
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: portfolio
    content:
      title: "Proyectos Destacados"
      subtitle: "Evaluación de IA, datos lingüísticos y automatización de flujos de trabajo"
      sort_by: Weight
      sort_ascending: true
      filters:
        folders:
          - tech_projects
      buttons:
        - name: Tecnología
          tag: Tech
        - name: Investigación
          tag: Research
        - name: Todos
          tag: '*'
      default_button_index: 0
      archive:
        enable: false  # the tech_projects listing page is not styled yet
    design:
      columns: 2
      fallback_icon: code-bracket
      spacing:
        padding: ["0", "0", "0", "0"]
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
            - Diseñé estudios en línea, codifiqué variables lingüísticas, extraje conjuntos de datos y realicé análisis estadístico de datos sociolingüísticos. <br><br>
            - Fui Facilitadora de un curso de posgrado de Métodos Cuantitativos en Lingüística en Boston University, que abarca desde las pruebas de hipótesis hasta la regresión de efectos mixtos; revisé los análisis en R del alumnado y di retroalimentación escrita detallada.
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
            - name: Claude Code
              icon: custom/claude_logo
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
        - Mi trabajo ha apoyado decisiones relacionadas con patrones del habla, pausas llenas, señales de participación y variación lingüística, ayudando a tender puentes entre la comunicación humana y los sistemas de aprendizaje automático. <br>
        <br>
        - En Cogito, usé mi investigación sobre las pausas llenas para mostrar por qué una función de guía en llamada (entrenar a los agentes para dejar de decir "eh" y "em") debilitaría la toma de turnos y la experiencia del cliente. La función se descartó.
    design:
      card:
        css_class: 'glassmorphism-secondary glass-ring glass-shadow text-gray-900'
        text_color: 'auto'
        overlay_opacity: 0.1
      spacing:
        padding: ["1rem", "1rem", "0", "1rem"]
  - block: markdown
    id: connect
    content:
      text: |
        <div class="not-prose text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Conectemos</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">¿Te interesa colaborar? Aquí encontrarás mi currículum, mi código y cómo contactarme.</p>
        <div class="flex flex-wrap justify-center gap-4"><a href="https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume_es.pdf" target="_blank" rel="noopener" aria-label="Ver Currículum" title="Ver Currículum" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"/></svg></a><a href="https://github.com/leeannvidal" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a><a href="http://www.linkedin.com/in/leeannvidalcovas" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg></a><a href="mailto:vidall@bu.edu" aria-label="Escríbeme" title="Escríbeme" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/></svg></a></div>
        </div>
    design:
      spacing:
        padding: ["5rem", "0", "4rem", "0"]
---
