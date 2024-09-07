import './App.css'
import NavBar from './components/NavBar';
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() { 

  return (
    <>
        <NavBar /> 
        <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <Manager/> 
        </div>
       <Footer/>
    </>
  )
}

export default App