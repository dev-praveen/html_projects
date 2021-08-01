'use strict'

const marksMass = 78
const marksHeight = 1.69

let johnsMass = 92
let johnsHeight = 1.95

function calculateBMI(mass, height){

    const bmi = mass/(height**2)
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

const num = Number('999')
console.log(num+1)

console.log('100'+1)
console.log('100'-1)

if('praveen') console.log('praveen')
if(NaN) console.log('Not a number')

console.log(typeof Number('1000'))
console.log(typeof String(1000))

console.log('1' ==  1);
console.log('1' ===  1);

console.log('===============================')

const hasDriversLicense = true
const hasGoodVision = false

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || !hasGoodVision)

// coding challenge3

const dolphinsAvgScore = (97+112+101)/3
const koalasAvgScore = (109+95+107)/3
const minimumScore = 100

console.log('Average score of Dolphins team '+dolphinsAvgScore, 'Average score of Koalas team '+koalasAvgScore)

if((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore >= minimumScore)) console.log('Dolphins team won ')
else if((dolphinsAvgScore < koalasAvgScore) && (koalasAvgScore >= minimumScore)) console.log('Koalas team won')
else if(dolphinsAvgScore === koalasAvgScore) console.log('Match drwan between Dolphins team and Koalas team')
else console.log('No team has won! ')


const day = 'Thursday'

switch(day) {

    case 'Monday':
        console.log('Dizzy day')
        break
    case 'Tueseday':
        console.log('On track day')
        break
    case 'Thursday':
    default:
        console.log('Holiday')
}


const isMember = false
let checkMemberShip = isMember ? 'Free of cost' : 'Need to some amount'
console.log(checkMemberShip)

const adultAge = 18
const beverage = adultAge >=20 ? 'Beer' : 'Juice' 
console.log(beverage)

const billValue = 430
const tipTobePaid = (billValue >= 15 && billValue <= 300) ? 15 : 20
const tipValue = billValue*(tipTobePaid/100)
console.log(billValue+tipValue)


function calcRectArea(width, height){

    return width*height;
}

const recArea = calcRectArea(10, 12)
console.log('Rectangle area '+recArea)

const getRectArea = function(width, height){

    return width*height;
}

console.log('Get rectangle area '+getRectArea(4, 12))

const getAge = (birthYear) => {
    
    return 2030 - birthYear
}


console.log('Get age '+getAge(1998))


