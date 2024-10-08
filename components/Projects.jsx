"use client";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { projects } from "@/data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-[100vh] w-[100vw]" id="projects">
      <span className="text-6xl font-bold text-start flex justify-start text-purple">
        Project.
      </span>

      <div className="flex justify-center items-center h-full ">
        {projects.map((project) => (
          <PinContainer
            title={project.title}
            href={project.link}
            key={project.id}
          >
            <div className="flex flex-col ">
              <Image src={project.img} alt="" width={600} height={200}/>
              <span className="font-bold text-xl">Verzatile - a digital store</span>
              <p className="mb-3">This is where you can buy products and even create one and become seller to monetize it</p>
            </div>
          </PinContainer>
        ))}
      </div>
     
    </div>
  );
};

export default Projects;
