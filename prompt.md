# MASTER PROMPT — PREMIUM ENTERPRISE FULL-STACK DEVELOPER PORTFOLIO

## ROLE

You are a senior product designer, UX engineer, frontend architect, and full-stack portfolio developer.

Build a production-quality personal portfolio website for:

**MEGANATH M — SOFTWARE ENGINEER / FULL-STACK DEVELOPER**

The website must feel like a **premium, custom-designed engineering portfolio**, NOT like a generic AI-generated developer template.

The final result should communicate:

> **Enterprise Software Engineering + Full-Stack Development + Modern Product Design**

The portfolio must be visually impressive, technically clean, responsive, maintainable, accessible, and easy to update.

---

# 1. PRIMARY OBJECTIVE

Create a unique:

**Premium Enterprise Full-Stack Developer Portfolio**

The portfolio should present Meganath as a professional Software Engineer with strong experience in:

* Java
* Spring Boot
* Spring MVC
* Hibernate
* JPA
* JDBC
* SQL
* MySQL
* React
* TypeScript
* JavaScript
* REST APIs
* Playwright
* Postman
* Git / GitHub

The uploaded resume is the primary factual source.

DO NOT invent information that is not supported by the resume or the JSON content file.

---

# 2. IMPORTANT — SINGLE SOURCE OF TRUTH

This is one of the most important requirements.

Create a dedicated JSON content file:

```text
src/data/resume.json
```

ALL PERSONAL / PORTFOLIO CONTENT MUST COME FROM THIS JSON FILE.

The React/Next.js components must NOT contain hardcoded personal content.

Do NOT hardcode:

* Name
* Job title
* About text
* Phone number
* Email
* Location
* Experience
* Company
* Experience dates
* Responsibilities
* Skills
* Projects
* Project descriptions
* Technologies
* Certifications
* Education
* CGPA
* Social links
* Contact links
* Any other editable portfolio information

These values must be loaded from:

```text
src/data/resume.json
```

The UI components should only define structure, styling, behavior, and presentation.

---

# 3. CONTENT UPDATE RULE

The portfolio must be designed so that in the future I can update ONLY:

```text
src/data/resume.json
```

and the website automatically reflects the changes.

For example:

If I change:

```json
"jobTitle": "Software Engineer"
```

to:

```json
"jobTitle": "Senior Software Engineer"
```

the entire website must automatically use the new value.

If I add another project to the JSON array, the Projects section must automatically render it.

If I remove a certification, it must disappear from the website.

If I add another skill category, the UI should render it without requiring component modification.

Do NOT require me to edit React/TypeScript component files for normal content updates.

---

# 4. ANTI-HALLUCINATION / FACTUAL ACCURACY RULES

This is extremely important.

### NEVER INVENT CONTENT.

Do not create:

* Fake companies
* Fake clients
* Fake projects
* Fake achievements
* Fake statistics
* Fake metrics
* Fake awards
* Fake testimonials
* Fake job responsibilities
* Fake years of experience
* Fake GitHub repositories
* Fake LinkedIn information
* Fake project links
* Fake certifications
* Fake technology experience
* Fake performance improvements
* Fake users/customers
* Fake professional claims

Do not write statements such as:

> "Improved performance by 40%"

unless that exact fact is provided in the JSON/source.

Do not write:

> "Worked with a team of 10 developers"

unless explicitly provided.

Do not write:

> "Served 10,000+ users"

unless explicitly provided.

Do not infer professional achievements from technology names.

### If information is missing:

DO NOT guess.

Instead:

1. Hide the field/element.
2. Or use a neutral UI state.
3. Or leave the section out if the content is optional.

Never fill missing information with AI-generated assumptions.

---

# 5. SOURCE PRIORITY

Use information in this order:

### Priority 1

`src/data/resume.json`

### Priority 2

The provided resume/document used to create the initial JSON.

### Priority 3

Nothing else.

Do NOT use random internet information to fill missing profile details.

The reference websites are for DESIGN INSPIRATION ONLY.

They are NOT content sources.

---

# 6. INITIAL RESUME DATA

Create the initial `resume.json` using only the information supported by the provided resume.

The resume currently establishes:

### Identity

Name:
Meganath M

Title:
Software Engineer

Location:
Chennai, Tamil Nadu

Email:
[meganath.mariappan@gmail.com](mailto:meganath.mariappan@gmail.com)

Phone:
+91 8870064670

### Current Experience

Company:
Capgemini

Role:
Software Engineer

Period:
2025 - Present

Resume-supported responsibilities include:

* Enterprise software development with Java
* Full-stack application development
* Java
* Spring Boot
* Hibernate
* JPA
* JDBC
* SQL
* React
* TypeScript
* Playwright
* API/UI testing
* Automated test scenarios

### Skills

Languages:

* Java
* Python
* SQL

Backend:

* Spring Boot
* Spring MVC
* Hibernate
* JPA
* JDBC

Frontend:

* HTML
* CSS
* JavaScript
* React
* TypeScript

Database:

* MySQL

Tools:

* Git
* GitHub
* Postman
* Antigravity
* Claude
* Playwright

Concepts:

* OOP
* Collections
* Exception Handling
* REST APIs
* Multithreading
* TCP/IP
* Firewall basics

Soft Skills:

* Problem Solving & Analytical Thinking
* Communication Skills & Team Collaboration

### Project 1

Employee Management System

Technologies:

* Java
* Spring Boot
* Hibernate/JPA
* MySQL

Resume-supported features:

* CRUD operations
* REST APIs
* MySQL integration
* Employee search
* Update
* Delete
* Pagination
* Postman testing
* Git
* MVC architecture
* Object-oriented programming principles

### Project 2

Artificial Vision Based Fire and Smoke Recognition Using YOLO

Technologies:

* Python
* YOLOv8
* OpenCV
* MySQL
* Frontend Development

Resume-supported work:

* AI-based fire and smoke detection
* Image dataset training/evaluation
* Real-time video processing
* Detection accuracy optimization
* False-positive reduction
* Early fire detection / surveillance use case

Do not add technical claims beyond the source material.

### Education

Bachelor of Engineering — B.E.
Computer Science and Engineering

V.S.B. Engineering College

2020 - 2025

CGPA:
7.25

Higher Secondary:
Computer Science & Mathematics

2019 - 2020

Percentage:
80%

Secondary School — SSLC

2018 - 2019

Percentage:
80%

### Certifications

* Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
* Google Cloud Computing Foundations
* Basics of Java — Infosys Springboard
* Java Full Stack Development Specialization — Udemy

Udemy specialization topics listed in the resume:

* Java
* Advanced Java
* Spring Boot
* Hibernate & JPA
* SQL
* Microservices

IMPORTANT:

Treat this information as the initial dataset.

The JSON file must become the long-term source of truth.

---

# 7. RECOMMENDED JSON ARCHITECTURE

Create a strongly structured JSON file similar to this conceptual structure:

```text
resume.json

├── profile
│   ├── name
│   ├── title
│   ├── tagline
│   ├── location
│   ├── email
│   ├── phone
│   └── availability
│
├── about
│   └── description
│
├── social
│   ├── github
│   ├── linkedin
│   └── googleSkillBoost
│
├── experience[]
│   ├── company
│   ├── role
│   ├── period
│   ├── description
│   └── responsibilities[]
│
├── skills
│   ├── languages[]
│   ├── backend[]
│   ├── frontend[]
│   ├── database[]
│   ├── tools[]
│   ├── concepts[]
│   └── softSkills[]
│
├── projects[]
│   ├── id
│   ├── title
│   ├── category
│   ├── description
│   ├── technologies[]
│   ├── features[]
│   ├── links
│   └── featured
│
├── certifications[]
│
├── education[]
│
└── settings
    ├── showAvailability
    ├── showEducation
    ├── showCertifications
    └── showSocialLinks
```

You may improve this schema if necessary, but keep it simple, readable, and maintainable.

Do not over-engineer the JSON.

---

# 8. JSON TYPE SAFETY

If using TypeScript, create matching types/interfaces:

```text
src/types/resume.ts
```

The JSON structure and TypeScript types must remain consistent.

Avoid:

```text
any
```

wherever practical.

Use proper types for:

* Profile
* Experience
* Skill groups
* Projects
* Certifications
* Education
* Social links
* Portfolio settings

---

# 9. DESIGN REFERENCES

Use these websites ONLY as visual inspiration:

1. Olivia
   https://themewagon.github.io/olivia/

2. Geeky NextJS
   https://themewagon.github.io/geeky-nextjs/

3. MyResume
   https://themewagon.github.io/MyResume/

IMPORTANT:

DO NOT CLONE THEM.

DO NOT COPY:

* Exact layouts
* Exact sections
* Exact CSS
* Exact typography combinations
* Exact animations
* Exact cards
* Exact navigation
* Exact visual identity

Study their useful principles:

* Strong personal introduction
* Clear content hierarchy
* Professional portfolio presentation
* Good project organization
* Clean resume/experience presentation
* Strong CTA
* Responsive structure

Then create a completely original design for Meganath.

---

# 10. DESIGN DIRECTION

The visual identity must be:

**Premium**
**Enterprise**
**Technical**
**Editorial**
**Modern**
**Minimal**
**Confident**

Avoid the visual language of generic AI-generated portfolios.

Do NOT create:

* Generic glassmorphism
* Giant floating 3D laptop
* AI robot
* Generic developer avatar
* Code rain
* Excessive neon
* Excessive gradients
* Random particle backgrounds
* Fake terminal everywhere
* Generic "Hello World" hero
* Generic "Passionate developer" copy
* Excessive rounded cards
* Template-looking sections

The site should feel intentionally art-directed.

---

# 11. VISUAL CONCEPT

Use:

### Enterprise Product UI

combined with:

### Editorial Portfolio Design

combined with:

### Software Engineering Interface

Think:

**Linear + Stripe + modern engineering portfolio + premium editorial website**

but DO NOT copy any of those products.

---

# 12. COLOR SYSTEM

Use a sophisticated enterprise palette.

Suggested foundation:

```text
Background:
#0B1020

Surface:
#111827

Primary:
#3B82F6

Accent:
#22D3EE

Primary Text:
#F8FAFC

Secondary Text:
#94A3B8

Border:
#263244
```

Do not make the entire website visually noisy.

Use accent colors selectively.

The design should feel premium rather than gaming-themed.

---

# 13. TYPOGRAPHY

Use a modern professional sans-serif system.

Prefer a strong combination of:

* Large editorial display typography for headings
* Highly readable sans-serif for body text
* Monospace only for technical metadata/code-inspired labels

Avoid excessive font styles.

Typography hierarchy must be strong.

---

# 14. HERO SECTION

The hero should immediately communicate:

**MEGANATH M**

**SOFTWARE ENGINEER**

Then a concise data-driven description.

Example structure:

```text
MEGANATH M
SOFTWARE ENGINEER

Java • Spring Boot • React • MySQL

Building reliable full-stack software systems
from backend services to modern interfaces.
```

IMPORTANT:

The actual hero content must come from `resume.json`.

Do not hardcode the above text if a corresponding JSON field exists.

Include:

* View Projects
* Download Resume
* Contact / Let's Connect

Only show buttons when their target exists.

---

# 15. ENGINEERING PROFILE SECTION

Create a visually distinctive section representing the developer as an engineer.

Possible categories:

```text
BACKEND
Java / Spring Boot / Hibernate / JPA

FRONTEND
React / TypeScript / JavaScript

DATA
MySQL / SQL

QUALITY
Playwright / API Testing / Postman
```

These must be dynamically generated from the JSON skills.

Do not manually duplicate skill names in components.

---

# 16. EXPERIENCE SECTION

Create a premium vertical timeline.

Each experience item should be generated from:

```text
resume.experience[]
```

Show:

* Company
* Role
* Period
* Description
* Responsibilities
* Technologies if available

If there is only one experience entry, the UI must still look intentional.

Do not create fake previous jobs.

---

# 17. PROJECT SECTION

Projects are one of the most important parts of the site.

Generate project cards dynamically from:

```text
resume.projects[]
```

Each project can contain:

* Number
* Category
* Title
* Description
* Technologies
* Features
* Project links
* GitHub link
* Demo link
* Featured status

If a link does not exist in JSON:

DO NOT create a fake link.

If an image is not available:

DO NOT generate a fake project screenshot.

Instead create an elegant abstract technical visual based only on the project category/content.

---

# 18. PROJECT CASE STUDY INTERACTION

Make project presentation more premium than simple cards.

Possible interaction:

Click project → open detailed project view.

Show:

```text
PROJECT
TECH STACK
OVERVIEW
KEY FEATURES
TECHNICAL APPROACH
LINKS
```

Only render fields that exist.

Do not invent architecture diagrams or technical implementation details that are not in the data.

---

# 19. SIGNATURE SECTION — FROM CODE TO SYSTEM

Create a visually distinctive engineering workflow section:

```text
PROBLEM
   ↓
DEVELOPMENT
   ↓
BACKEND
   ↓
DATABASE
   ↓
FRONTEND
   ↓
TESTING
```

IMPORTANT:

This is a visual representation of the portfolio's engineering approach.

Do not claim that this is a documented methodology used at a company unless the JSON explicitly says so.

---

# 20. SKILLS SECTION

Render skills dynamically.

Do not create 50 individual skill cards.

Use grouped categories.

Example:

```text
Languages
Backend
Frontend
Database
Tools
Concepts
Soft Skills
```

If a category is empty, hide it.

---

# 21. CERTIFICATIONS

Generate certification cards from:

```text
resume.certifications[]
```

Each certification may contain:

* Name
* Issuer
* Year
* Credential URL
* Description

Only show fields available in JSON.

Never invent credential IDs or verification URLs.

---

# 22. EDUCATION

Generate education dynamically.

Show:

* Degree
* Institution
* Period
* Field
* CGPA / percentage only when available

Do not over-emphasize school education.

Professional experience and projects should have stronger visual priority.

---

# 23. CONTACT SECTION

Create a premium final CTA.

Example concept:

```text
LET'S BUILD SOMETHING

Open to meaningful engineering
and software development opportunities.

[ Email ]
[ LinkedIn ]
[ GitHub ]
```

Again, all contact data must come from JSON.

Do not fabricate social URLs.

---

# 24. RESUME DOWNLOAD

The website should include a Resume Download button.

Keep the resume file in:

```text
public/resume/
```

Use a stable filename such as:

```text
Meganath-M-Resume.pdf
```

The button should work correctly.

Do not show a download button if the file is unavailable.

---

# 25. NAVIGATION

Desktop navigation:

```text
Home
About
Experience
Skills
Projects
Certifications
Contact
```

Use smooth scrolling where appropriate.

The active section can be highlighted while scrolling.

Mobile navigation must be clean and easy to use.

Do not create an unnecessarily complicated menu.

---

# 26. RESPONSIVE DESIGN

The portfolio must be designed mobile-first AND desktop-first in terms of visual quality.

Breakpoints should support:

* Small mobile
* Large mobile
* Tablet
* Laptop
* Large desktop

Do not simply shrink the desktop layout.

Recompose sections appropriately for mobile.

Hero, projects, timeline, skills and navigation must all remain usable.

---

# 27. ANIMATIONS

Use subtle, purposeful animations.

Recommended:

* Hero reveal
* Scroll reveal
* Section transitions
* Project hover
* Skill hover
* Timeline reveal
* Button micro-interactions
* Smooth navigation
* Modal/page transition

Avoid:

* Excessive bouncing
* Constant movement
* Distracting parallax
* Heavy WebGL
* Long loading animations

Performance is more important than animation quantity.

Respect:

```text
prefers-reduced-motion
```

---

# 28. ACCESSIBILITY

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible links
* Proper heading hierarchy
* Image alt text
* Good contrast
* Reduced motion support

Do not sacrifice accessibility for visual effects.

---

# 29. PERFORMANCE

The portfolio must load quickly.

Avoid unnecessary dependencies.

Optimize:

* Images
* Fonts
* Animations
* JavaScript
* Bundle size

Do not introduce a large animation library unless genuinely required.

---

# 30. SEO

Use dynamic metadata based on JSON where appropriate.

Include:

* Page title
* Meta description
* Open Graph metadata
* Proper heading structure
* Semantic HTML

Do not generate fake SEO claims.

---

# 31. ARCHITECTURE

Keep content and presentation separated.

Recommended structure:

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── EngineeringProfile.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCaseStudy.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│
├── data/
│   └── resume.json
│
├── types/
│   └── resume.ts
│
└── lib/
    └── resume.ts
```

Adapt the structure if the selected framework requires a different architecture.

---

# 32. IMPORTANT CONTENT ARCHITECTURE RULE

Create one data-loading layer.

For example:

```text
resume.ts
```

This should import/read the JSON and expose typed data to components.

Components should receive data through props or a controlled data layer.

Avoid importing the JSON separately in every component if a cleaner architecture is possible.

---

# 33. JSON VALIDATION

Create validation for required fields.

At minimum validate:

* Profile name
* Profile title
* Contact information where present
* Experience structure
* Project structure
* Skill arrays

If invalid JSON or missing required data is detected:

Show a clear developer-facing error during development.

Do not silently invent replacement content.

---

# 34. EMPTY STATE RULE

If a field is missing:

```text
DO NOT INVENT.
DO NOT GUESS.
DO NOT PLACE PLACEHOLDER TEXT.
DO NOT WRITE "Coming Soon" UNLESS IT IS INTENTIONALLY DEFINED IN JSON.
```

Simply hide the corresponding UI.

Example:

If project has no GitHub URL:

Do not render GitHub button.

If experience has no technologies:

Do not create a technology list.

If profile has no image:

Do not create a fake avatar.

---

# 35. DATA-DRIVEN COMPONENT RULE

Bad:

```tsx
<h1>Meganath M</h1>
```

Good:

```tsx
<h1>{resume.profile.name}</h1>
```

Bad:

```tsx
<p>Java, Spring Boot, React</p>
```

Good:

```tsx
{resume.skills.backend.map(...)}
```

Bad:

```tsx
<div>Capgemini</div>
```

Good:

```tsx
{resume.experience.map(...)}
```

Every editable piece of portfolio content must follow this principle.

---

# 36. FUTURE UPDATE TEST

Before considering the implementation complete, test the architecture mentally or with actual changes.

Temporarily change:

```text
Profile title
```

in `resume.json`.

Confirm the UI changes automatically.

Add a third project.

Confirm the project appears automatically.

Remove a certification.

Confirm it disappears.

Add a new skill category.

Confirm it renders correctly if the schema supports that category.

Change the company name.

Confirm every relevant section updates.

The purpose is to guarantee:

> **JSON = Content**
>
> **Components = Presentation**
>
> **Code = Behavior**

---

# 37. DO NOT OVER-ENGINEER

This is a portfolio website.

Do NOT introduce:

* CMS
* Database
* Authentication
* Admin dashboard
* Backend API
* Server database
* unnecessary state management
* unnecessary global stores

unless explicitly requested later.

For now:

```text
Static frontend
+
JSON content source
+
Reusable components
```

is the correct architecture.

---

# 38. FINAL QUALITY BAR

Before finishing, verify:

### Content

* No invented information
* No fake statistics
* No fake links
* No duplicate resume content unnecessarily
* JSON is the source of truth

### Design

* Looks custom
* Does not look like an AI template
* Premium enterprise feel
* Strong typography
* Excellent hierarchy
* Consistent spacing
* Professional colors

### UX

* Smooth navigation
* Responsive
* Accessible
* Clear CTA
* Projects are easy to understand

### Engineering

* TypeScript
* Clean components
* Reusable sections
* JSON-driven content
* No unnecessary hardcoded personal information
* No unnecessary dependencies
* Good performance

---

# 39. MOST IMPORTANT INSTRUCTION

Do not rush into coding.

First:

1. Inspect the existing project structure.
2. Determine the framework and existing dependencies.
3. Determine whether the project is Next.js, React/Vite, or another setup.
4. Reuse existing infrastructure when appropriate.
5. Create the JSON content model.
6. Create the TypeScript types.
7. Build the visual system.
8. Build the sections.
9. Connect all sections to JSON.
10. Test responsiveness.
11. Test JSON-only content updates.
12. Fix any issues.
13. Only then consider the implementation complete.

Do not destroy or rewrite an existing working project unnecessarily.

---

# 40. REFERENCE WEBSITE RULE

The provided reference websites are inspiration only:

* https://themewagon.github.io/olivia/
* https://themewagon.github.io/geeky-nextjs/
* https://themewagon.github.io/MyResume/

Use them to understand:

* hierarchy
* spacing
* portfolio flow
* project presentation
* resume presentation
* navigation patterns

But create an ORIGINAL visual identity.

The final website should NOT be recognizable as a copy of any reference.

---

# 41. FINAL DESIGN STATEMENT

The final website should feel like:

> A senior product designer and frontend engineer intentionally designed a personal engineering portfolio for a real software engineer.

It should NOT feel like:

> An AI generated developer portfolio template.

The strongest impression should be:

**MEGANATH M**
**SOFTWARE ENGINEER**
**ENTERPRISE FULL-STACK DEVELOPMENT**
**JAVA + SPRING BOOT + REACT**

Clean.
Technical.
Premium.
Confident.
Original.
Professional.

---

# 42. EXECUTION RULE

Implement the website completely.

Do not stop after creating only the hero section.

Do not ask me to manually create the JSON first.

Create the initial JSON yourself from the provided resume information.

Do not invent missing information.

If something is not available, leave it absent from the JSON and hide the corresponding UI.

After implementation, explain:

1. What files were created/changed.
2. Where the JSON content file is located.
3. How I can update the portfolio in the future by editing only `resume.json`.
4. How to add a new project.
5. How to add a new experience.
6. How to update skills.
7. How to update social/contact links.

The implementation is successful only if the portfolio is genuinely data-driven and future content changes can be made through `resume.json` without modifying UI components.
