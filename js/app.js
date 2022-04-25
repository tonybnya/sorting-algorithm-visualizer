// Get the visual div, the container of all the bars
const visual = document.getElementById('visual');

// Get the buttons for different sorting algorithms
let bubbleBtn = document.getElementById('btn-bubble');
let insertionBtn = document.getElementById('btn-insertion');
let mergeBtn = document.getElementById('btn-merge');
let selectionBtn = document.getElementById('btn-selection');
let quickBtn = document.getElementById('btn-quick');

// Add events on all the buttons
bubbleBtn.addEventListener('click', bubbleSort);
insertionBtn.addEventListener('click', insertionSort);
mergeBtn.addEventListener('click', mergeSort);
selectionBtn.addEventListener('click', selectionSort);
quickBtn.addEventListener('click', quickSort);

// Function to create bars
// Bars are different sizes or heights randomly chosen
function createBars() {
    // Get the height of the visual div
    let height = visual.offsetHeight;
    // Get bar0, the default bar setting in the the html file
    let initBar = document.getElementById('bar0');
    // Get the width of the visual div
    let width = visual.offsetWidth;

    // Set the height of initBar
    // The height of the visual div - 100px
    // the number 100 can be changed, no bar should exceed the height of visual div
    initBar.style.height = `${height - 100}px`;

    // we create a loop to multiply the bars
    // the number of bars is the width of the visual div - 10px
    // 10 can be changed, the number of bars should no exceed the width of the visual div container
    for (let i = 1; i < width / 10; i++) {
        // there, we clone initBar
        let bar = initBar.cloneNode(true);

        // We add an id, since the counter i has been setting to 1
        bar.id = `bar${i}`;
        // each bar is styling with a random height
        bar.style.height = `${String(Math.floor(Math.random() * (height - 150)))}px`;

        // we append each bar to the visual div container
        visual.appendChild(bar);
    }
}


function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}


// Function to change the fg & the bg on each button after the click
function buttonStyling(id, fg, bg) {
    document.getElementById(id).style.backgroundColor = bg;
    document.getElementById(id).style.color = fg;
}


// Function to recoloring all the bars after the sorting process is done
async function recoloring(n) {
    for (let i = 0; i < n; i++) {
        document.getElementById(`bar${i}`).style.backgroundColor = "hsl(205, 86%, 17%)";
        // 90ms setting to recoloring each bar
        await sleep(90);
    }
}


// Bubble Sort Algorithm
// Time Complexity: O(n^2)
async function bubbleSort() {
    buttonStyling("btn-bubble", "#fff", "#222");

    let array = visual;
    let n = array.childElementCount;

    for (let i = 0; i < n; i++) {
        let a = document.getElementById(`bar${i}`).offsetHeight;
        for (let j = 0; j < n; j++) {
            let b = document.getElementById(`bar${j}`).offsetHeight;
            if (a < b) {
                // Swap the bars
                let temp = a;
                a = b;
                b = temp;

                // red & blue colors for the 2 bars that will be swapped
                document.getElementById(`bar${i}`).style.backgroundColor = "red";
                document.getElementById(`bar${j}`).style.backgroundColor = "hsl(205, 63%, 48%)";

                await sleep(90);

                document.getElementById(`bar${i}`).style.height = `${a}px`;
                document.getElementById(`bar${j}`).style.height = `${b}px`;

                // Set the green color to the sorted bars
                document.getElementById(`bar${i}`).style.backgroundColor = "rgb(204, 225, 52)";
                document.getElementById(`bar${j}`).style.backgroundColor = "rgb(204, 225, 52)";
            }
        }
    }

    recoloring(n);
}


// Insertion Sort Algorithm
async function insertionSort() {
    buttonStyling("btn-insertion", "#fff", "#222");

    let array = visual;
    let n = array.childElementCount;

    for (let i = 1; i < n; i++) {
        let j = i - 1;
        let temp = document.getElementById(`bar${i}`).offsetHeight;
        document.getElementById(`bar${i}`).style.backgroundColor = "red";
        while (j >= 0 && document.getElementById(`bar${j}`).offsetHeight > temp) {
            document.getElementById(`bar${j}`).style.backgroundColor = "hsl(205, 63%, 48%)";
            await sleep(90);
            document.getElementById(`bar${String(j+1)}`).style.height = `${document.getElementById(`bar${j}`).offsetHeight}px`;
            document.getElementById(`bar${j}`).style.backgroundColor = "rgb(204, 225, 52";
            j--;
        }
        document.getElementById(`bar${String(j+1)}`).style.height = `${temp}px`;
        document.getElementById(`bar${i}`).style.backgroundColor = "rgb(204, 225, 52)";
        document.getElementById(`bar${String(j+1)}`).style.backgroundColor = "rgb(204, 225, 52)";
    }

    recoloring(n);
}


// Selection Sort Algorithm
async function selectionSort() {
    buttonStyling("btn-selection", "#fff", "#222");

    let array = visual;
    let n = array.childElementCount;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (document.getElementById(`bar${j}`).offsetHeight < document.getElementById(`bar${min}`).offsetHeight) {
                min = j;
            }
        }
        if (min != i) {
            let temp = document.getElementById(`bar${i}`).offsetHeight;
            document.getElementById(`bar${i}`).style.backgroundColor = "red";
            document.getElementById(`bar${min}`).style.backgroundColor = "hsl(205, 63%, 48%)";
            await sleep(90);
            document.getElementById(`bar${i}`).style.height = `${document.getElementById(`bar${min}`).offsetHeight}px`;
            document.getElementById(`bar${min}`).style.height = `${temp}px`;
            document.getElementById(`bar${i}`).style.backgroundColor = "rgb(204, 225, 52";
            document.getElementById(`bar${min}`).style.backgroundColor = "rgb(204, 225, 52";
        }
    }

    recoloring(n);
}


// Quick Sort Algorithm
async function quickSort() {
    buttonStyling("btn-quick", "#fff", "#222");

    let array = document.getElementById("visual");
    let n = array.childElementCount;

    //recoloring(n);
}


// Merge Sort Algorithm
async function mergeSort() {
    buttonStyling("btn-merge", "#fff", "#222");

    let array = document.getElementById("visual");
    let n = array.childElementCount;

    //recoloring(n);
}

createBars();