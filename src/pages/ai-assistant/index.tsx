import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { PageHeader } from '../../components/PageHeader';
import { ChatContainer } from './-components/ChatContainer';
import { ChatInput } from './-components/ChatInput';
import { Message } from './-components/ChatMessage';
import { aiService } from './-components/aiService';

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (error) {
      console.error('Error getting AI response:', error);
      
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <PageHeader
        pageTitle="AI Assistant"
        description="Get help analyzing COLTRIMS data with machine learning"
      />
      <Box
        sx={{
          height: 'calc(100vh - 250px)',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <ChatContainer messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </Box>
    </Container>
  );
}
