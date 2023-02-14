import '/Users/julia.mota/Documents/Coursera/devchallenges.io/buttons/src/style.css';
import { useState } from 'react';
import { FaReact} from 'react-icons/fa';
import {useButtonShadow} from  '../components/ButtonsFunctions.js'
import {useButtonSize,useButtonSizeLarge} from '../components/ButtonsSize.js';
import useButtonIcon from '../components/ButtonIcon.js';
import {useButtonChangeColor} from '../components/ButtonChangeColor';

export default function Buttons(){
  const [bt4, disableShadow] = useButtonShadow();

  const [disable, setDisable] = useState(false);

  const [btSize,changeButtonSize ] = useButtonSize("btSize");

  const [btSizeLg, changeButtonSizeLg] = useButtonSizeLarge("btSizeLg")

  const [icon, changeIcon] = useButtonIcon(<FaReact />)

  
  const [changeColor,changeButtonColor] = useButtonChangeColor({
    backgroundColor:'#E0E0E0'
  });

  return(
    <div className="container">
      <nav className = "menubar">
        <span className='dev-title'>Devchallanges.io</span>
        <ul>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
      <main className='grid-item2'>
        <div className="buttons__grid-1">
          <h1>Buttons</h1>
          <p>Button /  </p>
          <button className="bt1">Default</button>

          <p>Button Outline  </p>
          <button className="bt2">Default</button>

          <p>Button text  </p>
          <button className="bt3">Default</button>
        </div>
        <div className='buttons__grid-2'>
          <p>Button disable shadow  </p>
      
            <button className={bt4} onClick={disableShadow}>Default</button>
        </div>
        <div className='buttons__grid-3'>
          <p>Button disabled  </p>
          <button className="bt5" disabled={disable} onClick={()=>setDisable(true)}>Default</button>
        </div>

        <div className='buttons__grid-4'>
          <p>Button with icon  </p>
          <button className="bt6" onClick={changeIcon}>{icon}</button>
        </div>
      
        <p>Button size  </p>
        <div className='buttons__grid-5'>
          <button className={btSize} onClick={changeButtonSize}>Small</button>
          <button className="btmd">Medium</button>
          <button className={btSizeLg} onClick={changeButtonSizeLg}>Large</button>
        </div>
        <div className='buttons__grid-6'>
          <p>Button change color  </p>
          <button style={changeColor} onClick={changeButtonColor}>Default</button>
        </div>
      </main>
      <footer>
          <p className="author">
            created by Julia Mota
            devChallenges.io
          </p>
        </footer>
    </div>
  );
}