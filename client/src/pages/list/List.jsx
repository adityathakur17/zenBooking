import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useFetcher, useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)

  const {data, loading, error} = useFetcher(`/api/hotels/city=${destination}`)

  
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder='destination'/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yy")} to ${format(date[0].endDate, "dd/MM/yy")} `}</span>
              {openDate && <DateRange
              onChange={(item)=>setDate([item.selection])} minDate={new Date()} />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOption">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per night</small></span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {loading?"Please Wait Loading":<>
            {data?.map(item=>(
            <SearchItem item={item} key={item._id}/>
            ))}
            </>
             }
 
          </div>
        </div>
      </div>
    </div>
  )
}

export default List