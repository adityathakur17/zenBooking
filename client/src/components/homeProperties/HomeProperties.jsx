import React from 'react'
import "./homeProperties.css"
import useFetch from '../../hooks/useFetch'
function HomeProperties() {
  const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=4");

  return (
    <div className="hp">
      {loading ? "loading" : (
        <>
          {data.map((item) => (
            <div className="hpItem" key={item._id}>
              <img 
                src={item.photos[0]}
                alt="" 
                className="hpImg" 
              />
              <span className="hpName">{item.name}</span>
              <span className="hpCity">{item.city}</span>
              <span className="hpPrice">Starting from {item.cheapestPrice}</span>
              {item.rating && <div className="hpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
}


export default HomeProperties