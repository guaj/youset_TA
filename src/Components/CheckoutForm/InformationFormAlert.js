import * as React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import {Collapse, IconButton} from "@mui/material";
import Box from "@mui/material/Box";

export default function InformationFormAlert(props) {

    const [open, setOpen] = React.useState(true);

    function handleClose(){
        setOpen(false);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    aria-label="form-error-alert"
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
                    {props.error}
                </Alert>
            </Collapse>
        </Box>
    )
}