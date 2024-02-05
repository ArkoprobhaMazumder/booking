import "./feature.css"

const Feature = () => {
  return (
   <>
   <div className="featured">
    <div className="featuredItem">
        <img src="https://q-xx.bstatic.com/xdata/images/city/526x420/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://r-xx.bstatic.com/xdata/images/city/526x420/684501.jpg?k=225f7713b3f47f0c2c580c34c35582ba70331757bcc8dc32e7f17072c80805ff&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Delhi</h1>
            <h2>234 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>Mumbai</h1>
            <h2>343 properties</h2>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Feature
