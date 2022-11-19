console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems = 5;
function addItem(...x) {

    function isFull(...x) {
        if (basket.length < maxItems) {
            basket.push(...x)
            return true;
        }// end if
        else {
            return false;
        }//end else
    }//end isFull function
    isFull('a', 'b', 'c'
    basket.push(...x)
    return basket;
}//end addItem function

console.log('added items to basket:', addItem('a', 'b', 'c', 'd', 'e'))


function listItems(basket) {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i])
    }// end for
    return basket;
}//end listItems
console.log('list these items:', listItems(basket))

// function empty(basket){
//     let i = 0;
//     console.log('are we in this')
//     while(i<basket.length)
//     basket.shift(basket[i]);
//     i++;
//     return basket;
// }//end empty
// console.log('empty array with this function:', empty(basket))
console.log(basket)

//Stretch Goals


function isFull(x) {
    if (x < maxItems) {
        return false;
    }
    else {
        return true;
    }

    return;
}
console.log('is the basket full', isFull(basket))
console.log(basket)

// Add a global const named maxItems and set it to 5.

// Create a function called isFull(). It should:

// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)

// Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false





function removeItem(basket) {
    console.log('in removeItem')
    let index = basket.indexOf('a')
    return index;
}
console.log('search this array:', basket)






