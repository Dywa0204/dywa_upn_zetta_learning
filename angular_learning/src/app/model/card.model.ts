export class Card {
    id : number = 1;
    isOpen : boolean = false;
    title : string = "";
    desc : string = "";
}

const getCards = () => {
    let temp = [];

    for(let i = 1; i <= 20; i++){
        temp[i-1] = {
            id : i,
            isOpen : false,
            title : "Card " + i,
            desc : "This Is Card " + i
        }
    }

    return temp;
}

export const Cards = getCards();