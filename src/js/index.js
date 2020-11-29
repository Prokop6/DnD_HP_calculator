const roll = (dice) => {
    return Math.floor(
        Math.random()*dice);
};

const calculateConstitutionBonus = (CON) => {
    if (CON < 1) {CON = 1} 
    if (CON > 20) {CON = 20} 
    return Math.floor((CON-10)/2)
};

const estimateHPonLevelup = (CON, dice) => {
    return calculateConstitutionBonus(CON)+roll(dice) 
};

const estimateHPforLevel = (CON, dice, level) => {
    let hitpoints = dice + calculateConstitutionBonus(CON)
    let i = 2
    while (i < level+1){
        hitpoints = hitpoints + estimateHPonLevelup(CON, dice)
        i++
    };
    console.log(hitpoints);
    return hitpoints
};

const simulateHPforLevel = (CON, dice, level) => {
    let simulatedHitpoints = []
    let j = 0
    while (j < 1000){
        simulatedHitpoints.push(
            estimateHPforLevel(CON, dice, level)
            )
            j++
        };
    return simulatedHitpoints
};