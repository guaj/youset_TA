import Typography from "@mui/material/Typography";
import * as React from "react";
import {Copyright} from "../PackageSelection/PackageSelection";


export default function OrderReview() {
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation.
            </Typography>
            <Copyright />
        </React.Fragment>
    )
}
