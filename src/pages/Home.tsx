import React from 'react'
import HeroSliders from '../components/HeroSliders'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <>
      <HeroSliders/>
     <section className='min-h-[70vh] mt-5 relative z-10'>
      
     <Cards/>
     </section>
    </>
  )
}

export default Home
