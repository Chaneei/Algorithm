function isIsogram(str){

		  for (var i = 0; i < str.length - 1; i++) {
		  	for (var j = i + 1; j < str.length; j++) {
		  		if (str[i].toLowerCase() == str[j].toLowerCase()) {
		  			return false;
		  		}
		  	}
		  }

		  return true;
		}
