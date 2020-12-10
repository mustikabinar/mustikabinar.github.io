let form = document.getElementById("form")
form.addEventListener("click", function(event){
    event.preventDefault()
});

let Body = document.getElementById("Body");
let button = document.querySelector('button[data-toggle="modal"]');
let modalSuccess =  document.querySelector('.success');
let modalInvalid =  document.querySelector('.invalid');

button.addEventListener('click', function() {
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;

    if (username == "pweb_C" && password == "123123") {
        modalSuccess.classList.add('show');
        modalInvalid.classList.remove('show');
        Body.style.backgroundColor = "green";
    }
    else {
        modalInvalid.classList.add('show');
        Body.style.backgroundColor = "red";
    }
});

modalSuccess.addEventListener('click', function() {
    this.classList.remove('show');
});