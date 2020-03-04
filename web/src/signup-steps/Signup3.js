import React from 'react';
import {confirm} from './confirm'

function Signup3 (){
    
    return(
<div>
        <input type="password" id="pass" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password" placeholder="Contraseña" pattern=".{8,}" onChange={confirm} required>  
        </input>
        <input type="password" id="con_pass" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="password2" placeholder="Confirmar Contraseña" onKeyUp={confirm} required>
        </input>
  </div>  
    );
}
export default Signup3