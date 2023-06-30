import React from 'react';
import { useStorageListener} from './useStorageListener';
import './alert.css';


const ChangeAlert = ({sincronize}) => {

const {show, toggleShow} = useStorageListener(sincronize);

  if(show){
    return (
      <div className='bg-alert'>
        <div className='alert-box'>
          <h2>hay nuevos cambios</h2>
          <button onClick={()=>{
            toggleShow()
          }}>Actualizar</button>
        </div>
      </div>
     

    );
  }else{
    return null;
  }
}

export {ChangeAlert};