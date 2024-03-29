import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { AppDispatch } from '../app/store';
import { MessageApi, Message } from '../types';

export const fetchMessages = createAsyncThunk<MessageApi[], undefined, { dispatch: AppDispatch }>(
  'messages/fetchAll',
  async () => {
    const messagesResponse = await axiosApi.get<MessageApi[]>('/messages');
    return messagesResponse.data;
  }
);

export const createMessage = createAsyncThunk<void, Message>(
  'messages/create',
  async (messageData) => {
    const formData = new FormData();
    formData.append('author', messageData.author);
    formData.append('message', messageData.message);

    if (messageData.image) {
      formData.append('image', messageData.image);
    }

    await axiosApi.post('/messages', formData);
  }
);