function makeUser(name, age, city)
{
    let a = {};
    a["name"] = name;
    a["age"] = age;
    a["city"] = city;
    return a;
}
console.log(makeUser("Gugan", 18, "Tiruppur"));