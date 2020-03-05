function dungeonestDark(input) {
    let initialHealth = 100;
    let initialCoins = 0;
    let bestRoom = 0;

    let inputArr = input.split("|");

    for (let i = 0; i < inputArr.length; i++) {
        bestRoom++;
        let room = inputArr[i].split(" ");
        let item = room[0];
        let number = Number(room[1]);

        if (item === `potion`) {
            initialHealth += number;
            if (initialHealth > 100) {
                initialHealth = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (item === `chest`) {
            initialCoins += number;
            console.log(`You found ${number} coins.`)
        } else {
            initialHealth -= number;
            if (initialHealth <= 0) {
                console.log(`You died! Killed by ${item}.`)
                console.log(`Best room: ${bestRoom}`);
                break;
            } else {
                console.log(`You slayed ${item}.`)
            }
        }
    }
    if (initialHealth > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")