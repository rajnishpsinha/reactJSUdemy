import { useState, useReducer } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContext from './store/shopping-cart-context.jsx';

import { DUMMY_PRODUCTS } from './dummy-products.js';

const shoppingCartReducer=(state, action)=>{
  if(action.type==='ADD_ITEM'){
  const updatedItems = [...state.items];
  console.log('updatedItems from add',updatedItems)

  const existingCartItemIndex = updatedItems.findIndex(
    (cartItem) => cartItem.id === action.payload
  );
  const existingCartItem = updatedItems[existingCartItemIndex];

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
    updatedItems.push({
      id: action.payload,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  }

  return{
    items: updatedItems,
  } ;
}

  if(action.type==='UPDATE_ITEM'){


    console.log('itemId',action.payload.productId )
    
      const updatedItems = [...state.items];
      console.log('updatedItems',updatedItems)
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    
  }

return state;}
function App() {
  const[shoppingCartState, shoppingCartDispatch]=useReducer(shoppingCartReducer,
    {
      items: [],
    }
    );

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type:'ADD_ITEM',
      payload:id
    })   
  }

  function handleUpdateCartItemQuantity(productId, amount){
    shoppingCartDispatch({
      type:'UPDATE_ITEM',
      payload:{productId,amount}
    }) 
  }
  // function handleUpdateCartItemQuantity(productId, amount) {
  //   console.log('itemId',productId )
  //   setShoppingCart((prevShoppingCart) => {
  //     console.log('prevShoppingCart ',prevShoppingCart);
  //     console.log('shoppingCart ', shoppingCart)
  //     const updatedItems = [...prevShoppingCart.items];
  //     console.log('updatedItems',updatedItems)
  //     const updatedItemIndex = updatedItems.findIndex(
  //       (item) => item.id === productId
  //     );

  //     const updatedItem = {
  //       ...updatedItems[updatedItemIndex],
  //     };

  //     updatedItem.quantity += amount;

  //     if (updatedItem.quantity <= 0) {
  //       updatedItems.splice(updatedItemIndex, 1);
  //     } else {
  //       updatedItems[updatedItemIndex] = updatedItem;
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }

  // function handleUpdateCartItemQuantity(productId, amount) {
  //   console.log('handleUpdateCartItemQuantity function run');
  //   setShoppingCart((prevShoppingCart) => {
  //     console.log('setShoppingCart run');
  //     const updatedItems = [...prevShoppingCart.items];
  //     const updatedItemIndex = updatedItems.findIndex(
  //       (item) => item.id === productId
        
  //     );
  //     console.log('updatedItemIndex',updatedItemIndex);

  //     const updatedItem = {
  //       ...updatedItems[updatedItemIndex],
  //     };

  //     updatedItem.quantity += amount;

  //     if (updatedItem.quantity <= 0) {
  //       updatedItems.splice(updatedItemIndex, 1);
  //     } else {
  //       updatedItems[updatedItemIndex] = updatedItem;
  //     }

  //     return {
  //       items: updatedItems,
  //     };
  //   });
  // }
 const cartCtx ={
  items:shoppingCartState.items,
  addItemToCart: handleAddItemToCart,
  updateCartItemQuantity : handleUpdateCartItemQuantity
 }

  return (
    <CartContext.Provider value={cartCtx}>
      <Header/>        
                              
      
      <Shop/>
    </CartContext.Provider>
  );
}

export default App;
