const login = document.getElementById('btnLogin');
function loginInfo() {
  const user = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (user === 'tryber@teste.com' && password === '123456') alert('Olá, Tryber!');
  else {
    alert('Email ou senha inválidos.');
  }
}
login.addEventListener('click', loginInfo);
const subBtn = document.querySelector('#submit-btn');
function verificaCheckBox() {
  const desabilita = subBtn;
  const habilita = subBtn;
  if (document.getElementById('agreement').checked === false) {
    habilita.disabled = true;
  } else {
    desabilita.disabled = false;
  }
}
verificaCheckBox();
const pegaCheck = document.getElementById('agreement');
function habilitaCheckBox() {
  if (document.getElementById('agreement').checked === false) {
    subBtn.disabled = true;
  } else if (document.getElementById('agreement').checked === true) {
    subBtn.disabled = false;
  }
}
pegaCheck.addEventListener('click', habilitaCheckBox);
const form = document.querySelector('.conteiner');
form.addEventListener('submit', (event) => {
  if (document.getElementById('agreement').checked === false) {
    event.preventDefault();
  }
});
