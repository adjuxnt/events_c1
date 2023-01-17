// hente inn skjemaet my_form fra HTML-siden
const form = document.getElementById('my_form');

// metode for å legge event listener til HTML-skjemaet form
form.addEventListener("submit", (e)=> {

	// lagre inputs og skrive det ut
	let data = e.target.first_input.value;
	console.log(data);

	// hindre at nettsiden reloader
	e.preventDefault();

}, false); 
