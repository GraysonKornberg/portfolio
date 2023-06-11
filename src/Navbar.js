function Navbar() {
  function handleClickScroll(e) {
    const elementName = e.target.innerText.toLowerCase()
    const element = document.getElementById(elementName)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='bg-white h-20 flex shadow-md flex-row space-x-5 items-center justify-center md:justify-end md:px-10 fixed w-screen top-0'>
      <ul className='flex flex-row space-x-5 items-center justify-end px-10'>
        <button
          className='hover:scale-105 transition-all'
          onClick={(e) => handleClickScroll(e)}
        >
          <li className='text-black text-center font-semibold text-xl flex'>
            Home
          </li>
        </button>
        <button
          className='hover:scale-105 transition-all'
          onClick={(e) => handleClickScroll(e)}
        >
          <li className='text-black text-center font-semibold text-xl flex'>
            Projects
          </li>
        </button>
        <button
          className='hover:scale-105 transition-all'
          onClick={(e) => handleClickScroll(e)}
        >
          <li className='text-black text-center font-semibold text-xl flex'>
            Contact
          </li>
        </button>
      </ul>
    </section>
  )
}

export default Navbar
