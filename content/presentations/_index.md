---
title: Presentations
cms_exclude: true 

# View.
# view: citation
type: landing


# view: article-grid
# view: date-title-summary
# view: slides-gallery
# view: date-title-summary
# view: card

# Page sections
sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Presentations</h1></div>'
    design:
      background:
        color: '#677E76'
        text_color_light: true
      columns: '1'
      css_style: 'padding-top: 0; padding-bottom: 0;'
  # - block: collection
  #   content:
  #     title: 
  #   #   text: ''
  #     filters:
  #       folders:
  #         - presentations
  #       # publication_type: article-journal
  #       # exclude_featured: false
  #       # exclude_future: false
  #       # exclude_past: false
  #     count: 0
  #   design:
  #     view: citation
  #     css_class: "tight-publications-section"
  #     spacing:
  #       padding: ["2rem", "0", "0", "0"]
  - block: collection
    content:
      title: Refereed Papers
    #   text: ''
      filters:
        folders:
          - presentations
        publication_type: refereed-papers
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
      title: Invited Talks
    #   text: ''
      filters:
        folders:
          - presentations
        publication_type: invited-talks
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
      title: Refereed Posters
    #   text: ''
      filters:
        folders:
          - presentations
        publication_type: refereed-posters
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
      title: "Campus / Departmental Talks"
    #   text: ''
      filters:
        folders:
          - presentations
        publication_type: departmental-talks
        # exclude_featured: false
        # exclude_future: false
        # exclude_past: false
      count: 0
    design:
      view: citation
      css_class: "tight-publications-section"
      spacing:
        padding: ["4rem", "0", "0", "0"]
# # Optional header image (relative to `static/media/` folder).
# banner:
#   caption: ''
#   image: ''
---
