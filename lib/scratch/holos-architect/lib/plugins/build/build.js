var assert = require("assert");

var food = {
    entries: [
        "riso alla pitocca",
        "brofadei",
        "gnocarei e mariconde",
        "verzata"
    ],
    main_dishes: [
        "polenta pasticciata",
        "polenta e uccelli",
        "frittata di rane",
        "anguilla ai ferri",
        "oca ai ferri",
        "polenta e uccelli",
        "casonsei",
        "polenta taragna",
        "cuore di vitello alla bergamasca"
    ]
};

var insults = [
    "Merda!",
    "Cazzo!",
    "Porca vacca!",
    "Cavolo!"
];

function getRandom(arr) {
    var rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}

module.exports = function (options, imports, register) {
    assert.equal(typeof options.numberOfGuests, "number",
        "Option 'numberOfGuests' is required");

    var eventbus = imports.eventbus;


    register(null, {
        "build": {empty:""}
    });
};

