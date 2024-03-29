import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetchMessageLoading, selectMessages } from '../../store/messagesSlice';
import { fetchMessages } from '../../store/messagesThunks';
import React, { useEffect } from 'react';
import MessageItem from '../../components/MessageItem/MessageItem';

const Home = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const messagesLoading = useAppSelector(selectFetchMessageLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  let messagesArea: React.ReactNode = <CircularProgress/>;

  if (!messagesLoading && messages) {
    messagesArea = messages.map(message => (
      <MessageItem
        key={message.id}
        author={message.author}
        message={message.message}
        image={message.image}
      />
    ));
  }

  return (
    <Container maxWidth='xl' sx={{mt: 10}}>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Отзывы</Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          {messagesArea}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;