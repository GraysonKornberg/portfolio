import headshot from './grayson-headshot.jpg'

function About() {
  return (
    <div className='flex flex-col items-center justify-center w-screen py-16 space-y-10'>
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
      <div className='flex flex-row space-x-10 h-10 w-full items-center justify-center'>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-stone-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          href='https://github.com/GraysonKornberg'
        >
          GitHub
        </a>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-stone-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          href='https://github.com/GraysonKornberg'
        >
          Resume
        </a>
        <a
          className='text-xl bg-stone-200 shadow-md hover:bg-stone-400 hover:scale-105 transition-all py-1 px-4 rounded-md'
          href='https://github.com/GraysonKornberg'
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default About
