const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(arr, num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            let numIndex = arr.indexOf(arr[i]);
            arr.splice(numIndex, 1)
        }
    }
}
removeElement(array, 5);
console.log(array);
document.write(array);