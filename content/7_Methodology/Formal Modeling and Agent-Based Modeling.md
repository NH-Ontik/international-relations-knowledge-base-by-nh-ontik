---
date: 2026-07-19
type: concept
status: active
tags:
  - concept
  - concept/methodology
  - methodology/formal
aliases:
  - formal modeling IR
  - agent-based modeling
  - ABM
---

# Formal Modeling and Agent-Based Modeling

## Overview

Formal modeling and agent-based modeling represent two distinct but related approaches to **computational and mathematical analysis** in International Relations. Formal models — primarily game-theoretic — use mathematical logic to derive implications from assumptions about rational actors and strategic interaction. Agent-based models (ABMs) use computer simulation to study how individual actors' interactions produce emergent collective outcomes.

Both approaches depart from empirical analysis (whether qualitative or quantitative) by engaging in **theoretical reasoning** — deriving conclusions from explicitly stated assumptions rather than observing empirical regularities.

---

## Formal Game Theory Models

### The Mathematical Language of Strategic Interaction

Game theory provides a formal language for analysing situations where actors' outcomes depend on their own choices *and* the choices of others. The core elements are:

- **Players** — Decision-making units (states, leaders, organisations)
- **Strategies** — Available courses of action
- **Payoffs** — Outcomes associated with each combination of strategies
- **Information** — What players know about each other's strategies and payoffs
- **Equilibrium** — A set of strategies where no player can improve their outcome by unilaterally changing their strategy

### Key Game Forms in IR

| Game Form | Structure | IR Application |
|-----------|-----------|----------------|
| **Extensive form (game tree)** | Sequential decisions with information sets | Diplomatic negotiations, crisis bargaining |
| **Signalling game** | Informed actor sends signal; uninformed actor responds | Deterrence, credibility, cheap talk |
| **Mechanism design** | Designing rules to achieve desired outcomes | International institutions, treaty design |
| **Repeated game** | Same game played multiple times | Alliance maintenance, trade agreements, sanctions |
| **Bargaining model** | Division of surplus under disagreement point | War initiation, territorial disputes |

### Key Formal Models in IR

**Fearon (1995) — Rationalist Explanations for War**

Fearon's foundational paper asked: if war is costly and inefficient, why do rational states fight? He proposed three mechanisms:

1. **Private information and miscalculation** — States have private information about their military capabilities or resolve; war occurs when diplomacy fails to reveal this information.
2. **Commitment problems** — Even if states reach agreement, they cannot credibly commit to its enforcement in the future.
3. **Indivisibility** — Some issues (territory, ideology) cannot be divided, making compromise impossible.

**Signalling Models in Deterrence**

Schelling (1960) formalised deterrence as a signalling game: a state must credibly signal its commitment to retaliate against aggression. **Costly signals** (actions that are expensive to fake, like mobilising troops) convey information about resolve, while **cheap talk** (costless verbal threats) is often not credible.

**Crisis Bargaining**

Fearon (1995), Slantchev (2011), and others model crises as games of incomplete information where states use military posturing, ultimatums, and diplomacy to reveal or conceal their resolve. War occurs as a breakdown of the bargaining process, not as a deliberate choice.

### Applications to Contemporary Issues

- **Nuclear deterrence** — How do states maintain credible deterrence? Formal models of extended deterrence (Gelpi, 2009).
- **Trade agreements** — Why do states join trade institutions? Commitment and enforcement models (Maggi, 1999).
- **Alliance formation** — When do states form alliances? Formal models of balancing and bandwagoning (Smith, 1995).
- **Civil war** — Bargaining models of civil war onset and termination (Walter, 2002).

---

## Agent-Based Models (ABM)

### Bottom-Up Simulation

Agent-based models simulate the behaviour of individual **agents** (states, leaders, organisations, individuals) following simple rules, and study the **emergent properties** that arise from their interactions. Unlike game theory, which solves for equilibrium outcomes, ABMs explore dynamics — how systems evolve over time without necessarily reaching equilibrium.

### Core Components of an ABM

1. **Agents** — Discrete entities with attributes, decision rules, and interaction protocols
2. **Environment** — The space (physical or social) in which agents interact
3. **Rules** — How agents update their behaviour based on their environment and interactions
4. **Emergence** — Collective patterns that arise from individual-level rules but are not reducible to them

### Applications in IR

| Application | Key Model | Insight |
|------------|-----------|---------|
| **Arms race dynamics** | Richardson's arms race model (1960) | Endogenous escalation and spirals |
| **Norm diffusion** | Axelrod (1997) cultural evolution model | How norms spread through social networks |
| **Ethnic conflict** | Cederman (2003) ABM of ethnic mobilisation | How territorial exclusion produces conflict |
| **Trade networks** | Watts & Strogatz (1998) network formation | How small-world networks shape trade patterns |
| **Migration flows** | Epstein & Axtell (1996) *Growing Artificial Societies* | Emergent migration from simple agent rules |
| **Electoral competition** | Epstein (2006) *Generative Social Science* | How political competition evolves dynamically |

### Key Texts

- **Epstein & Axtell (1996)**, *Growing Artificial Societies: Social Science from the Bottom Up* — The foundational ABM work, studying artificial societies with emergent properties.
- **Axelrod (1997)**, *The Complexity of Cooperation* — Agent-based models of cooperation, norms, and cultural evolution.
- **Cederman (2003)**, "Modeling the Size of Wars" — ABM of ethnic conflict and territorial dispute.
- **Epstein (2006)**, *Generative Social Science* — The "generative social science" programme: using ABMs to explain macro-level patterns from micro-level rules.

---

## Computational IR

### The Emerging Field

Computational IR applies digital methods, big data, and computational tools to study international politics. It draws on:

- **Natural language processing (NLP)** — Analysing diplomatic texts, media, and speeches at scale
- **Network analysis** — Studying alliance networks, trade networks, and conflict networks
- **Machine learning** — Predicting conflict, election outcomes, and policy decisions
- **Simulation** — ABMs and system dynamics models

### Key Scholars

- **Ryan Kennedy** — Computational methods in IR
- **Nils Metternich** — Spatial models of conflict diffusion
- **Page Fortna** — Quantitative analysis of peacekeeping (computational and statistical)
- **Geller & Niemeyer** — Formal and computational approaches to alliance dynamics

---

## When to Use Formal vs Computational Methods

| Criterion | Formal Models | Agent-Based Models |
|-----------|--------------|-------------------|
| **Purpose** | Derive logical implications from assumptions | Explore emergent dynamics from simple rules |
| **Level of analysis** | Macro (equilibrium outcomes) | Micro-to-macro (emergence) |
| **Assumptions** | Strong (rationality, common knowledge) | Flexible (can relax rationality, add bounded rationality) |
| **Dynamics** | Static (comparative statics) | Dynamic (time-step evolution) |
| **Equilibrium** | Solves for equilibrium | May or may not reach equilibrium |
| **Validation** | Compared against empirical implications | Validated against empirical patterns, calibration |
| **Best for** | Causal logic, mechanism identification | Complexity, nonlinearity, emergence |

### Choosing Between Them

- Use **formal game theory** when: you want to derive precise, testable predictions from rationality assumptions; when strategic interaction is central; when you want to identify the *logic* of a mechanism.
- Use **ABMs** when: you want to explore how micro-level rules produce macro-level patterns; when you suspect emergent properties (e.g., arms race spirals, norm cascades); when the system is too complex for closed-form solutions.

---

## Critiques

### Unrealistic Assumptions

Formal models are often criticised for assuming **full rationality**, **common knowledge**, and **complete information**. These assumptions rarely hold in real international politics, where leaders are boundedly rational, information is asymmetric, and cognitive biases shape decisions (Kahneman, 2011).

### Over-reliance on Rationality

The rational choice framework may miss the role of **emotions**, **identities**, and **norms** in shaping political behaviour. Constructivists argue that rationality itself is socially constructed — what counts as a "rational" strategy depends on shared understandings of self and other (Wendt, 1999).

### GIGO (Garbage In, Garbage Out)

Both formal and computational models are only as good as their assumptions. If the input assumptions are unrealistic, the output will be misleading. This is particularly problematic for ABMs, where the number of parameters can be large and the results sensitive to calibration choices.

### Validation Challenges

ABMs are difficult to validate empirically because many parameter combinations can produce the same macro-level pattern (**equifinality**). Formal models are difficult to test because their predictions are often sensitive to assumptions that are hard to verify (Bennett & Checkel, 2015).

---

## Software and Tools

| Tool | Type | Use Case |
|------|------|----------|
| **NetLogo** | ABM platform | Educational and research ABMs; rich library of example models |
| **Python (Mesa)** | ABM framework | Flexible, integrates with scientific Python ecosystem |
| **Python (Numpy/Scipy)** | Numerical computation | Solving game-theoretic models |
| **R (game theory packages)** | Statistical + formal | Formal analysis and simulation |
| **Gambit** | Game theory solver | Computing Nash equilibria, Bayesian games |
| **MATLAB / Julia** | Numerical computation | Complex formal models |

---

## Related Concepts

- [[Epistemology in IR]] — Formal methods are associated with positivist epistemology
- [[Research Design for IR]] — When and how to incorporate formal/computational methods
- [[Qualitative Methods in IR]] — Qualitative methods can complement formal models with within-case evidence
- [[Quantitative Methods in IR]] — Empirical testing of formal model predictions
- [[IR Methods Toolbox]] — Software and tools for formal and computational research
- [[Realism]] — Rationalist and structural realist theory is the natural home for formal models
- [[Neoliberal Institutionalism]] — Keohane's institutional analysis draws on formal models

---

## Sources

- Axelrod, R. (1997). *The Complexity of Cooperation*. Princeton University Press.
- Cederman, L.E. (2003). "Modeling the Size of Wars: From Billiard Balls to Sandpiles." *American Political Science Review*, 97(1), 99-110.
- Epstein, J. & Axtell, R. (1996). *Growing Artificial Societies*. MIT Press.
- Epstein, J. (2006). *Generative Social Science*. Princeton University Press.
- Fearon, J.D. (1995). "Rationalist Explanations for War." *International Organization*, 49(3), 379-414.
- Geller, D.S. & Niemeyer, J. (2004). "Alliance Size and the Duration of Interstate War." *Journal of Conflict Resolution*, 48(6), 836-847.
- Maggi, G. (1999). "The Role of Multilateral Institutions in International Trade Cooperation." *American Economic Review*, 89(1), 190-214.
- Schelling, T. (1960). *The Strategy of Conflict*. Harvard University Press.
- Slantchev, B.L. (2011). *Military Threats: The Risks of War and Peace*. Cambridge University Press.
- Smith, A. (1995). "Alliance Formation and War." *International Studies Quarterly*, 39(4), 401-425.
- Walter, B. (2002). *Committing to Peace: The Civil War Settlement*. Princeton University Press.
