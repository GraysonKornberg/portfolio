import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div className='bg-stone-50 w-screen h-screen max-w-full overflow-x-hidden'>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
