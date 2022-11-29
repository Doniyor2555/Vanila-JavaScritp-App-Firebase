export function getAuthForm(){
  return `
  <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="email" required>
      <label for="email">Email</label>
    </div>
        <div class="mui-textfield mui-textfield--float-label">
          <input type="password" id="password" required minlength="10" maxlength="256">
          <label for="password">Пароль</label>
        </div>
        <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary"> 
          Войти
        </button>
  </form>
  `;  
}

export function authWithEmailAndPassword(email, password){
  return fetch("")
}