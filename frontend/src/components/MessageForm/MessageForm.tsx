import { Message } from '../../types';
import React, { useState } from 'react';
import FileInput from '../FileInput/FileInput';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const initialState: Message = {
  author: '',
  message: '',
  image: null,
};

interface Props {
  onSubmit: (message: Message) => void;
  isLoading?: boolean;
}

const MessageForm: React.FC<Props> = ({onSubmit, isLoading = false}) => {
  const [message, setMessage] = useState(initialState);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setMessage(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit(message);
  };

  return (
    
      <form onSubmit={onFormSubmit}>
        <Grid container direction="column" gap={'15px'}>
          <Grid>
            <TextField
              required
              id="author" 
              label="Автор"
              name="author"
              value={message.author}
              onChange={changeMessage}
            />
          </Grid>
          <Grid>
            <TextField
              required
              id="message" 
              label="Сообщение"
              name="message"
              value={message.message}
              onChange={changeMessage}
            />
          </Grid>
          <Grid>
            <FileInput
              onChange={fileInputChange}
              name="image"
              label="Изображение"
            />
          </Grid>
          <Grid>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              disabled={isLoading}
              loading={isLoading}
              loadingPosition="start"
              startIcon={<SaveIcon/>}
            >
              Создать
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
  );
};

export default MessageForm;