const input = document.getElementById("inputBox");

const buttons = document.querySelectorAll("button");

let string = '';

buttons.forEach(element=>{
    element.addEventListener("click", (b) =>{
        if(b.target.innerText == "="){
            try{
                string = eval(string),toString();
                input.value = string;
            }
            catch(e){
                input.value = "Chotia";
                string = '';
            }
        }
        else if(b.target.innerText == "AC"){
            string = '';
            input.value = string;
        }
        else if(b.target.innerText == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += b.target.innerText;
            input.value = string;
        }
    })
        
})