import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Programs from '../components/Programs/Programs'
import Footer from '../components/Footer/Footer'

function Home() {

    return (
      <div className='app-container'>
        <Navbar/>
        <Hero />
        <Programs />
        <Footer />
      </div>
    )
  }
  
  export default Home