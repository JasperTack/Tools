/*
Description:
	flattenArray will take a multi-dimensional array, which can be nested several times
	and will return a single-dimentional array with the same values.
Arguments:
	- input: multi-dimensional array
Return:
	flattened, single-dimentional array
Usage:
	flattenArray([1,[2,[3]]])
	> [1, 2, 3]
*/

function flattenArray(input) {
	if (Array.isArray(input)) {
    	return input.reduce((result, elem) => [...result, ...flattenArray(elem)], []);
	} else {
		return [input];
	}
}