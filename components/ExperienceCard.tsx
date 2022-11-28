import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiJavascript } from 'react-icons/si';

import amazon from '../public/images/amazon.jpg';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <>
      <article className="flex flex-col rounded-lg items-center mt-12 space-y-7 flex-shrink-0 w-[450px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden hover:opacity-100">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        >
          <Image
            src={urlFor(experience.companyImage).url()}
            alt="company-logo"
            width={500}
            height={200}
            // className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          />
        </motion.div>

        <div className="px-0 md:px-10">
          <h4 className="text-3xl font-light">{experience.jobTitle}</h4>

          <p className="uppercase font-bold text-2xl mt-1">{experience.company}</p>

          <div className="flex space-x-2 my-2">
            {experience.technologies.map((technology) => (
              <img
                key={experience._id}
                src={urlFor(technology.image).url()}
                alt="Technology Logo"
                className="h-10 w-10 rounded-full"
              />
            ))}
          </div>

          <p className="uppercase py-5 text-gray-300">
            {new Date(experience.dateStarted).toDateString()} -{' '}
            {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
          </p>

          <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
            {experience.points.map((point,index) => (
              <li key={index}>{point}</li>

            ))}
          </ul>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
