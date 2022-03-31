import CardHeader from "@mui/material/CardHeader";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    title: {
        color: "#2196f3",
    }
}));

export function PackageCards(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                className={classes.title}
                title={props.item.title}
                subheader={props.item.subheader}
                titleTypographyProps={{ align: 'center' }}
                action={props.item.subheader === 'Most popular' ? <StarBorderIcon /> : null}
                subheaderTypographyProps={{
                    align: 'center',
                }}
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[700],
                }}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                    }}
                >
                    <Typography component="h2" variant="h3" color="primary">
                        ${props.item.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        /mo
                    </Typography>
                </Box>
                <ul>
                    {props.item.description.map((line) => (
                        <Typography
                            component="li"
                            variant="subtitle1"
                            align="center"
                            whitespace="normal"
                            key={line}
                        >
                            {line}
                        </Typography>
                    ))}
                </ul>
            </CardContent>
            <CardActions>
                <Button fullWidth variant={props.item.buttonVariant}>
                    {props.item.buttonText}
                </Button>
            </CardActions>
        </Card>
    )
}