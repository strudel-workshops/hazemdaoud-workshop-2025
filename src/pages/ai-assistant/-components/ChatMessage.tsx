import { Box, Paper, Typography, Avatar } from '@mui/material';
import { SmartToy, Person } from '@mui/icons-material';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 2,
        gap: 1,
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 36,
            height: 36,
          }}
        >
          <SmartToy fontSize="small" />
        </Avatar>
      )}
      <Paper
        elevation={1}
        sx={{
          p: 2,
          maxWidth: '70%',
          bgcolor: isUser ? 'primary.light' : 'background.paper',
          color: isUser ? 'primary.contrastText' : 'text.primary',
        }}
      >
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {message.content}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 1,
            opacity: 0.7,
            fontSize: '0.7rem',
          }}
        >
          {message.timestamp.toLocaleTimeString()}
        </Typography>
      </Paper>
      {isUser && (
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            width: 36,
            height: 36,
          }}
        >
          <Person fontSize="small" />
        </Avatar>
      )}
    </Box>
  );
};
