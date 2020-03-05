const confirm=()=>{
    
    var pass = document.getElementById('pass')
    , con_pass = document.getElementById('con_pass');

    if(pass.value !== con_pass.value){
        con_pass.setCustomValidity("Passwords Don't Match");
      } else {
        con_pass.setCustomValidity('');
      }
}

export {confirm};