
function codeDetector(){
    let subject = document.getElementsByName("subject")[0].value
    let coursname = document.getElementsByName("coursname")[0]

    if(subject == "none") {
        coursname.value="Выберите курс"
    }
    else if (subject=="IT"){
        coursname.value="TEHNIKUM CODING"
    }
    else if (subject=="ENGLISH"){
        coursname.value="INTERNATION"
    }
    else if (subject=="MATH"){
        coursname.value="5+"
    }
} 
function codeDetector1(){
    let subject = document.getElementsByName("subject")[0].value
    let cost = document.getElementsByName("cost")[0]

    if(subject == "none") {
        cost.value="Выберите курс"
    }
    else if (subject=="IT"){
        cost.value="11 800 000"
    }
    else if (subject=="ENGLISH"){
        cost.value="4 800 000"
    }
    else if (subject=="MATH"){
        cost.value="5 000 000"
    }
} 

function activeBtn(){
    let checked = document.getElementById("confirm").checked
    let checkBtn = document.querySelector(".dynamicform button")

    if(checked){
        checkBtn.disabled = false
    }
    else{
        checkBtn.disabled = true
    }
}