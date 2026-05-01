---
title: "My Portfolio"
summary: "Linguist with expertise in sociolinguistic research, dataset curation, and applied data science."
date: 2026-04-21
type: landing
sections:
  - block: dev-hero
    content:
      username: me
      # tagline: hey
      # bio_override: |
      #   I create and analyze linguistic datasets for research and machine learning applications. My work focuses on annotation design, data quality, and bridging sociolinguistic research with real-world AI systems.
      greeting: "Hello, welcome to my portfolio page. I'm"
      cta_buttons:
        - text: View Resume
          url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume.pdf"
    design:
      style: split
      avatar_shape: rounded
      spacing:
        padding: ["0", "0", "0", "0"]
      css_class: "no-hero-gap"
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
        I create and analyze linguistic datasets for research and machine learning applications. My work focuses on annotation design, data quality, and bridging sociolinguistic research with real-world AI systems.
    design:
      card:
        # css_class: 'cta-glassmorphism'
        css_class: 'glassmorphism-secondary glass-ring glass-shadow text-gray-900'
        text_color: 'auto' # Will detect primary-500 as medium and use adaptive colors
        overlay_opacity: 0.1
      spacing:
        padding: ["0", "0", "0", "0"]
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
        - statistic: "24k+"
          description: Linguistic dataset built
          sub_metric: End-to-end design, QA, and analysis
          # icon: 
          
        - statistic: "10+"
          description: Annotation frameworks designed
          sub_metric: For linguistic & ML workflows
          # icon: hero/user-group
          
        - statistic: "ML"
          description: Speech data annotation & QA
          sub_metric: Emotion, engagement, speech patterns
          # icon: hero/currency-dollar
          
        - statistic: "UX"
          description: Insights for conversational AI
          sub_metric: Influencing model & annotation design
          # icon: hero/currency-dollar
    design:
      layout: cards # options are: cards | compact | minimal
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: portfolio
    content:
      title: "Featured Projects"
      subtitle: "Language data, annotation design, and machine learning workflows"
      count: 2
      filters:
        folders:
          - tech_projects  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
      default_button_index: 0
    design:
      columns: 2
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: features
    id: methods
    content:
      title: "Research Methods"
      # text: "Methods I use to design, collect, analyze, and interpret data"
      items:
        - name: "Qualitative Research"
          description: |
            - Designed and conducted linguistic fieldwork with Puerto Rican Spanish speakers in Puerto Rico and Louisiana. <br>
            - Developed interview protocols for exploratory research and hypothesis testing.
        - name: "Quantitative Analysis"
          description: |
            - Designed online studies, coded linguistic variables, extracted datasets, and conducted statistical analysis of sociolinguistic data.
        - name: "Experimental Design"
          description: |
            - Built and ran online studies using Qualtrics and Prolific, including a Spanish word order study published in conference proceedings.
    design:
        # background:
        #   color: "secondary-500"
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

        - name: "Linguistic & Research Tools"
          items:
            - name: Praat
              icon: custom/praat
            - name: ELAN
              icon: custom/ELAN
            - name: LaTeX
              icon: devicon/latex

        - name: "Workflow & Version Control"
          items:
            - name: Git
              icon: custom/git
            - name: GitHub
              icon: brands/github
            - name: Bash / Terminal
              icon: brands/gnubash
              # icon: devicon/bash

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
        - My work has supported decisions around speech patterns, pause-fillers, engagement cues, and language variation—helping bridge the gap between human communication and machine learning systems.
    design:
      card:
        # css_class: 'cta-glassmorphism'
        css_class: 'glassmorphism-secondary glass-ring glass-shadow text-gray-900'
        text_color: 'auto' # Will detect primary-500 as medium and use adaptive colors
        overlay_opacity: 0.1
      spacing:
        padding: ["0", "0", "0", "0"]
---