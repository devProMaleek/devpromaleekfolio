import { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkingExperience from '../components/WorkingExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSKills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSKills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};

export default function Home({ socials, pageInfo, experiences, skills, projects }: Props) {
  return (
    <div className="bg-primaryDarkRed text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <main>
        {/* Header */}
        <section className="">
          <Header socials={socials} />
        </section>
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkingExperience experiences={experiences} />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInfo} />
        </section>
      </main>
    </div>
  );
}
