// import React, { useState } from 'react';

// const useBasket = () => {
//   const [basket, setBasket] = useState([]);

//   const addToBasket = async ({
//     id,
//     color,
//     imageUrl,
//     attributes: { name, size, price, category, description },
//   }) => {
//     try {
//       // Use setBasket to update the basket state
//       setBasket((prevBasket) => [
//         ...prevBasket,
//         {
//           id,
//           color,
//           imageUrl,
//           attributes: {
//             name,
//             size,
//             price,
//             category,
//             description,
//           },
//         },
//       ]);
//     } catch (error) {
//       // Handle errors here
//       console.error('Error adding to basket:', error);
//     }
//   };

//   return { basket, addToBasket };
// };

// export default useBasket;
