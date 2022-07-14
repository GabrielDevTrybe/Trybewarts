const login = document.getElementById('btnLogin');

function loginInfo(){
    let user = document.getElementById('login').value
    let password = document.getElementById('password').value
    if(user === 'tryber@teste.com' && password === '123456')
    alert('Olá, Tryber!');
    else {
        alert('Email ou senha inválidos.')
        console.log('oiiii');
    };
};
login.addEventListener('click', loginInfo);





function verificaCheckBox() {
  if(document.getElementById('agreement').checked === false){
    return document.querySelector('#submit-btn').disabled = true
  }else {
    return document.querySelector('#submit-btn').disabled = false

  }
    

}
verificaCheckBox()


let pegaCheck = document.getElementById('agreement');
function habilitaCheckBox(){
  if(document.getElementById('agreement').checked === false) {
    document.querySelector('#submit-btn').disabled = true
  }else if(document.getElementById('agreement').checked === true) {
    document.querySelector('#submit-btn').disabled = false
  }
}



pegaCheck.addEventListener('click', habilitaCheckBox)




let form = document.querySelector('.conteiner');
form.addEventListener('submit', function(event) {
  if (document.getElementById('agreement').checked === false) {
    event.preventDefault();
  }
})




// const botao = document.querySelector('#submit-btn').disabled = true


