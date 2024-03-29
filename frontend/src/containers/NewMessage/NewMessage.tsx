import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Message } from '../../types';
import MessageForm from '../../components/MessageForm/MessageForm';
import { selectCreateMessageLoading } from '../../store/messagesSlice';
import { createMessage } from '../../store/messagesThunks';
import { Container, Typography } from '@mui/material';

const NewMessage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const creatingLoading = useAppSelector(selectCreateMessageLoading);

  const onSubmit = async (messageData: Message) => {
    await dispatch(createMessage(messageData));
    void navigate('/');
  };

  return (
    <Container maxWidth='sm' sx={{mt: 10}}>
      <Typography variant="h4" sx={{mb: 2}} color={'#000'}>Новый отзыв</Typography>
      <MessageForm onSubmit={onSubmit} isLoading={creatingLoading}/>
    </Container>
  );
};

export default NewMessage;