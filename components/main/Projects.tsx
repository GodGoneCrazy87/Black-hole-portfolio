import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <section id= "projects" className='flex flex-col items-center justify-center '>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          My Projects
      </h1>
      <div className='h-full w-full flex fles-col md:flex-row gap-10 px-10'>
          <ProjectCard 
              src='/NextWebsite.png'
              title="Modern Next.js Portfolio"
              description=" Lorem ipsum dolor sit amet, consectetur adip, consectetur adipiscing elit, sed diam nonumy lorem. Lorem ipsum dolor sit amet, consect lorem, sed diam nonumy lorem. Lorem"
          />
          <ProjectCard 
                  src='/CardImage.png'
                  title="Interactive Website Cards"
                  description=" Lorem ipsum dolor sit amet, consectetur adip, consectetur adipiscing elit, sed diam nonumy lorem. Lorem ipsum dolor sit amet, consect lorem, sed diam nonumy lorem. Lorem"
          />
          <ProjectCard 
                  src='/SpaceWebsite.png'
                  title="Space Themed Website"
                  description=" Lorem ipsum dolor sit amet, consectetur adip, consectetur adipiscing elit, sed diam nonumy lorem. Lorem ipsum dolor sit amet, consect lorem, sed diam nonumy lorem. Lorem"
          />
      </div>
    </section>
  );
}

export default Projects;

