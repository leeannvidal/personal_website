---
title: Presentaciones
cms_exclude: true 
type: landing

sections:
  - block: page-header
    content:
      title: Presentaciones
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"] 
  - block: collection
    content:
      title: Ponencias Arbitradas
      filters:
        folders:
          - presentations
        publication_type: refereed-papers
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["2rem", "0", "0", "0"]
  - block: collection
    content:
      title: Charlas Invitadas
      filters:
        folders:
          - presentations
        publication_type: invited-talks
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: Pósters Arbitrados
      filters:
        folders:
          - presentations
        publication_type: refereed-posters
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: "Charlas en el Departamento / Campus"
      filters:
        folders:
          - presentations
        publication_type: departmental-talks
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
---
