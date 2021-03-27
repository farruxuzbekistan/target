import './App.css';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import FAQScreen from './screens/FAQScreen';
import ContactScreen from './screens/ContactScreen';
import NotFound from './screens/NotFound';
import AboutScreen from './screens/AboutScreen';
import CourseScreen from './screens/CourseScreen';
import TeamScreen from './screens/TeamScreen';
import AbiturScreen from './screens/AbiturScreen';
import ITScreen from './screens/ITScreen';


function App() {
  return (
   <Router>
      
       <NavbarComponent />
          <Switch>
               <Route path='/faq' exact component={FAQScreen} />
               <Route path='/contact' exact component={ContactScreen} />
               <Route path='/course' exact component={CourseScreen} />
               <Route path='/about' exact component={AboutScreen} />
               <Route path='/team' exact component={TeamScreen} />
               <Route path='/abitur' exact component={AbiturScreen} />
               <Route path='/it' exact component={ITScreen} />
               <Route path='/' exact component={HomeScreen} />
               <Route path='/not-found' component={NotFound}/>
               <Redirect to='/not-found' />

          </Switch>
       <Footer />
   </Router>
  );
}

export default App;
