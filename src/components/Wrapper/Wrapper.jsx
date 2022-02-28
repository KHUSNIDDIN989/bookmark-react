import React from 'react'
import "./Wrapper.css"
function Wrapper() {
  return (
    <div className="wrapper">
        <div className="col-4">
            <h1>Bookmarks</h1>
            <p>If you don’t like to read, you haven’t found the right book</p>
            <div className="card-body">
        </div>
        </div>
        <div className="col-8">
        <div className="col-8__card">
      <img src="ewf" alt="img" className="col-8__card__img" />
      <h3>fre</h3>
      <p>red</p>
      <p>refer</p>
      <div className="card-btn">
        <button className="card-btn__book" >Bookmark</button>
        <button className="card-btn__more">More Info</button>
      </div>
      <a href="#link" className="col-8__card__btn" >Read</a>
    </div>
            <div className="col-8__card">
                <a href="#link" className="col-8__card__btn" >Read</a>
            </div>
        </div>
    </div>
  )
}
export default Wrapper;