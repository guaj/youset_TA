import * as React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import {Collapse, IconButton} from "@mui/material";
import Box from "@mui/material/Box";

export default function OrderProcessedAlert(props) {

    const [open, setOpen] = React.useState(true);

    function handleClose(){
        setOpen(false);
        window.location.href= '/';
    }


    const positiveAlert = (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert

                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Order was sucessful! Thank you
                </Alert>
            </Collapse>
        </Box>
    )

    const negativeAlert= (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    Error! Please try again later
                </Alert>
            </Collapse>
        </Box>
    )
    return (
        <>{
            props.processResult?
                positiveAlert :
                negativeAlert
        }
        </>

    );
}