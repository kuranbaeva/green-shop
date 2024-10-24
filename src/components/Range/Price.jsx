// import React, { useState } from 'react';
// import Slider from 'react-slider';
// import './Price.scss';

// const MIN = 0;
// const MAX = 2000;

// export default function PriceFilter({ priceRange, onPriceChange }) {
//   const [values, setValues] = useState([MIN, MAX]);

//   const handlePriceChange = (newValues) => {
//     setValues(newValues);
//     onPriceChange(newValues);
//   };

//   return (
//     <div className="price">
//       <div className="price__box">
//         <h3>Price Range</h3>
//         <Slider
//           className="slider"
//           value={values}
//           onChange={handlePriceChange}
//           min={MIN}
//           max={MAX}
//         />
//         <div className="price__values">
//           <p>Price:</p>
//           <span className="price__value">${values[0]} - ${values[1]}</span>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Slider from 'react-slider';
import './Price.scss';

const MIN = 0;
const MAX = 2000;

export default function PriceFilter({ priceRange, onPriceChange }) {
  const [values, setValues] = useState(priceRange);  // Начальное значение берется из пропсов

  const handlePriceChange = (newValues) => {
    setValues(newValues);
    onPriceChange(newValues);  // Вызываем функцию из родителя, передавая новый диапазон
  };

  return (
    <div className="price">
      <div className="price__box">
        <h3>Price Range</h3>
        <Slider
          className="slider"
          value={values}
          onChange={handlePriceChange}
          min={MIN}
          max={MAX}
        />
        <div className="price__values">
          <p>Price:</p>
          <span className="price__value">${values[0]} - ${values[1]}</span>
        </div>
      </div>
    </div>
  );
}
