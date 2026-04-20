---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Experience</h1></div>'
  #   design:
  #     background:
  #       color: '#677E76'
  #       text_color_light: true
  #     columns: '1'
  #     css_style: 'padding-top: 0; padding-bottom: 0;' 
  - block: resume-biography
    content:
      username: "admin"
      text: "A scrollable overview of my academic background, work experience, and technical skills. For my Academic CV or Industry Resume, click on the buttons below."
      button:
        text: "Academic CV"
        url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_CV.pdf"
      # button:
      #   text: "Resume"
      #   url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume.pdf"
    # design:
    #   background:
        # color: ""
        # gradient_start: "#4f46e5"
        # gradient_end: "#7c3aed"
        # text_color_light: true
      # spacing:
      #   padding: ["6", "6", "6", "6"]
      # columns: "1"
  
  - block: resume-experience
    content:
      username: me
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: yes
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: me
  # - block: resume-awards
  #   content:
  #     title: Awards
  #     username: me
  - block: resume-languages
    content:
      title: Languages
      username: me
---
