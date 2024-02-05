import "./hotel.css"
import Navbar from "../../components/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/maillist/MailList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelWrapperContent">
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton st 125 New York</span>
            </div>
            <span className="hotelDistasnce">
              Excellent Location - 500m from center
            </span>
            <span className="hotelPrice">
              Book a stay over $114 at this property and get a free Airport Taxi
            </span>
          </div>
          <button className="hotelWrapperBtn">Reserve or Book Now!</button>
        </div>
        <div className="hotelImgContainer">
          <div className="firstSection">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/503787125.webp?k=bf7fb17d985a675b6cc80cba87d5f5f1e50fb95b02ebd6df9ed3133bce18d35e&o=" alt="" className="hImg" />
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/488841022.webp?k=41e6c50a2e8890658262681c5c4c7aaad84b877079c250b7ad00662143035736&o=" alt="" className="hImg" />
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/452641928.webp?k=3a93f0f75289973bca5cf17bfc7d3562fae9cdad766ba77fd4b91db07db559be&o=" alt="" className="hImg" />
          </div>
          <div className="secondSection">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/496834559.webp?k=e5abe9daf71cc64ddeed597d0a153e707b6ac3b446759b85e8771fddade691d5&o=" alt="" className="hImg" />
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/423949254.webp?k=9e7f699abb6e9028cc7b88a16216b76032efdc092d4a429e7765f5e6f4cd6910&o=" alt="" className="hImg" />
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/503044919.webp?k=05ae13b771cda3797ae7b11ab13e5774e56ab08779f4ac4af8e7ed8cd38aa205&o=" alt="" className="hImg" />
          </div>
        </div>
        <div className="bottomSection">
          <div className="leftSection">
            <h1>Stay in the heart of the city</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque omnis quod blanditiis placeat ab neque explicabo ad pariatur soluta deserunt facere labore molestias cupiditate nam accusamus, iusto aspernatur aliquam itaque, ullam, ducimus ratione eius reiciendis odio? Eius, blanditiis! Odio tempore laudantium provident officia ea voluptatibus quisquam. Numquam nam enim provident quidem, autem, eligendi reiciendis consequatur voluptatibus mollitia, neque similique cumque rem tenetur consectetur? Delectus error ullam pariatur nobis, consectetur totam aperiam laboriosam nihil vitae voluptatibus, dolores veniam iste doloremque quod reprehenderit ducimus illum blanditiis molestias cupiditate est debitis consequatur deleniti! Ad nisi quo velit aperiam, accusamus sit deserunt facere!</p>
          </div>
          <div className="rightSection">
            <h3>Perfect for a 9-day stay</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit assumenda corrupti earum ipsum vitae.</p>
            <div className="innerContainer">
            <h2>$945</h2>
            <span>(9 nights)</span>
            </div>
            <button className="rightBtn">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      <MailList/>
      <div className="footer">
      <Footer/>
      </div>
    </>
  )
}

export default Hotel
