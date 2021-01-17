var mainLogo = document.getElementById('mainLogo');
var mainLogin = document.getElementById('main-login');

function hideItem(element){
    element.style.display = 'none';

}

function showItem(element){
    element.style.display = 'block'
}


function aparecerTelaLogin(){
    hideItem(mainLogo);
    
    showItem(mainLogin);
}

function showSubscribe(){
    hideItem(mainLogo);
    showItem(document.querySelector('#main-cadastro'));
}

