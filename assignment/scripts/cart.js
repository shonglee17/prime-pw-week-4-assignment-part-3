console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(a, b , c){
    console.log('add these items into basket:', a , b , c )
    basket.push()
    return true;
}//end addItem function
console.log('added items to basket:', addItem('a', 'b', 'c', 'd', 'e', 'f') )


function listItems(x){
    let z = x.forEach(printItem)
    function printItem(x){
        return x;   
    }//end function print
    return z;
}//end listItems

console.log(basket) 

function empty(x){
    console.log('in empty')
    x.splice(0,10)
    return x;
}//end empty
console.log('array will be empty if this function is used!', )





