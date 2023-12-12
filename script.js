function toCase(text) {
  // write your code here
	if(text == " "){
		return "-";
	}else if(text.lowerCase()){
		return text.uppercase
	}
	}else if(text.upperCase()){
		return text.lowercase
	}
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
