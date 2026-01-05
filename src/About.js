import headshot from './grayson-headshot.jpg'

function About() {
    return (
        <section
            id='home'
            className='flex flex-col items-center justify-center w-screen pt-48 pb-24 md:space-y-10'
        >
            <div className='w-screen md:w-4/5 xl:w-2/3 flex flex-col md:flex-row h-full items-center sm:space-x-4 xl:space-x-10 pb-5 md:pb-0'>
                <div
                    className='h-[200px] w-[200px] xl:h-[250px] xl:w-[250px] shrink-0 bg-cover bg-left rounded-full border-black border-solid border-2'
                    style={{
                        backgroundImage: `url(${headshot})`,
                    }}
                />
                <div className='w-4/5 md:w-2/3 flex flex-col space-y-8'>
                    <h1 className='text-6xl font-bold text-center text-stone-900'>
                        Grayson Kornberg
                    </h1>
                    <h1 className='text-lg text-center text-stone-700'>
                        My lifelong love for mathematics naturally drew me to the
                        problem-solving aspects of programming, but what truly
                        surprised me is how coding became an incredible creative
                        outlet. My passion for creativity pushes me to think
                        outside the box, both in my approach to programming and
                        in everything I do.
                    </h1>
                </div>
            </div>
            <ul className='flex flex-row flex-wrap space-x-3 h-10 w-full items-baseline justify-center'>
                <a
                    className='text-xl text-center bg-stone-200 shadow-md hover:scale-105 transition-all py-1 px-4 rounded-md'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/GraysonKornberg'
                >
                    <li>GitHub</li>
                </a>
                <a
                    className='text-xl text-center bg-stone-200 shadow-md hover:scale-105 transition-all py-1 px-4 rounded-md'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://drive.google.com/file/d/1fy74NCQvt0ytvD82nhFTjhcEWixX1uYy/view?usp=sharing'
                >
                    <li>Resume</li>
                </a>
                <a
                    className='text-xl text-center bg-stone-200 shadow-md hover:scale-105 transition-all py-1 px-4 rounded-md'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/grayson-kornberg/'
                >
                    <li>LinkedIn</li>
                </a>
            </ul>
        </section>
    )
}

export default About
