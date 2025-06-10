"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

// Project data
const projects = [
  {
    id: 1,
    title: "Recipe Viewer App",
    description: "A modern recipe viewing application built with Next.js. Features recipe browsing, detailed ingredient lists, cooking instructions, and a clean, responsive design for food enthusiasts.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://next-js-reciper-viewer.vercel.app/",
    githubUrl: "https://github.com/alineuwera/Next.js-Reciper-viewer",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Journal App",
    description: "A personal journaling application that allows users to write, organize, and manage their daily thoughts and experiences. Features a clean interface with writing tools and entry management.",
    image: "https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "JavaScript", "CSS", "Local Storage"],
    liveUrl: "https://personal-journal-app-1idr.vercel.app/",
    githubUrl: "https://github.com/alineuwera/Personal-Journal-App",
    featured: true,
  },
  {
    id: 3,
    title: "Product List Cart App",
    description: "An e-commerce product list app with cart functionality. Features a product grid, cart management, and responsive design using React and Tailwind CSS.",
    image: "https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://product-list-cart.vercel.app/",
    githubUrl: "https://github.com/alineuwera/Product-List-Cart",
    featured: true,
  },
  {
    id: 4,
    title: "User Directory App",
    description: "A user management app displaying a list of users fetched from an API. Includes user detail views, adding and removing users, and form validation using TypeScript and React Router.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "React Router"],
    liveUrl: "https://user-directory-app.vercel.app/",
    githubUrl: "https://github.com/alineuwera/User-Directory-App",
    featured: true,
  },
  {
    id: 5,
    title: "Favorite User Picker App",
    description: "A simple app to fetch GitHub users and pick your favorite. Features local storage saving, favorites list, and clean card-based layout built with React.",
    image: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "TypeScript", "Local Storage"],
    liveUrl: "https://favorite-user-picker.vercel.app/",
    githubUrl: "https://github.com/alineuwera/Favorite-User-Picker",
    featured: true,
  },
  {
    id: 6,
    title: "GitHub User Search App",
    description: "A search app to look up GitHub profiles by username. Shows user info, public repos, followers, and more with a dark/light theme toggle. Built with React and Tailwind CSS.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Tailwind CSS", "GitHub API"],
    liveUrl: "https://github-user-search-app.vercel.app/",
    githubUrl: "https://github.com/alineuwera/GitHub-User-Search-App",
    featured: true,
  },
];


export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="My Projects"
          subtitle="Recent work I've done"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-border/40 hover:border-border/80 transition-all duration-300 bg-card/60 backdrop-blur-sm hover:shadow-lg group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" /> 
                      Code
                    </a>
                  </Button>
                  
                  <Button size="sm" className="flex-1" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> 
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/alineuwera" target="_blank" rel="noopener noreferrer">
              View More Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}