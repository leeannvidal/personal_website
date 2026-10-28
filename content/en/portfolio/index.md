---
title: "My Portfolio"
summary: "Language Scientist bridging sociolinguistic research and AI: model evaluation, dataset curation, annotation design, and workflow automation."
date: 2026-04-21
type: landing
sections:
  - block: page-header
    content:
      title: Portfolio
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  # - block: dev-hero
  #   content:
  #     username: me
  #     # tagline: hey
  #     # bio_override: |
  #     #   I create and analyze linguistic datasets for research and machine learning applications. My work focuses on annotation design, data quality, and bridging sociolinguistic research with real-world AI systems.
  #     greeting: "Hello, welcome to my portfolio page. I'm"
  #     cta_buttons:
  #       - text: View Resume
  #         url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume.pdf"
  #   design:
  #     style: split
  #     avatar_shape: rounded
  #     spacing:
  #       padding: ["0", "0", "0", "0"]
  #     css_class: "no-hero-gap"
  # - block: hero
  #   content:
  #     title: "Hello, I'm [Your Name]"
  #     text: |
  #       Linguist (PhD, Boston University) with expertise in sociolinguistic research, dataset curation, and applied data science. My portfolio highlights experience creating and curating linguistic datasets, designing annotation schemes, and supporting machine learning workflows. 
        
  #       I specialize in bridging research and application—translating complex language data into insights and tools that advance both academic projects and industry technologies.
  #     primary_action:
  #       text: "Contact Me"
  #       url: "#contact"
  #   design: 
  #     spacing:
  #         padding: "0"
  #     css_class: "no-hero-gap" 
  - block: cta-card
    content:
      # title: ""
      text: |
        I evaluate AI models, build and analyze linguistic datasets, and automate the workflows around them. My work bridges sociolinguistic research and real-world AI systems, with a focus on model evaluation, annotation design, and data quality.
    design:
      card:
        # css_class: 'cta-glassmorphism'
        css_class: 'glassmorphism-secondary glass-ring glass-shadow'
        text_color: 'auto' # Will detect primary-500 as medium and use adaptive colors
        overlay_opacity: 0.1
      spacing:
        padding: ["1rem", "1rem", "0", "1rem"]
  # - block: features
  #   content:
  #     # title: "My Expertise"
  #     text: | 
  #       I create and analyze linguistic datasets for research and machine learning applications. My work focuses on annotation design, data quality, and bridging sociolinguistic research with real-world AI systems.
  #     items:
  #       - name: "Sociolinguistic Research"
  #         description: "Designing and conducting fieldwork, analysis of language variation and change."
  #         icon: "hero/chat-bubble-left-right"
  #       - name: "Dataset Curation"
  #         description: "Managing collection, QA, and annotation of linguistic datasets."
  #         icon: "hero/document-text"
  #       - name: "Applied Data Science"
  #         description: "Translating complex language data into insights and technological solutions."
  #         icon: "hero/wrench-screwdriver"
  #   design:
  #     spacing:
  #       padding: ["0", "0", "0", "0"]
  - block: stats
    content:
      title:
      items:
        - statistic: "LLM"
          description: Frontier model evaluation
          sub_metric: Fact-grounded tests that expose failure modes
        # - statistic: "70k+"
        #   description: Tokens in linguistic datasets # built
        #   sub_metric: End-to-end design, QA, and analysis
          # icon: 
          
        - statistic: "EN·ES"
          description: Native bilingual
          sub_metric: English & Spanish language data
        # - statistic: "10+"
        #   description: Annotation frameworks designed
        #   sub_metric: For linguistic & ML workflows
          # icon: hero/user-group
          
        - statistic: "ML"
          description: Speech data annotation & QA
          sub_metric: Emotion, engagement, speech patterns
          # icon: hero/currency-dollar
          
        - statistic: "UX"
          description: Insights for conversational AI
          sub_metric: Research that changed a product decision
          # icon: hero/currency-dollar
        # Spare tiles, swap in when wanted:
        # - statistic: "~15 hrs/week"
        #   description: Manual work automated
        #   sub_metric: Reusable R & Praat workflows
        # - statistic: "10+ yrs"
        #   description: Linguistics research
        #   sub_metric: Data, annotation & analysis
    design:
      layout: cards # options are: cards | compact | minimal
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: portfolio
    content:
      title: "Featured Projects"
      subtitle: "AI evaluation, language data, and workflow automation"
      sort_by: Weight
      sort_ascending: true
      filters:
        folders:
          - tech_projects  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: Tech
          tag: Tech
        - name: Research
          tag: Research
        - name: All
          tag: '*'
      default_button_index: 0
      archive:
        enable: false  # the tech_projects listing page is not styled yet
    design:
      columns: 2
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: features
    id: ml-workflows
    content:
      title: "Applied ML & Data Workflows"
      subtitle: "Annotation, QA, and language data workflows for machine learning systems"
      items:
        - name: "Workflow Optimization"
          # icon: arrows-right-left
          description: "Improved annotation and QA workflows to increase consistency, efficiency, and data quality across projects."

        # - name: "Data Processing"
        #   # icon: circle-stack
        #   description: "Processed and structured text and speech data for annotation and machine learning workflows, including scripting and data preparation."

        - name: "Annotation Design"
          # icon: pencil-square
          description: "Designed annotation schemes and guidelines for linguistic variables and machine learning data workflows."

        - name: "Dataset QA"
          # icon: shield-check
          description: "Validated annotated datasets for consistency, accuracy, and usability across research and ML contexts."

        - name: "Speech & Language Annotation"
          # icon: microphone
          description: "Annotated audio for emotional engagement, rate of speech, energy level, and customer/agent experience."

        - name: "Prompt Engineering"
          # icon: sparkles
          description: "Tested and refined prompts for AI models to improve task accuracy and annotation outcomes."

        - name: "Model Testing"
          # icon: cpu-chip
          description: "Tested pre-trained language models and provided calibration suggestions based on linguistic and annotation insights."
    design:
        spacing:
          padding: ["0", "0", "0", "0"]
  # - block: features
  #   id: methods
  #   content:
  #     title: "Research Methods"
  #     # text: "Methods I use to design, collect, analyze, and interpret data"
  #     items:
  #       - name: "Qualitative Research"
  #         description: |
  #           - Designed and conducted linguistic fieldwork with Puerto Rican Spanish speakers in Puerto Rico and Louisiana. <br>
  #           - Developed interview protocols for exploratory research and hypothesis testing.
  #       - name: "Quantitative Analysis"
  #         description: |
  #           - Designed online studies, coded linguistic variables, extracted datasets, and conducted statistical analysis of sociolinguistic data.
  #       - name: "Experimental Design"
  #         description: |
  #           - Built and ran online studies using Qualtrics and Prolific, including a Spanish word order study published in conference proceedings.
  #   design:
  #       # background:
  #       #   color: "secondary-500"
  #       spacing:
  #         padding: ["0", "0", "0", "0"]
  - block: impact-cards
    content:
      title: "Research Methods"
      # subtitle: 
      cards:
        - title: Qualitative Research
          label: 
          description: |
            - Designed and conducted linguistic fieldwork with Puerto Rican Spanish speakers in Puerto Rico and Louisiana. <br><br>
            - Developed interview protocols for exploratory research and hypothesis testing.
        - title: Quantitative Analysis
          label: 
          description: |
            - Designed online studies, coded linguistic variables, extracted datasets, and conducted statistical analysis of sociolinguistic data. <br><br>
            - Served as Course Facilitator for a graduate Quantitative Methods in Linguistics course at Boston University, covering hypothesis testing through mixed-effects regression; reviewed students' R analyses and gave detailed written feedback.
          # buttons: 
          #   - text: Change Interval Labels with Regex
          #     url: https://github.com/leeannvidal/leeannvidal.github.io/blob/main/code/Change_Interval_Labels_with_Regex.praat
          #     icon: custom/praat
        - title: Experimental Design
          label: 
          description: |
            - Built and ran online studies using Qualtrics and Prolific, including a Spanish word order study published in conference proceedings.
          buttons: 
            - text: Word Order Replication Materials
              url: https://leeannvidal.github.io/documents/Portfolio/Vidal-Covas_Quantitative_Research_Spanish_Word_Order.pdf
            - text: Word Order Publication
              url: /publications/2023_vidal-covas_conference-paper
    design:
      columns: 3
      spacing:
        padding: ["0", "0", "0", "0"]
      card_size: "medium"
      card:
        # css_class: "glassmorphism-light glass-ring glass-shadow"
        css_class: "cta-glassmorphism"
        text_color: 'dark'
  # - block: stats
  #   content:
  #     title: "Research Methods"
  #     items:
  #       - statistic: "Qualitative Research"
  #         description:  |
  #           - Designed and conducted linguistic fieldwork with Puerto Rican Spanish speakers in Puerto Rico and Louisiana. <br>
  #           - Developed interview protocols for exploratory research and hypothesis testing.
  #       - statistic: "Quantitative Analysis"
  #         description: |
  #           - Designed online studies, coded linguistic variables, extracted datasets, and conducted statistical analysis of sociolinguistic data.
          
  #       - statistic: "Experimental Design"
  #         description: |
  #           - Built and ran online studies using Qualtrics and Prolific, including a Spanish word order study published in conference proceedings. 
  #   design:
  #     layout: compact # options are: cards | compact | minimal
  #     # css_class: 'glassmorphism-secondary noise-texture text-white'
  #     spacing:
  #       padding: ["0", "0", "0", "0"]
  - block: tech-stack
    id: technical-toolkit
    content:
      title: "Technical Toolkit"
      categories:

        - name: "Data & Analysis"
          items:
            - name: R
              # icon: brands/r
              icon: devicon/rstudio
              level: advanced
            - name: Python
              icon: brands/python
              level: beginner
            - name: Regex
              # level: 
              icon: code-bracket
            - name: Excel / Google Sheets
              level: advanced
              icon: table-cells
              # icon: brands/googlesheets
        - name: "Research & Experimentation"
          items:
            - name: Qualtrics
              # icon: brands/qualtrics
              icon: custom/xm #chart-bar
            - name: Prolific
              icon: custom/prolific #user-group

        - name: "Workflow & Version Control"
          items:
            - name: Git
              icon: custom/git
            - name: GitHub
              icon: brands/github
            - name: Bash / Terminal
              icon: brands/gnubash
            - name: VS Code
              icon: custom/vscode_logo
              # icon: devicon/bash
            - name: Claude Code
              icon: custom/claude_logo

        - name: "Web & Documentation"
          items:
            - name: HTML
              icon: code-bracket
              # icon: devicon/htmx
            - name: Markdown
              icon: document-text
            - name: HugoBlox
              icon: squares-2x2
            # - name: Tailwind CSS
            #   icon: devicon/tailwindcss
        - name: "Linguistic & Research Tools"
          items:
            - name: Praat
              icon: custom/praatlogo
            - name: ELAN
              icon: custom/ELANlogo
            - name: LaTeX
              icon: devicon/latex
    design:
      style: grid # other option: list
      show_levels: false
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: cta-card
    content:
      title: "UX & Industry Impact"
      text: |
        - I translate linguistic research into practical insights for conversational AI, annotation strategy, and model design. <br>
        <br>
        - My work has supported decisions around speech patterns, pause-fillers, engagement cues, and language variation, helping bridge the gap between human communication and machine learning systems. <br>
        <br>
        - At Cogito, I used my research on filled pauses to show why a proposed in-call coaching feature (training agents to stop saying "uh" and "um") would undercut turn-taking and customer experience. The feature was dropped.
    design:
      card:
        # css_class: 'cta-glassmorphism'
        css_class: 'glassmorphism-secondary glass-ring glass-shadow text-gray-900'
        text_color: 'auto' # Will detect primary-500 as medium and use adaptive colors
        overlay_opacity: 0.1
      spacing:
        padding: ["1rem", "1rem", "0", "1rem"]
  - block: markdown
    id: connect
    content:
      text: |
        <div class="not-prose text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">Interested in working together? Here's where to find my résumé, my code, and how to reach me.</p>
        <div class="flex flex-wrap justify-center gap-4"><a href="https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume.pdf" target="_blank" rel="noopener" aria-label="View Résumé" title="View Résumé" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"/></svg></a><a href="https://github.com/leeannvidal" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a><a href="http://www.linkedin.com/in/leeannvidalcovas" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/></svg></a><a href="mailto:vidall@bu.edu" aria-label="Email Me" title="Email Me" class="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"/></svg></a></div>
        </div>
    design:
      spacing:
        padding: ["5rem", "0", "4rem", "0"]
---