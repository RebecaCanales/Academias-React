import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ModalButton = props => {
  const [formInfo, setFormInfo] = useState({
    title: 'Title',
    shortDescription: 'Short Description',
    description: 'Description',
    category: 'Category',
    image: 'Image',
  });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    props.funcSubmit(formInfo);
  };

  const handleForm = name => e => {
    setFormInfo({ ...formInfo, [name]: e.target.value });
    console.log(formInfo);
  };

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
  //console.log(formInfo);

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
          <TextField
            //defaultValue="Title"
            value={formInfo.title}
            lable="title"
            onChange={e => handleForm('title')}
          >
            title
          </TextField>
          <br />
          <TextField
            //defaultValue="Short Description"
            value={formInfo.shortDescription}
            name="shortDescription"
            onChange={e => handleForm('shortDescription')}
          >
            short description
          </TextField>
          <br />
          <TextField
            //defaultValue="Description"
            value={formInfo.description}
            name="description"
            onChange={e => handleForm('description')}
          >
            description
          </TextField>
          <br />
          <TextField
            //defaultValue="Category"
            value={formInfo.category}
            name="category"
            onChange={e => handleForm('category')}
          >
            category
          </TextField>
          <br />
          <TextField
            //defaultValue="Image URL"
            value={formInfo.image}
            name="image"
            onChange={e => handleForm('image')}
          >
            image URL
          </TextField>
          <br />
          <Button>cancel</Button>
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalButton;
