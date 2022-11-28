import './style.css';

const form = document.getElementById("form"),
      input = form.querySelector("#question-input"),
      SubmitBtn = form.querySelector("#submit");

form.addEventListener("submit", submitFormHandler);

function submitFormHandler(event){
  event.preventDefault();

  console.log(input.value);
}