/*--------------for crocheting div----------------------*/

/* Width of each carousel image, in pixels */
let carouselWidth = 400; 

/* Part 1.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementsByClassName("carousel-image-row")[0];


/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum=0;
prevButton.classList.add("hidden");
imageRow.style.position='absolute';



/* Total number of images */
let totalImages = document.getElementsByClassName("images").length;

/* Part 1.7 */

function checkControls() {
    // This if-statement checks if we're at the first image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum === 0) {
        // What should happen if it's the first image?
        prevButton.classList.add("hidden");

    }
    else if (prevButton.classList.contains("hidden")) {
        // otherwise, what should happen?
        prevButton.classList.remove("hidden");
    }
    // This if-statement checks if we're at the last image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum === (totalImages-3)) {
        // What should happen it's the last image?
        nextButton.classList.add("hidden");
    }
    else if (nextButton.classList.contains("hidden")) {
        // otherwise, what should happen?
        nextButton.classList.remove("hidden");
    }
} 

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
    // change imageNum
    imageNum++;
    checkControls();
    // how many pixels from the left should imageRow now be?
    if (imageNum>0) {
    let pixelsLeft= -1*carouselWidth*(imageNum);
    // change css for imageRow
    
    pixelsLeft= pixelsLeft + "px";
    imageRow.style.left = pixelsLeft;
    }
    
}

/* Part 1.4: Change the onclick property for the next button */
    nextButton.onclick = showNextImage;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
    // change imageNum
    imageNum--;
    // how many pixels from the left should imageRow now be?
    if (imageNum>= 0) {
        checkControls();
        let pixelsLeft= -1*carouselWidth*(imageNum);
        // change css for imageRow
        pixelsLeft= pixelsLeft + "px";
        imageRow.style.left = pixelsLeft;
    }
}


    prevButton.onclick = showPrevImage;




/*----------------------for sewing part-----------------*/


/* Part 1.1: Get the elements */
let prevButton2 = document.getElementById("button-previous2");
let nextButton2 = document.getElementById("button-next2");
let imageRow2 = document.getElementsByClassName("carousel-image-row")[1];


/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum2=0;
prevButton2.classList.add("hidden");
imageRow2.style.position='absolute';



/* Total number of images */
let totalImages2 = document.getElementsByClassName("images2").length;

/* Part 1.7 */

function checkControls2() {
    // This if-statement checks if we're at the first image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum2 === 0) {
        // What should happen if it's the first image?
        prevButton2.classList.add("hidden");

    }
    else if (prevButton2.classList.contains("hidden")) {
        // otherwise, what should happen?
        prevButton2.classList.remove("hidden");
    }
    // This if-statement checks if we're at the last image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum2 === (totalImages2-3)) {
        // What should happen it's the last image?
        nextButton2.classList.add("hidden");
    }
    else if (nextButton2.classList.contains("hidden")) {
        // otherwise, what should happen?
        nextButton2.classList.remove("hidden");
    }
} 

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage2() {
    // change imageNum
    imageNum2++;
    checkControls2();
    // how many pixels from the left should imageRow now be?
    if (imageNum2>0) {
    let pixelsLeft2 = -1*carouselWidth*(imageNum2);
    // change css for imageRow
    
    pixelsLeft2= pixelsLeft2 + "px";
    imageRow2.style.left = pixelsLeft2;
    }
    
}

/* Part 1.4: Change the onclick property for the next button */
    nextButton2.onclick = showNextImage2;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage2() {
    // change imageNum
    imageNum2--;
    // how many pixels from the left should imageRow now be?
    if (imageNum2>= 0) {
        checkControls2();
        let pixelsLeft2= -1*carouselWidth*(imageNum2);
        // change css for imageRow
        pixelsLeft2= pixelsLeft2 + "px";
        imageRow2.style.left = pixelsLeft2;
    }
}


    prevButton2.onclick = showPrevImage2;


    /*----------------------for origami part-----------------*/


/* Part 1.1: Get the elements */
let prevButton3 = document.getElementById("button-previous3");
let nextButton3 = document.getElementById("button-next3");
let imageRow3 = document.getElementsByClassName("carousel-image-row")[2];


/* Part 1.2: Create variable to keep track of which image we're on */
let imageNum3=0;
prevButton3.classList.add("hidden");
imageRow3.style.position='absolute';



/* Total number of images */
let totalImages3= document.getElementsByClassName("images3").length;

/* Part 1.7 */

function checkControls3() {
    // This if-statement checks if we're at the first image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum3 === 0) {
        // What should happen if it's the first image?
        prevButton3.classList.add("hidden");

    }
    else if (prevButton3.classList.contains("hidden")) {
        // otherwise, what should happen?
        prevButton3.classList.remove("hidden");
    }
    // This if-statement checks if we're at the last image.
    // In the parentheses below, check what imageNum is equal to.
    if (imageNum3 === (totalImages3-3)) {
        // What should happen it's the last image?
        nextButton3.classList.add("hidden");
    }
    else if (nextButton3.classList.contains("hidden")) {
        // otherwise, what should happen?
        nextButton3.classList.remove("hidden");
    }
} 

/* Part 1.3: The showNextImage function should shift the image row to the left */
function showNextImage3() {
    // change imageNum
    imageNum3++;
    checkControls3();
    // how many pixels from the left should imageRow now be?
    if (imageNum3>0) {
    let pixelsLeft3 = -1*carouselWidth*(imageNum3);
    // change css for imageRow
    
    pixelsLeft3= pixelsLeft3 + "px";
    imageRow3.style.left = pixelsLeft3;
    }
    
}

/* Part 1.4: Change the onclick property for the next button */
    nextButton3.onclick = showNextImage3;

/* Part 1.5: The showPrevImage function should shift the image row to the right */
function showPrevImage3() {
    // change imageNum
    imageNum3--;
    // how many pixels from the left should imageRow now be?
    if (imageNum3>= 0) {
        checkControls3();
        let pixelsLeft3= -1*carouselWidth*(imageNum3);
        // change css for imageRow
        pixelsLeft3= pixelsLeft3 + "px";
        imageRow3.style.left = pixelsLeft3;
    }
}


    prevButton3.onclick = showPrevImage3;


