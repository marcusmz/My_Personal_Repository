/*Create a few beverage objects and assign values to each object for the following properties:

    - brandName
    - type
    - volumeInLiters
    - priceInCents
    - expirationDate
    - datesOfPreviousSips (use an array of strings)
    - isOpen

Define your objects using both literal syntax to create all properties and values at once and
also try defining empty objects and assign property values in separate statements using the dot notation.

 */

/*
var bev1 = {
    brandName: 'Pepsi',
    type: 'Soda',
    volumeInLiters: 20,
    priceInCents: .99,
    expirationDate: 2025,
    datesOfPreviousSips: ['04.13', '04.15', '04.17'],
    isOpen: 'true'
}

var bev2 = {
    brandName: 'ArizonaGreenTea',
    type: 'Tea',
    volumeInLiters: 30,
    priceInCents: .75,
    expirationDate: 2025,
    datesOfPreviousSips: ['02.14', '02.15', '02.16'],
    isOpen: 'false'
}

var beverages = [bev1, bev2];

console.log(bev2.type);
console.log(bev1.brandName);
console.log(bev1['datesOfPreviousSips']);
console.log(beverages[0].type); */

// -- Mini Exercise 2

var users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];

// 1. Log the names of all users in a single console log
// separated by spaces. // output = "Sam Cathy Karen"

var output = '';
users.forEach(function(user) {
    output += user.givenName + " ";
});
console.log(output.trim());



// 2. Change the names of all users to "John Doe"

users.forEach(function(user){
    user.givenName = "John Doe";
});

console.log(users);

// 3. Increase the current age of all users by 1

users[0].age += 1;
users[1].age += 1;
users[2].age += 1;

//or

for (var i = 0; i < users.length; i++); {
    users[1].age += 1;
}