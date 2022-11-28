import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};


const About = ({pageInfo}: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative min-h-screen items-center text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto"
      >
        <h3 className="section-title">About</h3>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-48 md:h-96 xl:w-[500px] xl:h-[600px]"
        >
          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            alt="aboutPix"
            width="500"
            height="600"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-48 md:h-96 xl:w-[500px] xl:h-[600px]"
          />
        </motion.div>

        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            {' '}
            Here is a <span className="underline decoration-red-500/50">little</span> background
          </h4>
          <p className="text-base">
            {pageInfo.backgroundInformation }
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
