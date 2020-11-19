
var form = document.getElementById("form");
var loader = document.getElementById("loader");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    event.preventDefault();

    var x = document.forms["form"]["commute"].value;
    console.log(x);
    
    form.classList.add("d-none");
    loader.classList.remove("d-none");

    setTimeout(() => {
        loader.classList.add("d-none");
        output.classList.remove("d-none");
    
    }, 500)
    
}
