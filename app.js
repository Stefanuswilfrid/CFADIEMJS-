const name =document.getElementById("name");
var controlabel = document.querySelector(".control-label");
const rightname = document.getElementById("nameOutput");

const test = document.querySelector(".panel-bodyr"); //test = panel body right 
const lbody = document.getElementById("lbody"); //left skills section

//default is light color
test.style.backgroundColor = "#eff4f5";
test.style.color = "#222";

//Name
function myfunction(){
    rightname.textContent = "Hello there! What's your name?";
};

function blurfunction(){

    if((name.value).length>0){
    rightname.innerHTML= "Hi,   "+ name.value+"!";
    }
    else{
        rightname.textContent = "Hello there! What's your name?";
    }
};

//Birthday

const rightage = document.getElementById("ageOutput");
const age = document.getElementById("date");
function bfunction(){
    rightage.textContent = "Lemme guess, your age is....";

};

function bbfunction(){
    if((age.value).length>0){

        const splitted = (age.value).split('-');
        let d  = new Date();

        //year,month and date for 
        let year = splitted[0];
        let month = splitted[1];
        let day = splitted[2];

        //get today's date
        const tday = d.getDate();
        const tmonth = d.getMonth()+1;
        const tyear = d.getFullYear();

        //calculate the inputted value's age
        let fyear = tyear-year;

        if((tmonth-month)<0 ){
            fyear;
        }
        else if((tmonth-month)===0) {
           (tday-day<0)){
                fyear--;
            }
        }

        rightage.innerHTML= "Your age is   "+ fyear+" years old!";
        }
        else{
            rightage.textContent = "Would you mind entering your birthday?";
        }
    
}
//when user choose theme
const light = document.getElementById('light');
const dark = document.getElementById('dark');
var ttext = document.getElementById('themeOutput');

light.addEventListener("click",function(){
    test.style.backgroundColor = "#eff4f5"; 
    test.style.color = "#222"; 
    ttext.textContent= "You choose Light Mode!";
})

dark.addEventListener("click",function(){
    test.style.backgroundColor = "#222"; 
    test.style.color = "#eff4f5"; 
    ttext.textContent ="You choose Dark Mode!";
})

//skill section 



const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');
const skills = document.getElementById('skillsOutput');

const cf = document.querySelector(".form-group");

html.addEventListener("click", function(){
    lbody.removeChild(html);

    const rbtn= document.createElement('button');
    rbtn.innerText ='HTML';
    rbtn.style.backgroundColor="#28a745";
    rbtn.style.color = "white";
    rbtn.style.borderColor= "#28a745";
    rbtn.style.borderRadius = ".2rem";
    rbtn.style.lineHeight= "1.5";
    rbtn.style.padding=" .25rem .5rem";
    rbtn.style.border = "1px solid transparent";
    rbtn.style.marginRight="1rem";
    rbtn.style.marginBottom="1rem";
    
    skills.appendChild(rbtn);

    rbtn.className += "rhtml";

    const rhtml = document.querySelector(".rhtml");

    rhtml.addEventListener("click",function(){
        skills.removeChild(rhtml);
        lbody.insertBefore(html,lbody.childNodes[2])
    });

    rhtml.addEventListener("mouseover",function(){
        rhtml.style.backgroundColor = "red";
    })

    rhtml.addEventListener("mouseout",function(){
        rhtml.style.backgroundColor = "#28a745";
    })
   
})


css.addEventListener("click", function(){

    lbody.removeChild(css);
    const cbtn= document.createElement('button');
    cbtn.innerText ='CSS';
    cbtn.style.backgroundColor="#28a745";
    cbtn.style.color = "white";
    cbtn.style.borderColor= "#28a745";
    cbtn.style.borderRadius = ".2rem";
    cbtn.style.lineHeight= "1.5";
    cbtn.style.padding=" .25rem .5rem";
    cbtn.style.border = "1px solid transparent";
    cbtn.style.marginRight="1rem";
    skills.appendChild(cbtn);

    skills.appendChild(cbtn);

    cbtn.className += "rcss";

    const rcss = document.querySelector(".rcss");

    rcss.addEventListener("click",function(){
        skills.removeChild(rcss);
        lbody.insertBefore(css,lbody.childNodes[4])
    });

    rcss.addEventListener("mouseover",function(){
        rcss.style.backgroundColor = "red";
    })

    rcss.addEventListener("mouseout",function(){
        rcss.style.backgroundColor = "#28a745";
    })

});

javascript.addEventListener("click", function(){
    lbody.removeChild(javascript);

    const jbtn= document.createElement('button');
    jbtn.innerText ='JavaScript';
    jbtn.style.backgroundColor="#28a745";
    jbtn.style.color = "white";
    jbtn.style.borderColor= "#28a745";
    jbtn.style.borderRadius = ".2rem";
    jbtn.style.lineHeight= "1.5";
    jbtn.style.padding=" .25rem .5rem";
    jbtn.style.border = "1px solid transparent";
    jbtn.style.marginRight="1rem";
    skills.appendChild(jbtn);

    jbtn.className += "rjs";

    const rjs = document.querySelector(".rjs");

    rjs.addEventListener("click",function(){
        skills.removeChild(rjs);
        lbody.insertBefore(javascript,lbody.childNodes[6])
    });

    rjs.addEventListener("mouseover",function(){
        rjs.style.backgroundColor = "red";
    })

    rjs.addEventListener("mouseout",function(){
        rjs.style.backgroundColor = "#28a745";
    })
});
