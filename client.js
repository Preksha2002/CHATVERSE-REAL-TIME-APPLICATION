const socket = io('http://localhost:8001');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
var audio = new Audio('notification.mp3');


const append = (message, position,newColor)=>{
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){ 
        audio.play();

}
}

const name2 = prompt("Enter your name");
socket.emit('new-user-joined', name2D);
socket.on('user-joined', name =>{
    append("<i>"+name+"</i> joined the chat", 'right')
})

socket.on('receive', data =>{
    append("<p class=\"pfcolor\"><b>"+data.name+"</b></p><p>"+
     data.message+"</p>", 'left',data.newColor)
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(message, 'right');
    socket.emit('send', message);
    messageInput.value = '';
})

socket.on('left', name =>{
    append("<i>"+name+"</i> left the chat", 'right')
})





