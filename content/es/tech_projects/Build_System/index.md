---
title: "Sistema de Generación de Solicitudes: LaTeX Modular y Automatización con IA"
show_date: false
reading_time: false
weight: 3

summary: "Un flujo en LaTeX con control de versiones que ensambla cartas de presentación y paquetes de solicitud a medida a partir de módulos reutilizables, ampliado con agentes y skills de Claude Code que revisan los documentos para sistemas ATS y mantienen limpio el repositorio."
tags:
  - Tech
  - Automation
  - AI Agents
  - LaTeX
  - Python
tech_stack:
  - LaTeX (XeLaTeX)
  - Make y latexmk
  - Python
  - Git y GitHub
  - VS Code
  - Claude Code
status: "Proyecto Personal"
featured: true
---

## Descripción General
Postular a puestos en investigación, tecnología y organizaciones internacionales implica producir muchos documentos a medida que deben mantenerse precisos, coherentes y legibles para los sistemas de seguimiento de candidatos (ATS). Convertí ese trabajo en un sistema de generación: los documentos se ensamblan a partir de módulos reutilizables con control de versiones, y los agentes de IA se encargan de las revisiones que antes eran manuales.

## Etapa 1: LaTeX Modular (antes de las herramientas de IA)
- Construí un sistema de cartas de presentación con dos ejes, inspirado en la versión más sencilla de mi pareja: un **modo** (academia, posdoctorado, tecnología, consultoría, organizaciones internacionales) elige los párrafos genéricos, y un breve **archivo por solicitud** aporta los datos del empleador
- Amplié ese archivo por solicitud para que también controle mis declaraciones de investigación y docencia y mis muestras de escritura, de modo que un solo formulario rige todos los documentos de una solicitud
- Cualquier párrafo puede sustituirse para una sola solicitud; si la sustitución queda vacía, se usa automáticamente la versión genérica
- Programé macros de campos opcionales para que un campo vacío (equipo, departamento, referencia del puesto) desaparezca sin dejar palabras sueltas
- Compilación desde VS Code con un Makefile y latexmk, sin un editor de LaTeX aparte; los paquetes combinados unen la carta, las declaraciones y el CV en un solo PDF
- Una nueva carta a medida pasó a significar completar un archivo breve en lugar de reescribir todo un documento

{{< button url="https://github.com/leeannvidal/latex-application-kit" new_tab="true" size="md" align="center" icon="brands/github" style="outline" >}}Modelo en GitHub, con un candidato ficticio de ejemplo{{< /button >}}

## Etapa 2: Agentes y Skills de IA (Claude Code)
- **Skill de revisión ATS:** un verificador en Python analiza cada PDF generado en busca de problemas de extracción de texto (ligaduras, glifos de iconos, texto del pie de página intercalado con el cuerpo, encabezados de sección); el agente rastrea cada hallazgo hasta su línea de origen y lo corrige solo con aprobación
- **Skill de sincronización del repositorio:** revisa cada cambio en busca de credenciales y datos personales, agrupa el resto en commits lógicos, muestra el plan para su aprobación y publica sin forzar nunca el historial
- **Agentes de perfil y redacción:** mantienen un perfil profesional verificado y mi estilo de escritura, y sugieren cambios a las cartas de presentación basados en los hechos verificados de ese perfil; yo reviso cada sugerencia y decido qué se incluye

## Principios de Diseño
- **Escribir una vez, reutilizar siempre:** cada párrafo y cada campo se escribe una sola vez y se reutiliza, así que los documentos se mantienen coherentes
- **Control humano:** los agentes proponen, yo apruebo
- **Reproducible:** cada documento se regenera desde el código fuente con un solo comando
