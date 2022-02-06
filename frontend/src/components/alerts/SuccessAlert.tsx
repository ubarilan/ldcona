import { Alert, Grow } from '@mui/material';

function successAlert(text) {
    return <Alert severity="success">{text} </Alert>;
}

export default function SuccessAlert({ text, show }) {
    return <Grow in={show}>{successAlert(text)}</Grow>;
}
