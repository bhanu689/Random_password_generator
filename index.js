const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let inputEl = document.getElementById("input-el")
let input1El = document.getElementById("input1-el")

function generate(){
    inputEl.value = "";
    input1El.value = "";
  for (let i = 0; i<characters.length; i++){
    let random = Math.floor(Math.random() * characters.length)
    let random2 = Math.floor(Math.random() * characters.length)
    inputEl.value += characters[random]
    input1El.value += characters[random2]
    
  }

}
