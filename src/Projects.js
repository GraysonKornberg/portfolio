import Project from './Project'
import { projectsData } from './ProjectsData'

function Projects() {
  return (
    <section
      id='projects'
      className='bg-white flex flex-col items-center justify-center py-20 space-y-10'
    >
      {projectsData?.map((data) => (
        <div className='w-2/3 xl:w-[1280px] bg-stone-50 shadow-[0px_0px_20px_0px_rgb(0,0,0,0.25)] h-[40rem] xl:h-[24rem] rounded-xl p-5 border-box'>
          <Project data={data} />
        </div>
      ))}
    </section>
  )
}

export default Projects
