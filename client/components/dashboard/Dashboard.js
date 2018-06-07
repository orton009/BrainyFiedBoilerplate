import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {cyan, pink, purple, orange} from 'material-ui/colors';
import {AddShoppingCart, ThumbUp, Assessment, Face} from 'material-ui-icons';

import SummaryBox from './SummaryBox';
import Product from './Product';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: theme.spacing.unit * 3,
    }),
});

const Dashboard = props => {
    const classes = props.classes;
    return (
        <div>
            <h2 style={{paddingBottom: '15px'}}>Dashboard</h2>            
        </div>
    )
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)