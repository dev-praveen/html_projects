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

const bills = [125, 555, 44]

const finalTip = function(bill){

    return (bill >= 15 && bill <= 300) ? bill*0.15 : bill*0.2
}

const tips = [finalTip(bills[0]), finalTip(bills[1]), finalTip(bills[2])]
const totalBillWithTips = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
console.log('totalBillWithTips '+totalBillWithTips);


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

const greet = (name) => {
    console.log(name)
    return 'Hi '+name+' Good Morning!'
}
console.log(greet('praveen'));

const yearsUntilRetirement = (birthYear, firstName) => {

    const calCurrentAge = 2030-birthYear
    const retireAge = 65 - calCurrentAge

    return `${firstName} retires in ${retireAge} years`
}

console.log(yearsUntilRetirement(1991, 'praveen'));
console.log(yearsUntilRetirement(1985, 'kelly'));

const calcAverage = (a, b, c) => (a+b+c)/3

function checkWinner(avgDolphins, avgKoalas){

    console.log(avgDolphins, avgKoalas)
    if(avgDolphins >= avgKoalas*2) console.log(`avgDolphins won (${avgDolphins} vs ${avgKoalas})`)
    else if(avgKoalas >= avgDolphins*2) console.log(`avgKoalas won (${avgKoalas} vs ${avgDolphins})`)
    else console.log('No team has won');
}

const avgDolphins = calcAverage(44, 23, 71)
const avgKoalas = calcAverage(65, 54, 49)

// const avgDolphins = calcAverage(85, 54, 41)
// const avgKoalas = calcAverage(23, 34, 27)

checkWinner(avgDolphins, avgKoalas)

const friends = new Array('rams', 'sudeepth', 'laddu', 'kiran')
console.log(friends);
console.log(friends.length);

const years = [1990, 1991, 1992, 1993]
years[4] = 1994
console.log(years);
years[2] = 1981
console.log(years);
console.log(years[3])

const myProps = ['praveen', 'sana', 2030-1991, friends]
console.log(myProps);

const newLength = friends.push('paramesh')
console.log(newLength, friends);


const reverseString = ipText => {

    let newStirng = ''
    for(let i=ipText.length-1; i >=0; i--){

        newStirng+=ipText[i]
    }
    return newStirng
}

console.log(reverseString('praveen'));

const myObject = {

    firstName:'Praveen',
    lastName: 'Sana',
    age: 2021-1991,
    profession: 'Software Developer',
    company: 'Societe Generale',
    collegues: ['soji', 'don', 'ajith', 'vittal']
}

console.log(myObject);

console.log('Age: '+myObject.age)
console.log('My buddy in team '+myObject.collegues[3])

myObject.twiiterHandle = '@praveensana'

console.log(myObject);

const inputQuestion = prompt('What do you want from me as an object')

if(myObject[inputQuestion]){
    console.log(myObject[inputQuestion])
}
else{
    console.log('No property found with the entered value, please enter correct property');
}




