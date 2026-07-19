---
date: 2026-07-19
type: concept
status: active
tags:
  - concept
  - concept/methodology
  - methodology/toolbox
aliases:
  - methods toolbox
  - software for IR research
---

# IR Methods Toolbox

## Overview

The methods toolbox for International Relations research spans qualitative, quantitative, computational, and organisational tools. This note catalogues the principal software, databases, and resources used in IR research, with guidance on when and how to use each.

---

## Qualitative Software

### NVivo

**Primary use**: Coding interviews, focus groups, and discourse analysis. NVivo allows researchers to code textual data (interview transcripts, policy documents, media articles) into categories and themes, then query relationships between codes.

**When to use**: For qualitative research involving large volumes of textual data — elite interviews, diplomatic cables, parliamentary debates, media coverage.

**Strengths**: Robust coding framework, visualisation tools, supports mixed-methods designs.

### Atlas.ti

**Primary use**: Grounded theory development and qualitative data analysis. Atlas.ti emphasises theory-building through iterative coding and memo-writing.

**When to use**: When building theory inductively from qualitative data — process tracing, ethnographic research, discourse analysis.

**Strengths**: Intuitive interface, strong support for grounded theory methods, visual network tools.

### MAXQDA

**Primary use**: Mixed-methods research, combining qualitative coding with quantitative content analysis. MAXQDA supports mixed-methods designs that integrate qualitative and quantitative data.

**When to use**: For research projects that combine qualitative and quantitative approaches — QCA validation, mixed-methods designs.

**Strengths**: Mixed-methods integration, team collaboration features.

---

## Quantitative Software

### R

**Primary use**: Statistical analysis, data visualisation, and reproducible research. R is the dominant statistical platform in political science and IR.

**Key packages**:
- `tidyverse` — Data wrangling, visualisation, and analysis
- `lavaan` — Structural equation modelling (SEM)
- `stargazer` — Publication-quality regression tables
- `Zelig` — Unified statistical framework (King et al., 2003)
- `QCA` — Qualitative Comparative Analysis in R
- `igraph` — Network analysis
- `sf`, `tmap` — Spatial analysis and mapping

**When to use**: For any quantitative analysis, from descriptive statistics to advanced modelling. R is preferred for reproducible research (markdown notebooks, Shiny dashboards).

### Stata

**Primary use**: Statistical analysis, particularly in quantitative IR and comparative politics. Stata has been the traditional workhorse of quantitative political science.

**When to use**: For standard statistical analyses (regression, panel models, survival analysis). Many existing datasets and codebooks are written in Stata.

**Strengths**: Excellent documentation, large user community, strong support for panel data and time-series analysis.

### Python

**Primary use**: Data science, machine learning, natural language processing, and web scraping. Python is increasingly used in computational IR.

**Key libraries**:
- `pandas` — Data manipulation
- `statsmodels`, `scikit-learn` — Statistical modelling and machine learning
- `nltk`, `spacy`, `transformers` — Natural language processing
- `networkx` — Network analysis
- `geopandas` — Spatial analysis
- `Mesa` — Agent-based modelling

**When to use**: For machine learning, text-as-data, web scraping, and computational methods. Python is preferred when integrating statistical analysis with NLP or simulation.

---

## Visualisation

### Gephi

**Primary use**: Network visualisation and analysis. Gephi is the standard tool for visualising social networks, alliance networks, trade networks, and conflict networks in IR.

**When to use**: For analysing and visualising relational data — who is connected to whom, how networks evolve over time.

### QGIS

**Primary use**: Geographic Information System for spatial analysis. QGIS is the leading open-source GIS platform.

**When to use**: For conflict mapping, spatial analysis of environmental change, border disputes, and any research involving geographic data.

### ggplot2 (R)

**Primary use**: Statistical data visualisation. ggplot2 produces publication-quality figures based on the grammar of graphics.

**When to use**: For any quantitative visualisation — scatter plots, time series, regression diagnostics, maps.

### Tableau

**Primary use**: Interactive data visualisation and dashboards. Tableau is widely used in policy research for presenting data to non-academic audiences.

**When to use**: For interactive dashboards, policy briefings, and presentations. Less suited to academic publication but excellent for research communication.

---

## Data Sources

### Conflict and Security

| Dataset | Coverage | Variables | Source |
|---------|----------|-----------|--------|
| **UCDP/PRIO Armed Conflict Dataset** | 1946-present | Conflict onset, termination, intensity, dyadic data | Uppsala University |
| **MID (Militarised Interstate Disputes)** | 1816-2014 | Interstate disputes, escalation, fatalities, revisionist claims | Correlates of War |
| **Correlates of War Project** | 1816-2012 | Alliances, trade, war, national capability | COW Project |
| **ACLED (Armed Conflict Location & Event Data)** | 1997-present | Geolocated conflict events | Armed Conflict Location & Event Data Project |
| **GDELT** | 1979-present | Global events, news, sentiment, networks | Georgetown University |

### Governance and Democracy

| Dataset | Coverage | Variables | Source |
|---------|----------|-----------|--------|
| **V-Dem Institute** | 1789-present | 400+ democracy indicators | V-Dem Institute, University of Gothenburg |
| **Polity IV** | 1800-present | Democracy-autocracy scores | Center for Systemic Peace |
| **Freedom House** | 1973-present | Political rights, civil liberties | Freedom House |

### Economic

| Dataset | Coverage | Variables | Source |
|---------|----------|-----------|--------|
| **World Bank WDI** | 1960-present | GDP, population, health, education, environment | World Bank |
| **UN Comtrade** | 1962-present | Bilateral trade flows | UN Statistics Division |
| **World Economic Outlook (IMF)** | 1980-present | Macroeconomic indicators | IMF |
| **Penn World Table** | 1950-present | GDP, productivity, capital stock | Groningen Growth and Development Centre |

---

## Reference Management

### Zotero

**Primary use**: Reference management, PDF annotation, and collaborative research libraries.

**Why Zotero is preferred for IR research**:
- Open-source and free
- Excellent browser integration (capture references from any website)
- Supports collaborative libraries (shared research teams)
- Integrates with LaTeX/BibTeX, Word, and Google Docs
- Plugin ecosystem (Better BibTeX, Zotero Connector)

### Mendeley

**Primary use**: Reference management and academic social networking.

**When to use**: When working with institutional mandates that require Elsevier tools, or when collaborating with researchers who use Mendeley.

### EndNote

**Primary use**: Reference management for large document collections.

**When to use**: When institutional licenses are available; particularly useful for very large libraries (10,000+ references).

---

## Writing Tools

### LaTeX + BibTeX

**Primary use**: Typesetting academic papers and managing bibliographies. LaTeX is the standard for mathematical and formal work; BibTeX handles citation management.

**When to use**: For journal submissions, theses, and any document requiring mathematical notation, formal models, or complex tables.

**Key tools**: Overleaf (collaborative LaTeX editor), texmaker, TeXstudio.

### Obsidian

**Primary use**: Networked note management using markdown files and wikilinks. This knowledge base is built in Obsidian.

**When to use**: For research note-taking, literature synthesis, and maintaining a personal knowledge base. Obsidian's wikilink system allows connecting notes across topics — ideal for building an interconnected IR research library.

**Strengths**: Local-first (no cloud dependency), graph view for visualising connections, extensive plugin ecosystem, markdown-based (future-proof).

### Markdown

**Primary use**: Lightweight markup for reproducible research, documentation, and version-controlled writing.

**When to use**: For reproducible research notebooks (R Markdown, Quarto), research documentation, and collaborative writing with version control (Git/GitHub).

---

## AI-Assisted Research

### Opportunities

- **Literature review** — LLMs can synthesise large volumes of literature, identify themes, and suggest reading lists
- **Coding** — LLMs can assist with statistical programming (R, Python, Stata), debugging, and data wrangling
- **Brainstorming** — LLMs can generate research questions, theoretical frameworks, and methodological approaches
- **Writing** — LLMs can assist with drafting, editing, and formatting academic prose

### Limitations

- **Hallucination** — LLMs may generate plausible but false claims, citations, or data
- **Bias** — LLMs reflect the biases of their training data, which may reproduce Western-centrism in IR
- **Opacity** — LLM reasoning is not transparent; reproducing results is difficult
- **Ethical considerations** — Use of LLMs in academic research raises questions about authorship, intellectual property, and academic integrity
- **Date limitations** — Training data has a cutoff; LLMs may not know about recent events or publications

### Best Practices

- Always verify LLM-generated claims against primary sources
- Use LLMs as tools to assist, not replace, human judgment
- Disclose AI assistance in research publications (per journal guidelines)
- Be aware of the limitations of LLM training data for non-Western or non-English sources

---

## Related Concepts

- [[Epistemology in IR]] — Methodological choices reflect epistemological commitments
- [[Research Design for IR]] — How to choose and apply the right tools
- [[Qualitative Methods in IR]] — Qualitative tools and approaches
- [[Quantitative Methods in IR]] — Quantitative tools and approaches
- [[Formal Modeling and Agent-Based Modeling]] — Computational tools and approaches
- [[MOC_Methodology]] — Overview of the methodology section

---

## Sources

- King, G., Honaker, J., Joseph, A. & Scheve, K. (2001). "Analyzing Incomplete Political Science Data." *American Political Science Review*, 95(1), 49-69.
- Munzert, S., Rubba, C., Meißner, P. & Nyhuis, D. (2014). *Automated Data Collection with R*. Wiley.
- Walker, H.E. (2017). "Political Science Software: Programs for Research and Training." PS: *Political Science & Politics*, 50(1), 235-240.
