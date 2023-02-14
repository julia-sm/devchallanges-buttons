import { useState } from 'react';
import { FaReact,FaHtml5,FaCss3Alt,FaJs} from 'react-icons/fa';

export default function useButtonIcon (){
    const [icon, setIcon] = useState(<FaReact />)

    const [iconName, setIconName] = useState("FaReact");

    function changeIcon (){
    if (iconName === "FaReact"){
        setIcon(<FaHtml5 />);
        setIconName("FaHtml5");
    }
    else if(iconName === "FaHtml5"){ 
        setIcon(<FaCss3Alt />);
        setIconName("FaCss3Alt");
        }
        else if(iconName === "FaCss3Alt"){ 
        setIcon(<FaJs />);
        setIconName("FaJs");
        }
        else{ 
        setIcon(<FaReact />);
        setIconName("FaReact");
    }
    }
    return [icon, changeIcon];
}