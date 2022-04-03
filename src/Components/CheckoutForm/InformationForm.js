import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import InformationFormAlert from "./InformationFormAlert";



export const InformationForm= ({userData , onChange, errorMessage, openErrorMessage}) => {

    const handleEmailChange = event =>{
        const email = event.target.value;
        onChange("email", email);
        localStorage.setItem("email", JSON.stringify(email));
    }

    const handleAgeChange = event => {
        const age = event.target.value;
        onChange("age", age);
        localStorage.setItem("age", JSON.stringify(age))
    }

    const handleGenderChange = event => {
        const gender = event.target.value;
        onChange("gender", gender);
        localStorage.setItem("gender", JSON.stringify(gender))
    }

    const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];


    return (
        <React.Fragment>
            {openErrorMessage ?
                <InformationFormAlert error={errorMessage}/>
                : <></>
            }
            <Typography variant="h6" gutterBottom sx={{ py: 3}}>
                Please fill your information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{}}>Gender *</InputLabel>
                        <Select
                            variant="standard"
                            labelId="gender-select"
                            id="gender"
                            value={userData.gender}
                            label="gender"
                            onChange={handleGenderChange}
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
                        fullWidth
                        required
                        id="age-number"
                        data-testid="input-age"
                        label="Age"
                        aria-label="age"
                        type="number"
                        inputProps={{ "data-testid": "content-input" }}
                        value={userData.age}
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
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id="email"
                        name="email"
                        label="Email"
                        autoComplete="email"
                        onChange={handleEmailChange}
                        fullWidth
                        value={userData.email}
                        type="email"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>

    );
}