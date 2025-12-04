function collectNames(...x)
{
    let a = [];
    x.forEach((element, index) => 
    {
        if(typeof element === 'string')
        {
            a.push(element.toUpperCase());
        }      
    })
    return a;
}
console.log(collectNames("aadithya", "gugan", "guru"));