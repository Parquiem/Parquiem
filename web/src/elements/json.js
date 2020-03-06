
        let requestURL= 'http://localhost:5000/api/users/getUsers';
        var request=new XMLHttpRequest();
        request.open('GET',requestURL);
        request.responseType = 'json';
        request.onload=function(){
            let variable=request.response;
            
        }
        request.send();

        export default {
            json:{variable}
        }