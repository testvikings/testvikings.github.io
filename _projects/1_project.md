---
layout: page
title: Exploring the Integration of Large Language Models in Industrial Test Maintenance Processes
description: WASP Industrial Ph.D.
img: assets/img/proj1.png
importance: 1
category: Artificial Intelligence
related_publications: true
---

<strong>Funding Agency:</strong> Wallenberg Autonomous Systems, AI, and Software Program (WASP)

<strong>Call:</strong> Industrial Ph.D. Student Positions 2024

<strong>Principle Investigator:</strong> Gregory Gay

<strong>Involved Lab Members:</strong> Gregory Gay, Nasser Mohammadiha, Jingxiong (Roy) Liu

<strong>Publications:</strong> {% cite liu2025exploringintegrationlargelanguage %}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj1.png" title="Project Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Project Overview
</div>

Software testing is a crucial component of the development process. It is also notoriously expensive. Although there is an initial cost associated with creating tests, much more cost is imposed by the need for test maintenance. Automated software tools can reduce the cost and improve the quality of test maintenance. However, despite its importance and cost, there has been little research on automation of test maintenance.

In this project, we focus on the potential of large language models (LLMs) to provide such support. LLMs are an emerging technology skilled at language analysis and transformation tasks such as translation, summarizing, and decision support due to their ability to infer semantic meaning from both natural language and software code. As a result, LLMs have shown promise in automating development and testing tasks, including test creation, documentation, and debugging.

The purpose of this research is to develop and integrate LLMs and LLM agents - autonomous agents coupling an LLM with tool access and memory mechanisms - into the test maintenance process. We will design and investigate the strengths and limitations of LLM agents that provide two forms of support. First, we will explore how LLM agents can automate maintenance tasks, such as the creation or modification of test code. This stage includes both human-on-the-loop scenarios - where humans review the actions taken by LLMs agents before they are committed to the code repository – and full automation – where LLM agents take unsupervised action. Second, we will explore human-in-the-loop scenarios where autonomous agents serve as conversational assistants, providing targeted suggestions or guidance in response to active queries from the developers.

This research will be conducted by an industrial Ph.D. student at Ericsson AB and Chalmers University of Technology. We, the collaborators in this project, recently performed an exploratory case study to explore potential applications of LLM agents in test maintenance. Based on our results, we have identified fundamental research questions in relation to clear industrial challenges. We aim to provide general scientific solutions that will benefit both Ericsson and other companies developing critical software.
