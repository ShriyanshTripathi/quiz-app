const obj = [
  {
    question: "Q1 Wht is the full form of HTML",
    a: "Hum Mrkup Lnguge",
    b: "Hum Mrkup Lnguge",
    c: "Hum Mrkup text Lnguge",
    d: "Hyper text Markup Language",
    ans: "ans4"
  },
  {
    question: "Q2 What is the full form of CSS",
    a: "Hum Mrkup Lnguge",
    b: "Cast Cading Stylrstheet",
    c: "Cover Style Sheet",
    d: "Comunial style sheet",
    ans: "ans2"
  },
  {
    question: "Q3 What is the full form of JS",
    a: "Hum Mrkup Lnguge",
    b: "Java",
    c: "Java Script",
    d: "Comunial style sheet",
    ans: "ans3"
  },
  {
    question: "Q4 Which language u like",
    a: "js",
    b: "c",
    c: "Java",
    d: "Comunial style sheet",
    ans: "ans1"
  },
  
]
let j = 0;

const showscore = document.querySelector("#showscore")
const question = document.querySelector(".question")
const optin1 = document.querySelector("#optin1")
const optin2 = document.querySelector("#optin2")
const optin3 = document.querySelector("#optin3")
const optio4 = document.querySelector("#optin4")
const submit = document.querySelector("#submit")
const answers = document.querySelectorAll(".answer")
let i = 0;
let obj1 = obj;
const LoadQuestion = () => {

  question.innerHTML = obj1[i].question;
  optin1.innerHTML = obj1[i].a;
  optin2.innerHTML = obj1[i].b;
  optin3.innerHTML = obj1[i].c;
  optin4.innerHTML = obj1[i].d;

}
let score;
LoadQuestion()
const getcheak = () => {
  let answer;
  answers.forEach((currentAnsWer) => {
    if (currentAnsWer.checked) {
      answer = currentAnsWer.id

    }

  });
  return answer
}

submit.addEventListener("click", play)
function play() {
  const cheakAnswer = getcheak();
  console.log(cheakAnswer)

  if (cheakAnswer === obj1[i].ans) {

    score++;
  };
  i++
  if (i < obj1.length) {
    LoadQuestion();
  }
  else {
    showscore.innerHTML =
      ` <h3> Your score ${score}\ ${obj.length}</h3>
            <button class="btn onclick="location.reload()"> </button>  
            `

    showscore.classList.remove("scoreArea");


  }


}
