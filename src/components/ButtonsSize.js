import { useState } from 'react';

export function useButtonSize(btsmall) {
    const [btSize, setStyleSize] = useState(btsmall);
  
    function changeButtonSize (){
      setStyleSize(btSize === btsmall ? "smallButton" : btsmall)
    }
  
    return [btSize, changeButtonSize];
}

export function useButtonSizeLarge(btlarge) {
    const [btSizeLg, setStyleSize] = useState(btlarge);
  
    function changeButtonSizeLg (){
      setStyleSize(btSizeLg === btlarge ? "largeButton" : btlarge)
    }
  
    return [btSizeLg, changeButtonSizeLg];
}