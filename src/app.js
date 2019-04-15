import React from 'react';
import Button from '@material-ui/core/Button';
import TopNav from './components/TopNav/TopNav';

const App = () => (
    <>
        <TopNav />
        <Button variant="contained" color="primary">
            App Button
        </Button>
    </>
);

export default App;