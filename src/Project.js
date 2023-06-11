import { FaCode, FaVideo } from 'react-icons/fa'

function Project(props) {
  const { id, title, description, image, tech, github, demo } = props.data
  return id % 2 === 1 ? (
    <div className='flex flex-col xl:flex-row justify-between items-center h-full xl:space-x-4 xl:space-y-0'>
      <div
        style={{ '--image-url': `url(${image})` }}
        className={`w-[175px] h-[500px] sm:h-[225px] sm:w-[400px] md:h-[225px] md:w-[400px] lg:h-[360px] lg:w-[640px] bg-center bg-cover xl:min-w-[611px] bg-[image:var(--image-url)] rounded-lg order-2 xl:order-1`}
      ></div>
      <div className='flex flex-grow flex-col space-y-2 px-10 justify-evenly xl:order-2 pb-5 xl:pb-0'>
        <h1 className='text-center font-bold text-3xl'>{title}</h1>
        <h2 className='text-center font-semibold'>{description}</h2>
        <ul className='flex flex-row justify-center flex-wrap items-baseline'>
          {tech?.map((t) => (
            <li className='first:my-0 last:my-0 my-[5px]'>
              <div className='mx-1 text-lg text-center bg-stone-50 shadow-[0px_0px_20px_-2px_rgb(0,0,0,0.25)] py-1 px-4 rounded-md'>
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
              <FaCode className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`${demo}`}
              className=''
            >
              <FaVideo className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className='flex flex-col xl:flex-row justify-between items-center h-full xl:space-x-4 xl:space-y-0'>
      <div className='flex flex-grow flex-col space-y-2 px-10 justify-evenly pb-5 xl:pb-0'>
        <h1 className='text-center font-bold text-3xl'>{title}</h1>
        <h2 className='text-center font-semibold'>{description}</h2>
        <ul className='flex flex-row justify-center flex-wrap items-baseline'>
          {tech?.map((t) => (
            <li className='first:my-0 last:my-0 my-[5px]'>
              <div className='mx-1 text-lg text-center bg-stone-50 shadow-[0px_0px_20px_-2px_rgb(0,0,0,0.25)] py-1 px-4 rounded-md'>
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
              <FaCode className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`${demo}`}
              className=''
            >
              <FaVideo className='text-4xl hover:text-blue-600 transition-all' />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={{ '--image-url': `url(${image})` }}
        className={`w-[175px] h-[500px] sm:h-[225px] sm:w-[400px] md:h-[225px] md:w-[400px] lg:h-[360px] lg:w-[640px] bg-center bg-cover xl:min-w-[611px] bg-[image:var(--image-url)] rounded-lg`}
      ></div>
    </div>
  )
}

export default Project
