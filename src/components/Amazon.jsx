// import "./Amazon.css";
// import icon1 from "../assets/img/rating-0.png";
// import icon2 from "../assets/img/rating-05.png";
// import icon3 from "../assets/img/rating-10.png";
// import icon4 from "../assets/img/rating-15.png";
// import icon5 from "../assets/img/rating-20.png";
// import icon6 from "../assets/img/rating-25.png";
// import icon7 from "../assets/img/rating-30.png";
// import icon8 from "../assets/img/rating-35.png";
// import icon9 from "../assets/img/rating-40.png";
// import icon10 from "../assets/img/rating-45.png";
// import icon11 from "../assets/img/rating-50.png";
// import Product from "./Product";

// const Amazon = () => {

//   const getRatingImage = (stars) => {
//     if (stars >= 0 && stars < 0.5) {
//        icon1;
//     } else if (stars >= 0.5 && stars < 1.0) {
//       return icon2;
//     } else if (stars >= 1.0 && stars < 1.5) {
//       return icon3;
//     } else if (stars >= 1.5 && stars < 2.0) {
//       return icon4;
//     } else if (stars >= 2.0 && stars < 2.5) {
//       return icon5;
//     } else if (stars >= 2.5 && stars < 3.0) {
//       return icon6;
//     } else if (stars >= 3.0 && stars < 3.5) {
//       return icon7;
//     } else if (stars >= 3.5 && stars < 4.0) {
//       return icon8;
//     } else if (stars >= 4.0 && stars < 4.5) {
//       return icon9;
//     } else if (stars >= 4.5 && stars < 5.0) {
//       return icon10;
//     } else {
//       return  icon11;
//     }


    
//   };
//   return (
//     <div className="container">
        
//       {Product.map((item) => (
//         <div className="content" key={item.id}>
//           <img src={item.image} alt="logo" />
//           <p>{item.name}</p>
//           <div className="container-rating">
//             <img className="rating" src={getRatingImage(item.rating.stars)} alt="" />
//             <p>{item.priceCents}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Amazon;
import React from 'react';
import "./Amazon.css";
import icon1 from "../assets/img/rating-0.png";
import icon2 from "../assets/img/rating-05.png";
import icon3 from "../assets/img/rating-10.png";
import icon4 from "../assets/img/rating-15.png";
import icon5 from "../assets/img/rating-20.png";
import icon6 from "../assets/img/rating-25.png";
import icon7 from "../assets/img/rating-30.png";
import icon8 from "../assets/img/rating-35.png";
import icon9 from "../assets/img/rating-40.png";
import icon10 from "../assets/img/rating-45.png";
import icon11 from "../assets/img/rating-50.png";
import Product from "./Product";

const Amazon = () => {

  const myReiting = (uslov) => {
    if (uslov >= 0 && uslov < 0.5) {
      return icon1;
    } else if (uslov >= 0.5 && uslov < 1.0) {
      return icon2;
    } else if (uslov >= 1.0 && uslov < 1.5) {
      return icon3;
    } else if (uslov >= 1.5 && uslov < 2.0) {
      return icon4;
    } else if (uslov >= 2.0 && uslov < 2.5) {
      return icon5;
    } else if (uslov >= 2.5 && uslov < 3.0) {
      return icon6;
    } else if (uslov >= 3.0 && uslov < 3.5) {
      return icon7;
    } else if (uslov >= 3.5 && uslov < 4.0) {
      return icon8;
    } else if (uslov >= 4.0 && uslov< 4.5) {
      return icon9;
    } else if (uslov >= 4.5 && uslov < 5.0) {
      return icon10;
    } else {
      return icon11;
    }
  };

  return (
    <div className="container">
      {Product.map((item) => (
        <div className="content" key={item.id}>
          <img src={item.image} alt="logo" />
          <p>{item.name}</p>
          <div className="container-rating">
            <img className="rating" src={myReiting(item.rating.uslov)} alt="" />
            <p>{item.priceCents}</p>
         
          </div>
          <button  onClick={() => console.log('Button clicked')}>Купить</button>

        </div>
      ))}
    </div>
  );
};

export default Amazon;

