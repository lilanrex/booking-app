import "./featuredHomes.css";

function FeaturedHomes () {

    return(
      <div className="fp">       
        <div className="fpItem">
         <img className="fpImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/29466558.jpg?k=b374e34682efcde472aaebbeb8a8507c1b93d3e380c1b33cbcb708026e36afd3&o=&hp=1" />
         <span className="fpName">Cheval Three Quays</span>
         <span className="fpCity">London</span>
         <span className="fpPrice">Starting from $205</span>
         <div className="fpRating">
           <button>8.9</button>
           <span>Excellent</span>
         </div>
        </div>
        <div className="fpItem">
         <img className="fpImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976883.jpg?k=dc34ebff2e20cef29ea5fceb6d327cd2087e6d8626c039be4c841a58d9c36abc&o=&hp=1" />
         <span className="fpName">LivinParis</span>
         <span className="fpCity">Paris</span>
         <span className="fpPrice">Starting from $500</span>
         <div className="fpRating">
           <button>9.7</button>
           <span>Excellent</span>
         </div>
        </div>
        <div className="fpItem">
         <img className="fpImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/177954582.jpg?k=ff6f19fa263f9b3afac23df3338d5858bc21639cbcc510c57223c1ae8a3ecd2d&o=&hp=1" />
         <span className="fpName">Eden Hotel Amsterdam</span>
         <span className="fpCity">Netherlands</span>
         <span className="fpPrice">Starting from $170</span>
         <div className="fpRating">
           <button>8.7</button>
           <span>Excellent</span>
         </div>
        </div>
        <div className="fpItem">
         <img className="fpImg" src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45334041.jpg?k=c92853bf68e01d204df7f7fa52221f178aea988a0cd2ca36eee59e2ed06928e2&o=&hp=1" />
         <span className="fpName">Aparthotel Stare Miastro</span>
         <span className="fpCity">Madrid</span>
         <span className="fpPrice">Starting from $602</span>
         <div className="fpRating">
           <button>9.2</button>
           <span>Excellent</span>
         </div>
        </div>
      </div>  
    );

}

export default FeaturedHomes;