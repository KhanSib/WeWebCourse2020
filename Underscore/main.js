(function () {
    var peoples = [{age:28, name: "Ivan", lastName: "Ivanov"},
                   {age:17, name: "Petr1", lastName: "Petrov1"},
                   {age:37, name: "Petr2", lastName: "Petrov2"},
                   {age:57, name: "Petr3", lastName: "Petrov3"},
                   {age:27, name: "Petr4", lastName: "Petrov4"},
                   {age:25, name: "Petr5", lastName: "Petrov5"},
                   {age:12, name: "Petr6", lastName: "Petrov6"},
                   {age:19, name: "Petr7", lastName: "Petrov7"},
                   {age:56, name: "Petr8", lastName: "Petrov8"},
                   {age:20, name: "Sergey", lastName: "Sydorov"}];

    var middleAge=_.reduce(peoples, function(memo, p){ return memo + p.age; }, 0)/peoples.length;

    console.log(middleAge);

    var peoplesWithAgeBetween20And30=_.chain(peoples)
    .filter(function(p) { return p.age >= 20 && p.age <= 30; })
    .sortBy("age")
    .pluck("name")
    .value();

    console.log(peoplesWithAgeBetween20And30);
}());