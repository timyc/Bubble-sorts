function sort() {
	var numArray = [7, 3, 2, 9, 8, 10];
	var arrayLength = numArray.length;
	var numArray2 = [7, 3, 2, 9, 8, 10]; // numArray2 should be the same as numArray
	var numArray3 = [];
	var arrayPos = 0;
	var sortDone = false;
	for (var x = 0; x < arrayLength; x++) {
		numArray.pop();
		var filteredArray = numArray2.filter(function(e) {
			return numArray.indexOf(e) === -1;
		});
		if (numArray3.length == 0) {
			numArray3.push(filteredArray[0]);
		} else {
			numArray3.forEach(function(f) {
				if (filteredArray[0] >= f) {
					arrayPos++;
				}
			});
			if (arrayPos > 0) {
				numArray3.splice(arrayPos, 0, filteredArray[0]);
				sortDone = true;
			}
			if (sortDone == false) {
				numArray3.splice(0, 0, filteredArray[0]);
			}
		}
		arrayPos = 0;
		sortDone = false;
		numArray2.pop();
	}
	console.log(numArray3);
}