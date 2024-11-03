import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { db } from './Firebase';
import { collection, addDoc, onSnapshot } from './Firebase'; // Make sure this import is correct

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages from Firestore
  useEffect(() => {
    const messagesCollection = collection(db, 'messages');
    
    // Listen for new messages
    const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
      const msgList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgList);
    }, (error) => {
      console.error("Error fetching messages: ", error);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return; // Prevent empty messages

    try {
      // Add a new message to Firestore
      await addDoc(collection(db, 'messages'), {
        text: newMessage,
        createdAt: new Date(),
      });
      setNewMessage(''); // Clear input field
    } catch (error) {
      console.error("Error sending message: ", error.message);
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ height: '100vh' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          padding: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)', // Background shadow
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Chat Room
        </Typography>
        <Box sx={{ flexGrow: 1, overflowY: 'auto', marginBottom: 2 }}>
          {messages.map((message) => (
            <Box key={message.id} sx={{ marginBottom: 1, padding: 1, borderRadius: '8px', backgroundColor: '#e0f7fa' }}>
              <Typography variant="body1">
                {message.text}
              </Typography>
              <Typography variant="caption" sx={{ color: 'gray', textAlign: 'right' }}>
                {new Date(message.createdAt.seconds * 1000).toLocaleTimeString()} {/* Format the timestamp */}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box display="flex">
          <TextField
            variant="outlined"
            fullWidth
            label="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage} variant="contained" sx={{ marginLeft: 1 }}>
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Chat;
