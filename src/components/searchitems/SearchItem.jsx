import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/488821469.webp?k=f030ddd654b5703d8b8454f708083a934939366a444002eab06387e5b5881c3e&o=" alt="img" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Appertment</h1>
            <span className="siDistance">500m away from center</span>
            <span className="siTaxiOp">Free Airport Taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire Studio . 1 bathroom . 21m*21m 1 full bed
            </span>
            <span className="siCancelOp">
                Free Cancelation
            </span>
            <span className="siCancelTitle">
                You can cancel letter, Book in this geat price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siDetailsUpper">
                <span className="siDetailsText">Excellent</span>
                <button className="siDetailsRating">8.9</button>
            </div>
            <div className="siDetailsLower">
                <span className="siDetailsPrice">$112</span>
                <span className="siDetailsTroll">include taxes and fees</span>
                <button className="siDetailsBtn">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
