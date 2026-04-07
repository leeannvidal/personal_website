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
  - block: collection
    id: projects
    content:
      title: Projects
      text:
      filters:
        folders:
          - projects
    design:
      view: article-grid
      fill_image: false
      columns: 4
      show_date: false
      show_read_time: false
      show_read_more: false
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
  ###########   LABS     ###########    
  ## ──────────────────────────────── ##
  - block: collection
    id: labs
    content:
      title: "Labs"
      subtitle: "These are labs I've been a part of or contributed to"
      text:
      filters:
        folders:
          - research/labs
    #   count: 3
    design:
      view: "card"
      columns: "2"
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