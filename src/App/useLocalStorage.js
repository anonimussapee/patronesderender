import React, { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronized, setSincronized] =  useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronized(true);

      } catch(error) {
        setError(error);
      }
    }, 3000);
  },[sincronized]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };
  const setStateSincronized = () => {
    setSincronized(false);
    setLoading(true);

  }
  

  return {
    item,
    saveItem,
    loading,
    error,
    sincronized, 
    setSincronized,
    setStateSincronized, 
  };
}

export { useLocalStorage };
