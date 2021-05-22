import React, { FunctionComponent } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface PersonCardProps {
    person: IRandomPerson;
};

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
});

const PersonCard: FunctionComponent<PersonCardProps> = ({ person }) => {

    const classes = useStyles();

    const { gender, name, location, email, picture } = person.results[0];
    const { street, city, state, postcode } = location;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={picture.medium}
                    title={name.first}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${name.first} ${name.last}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {name.first} is a {gender} that lives at {street.name} {street.number}
                        , {postcode} {city}, {state}.<br />E-mail: {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PersonCard;
