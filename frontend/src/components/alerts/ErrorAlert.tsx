import { Alert, Grow } from '@mui/material';

function errorAlert(text) {
    return <Alert severity="error">{text} </Alert>;
}

export default function ErrorAlert({ text, show }) {
    return <Grow in={show}>{errorAlert(text)}</Grow>;
}
