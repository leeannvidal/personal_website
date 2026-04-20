---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: dev-hero
    id: hero
    content:
      username: me
      greeting: "Hello, I'm"
      title: "TITLE"
      role: role
      bio: A scrollable overview of my academic background, work experience, and technical skills. For my Academic CV or Industry Resume, click on the buttons below.
      tagline: tagline
      cta_buttons:
        - text: View Academic CV
          url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_CV.pdf"
        - text: View Resume
          url: "https://leeannvidal.github.io/documents/CV_Resume/Vidal_Covas_Resume.pdf"
          # icon: document-arrow-down
    design:
      style: split
      avatar_shape: rounded
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
