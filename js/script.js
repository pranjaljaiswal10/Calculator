let display=document.querySelector(".result");
let button=document.querySelectorAll(".btn");
let reset=document.querySelector(".clear");
let equal=document.querySelector(".equal");

//take the input which class button is not reset & equal and display in result class
Array.from(button).forEach(buttons=>{//because foreach work on array not a nodelist
  if((!buttons.classList.contains("reset"))||(!buttons.classList.contains("equal")))
  buttons.addEventListener("click",function handleNumberclick(event)
  {
    let currentvalue=buttons.textContent;
    if(display.textContent==="0")
    display.textContent=currentvalue;//it add what we click if zero
    else
    display.textContent+=currentvalue;//if display contain number or expression
  });
})
reset.addEventListener("click",handleResetclick);//it clear the value and write it zero
equal.addEventListener("click",handleEqualclick);//

function handleResetclick()
{
     display.textContent="0"; 
}
function handleEqualclick()
{
 
  if(display.textContent.includes("--")||display.textContent.includes("++")||display.textContent.includes("**")||display.textContent.includes("//"))
  {
    display.textContent="Undefined";
  }
  else
  {
    try {
      let result = eval(display.textContent);//evalute expression
      display.textContent=result;
    } catch (error) {
      console.log("An error occurred: " + error.message);//if display is 2/0 then show message
    }
  }
}