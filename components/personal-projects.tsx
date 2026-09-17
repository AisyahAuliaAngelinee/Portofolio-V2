import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "@/components/tech-badge";
const projects = [
  {name:"Constrack", repo:"Constrack", category:"KANBAN · PRODUCTIVITY", ongoing:true, description:"An ongoing Kanban application for organizing tasks and tracking work through a visual board. Built to make project progress easier to follow, one card at a time.", stack:["JavaScript","React","Vite","Tailwind CSS","Node.js","Express","PostgreSQL"]},
  {name:"Portofolio", repo:"Portofolio", category:"MY FIRST PORTFOLIO", ongoing:false, description:"My first personal portfolio website—a place to introduce myself, showcase my work, and bring my frontend skills together in a customizable web experience.", stack:["TypeScript","Next.js","React","Tailwind CSS","shadcn/ui","Framer Motion"]},
  {name:"Bradds Industries", repo:"bradds-industries", category:"FACTORY OUTLET · E-COMMERCE", ongoing:false, description:"An e-commerce website for a factory outlet, bringing clothing and merchandise into an online storefront with a focus on a clear, accessible shopping experience.", stack:["TypeScript","Next.js","React","Tailwind CSS","shadcn/ui"]},
  {name:"3D Shirt Customizer", repo:"3D-Shirt-Customizer", category:"MY SECOND THREE.JS PROJECT", ongoing:false, description:"My second project using Three.js: an interactive shirt customizer that explores product personalization in 3D, combining a React interface with real-time 3D rendering.", stack:["JavaScript","React","Vite","Three.js","Tailwind CSS","Framer Motion","Express"]},
  {name:"3D Website", repo:"3D-Website", category:"MY FIRST THREE.JS PROJECT", ongoing:false, description:"My first exploration of Three.js. A 3D website built with vanilla JavaScript, taking my first steps into rendering scenes and creating immersive experiences in the browser.", stack:["JavaScript","Three.js","Vite"]},
];
export function PersonalProjects(){return <section id="project" className="section projects">
  <div className="section-heading reveal"><span className="eyebrow">03 / BUILT WITH CURIOSITY</span><div><h2>Personal Project<span className="accent-period">.</span></h2><p className="section-description">Ideas, experiments, and the things I build along the way.</p></div></div>
  <div className="project-grid">{projects.map((project,index)=><article className={`project-card reveal ${project.ongoing?"project-featured":""}`} key={project.repo}>
    <div className="project-top"><span className="project-number">0{index+1}</span>{project.ongoing&&<span className="status-pill">On going project</span>}<img className="project-github" src="/logos/github.svg" alt="" width={21} height={21}/></div>
    <div className="project-body"><span className="eyebrow">{project.category}</span><h3><a href={`https://github.com/AisyahAuliaAngelinee/${project.repo}`} target="_blank" rel="noopener noreferrer">{project.name}<ArrowUpRight size={24} aria-hidden="true"/><span className="sr-only"> — view repository, opens in a new tab</span></a></h3><p>{project.description}</p></div>
    <div className="project-stack"><span className="stack-label">TECH STACK</span><div className="tags">{project.stack.map(name=><TechBadge key={name} name={name}/>)}</div></div>
  </article>)}</div>
</section>}
