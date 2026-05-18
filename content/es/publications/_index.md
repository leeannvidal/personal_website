---
title: Publicaciones
type: landing

sections:
  - block: page-header
    content:
      title: Publicaciones
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: collection
    content:
      title: Artículos en Revistas Arbitradas
      filters:
        folders:
          - publications
        publication_type: article-journal
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["2rem", "0", "0", "0"]
  - block: collection
    content:
      title: Actas Arbitradas
      filters:
        folders:
          - publications
        publication_type: paper-conference
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: Contribuciones a Volúmenes Editados (invitada)
      filters:
        folders:
          - publications
        publication_type: report
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: Volúmenes Editados
      filters:
        folders:
          - publications
        publication_type: book
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
  - block: collection
    content:
      title: Otras Publicaciones
      filters:
        folders:
          - publications
        publication_type: thesis
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]
---
