import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ModalButton = props => {
  let idNum = props.arr_post.length + 1;
  const [formInfo, setFormInfo] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    image: '',
    comments: [],
    id: 0,
  });

  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    props.funcSubmit(formInfo);
  };

  const handleForm = name => e => {
    setFormInfo({ ...formInfo, [name]: e.target.value, id: idNum });
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

  return (
    <div>
      <button onClick={handleOpen}>Modal</button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        align="center"
      >
        <div className={classes.paper}>
          <h2>Create Post</h2>
          <TextField
            value={formInfo.title}
            lable="title"
            onChange={handleForm('title')}
          >
            title
          </TextField>
          <br />
          <TextField
            value={formInfo.shortDescription}
            name="shortDescription"
            onChange={handleForm('shortDescription')}
          >
            short description
          </TextField>
          <br />
          <TextField
            value={formInfo.description}
            name="description"
            onChange={handleForm('description')}
          >
            description
          </TextField>
          <br />
          <Select
            value={formInfo.category}
            name="category"
            onChange={handleForm('category')}
          >
            <MenuItem value={'travel'}>travel</MenuItem>
            <MenuItem value={'lifestyle'}>lifestyle</MenuItem>
            <MenuItem value={'business'}>business</MenuItem>
            <MenuItem value={'food'}>food</MenuItem>
            <MenuItem value={'work'}>work</MenuItem>
            category
          </Select>
          <br />
          <TextField
            defaultValue="Image URL"
            value={formInfo.image}
            name="image"
            onChange={handleForm('image')}
          >
            image URL
          </TextField>
          <br />
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
