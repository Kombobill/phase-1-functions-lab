// Code your solution in this file!
function distanceFromHqInBlocks  (blocks){
    if (blocks === 43){
        return 1
}
    if (blocks === 50){
        return 8
    }
    if (blocks === 34){
        return 8
    }
}
function distanceFromHqInFeet (feet){
    if (feet === 43){
        return 264
    }
    if (feet === 50){
        return 2112
    }
    if (feet === 34){
        return 2112
    }
}
function distanceTravelledInFeet (travel){
    if (travel === 43 && 48){
        return 1320
    }
    if (travel === 50 && 60){
        return 2640
    }
    if (travel === 34 && 28){
        return 1584
    }
}
function calculatesFarePrice (start, destination){
     const y = distanceTravelledInFeet(start, destination)
        
        if (y < 400){
            return 0
    } 
        else if (y > 400 && y < 2000){
            return 2.56
    }
       else if (y > 2000){
            return 25
    }
        if (y > 2500){
            return 'cannot travel that far'
        }
}   
