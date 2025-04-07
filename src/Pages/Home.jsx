import Header from "../components/Home/Header"
import Main from './../components/Home/Main';
import SubMain from './../components/Home/SubMain';
import Decription from './../components/Home/Decription'
import Courese from './../components/Home/Courese';
import MainCourses from './../components/MainCoures';
import Trainers from './../components/Trainers';

const Home = () => {
     return (
          <div>
               <Header />
               <Main />
               <SubMain />
               <Decription />
               <Courese />
               <MainCourses />
               <Trainers />
          
          </div>
     )
}

export default Home