const select=
document.querySelector("select");
const html= 
document.querySelector("html"); 
document.body.style.padding ="10px";

function update(bgColor, textColor) {
  html.style.backgroundColor= bgColor;
  html.style.color= textColor;
}
select.addEventListener("change", () =>
select.value==="black"
? update("black","white")
: update("white", "black"),
);




const select=
document.querySelector("select");
const list= 
document.querySelector("ul"); 
document.querySelector("h1");

select.addEventListener("change", ()=>{
    const choice= select.value;
    let days= 31;
    if(choice==="February"){ days=28;
    } else if( choice==="April" || choice==="June" ||  choice==="September" 
    ||  choice==="November" ){
      days=30;
    }
    creatCalender(days, choice);
}
);

function creatCalender(days, choice){
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i=1; i <= days; i++){
    const listItem= document.createElement('li');
    listItem.textContent= i;
    list.appendChild(listItem);
  }
}

creatCalender(31, 'January');