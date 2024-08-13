let a=document.querySelector('.in1');
let b=document.querySelector('.in2');
let c=document.querySelector('.in3');
let d=document.querySelector('.in4');
let p=document.querySelector('p');
let f=document.querySelector('.form');
a.addEventListener("click",function(){
    p.innerHTML="What is Your Name?"
    a.style.display="none";
    b.style.display="none";
    c.style.display="block";
    d.style.display="block";
});

b.addEventListener("click",function(){
    p.innerHTML="😔<br>What are you doing here? <br> Jis din Birthday ho us din aana!! <br> !!chalo bye niklo ab!!"
    p.style.color="red";
    p.style.fontSize="200%";
    p.style.fontWeight="bolder";
    a.style.display="none";
    b.style.display="none";
});
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Enter" button and the text input field
    const enterButton = document.querySelector('.in4');
    const textInput = document.querySelector('.in3');

    // Add an event listener to the "Enter" button
    enterButton.addEventListener('click', function() {
        // Get the value of the text input field
        const name = textInput.value;

        // Check if the input is not empty
        if (name) {
            // Display the name in an alert or process it further as needed
            p.innerHTML=`Happy Birthday ${name} <br> On your special day, may you be blessed with endless joy, love, and prosperity. May all your dreams come true! 🌟🎉`
            p.style.color="blue";
            c.style.display="none";
            d.style.display="none";
            const defaults = {
                spread: 360,
                ticks: 100,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["heart"],
                colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
              };
              
              confetti({
                ...defaults,
                particleCount: 50,
                scalar: 2,
              });
              
              confetti({
                ...defaults,
                particleCount: 25,
                scalar: 3,
              });
              
              confetti({
                ...defaults,
                particleCount: 10,
                scalar: 4,
              });
        } else {
            alert('Please enter your name.');
        }
    });

    // Additional logic to show the input field and "Enter" button when "Yes" is clicked
    const yesButton = document.querySelector('.in1');
    yesButton.addEventListener('click', function() {
        textInput.style.display = 'inline-block';  // Show the text input field
        enterButton.style.display = 'inline-block';  // Show the "Enter" button
    });
});
