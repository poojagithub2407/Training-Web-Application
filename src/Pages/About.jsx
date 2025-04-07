import MainAbout from '../components/About/MainAbout'
import SubMainAbout from '../components/About/SubMainAbout'
import SubMain from '../components/Home/SubMain'
import Testimonials from '../components/About/Testimonials'

const About = () => {
     return (
          <div className=''>
               <MainAbout />
               <SubMainAbout />
               <SubMain />
               <Testimonials />
          </div>
     )
}

export default About