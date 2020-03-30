var convertBtn = document.getElementsByClassName('convert-button');
var URLinput = document.querySelector('.URL-input');
console.log(convertBtn);
convertBtn[0].addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	sendURL(URLinput.value);
});
function sendURL(URL) {
	window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
