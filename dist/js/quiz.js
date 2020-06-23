window.onload = function(){
    show(0);
}
let question_count = 0;
let points = 0;
let count = 20;

let questions =[
    {
        id:1,
        question: "How many farizat namaz rakaat are there in a day?",
        answer:"17",
        options: [
            "14",
            "17",
            "19",
            "16"
        ]
    }
    ,
    {
        id:2,
        question: "How many gusul are farizat in islam?",
        answer:"7",
        options: [
            "9",
            "12",
            "7",
            "5"
        ]
    },
    {
        id:3,
        question: "From the 7 pillars of islam what is the importance(maqaam) of valayat?",
        answer:"Rooh no maqaam",
        options: [
            "Rooh no maqaam",
            "haath no maqaam",
            "matha no maqaam",
            "Dil no maqaam"
        ]
    } ,
    {
        id:4,
        question: "On which date of which month did rasullah state 'من كنت مولاه فهذا علي مولاه'?",
        answer:"18 zil hijja",
        options: [
            "10 zil hijja",
            "10 shawwal",
            "18 zil qada",
            "18 zil hijja"
        ]
    }
    ,
    {
        id:5,
        question: "What is the key to namaaz?",
        answer:"taharat",
        options: [
            "acha amal",
            "taharat",
            "zakat",
            "Datan"
        ]
    },
    {
        id:6,
        question: "In which year did the memorable safar of 'MANSOOR AL YEMEN' HAPPEN?",
        answer:"1381H",
        options: [
            "1372H",
            "1381H",
            "1395H",
            "1378H"
        ]
    },
    {
        id:7,
        question: "What is the sawab of praying imamat in your house?",
        answer:"12 namaaz",
        options: [
            "12 namaaz",
            "100 namaz",
            "1 namaz",
            "Sadaqa no sawaab"
        ]
    },
    {
        id:8,
        question: "Which Dai mutlaq took care of 12 thousand mumineen during a drought?",
        answer:"Syedna Abdeali Saifuddin",
        options: [
            "Syedna abdut taiyeb zakiuddin",
            "Syedi abdeali imadudeen",
            "Syedna ali shamsuddin",
            "Syedna Abdeali Saifuddin"
        ]
    },
    {
        id:9,
        question: "How many Hajj has Syedna mufaddal saifuddin aqa TUS performed after becoming dai il mutlaq?",
        answer:"0",
        options: [
            "0",
            "2",
            "1",
            "6"
        ]
    }
];




function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    points = 0;

    sessionStorage.setItem("name", name);

    location.href ="quiz.html"

   
}  




let quiztime = setInterval (function() {
    count = count - 1;
    console.log(count);
    sessionStorage.setItem("counter", count);
    let count1 = sessionStorage.getItem("counter");
    document.querySelector("span.counttimer").innerHTML = count1;
     if (count < 1)
     {
        if(question_count == questions.length-1){
            sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
            clearInterval(mytime);
            clearInterval(quiztime);
            location.href ="end.html"
            return;
        }
        count = 20;
        points = 0;
        question_count++;
        show(question_count);
     }
},1000);


function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer){
        points += 1;
        sessionStorage.setItem("points", points)
    }
    
    if(question_count == questions.length-1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href ="end.html"
        return;
    }
    count = 20;
    question_count++;
    show(question_count);
    
}

function show(count){
    let question = document.getElementById("questions");
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class ="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>
    `;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for(let i=0; i< option.length; i++){
        option[i].onclick = function() {
            for(let j=0; j< option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }

}

