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
  # - block: features
  #   content:
  #     title: "Undergraduate Courses"
  #     text: "Selection of undergraduate-level classes I've taught."
  #     items:
  #       - name: "CAS LX 110: Accents, Dialects, and Society"
  #         description: |
  #           <strong>Institution:</strong> Boston University<br>
  #           <strong>Role:</strong> Teaching Fellow<br>
  #           <strong>Year(s):</strong> Fall 2018 & Spring 2020<br>
  #           <strong>Students:</strong> ~100<br>
  #           <em>Introduction to sociolinguistic variation: how dialects arise, social patterns, and media.</em><br>
  #           <a class="btn btn-primary btn-sm rounded-full" href="https://github.com/leeannvidal/leeannvidal.github.io/blob/main/documents/Teaching/Syllabi/LX%20110%20-%20Say%20what%20Syllabus%20-%20Spring%202020%20-%20Boston%20University.pdf" target="_blank">Syllabus</a>
  #         icon: hero/book-open
  #       - name: "CAS LX 120: Language and Music"
  #         description: |
  #           **Institution:** BU  
  #           **Role:** Grader  
  #           **Year(s):** Fall 2021  
  #           **Students:** ~30–40  
  #           *Interdisciplinary links between language and music, brain-based evidence.*  
  #           [Syllabus](#)
  #         icon: hero/musical-note
  #       # ...etc for more courses
  #   design:
  #     background:
  #       gradient:
  #         start: 'primary-400'
  #         end: 'secondary-500'
  #         direction: 120
  #       gradient_mesh:
  #         enable: true
  #         style: orbs
  #         colors: ['primary-500/30', 'secondary-500/30']
  #         orb_count: 2
  #     spacing:
  #       padding: ['4rem', '0', '4rem', '0']
  - block: course-cards # Use the actual block name here, not 'custom' for Preact blocks based on docs
    # component: assets/hbx/blocks/course-cards # <--- ADD THIS LINE
    id: my-courses
    content:
      title: "My Teaching and Course Experience"
      cards:
        - title: "Introduction to Data Science"
          institution: "University of Academia"
          role: "Lead Instructor"
          years: "Fall 2023 - Spring 2024"
          students: "120"
          description: "Comprehensive course covering statistical foundations, machine learning, and data visualization."
          syllabus_url: "/uploads/data-science-syllabus.pdf" # Make sure this path is valid
          description_url: "https://www.university.edu/data-science-course"
        - title: "Advanced Machine Learning"
          institution: "University of Academia"
          role: "Teaching Assistant"
          years: "Spring 2023"
          students: "60"
          description: "Assisted in labs and grading for graduate-level ML concepts."
          syllabus_url: "#" # Use # for a placeholder if no syllabus
          description_url: "https://www.university.edu/advanced-ml"
        - title: "Web Development Fundamentals"
          institution: "Community College"
          role: "Guest Lecturer"
          years: "Summer 2022"
          students: "30"
          description: "Delivered a guest lecture on modern JavaScript frameworks."
        # Add more cards as needed
    design:
      columns: 2 # You can change this to 1, 3, or 4
      card_size: "big" # Try "small", "medium", or "large" to see the effect
      # card:
      #   css_class: 'glassmorphism-secondary noise-texture text-white'
      #   text_color: 'auto' # auto|light|dark
      #   overlay_opacity: 0.15 # 0.0-1.0 for contrast control
      # background:
      #   gradient:
      #     start: 'primary-500'
      #     end: 'primary-700'
      #     direction: 135
      #   css_class: 'cta-glassmorphism' # This should now work with appropriate CSS
      #   text_color: 'auto' # 'auto', 'light', or 'dark'
      #   overlay_opacity: 0.15 # 0.0-1.0
      # background:
      #   gradient:
      #     start: 'primary-700'
      #     end: 'primary-900'
      #     direction: 45 # Angle of the gradient
  - block: markdown
    content:
      title: "Overview of Courses Taught"
      text: |
        <h3 class="mb-4 text-3xl font-bold dark:text-white">Bachelor’s Level Courses</h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {{< teaching-course-card 
            title="CAS LX 110: Accents, Dialects, and Society"
            institution="Boston University (BU)"
            role="Teaching Fellow"
            years="Fall 2018 & Spring 2020"
            students="~100"
            description="Intro to sociolinguistic variation—dialect formation, community patterns, discrimination, media."
          >}}
          {{< teaching-course-card 
            title="CAS LX 120: Language and Music"
            institution="Boston University (BU)"
            role="Grader"
            years="Fall 2021"
            students="~30-40"
            description="Interdisciplinary: structure/cognition links between language & music, evolution, brain evidence."
          >}}
          {{< teaching-course-card 
            title="CAS LX 301/601: Introduction to Sound Systems"
            institution="Boston University (BU)"
            role="Course Assistant"
            years="Fall 2020"
            students="~25"
            description="Phonetics & phonology basics, hands-on transcription/acoustic analysis."
          >}}
          {{< teaching-course-card 
            title="Spanish 1101: Elementary Spanish I"
            institution="Louisiana State University (LSU)"
            role="Instructor"
            years="2012–2013"
            students="~25–30/section"
            description="Foundational Spanish—communicative approach to basic skills."
          >}}
          {{< teaching-course-card 
            title="Spanish 1102: Elementary Spanish II"
            institution="Louisiana State University (LSU)"
            role="Instructor"
            years="2012–2013"
            students="~25–30/section"
            description="Continuation: functional communication, past narration, cultural practices."
          >}}
        </div>

        <h3 class="mt-12 mb-4 text-3xl font-bold dark:text-white">High School Level Courses</h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {{< teaching-course-card 
            title="Elementary Spanish I"
            institution="Saint Joseph’s Academy (SJA)"
            role="Instructor"
            years="2014–2017"
            students="~25–30/section"
            description="Basic vocabulary; foundational speaking, reading, writing, listening skills."
          >}}
          {{< teaching-course-card 
            title="Elementary Spanish II"
            institution="Saint Joseph’s Academy (SJA)"
            role="Instructor"
            years="2014–2017"
            students="~25–30/section"
            description="Intermediate; extended communication, complex grammar, culture."
          >}}
          {{< teaching-course-card 
            title="Computer & Software Orientation"
            institution="Saint Joseph’s Academy (SJA)"
            role="Instructor"
            years="2016–2017"
            students="~25–30/section"
            description="Tech literacy, productivity software, academic/practical skills."
          >}}
        </div>

        <h3 class="mt-12 mb-4 text-3xl font-bold dark:text-white">Middle School Level Courses</h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {{< teaching-course-card 
            title="Introductory Spanish"
            institution="Academy of the Sacred Heart (ASH)"
            role="Instructor"
            years="2017–2018"
            students="~10–15/section"
            description="Basic vocab; conversational skills, cultural awareness."
          >}}
          {{< teaching-course-card 
            title="Basic Technology"
            institution="Academy of the Sacred Heart (ASH)"
            role="Instructor"
            years="2017–2018"
            students="~10–15/section"
            description="Computer fundamentals, safe online practices, basic software."
          >}}
        </div>
    design:
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
      # css_class: 'glassmorphism-secondary noise-texture text-white'
      # text_color: 'auto' # auto|light|dark
      # overlay_opacity: 0.15 # 0.0-1.0 for contrast control
      # background:
      #   gradient:
      #     start: 'primary-500'
      #     end: 'primary-700'
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