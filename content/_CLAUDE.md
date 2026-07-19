# IR Vault Operating Manual

## Vault Structure

```
/
├── Daily/           — Daily notes (YYYY-MM-DD.md)
├── Weekly/          — Weekly reviews
├── Courses/         — Per-semester course folders (Y2S1/, Y2S2/, etc.)
├── Lectures/        — Individual lecture notes
├── Readings/        — Reading notes (Articles/, Books/, Reports/)
├── Assignments/     — Essays, presentations, projects
├── Theories/        — IR theory deep-dives (Realism/, Liberalism/, etc.)
├── Concepts/        — Key IR concepts cross-referenced to theories
├── Regions/         — Regional studies (Europe/, Asia/, MiddleEast/, etc.)
├── Actors/          — State, IO, NGO, MNC analysis
├── Methodology/     — Research methods and approaches
├── Exams/           — Exam preparation and past papers
├── Research/        — Thesis research and third-year projects
├── Sources/         — Hyperlinked academic sources, journals, institutions
├── Templates/         — Note templates
└── Archive/         — Completed/past work
```

## Naming Conventions
- Daily: `YYYY-MM-DD.md`
- Courses: `CourseCode - Course Name.md`
- Lectures: `YYYY-MM-DD - Lecture Topic.md`
- Readings: `Author, Year - Title.md`
- Theories/Concepts: `Concept Name.md`
- Regions: `Region - Topic.md`

## Frontmatter

All notes get frontmatter:
```yaml
---
date: YYYY-MM-DD
type: course | lecture | reading | concept | theory | essay | exam-prep
status: active | draft | complete | reviewed
tags: [ir, theory-name, region, topic]
---
```

## Core Principles
1. Every lecture gets a note with backlinks to theories, concepts, and readings
2. Readings are summarised and linked to the relevant lecture + course
3. Theories and concepts cross-reference each other via `[[wikilinks]]`
4. Essays/assignments: track in Assignments/ and link to course + sources
5. Weekly reviews consolidate learning and track progress
6. Before creating any note, check if one already exists

## Key Links
- [[Dashboard]]
- [[Course Tracker]]
- [[Reading List]]