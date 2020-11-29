let inputConstitution =13;
let inputHitdice = 10; 
let inputLevel = 5;
let rolledSample = [];

const roll = (dice) => {
    return Math.ceil(
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
    return hitpoints
};

const simulateHPforLevel = (CON, dice, level) => {
    let simulatedHitpoints = []
    let j = 0
    while (j < 10000){
        simulatedHitpoints.push(
            estimateHPforLevel(CON, dice, level)
            )
            j++
        };
    return simulatedHitpoints
};
const generateSample = () => {
    rolledSample = simulateHPforLevel(inputConstitution,inputHitdice, inputLevel) 
    document.getElementById("resultPara").innerText = rolledSample
    Plotly.newPlot("plot", [{x: rolledSample, type: 'histogram'}])
};

document.getElementById("ButGenerate").onclick = generateSample;

