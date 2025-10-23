import { useEffect, useRef } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { ChatMessage, Message } from './ChatMessage';

interface ChatContainerProps {
  messages: Message[];
  isLoading?: boolean;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  isLoading = false,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {messages.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: 2,
          }}
        >
          <Typography variant="h5" color="text.secondary">
            SCULPT AI Assistant
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center">
            Ask me anything about:
          </Typography>
          <Box component="ul" sx={{ textAlign: 'left', color: 'text.secondary' }}>
            <li>Analyzing COLTRIMS momentum data</li>
            <li>UMAP dimensionality reduction parameters</li>
            <li>Interpreting clustering results</li>
            <li>Feature discovery with genetic programming</li>
            <li>Molecular configuration setup</li>
          </Box>
        </Box>
      ) : (
        <>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <CircularProgress size={24} />
              <Typography variant="body2" color="text.secondary">
                AI is thinking...
              </Typography>
            </Box>
          )}
          <div ref={messagesEndRef} />
        </>
      )}
    </Box>
  );
};
