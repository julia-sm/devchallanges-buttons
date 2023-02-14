import { useState } from 'react';

export function useButtonChangeColor () {
    const [changeColor,setBtnColor] = useState({
        backgroundColor:'#E0E0E0'
      });
    
      function changeButtonColor (){
        if (changeColor.backgroundColor === '#E0E0E0'){
          setBtnColor({ backgroundColor:'#3D5AFE'});
        }
        else if(changeColor.backgroundColor === '#3D5AFE'){
          setBtnColor({ backgroundColor:'#1C313A'});
        }else if (changeColor.backgroundColor === '#1C313A'){
          setBtnColor({ backgroundColor:'#9A0007'});
        } else {
          setBtnColor({ backgroundColor:'#E0E0E0'});
        }
    }

    return[changeColor,changeButtonColor]
}