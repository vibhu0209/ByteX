const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
    apiKey: "AIzaSyAHUJYK2cHM4eMJQaWLM4sJwU9Aort8Pc0",
    authDomain: "bytex-f22b7.firebaseapp.com",
    databaseURL: "https://bytex-f22b7-default-rtdb.firebaseio.com",
    projectId: "bytex-f22b7",
    storageBucket: "bytex-f22b7.appspot.com",
    messagingSenderId: "210938423140",
    appId: "1:210938423140:web:7494d2ca331038d295fc71",
    measurementId: "G-KZTQ79SPW8"
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