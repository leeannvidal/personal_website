---
title: 'Research'
date: 
type: landing

# Page sections
sections:
  ## ──────────────────────────────── ##
  ###########   HEADER   ###########    
  ## ──────────────────────────────── ##
  - block: page-header
    content:
      title: Research
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Research</h1></div>'
  #   design:
  #     background:
  #       color: '#677E76'
  #       text_color_light: true
  #     columns: '1'
  #     css_style: 'padding-top: 0; padding-bottom: 0;'
  ## ──────────────────────────────── ##
  ###########   PROJECTS   ###########    
  ## ──────────────────────────────── ##
  # - block: collection
  #   id: projects
  #   content:
  #     title: Projects
  #     text:
  #     filters:
  #       folders:
  #         - projects
  #   design:
  #     view: article-grid
  #     fill_image: false
  #     columns: 4
  #     show_date: false
  #     show_read_time: false
  #     show_read_more: false
  - block: portfolio
    id: portfolio
    content:
      title: "Projects"
      count: 4
      filters:
        folders:
          - projects  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
        - name: Covariation
          tag: Covariation
        - name: Morphosyntax
          tag: Morphosyntax
        - name: Phonetics
          tag: Phonetics
      default_button_index: 0
      archive:
        # Auto-shown if more items exist than displayed
        # Optionally customize:
        # enable: false  # Explicitly hide
        # link: "/work/"  # Custom URL
        # text: "Browse All"  # Custom text
    design:
      columns: 2
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
      spacing:
        padding: ["2rem", "0", "0", "0"]
  ## ──────────────────────────────── ##
  ###########   PUBLICATIONS   ###########    
  ## ──────────────────────────────── ##
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      archive:
        text: "View All Publications" # <- custom button label
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["2rem", "0", "0", "0"]
    # archive_text: "See all Publications"

## ──────────────────────────────── ##
  ###########   PRESENTATIONS     ###########    
  ## ──────────────────────────────── ##
  - block: collection
    content:
      title: Selected Presentations
      archive:
        text: "View All Presentations" # <- custom button label
      text: ''
      filters:
        folders:
          - presentations
        exclude_featured: false
      count: 4
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["2rem", "0", "0", "0"]
  # - block: portfolio
  #   content:
  #     title: "Talks"
  #     show_date: true
  #     count: 4
  #     filters:
  #       folders:
  #         - presentations  # Or: research, portfolio, work, teaching, etc.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       # - name: Covariation
  #       #   tag: Covariation
  #       # - name: Morphosyntax
  #       #   tag: Morphosyntax
  #       - name: Phonetics
  #         tag: Phonetics
  #     default_button_index: 0
  #     archive:
  #       # Auto-shown if more items exist than displayed
  #       # Optionally customize:
  #       # enable: false  # Explicitly hide
  #       # link: "/work/"  # Custom URL
  #       # text: "Browse All"  # Custom text
  #   design:
  #     columns: 2
  #     fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
  #     show_date: true
  # - block: collection
  #   content:
  #     title: Presentations
  #     text:
  #     filters:
  #       folders:
  #         - presentations
  #     count: 4
  #   design:
  #     view: article-grid
  #     columns: 2
  #     # show_date: false
  #     show_read_time: false
  #     show_read_more: false
  ## ──────────────────────────────── ##
  ###########   LABS     ###########    
  ## ──────────────────────────────── ##
  - block: collection
    id: labs
    content:
      title: Labs
      text:
      filters:
        folders:
          - labs
    #   count: 3
    design:
      view: article-grid
      columns: 2
      show_date: false
      show_read_time: false
      show_read_more: false
  ## ──────────────────────────────── ##
  ###########   TRIAL FOR TOPICS     ###########    
  ## ──────────────────────────────── ##
  # - block: research-areas
  #   content:
  #     title: Research Focus Areas
  #     subtitle: Advancing Science Through Innovation
  #     text: Our lab conducts cutting-edge research across multiple domains
  #     items:
  #       - name: Computational Biology
  #         description: Developing algorithms for genomic analysis and protein structure prediction
  #         emoji: 🧬
  #         gradient: from-green-400 to-blue-500
  #         status: active
  #         topics:
  #           - Genomics
  #           - Proteomics
  #           - Bioinformatics
  #           - Systems Biology
  #         team_size: 12 researchers
  #         publications: 45 papers
  #         funding: $2.5M
  #         cta:
  #           text: Learn More
  #           url: /research/computational-biology

  #       - name: Machine Learning
  #         description: Advancing deep learning methods for scientific discovery
  #         emoji: 🤖
  #         gradient: from-purple-400 to-pink-500
  #         status: active
  #         topics:
  #           - Deep Learning
  #           - Neural Networks
  #           - Computer Vision
  #           - NLP
  #         team_size: 8 researchers
  #         publications: 32 papers
  #         funding: $1.8M

  #       - name: Materials Science
  #         description: Designing novel materials through computational modeling
  #         emoji: 🔬
  #         gradient: from-orange-400 to-red-500
  #         status: emerging
  #         topics:
  #           - Nanomaterials
  #           - Quantum Materials
  #           - Polymers
  #         team_size: 6 researchers
  #         publications: 28 papers
  #         funding: $1.2M
  #   design:
  #     layout: cards
  # - block: research-areas
  #   content:
  #     title: Research Evolution
  #     subtitle: Our Journey of Discovery
  #     items:
  #       - name: Foundation (2015-2018)
  #         description: Established core ML research
  #         icon: hero/academic-cap
  #       - name: Expansion (2018-2021)
  #         description: Added biomedical applications
  #         icon: hero/beaker
  #       - name: Current Focus (2021-Present)
  #         description: AI for scientific discovery
  #         icon: hero/sparkles
  #   design:
  #     layout: timeline
  # - block: research-areas
  #   content:
  #     title: Core Research Pillars
  #     items:
  #       - name: AI & ML
  #         description: Artificial intelligence research
  #         icon: hero/cpu-chip
  #         # gradient: from-blue-400 to-purple-600
  #       - name: Quantum
  #         description: Quantum computing systems
  #         icon: hero/sparkles
  #         gradient: from-green-400 to-teal-600
  #       - name: AI & ML
  #         description: Artificial intelligence research
  #         icon: hero/cpu-chip
  #         gradient: from-blue-400 to-purple-600
  #       - name: Quantum
  #         description: Quantum computing systems
  #         icon: hero/sparkles
  #         gradient: from-green-400 to-teal-600
  #       - name: AI & ML
  #         description: Artificial intelligence research
  #         icon: hero/cpu-chip
  #         gradient: from-blue-400 to-purple-600
  #       - name: Quantum
  #         description: Quantum computing systems
  #         icon: hero/sparkles
  #         gradient: from-green-400 to-teal-600
  #       # ... more items
  #   design:
  #     layout: hexagon
---