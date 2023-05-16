const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const password = document.getElementById('password');
const icon = document.getElementById('icon');
const password1 = document.getElementById('password1');
const icon2 = document.getElementById('icon2');

function showHide(){
	if(password.type === 'password'){
		password.setAttribute('type', 'text');
		icon.classList.add('hide')
	}
	else{
	password.setAttribute('type', 'password');
	icon.classList.remove('hide')
	
	}
}

function showHide2(){
	if(password1.type === 'password'){
		password1.setAttribute('type', 'text');
		icon2.classList.add('hide')
	}
	else{
	password1.setAttribute('type', 'password');
	icon2.classList.remove('hide')
	}
}



signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});