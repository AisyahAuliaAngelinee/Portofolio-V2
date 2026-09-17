import { Lightbulb } from "lucide-react";
const logos: Record<string,string> = {
  "JavaScript":"javascript", "TypeScript":"typescript", "React":"react",
  "Next.js":"nextdotjs", "Vite":"vite", "Redux":"redux",
  "Tailwind CSS":"tailwindcss", "Three.js":"threedotjs", "Node.js":"nodedotjs",
  "Express":"express", "PostgreSQL":"postgresql", "shadcn/ui":"shadcnui",
  "Framer Motion":"framer", "HTML":"html5", "CSS":"css",
};
export function TechBadge({name}:{name:string}) {
  return <span className="tech-badge">{logos[name]?<img src={`/logos/${logos[name]}.svg`} alt="" width={17} height={17} loading="lazy"/>:<Lightbulb size={17} aria-hidden="true"/>}{name}</span>;
}
