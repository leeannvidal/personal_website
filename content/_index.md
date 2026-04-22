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
  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 2rem; color: #677E76; margin: 0;">¡Bienvenid@!</h1></div>'
  #   design:
  #     background:
  #       gradient_mesh:
  #         enable: true
  #     # background:
  #       # color: '#677E76'
  #       # text_color_light: true
  #     columns: '1'
  #     css_style: 'padding-top: 0; padding-bottom: 0;'
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
        # align: center #these dont work. come back later
        # rounded: full
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
  # - block: resume-biography-custom
  #   content:
  #     title: ¡Bienvenid@!
  #     # Note: `username` refers to the user's folder name in `content/authors/`
  #     username: me

  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: |-
        # {{< tabs id="example2" titles="Practical Skills, Research Interests, Education, Languages" >}}

      #   <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">

      #     <table style="border-collapse: collapse; flex: 1; min-width: 200px;">
      #       <thead>
      #         <tr><th style="background-color: #5B5B5B; color: white; padding: 0.5rem 1rem; text-align: left;">Project Management</th></tr>
      #       </thead>
      #       <tbody>
      #         <tr><td style="padding: 0.3rem 1rem;">Problem-solving</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Strategic thinking</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Stakeholder Communication</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Interdisciplinary Collaboration</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Long-term project & team management</td></tr>
      #       </tbody>
      #     </table>

      #     <table style="border-collapse: collapse; flex: 1; min-width: 200px;">
      #       <thead>
      #         <tr><th style="background-color: #5B5B5B; color: white; padding: 0.5rem 1rem; text-align: left;">Data Science</th></tr>
      #       </thead>
      #       <tbody>
      #         <tr><td style="padding: 0.3rem 1rem;">Experiment design</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Statistical analysis</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Data creation & cleaning</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Data sampling, processing, & visualization</td></tr>
      #       </tbody>
      #     </table>

      #   </div>

      #   <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 1rem;">

      #     <table style="border-collapse: collapse; flex: 1; min-width: 200px;">
      #       <thead>
      #         <tr><th style="background-color: #5B5B5B; color: white; padding: 0.5rem 1rem; text-align: left;">Annotation</th></tr>
      #       </thead>
      #       <tbody>
      #         <tr><td style="padding: 0.3rem 1rem;">Data labeling</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Guideline creation</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Data tagging automation</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Automated data extraction</td></tr>
      #       </tbody>
      #     </table>

      #     <table style="border-collapse: collapse; flex: 1; min-width: 200px;">
      #       <thead>
      #         <tr><th style="background-color: #5B5B5B; color: white; padding: 0.5rem 1rem; text-align: left;">Technology</th></tr>
      #       </thead>
      #       <tbody>
      #         <tr><td style="padding: 0.3rem 1rem;">R</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Praat</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">LaTeX</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">Python</td></tr>
      #         <tr><td style="padding: 0.3rem 1rem;">GitHub</td></tr>
      #       </tbody>
      #     </table>

      #   </div>

      #   <!-- tab -->

      #   <table style="border-collapse: collapse; margin: 0 auto; background: transparent;">
      #     <tr><td style="padding: 0.3rem 1rem;">Multilingualism</td></tr>
      #     <tr><td style="padding: 0.3rem 1rem;">Language & dialect contact</td></tr>
      #     <tr><td style="padding: 0.3rem 1rem;">Language variation & change</td></tr>
      #     <tr><td style="padding: 0.3rem 1rem;">Sociolinguistics</td></tr>
      #   </table>

      #   <!-- tab -->

      #   <table style="border-collapse: collapse; margin: 0 auto;">
      #     <tr>
      #       <td style="width: 2rem; vertical-align: middle; padding: 0.5rem 0.75rem 0.5rem 0;">
      #         <i class="fas fa-graduation-cap" style="color: #85A197; font-size: 2rem;"></i>
      #       </td>
      #       <td style="padding: 0.5rem 0;">
      #         <a href="https://leeannvidal.github.io/documents/Diplomas/Vidal_Covas_BU_LX_PhD_Diploma.pdf" target="_blank"><strong>PhD in Linguistics, 2025</strong></a><br>Boston University, USA
      #       </td>
      #     </tr>
      #     <tr>
      #       <td style="width: 2rem; vertical-align: middle; padding: 0.5rem 0.75rem 0.5rem 0;">
      #         <i class="fas fa-graduation-cap" style="color: #85A197; font-size: 2rem;"></i>
      #       </td>
      #       <td style="padding: 0.5rem 0;">
      #         <a href="https://leeannvidal.github.io/documents/Diplomas/Vidal_Covas_BU_LX_Masters_Diploma.pdf" target="_blank"><strong>MA in Linguistics, 2021</strong></a><br>Boston University, USA
      #       </td>
      #     </tr>
      #     <tr>
      #       <td style="width: 2rem; vertical-align: middle; padding: 0.5rem 0.75rem 0.5rem 0;">
      #         <i class="fas fa-graduation-cap" style="color: #85A197; font-size: 2rem;"></i>
      #       </td>
      #       <td style="padding: 0.5rem 0;">
      #         <a href="https://lsu.edu/hss/wllc/spanish/graduate/" target="_blank"><strong>MA in Hispanic Studies & Linguistics, 2013</strong></a><br>Louisiana State University, USA
      #       </td>
      #     </tr>
      #     <tr>
      #       <td style="width: 2rem; vertical-align: middle; padding: 0.5rem 0.75rem 0.5rem 0;">
      #         <i class="fas fa-graduation-cap" style="color: #85A197; font-size: 2rem;"></i>
      #       </td>
      #       <td style="padding: 0.5rem 0;">
      #         <a href="https://lsu.edu/hss/wllc/spanish/graduate/" target="_blank"><strong>BA in Hispanic Studies & Literatures, 2011</strong></a><br>Louisiana State University, USA
      #       </td>
      #     </tr>
      #   </table>

      #   <!-- tab -->

      #   <table style="border-collapse: collapse; margin: 0 auto; background: transparent;">
      #     <tr>
      #       <td style="padding: 0.3rem 1.5rem 0.3rem 0;"><strong>English</strong></td>
      #       <td style="padding: 0.3rem 0;">Native</td>
      #     </tr>
      #     <tr>
      #       <td style="padding: 0.3rem 1.5rem 0.3rem 0;"><strong>Spanish</strong></td>
      #       <td style="padding: 0.3rem 0;">Native</td>
      #     </tr>
      #     <tr>
      #       <td style="padding: 0.3rem 1.5rem 0.3rem 0;"><strong>Brazilian Portuguese</strong></td>
      #       <td style="padding: 0.3rem 0;">Beginner</td>
      #     </tr>
      #     <tr>
      #       <td style="padding: 0.3rem 1.5rem 0.3rem 0;"><strong>Indonesian, Wichita, West Greenlandic, Yagua, Zulu</strong></td>
      #       <td style="padding: 0.3rem 0;">Fieldwork</td>
      #     </tr>
      #   </table>
      #   {{< /tabs >}}

      #   <p style="text-align: center; color: #5B5B5B; font-size: 0.85rem; margin-top: 0.75rem;"><em>You can toggle between the tabs above to get a quick overview of my skills, interests, and education.</em></p>
      # design:
      # columns: '1'

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
