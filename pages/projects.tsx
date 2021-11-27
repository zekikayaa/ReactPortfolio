import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeItem, setActiveItem] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category == "all") {
      setProjects(projectsData);
      setActiveItem("all");
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActiveItem(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={activeItem}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
