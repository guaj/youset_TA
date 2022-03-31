import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import {PackageCards} from "./PackageCards";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://youset.ca/en/">
                YouSet
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const packages = [
    {
        packageNumber: 1,
        title: 'Proteco Insurance',
        price: '12.50',
        description: [
            'Most affordable package',
            'Belongings covered up to $15,000',
            'Perfect if you own a few belongings!',
        ],
        buttonText: 'Choose',
        buttonVariant: 'outlined',
    },
    {
        packageNumber: 2,
        title: 'Umbrella Insurance',
        subheader: 'Most popular',
        price: '35.73',
        description: [
            'Most popular package',
            'Belongings covered up to $30,000',
            'Includes a free water sensor to detect a water leak in your home',
        ],
        buttonText: 'Choose',
        buttonVariant: 'contained',
    },
    {
        packageNumber: 3,
        title: 'Thor Insurance',
        price: '79.30',
        description: [
            'Nothing but the best',
            'Belongings covered up to $100,000',
            'Even includes protection against an alien invasion',
        ],
        buttonText: 'Choose',
        buttonVariant: 'outlined',
    },
];




function PackageSelection(props) {

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            {/* Page Title and Subtitle */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="primary"
                    gutterBottom
                >
                    Our Pricing
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Choose one of the following options. Don't hesitate to contact us for more details.
                </Typography>
            </Container>
            {/* End title  */}

            {/* Package Selection */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {props.packages.map((item) => (
                        <Grid
                            item
                            key={item.title}
                            xs={12}
                            sm={item.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            {/* Cards containing packages */}
                            <PackageCards item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* End package selection */}


            {/* Footer */}
            <Container
                maxWidth="md"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
                <Copyright sx={{ mt: 5 }} />
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}

export default function HomePage() {
    return <PackageSelection packages={packages}/>;
}