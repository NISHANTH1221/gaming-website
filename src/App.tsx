import React from 'react'
import './App.css'

const HeroSection = React.lazy(() => import('./components/hero'));
const Header = React.lazy(()=>import("./components/header"))
function App() {
  return (
    <div className='bg-fairblack m-0 p-0 w-full'>
      <Header />
      <section>
        <HeroSection />
      </section>
    </div>
  )
}

export default App
