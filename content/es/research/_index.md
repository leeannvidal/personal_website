---
title: 'Investigación'
date: 
type: landing

sections:
  - block: page-header
    content:
      title: Investigación
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: portfolio
    id: portfolio
    content:
      title: "Proyectos"
      count: 4
      filters:
        folders:
          - projects
      buttons:
        - name: Todos
          tag: '*'
        - name: Covariación
          tag: Covariation
        - name: Morfosintaxis
          tag: Morphosyntax
        - name: Fonética
          tag: Phonetics
      default_button_index: 0
    design:
      columns: 2
      fallback_icon: code-bracket
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: collection
    id: papers
    content:
      title: Publicaciones Destacadas
      filters:
        folders:
          - publications
        featured_only: true
    design:
      spacing:
        padding: ["0", "0", "0", "0"]
      view: article-grid
      columns: 2
      show_read_time: false
  - block: collection
    content:
      title: Publicaciones Recientes
      archive:
        text: "Ver Todas las Publicaciones"
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: Presentaciones Seleccionadas
      archive:
        text: "Ver Todas las Presentaciones"
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
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    id: labs
    content:
      title: Laboratorios
      text:
      filters:
        folders:
          - labs
    design:
      spacing:
        padding: ["1rem", "0", "0", "0"]
      view: article-grid
      columns: 2
      show_date: false
      show_read_time: false
      show_read_more: false
---
