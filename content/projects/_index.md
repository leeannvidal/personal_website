---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Selected Projects
      text: 
      filters:
        folders:
          - projects
    design:
      view: article-grid
      fill_image: false
      columns: 3
      show_date: false
      show_read_time: false
      show_read_more: false
  - block: portfolio
  id: portfolio
  content:
    title: "Projects"
    subtitle: "A selection of recent projects"
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
---
