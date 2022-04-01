import axios from 'axios';

function validateData(age, email, gender, packageNumber) {
    if(typeof age === 'undefined')
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
    age,
    email,
    gender,
    packageNumber) {

    const validUserData = validateData(age, email, gender, packageNumber);
    if(validUserData) {
            axios.post("http://wwww.example.com", {
                age, email, gender, packageNumber
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
