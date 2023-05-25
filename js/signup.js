const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyCw8TaBHhxue04WRidKCsIVpyDrAPCCeN8",
    authDomain: "sign-up-page-44569.firebaseapp.com",
    databaseURL: "https://sign-up-page-44569-default-rtdb.firebaseio.com",
    projectId: "sign-up-page-44569",
    storageBucket: "sign-up-page-44569.appspot.com",
    messagingSenderId: "15014465422",
    appId: "1:15014465422:web:017cb093ce34aa19fa1edf",
    measurementId: "G-P57EHR9JC9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  const database = firebase.database()

  const ref = database.ref("messages")


form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    ref.push({
        name:name,
        email:email,
        message:message
    })

    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none"
    },2000)

    form.reset()

})