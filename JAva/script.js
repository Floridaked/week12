const clickMeButton = document.querySelector(".click-me");
//console.log(clickMeButton);

function clickHandler()
{
        alert("You clicked me!");

        //clickMeButton.addEventListener("click", clickHandler);
}

clickMeButton.addEventListener("click", clickHandler,{once:true});

function changeBGpink()
{
       // document.body.style.backgroundColor = "pink";
       document.body.classList.add("pink-bg");
}

clickMeButton.addEventListener("click", changeBGpink);

function changtext()
{
    if(clickMeButton.textContent === 'Click Me!' )
    {
        clickMeButton.textContent = 'Clicked!';
    }
    else if (clickMeButton.textContent === 'Clicked!')
    {
        clickMeButton.textContent = 'Click Me!';
    }
    clickMeButton.textContent
}

clickMeButton.addEventListener("click", changtext);



function updateimage()
{
    console.log(Event.
    const image = document.querySelector('#shoppingCart');
    //console.log(image);
    image.src = "images/263142.png";
    image.width=100;
    image.height=100;
    image.alt = "Shoppingcart";
}
clickMeButton.addEventListener('click', updateimage);

const buttonContainer = document.querySelector(".button-container");
// console.log(buttonContainer);

function changeBGGreen(e)
{
    if(e.target.tagname === "BUTTON"){
    // e.target.style.backgroundColor = 'green';
    e.target.classlist.add("greenBG")
}

buttonContainer.addEventListener('mouseover', changeBGGreen);

function changeTextColor(e)
{
    console.log(e.target.textContent);
    e.target.style.color = e.target.textContent;
}
buttonContainer.addEventListener('click', changeTextColor);










