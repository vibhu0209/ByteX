const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

const firebaseConfig = {
  apiKey: "AIzaSyBGR0dUIPPtA1Hcb8RSxCdb1FmBKerKNkI",
  authDomain: "okkkkkkkkkkk-8efc0.firebaseapp.com",
  databaseURL: "https://okkkkkkkkkkk-8efc0-default-rtdb.firebaseio.com",
  projectId: "okkkkkkkkkkk-8efc0",
  storageBucket: "okkkkkkkkkkk-8efc0.appspot.com",
  messagingSenderId: "349365354054",
  appId: "1:349365354054:web:56c38ffa0a235786759447",
  measurementId: "G-TL9G8FH6J5"
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