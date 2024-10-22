let fname = "";

function greet(){
    let greetParagraph = document.getElementById("greet")

    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let fname = document.getElementById("fname").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname
}

function trivia1(){
    let triviaAnswer = document.getElementById("trivia1-answer");
    

    //get results from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let beefSelected = document.getElementById("beef").checked;
    let proteinPowderSelected = document.getElementById("protein-powder").checked;

    let fname = document.getElementById("fname").value;

    //give result based fof of what they selected
    if(chocolateSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    if(beefSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    if(tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are right."
    }
    if(proteinPowderSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    
}

function lies(){
    let lie = document.getElementById("lie");

    let brokenSelected = document.getElementById("broken-bone").checked;
    let languageSelected = document.getElementById("language").checked;
    let prSelected = document.getElementById("5k").checked;

    let fname = document.getElementById("fname").value;
    
    if(brokenSelected){
        lie.innerHTML = fname + ", you are wrong."
    }
    if(languageSelected){
        lie.innerHTML = fname + ", you are right."
    }
    if(prSelected){
        lie.innerHTML = fname + ", you are wrong."
    }
}