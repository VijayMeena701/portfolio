import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Loader from '../components/Loader';

const styles = (theme) => ({
    text: {
        fontFamily: 'Niconne',
    }
});

const Home = (props) => {
    const classes = props.classes;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let isLoading = null;
        isLoading = setTimeout(() => setLoading(false), 2000);
        return () => clearInterval(isLoading);
    }, []);
    return (
        <Container maxWidth="lg">
            {
                true ? <>
                    <Loader />
                </> : <>
                    <Typography variant="h3" className={classes.text}>
                        Vijay Meena
                    </Typography>
                </>
            }
        </Container>
    )
}
export default withStyles(styles)(Home);