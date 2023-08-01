// Common Elements Here
let error = document.querySelectorAll(".error"),
    heading = document.querySelectorAll(".heading"),
    input = document.querySelectorAll(".inputArea"),
    btn = document.querySelectorAll(".nxt_btn"),
    errorArr = Array.from(error),
    headingArr = Array.from(heading),
    inputArr = Array.from(input),
    btnArr = Array.from(btn);

// Page 1 Sources Here
let page1 = document.querySelector("#starting_page"),
    page1Heading = headingArr[0].innerHTML = "Wanna Play Game",
    page1Input = inputArr[0],
    page1Btn = btnArr[0];

// Page 2 Sources Here
let page2 = document.querySelector("#player1_page"),
    page2Heading = headingArr[1],
    page2Input = inputArr[1],
    page2Btn = btnArr[1];

// Page 3 Sources Here
let page3 = document.querySelector("#player2_page"),
    page3Heading = headingArr[2],
    page3Input = inputArr[2],
    page3Btn = btnArr[2];

// Page 4 Sources Here
let page4 = document.querySelector("#game_page"),
    page4Heading = headingArr[3],
    page4Input = inputArr[3],
    page4Btn = btnArr[3];


// Page 1 Script Here
page1Btn.addEventListener("click", () => {
    if (page1Input.value == "") {
        errorArr.map((item) => {
            item.innerHTML = "Please give a name";
            item.style.display = "block";
        });
    } else {
        page1.style.display = "none";
        page2.style.display = "block";
        errorArr.map((item) => {
            item.style.display = "none";
        });
    }
    page2Heading.innerHTML = page1Input.value + ", give a number";
});

// Page 2 Script Here
page2Btn.addEventListener("click", () => {
    if (page2Input.value < 1 || page2Input.value > 10) {
        errorArr.map((item) => {
            item.innerHTML = "Please give a number from 1 - 10";
            item.style.display = "block";
        });
    } else {
        if (page2Input.value - 10) {
            page2.style.display = "none";
            page3.style.display = "block";
            errorArr.map((item) => {
                item.style.display = "none";
            });
        } else {
            errorArr.map((item) => {
                item.innerHTML = "Please give a number from 1 - 10";
                item.style.display = "block";
            });
        }
    }
    page3Heading.innerHTML = "Player - 2 Name";
});

// Page 3 Scripts Here
page3Btn.addEventListener("click", () => {
    if (page3Input.value == "") {
        errorArr.map((item) => {
            item.innerHTML = "Please give player 2 name";
            item.style.display = "block";
        });
        page3Input.value = "";
    } else {
        page3.style.display = "none";
        page4.style.display = "block";
        errorArr.map((item) => {
            item.style.display = "none";
        });
    }
    page4Heading.innerHTML = page3Input.value + " , Guess the number to win";
});

// Page 4 Scripts Here
page4Btn.addEventListener("click", () => {
    if (page4Input.value == "" || page4Input.value < 1 || page4Input.value > 10) {
        errorArr.map((item) => {
            item.style.display = "block";
            item.style.backgroundColor = "";
            item.innerHTML = "Please guess a number from 1 - 10 to win";
        });
        page4Input.value = "";
    } else {
        if (page4Input.value - 10) {
            if (page4Input.value == page2Input.value) {
                errorArr.map((item) => {
                    item.style.display = "block";
                    item.style.backgroundColor = "green";
                    item.style.fontSize = "50px";
                    item.innerHTML = "Correct!! " + page3Input.value + " Win";
                });
                page4Heading.style.display = "none";
                page4Input.style.display = "none";
                page4Btn.innerHTML = "Replay";
                page4Btn.addEventListener("click", () => {
                    window.location.reload();
                    page1Input.value = "";
                    page2Input.value = "";
                    page3Input.value = "";
                    page4Input.value = "";
                });
            } else {
                errorArr.map((item) => {
                    item.style.display = "block";
                    item.style.backgroundColor = "red";
                    item.style.fontSize = "50px";
                    item.innerHTML = "Opps!! " + page3Input.value + " Loose!! " + page1Input.value + " Win";
                });
                page4Heading.style.display = "none";
                page4Input.style.display = "none";
                page4Btn.innerHTML = "Replay";
                page4Btn.addEventListener("click", () => {
                    window.location.reload();
                    page1Input.value = "";
                    page2Input.value = "";
                    page3Input.value = "";
                    page4Input.value = "";
                });
            }
        } else {
            errorArr.map((item) => {
                item.style.display = "block";
                item.style.backgroundColor = "";
                item.innerHTML = "Please guess a number from 1 - 10 to win";
            });
        }
    }
    page1Input.value = "";
    page2Input.value = "";
    page3Input.value = "";
    page4Input.value = "";
});