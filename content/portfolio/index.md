---
title: "My Portfolio"
summary: "Linguist with expertise in sociolinguistic research, dataset curation, and applied data science."
date: 2026-04-21
type: landing
sections:
  - block: hero
    content:
      title: "Hello, I'm [Your Name]"
      text: "Linguist (PhD, Boston University) with expertise in sociolinguistic research, dataset curation, and applied data science. My portfolio highlights experience creating and curating linguistic datasets, designing annotation schemes, and supporting machine learning workflows. I specialize in bridging research and application—translating complex language data into insights and tools that advance both academic projects and industry technologies."
      primary_action:
        text: "Contact Me"
        url: "#contact"
  - block: features
    content:
      title: "My Expertise"
      items:
        - name: "Sociolinguistic Research"
          description: "Designing and conducting fieldwork, analysis of language variation and change."
          icon: "hero/chat-bubble-left-right"
        - name: "Dataset Curation"
          description: "Managing collection, QA, and annotation of linguistic datasets."
          icon: "hero/document-text"
        - name: "Applied Data Science"
          description: "Translating complex language data into insights and technological solutions."
          icon: "hero/wrench-screwdriver"
  - block: portfolio
    content:
      title: "Featured Projects"
      filters:
        folders:
          - project
    design:
      columns: 2
  - block: tech-stack
    id: skills
    content:
        title: "Tech Stack"
        subtitle: "Technologies I use to build things"
        categories:
            - name: Languages
              items:
                - name: R
                  icon: devicon/rstudio
                  level: advanced
                - name: R
                  icon: brands/r
                  level: advanced
                # - name: Python
                #   icon: devicon/python
                #   level: beginner
                - name: Python
                  icon: brands/python
                  level: beginner
                - name: LaTeX
                  icon: devicon/latex
                  level: advanced
                - name: html
                  icon: devicon/htmx
                  level: intermediate
            - name: Frontend
              items:
                - name: Tailwind CSS
                  icon: devicon/tailwindcss
                # - name: Excel
                #   icon: 
                # - name: Google Sheets
                #   icon: brands/googlesheets
            - name: Linguistic Tools
              items:
                - name: Praat
                  icon: custom/praat
                - name: ELAN
                  icon: custom/ELAN
            - name: Workflow & Version Control
              items:
                - name: GitHub
                  icon: brands/github
                # - name: Git
                #   icon: brands/git
                - name: Git
                  icon: custom/git
                - name: Bash / Terminal
                  icon: brands/gnubash
                # - name: Bash/Terminal
                #   icon: devicon/bash
    design:
        style: grid
        show_levels: true
  - block: tech-stack
    id: skills
    content:
        title: "Tech Stack"
        subtitle: "Technologies I use to build things"
        categories:
            - name: Languages
              items:
                - name: R
                  icon: devicon/rstudio
                  level: advanced
                - name: R
                  icon: brands/r
                  level: advanced
                # - name: Python
                #   icon: devicon/python
                #   level: beginner
                - name: Python
                  icon: brands/python
                  level: beginner
                - name: LaTeX
                  icon: devicon/latex
                  level: advanced
            - name: Frontend
              items:
                - name: Tailwind CSS
                  icon: devicon/tailwindcss
                # - name: Excel
                #   icon: 
                # - name: Google Sheets
                #   icon: brands/googlesheets
            - name: Linguistic Tools
              items:
                - name: Praat
                  icon: custom/praat
                - name: ELAN
                  icon: custom/ELAN
            - name: Workflow & Version Control
              items:
                - name: GitHub
                  icon: brands/github
                # - name: Git
                #   icon: brands/git
                - name: Git
                  icon: custom/git
                - name: Bash / Terminal
                  icon: brands/gnubash
                # - name: Bash/Terminal
                #   icon: devicon/bash
    design:
        style: list
        show_levels: true
---