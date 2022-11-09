type Addresess = {
    address: string,
    zipCode: number,
    city: string,
    country: string
}

export class User {
    idNumber: number = 0;
    name: string = "";
    age: number = 0;
    gender: string = "male";
    email: string = "";
    position: string = "";
    marital: string = "";
    addresess: Addresess = {
        address: "",
        zipCode: 0,
        city: "",
        country: ""
    }
}

export let Users = [
    {
        idNumber: 123456,
        name: "Joko Widodo wkwkwkwk",
        age: 67,
        gender: "male",
        email: "jokowi@hehehe.com",
        position: "Position One",
        marital: "Married",
        addresess: {
            address: "Kono Kae Lah",
            zipCode: 13422,
            city: "Solo",
            country: "Indonesia"
        }
    },{
        idNumber: 1234567,
        name: "Jokowi",
        age: 67,
        gender: "male",
        email: "jokowi@hehehe.com",
        position: "Position One",
        marital: "Single",
        addresess: {
            address: "Kono Kae Lah",
            zipCode: 13422,
            city: "Solo",
            country: "Indonesia"
        }
    }
]