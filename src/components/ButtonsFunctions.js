import { useState } from 'react';

export function useButtonShadow() {
    const [bt4, setStyle] = useState("bt4");
  
    function disableShadow (){
      setStyle(bt4 === "bt4"? "noShadow":"bt4")
    }
  
    return [bt4, disableShadow];
  }

