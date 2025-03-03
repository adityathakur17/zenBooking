import useFetch from "../../hooks/useFetch"
import "./featured.css"

function Featured() {

  const {data, loading, error} = useFetch("api/hotels/countByCity?cities=berlin,madrid,london")



  return (
    <div className="featured">
      {loading ?"Loading Please Wait":
      <><div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} Properties</h2>
        </div>
      </div></>}
    </div>
  )
}

export default Featured