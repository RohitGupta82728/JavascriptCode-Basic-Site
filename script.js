//Variables
let bd = document.body;
let websiteName = "My Website";

//Functions
function setUpPage(what,bg="lightblue"){
    what.style.background = bg;
    what.style.fontSize = "3em";
    what.style.fontFamily = "Segoe Ui";
}

function newBtn(text,style,action){
    let val = document.createElement("button");
    val.innerText = text;
    if(style=="sn"){
        val.style.background = "linear-gradient(white,lightgray)";
        val.style.borderWidth =0;
        val.style.padding = "5px";
        val.style.textAlign="center";
        val.onclick=action;
        val.onmouseover=()=>{
            val.style.background = "linear-gradient(lightgray,gray)";
        }
        val.onmouseleave=()=>{
            val.style.background = "linear-gradient(white,lightgray)";
        }
    }
    return val;
}

//HTML Elements
function navBar(){
    let val = document.createElement("nav");
    val.style.background = "gray";
    val.style.width = "100%";
    val.style.height = "fit-content";
    return val;
}

function navItems(text){
    let val = document.createElement('a');
    val.style.color = "white";
    val.innerText = text;
    val.href ="#";
    val.style.textDecoration ="none";
    val.style.marginRight ="55px";
    val.style.userSelect = "none";
    val.style.borderRadius ="10px";
    val.style.transition="1s";
    val.style.paddingLeft ="10px";
    val.onmouseover=()=>{
        val.style.background = "white";
        val.style.color = "black";
    }
    val.onmouseleave=()=>{
        val.style.background ="transparent";
        val.style.color = "white";
    }
    if(val.innerText =="About"){
    val.href ="https://www.aithinkers.com/";
    }
    return val;
}

function newMsgBox(text){
    let val = document.createElement("textarea");
    let head = document.createElement('p');
    val.style.width="125px";
    val.style.height="100px";
    val.style.background = "linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.75))";
    val.style.color="white";
    val.style.borderWidth=0;
    val.style.fontSize="20px";
    val.style.position="absolute";
    val.style.right="125px"; 

    //head
    head.innerText = text;
    head.style.position ="absolute";
    head.style.bottom="250px";
    head.style.right=0;
    return [val,head];
}

//NavBar
let nav = navBar();

//NavBarItems
let home = navItems("Home");
let about = navItems("About");
let contact = navItems("Contact");

//Adding navitems to navbar 
nav.appendChild(home);
nav.appendChild(about);
nav.appendChild(contact);



//Heading
let head = document.createElement("h3");
head.innerText =`Welcome to ${websiteName}!`;
head.style.textAlign ="center";
head.style.transform="translateY(-30px)";
head.style.background ="red";

//Description
let desc = document.createElement("p");
desc.innerText =`This website structure is totally created by javascript
to check how to create tags and attribute, 

I have created this with the help of Youtube
beacuse i didn't find any website or page for website creation 
by using only Javascript.

Thanks AI-Thinkers for giving me this opportunity.`;
desc.style.fontSize = "20px";
desc.title = "This is my website description";
desc.style.background ="orange";
desc.style.fontFamily ="monospace";
desc.style.textAlign = "center";
desc.style.transform ="translateY(-86px)"

//buttons
let btn1 = newBtn("About This Website","sn",function(){
    alert("Write Info Here");
});

let msg= newMsgBox("Send Us a Message")[0];
let hd= newMsgBox("Send Us a Message")[1];
//Body
setUpPage(bd);

//Adding Elements to Body
bd.appendChild(nav); 
bd.appendChild(head);
bd.appendChild(desc);
bd.appendChild(btn1);
bd.appendChild(msg);
bd.appendChild(hd);