let message = `請直接點擊圖片或按鍵盤對應按鍵。\n
Click on the pitures or press the corresponding key.`;
alert(message);

let soundList = document.querySelectorAll(".sound");
let listLength = soundList.length;

for (let i = 0; i < listLength; i++) { //listening to clicking events
    soundList[i].addEventListener("click", function() {

        let itemClicked = this.innerHTML;
        makeSound(itemClicked);
        addClass(this, "pressed");
        
    })
}

document.addEventListener("keydown", function(event) { //listening to keyboard input

    let pressedKey = event.key;
    makeSound(pressedKey);
    addClassToCertainNumber(pressedKey, "pressed");
})

// function makeSound(clicked) {

//     switch (clicked) {
//         case "1":
//             let sound1 = new Audio("./sounds/trimmed_oola.m4a");
//             sound1.play();
//             break;
            
//         case "2":
//             let sound2 = new Audio("./sounds/trimmed_humm.m4a")
//             sound2.play();
//             break;

//         case "3":
//             let sound3 = new Audio("./sounds/trimmed_u.m4a")
//             sound3.play();
//             break;

//         case "4":
//             let sound4 = new Audio("./sounds/trimmed_ya.m4a");
//             sound4.play();
//             break;

//         case "5":
//             let sound5 = new Audio("./sounds/trimmed_yi.m4a");
//             sound5.play();
//             break;

//         case "6":
//             let sound6 = new Audio("./sounds/trimmed_ha.m4a");
//             sound6.play();
//             break;

//         case "7":
//             let sound7 = new Audio("./sounds/trimmed_ulayaha_slow1.m4a");
//             sound7.play();
//             break;

//         case "8":
//             let sound8 = new Audio("./sounds/trimmed_ulayaha_slow2.m4a");
//             sound8.play();
//             break;

//         case "9":
//             let sound9 = new Audio("./sounds/trimmed_ulayaha_slow3.m4a");
//             sound9.play();
//             break;

//         case "10":
//             let sound10 = new Audio("./sounds/trimmed_ulooooo.m4a");
//             sound10.play();
//             break;
//     }
// }
function makeSound(clicked) {

    switch (clicked) {
        //the cases here need to match the keyboard input and content text to work on both clicking and typing
        case "1":
            let sound1 = new Audio("./sounds/trimmed_oola.m4a");
            sound1.play();
            break;
            
        case "2":
            let sound2 = new Audio("./sounds/trimmed_u.m4a")
            sound2.play();
            break;

        case "3":
            let sound3 = new Audio("./sounds/trimmed_ya.m4a")
            sound3.play();
            break;

        case "4":
            let sound4 = new Audio("./sounds/trimmed_yi.m4a");
            sound4.play();
            break;

        case "5":
            let sound5 = new Audio("./sounds/trimmed_ha.m4a");
            sound5.play();
            break;

        case "6":
            let sound6 = new Audio("./sounds/pajama_parties1.m4a");
            sound6.play();
            break;

        case "7":
            let sound7 = new Audio("./sounds/pajama_parties2.m4a");
            sound7.play();
            break;

        case "8":
            let sound8 = new Audio("./sounds/pajama_parties3.m4a");
            sound8.play();
            break;

        case "9":
            let sound9 = new Audio("./sounds/pajama_parties4.m4a");
            sound9.play();
            break;

        case "u":
            let sound10 = new Audio("./sounds/pajama_parties5.m4a");
            sound10.play();
            break;
    }
}

function addClass(target, newClassName) {
    target.classList.add(newClassName); //get your target class
    
    let originalBackgroundImage = window.getComputedStyle(target).backgroundImage; //get the original img url
    target.style.backgroundImage = "url('./images/usagi-2.png')"; //replace the original with new img
    setTimeout(function() {
        //restore to the original state after timeout
        target.classList.remove(newClassName);
        target.style.backgroundImage = originalBackgroundImage;
    }, 100);
}

function addClassToCertainNumber(key, newClassName) {
    let item = document.querySelector(".class" + key); //get your target class
    item.classList.add(newClassName);
    let originalBackgroundImage = window.getComputedStyle(item).backgroundImage;
    item.style.backgroundImage = "url('./images/usagi-2.png')";
    setTimeout(function() {
        //restore to the original state after timeout
        item.classList.remove(newClassName);
        item.style.backgroundImage = originalBackgroundImage;
    }, 100);
}