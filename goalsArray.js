let goals = [2, 0, 3, 1, 4, 0, 2];

function countZeroGoals(goalsArray) {
    let count = 0;
    for (let i = 0; i < goalsArray.length; i++) {
        if (goalsArray[i] === 0) {
            count++;
        }
    }
    console.log("The player scored 0 goals " + count + " times.");
}


countZeroGoals(goals);