import './App.css'
import Nav from "./nav.jsx"
import Hero from "./Hero.jsx"
import Card from "./card.jsx"

function App() {
  
  {/*<Hero/>*/}
  return (
    <>
      <Nav/>  
      <Hero/>
      <div className='cards'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </>
  )
}

export default App
