import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ModalButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <button onClick={handleOpen}>Modal</button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2>Create Post</h2>
          <TextField defaultValue="Title">title</TextField>
          <br />
          <TextField defaultValue="Short Description">
            short description
          </TextField>
          <br />
          <TextField defaultValue="Description">description</TextField>
          <br />
          <TextField defaultValue="Category">category</TextField>
          <br />
          <TextField defaultValue="Image URL">image URL</TextField>
          <br />
          <Button>cancel</Button>
          <Button>save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButton;
