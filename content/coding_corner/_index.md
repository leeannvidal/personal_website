---
title: "Coding Corner"
summary: "Tools, resources, and my learning journey in R, Praat, and LaTeX."
date: 2026-04-20
type: landing
sections:
  - block: page-header
    content:
      title: "Coding & Data Workflows"
      # title: "Coding Corner: <br>Tools & Resources"
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: hero
    content:
      title: "Coding Corner"
      text: "Despite having formal training only in a quantitative methods class for R, I’ve primarily learned coding through self-study, asking colleagues, and extensive googling. My drive to find solutions for automation and problem-solving has continually pushed me to learn different coding languages throughout my life."
      primary_action:
        text: "Explore Resources"
        url: "#resources"
    design:
      background:
        color: neutral
      spacing:
        padding: ["0", "0", "0", "0"]
  
  - block: markdown
    content:
      title: "My Learning Journey"
      text: |
        Years ago, as a teacher, I needed a way to automate grading to focus more on project-based learning. This necessity led me to learn HTML, starting with small tasks and gradually building my skills as new needs arose. This experience taught me that learning a little at a time and applying it to real problems can lead to significant progress over time.

        I hope this inspires anyone new to coding to realize it can be approachable and manageable. Trust me, if I could figure it out, so can you.
    design:
      spacing:
        padding: ["0", "0", "0", "0"]

  - block: features
    content:
      title: "Tools & Resources"
      items:
        - name: "R and RStudio"
          description: "RStudio is a comprehensive development environment for R, a programming language designed for statistical computing and graphics. This combination makes R and RStudio powerful tools widely used in linguistics for data analysis. I use them for various tasks, including data cleaning, coding, statistical analysis, and creating visualizations. With R's extensive libraries and RStudio's user-friendly interface, you can efficiently manage large datasets, perform complex statistical analyses, and generate informative visualizations to support your research."
          icon: devicon/r
        - name: "Praat"
          description: "Developed by Paul Boersma and David Weenink at the University of Amsterdam, Praat is a powerful tool for linguistic analysis, including phonetic analysis and speech synthesis. It supports scripting, allowing automation of repetitive tasks and complex analyses. Manuals and tutorials are available on the Praat website. I learned Praat scripting to automate data labeling and extraction for statistical analysis in R. Starting with editing existing scripts and seeking help, I eventually wrote my own scripts and functions."
          icon: hero/chart-bar
        - name: "LaTeX"
          description: "LaTeX is a powerful typesetting system widely used in academia for creating professional-looking documents. It is particularly useful in linguistics for writing complex documents with symbols, tables, examples, visuals, and references. LaTeX ensures consistent formatting and can handle large documents with ease, making it ideal for theses, dissertations, and research papers. For my work, I often use TeXstudio, an integrated writing environment that makes working with LaTeX more efficient and user-friendly, similar to how RStudio complements R."
          icon: hero/document-text
    design:
      columns: "1"
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: features
    id: resources
    content:
      title: "R Workflow & Resources"
      items:
        - name: "R Workflow Repo"
          description: "I’ve been using R for nearly a decade, but my most comprehensive work came during my dissertation. That project led me to create the Dissertation Data Analysis (Liquid Variation) repository — a complete, reproducible workflow for cleaning, analyzing, and visualizing linguistic data. The repo demonstrates how I organize large research projects in R. It includes: Custom functions for modeling and visualization, Modular scripts for data wrangling and analysis, Automated pipelines that generate LaTeX tables and publication-ready plots. Sensitive data are excluded, but the codebase illustrates my approach to automation, modular design, and reproducible research."
          icon: brands/github
        - name: "R for Data Science"
          description: "By Garrett Grolemund, Mine Çetinkaya-Rundel, and Hadley Wickham - A comprehensive introduction to R and data science."
          icon: hero/book-open
        - name: "Statistics for Linguists (Winter)"
          description: "An accessible introduction to R and statistical analysis by Bodo Winter."
          icon: hero/book-open
        - name: "Statistics for Linguists (Schneider & Lauber)"
          description: "An introduction to statistics for linguists by Dr. Gerold Schneider and Max Lauber."
          icon: hero/book-open
        - name: "R-bloggers"
          description: "A blog aggregator that features tutorials, tips, and articles on R from around the web."
          icon: hero/globe-alt
    design:
      columns: "1"
      spacing:
        padding: ["0", "0", "0", "0"]

  - block: features
    content:
      title: "Useful Praat Scripts"
      items:
        - name: "Add Labels from CSV to TextGrid"
          description: ""
          icon: hero/document-plus
        - name: "Change Interval Labels with Regex"
          description: ""
          icon: hero/document-text
        - name: "Create New Tiers in TextGrid"
          description: ""
          icon: hero/document-duplicate
        - name: "Extract Annotations to CSV"
          description: ""
          icon: hero/table
    design:
      columns: "1"
      spacing:
        padding: ["0", "0", "0", "0"]

  - block: features
    content:
      title: "Useful LaTeX Resources"
      items:
        - name: "LaTeX guide for beginners (Martins)"
          description: "A very useful short and simple guide by Pedro Tiago Martins."
          icon: hero/book-open
        - name: "LaTeX Wikibook"
          description: "A thorough and detailed introduction to LaTeX, covering a wide range of topics."
          icon: hero/book-open
        - name: "LaTeX for Linguists (Himmelreich)"
          description: "A comprehensive guide and reference book for beginners and experts alike by Anke Himmelreich."
          icon: hero/book-open
        - name: "LaTeX/Linguistics Wikibook"
          description: "An overview of useful LaTeX packages for Linguists."
          icon: hero/book-open
        - name: "Overleaf"
          description: "Basically the Google Docs of LaTeX, an online editor with comprehensive guides and tutorials. Very useful for collaboration."
          icon: hero/globe-alt
    design:
      columns: "1"
      spacing:
        padding: ["0", "0", "0", "0"]

  - block: cta-card
    content:
      title: "Ready to Dive Deeper?"
      text: "Explore my repositories, scripts, and resources to enhance your projects and workflows."
      button:
        text: "View My GitHub"
        url: "https://github.com/yourusername" # Placeholder: Replace with your GitHub URL
---