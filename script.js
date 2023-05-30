function showAlert () {
    alert (" Boton tester JS ")
}

const form = document.getElementById('myForm')


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
 }


 function validateForm() {
    const input = document.getElementById('email');
    const email = input.value ;


    if (!validateEmail(email)) {
        alert('ese correo esta malito,  ponelo bien wasoo .');
    } else {
        alert('el correo se envio correctamente, ya sos parte de la matrix.');
    }
 }


 
 form.addEventListener('submit', function(lalala){
    lalala.preventDefault();
    validateForm();
 })   ;


 document.querySelector("button.button-menu-toggle")
 .addEventListener("click", function() {
        document.querySelector(".nav-links").
                   classList.toggle("nav-links-responsive")})



