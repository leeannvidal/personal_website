---
title: "Application Build System: Modular LaTeX & AI Workflow Automation"
show_date: false
reading_time: false
weight: 3

summary: "A version-controlled LaTeX pipeline that assembles tailored cover letters and application packets from reusable modules, extended with Claude Code agents and skills that check documents for ATS problems and keep the repository clean."
tags:
  - Tech
  - Automation
  - AI Agents
  - LaTeX
  - Python
tech_stack:
  - LaTeX (XeLaTeX)
  - Make & latexmk
  - Python
  - Git & GitHub
  - VS Code
  - Claude Code
status: "Personal Project"
featured: true
---

## Overview
Applying for roles in research, tech, and international organizations means producing many tailored documents that all have to stay accurate, consistent, and readable by applicant-tracking systems. I turned that work into a build system: documents are assembled from reusable, version-controlled modules, and AI agents take over the checks that used to be manual.

## Stage 1: Modular LaTeX (before AI tools)
- Built a cover-letter system on two axes, inspired by my partner's simpler version: a **mode** (academia, postdoc, tech, consulting, international organizations) selects the generic paragraphs, and a short **per-application file** supplies the employer details
- Extended that per-application file to drive my research and teaching statements and writing samples, so one form controls every document in an application
- Any paragraph can be replaced for a single application; if the replacement is left empty, the generic version is used automatically
- Wrote optional-field macros so a blank field (team, department, job reference) disappears cleanly instead of leaving stray words
- Compiled from VS Code with a Makefile and latexmk, with no separate LaTeX editor; combined packets merge the letter, statements, and CV into one PDF
- A new tailored letter meant filling in one short file instead of rewriting a whole document

{{< button url="https://github.com/leeannvidal/latex-application-kit" new_tab="true" size="md" align="center" icon="brands/github" style="outline" >}}Template on GitHub, with a fictional example applicant{{< /button >}}

## Stage 2: AI Agents & Skills (Claude Code)
- **ATS review skill:** a Python checker scans each built PDF for text-extraction hazards (ligatures, icon glyphs, footer text interleaving with the body, section headings); the agent then traces each finding to its source line and fixes it only on approval
- **Repo-sync skill:** screens every change for credentials and personal records, groups the rest into logical commits, shows the plan for approval, and pushes without ever force-pushing
- **Profile & drafting agents:** maintain a verified professional profile and writing voice, and suggest cover-letter edits grounded in the verified facts in that profile; I review every suggestion and decide what goes in

## Design Principles
- **Write once, reuse everywhere:** each paragraph and field is written once and reused, so documents stay consistent
- **Human in the loop:** agents propose, I approve
- **Reproducible:** every document rebuilds from version-controlled source with one command
