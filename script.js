const marksMass = 78
const marksHeight = 1.69

let johnsMass = 92
let johnsHeight = 1.95

function calculateBMI(mass, height){

    bmi = mass/(height**2)
    return bmi;
}


const marksBMI = calculateBMI(marksMass, marksHeight);
console.log('Marks BMI '+marksBMI)

const johnsBMI = calculateBMI(johnsMass, johnsHeight);
console.log('Johns BMI '+johnsBMI)

function markHigherBMI(bmi1, bmi2){

    return bmi1 > bmi2

}

const bmiFlag = markHigherBMI(marksBMI, johnsBMI)
console.log(bmiFlag)

const age = 19
const isOldEnough = age >= 19

if(!isOldEnough){
    console.log("Eligible for vote")
}
else {
    console.log("Not eligible to vote")
}
