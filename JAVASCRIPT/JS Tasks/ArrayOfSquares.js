function squareNumbers(...x)
{
    let a = [];
    x.forEach((element, index) => 
    {
        if(typeof element === 'number')
        {
            a.push(element*element);
        }      
    })
    return a;
}
console.log(squareNumbers(2, 3, 4, "5"));