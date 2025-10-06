const input = require('readline-sync'); // adding readline to get user input (Values, Data Types and Operations)

/* PATIENT PROFILES

create Patient Array with objects for each patient;
create userExists variable = false


User input Patient Name (First, Last);
for...of loop to see if input name matches id in any patient object
    if yes
        change userExists to true

if (userExists)
    log patient info
    readline "(Patient Name) is already in use. Would you like to make changes to the profile?"
        if 'yes'
            readline "Please select category to edit: age, weight, activity level"
            if (age) 
                readline "New age: "
                check if input is a number
                    If not, reprompts user for input.
                replace age in patient object
                log "(Patient name)'s is now: (age)";
            else if (weight)
                readline "New weight: "
                check if input is a number
                    If not, reprompts user for input.
                replace weight in patient object
                log "(Patient name)'s weight is now: (weight)";
            else if (activity level)
                readline "New activity level (high, moderate, low): "
                check if input is a high, moderate, or low
                    If not, reprompts user for input.
                replace activity level in patient object
                log "(Patient name)'s activity level is now: (activity level)";
else
    if Patient Array doesn't contain Patient Name
        create new Object for Patient;
        readline "(Patient's Name) Age: "
        check if input is a number
             If not, reprompts user for input.
        readline "(Patient's Name) Weight: "
        check if input is a number
             If not, reprompts user for input.
        readline "(Patient's Name) Activity Level (high, moderate, low): "
        check if input is either high, moderate, or low
            If not, reprompts user for input.
        Create new patient object in patient array
        log "New profile for (Patient's Name) created: (Age), (Weight), (Activity Level)"

    
            
*/




let patients = [
    {
        id: "Fido Riggs", 
        age: 3,  
        weight: 20, 
        activityLevel: "high", 
        calculations: {
            calc1: 23, 
            calc2: 45
        }
    }
]; // create array for patients (Building Arrays)

let patientName = input.question("Name of patient: "); // gets patient name from user (Values, Data Types and Operations)
let patientExists = false; // (Values, Data Types, and Operations)
let currentPatient;

// checking if patient already exists (Working with Loops) (using objects)
for (let patient of patients) {
    // console.log(patient);

    // changing patientExists to true if name is already in patients array (Control Structures and Operations)
    if (patient.id === patientName) {
        patientExists = true; // (value, data types, and operations)
        currentPatient = patient; // patient object assigned to current patient (value, data types, and operations)
        console.log(`${patient.id} Exists: ${patientExists}`); // logs patients.id to console (Stringing Character Together) (Using Objects)
    }
}

// Either makeing edit to current patient or creating new patient (Control Structures and Operations)
if (patientExists) {
    console.log(currentPatient); // logs patient info
    let makeChanges = input.question(`${currentPatient.id} already exists. Would you like to make changes? `); // (Values, Data Types and Operations)
   
    if (makeChanges.toLowerCase() === "yes" || makeChanges.toLowerCase() === "y") { // Converts user input to lowercase then checks if answer is yes or y (Control Structures and Operations)
        console.log(makeChanges); // Checking input is "yes" or "y"
        let dataChange = input.question("Please select category to edit: age, weight, activity level. "); // assigning what value needs changed to dataChange (Values, Data Types and Operations)
        // Checking dataChange to updated patient profile (Control Structures and Operations)
        if (dataChange.toLowerCase() === "age") {
            currentPatient.age = Number(input.question(`${currentPatient.id}'s Age: `)); // get new age and convert it to a number. (Values, Data Types and Operations)
             // checks if age is a number If not, reprompts user for input. (Control structure and logic - working with loops)
            console.log(`${currentPatient.id}'s age updated to: ${currentPatient.age}`); // logs updated weight (Stringing Character Together)
        } else if (dataChange.toLowerCase() === "weight") {
            currentPatient.weight = parseFloat(input.question(`${currentPatient.id}'s Weight (kg): `)); // assigns new weight and convert it to a floating integer. (Values, Data Types and Operations)
            while (!Number(currentPatient.weight)) {
                currentPatient.weight = Number(input.question("Weight must be a number. Please try again.\nWeight: "));
            }; // checks if weight is a number If not, reprompts user for input. (Control structure and logic - working with loops)
            console.log(`${currentPatient.id}'s weight updated to: ${currentPatient.weight} kg`); // logs updated weight (Stringing Character Together)
        } else if (dataChange.toLowerCase() === "activity level") {
            currentPatient.activityLevel = input.question(`${currentPatient.id}'s Activity Level (high, moderate, low): `).toLowerCase(); // assigns new activity level via user (Values, Data Types and Operations)
            while (currentPatient.activityLevel.toLowerCase() !== "high" && currentPatient.activityLevel.toLowerCase() !== "moderate" && currentPatient.activityLevel.toLowerCase() !== "low") {
                currentPatient.activityLevel = input.question("Input Incorrect. Please use high, moderate, or low: ").toLowerCase();
            } // checks if activity level is high, moderate, or low. If not, reprompts user for input. (Control structure and logic - working with loops)
            console.log(`${currentPatient.id}'s activity level updated to: ${currentPatient.activityLevel}`); // logs updated activity level (Stringing Character Together)
        } else {
            console.log("No changes were made");
        }
    } else {
        console.log(makeChanges); // Checking input is not "yes" or "y"
        console.log("No changes were made,");
    }
} else {
    console.log(`Patient does not exist. Let's create a profile for ${currentPatient}`); // (Values, Data Types and Operations)
    let newAge = Number(input.question("Age: ")); //  (Values, Data Types and Operations)
    while (!Number(newAge)) {
        newAge = Number(input.question("Age must be a number. Please try again.\nAge: ")); // Stringing characters together & Values, Data Types and Operations
    }; // checks if age is a number If not, reprompts user for input. (Control structure and logic - working with loops)

    let newWeight = parseFloat(input.question("Weight: ")); // (Values, Data Types and Operations)
    while (!Number(newWeight)) {
        newWeight = parseFloat(input.question("Weight must be a number. Please try again.\nWeight: ")); // Stringing characters together & Values, Data Types and Operations
    }; // checks if weight is a number If not, reprompts user for input. (Control structure and logic - working with loops)

    let newActivityLevel = input.question("Activity Level (high, moderate, low): ");  // (Values, Data Types and Operations)
    while (newActivityLevel.toLowerCase() !== "high" && newActivityLevel.toLowerCase() !== "moderate" && newActivityLevel.toLowerCase() !== "low") {
        newActivityLevel = input.question("Input Incorrect. Please use high, moderate, or low: "); // Stringing characters together & Values, Data Types and Operations
    } // checks if activity level is high, moderate, or low. If not, reprompts user for input. (Control structure and logic - working with loops)

    patients.push({id: patientName, age: newAge, weight: newWeight, activityLevel: newActivityLevel, calculations: {}}); // Create new patient object in patients array (Using Arrays) (Creating and Using Objects)
    console.log(patients[patients.length - 1]); // Log new patient info
}

patientExists = false; // returns patientExists back to false for new entry

console.log(patients); // logs patients array



/* DOG FOOD PROFILE

diets = array with diet objects inside
foodBrand = (Prompt user for dog food brand).toLowerCase()
dietName = (Prompt user for diet name).toLowerCase()
foodExists = false

if brand/diet exists
    print brand info
else
    readline "(Name of food) not found. Do you want to add dog food data? "
    if "yes" 
        dietCal = readline "How many kcal/mil for the diet? "
        while loop (check if dietCal is not a number)
            dietCal = readline "kcal/mil must be a number. Please re-enter data: "
        log new brand (brand: foodBrand, diet: dietName, kcal: dietCal)
        print new brand/diet
    else
        log "Have a nice day."
*/

let diets = [
    { brand: "hills", diet: "puppy chicken flavor", kcals: 405 },
    { brand: "purina", diet: "adult small breed", kcals: 320 }
]; // array to store diet (building arrays and building objects);

let foodExists = false; // values, data types, and operations

let foodBrand = input.question("Food Brand: "); // get brand name from user (values, data types, and operations)
let dietName = input.question("Diet Name: "); // get diet name from user (values, data types, and operations)

for (let food of diets) {
    // if brand and diet are in diets arrays log the data, otherwise check if user want to add new food profile
    if (food.brand === foodBrand.toLowerCase() && food.diet === dietName.toLowerCase()) {
        foodExists = true;
        console.log(food);
    } 
}
    
if (!foodExists) {
    let addFood = input.question("Food not found. Would you like to add it to the database? (yes or no) ").toLowerCase();
    while (addFood !== "yes" && addFood !== "no" ){
        addFood = input.question("Please enter yes or no. Do you want to add food to database? ").toLowerCase(); // values, data types, and operations
    } // checks if answer is yes or no (control structure and logic - while loops)

    if (addFood === "yes") {
        let newCals = Number(input.question("What are the kcal/cup? ")); // values, data types, and operations
        while (!Number(newCals)) {
            newCals = input.question("kcal/cup must be a number. What are the kcal/cup? "); // values, data types, and operations
        } // if answer is not a number asks user for new input (control structure and logic - while loops)
        
        diets.push({brand: foodBrand.toLowerCase(), diet: dietName.toLowerCase(), kcals: newCals}); // create new food object to the end of diets array (using arrays and creating objects)
        
        console.log(`You have successfully added ${foodBrand} ${dietName}`); // (stringing characters together)
        console.log(diets[diets.length - 1]); // logs added diet (using arrays) 
    } else {
        console.log("Food not added."); // stringing characters togethers
    }

    
    
}

console.log(diets); // lists all diets



/* CALCULATORS

*/