import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './mainpage.css';

function Mainpage() {
    return (
        <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center">
            <Button variant="outlined" color="primary" size="large" className="mainbutton">Create Idea Pool</Button>
            <Button variant="outlined" color="primary" size="large" className="mainbutton">Share Idea</Button>
            <Button variant="outlined" color="primary" size="large" className="mainbutton">Vote Idea</Button>
        </Grid>
    );
}

export default Mainpage;
