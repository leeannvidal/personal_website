---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-04-04
type: landing

# design:
#   # Default section spacing
#   spacing: '6rem'

sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 2rem; color: #677E76; margin: 0;">¡Bienvenid@!</h1></div>'
    design:
      background:
        gradient_mesh:
          enable: true
      # background:
        # color: '#677E76'
        # text_color_light: true
      columns: '1'
      css_style: 'padding-top: 0; padding-bottom: 0;'
  - block: resume-biography-3
    content:
      title: 'Title'
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: me
      text: 'I specialize in building and curating linguistic datasets, designing annotation schemes, and applying quantitative and qualitative methods to study language and dialect contact as well as the social significance of linguistic variation. In industry settings, I’ve worked on speech and language data annotation for machine learning, including quality assurance, prompt engineering, and workflow optimization.
  
        If you’re coming from academia, you might want to explore my Research and Teaching/Training pages, where I share my work on language variation and classroom experience.
        
        If you’re from industry or tech, take a look at my Portfolio and Coding Corner to see how I’ve applied linguistic expertise to data science, annotation, and machine learning projects.'
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_CV.pdf
      headings:
        about: 'About Me'
        education: ''
        interests: ''
    design:
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: true
      # Name heading sizing to accommodate long or short names
      name:
        size: sm # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  # - block: markdown
  #   content:
  #     title: '📚 My Research'
  #     subtitle: ''
  #     text: |-
  #       I specialize in building and curating linguistic datasets, designing annotation schemes, and applying quantitative and qualitative methods to study language and dialect contact as well as the social significance of linguistic variation. In industry settings, I’ve worked on speech and language data annotation for machine learning, including quality assurance, prompt engineering, and workflow optimization.
        
  #       If you’re coming from academia, you might want to explore my Research and Teaching/Training pages, where I share my work on language variation and classroom experience.
        
  #       If you’re from industry or tech, take a look at my Portfolio and Coding Corner to see how I’ve applied linguistic expertise to data science, annotation, and machine learning projects.
  #   design:
  #     columns: '1'
  # - block: resume-biography-2
  #   content:
  #     title: ¡Bienvenid@!
  #     # Note: `username` refers to the user's folder name in `content/authors/`
  #     username: admin
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: |-
        {{< tabs id="example2" titles="Practical Skills, Research Interests, Education, Languages" >}}

        Project Management
        Problem-solving
        Strategic thinking
        Stakeholder Communication
        Interdisciplinary Collaboration
        Long-term project & team management

        Data Science
        Experiment design
        Statistical analysis
        Data creation & cleaning
        Data sampling, processing, & visualization


        <!-- tab -->

        Multilingualism
        Language & dialect contact
        Language variation & change
        Sociolinguistics

        <!-- tab -->

        PhD in Linguistics, 2025
        Boston University, USA
        MA in Linguistics, 2021
        Boston University, USA
        MA in Hispanic Studies & Linguistics, 2013
        Louisiana State University, USA
        BA in Hispanic Studies & Literatures, 2011
        Louisiana State University, USA

        <!-- tab -->

        English - Native
        Spanish - Native
        Brazilian Portuguese - Beginner
        Indonesian, Wichita, West Greenlandic, Yagua, Zulu - Fieldwork
        {{< /tabs >}}
    design:
      columns: '1'
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: blog
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 10
  #     # Filter on criteria
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  # - block: cta-card
  #   demo: true # Only display this section in the HugoBlox Kit demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by HugoBlox Kit - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/kit" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/kit on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: 'bg-primary-300 dark:bg-primary-700'
  #       css_style: ''
---
