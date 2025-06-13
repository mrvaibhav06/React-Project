import './App.css'
import react, { useState, useEffect, useRef } from 'react'
import Resume from './components/Resume'
import NonExistenPage from './components/NonExistenPage'
import PromptUser from './components/PromptUser'
// import{useNavigate,link}from 'react-router-dom'
import{HiArrowRight} from 'react-icons/hi' 

const converter = require('number-to-words')
function App() {
 const [userInfo, setUserInfo] = useState({
   name: '',
   email: '',
   phone: '',
   address: '',
   education: [],
   experience: [],
   skills: [],
   projects: [],
 })
 const [source , setSource] = useState('')
const random_number = Math.floor(Math.random() * 10e4);

 const random_alpha_num =converter.toWords(random_number)
 const getRandomNumber =(randNum) => {
   return converter.toWords(randNum)}
   const generateImage =() => {
    setSource(`https://robohash.org/stefan${random_alpha_num}.png?set=set4&size=200x200`)
    console.log(source)
  }

  useEffect(() => {
    generateImage()}, [])

    function handleChange(e){
      setUserInfo(prevInfo => {
        return{
          ...prevInfo,
          [e.target.name]: e.target.value
        }
      
    })}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PromptUser userInfo={userInfo} setUserInfo={setUserInfo} handleChange={handleChange} source={source} />} />
        <Route path="/resume" element={<Resume userInfo={userInfo} source={source} />} />
        <Route path="*" element={<NonExistenPage />} />
      </Routes>
    </Router>
  )
}

export default App
