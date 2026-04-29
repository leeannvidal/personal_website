---
title: Courses
summary: My courses
type: landing



sections:
  # - block: markdown
  #   content:
  #     title: ''
  #     subtitle: ''
  #     text: '<div style="display: flex; align-items: center; justify-content: center; padding: 0.4rem 0;"><h1 style="font-size: 5rem; color: #F2F2F2; margin: 0;">Teaching & Training</h1></div>'
  #   design:
  #     background:
  #       color: '#677E76'
  #       text_color_light: true
  #     columns: '1'
  #     css_style: 'padding-top: 0; padding-bottom: 0;'
  - block: course-cards
    id: bachelors-courses
    content:
      title: "University Level Courses" # This will be your h3 title
      cards:
        - title: "CAS LX 110: Accents, Dialects, & Society"
          institution: "Boston University"
          role: "Teaching Fellow"
          primary_instructor: "Prof. Neil Myler"
          years: "Fall 2018 & Spring 2020"
          students: "~100"
          description: "Intro to sociolinguistic variation—dialect formation, community patterns, discrimination, media."
          syllabus_url: "https://leeannvidal.github.io/documents/Teaching/Syllabi/LX_110-Say_what_Syllabus-Spring_2020-Boston_University.pdf"
        - title: "CAS LX 120: Language and Music"
          institution: "Boston University"
          role: "Grader"
          primary_instructor: "Prof. Daniel Erker"
          years: "Fall 2021"
          students: "~30-40"
          description: "Interdisciplinary: structure/cognition links between language & music, evolution, brain evidence."
          syllabus_url: "https://leeannvidal.github.io/documents/Teaching/Syllabi/LX_120_Language_Music_Sample_Syllabus.pdf"
        - title: "CAS LX 301/601: Introduction to Sound Systems"
          institution: "Boston University"
          role: "Course Assistant"
          primary_instructor: "Prof. Kate Lindsey"
          years: "Fall 2020"
          students: "~25"
          description: "Phonetics & phonology basics, hands-on transcription/acoustic analysis."
          syllabus_url: "https://leeannvidal.github.io/documents/Teaching/Syllabi/LX301_Syllabus-F20.pdf"
          extra_button_text: "Teaching Evaluation" # New field for the extra button
          extra_button_url: "https://leeannvidal.github.io/documents/Teaching/Evaluations/Vidal-Covas-F20-Teaching_Evaluation.pdf"
        - title: "Spanish 1101: Elementary Spanish I"
          institution: "Louisiana State University"
          role: "Instructor"
          years: "2012–2013"
          students: "~25–30/section"
          description: "Foundational Spanish—communicative approach to basic skills."
          syllabus_url: "https://leeannvidal.github.io/documents/Teaching/Syllabi/SPAN_1101_Syllabus-LSU.pdf"
        - title: "Spanish 1102: Elementary Spanish II"
          institution: "Louisiana State University"
          role: "Instructor"
          years: "2012–2013"
          students: "~25–30/section"
          description: "Continuation: functional communication, past narration, cultural practices."
          syllabus_url: "https://leeannvidal.github.io/documents/Teaching/Syllabi/SPAN_1102_Syllabus-LSU.pdf"
    design: # Optional: Uncomment to apply custom design to this block
      columns: 3 # You had lg:grid-cols-2, so 2 columns for larger screens
      card_size: "small" # Example size
      card:
        css_class: 'glassmorphism-secondary text-white'
      #   text_color: 'auto'
      #   overlay_opacity: 0.15
      # background:
      #   gradient:
      #     start: 'primary-300'
      #     end: 'primary-500'
      #     direction: 135

  # High School Level Courses Block
  - block: course-cards
    id: highschool-courses
    content:
      title: "High School Level Courses" # This will be your h3 title
      cards:
        - title: "Spanish I"
          institution: "Saint Joseph’s Academy"
          role: "Instructor"
          years: "2014–2017"
          students: "~25–30/section"
          description: "Basic vocabulary; foundational speaking, reading, writing, listening skills."
        - title: "Spanish II"
          institution: "Saint Joseph’s Academy"
          role: "Instructor"
          years: "2014–2017"
          students: "~25–30/section"
          description: "Intermediate; extended communication, complex grammar, culture."
        - title: "Computer & Software Orientation"
          institution: "Saint Joseph’s Academy"
          role: "Instructor"
          years: "2016–2017"
          students: "~25–30/section"
          description: "Tech literacy, productivity software, academic/practical skills."
    design: # Optional: Uncomment to apply custom design to this block
      columns: 3 # You had lg:grid-cols-2, so 2 columns for larger screens
      card_size: "small" # Example size
      card:
        css_class: 'cta-glassmorphism'
        text_color: 'auto'
      #   overlay_opacity: 0.15
      # background:
      #   gradient:
      #     start: 'secondary-300'
      #     end: 'secondary-500'
      #     direction: 135

  # Middle School Level Courses Block
  - block: course-cards
    id: middleschool-courses
    content:
      title: "Middle School Level Courses" # This will be your h3 title
      cards:
        - title: "Introductory Spanish"
          institution: "Academy of the Sacred Heart"
          role: "Instructor"
          years: "2017–2018"
          students: "~10–15/section"
          description: "Basic vocab; conversational skills, cultural awareness."
        - title: "Basic Technology"
          institution: "Academy of the Sacred Heart"
          role: "Instructor"
          years: "2017–2018"
          students: "~10–15/section"
          description: "Computer fundamentals, safe online practices, basic software."
    design: # Optional: Uncomment to apply custom design to this block
      columns: 2 # You had lg:grid-cols-2, so 2 columns for larger screens
      card_size: "small" # Example size
      card:
        css_class: 'glassmorphism-light glass-ring glass-shadow'
      # card:
      #   css_class: 'cta-glassmorphism'
      #   text_color: 'auto'
      #   overlay_opacity: 0.15
      # background:
      #   gradient:
      #     start: 'tertiary-300'
      #     end: 'tertiary-500'
      #     direction: 135
---

  <!-- - block: cta-button-list
    content:
      buttons:
        - text: "Get in Touch"
          url: "#contact"
        - text: "Download Resume"
          url: "#resume"
  - block: contact-info
    content:
      email: "myemail@example.com"
      phone: "123-456-7890"
      social_links:
        - text: "LinkedIn"
          url: "https://www.linkedin.com/in/myprofile"
        - text: "GitHub"
          url: "https://github.com/myprofile"
  - block: cta-card
    content:
      title: 'Ready to Get Started?'
      text: 'Join thousands of users creating amazing websites'
      button:
        text: 'Get Started Free'
        url: '/signup/'
        icon: 'hero/rocket-launch'
    design:
      card:
        css_class: 'glassmorphism-secondary noise-texture text-white'
        text_color: 'auto' # auto|light|dark
        overlay_opacity: 0.15 # 0.0-1.0 for contrast control
      background:
        gradient:
          start: 'primary-500'
          end: 'primary-700'
          direction: 135
        image:
          filename: 'textures/noise-pattern.svg'
          size: '32px'
          position: 'repeat' -->
<!-- 
            - block: markdown
    content:
      title: "Courses Taught"
      text: |
        **Bachelor’s level courses**

        | Year(s)         | Course                                   | Institution                | Role              | Short Description                                                                                                                    | Students          |
        |-----------------|------------------------------------------|----------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------|
        | Fall 2018 & Spring 2020 | CAS LX 110: Accents, Dialects, and Society | Boston University (BU)    | Teaching Fellow   | Intro to sociolinguistic variation—dialect formation, community patterns, discrimination, media.                                      | ~100              |
        | Fall 2021       | CAS LX 120: Language and Music           | BU                         | Grader            | Interdisciplinary: structure/cognition links between language & music, evolution, brain evidence.                                   | ~30-40            |
        | Fall 2020       | CAS LX 301/601: Introduction to Sound Systems | BU                    | Course Assistant  | Phonetics & phonology basics, hands-on transcription/acoustic analysis.                                                             | ~25               |
        | 2012–2013       | Spanish 1101: Elementary Spanish I       | Louisiana State University | Instructor        | Foundational Spanish—communicative approach to basic skills.                                                                        | ~25–30/section    |
        | 2012–2013       | Spanish 1102: Elementary Spanish II      | LSU                        | Instructor        | Continuation: functional communication, past narration, cultural practices.                                                         | ~25–30/section    |

        **High School level courses**

        | Year(s)    | Course                 | Institution        | Role      | Short Description                                                                   | Students         |
        |------------|------------------------|--------------------|-----------|-------------------------------------------------------------------------------------|------------------|
        | 2014–2017  | Elementary Spanish I   | Saint Joseph’s Academy | Instructor | Basic vocabulary; foundational speaking, reading, writing, listening skills.         | ~25–30/section   |
        | 2014–2017  | Elementary Spanish II  | SJA                   | Instructor | Intermediate; extended communication, complex grammar, culture.                      | ~25–30/section   |
        | 2016–2017  | Computer & Software Orientation | SJA           | Instructor | Tech literacy, productivity software, academic/practical skills.                      | ~25–30/section   |

        **Middle School level courses**

        | Year(s)    | Course                 | Institution      | Role      | Short Description                                                      | Students         |
        |------------|------------------------|------------------|-----------|------------------------------------------------------------------------|------------------|
        | 2017–2018  | Introductory Spanish   | Academy of the Sacred Heart | Instructor | Basic vocab; conversational skills, cultural awareness.                 | ~10–15/section   |
        | 2017–2018  | Basic Technology       | ASH                 | Instructor | Computer fundamentals, safe online practices, basic software.           | ~10–15/section   | -->