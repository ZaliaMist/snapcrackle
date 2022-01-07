
function snapCrackle(maxValue) {
    let string = " "
    for(let i = 1; i <= maxValue; i++) {
        
        if ( i % 2 === 1 && i % 5 === 0 ) {
            string = string + "SnapCrackle, "
        }else if (i % 5 === 0) {
            string = string + "Crackle, "
        } else if (i % 2 === 1) {
            string = string + "Snap, "
        } else if (i % 2 === 0) {
            string = string + i + ", "
        }
        
    } 
    console.log(string) 
}

snapCrackle( 12 )
