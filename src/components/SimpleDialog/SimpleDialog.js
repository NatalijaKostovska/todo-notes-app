import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

function SimpleDialog(props) {
    const { onClose, selectedValue, open, title, children } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{ style: { borderRadius: 14 } }}>
            <DialogTitle sx={{ background: '#1abc9c', color: 'white' }}>
                <span style={{ paddingTop: '1px' }}><CalendarTodayOutlinedIcon fontSize='small' /></span>
                <span> {title}</span>
            </DialogTitle>
            <div>
                {children}
            </div>
        </Dialog>
    );
}
export default SimpleDialog;