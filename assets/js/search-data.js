// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "Members of the TestVikings Laboratory",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications are listed by categories in reversed chronological order. This page only lists recent publications related to software testing. For earlier publications - or publications on other topics - see our respective Google Scholar pages.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of the current research projects in our lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Relevant courses offered by members of the TestVikings lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-targeted-publication-venues",
        
          title: "Targeted Publication Venues",
        
        description: "Typical venues targeted by Greg and his students.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/venues/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-welcome-to-our-webpage",
          title: 'Welcome to our webpage!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-gregory-will-serve-on-the-grading-committee-of-waleed-abdeen-blekinge-institute-of-technology-on-october-7-2025",
          title: 'Gregory will serve on the grading committee of Waleed Abdeen (Blekinge Institute of...',
          description: "",
          section: "News",},{id: "news-gregory-will-as-external-examiner-for-islam-elgendy-university-of-sheffield-in-october-2025",
          title: 'Gregory will as external examiner for Islam Elgendy (University of Sheffield) in October...',
          description: "",
          section: "News",},{id: "news-quot-exploring-the-interaction-of-code-coverage-and-non-coverage-objectives-in-search-based-test-generation-quot-by-afonso-fontes-gregory-gay-and-robert-feldt-accepted-at-journal-of-software-testing-verification-and-validation-read-it-here",
          title: '&amp;quot;Exploring the Interaction of Code Coverage and Non-Coverage Objectives in Search-Based Test Generation&amp;quot;...',
          description: "",
          section: "News",},{id: "news-gregory-will-as-external-examiner-for-amid-golmohammadi-kristiania-university-of-applied-sciences-in-late-2025-early-2026",
          title: 'Gregory will as external examiner for Amid Golmohammadi (Kristiania University of Applied Sciences)...',
          description: "",
          section: "News",},{id: "news-congratualations-to-philipp-leitner-who-has-been-awarded-funding-from-the-swedish-research-council-vetenskapsrådet-for-the-project-fast-llm-can-large-language-models-synthesise-efficient-code",
          title: 'Congratualations to Philipp Leitner, who has been awarded funding from the Swedish Research...',
          description: "",
          section: "News",},{id: "news-gregory-has-received-funding-from-the-university-of-gothenburg-faculty-of-science-and-technology-for-a-research-sabbatical-in-spring-2027",
          title: 'Gregory has received funding from the University of Gothenburg Faculty of Science and...',
          description: "",
          section: "News",},{id: "news-gregory-will-serve-for-a-second-year-as-co-chair-of-the-international-workshop-on-evaluation-and-assessment-in-software-engineers-education-and-training-learner-the-2025-website-can-be-found-here",
          title: 'Gregory will serve for a second year as co-chair of the International Workshop...',
          description: "",
          section: "News",},{id: "news-congrats-to-francisco-gomes-de-oliveira-neto-who-has-been-awarded-both-the-chalmers-equality-award-and-pedagogical-prize-for-2025-more-information-can-be-found-here",
          title: 'Congrats to Francisco Gomes de Oliveira Neto, who has been awarded both the...',
          description: "",
          section: "News",},{id: "news-gregory-will-serve-as-review-process-chair-at-ase-2026-this-is-a-new-organizational-role-where-he-will-work-closely-with-the-pc-chairs-to-monitor-and-intervene-to-improve-the-logistics-of-the-review-process",
          title: 'Gregory will serve as “review process chair” at ASE 2026. This is a...',
          description: "",
          section: "News",},{id: "news-from-logs-to-lessons-an-exploration-of-llm-based-log-summarization-for-debugging-automotive-software-anton-ekström-hampus-rhedin-stam-fransisco-gomes-de-oliveira-neto-gregory-gay-sabina-edenlund-accepted-at-ast-2026-automation-of-software-test-read-it-here",
          title: '“From Logs to Lessons: An Exploration of LLM-based Log Summarization for Debugging Automotive...',
          description: "",
          section: "News",},{id: "news-folklore-in-software-engineering-a-definition-and-conceptual-foundations-eduard-paul-enoiu-jean-malm-gregory-gay-accepted-at-chase-2026-cooperative-and-human-aspects-of-software-engineering-read-it-here",
          title: '“Folklore in Software Engineering: A Definition and Conceptual Foundations” (Eduard Paul Enoiu, Jean...',
          description: "",
          section: "News",},{id: "news-exploring-the-integration-of-large-language-models-in-industrial-test-maintenance-processes-jingxiong-liu-ludvig-lemner-linnea-wahlgren-gregory-gay-nasser-mohammadiha-joakim-wennerberg-accepted-in-journal-of-systems-and-software-read-if-here-and-check-out-a-preview-of-the-follow-up-work-here",
          title: '“Exploring the Integration of Large Language Models in Industrial Test Maintenance Processes” (Jingxiong...',
          description: "",
          section: "News",},{id: "projects-exploring-the-integration-of-large-language-models-in-industrial-test-maintenance-processes",
          title: 'Exploring the Integration of Large Language Models in Industrial Test Maintenance Processes',
          description: "WASP Industrial Ph.D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-testextender-using-large-language-models-to-augment-software-test-suites",
          title: 'TestExtender - Using Large Language Models to Augment Software Test Suites',
          description: "WASP Academic Ph.D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-trustworthy-and-responsible-ai-centric-test-engineering-trace",
          title: 'Trustworthy and Responsible AI-Centric Test Engineering (TRACE)',
          description: "Software Center",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
