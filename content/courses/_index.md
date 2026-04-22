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
  - block: collection
    id: courses
    content:
      title: Courses
      filters:
        folders: courses
        # tag: Course
        # kinds:
        #   - section
    design:
      view: card
      show_read_time: false
      show_date: false
      show_read_more: false
      columns: 1
  - block: cta-button-list
    content:
      buttons:
        - text: "Get in Touch"
          url: "#contact"
        - text: "Download Resume"
          url: "#resume"
---
I didn’t have a chance to test it, but the output was this (input was just _Create a portfolio site and give me links to the documentation of every block in Hugo Blox_):

```
---
title: "My Portfolio"
summary: "Showcasing my work and skills"
date: 2026-04-17
type: landing
sections:
  - block: hero
    content:
      title: "Welcome to My Portfolio"
      text: "Discover my projects and experience."
      primary_action:
        text: "View My Work"
        url: "#portfolio"
  - block: portfolio
    content:
      title: "My Projects"
      projects:
        - title: "Project 1"
          description: "A brief description of Project 1."
          url: "#project1"
        - title: "Project 2"
          description: "A brief description of Project 2."
          url: "#project2"
  - block: testimonials
    content:
      title: "What People Say"
    
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