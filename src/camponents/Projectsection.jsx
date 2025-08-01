
import { ArrowRight, ExternalLink, GitCommit, GitFork, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GTA6 Landing Page",
    description: "A dynamic and elegant landing page application using React and Tailwind CSS, designed for an engaging and smooth user experience..",
    image: "/projects/peoject1.png",
    tags: ["React", "TailwindCSS", "Render"],
    demoUrl: "https://gta6-p84p.onrender.com/",
    githubUrl: "https://github.com/chaurasiyajitendra/gta6",
  },
  {
    id: 2,
    title: "Orbit Enhance",
    description:
      "Transforms your images into sharp, high‑quality versions in seconds.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://chaurasiyajitendra.github.io/image-clear/",
    githubUrl: "https://github.com/chaurasiyajitendra/image-clear",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and verifaction processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js",'Express'],
    demoUrl: "https://skatch-frontend.onrender.com",
    githubUrl: "https://github.com/chaurasiyajitendra/Skatch",
  },
  {
    id: 4,
    title: "Nike Landing Page",
    description:
      "Nike Landing Page – Smooth GSAP animations for a premium, interactive experience.",
    image: "/projects/project4.png",
    tags: ["React", "TailwinsCSS",'GSAP'],
    demoUrl: "https://chaurasiyajitendra.github.io/Nike-clone/",
    githubUrl: "https://github.com/chaurasiyajitendra/Nike-clone",
  },
  {
    id: 5,
    title: "Pintrest",
    description:
    "A visually rich NODE Pinterest Clone for uploading posts, updating profiles, and exploring other users’ pins.",
    image: "/projects/project5.png",
    tags: ["NODE", "TailwinsCSS"],
    demoUrl: "https://pintres-clon.onrender.com",
    githubUrl: "https://github.com/chaurasiyajitendra/Pintres-Clon",
  }
];

export const Projectsection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/chaurasiyajitendra"
          >
           <GitFork/> Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


export default Projectsection