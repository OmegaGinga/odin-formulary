const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm') ;
const advice = document.querySelector('.confirmation');
const form = document.querySelector('form');

//*Passwords must mach

// Function to validate passwords
function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        advice.textContent = '*Passwords do not match';
    } else {
        advice.textContent = '';
    }
}

// Validate passwords on input
password.addEventListener('input', validatePasswords);
confirmPassword.addEventListener('input', validatePasswords);

form.addEventListener('submit',(event)=>{
    if(password.value != confirmPassword.value){
        advice.textContent = '*Passwords do not match!';
        event.preventDefault();
    }else{
        advice.textContent = '';
    }    
})
