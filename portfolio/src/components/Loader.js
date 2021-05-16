import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';

const styles = (theme) => ({
    loaderWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
    },
    loader: {
        display: 'block',
        position: 'relative',
        left: '50%',
        top: '50%',
        width: '150px',
        height: '150px',
        margin: '-75px 0 0 -75px',
        borderRadius: '50%',
        border: '3px solid transparent',
        borderTopColor: '#3498db',
        animationName: '$spin',
        animationDuration: '3s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        zIndex: 1001,
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '5px',
            left: '5px',
            right: '5px',
            bottom: '5px',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: '#e74c3c',
            animationName: '$spin',
            animationDuration: '3s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '15px',
            left: '15px',
            right: '15px',
            bottom: '15px',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: '#f9c922',
            animationName: '$spin',
            animationDuration: '1.5s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
        }
    },
    loaderSection: {
        position: 'fixed',
        top: 0,
        width: '51%',
        height: '100%',
        background: '#222222',
        zIndex: 1000,
        transform: 'translateX(0)',  /* Firefox 16+, IE 10+, Opera */
    },
    sectionLeft: {
        left: 0
    },
    sectionRight: {
        right: 0
    },
    '@keyframes spin': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    },
    '& .loaded': {

    }
})

const Loader = (props) => {
    const classes = props.classes;
    const ref = useRef(null);
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        let loaded = null;
        loaded = setTimeout(() => {
            setLoaded(false)
            ref.current.setAttribute('class', 'loaded');
        }, 500);
        return () => clearInterval(loaded);
    }, []);
    return (
        <div ref={ref} className={classes.body}>
            <div className={classes.loaderWrapper}>
                <div className={classes.loader}></div>
                <div className={clsx(classes.loaderSection, classes.sectionLeft)}></div>
                <div className={clsx(classes.loaderSection, classes.sectionRight)}></div>
            </div>
        </div>
    )
}

Loader.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Loader);