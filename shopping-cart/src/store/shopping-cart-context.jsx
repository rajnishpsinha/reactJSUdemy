import { createContext } from "react";
  export const CartContext= createContext({
    items:[],
    addItemToCart:()=>{},
    updateCartItemQuantity:()=>{}
});

 export default CartContext;