---
layout: page
title: Automated Performance Improvement With Large Language Models
description: WASP Academic Ph.D.
img: assets/img/proj4.png
importance: 4
category: Software Quality
related_publications: true
---

<strong>Funding Agency:</strong> Wallenberg Autonomous Systems, AI, and Software Program (WASP)

<strong>Call:</strong> Academic Doctoral Student Projects 2024

<strong>Principle Investigator:</strong> Philipp Leitner 

<strong>Involved Lab Members:</strong> Philipp Leitner, Gregory Gay, Lirong Yi, Larissa Salerno

<strong>Publications:</strong> {% cite yi2026aimodelsdreamfaster %} 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj4.png" title="Project Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Project Overview
</div>

Large Language Models (LLMs) can generate code, but can they generate fast code for complex, real-world software systems? In this project, we investigate this question and propose agentic approaches that can diagnose and patch complex performance bottlenecks.

Unlike prior studies, which focused on algorithmic puzzles, we have conducted experiments on actual performance-sensitive production code and employed developer-written JMH benchmarks to rigorously validate performance gains against human baselines. Our initial results reveal a nuanced reality - although LLMs demonstrate a surprisingly high capability to solve these complex engineering problems, their solutions suffer from extreme volatility and still lag behind human developers on average. Consequently, we find that the current benchmarks based on algorithmic tasks yields an overly optimistic assessment of LLM capabilities. We trace this real-world performance gap to two primary limitations: first, LLMs struggle to autonomously pinpoint performance hotspots, and second, even with explicit guidance, they often fall short of synthesizing optimal algorithmic improvements. Our results highlight the need to move beyond static code generation towards more complex agent-based systems that are able to profile and observe runtime behavior for performance improvement.
In our current work, we are exploring solutions to these shortcomings.
