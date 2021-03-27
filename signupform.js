let username=document.getElementById('username').value;
let email= document.getElementById('email').value;
let password= document.getElementById('password').value;
let password2= document.getElementById('password2').value;
let address= document.getElementById('address').value;
let phone= document.getElementById('phone').value;

function validate(){

    if (username==""){
     
        document.getElementById('namehelp').innerHTML("Username cannot be blank");
        return false;
    }

   else if (email==""){
       alert("cannot be empty");
        document.getElementById('emailerror').innerHTML("pasword cannot be blank");
        return false;
    }
     else if (password==""){
     
        document.getElementById('passworderror').innerHTML("pasword cannot be blank");
        return false;
    }
   else if (password2==""){
     
        document.getElementById('confirmerror').innerHTML("confirm password cannot be blank");
        return false;
    }
   else if (address==""){
     
        document.getElementById('addresserror').innerHTML("address cannot be blank");
        return false;
    }
   else if (phone==""){
     
        document.getElementById('phoneerror').innerHTML("phone number cannot be blank");
        return false;
    }
    else{
        return true;
    }




    // let regexp=/^([6-9])(0-9){9}$/
    // if (regexp.test(phone.value)){
         

    }

