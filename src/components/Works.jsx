import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="w-full sm:w-[360px]">
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    if (selectedCategory === "Design" && category === "All") {
      setSelectedCategory("");
      setTimeout(() => {
        setSelectedCategory("All");
      }, 0);
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.tags.some(tag => tag.name === selectedCategory));

  const allButtonClass = `rounded-md px-4 py-2 ${selectedCategory === "All" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} sm:mr-2 sm:mb-0 mb-2`;
  const designButtonClass = `rounded-md px-4 py-2 ${selectedCategory === "Design" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} sm:mr-2 sm:mb-0 mb-2`;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "spring", 0, 0.5)}
          className="w-full md:w-4/5 text-gray-300 text-[16px] mt-8"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mb-4 flex justify-center py-8">
        <button
          className={allButtonClass}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        <button
          className={designButtonClass}
          onClick={() => handleCategoryChange("Design")}
        >
          Design
        </button>
      </div>

      <div className="mt-16 flex flex-wrap gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works);
