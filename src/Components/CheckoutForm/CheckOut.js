import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {InformationForm} from './InformationForm';
import {Copyright, packages} from "../PackageSelection/PackageSelection";
import OrderReview from "./OrderReview";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Step, StepLabel, Stepper} from "@mui/material";
import {SendUserData} from "./CheckoutService";


const theme = createTheme();

const steps = ['Your informations', 'Review your order'];



export function CheckOut(props) {


    const [userData, setUserData] = React.useState({age: 0, email: '', gender: ''});
    const [activeStep, setActiveStep] = React.useState(0);
    const packageNumber = window.location.href.split("/")[4];
    const selectedPackage = packages[packageNumber-1];
    const [validInput, setValidInput] = React.useState({age: false, email: false, gender: false})
    const [openFormInputError, setOpenFormInputError]= React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');


    const handleNext = async () => {
        if (activeStep === 0) {
            const validInput = await handleFormSubmit();
            if (validInput)
                setActiveStep(activeStep + 1);
        }
        else {
            setActiveStep(activeStep + 1);
            await SendUserData( //Send data to service
                userData.age,
                userData.email,
                userData.gender,
                packageNumber).then( () => {
                // TODO
            })
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    // Helper function for handleSubmit, verifies if all fields are valid.
    function formIsValid() {
        if(!validInput.age){
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


    // Handler for the next button
    async function handleFormSubmit() {
        if(formIsComplete()){  // checks if error processing data service
            if(openFormInputError)
                setOpenFormInputError(false) // Close Error Message
            return true;
        }
        else{
            if(openFormInputError)
                setOpenFormInputError(false)
            setOpenFormInputError(true);  //Enable feedback from input errors
            setTimeout(() => {  setOpenFormInputError(false)}, 3000); //Keep the error message open for 3 sec.
            return false;
        }


    }

    const handleChange = (fieldName, value) => {
        if(fieldName === 'age')
            handleAgeChange(value);
        else if(fieldName === 'gender')
            setUserData({...userData, gender: value});
        else if(fieldName === 'email')
            handleEmailChange(value);
    }

    // Helper function for handleEmailChange
    function ValidateEmail(e) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regex.test(e)){
            setValidInput({...validInput, email: true})
        }else {
            setValidInput({...validInput, email: false})
            setErrorMessage("Please enter a valid email address!");
        }

    }

    // Handler for the email input change
    function handleEmailChange(email) {
        setUserData({...userData, email: email})
        ValidateEmail(email);
    }

    //Helper function for handleAgeChange
    function ValidateAge(age) {
        if(age > 0){
            setValidInput({...validInput, age: true})
            if(userData.age % 1 !== 0){
                setErrorMessage("Age must not contain any digits.")
                setValidInput({...validInput, age: false})
            }
        }
        else{
            setValidInput({...validInput, age: false})
            setErrorMessage("Age must be greater than 0!");
        }


    }

    // Handler for the age input change
    function handleAgeChange(age) {
        ValidateAge(age);
        setUserData({...userData, age: age})
        //localStorage.setItem("age", JSON.stringify(age)); //cache the input

    }
    function redirectHome() {
        window.location.href = "/";
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <InformationForm
                        userData={userData}
                        onChange={handleChange}
                        errorMessage={errorMessage}
                        openErrorMessage={openFormInputError}
                    />);
            case 1:
                return <OrderReview selectedPackage={selectedPackage}/>;
            default:
                throw new Error('Unknown step');
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order
                                    confirmation for YouSet - {selectedPackage.title}.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    onClick={redirectHome}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    Close
                                </Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}