---
title: 'Research'
date: 
type: landing

# Page sections
sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Research</h1></div>'
    design:
      background:
        color: '#677E76'
        text_color_light: true
      columns: '1'
      css_style: 'padding-top: 0; padding-bottom: 0;' 
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
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  ## ──────────────────────────────── ##
  ###########   PRESENTATIONS     ###########    
  ## ──────────────────────────────── ##
  - block: portfolio
    content:
      title: "Talks"
      show_date: true
      count: 4
      filters:
        folders:
          - presentations  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
        # - name: Covariation
        #   tag: Covariation
        # - name: Morphosyntax
        #   tag: Morphosyntax
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
      show_date: true
  - block: collection
    content:
      title: Presentations
      text:
      filters:
        folders:
          - presentations
      count: 4
    design:
      view: article-grid
      columns: 2
      # show_date: false
      show_read_time: false
      show_read_more: false
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
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - events
  #   design:
  #     view: card
---