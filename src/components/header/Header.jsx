import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
// import { useNavigate } from 'react-router-dom';
const Header = (props) => {
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1
    })
    // const navigate=useNavigate();

    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    // const handleChange=()=>{
    //         navigate("/lists", { state:{destination,date}});
    // };

    return (
        <>
            <div className="header">
                <div className={props.type === 'list' ?"headerContainer listmode":"headerContainer"}>
                    <div className="headerList">
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flights</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentals</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airport taxis</span>
                        </div>
                    </div>
                    {props.type !== "list" &&
                        <>
                   <h1 className='headerTitle'>A Lifetime of discounts? Its Genius.</h1>
                    <p className='headerDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui neque distinctio atque, similique expedita exercitationem.</p>
                    <button className='headerButton'>Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className='headerIcon' />
                            <input
                                type="text"
                                placeholder='Where are you going'
                                className='headerSearchInput'
                                onChange={e=>setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                            <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(
                                date[0].startDate,
                                "dd/MM/yyyy"
                            )} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date} 
                                className='date'
                                />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span className='headerSearchText'>{`${options.adult} adult .${options.children} children .${options.room} room `}</span>
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerButton" >Search</button>
                        </div>
                    </div> </> }
                </div>
            </div>
        </>

    )
}

export default Header
