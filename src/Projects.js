import Project from './Project'
import { projectsData } from './ProjectsData'

function Projects() {
  return (
    <section className='bg-white flex flex-col items-center justify-center py-20 space-y-10'>
      {projectsData?.map((data) => (
        <div className='w-1/2 bg-stone-50 shadow-[0px_0px_20px_0px_rgb(0,0,0,0.25)] h-80 rounded-xl p-5'>
          <Project data={data} />
        </div>
      ))}
    </section>
  )
}

export default Projects
