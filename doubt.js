

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");
let userMessage;
const API_KEY = "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";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className)
    let chatContent = className === "outgoing" ? `<p></p> ` : `<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p> `;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLI) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLI.querySelector("p")

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
           model: "gpt-3.5-turbo",
           messages: [{role: "user", content: userMessage}]
        })
    }

    // api ko request 

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) =>{
        messageElement.textContent = "Oops! Something went wrong please try again.";
    }).finally(() =>  chatbox.scrollTo(0, chatbox.scrollHeight));
  
}
const handlechat = () => {
      userMessage = chatInput.value.trim();
      if(!userMessage) return;
      chatInput.value = "";

      chatbox.appendChild(createChatLi(userMessage, "outgoing"));
      chatbox.scrollTo(0, chatbox.scrollHeight);

      setTimeout(() => {

        const incomingChatLI = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);


        //openAI api use kiye hai rsponse generte karne ke liye //
        
        generateResponse(incomingChatLI);
      },600);
}


sendChatBtn.addEventListener("click" , handlechat);
chatToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));