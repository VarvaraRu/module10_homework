let btnSend = document.querySelector(".btn_send"); 
let btnGL = document.querySelector(".btn_gl"); 
let input = document.querySelector(".input_for_message"); 
let chat = document.querySelector(".chat");

let socket = new WebSocket("wss://echo-ws-service.herokuapp.com");

socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }

btnSend.addEventListener ("click", clickOnBtn); 

function clickOnBtn (){
  if (input.value == "") return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }

function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chat.innerHTML += messageHTML;
  }

btnGL.addEventListener ("click", clickForGetGL); 

function clickForGetGL () {
  if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    
  let latitude  = position.coords.latitude;
  let longitude = position.coords.longitude;
    
 let mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  writeToChat (`<a href="${mapLink}" target="_blank">тык</a>`)
  });  
}
}
