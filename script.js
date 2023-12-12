function toCase(text) {
	if(text.length == 0){
		return("-");
	}
	return text.toLowerCase()+"-"+text.toUpperCase();
}
const text = prompt("Enter text:");
alert(toCase(text));

