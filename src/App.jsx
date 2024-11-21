import { useState, useEffect, createContext } from 'react'
import './index.css'
import Nav from './Nav-folder/Nav'
import MenuBar from './Nav-folder/MenuBar'
import Home from './FirstPage/Home'
import LearnPage from './Scondpage/Learn'
import ThirdPage from './ThirdPage/ThirdPage'
import Certificate from './Certificate'
import FourthPage from './FourthPage/fourthPage'
import FifthPage from './FifthPage/FifthPage'
import Footer from './Footer/footer'

export const ClickMenueContext = createContext({});

function App() {
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <>
      <div className='App'>

        <ClickMenueContext.Provider value={{ clickMenu, setClickMenu }}>
          <Nav />
        </ClickMenueContext.Provider>
        <Home />
        <LearnPage />
        <ThirdPage/>
        <Certificate/>
        <FourthPage/>
        <FifthPage/>
        <Footer/>

      </div>
    </>
  )
}

export default App
