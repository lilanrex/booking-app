import "./search.css";

function SearchItem () {
   return(
    <div className="searchItem">
        <img 
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/280146075.webp?k=f9ddb7065825c7b856d2d3dcc23fd6f062de5d5462d5fd3d3cfa582d7e1301e5&o=&s=1"  
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free Airport Taxi</span>
          <span className="siSubtitle">
             Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire Studio * 1 bathroom * 21m x 2 * 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$345</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availablity</button>
          </div>
        </div>
    </div>
   );
}

export default SearchItem;