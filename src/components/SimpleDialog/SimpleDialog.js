import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function SimpleDialog(props) {
    const { onClose, selectedValue, open, title, children } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <div>
                {children}
            </div>
        </Dialog>
    );
}
export default SimpleDialog;