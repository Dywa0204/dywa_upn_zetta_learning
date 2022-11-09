export class Card {
    id : number = 1;
    isOpen : boolean = false;
    title : string = "";
    subtitle : string = "";
    desc : string = "";
    random : number = 0;
}

const getCards = () => {
    let temp = [];

    for(let i = 1; i <= 15; i++){
        temp[i-1] = {
            id : i,
            isOpen : false,
            title : "Card " + i,
            subtitle : "This Is Card " + i,
            desc : "Lorem Ipsum Dolor Sit Amet",
            random : Math.random()
        }
    }

    return temp;
}

export let Cards = getCards();