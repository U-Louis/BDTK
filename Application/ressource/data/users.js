var users = new Map();
users.set("1", {
    name: "La Bibliothécaire",
    firstname: "Jean-Denise",
    dateofbirth: "22/03/1975",
    address1: "1 rue des Exemples",
    address2: " ",
    postalcode: "75000",
    city: "Paris",
    email: "jeandenise-labibibliothécaire@exemple.com",
    mobilenumber: " ",
    homenumber: "01 00 00 00 00",
    username: "jean-denise.labibliothecaire",
    password: "motdepasse1",
    status: new Map([
        ["hasRightAdherent", true],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", false]
    ]),
    listofbook: []
});

users.set("2", {
    name: "Simplevisiteur",
    firstname: "Lucienne",
    dateofbirth: "25/12/1946",
    address1: "2 rue des Exemples",
    address2: "appartement 2",
    postalcode: "75000",
    city: "Paris",
    email: "lucienne-simplevisiteur@exemple.com",
    mobilenumber: "",
    homenumber: "01 01 00 00 00",
    username: "lucienne.simplevisiteur",
    password: "motdepasse2",
    status: new Map([
        ["hasRightAdherent", false],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", true],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", false]
    ]),
    listofbook: []
});

users.set("3", {
    name: "Adherentpasajour",
    firstname: "Maxime",
    dateofbirth: "22/03/2000",
    address1: "3 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "maxime-adherenpasajour@exemple.com",
    mobilenumber: "06 00 00 00 01",
    homenumber: "",
    username: "maxime.adherenpasajour",
    password: "motdepasse3",
    status: new Map([
        ["hasRightAdherent", true],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", false]
    ]),
    listofbook: ["1", "2"]
});

users.set("4", {
    name: "Adherentajour",
    firstname: "Alex",
    dateofbirth: "01/01/1984",
    address1: "4 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "alex-adherentajour@exemple.com",
    mobilenumber: "06 00 40 00 00",
    homenumber: "01 04 00 00 00",
    username: "alex.adherentajour",
    password: "motdepasse4",
    status: new Map([
        ["hasRightAdherent", true],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", true]
    ]),
    listofbook: ["23", "24", "25"]
});



users.set("5", {
    name: "Legestionnaire",
    firstname: "Pierre-Claude",
    dateofbirth: "25/04/1974",
    address1: "5 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "pierre-claude@exemple.com",
    mobilenumber: "06 05 00 25 00",
    homenumber: "01 05 25 04 74",
    username: "pierre.claude",
    password: "motdepasse5",
    status: new Map([
        ["hasRightAdherent", false],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", true],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", false]
    ]),
    listofbook: []
});

users.set("6", {
    name: "Laresponsable",
    firstname: "Anne-Marie",
    dateofbirth: "06/06/1987",
    address1: "6 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "annemarie-laresponsable@exemple.com",
    mobilenumber: "06 05 00 25 00",
    homenumber: "01 06 06 06 87",
    username: "annemarie.laresponsable",
    password: "motdepasse6",
    status: new Map([
        ["hasRightAdherent", false],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", true],
        ["hasRightAdmin", false],
        ["isUpTodate", false]
    ]),
    listofbook: []
});

users.set("7", {
    name: "Ladmin",
    firstname: "Jack",
    dateofbirth: "07/07/1977",
    address1: "7 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "jack-ladmin@exemple.com",
    mobilenumber: "06 07 00 25 00",
    homenumber: "01 07 07 19 77",
    username: "jack.ladmin",
    password: "motdepasse7",
    status: new Map([
        ["hasRightAdherent", false],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", false],
        ["hasRightAdmin", true],
        ["isUpTodate", false]
    ]),
    listofbook: []
});

users.set("8", {
    name: "Superman",
    firstname: "Clark",
    dateofbirth: "25/12/1930",
    address1: "8 rue des Exemples",
    address2: "",
    postalcode: "75000",
    city: "Paris",
    email: "clark.superman@exemple.com",
    mobilenumber: "06 08 00 25 00",
    homenumber: "01 25 12 19 30",
    username: "clark.superman",
    password: "motdepasse9",
    status: new Map([
        ["hasRightAdherent", true],
        ["hasRightBibliothecaire", true],
        ["hasRightGestionnaire", true],
        ["hasRightResponsable", true],
        ["hasRightAdmin", true],
        ["isUpTodate", true]
    ]),
    listofbook: []


});

users.set("9", {
    name: "Adherentajour sans BD",
    firstname: "Henry",
    dateofbirth: "09/09/1999",
    address1: "9 rue des Exemples",
    address2: "Immeuble 3 , étage 3 , porte 2",
    postalcode: "14000",
    city: "Caen",
    email: "henry-adherentajour-sans-bd@exemple.com",
    mobilenumber: "06 00 60 00 00",
    homenumber: "01 09 09 19 99",
    username: "henry.adherentajour.sans.bd",
    password: "motdepasse6",
    status: new Map([
        ["hasRightAdherent", true],
        ["hasRightBibliothecaire", false],
        ["hasRightGestionnaire", false],
        ["hasRightResponsable", false],
        ["hasRightAdmin", false],
        ["isUpTodate", true]
    ]),
    listofbook: []
});