import { FaGithub, FaCode } from 'react-icons/fa'

function Project(props) {
  const { id, title, description, image, tech, github, demo } = props.data
  return id % 2 === 1 ? (
    <div className='flex flex-row justify-between h-full space-x-4'>
      <div
        style={{ '--image-url': `url(${image})` }}
        className={`bg-cover min-w-[500px] bg-[image:var(--image-url)] rounded-lg`}
      ></div>
      <div className='flex flex-grow flex-col space-y-5 px-10 justify-evenly'>
        <h1 className='text-center font-bold text-3xl'>{title}</h1>
        <h2 className='text-center font-semibold'>{description}</h2>
        <ul className='flex flex-row justify-evenly'>
          {tech?.map((t) => (
            <li>
              <div className='text-xl bg-stone-50 shadow-[0px_0px_20px_-2px_rgb(0,0,0,0.25)] py-1 px-4 rounded-md'>
                {t}
              </div>
            </li>
          ))}
        </ul>
        <ul className='flex flex-row justify-center space-x-10'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={github}
              className=''
            >
              <FaGithub className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`"${demo}"`}
              className=''
            >
              <FaCode className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className='flex flex-row justify-between h-full space-x-4'>
      <div className='flex flex-grow flex-col space-y-5 px-10 justify-evenly'>
        <h1 className='text-center font-bold text-3xl'>{title}</h1>
        <h2 className='text-center font-semibold'>{description}</h2>
        <ul className='flex flex-row justify-evenly'>
          {tech?.map((t) => (
            <li>
              <div className='text-xl bg-stone-50 shadow-[0px_0px_20px_-2px_rgb(0,0,0,0.25)] py-1 px-4 rounded-md'>
                {t}
              </div>
            </li>
          ))}
        </ul>
        <ul className='flex flex-row justify-center space-x-10'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={github}
              className=''
            >
              <FaGithub className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`"${demo}"`}
              className=''
            >
              <FaCode className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{ '--image-url': `url(${image})` }}
        className={`bg-cover min-w-[500px] bg-[image:var(--image-url)] rounded-lg`}
      ></div>
    </div>
  )
}

export default Project
