---
title: Publications
# cms_exclude: true 
type: landing 
# View.
# view: citation

# Page sections
sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Publications</h1></div>'
    design:
      background:
        color: '#677E76'
        text_color_light: true
      columns: '1'
      css_style: 'padding-top: 0; padding-bottom: 0;'
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
        padding: ["4rem", "0", "0", "0"]
  - block: collection
    content:
      title: Refereed Proceedings
    #   text: ''
      filters:
        folders:
          - publications
        publication_type: paper-conference
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
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
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
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
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
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
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["1rem", "0", "0", "0"]




---
