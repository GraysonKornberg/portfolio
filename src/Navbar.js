function Navbar() {
  return (
    <div className='bg-white h-20 flex shadow-md flex-row space-x-5 items-center justify-end px-10'>
      <p className='text-black text-center font-semibold text-xl flex'>Home</p>
      <p className='text-black text-center font-semibold text-xl flex'>About</p>
      <p className='text-black text-center font-semibold text-xl flex'>
        Projects
      </p>
      <p className='text-black text-center font-semibold text-xl flex'>
        Contact
      </p>
    </div>
  )
}

export default Navbar
