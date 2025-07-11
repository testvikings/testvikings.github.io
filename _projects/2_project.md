---
layout: page
title: TestExtender - Using Large Language Models to Augment Software Test Suites
description: WASP Academic Ph.D.
img: assets/img/proj2.png
importance: 2
category: Artificial Intelligence
related_publications: true
---

<strong>Funding Agency:</strong> Wallenberg Autonomous Systems, AI, and Software Program (WASP)

<strong>Call:</strong> Academic Doctoral Student Projects 2025

<strong>Principle Investigator:</strong> Gregory Gay

<strong>Involved Lab Members:</strong> Gregory Gay, Francisco Gomes de Oliveira Neto, Jingwen Wu, Yundong Shen

<strong>Publications:</strong> Project starting autumn 2025.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj2.png" title="Project Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Project Overview
</div>

Software testing is crucially important in ensuring the quality of complex software systems, but also difficult and labor-intensive. Artificial intelligence techniques such as large language models (LLMs)—machine learning models trained on massive text corpora—have shown great promise in partially relieving the burden of the testing process by, e.g., automating test generation, suggesting assertions, or providing planning support. However, LLM-based test generation also suffers from significant issues, including uncompilable code, low code coverage, hallucinated method calls, and incorrect assertions.

Current state-of-the-art research implicitly models a situation where test creation is fully automated, with no human involvement. We propose that a more effective tactic would be a hybrid approach, where humans develop the initial test suite, which is then extended and improved by LLM agents—a process known as test augmentation. By providing a core test suite for augmentation, human testers would provide rich semantic information that could be utilized by LLM agents—overcoming the inherent weaknesses of test creation conducted solely by humans or by LLMs. LLM-based test augmentation remains under-explored, but offers the potential to strengthen the base offered by a test suite and to overcome omissions in the suite. The purpose of this research is to apply LLM agents to augment human-written test suites. We focus on three important aspects of tests—their interactions with the program-under-test, assertions used to check program correctness, and readability—a critical requirement for effective debugging. Enhancing these three aspects will enable developers to detect and correct complex faults. We propose the creation of an extensible framework, TestExtender that augments the interactions, assertions, and readability of human-written test suites. In particular, we focus on two forms of support. First, we will explore the use of autonomous LLM Agents that act with minimal human intervention. Second, we will explore human-in-the-loop scenarios where LLM agents serve as conversational partners for human testers.

TestExtender could potentially offer significant improvements to the efficiency and effectiveness of software testers, reducing the human effort and tremendous financial cost required to produce effective test suites and improving the quality of increasingly-complex modern software.
