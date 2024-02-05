import Navbar from '../../components/Navbar'
import FeatureProperties from '../../components/fatureProperties/FeatureProperties'
import Feature from '../../components/feature/Feature'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/maillist/MailList'
import Property from '../../components/propertise/Property'
import  './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Feature/>
        <h1 className="homeTitle">Browser by property type</h1>
        <Property/>
        <h1 className='homeTitle'>Homes guests love</h1>
        <FeatureProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
