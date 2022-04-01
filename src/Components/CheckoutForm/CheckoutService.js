import axios from 'axios';

function validateData(firstName, lastName, email, gender, packageNumber) {
    if(typeof firstName === 'undefined')
        return false
    else if(typeof lastName === 'undefined')
        return false
    else if(typeof email === 'undefined')
        return false
    else if(typeof gender === 'undefined')
        return false
    else if(typeof packageNumber === 'undefined')
        return false
    return true
}

export async function SendUserData(
    firstName,
    lastName,
    email,
    gender,
    packageNumber) {

    const validUserData = validateData(firstName, lastName, email, gender, packageNumber);
    if(validUserData) {
            axios.post("http://wwww.example.com", {
                firstName, lastName, email, gender, packageNumber
            }).then(result => {
                console.log(result)

            }).catch(error => {
                console.log(error)
                return false;
            })
        return true;
    }
    return false;
}
