



let sendResult =  document.querySelector('#sendResult');
let form = document.querySelector("form");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(form);
    // Check if the device is online
    if (navigator.onLine) {
        fetch('https://script.google.com/macros/s/AKfycbwGrIPt_jIkRUSUOqLzAxf3yOhYwkVYiupBeSOV-pGoqlGX-h2LC5hMYNQyHa50vCcN/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            if(data !== "Success") {
                sendResult.textContent = "Quelque chose s'est mal passé. Veuillez réessayer";
                sendResult.style.color = "#C62D42";
            } else {
                sendResult.textContent = "VOTRE MESSAGE A ÉTÉ ENVOYÉ AVEC SUCCÈS";
                sendResult.style.color = "#09BC8A";
            }
        })

        .catch(error => {
            console.error('Fetch Error:', error);
            sendResult.textContent = "Quelque chose s'est mal passé. Veuillez réessayer ou vérifier votre connexion Internet.";
            sendResult.style.color = "#C62D42";
        });
    } else {
        sendResult.textContent = "Vous semblez être hors ligne. Veuillez vérifier votre connexion Internet.";
        sendResult.style.color = "#C62D42";
    }
});

