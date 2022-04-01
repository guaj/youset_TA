import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {SendUserData} from "./CheckoutService";
import OrderProcessedAlert from "./OrderProcessedAlert";
import InformationFormAlert from "./InformationFormAlert";


export default function InformationForm(props) {
    const [userData, setUserData] = React.useState({age: 0, email: '', gender: ''});
    const [orderProcessed, setOrderProcessed] = React.useState(false);
    const [validInput, setValidInput] = React.useState({age: false, email: false, gender: false})
    const [openFormInputError, setOpenFormInputError]= React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [openProcessFeedback, setOpenProcessFeedback] = React.useState(false)
    const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

    // Helper function for handleSubmit, verifies if all fields are valid.
    function formIsValid() {
        if(!validInput.age){
            setErrorMessage("Age must be greater than 0!")
            return false
        }
        else if(!validInput.email){
            setErrorMessage("Please enter a valid Email!")
            return false
        }
        return true
    }


    // Helper function for handleSubmit, verifies if all fields are defined.
    function formIsComplete() {
        if (userData.age === 0) {
            setErrorMessage("Please fill all the fields!");
            return false;
        }
        else if (userData.email === ''){
            setErrorMessage("Please fill all the fields!");
            return false;
        }
        else if (userData.gender === ''){
            setErrorMessage("Please fill all the fields!");
            return false;
        }
        return formIsValid();
    }


    // Handler for the submit button
    async function handleSubmit() {
        if(formIsComplete()){  //Verify data before sending
            setOrderProcessed( // checks if error processing data service
                await SendUserData( //Send data to service
                    userData.age,
                    userData.email,
                    userData.gender,
                    props.package.packageNumber).then(r => {
                    //TODO :
                }))
            if(openFormInputError)
                setOpenFormInputError(false) // Close Error Message
            setOpenProcessFeedback(true); //Enable feedback from data service
        }
        else{
            if(openFormInputError)
                setOpenFormInputError(false)
            setOpenFormInputError(true);  //Enable feedback from input errors
            setTimeout(() => {  setOpenFormInputError(false)}, 3000); //Keep the error message open for 3 sec.
        }


    }


    // Helper function for handleEmailChange
    function ValidateEmail(e) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regex.test(e)){
            setValidInput({...validInput, email: true})
        }
        setErrorMessage("Please enter a valid email address!");
    }

    // Handler for the email input change
    function handleEmailChange(e) {
        setUserData({...userData, email: e.target.value})
        ValidateEmail(e.target.value);
    }


    //Helper function for handleAgeChange
    function ValidateAge(age) {
        if(age > 0){
            setValidInput({...validInput, age: true})
        }
        setErrorMessage("Age must be greater than 0!");
    }

    // Handler for the age input change
    function handleAgeChange(e) {
        ValidateAge(e.target.value)
        setUserData({...userData, age: e.target.value})

    }

    return (
        <React.Fragment>
            {openProcessFeedback ?
                <OrderProcessedAlert processResult={orderProcessed}/>
                : <></>
            }
            {openFormInputError ?
                <InformationFormAlert error={errorMessage}/>
                : <></>
            }
            <Typography variant="h6" gutterBottom sx={{ py: 3}}>
                Please fill your information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            variant="standard"
                            labelId="gender-select"
                            id="gender"
                            value={userData.gender}
                            label="gender"
                            onChange={e=> {setUserData({...userData, gender: e.target.value})}}
                        >
                            {genderOptions.map(item => {
                                    return <MenuItem value={item}>{item}</MenuItem>
                                }
                            )}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="age-number"
                        data-testid="input-age"
                        label="Age"
                        aria-label="age"
                        type="number"
                        inputProps={{ "data-testid": "content-input" }}
                        onChange={handleAgeChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="email"
                        autoComplete="email"
                        helperText="email"
                        onChange={handleEmailChange}
                        fullWidth
                        type="email"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ mt: 3, ml: 1 }}
                        >Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>

    );
}