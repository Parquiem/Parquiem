import React from 'react';

function Signup1 (){
    return(
<div>
        <input type="text" id="user" class="outline-none mt-12 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="name" placeholder="Usuario" required>
        </input>
        <input type="email" class="outline-none block mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="email" placeholder="Email" required>
        </input>
  </div>
    );
}

export default Signup1;