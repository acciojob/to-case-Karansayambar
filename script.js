function toCase(text) {
	if(text.length == 0){
		return("-");
	}
	return text.lowerCase()+"-"+text.upperCase();
}
const text = prompt("Enter text:");
alert(toCase(text));

