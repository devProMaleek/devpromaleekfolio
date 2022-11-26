import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="section-title">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
          {projects.map((project, index) => (
            <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.div
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              >
                <Image
                  src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                  alt="Project pic"
                  width={500}
                  height={300}
                />
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-3xl font-semibold text-center">
                  <span className="underline decoration-red-500/50 pb-2">
                    Case Study {index + 1} of {projects.length}:
                  </span>{' '}
                  UPS clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam cupiditate alias! Possimus enim
                  vel neque eum sed soluta dolores, maxime non similique tempore veniam aliquam quibusdam veritatis amet
                  numquam quia dolor, impedit sequi velit qui repellat provident laudantium! In repudiandae asperiores
                  quia, nisi quae nesciunt natus ducimus dignissimos corporis!
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[21%] bg-red-200/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </>
  );
};

export default Projects;
