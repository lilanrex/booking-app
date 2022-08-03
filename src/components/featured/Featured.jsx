import "./featured.css";

function Featured () {
return(
    <div className="featured">
        <div className="featuredItem">
           <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/50168594.jpg?k=42fa7c6c6f76cf6c9a9667a1b1cdc962b34c9fb1b067b023183d7afa95dd58be&o=&hp=1" 
           className="featuredImg" />
           <div className="featuredTitles">
              <h1>Reno</h1>
              <h2>563 properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/235963937.jpg?k=bb6a81ec9c54d0069a865d0b94441122ba26bc85d9b7f717bcac22f5f23ab2ee&o=&hp=1" 
           className="featuredImg" />
           <div className="featuredTitles">
              <h1>Long Island</h1>
              <h2>823 properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/248873402.jpg?k=f0c4ee26430c6c7d7ac8e1a6893bfc0c1f7a9dea85aff0bbb2c2cf93f4f708fd&o=&hp=1" 
           className="featuredImg" />
           <div className="featuredTitles">
              <h1>Austin</h1>
              <h2>763 properties</h2>
           </div>
        </div>
    </div>
);
}

export default Featured;