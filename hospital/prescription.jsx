let prescriptions = ['ARTEMETER + LUMEFANTRINE TABLET 1TAB BID* 3 DISPENSIBLE(6S)','ARTEMETER + LUMEFANTRINE TABLET 2TAB BID* 3 TABLET(12S)','ARTEMETER + LUMEFANTRINE TABLET 3TAB BID 3 TABLET (18S)','ARTEMETER + LUMEFANTRINE TABLET 4TAB BID 3 TABLET (24S)',]
let drugcodes = ['ARTLUMDT1','ARTLUMTA3','ARTLUMTA4','ARTLUMTA5',]
let age = document.querySelector('#patientAge');
let content = document.querySelector('#para');
let content2= document.querySelector('#para2')

function checkAge(){
    if (age >= 0 && age <= 4) {
        content.textContent= ' prescription: ' + prescriptions[0];
        content2.textContent=' code: ' + drugcodes[0];
    } else if (age >= 5 && age <= 8) {
        content.textContent= ' prescription: ' + prescriptions[1];
        content2.textContent=' code: ' + drugcodes[1];
    } else if (age >= 8 && age <= 11) {
        content.textContent= ' prescription: ' + prescriptions[2];
        content2.textContent=' code: ' + drugcodes[2];
    } else if (age >= 12 && age<100) {
        content.textContent= ' prescription: ' + prescriptions[3];
        content2.textContent=' code: ' + drugcodes[3];
    } else {
        content.textContent= 'prescription: ' + 'invalid';
        content2.textContent=' code: ' + 'invalid';
    }
}



 






/*let prescriptions = ['ARTEMETER + LUMEFANTRINE TABLET 1TAB BID* 3 DISPENSIBLE(6S)','ARTEMETER + LUMEFANTRINE TABLET 2TAB BID* 3 TABLET(12S)','ARTEMETER + LUMEFANTRINE TABLET 3TAB BID 3 TABLET (18S)','ARTEMETER + LUMEFANTRINE TABLET 4TAB BID 3 TABLET (24S)',]
let drugcodes = ['ARTLUMDT1','ARTLUMTA3','ARTLUMTA4','ARTLUMTA5',]

let patientAge = document.getElementById('patientAge');
let prescription = document.getElementById('prescription');

function submit(patientAge){
      if (patientAge >= 0 && patientAge <= 4){
        prescription.innerHTML=' the precription is ' + prescriptions[0] + ' the code is ' + drugcodes[0]
      }
}*/




//const readline = require('readline');

// Sample drug prescriptions for different age ranges
/*const prescriptions = {
    '0-4years': 'ARTEMETER + LUMEFANTRINE TABLET 1TAB BID* 3 DISPENSIBLE(6S)',
    '5-8years': 'ARTEMETER + LUMEFANTRINE TABLET 2TAB BID* 3 TABLET(12S)',
    '8-11years': 'ARTEMETER + LUMEFANTRINE TABLET 3TAB BID 3 TABLET (18S)',
    '12years and above': 'ARTEMETER + LUMEFANTRINE TABLET 4TAB BID 3 TABLET (24S)',
};*/

/*const drugCodes = {
    '0-4years': 'ARTLUMDT1',
    '5-8years': 'ARTLUMTA3',
    '8-11years': 'ARTLUMTA4',
    '12years and above': 'ARTLUMTA5',
};*/

// Function to get drug prescription and code based on the patient's age

/*function getDrugPrescription(age) {
    if (age >= 0 && age <= 4) {
        return { prescription: prescriptions['0-4years'], code: drugCodes['0-4years'] };
    } else if (age >= 5 && age <= 8) {
        return { prescription: prescriptions['5-8years'], code: drugCodes['5-8years'] };
    } else if (age >= 8 && age <= 11) {
        return { prescription: prescriptions['8-11years'], code: drugCodes['8-11years'] };
    } else if (age >= 12) {
        return { prescription: prescriptions['12years and above'], code: drugCodes['12years and above'] };
    } else {
        return { prescription: 'Invalid age range', code: 'Invalid' };
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the patient\'s age: ', (age) => {
    const { prescription, code } = getDrugPrescription(parseInt(age));
    console.log(`Patient age: ${age} years.`);
    console.log(`Prescription: ${prescription}`);
    console.log(`Drug Code: ${code}`);
    rl.close();
});*/
