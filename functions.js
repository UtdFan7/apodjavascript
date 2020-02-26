// const pressGrindBeans =() =>

// console.log("Grinding for 20 seconds");

// }

// pressGrindBeans();


let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding
    }
    }


const coffeeOrder = (size,typeOfDrink) => {
    console.log ('Your order is a ${size} from account ${typeOfDrink');
}
    coffeeOrder ("large", "latte");
    coffeeOrder ("medium", "iced coffee");
    coffeeOrder ("small", "filter coffee");

const cashWithdrawal = (amount, accnum) => {

    console.log ("Withdrawing $ {amount} from account $ {accnum})
    
}

cashWithdrawal (300, 50449921);
cashWithdrawal (30, 50449921);
cashWithdrawal (200, 50447921);



const name = (age,favColour) => {
    console.log ('You are ${age} from account ${favColour');
}
    name ("20", "red");
    name ("30", "blue");
    name ("40", "green");

