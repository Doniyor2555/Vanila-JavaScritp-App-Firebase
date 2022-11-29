import { Question } from './question';
import {createModal, isValid } from './utils';
import { getAuthForm } from './auth';
import './style.css';

window.addEventListener("load", Question.renderList);
const form = document.getElementById("form"),
      input = form.querySelector("#question-input"),
      submitBtn = form.querySelector("#submit"),
      modalBtn = document.querySelector("#modal-btn");

form.addEventListener("submit", submitFormHandler);
modalBtn.addEventListener("click", openModal);
input.addEventListener("input", () => {
  submitBtn.disabled = !isValid(input.value);
});
function submitFormHandler(event){
  event.preventDefault();

  if(isValid(input.value)){
    const question = {
      text : input.value.trim(),
      date : new Date().toJSON() 
    };
    submitBtn.disabled = true;
    
    Question.create(question).then(() => {
    input.value = '';
    input.className = '';
    submitBtn.disabled = false;
    });
  }
}

function authFormHandler(e){
  e.preventDefault();
}

function openModal(){
  createModal('Афторизация', getAuthForm());
  document
  .getElementById("auth-form")
  .addEventListener("submit", authFormHandler, {once: true});
}