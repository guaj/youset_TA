import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function OrderReview(props) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                <ListItem key={props.selectedPackage.title} sx={{ py: 1, px: 0 }}>
                    <ListItemText
                        primary={props.selectedPackage.title}
                        secondary={
                            props.selectedPackage.description.map((line) => (
                                <Typography
                                    component="li"
                                    variant="subtitle1"
                                    whitespace="normal"
                                    key={line}
                                    sx={{ width: 1/2 }}
                                >
                                    {line}
                                </Typography>
                            ))
                        }
                    />
                    <Typography variant="body2">{props.selectedPackage.price}</Typography>
                </ListItem>

                <ListItem sx={{ py: 1, px: 0}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ${props.selectedPackage.price}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}