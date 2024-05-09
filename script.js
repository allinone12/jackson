let inputs = document.querySelectorAll('.input');

let disableRequests = () => {
    inputs.preventDefault();
}

window.onload = disableRequests();

