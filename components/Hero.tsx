import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The name is ${pageInfo?.name}`, 'The guy who likes to code', 'The guy who loves NextJS and TailwindCSS'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Hero-picture"
          className="relative rounded-full h-32 w-32 mx-auto object-cover object-left-top"
          width={128}
          height={128}
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[12px]">{pageInfo?.role}</h2>
          <h1 className="text-3xl lg:text-4xl font-semibold px-10 py-3">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="red" />
          </h1>
          <div className="space-x-3 py-3">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
