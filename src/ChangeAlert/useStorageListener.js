import React from 'react';

const useStorageListener = (sincronize) =>{
  
  const [storageChange,setStoreChange] = React.useState(false);

  window.addEventListener('storage', (change)=>{
    if(change.key === 'TODOS_V1'){
       setStoreChange(true)
    }

  });
  const toggleShow = () => {
    sincronize()
    setStoreChange(false)
  }

  return{
    show:storageChange,
    toggleShow
  };
 
}


export {useStorageListener};