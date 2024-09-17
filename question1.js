const QUESTION_ONE = document.getElementById('question1');
const YELLOW_BOX = document.createElement('div');
YELLOW_BOX.style.display = "none";
YELLOW_BOX.style.background = "yellow";
YELLOW_BOX.style.height = "100px";
YELLOW_BOX.style.width = "100px";
QUESTION_ONE.append(YELLOW_BOX);

let isOn = false;



function toggleBox() {
    if (isOn){
        YELLOW_BOX.style.display = "none";

    } else {
        YELLOW_BOX.style.display = "block";
    }
    isOn = !isOn;
}