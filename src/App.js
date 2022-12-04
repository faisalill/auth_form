import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import {HomePage} from './pages/HomePage'
import NavBar from './components/NavBar';
function App() {
  return (
   <div className='flex justify-center'>
     <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<SignUp />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
      
     </Router>
   </div>
  );
}

export default App;
