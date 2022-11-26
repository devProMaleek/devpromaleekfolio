import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiJavascript } from 'react-icons/si';

import amazon from '../public/images/amazon.jpg';

type Props = {};

const ExperienceCard = (props: Props) => {
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
            src={amazon}
            alt="company-logo"
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          />
        </motion.div>

        <div className="px-0 md:px-10">
          <h4 className="text-3xl font-light">Junior Software Engineer</h4>

          <p className="uppercase font-bold text-2xl mt-1">Amazon</p>

          <div className="flex space-x-2 my-2">
            <SiJavascript className="text-yellow-500 text-2xl" />
            <SiJavascript className="text-yellow-500 text-2xl" />
            <SiJavascript className="text-yellow-500 text-2xl" />
            <SiJavascript className="text-yellow-500 text-2xl" />
          </div>

          <p className="uppercase py-5 text-gray-300">Started work... - Ended work...</p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
          </ul>
        </div>
      </article>
    </>
  );
};

export default ExperienceCard;
