// Common Functions

// Function to break the liquid tag array to name, url and other options
let breakLiquidTag = tag => {

	// Split the letters of the liquid tag to an array 
	let liquidTagArr = tag.split('');

	// Removal of the braces and percentage
	let newTagArr = liquidTagArr.filter(item => 
		item !== '{' && item !== '%' && item !== '}'
	);

	// Remove the spaces at the beginning and end
	newTagArr.pop();
	newTagArr.shift();


	// The array for the liquid tag name
	let tagNameArr = [];

	// Get the tag name from the liquid tag and stop when a space is approached
	for(let i=0; i < newTagArr.length; i++) {
		if(newTagArr[i] == ' ') {
			i = newTagArr.length;
		} else {
			tagNameArr.push(newTagArr[i]);
		}
	}

	// Changes the array to a string
	let tagName = tagNameArr.join('');

	// Delete the tag name array contents and the extra space from the new tag array
	for(let i = 0; i <= tagNameArr.length; i ++) {
		newTagArr.shift();
	}

	// The array for the liquid tag url
	let tagUrlArr = [];	

	// Get the tag url from the liquid tag
	for(let i=0; i < newTagArr.length; i++) {
		if(newTagArr[i] == ' ') {
			i = newTagArr.length;
		} else {
			tagUrlArr.push(newTagArr[i]);
		}
	}

	// Changes the array to a string
	let tagUrl = tagUrlArr.join('');

	// Delete the tag url array contents and the extra space from the new tag array
	for(let i = 0; i < tagUrlArr.length; i ++) {
		newTagArr.shift();
	}

	// initialize the options of the liquid tag to null
	let tagOpt = null;

	// check if the new tag array still has values, 
	// if it does, it means, there are other contents aside the url which are most probably, the tag options
	if(newTagArr.length > 0) {

		// clear the space before the options
		newTagArr.shift();

		// The array for liquid tag options
		let tagOptArr = [];
		
		for(let i=0; i < newTagArr.length; i++) {
			if(newTagArr[i] == ' ') {
				i = newTagArr.length;
			} else {
				tagOptArr.push(newTagArr[i]);
			}
		}

		// Changes the array to a string
		tagOpt = tagOptArr.join('');

		// Delete the tag options array contents and the extra space from the new tag array
		for(let i = 0; i < tagUrlArr.length; i ++) {
			newTagArr.shift();
		}
	}


	return ({
		tagName: tagName,
		tagUrl: tagUrl,
		tagOpt: tagOpt
	});



}

module.exports = {
	breakLiquidTag
};
