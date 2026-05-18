---
title: "Filled Pauses & Language Contact in Boston Spanish"
reading_time: false
show_date: false

summary: "Cómo la experiencia bilingüe modifica la calidad vocálica de las pausas llenas (uh/ah vs. eh) en hablantes de español bostonians."

tags:
  - Sociolinguistics
  - Phonetics
  - Language Contact
  - Spanish
  - Bilingualism
  - Covariation

tech_stack:
  - Praat
  - R

links:
  - name: "Paper — English (2022)"
    icon: 📄
    url: /es/publications/2022_erker_vidal-covas_english/
  - name: "Artículo — Español (2022)"
    icon: 📄
    url: /es/publications/2022_erker_vidal-covas_spanish/

featured: true
status: "Activo"
draft: false
---

Cuando las personas hablan, a menudo hacen pausas con sonidos cortos como *uh*, *ah* o *eh* mientras planifican lo que van a decir. Estas **pausas llenas** mantienen el turno conversacional y ayudan a los oyentes a seguir el hilo, pero varían según el idioma. Los hablantes de inglés tienden a usar *uh/um*, mientras que los de español suelen usar más *eh/em*. Este proyecto investiga cómo los hablantes bilingües de español en Boston utilizan estos pequeños sonidos de vacilación, revelando cómo el habla cotidiana refleja patrones de **contacto lingüístico y cambio sonoro**.

**En resumen**

| | |
|---|---|---|
| **Diseño** | Entrevistas sociolingüísticas del Spanish in Boston Corpus |
| **Hablantes** | Hispanohablantes de Boston (N=80, ≈6,364 tokens, 13 orígenes nacionales) |
| **Métodos** | Análisis acústico en Praat <br> Modelos de efectos mixtos en R |{{< button url="#" size="sm"icon="custom/praatlogo" style="outline" >}}Praat{{< /button >}} {{< button url="#" size="sm" icon="devicon/rstudio" style="outline" >}}RStudio{{< /button >}}
| **Predictores** | Edad de llegada, uso del lenguaje con interlocutores y contexto fonético |
| **Variable** | Calidad vocálica en pausas llenas: [e] frontal (*eh*) vs. [a]/[ə] centralizado (*ah*, *uh*) |

**Hallazgos clave**
- Los hablantes con **mayor exposición al inglés** (llegada temprana, redes más bilingües) prefieren **pausas centralizadas** (**[a]**, **[ə]**), mientras que los hablantes dominantes en español prefieren [e].
- El contexto fonético tiene poca influencia: el patrón está impulsado **socialmente, no estructuralmente**.
- El cambio es conservador: los bilingües **reorganizan** las normas de pausa en lugar de adoptar formas similares al inglés de forma generalizada.
