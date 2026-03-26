function findLowest() {
    let points = [15, 42, 8, 67, 23, 55, 31];
    let lowest = points[0];
    
    for (let i = 1; i < points.length; i++) {
        if (points[i] < lowest) {
            lowest = points[i];
        }
    }
    
    console.log("The lowest number is:", lowest);
}

findLowest();