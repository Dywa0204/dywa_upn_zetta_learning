type Addresess = {
    address: string,
    zipCode: number,
    city: string,
    country: string
}

export class User {
    idNumber: number | null = 0;
    name: string = "";
    age: number = 0;
    gender: string = "male";
    email: string = "";
    position: string = "";
    marital: string = "";
    addresses: Addresess = {
        address: "",
        zipCode: 0,
        city: "",
        country: ""
    }
}

export let sample = [
    {
        idNumber: 182622,
        name: "Bobby M Crume",
        age: 60,
        gender: "Male",
        email: "janiya1996@gmail.com",
        position: "Position One",
        marital: "Married",
        addresses: {
            address: "2803 Green Gate Lane",
            zipCode: 20707,
            city: "Laurel, Maryland(MD)",
            country: "US (United States)"
        }
    },{
        idNumber: 746588,
        name: "Queen P Cline",
        age: 57,
        gender: "Male",
        email: "kiel_orti1@hotmail.com",
        position: "Position Two",
        marital: "Single",
        addresses: {
            address: "1167 Straford Park",
            zipCode: 40507,
            city: "Lexington, Kentucky(KY)",
            country: "US (United States)"
        }
    }
]