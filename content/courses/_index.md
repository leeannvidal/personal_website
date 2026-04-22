---
title: Courses
summary: My courses
type: landing

# cascade:
#   - target:
#       path: '{/courses/*/**}'
#     type: docs
#     params:
#       show_breadcrumb: true

sections:
  - block: cta-button-list
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
          position: 'repeat'
  - block: features
    content:
      title: "Undergraduate Courses"
      text: "Selection of undergraduate-level classes I've taught."
      items:
        - name: "CAS LX 110: Accents, Dialects, and Society"
          description: |
            <strong>Institution:</strong> Boston University<br>
            <strong>Role:</strong> Teaching Fellow<br>
            <strong>Year(s):</strong> Fall 2018 & Spring 2020<br>
            <strong>Students:</strong> ~100<br>
            <em>Introduction to sociolinguistic variation: how dialects arise, social patterns, and media.</em><br>
            <a class="btn btn-outline-primary btn-sm" href="https://github.com/leeannvidal/leeannvidal.github.io/blob/main/documents/Teaching/Syllabi/LX%20110%20-%20Say%20what%20Syllabus%20-%20Spring%202020%20-%20Boston%20University.pdf" target="_blank">Syllabus</a>
            <a class="btn btn-outline-primary btn-sm" href="#" target="_blank">Class Description</a>
          icon: hero/book-open
        - name: "CAS LX 120: Language and Music"
          description: |
            **Institution:** BU  
            **Role:** Grader  
            **Year(s):** Fall 2021  
            **Students:** ~30–40  
            *Interdisciplinary links between language and music, brain-based evidence.*  
            [Syllabus](#)
          icon: hero/musical-note
        # ...etc for more courses
    design:
      background:
        gradient:
          start: 'primary-400'
          end: 'secondary-500'
          direction: 120
        gradient_mesh:
          enable: true
          style: orbs
          colors: ['primary-500/30', 'secondary-500/30']
          orb_count: 2
      spacing:
        padding: ['4rem', '0', '4rem', '0']
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
        | 2017–2018  | Basic Technology       | ASH                 | Instructor | Computer fundamentals, safe online practices, basic software.           | ~10–15/section   |
---
