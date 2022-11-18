console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(...x){
    console.log('add these items into basket:', x )
    basket.push(...x )
    return basket;
}//end addItem function
console.log('added items to basket:', addItem('a', 'b', 'c', 'd', 'e', 'f' ) )


function listItems(basket){
    for (i=0 ; i<basket.length ; i++){
    console.log(basket[i])
    }// end for
    return basket;
    
}//end listItems
console.log('list these items:', listItems(basket) ) 

function empty(basket){
    console.log('are we in this')
    for (i=0; i<basket.length ; i++){
    basket.shift()
    }
    return basket;
}//end empty
console.log('empty array with this function:', empty(basket))
console.log(basket)
function removeItem(basket){
    console.log('in removeItem')
    let index = basket.indexOf('a')
    return index;
}
console.log('search this array:', basket)






