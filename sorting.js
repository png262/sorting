function bubbleSort(arr){
	var swapped = true;
	var numSwaps = 0;
	while (swapped){
		swapped = false;
		for (var i = 0; i < arr.length-1; i++){
			if (arr[i] > arr[i+1]){
				swap(arr,i);
				swapped = true;
				numSwaps++;
			}
		}
	}
	return arr;
}
function swap(arr,index){
	var toSwap = arr[index];
	arr[index] = arr[index+1];
	arr[index+1] = toSwap;
}

function mergeSort(arr){
	if (arr.length === 0){
		return [];
	}
	if (arr.length === 1){
		return arr;
	}
	else {
		var splitArr = split(arr);
		var left = mergeSort(splitArr[0]);
		var right = mergeSort(splitArr[1]);
		return merge(left,right);
	}
}

function merge(arr1, arr2){
	var merged = []
	while (arr1.length > 0 && arr2.length > 0){
		if (arr1[0] < arr2[0]){
			merged.push(arr1.shift())
		}
		else {
			merged.push(arr2.shift());
		}
	}
	return merged = merged.concat(arr1).concat(arr2);
}


function split(wholeArray) {
	var firstHalf = wholeArray.slice(0,wholeArray.length/2);
	var secondHalf = wholeArray.slice(wholeArray.length/2);
	return [firstHalf, secondHalf];
}