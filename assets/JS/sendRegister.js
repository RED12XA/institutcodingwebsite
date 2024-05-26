let sendResult = document.querySelector("#sendResult");
let form = document.querySelector("form");
let submit;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(form);
  // Check if the device is online
  if (navigator.onLine) {
    fetch(
      "https://script.google.com/macros/s/AKfycbw4vjmKjEZHvpUam9GcCoAutxETOKto_IQSxdNW8897hLW-ObyYyAlVISDl003fuIgpyA/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data !== "Success") {
          sendResult.textContent =
            "Quelque chose s'est mal passé. Veuillez réessayer";
          sendResult.style.color = "#C62D42";
        } else {
          sendResult.textContent =
            "Notre equipe va contacter vous au plus proche moment";
          sendResult.style.color = "#09BC8A";
          let inputs = document.querySelectorAll(".clearInput");
          for(let i = 0 ; i < inputs.length ; i++){
            inputs[i].value = "";
          }

        }
      })
      .catch((error) => {
        // Handle fetch errors
        console.error("Fetch Error:", error);
        sendResult.textContent =
          "Quelque chose s'est mal passé. Veuillez réessayer ou vérifier votre connexion Internet.";
        sendResult.style.color = "#C62D42";
      });
  } else {
    // Handle offline scenario
    sendResult.textContent =
      "Vous semblez être hors ligne. Veuillez vérifier votre connexion Internet.";
    sendResult.style.color = "#C62D42";
  }
});
