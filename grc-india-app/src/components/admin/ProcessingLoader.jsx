import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const ProcessingLoader = (props) => {

    return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.processing}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
};

export default ProcessingLoader;
