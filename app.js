const chatBox = document.getElementById('chat-box');

function sendMessage() {
  const inputField = document.getElementById('user-input');
  const userText = inputField.value.trim();
  if (userText === '') return;

  addMessage(userText, 'user');
  inputField.value = '';

  setTimeout(() => {
    const botReply = getBotResponse(userText);
    addMessage(botReply, 'bot');
  }, 600);
}

function addMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Basic AI logic
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes('hello') || input.includes('hi')) {
    return 'Hello! How can I help you today?👋';
  } else if (input.includes('your name')) {
    return "I'm a simple AI chatbot!";
  } else if (input.includes('how are you')) {
    return "I'm just code, but thanks for asking😇!";
  } else if (input.includes('bye')) {
    return "Goodbye! Have a great day.🤗";
  }else if(input.includes('assalam-o-alaikum')){
    return "walaikum asalam.";
  } else {
    return "Sorry, I didn't understand that🤯. Can you try again?";
  }
}
