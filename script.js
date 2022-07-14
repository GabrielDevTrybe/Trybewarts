const login = document.getElementById('btnLogin');

function loginInfo(){
    let user = document.getElementById('login').value
    let password = document.getElementById('password').value
    if(user === 'tryber@test.com.br' && password === '123456')
    alert('Olá, Tryber!');
    else {
        alert('Email ou senha inválidos.')
        console.log('oiiii');
    };
};
login.addEventListener('click', loginInfo);