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
  - block: page-header
    content:
      title: Presentations
      subtitle: 
    design:
      background:
        color: '#677E76'
        text_color: '#F2F2F2'
      spacing:
        padding: ["1rem", "0", "1rem", "0"] 
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
        padding: ["2rem", "0", "0", "0"]
  - block: collection
    content:
      title: Invited Talks
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
      title: Refereed Posters
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
      title: "Campus / Departmental Talks"
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
