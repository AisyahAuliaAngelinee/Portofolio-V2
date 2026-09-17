# clrshna | Personal Portofolio Website

A responsive single-page portfolio with Home, Work, Skill, Project and Contact sections. Built with React, TypeScript, Next.js App Router conventions and shadcn/ui. Sites runs this project through the Next.js-compatible Vinext runtime. Smooth navigation and reveal effects use CSS and IntersectionObserver, with reduced-motion support.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

The preview runs at http://localhost:5173. `npm run build` creates the production output; `npx tsc --noEmit` checks types. The project can also use the installed Next.js CLI (`npx next dev` / `npx next build`) for a conventional Next.js workflow outside Sites. Sites deployment uses the existing Vinext/Cloudflare configuration.

## Edit content

- `app/page.tsx`: introduction, experience, skills, recipient address and editable inquiry templates.
- `app/globals.css`: theme, responsive layouts and animations.
- `app/layout.tsx`: title, description and favicon metadata.

## Enable email delivery

The contact form posts directly to FormSubmit using AJAX and sends to **vincentius.clarishna@gmail.com**. No API key is stored in the browser.

1. Send your first message from the deployed website.
2. Open the activation email sent by FormSubmit to the recipient address, including Spam if needed, and confirm the form.
3. Send a second test message and confirm it arrives before sharing the portfolio widely.

FormSubmit requires this one-time recipient confirmation: https://formsubmit.co/

Delivery to the inbox has not been tested or activated by the build process. Service acceptance does not prove inbox delivery. The interface provides timeout/error feedback and an email-app fallback containing the edited draft. Drafts remain in memory when switching templates but reset on page reload. Submitted name, email and message are processed by FormSubmit.

## Verified

- TypeScript checking and production build.
- Desktop and 390px mobile layout, without horizontal overflow.
- Anchor navigation and active navigation indicator.
- Switching between freelance and remote templates preserves edits.
- Empty required fields block submission.

The deployed Sites version starts owner-private. Change its sharing settings before distributing it to recruiters or clients.

## Personal projects and assets

The Home portrait is the image supplied by the owner, copied unchanged to `public/images/vincentius-clarishna.png`. Technology and GitHub SVG logos come from the Simple Icons project (https://github.com/simple-icons/simple-icons); logos are stored locally and rendered monochrome. Brand marks remain the property of their owners.

`components/personal-projects.tsx` contains the five requested projects, GitHub URLs, descriptions, and primary technology lists. Stack evidence: repository package.json files for Portofolio (`personal-website/`), bradds-industries (`client/`), 3D-Shirt-Customizer (`client/`, `server/`), and 3D-Website (`client/`). Constrack uses the matching local checkout's client/KanbanBoard and server manifests, whose origin matches the supplied GitHub URL; its remote repository was not publicly readable during this update.

`components/tech-badge.tsx` maps technologies to local logos; Problem solving uses a lightbulb icon.

## Interface features

- Responsive single-page navigation with smooth scrolling and section tracking.
- Borderless full-width navigation at the top, transitioning to a floating, rounded navbar with backdrop blur when scrolling.
- Hidden browser scrollbars without disabling scrolling, touch gestures, or keyboard navigation.
- Five personal projects with technology logos, repository links, and live website links where available.
- Editable freelance and full-time remote inquiry templates.

## License

This project is licensed under the [MIT License](LICENSE), copyright © 2026 Vincentius Clarishna. Third-party dependencies and bundled assets retain their applicable licenses and notices, including the files in `vendor/` and `build/`.
