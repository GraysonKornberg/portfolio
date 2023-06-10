function Navbar() {
  return (
    <section className='bg-white h-20 flex shadow-md flex-row space-x-5 items-center justify-end px-10 fixed w-screen top-0'>
      <ul className='flex flex-row space-x-5 items-center justify-end px-10'>
        <a href='/#'>
          <li className='text-black text-center font-semibold text-xl flex'>
            Home
          </li>
        </a>
        <a href='/#'>
          <li className='text-black text-center font-semibold text-xl flex'>
            Projects
          </li>
        </a>
        <a href='/#'>
          <li className='text-black text-center font-semibold text-xl flex'>
            Contact
          </li>
        </a>
      </ul>
    </section>
  )
}

export default Navbar
