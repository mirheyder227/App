// // Import necessary libraries and styles
// import React from 'react';
// import styles from './basket.module.scss';
// import { Button } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const Basket = ({ basket }) => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.BasketContent}>
//       {/* Render basket items */}
//       <div className={styles.Basket}>
//         {basket.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             <p>${item.price}</p>
//           </div>
//         ))}
//       </div>

//        {basket.length ? null : (
//         <div className={styles.emptyBasket}>
//           <h3>Basket is empty</h3>
//           <Button onClick={() => navigate('/')}>Go shopping</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Basket;
