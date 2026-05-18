---
title: Publications
# cms_exclude: true 
type: landing
# View.
# view: citation

# Page sections
sections:
  - block: page-header
    content:
      title: Publications
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"]
  - block: collection
    content:
      title: Refereed Journal Articles
    #   text: ''
      filters:
        folders:
          - publications
        publication_type: article-journal
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["2rem", "0", "0", "0"]
  - block: collection
    content:
      title: Refereed Proceedings
    #   text: ''
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
      title: Contributions to Edited Volumes (invited)
    #   text: ''
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
      title: Edited Volumes
    #   text: ''
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
      title: Other Publications
    #   text: ''
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
