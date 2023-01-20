import React,{useState} from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'
import TextForm from './TextForm'
import Alert from './Alert'
import About from './About'
import{ Routes, Route, BrowserRouter } from 'react-router-dom'



function App() {

 const[mode,setMode]=useState('light');

  //function created for the event handler
  const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor= 'rgb(9 51 69)'
    showAlert( "Enabled dark mode","success")
    document.title = "Textutil-DarkMode"

    setInterval(()=>{
      document.title ="Textutils is amazing"
    },3000)
    setInterval(()=>{
      document.title ="Download textutils"
    },1500)

  }else{
    setMode('light')
    document.body.style.backgroundColor= '#fff'
    showAlert( "Enabled light mode","warning")
    document.title = "Textutil-LightMode"
  }
 }

  const[alert,setAlert] =useState(null) ; 

  //function created to get the message and its type
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },2000)
  }


  return (
    <>
<BrowserRouter>

  <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}  />
  <Alert alert={alert} />
  
    <Routes>
      <Route path="/" element={ <TextForm heading="Enter and analyze the text" mode={mode} showAlert={showAlert}/>  } />
      <Route path="about" element={  <About/>}/>
    </Routes>
   
</BrowserRouter>
   </>
  )
}

export default App

Navbar.propTypes = {
  title:PropTypes.string,
}