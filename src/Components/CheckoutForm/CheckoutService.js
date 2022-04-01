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
        try {
            axios.post("http://wwww.example.com", {
                firstName, lastName, email, gender, packageNumber
            }).then(result => {
                // TODO
            })
        }catch (e) {
            alert(e)
        }
        return true
    }
    return false
}
