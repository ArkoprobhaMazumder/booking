import Navbar from "../../components/Navbar"
import Header from "../../components/header/Header"
import "./list.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from 'date-fns';
import SearchItem from "../../components/searchitems/SearchItem"
import { useNavigate } from 'react-router-dom';


const List = () => {


  const navigate=useNavigate();
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)

  const handleOnClick=()=>{
        navigate("/hotels")
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Cheack-in Date </label>
              <span>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Adult
                  </span>
                  <input type="number" min={1} placeholder={1} className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Children
                  </span>
                  <input type="number" min={0} placeholder={0} className="lsOptionsInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionsText">
                    Room
                  </span>
                  <input type="number" min={1} placeholder={1} className="lsOptionsInput" />
                </div>
              </div>
            </div>
            <button onClick={handleOnClick}>Search</button>
          </div>
          <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
