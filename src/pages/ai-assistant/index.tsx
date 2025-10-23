import { useState } from 'react';
import { Box, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createFileRoute } from '@tanstack/react-router';
import { PageHeader } from '../../components/PageHeader';
import { ChatContainer } from './-components/ChatContainer';
import { ChatInput } from './-components/ChatInput';
import { Message } from './-components/ChatMessage';
import { aiService } from './-components/aiService';

export const Route = createFileRoute('/ai-assistant/')({
  component: AIAssistant,
});

function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showApp, setShowApp] = useState(true);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get AI response
      const response = await aiService.sendMessage(messages, content);

      // Add AI message
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      // Add error message
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <PageHeader
        pageTitle="AI Assistant & CoInML App"
        description="Get help analyzing COLTRIMS data with machine learning"
      />
      
      {/* AI Chat Assistant */}
      <Box
        sx={{
          height: showApp ? '400px' : 'calc(100vh - 250px)',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
          mb: 3,
          transition: 'height 0.3s ease',
        }}
      >
        <ChatContainer messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </Box>

      {/* Toggle Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Tooltip title={showApp ? 'Hide CoInML App' : 'Show CoInML App'}>
          <IconButton
            onClick={() => setShowApp(!showApp)}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {showApp ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Tooltip>
        <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
          {showApp ? 'CoInML App Visible' : 'CoInML App Hidden'}
        </Typography>
      </Box>

      {/* CoInML Application Iframe */}
      {showApp && (
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 600px)',
            minHeight: '400px',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: 3,
            animation: 'fadeIn 0.3s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          <iframe
            src="http://127.0.0.1:9000"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="CoInML Application"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </Box>
      )}
    </Container>
  );
}
