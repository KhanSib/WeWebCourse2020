var countries = [
    {
        name: "Russia",
        cities: [{name: "Novosibirsk", population: 1618039},
            {name: "Moscow", population: 12615279},
            {name: "Yekaterinburg", population: 1483119},
            {name: "St. Petersburg", population: 5383890}
        ]
    },
    {
        name: "USA",
        cities: [{name: "New York", population: 8336817},
            {name: "Los Angeles", population: 3979576},
            {name: "Chicago", population: 2693976},
            {name: "Houston", population: 2320268}
        ]
    },
    {
        name: "Spain",
        cities: [{name: "Madrid", population: 3155360},
            {name: "Barcelona", population: 1593075},
            {name: "Valencia", population: 796549}
        ]
    },
]

function getCountriesMaxCountCities(countries) {
    return countries
        .map(function (item) {
            return {name: item.name, count: item.cities.length};
        })
        .filter(function (item) {
            return item.count === countries
                .map(function (item) {
                    return {count: item.cities.length};
                })
                .sort(function (item1, item2) {
                    return item2.count - item1.count;

                })
                [0].count;
        });

}

console.log(getCountriesMaxCountCities(countries));
