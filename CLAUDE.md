# Portfolio site — project rules

## Goal
Personal portfolio site of a QA Automation Engineer (Java), aimed at recruiters for jobs abroad.

## Source of truth
- Resume is in /resume. Take all experience, skills and projects from it. Never invent facts, numbers or companies.
- If data is missing, ask me instead of guessing.
- Never put phone number or home address on the site. Email, LinkedIn, GitHub, Telegram only.

## Stack
- /site: plain static HTML + CSS + vanilla JS, no frameworks, no build step.
- /tests: Java 21, Gradle (Kotlin DSL), JUnit 5, Playwright for Java.
- CI: GitHub Actions. Deploy: GitHub Pages from /site.

## Site requirements
- English only. Sections: Hero, About, Experience, Skills, Projects, Contacts, link to PDF resume.
- Responsive (mobile first), light/dark theme, good accessibility and Lighthouse score.
- Distinctive design, not a generic template. Use the frontend-design skill.

## Workflow
- Work section by section, not the whole site at once.
- After each UI change, open the page with Playwright MCP, take screenshots on desktop and mobile widths, and fix layout issues before reporting back.
- Small commits with clear messages.