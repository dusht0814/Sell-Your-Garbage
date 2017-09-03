// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC2D-e9rZiau2o56ZphiiAyseR69Gg9gkA",
    authDomain: "contact-efb93.firebaseapp.com",
    databaseURL: "https://contact-efb93.firebaseio.com",
    projectId: "contact-efb93",
    storageBucket: "",
    messagingSenderId: "841035361443"
  };
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages')
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('contactForm').addEventListener('submit', myFunction);
function myFunction() {
    document.getElementById('contactForm').innerHTML = "Amount Will Be Credited In Your Wallet Soon!";
}

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var veg = getInputVal('veg');
  var qty1 = getInputVal('qty1');
  var nveg = getInputVal('nveg');
  var qty2 = getInputVal('qty2');
  var ewaste = getInputVal('ewaste');
  var qty3 = getInputVal('qty3');
    


  // Save message
  saveMessage(veg,qty1,nveg,qty2,ewaste,qty3);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(veg,qty1,nveg,qty2,ewaste,qty3){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    veg:veg,
    qty1:qty1,
    nveg:nveg,
    qty2:qty2,
    ewaste:ewaste,
    qty3:qty3
  });
}





