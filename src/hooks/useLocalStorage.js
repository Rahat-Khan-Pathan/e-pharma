import { useEffect, useState } from "react";

const useLocalStorage = () => {

  const [localData,setLocalData] = useState({});
  // addToCart function to check if local storage is already created, if not create one
  const addToCart = (id,quantity) => {
    const exist = localData;
    if (!exist) {
      const obj = {};
      localStorage.setItem("cart", JSON.stringify(obj));
    }
    addToDB(id,quantity);
  };

  // getDB function to get local storage saved data
  useEffect(()=>{
    const local = JSON.parse(localStorage.getItem("cart"));
    setLocalData( local || {});
  },[]);

  // addToDB function to set id to the local storage
  const addToDB = (id,quantity) => {
    const items = localData;
    items[id] = quantity;
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // removerFromDB function to remove id from local storage
  const removeFromCart = (id) => {
    const items = JSON.parse(localStorage.getItem("cart"));
    delete items[id];
    localStorage.setItem("cart", JSON.stringify(items));
    setLocalData(items);
  };
  return {addToCart,removeFromCart,localData};
};
export default useLocalStorage;
