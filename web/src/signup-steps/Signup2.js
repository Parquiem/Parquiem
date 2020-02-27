import React from 'react';

  function Signup2() {

    return(
<div>
    <input type="tel" id="tel" class="block outline-none mt-5 font-serif text-xl text-parkblue-dark rounded-full border-parkblue-dark border-2 placeholder-parkblue-dark pl-4 p-1" name="phoneNumber" placeholder="Teléfono" pattern="+[0-9]{10}">
    </input>
  </div>
    );
}
export default Signup2;