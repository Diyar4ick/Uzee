import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Contacts from './components/Contacts/Contacts'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
       </Routes>
    </Router>
  )
}

export default App
