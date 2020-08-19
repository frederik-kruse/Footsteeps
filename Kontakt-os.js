// Burger menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]


toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('change')
  navbarLinks.classList.toggle("active")
});
// Burger menu


function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Tjek lige at du har skrevet dit navn rigtig skal have 5 tegn";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 8) { //jeg har ændret så telefonummert er fra 10 tegn til 8 så det kun er danske numre der kan blive skrevet i tekstboksen
    text = "tjek lige at du har skrevet dit telefon nummer korrect";//Her kommer besked fra hvis nu man ikke har gjort det rigtig =
    error_message.innerHTML = text; //så bliver denne her function sat igang som så fortællere dig ved en rød streg og den valgte tekst at der er et problem
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Skriv venligst en valid E-mail";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Skriv venligst mere end 10 tegn";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length >= 500) { //jeg har brugt den samme besked som max 10 tegn og gjort så der max kan være 500 tegn i en besked. Ved at ændre <== til >==
    text = "Beklager men du har for mange tegn MAX 500 tegn";
    error_message.innerHTML = text;
    return false;
  }
  alert("Du har sent din besked og vi vil svare hurtigst muligt tilbage!"); // til sidst når den har kørt fejlfinderen igennem vil du få en popup besked om at du har gjort det rigtig.
  return true;
}