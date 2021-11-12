'use strict';
'use strict';

let display = document.querySelector(".display");

const buttons = document.querySelectorAll(".button");
const lgButton = document.getElementById("lg");

let error = 0;
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        console.log("Error = " + error);
        if(error === 1 || display.textContent === "Infinity"){
            display.textContent = "";
            error = 0;
        }
       console.log(buttons[i].textContent);
       
        switch(buttons[i].textContent){
            case 'C':
                display.textContent = "";
                break;
            case 'del':
                display.textContent = display.textContent.slice(0, -1);
                break;
            case '=':
                try{
                    display.textContent = eval(display.textContent);
                }catch{
                    if(isNaN(display.textContent)){
                        error = 1;
                        display.textContent = "Error";
                    }
                    else
                        display.textContent = display.textContent;
                }
                break;
            default: 
                display.append(buttons[i].textContent);
        }
    })
};

lgButton.addEventListener('click', function(){
    if(display.textContent !== ""){
        console.log(Math.log10(display.textContent));
        display.textContent = Math.log10(display.textContent);
    }
})

