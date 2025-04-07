import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Trainers from './Pages/Trainers'
import Event from './Pages/Event'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import GetStarted from './Pages/GetStarted'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/trainers' element={<Trainers />} />  {/* Fixed path */}
        <Route path='/events' element={<Event />} />  {/* Fixed path */}
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/getStart' element={<GetStarted/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
