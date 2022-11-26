import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkingExperience from '../components/WorkingExperience';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-primaryDarkRed text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
      <Head>
        <title>devProMaleek's Portfolio</title>
      </Head>

      <main>
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkingExperience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
    </div>
  );
}
