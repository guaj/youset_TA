import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {SendUserData} from "./CheckoutService";
import OrderProcessedAlert from "./OrderProcessedAlert";



export default function InformationForm(props) {
    const [userData, setUserData] = React.useState({firstName: '', lastName: '', email: '', gender: ''});
    const [orderProcessed, setOrderProcessed] = React.useState(false);
    const [openProcessFeedback, setOpenProcessFeedback] = React.useState(false)
    const options = ['Male', 'Female', 'Other', 'Prefer not to say'];


    async function handleSubmit() {
        setOrderProcessed(
            await SendUserData(
                userData.firstName,
                userData.lastName,
                userData.email,
                userData.gender,
                props.package.packageNumber).then(r => {
                //TODO
            }))
        setOpenProcessFeedback(true);
    }

    return (
        <React.Fragment>
            {openProcessFeedback ?
                <OrderProcessedAlert processResult={orderProcessed}/>
                : <></>
            }

            <Typography variant="h6" gutterBottom sx={{ py: 3}}>
                Your information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        onChange={e=> {setUserData({...userData, firstName: e.target.value})}}
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        onChange={e=> {setUserData({...userData, lastName: e.target.value})}}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="email"
                        onChange={e=> {setUserData({...userData, email: e.target.value})}}
                        fullWidth
                        type="email"
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={userData.gender}
                            label="Age"
                            onChange={e=> {setUserData({...userData, gender: e.target.value})}}
                        >
                            {options.map(item => {
                            return <MenuItem value={item}>{item}</MenuItem>
                        }
                            )}
                        </Select>
                    </FormControl>
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