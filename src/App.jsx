import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Service1 from "./components/Services/Service1"
import Service2 from "./components/Services/Service2"
import Service3 from "./components/Services/Service3"
import Activity from "./components/Activity/Activity"
import Experience from "./components/Experience/Experience"
import Advanteges from "./components/Advantages/Advanteges"
import History from "./components/Home/History"
import Structure from "./components/Home/Structure"

function App() {

  return (
    <Router>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/structure" element={<Structure/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/exp" element={<Experience/>}/>
        <Route path="/adv" element={<Advanteges/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/service-1" element={<Service1/>}/>
        <Route path="/service-2" element={<Service2/>}/>
        <Route path="/service-3" element={<Service3/>}/>
       </Routes>
       <Footer/>
    </Router>
  )
} 

export default App
