---
date: 2026-07-19
type: concept
status: active
tags:
  - concept
  - concept/methodology
  - methodology/quantitative
aliases:
  - quantitative methods
  - quant methods IR
  - statistical methods IR
---

# Quantitative Methods in IR

## Overview

Quantitative methods in International Relations use **numerical data, statistical analysis, and formal models** to test hypotheses across many cases. The quantitative tradition in IR emerged with the "behavioral revolution" of the 1960s, when scholars like J. David Singer and Rudolph Rummel sought to make IR more "scientific" by applying statistical methods to international phenomena (Singer, 1961).

Quantitative methods are dominant in American IR, where large-N studies using datasets like the Correlates of War, UCDP/PRIO, and V-Dem produce generalisable findings about the causes of war, the conditions for cooperation, and the dynamics of power. The quantitative tradition is closely associated with [[Epistemology in IR#Positivism|positivist epistemology]].

---

## Correlation and Regression

### Bivariate and Multivariate Analysis

The foundation of quantitative IR is **regression analysis** — estimating the relationship between independent and dependent variables while controlling for confounding factors.

| Method | Use Case | Example in IR |
|--------|----------|---------------|
| **OLS regression** | Continuous outcomes | Predicting military expenditure from threat level |
| **Logistic regression** | Binary outcomes (war/peace, alliance/no alliance) | Predicting civil war onset from economic indicators |
| **Ordered logistic** | Ordinal outcomes (democracy scores) | Predicting regime type from development level |
| **Fixed effects panel models** | Controlling for unobserved unit-level variation | Controlling for country-specific factors in longitudinal conflict studies |

### The Causal Inference Problem

Regression establishes **association**, not **causation**. The fundamental challenge of quantitative IR is the **omitted variable bias** — unobserved factors that are correlated with both the independent and dependent variable can produce spurious correlations. For example, trade and peace may be correlated not because trade causes peace but because democratic states (which tend to trade) also tend to be peaceful (McDonald, 2009).

---

## Event Data Analysis

### WEIS, GDELT, ICEWS

Event data codes discrete political interactions (diplomatic statements, military actions, protests, treaties) into structured datasets.

| Dataset | Coverage | Period | Strengths |
|---------|----------|--------|-----------|
| **WEIS** (World Event Interaction Survey) | Global | 1966-2013 | Manual coding, high quality |
| **ICEWS** (Integrated Crisis Early Warning System) | Global | 1995-2014 | Machine-coded, event-level |
| **GDELT** (Global Database of Events, Language, and Tone) | Global | 1979-present | Massive scale, real-time |
| **UCDP** (Uppsala Conflict Data Program) | Armed conflicts | 1946-present | Detailed conflict coding |

### Strengths

- **Systematic and replicable** — Coding rules are explicit; results can be reproduced
- **Temporal analysis** — Can track escalation, de-escalation, and seasonal patterns
- **Large-N** — Cover virtually all states and all time periods

### Limitations

- **Decontextualised** — A "military action" code strips out context, intent, and meaning
- **Reliability** — Machine coding (GDELT) has significant error rates; manual coding (WEIS) is labour-intensive
- **Ecological fallacy** — Patterns across events may not apply to individual cases

---

## Spatial Analysis

### GIS in IR

Geographic Information Systems (GIS) enable the spatial analysis of international phenomena:

- **Conflict mapping** — Where do battles occur? How does conflict spread across space?
- **Border disputes** — Spatial analysis of territorial claims, ethnic homelands, and resource distribution
- **Environmental change** — Climate change, sea-level rise, and their spatial relationship to conflict and migration
- **Trade networks** — Gravity models of trade, spatial patterns of economic integration

Key tools: QGIS, ArcGIS, R (sf, tmap), Python (geopandas).

---

## Survival Analysis

### Duration of Wars, Alliances, and Sanctions

Survival analysis (also called duration analysis or event-history analysis) studies **how long** it takes for an event to occur. In IR, this is used for:

- **Duration of wars** — What factors make wars longer or shorter? (Fearon & Laitin, 2003)
- **Alliance duration** — How long do alliances last? (Bennett, 1997)
- **Sanction duration** — How long do sanctions persist before being lifted or escalating? (Hufbauer, Schott, Elliott & Oegg, 2007)
- **Regime transitions** — How long do regimes survive?

### Cox Proportional Hazards Model

The **Cox model** (Cox, 1972) is the standard tool: it estimates the hazard rate (the probability of an event occurring at time *t*, given survival to time *t*) as a function of covariates. It is semi-parametric — it does not require specifying the baseline hazard distribution.

---

## Bayesian Methods

### Updating Beliefs with Evidence

Bayesian inference updates **prior beliefs** (what we thought before seeing the evidence) with **likelihood** (the probability of seeing the evidence given a hypothesis) to produce **posterior beliefs** (what we think after seeing the evidence). The logic:

```
P(H|E) = P(E|H) × P(H) / P(E)
```

### Why Bayesianism Matters in IR

- **Prior beliefs** — Analysts bring prior expectations about threats, alliances, and outcomes. Bayesianism makes these explicit rather than hidden.
- **Rational updating** — When new intelligence arrives (satellite imagery, diplomatic signals), how should beliefs be updated? Bayesian logic provides a formal framework.
- **Small-N problems** — Bayesian methods can incorporate substantive knowledge into analysis, which is valuable when cases are limited.
- **Uncertainty** — Bayesian posterior distributions provide a natural way to express uncertainty about claims (Western, 2012).

### Applications

- **Intelligence analysis** — Bayesian updating for threat assessment
- **Election forecasting** — Combining polls, economic indicators, and historical patterns
- **Nuclear proliferation** — Updating beliefs about a state's nuclear intentions based on observable indicators

---

## Machine Learning / Text-as-Data

### Computational Text Analysis

Text-as-data methods treat written or spoken language as data to be analysed computationally. Applications in IR include:

- **Sentiment analysis** — Tracking the tone of diplomatic cables, news coverage, and social media
- **Topic modelling** — Discovering latent themes in large corpora (e.g., UN General Assembly speeches, congressional debates)
- **Automated conflict prediction** — Using text features to predict political instability
- **Named entity recognition** — Extracting actors, events, and relationships from text

Key references: Grimmer & Stewart (2013), "Text as Data"; Hopkins & King (2010); King, Lam & Roberts (2017).

### LLMs as a New Tool

Large Language Models (GPT, Claude, Llama) present new opportunities and challenges for quantitative IR:

- **Opportunities**: Automated coding at scale, translation, literature synthesis, hypothesis generation
- **Challenges**: Hallucination, opacity, training bias, reproducibility concerns, and the fundamental question of whether LLMs "understand" political phenomena

---

## Natural Experiments

### Instrumental Variables and Regression Discontinuity

Natural experiments exploit **exogenous variation** — events or institutional rules that create quasi-random assignment of treatment — to identify causal effects in observational data.

| Method | Logic | Example in IR |
|--------|-------|---------------|
| **Instrumental variables (IV)** | Uses a third variable that affects the independent variable but not the dependent variable except through the independent variable | Oil wealth as instrument for autocracy (Ross, 2012) |
| **Regression discontinuity (RD)** | Exploits a cutoff rule that assigns treatment above/below a threshold | Close elections as instrument for leader type (Fearon, 2012) |
| **Difference-in-differences (DiD)** | Compares pre-post changes in treatment vs control groups | Impact of sanctions on economic growth (Hufbauer et al., 2007) |

### The Challenge

Natural experiments are rare in IR because international politics is rarely "randomised." The most convincing natural experiments exploit institutional rules (electoral thresholds, geographic boundaries, treaty cut-off dates) that create exogenous variation (Fearon & Laitin, 2003).

---

## Key Databases

| Database | Coverage | Variables | Source |
|----------|----------|-----------|--------|
| **UCDP/PRIO Armed Conflict Dataset** | 1946-present | Conflict onset, termination, intensity | Uppsala University |
| **MID (Militarised Interstate Disputes)** | 1816-2014 | Interstate disputes, escalation, fatalities | Correlates of War |
| **Correlates of War Project** | 1816-2012 | Alliances, trade, war, capability | COW Project |
| **V-Dem Institute** | 1789-present | 400+ democracy indicators | V-Dem Institute |
| **Polity IV** | 1800-present | Democracy-autocracy scores | Center for Systemic Peace |
| **World Bank WDI** | 1960-present | GDP, population, health, education, environment | World Bank |
| **UN Comtrade** | 1962-present | Bilateral trade flows | UN Statistics Division |
| **GDELT** | 1979-present | Global events, news, sentiment | Georgetown University |
| **ICEWS** | 1995-2014 | Political events, crisis indicators | DARPA / Harvard |

---

## Strengths and Limitations

### Strengths

- **Generalisability** — Findings apply across large populations of states and years
- **Replicability** — Data and code can be shared, enabling replication and extension
- **Hypothesis testing** — Systematic evaluation of theoretical predictions
- **Bias estimation** — Statistical tools can identify and correct for selection bias, omitted variable bias, and measurement error

### Limitations

- **Decontextualisation** — Strips context from cases; may miss mechanisms that operate within cases
- **Measurement problems** — Concepts like "democracy," "power," and "threat" are difficult to operationalise quantitatively
- **Ecological fallacy** — Aggregate patterns may not apply to individual cases
- **Correlation ≠ causation** — Even with sophisticated methods, causal claims are often contested
- **Data availability** — Many important phenomena (covert operations, back-channel diplomacy) are not quantifiable
- **Publication bias** — Significant results are more likely to be published, inflating effect sizes

---

## Related Concepts

- [[Epistemology in IR]] — Quantitative methods are associated with positivist epistemology
- [[Research Design for IR]] — How to design quantitative research in IR
- [[Qualitative Methods in IR]] — The alternative methodological tradition
- [[Formal Modeling and Agent-Based Modeling]] — Computational and formal approaches
- [[IR Methods Toolbox]] — Software and tools for quantitative research
- [[Process Tracing]] — Complements quantitative analysis with within-case evidence

---

## Sources

- Bennett, D.S. (1997). "Democracy, Regime Change, and Rhetorical Shift." *Journal of Conflict Resolution*, 41(1), 119-142.
- Cox, D.R. (1972). "Regression Models and Life-Tables." *Journal of the Royal Statistical Society*, 34(2), 187-220.
- Fearon, J.D. (2012). "Close Elections as Instruments for Determining Leader and Regime Type." Working paper.
- Fearon, J.D. & Laitin, D.D. (2003). "Ethnicity, Insurgency, and Civil War." *American Political Science Review*, 97(1), 75-90.
- Grimmer, J. & Stewart, B.M. (2013). "Text as Data." *Political Analysis*, 21(3), 267-297.
- King, G., Lam, P. & Roberts, M.E. (2017). "Sparse and Imperfect Data." *Political Analysis*, 25(1), 58-75.
- McDonald, P.J. (2009). "The Invisible Hand of Peace." *Cambridge University Press*.
- Ross, M. (2012). *The Oil Curse*. Princeton University Press.
- Singer, J.D. (1961). "The Level-of-Analysis Problem in International Relations." *World Politics*, 14(1), 77-92.
- Western, B. (2012). "Bayesian and frequentist inference in observational studies." *Annual Review of Political Science*, 15, 29-44.
