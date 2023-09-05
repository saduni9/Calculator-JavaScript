const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","+","-","="];
let output = "";

const calculate = (btnValue) =>{
    console.log("Input btnValue:", btnValue); // Debugging line

    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }else if(btnValue === "AC"){
        output ="";
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    console.log("Output:", output); // Debugging line
    display.value = output;
};

buttons.forEach(button => {
    button.addEventListener("click",(e) => {
        console.log("Button clicked:", e.target.dataset.value); // Debugging line
        calculate(e.target.dataset.value);
    });
});

module.exports = {
    testEnvironment: 'jsdom',
};
