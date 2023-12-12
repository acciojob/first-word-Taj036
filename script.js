function firstWord(s) {
  // your code here
	if(s === '' || s ===" "){
		return '';
	}
	let ans ='';
	for(let key of s){
		if(key == ' '){
			break ;
		}else{
			ans += key ;
		}
	}
	return ans ;
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
