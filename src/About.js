import headshot from './grayson-headshot.jpg'

function About() {
  return (
    <section className='flex flex-col items-center justify-center w-screen pt-48 pb-24 space-y-10'>
      <div className='w-1/2 flex flex-row h-full items-center space-x-10'>
        <div
          className='shrink-0 bg-cover bg-left rounded-full border-black border-solid border-2'
          style={{
            backgroundImage: `url(${headshot})`,
            height: '250px',
            width: '250px',
          }}
        />
        <div className='w-2/3 flex flex-col space-y-8'>
          <h1 className='text-6xl font-bold text-center text-stone-900'>
            Grayson Kornberg
          </h1>
          <h1 className='text-lg text-center text-stone-700'>
            I am a Junior at the University of Florida double majoring in
            Computer Science and Statistics! Throughout my life, I have had an
            affinity for mathematics, so I was immediately drawn to the
            problem-solving nature of programming. My passion for programming
            and love for math has led to my interest in AI and machine learning,
            although I am developing a wide skillset of software engineering
            tools as well.
          </h1>
        </div>
      </div>
      <ul className='flex flex-row space-x-10 h-10 w-full items-center justify-center'>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-blue-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/GraysonKornberg'
        >
          <li>GitHub</li>
        </a>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-blue-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/GraysonKornberg'
        >
          <li>Resume</li>
        </a>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-blue-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/GraysonKornberg'
        >
          <li>LinkedIn</li>
        </a>
      </ul>
    </section>
  )
}

export default About
