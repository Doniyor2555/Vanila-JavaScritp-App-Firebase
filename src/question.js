export class Question {
  static create(question){
    return fetch("https://question-answer-de2fd-default-rtdb.firebaseio.com/questions.json", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      question.id = response.name;
      return question;
    })
    .then(addToLocalStorage);
  }
}

function addToLocalStorage(question){
  const all = getQuestionsFromLocalStorage();
  all.push(question);
  localStorage.setItem("question", JSON.stringify(all));
}

function getQuestionsFromLocalStorage(){
  return JSON.parse(localStorage.getItem("question") || '[]'); 
}