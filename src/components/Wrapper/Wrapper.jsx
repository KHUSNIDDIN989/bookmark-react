import React from 'react'

import bookOpen from "../assets/images/home-page/book-open 1.png"
import Delete from "../assets/images/home-page/delete 1.png"
import "./Wrapper.css"
function Wrapper(data) {

  return (
    <div className="wrapper">
      <div className="col-4">
        <h1>Bookmarks</h1>
        <p>If you don’t like to read, you haven’t found the right book</p>
        <div className="card-body">
          {data.data.items?.map(data => {
            return (
              <div class="col-4__card">
                <div class="card-p">
                  <h3>{data.volumeInfo.title}</h3>
                  <p>{data.volumeInfo.authors}</p>
                </div>
                <div class="card-img">
                  <img class="card-img__1" src={bookOpen} alt="book" />
                  <img class="card-img__2" src={Delete} alt="delete" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="col-8">
        {data.data.items?.map(data => {
          return (
            <div key={data.id} className="col-8__card">
              <img src={data.volumeInfo.imageLinks?.thumbnail} alt="img" className="col-8__card__img" />
              <h3>{data.volumeInfo.title}</h3>
              <p>{data.volumeInfo.authors}</p>
              <p>{data.volumeInfo.publishedDate}</p>
              <div className="card-btn">
                <button className="card-btn__book" >Bookmark</button>
                <button className="card-btn__more">More Info</button>
              </div>
              <a href="#link" className="col-8__card__btn" >Read</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Wrapper;