
import React from "react";
import { TerminalIcon, UsersIcon, BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center">
      <AcademicCapIcon className="w-10 inline-block mb-4" />      
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
          Education / Work Experience
        </h1>
        <div className="flex flex-wrap m-1">
          {experiences.map((experience) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <div className="inline-flex items-center">
                  <img
                    alt="experience"
                    src={experience.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {experience.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {experience.company}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed mb-6">{experience.quote}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}