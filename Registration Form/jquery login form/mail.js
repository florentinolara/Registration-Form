const firebaseConfig = {
    apiKey: "AIzaSyAh67HgvtpHW1DMMCojJ73kIL4a4TzNr9E",
    authDomain: "personalform-95d6d.firebaseapp.com",
    databaseURL: "https://personalform-95d6d-default-rtdb.firebaseio.com",
    projectId: "personalform-95d6d",
    storageBucket: "personalform-95d6d.appspot.com",
    messagingSenderId: "897605932262",
    appId: "1:897605932262:web:d37a9028ca82a422761727",
    measurementId: "G-SG6TRZKM2N"
  };

  //initialize database
  firebase.initializeApp(firebaseConfig);

  // reference your database
var personalFormDB =  firebase.database().ref('personalForm')

document.getElementById('personalForm').addEventListener("submit". submitForm);

function submitForm(e) {

    e.preventDefault();
   
   var name = getElementVal("name");

   var address = getElementVal("address");
   
   var contact = getElementVal("contact");
   
   var birthday = getElementVal("birthday");
   
   var email = getElementVal("email");
   
    console.log(name, address, contact, birthday, email);
   
   saveMessages(name, address, contact, birthday, email);
   
   // enable alert
   
    document.querySelector(".alert").style.display = "block";
   
   // remove the alert
   
    setTimeout(() => {
   
    document.querySelector(".alert").style.display = "none";
   
    }, 3000);
   
   // reset the form
   
    document.getElementById("personalForm").reset();
   
   }
   
   const saveMessages = (name, address, contact, birthday, email) => {
   
   var newPersonalForm = personalFormDB.push();
   
    newPersonalForm.set({
        name: name,

        address: address,

        contact: contact,

        birthday: birthday,

        email: email,
       
        });
       
       };
       
       const getElementVal = (id) => {
       
       return document.getElementById(id).value;
       
       };
