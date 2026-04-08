---
title: 'Experience'
date: 2023-10-24
type: landing

# design:
#   spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Experience</h1></div>'
    design:
      background:
        color: '#677E76'
        text_color_light: true
      columns: '1'
      css_style: 'padding-top: 0; padding-bottom: 0;' 
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: true
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false
  # - block: resume-awards
  #   content:
  #     title: Awards
  #     username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
