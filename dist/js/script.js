let submitButton = document.getElementById("submit");
submitButton.addEventListener("click",myLineUp);

function myLineUp() {    
    let statusRadio = document.querySelector('input[name="status"]:checked');
    let statusValue = statusRadio ? statusRadio.value : "None selected";

    let dateDropdown = document.querySelector('select[name="gameDate"]');
    let dateValue = dateDropdown ? dateDropdown.value : "None selected";

    let checkedPlayers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.name);
    let playersString = checkedPlayers.length > 0 ? checkedPlayers.join(", ") : "None selected";

    let status = "Status: " + statusValue;
    let date = "Date: " + dateValue;
    let players = "Players: " + playersString;

    // Console print
    console.log("--- Starting lineup information ---");
    console.log(status);
    console.log(date);
    console.log(players);

    // Webpage print
    let separator = " | "
    let results = status + separator + date + separator + players;
    document.getElementById("output").textContent = results;
}