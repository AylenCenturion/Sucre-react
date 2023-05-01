// import React from "react";
// import {
//   CartCardImg,
//   CartCardStyled,
//   CartProductData,
//   QuantityHandler,
//   QuantityRegulator,
// } from "./CartCardStyled";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../redux/cart/cart";

// export default function CartCard(props) {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <CartCardStyled>
//         <CartCardImg>{/* <img src={img} alt={name} /> */}</CartCardImg>

//         <CartProductData>
//           {/* <p>{name}</p>
//           <span>{price}</span> */}
//         </CartProductData>

//         <QuantityRegulator>
//           <QuantityHandler
//             c={props.color}
//             onClick={() => dispatch(cartActions.removeFromCart())}
//           >
//             -
//           </QuantityHandler>
//           {/* <p>{quantity}</p> */}
//           <QuantityHandler
//             c={props.color}
//             onClick={() => dispatch(cartActions.addToCart())}
//           >
//             +
//           </QuantityHandler>
//         </QuantityRegulator>
//       </CartCardStyled>
//     </>
//   );
// }
