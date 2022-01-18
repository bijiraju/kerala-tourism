let email = document.getElementById("email");
let error = document.getElementById("error");
let icon = document.getElementById("icon");
let Regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function validate(){
    icon.style.display="inline-block";
    if(email.value.match(Regex)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        error.style.display = 'valid';
        email.style.border = '2px solid #2ecc71';
        return true;
    }
    else if(email.value == ""){
        icon.style.display = 'none';
        error.style.display = 'none';
        email.style.border = '2px solid #5fa0fa';
        return false;
    }
    else{
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        error.style.display = 'block';
        email.style.border = '2px solid #ff2851';
        return false;
    }

}
