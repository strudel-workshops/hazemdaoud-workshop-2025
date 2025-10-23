# AI Assistant for SCULPT

An intelligent chatbot interface built with STRUDEL to help researchers analyze COLTRIMS data using the SCULPT framework.

## Features

- **Interactive Chat Interface**: Clean, modern chat UI with user and AI message bubbles
- **SCULPT Domain Expertise**: Pre-trained with knowledge about:
  - UMAP dimensionality reduction and parameter tuning
  - COLTRIMS momentum data analysis
  - Clustering interpretation
  - Genetic programming for feature discovery
  - Molecular configuration setup
  - Deep autoencoder architectures

- **Smart Responses**: Context-aware responses based on keywords in user questions
- **Material UI Integration**: Consistent styling with STRUDEL's design system
- **Auto-scroll**: Automatically scrolls to latest messages
- **Loading States**: Visual feedback while AI generates responses

## File Structure

```
src/pages/ai-assistant/
├── index.tsx                    # Main chat page component
├── README.md                    # This file
└── -components/
    ├── ChatMessage.tsx          # Individual message component (user/AI)
    ├── ChatInput.tsx            # Input field with send button
    ├── ChatContainer.tsx        # Message list container with auto-scroll
    └── aiService.ts             # AI service layer (currently mock responses)
```

## Usage

### Access the AI Assistant

1. Start the development server: `npm run dev`
2. Navigate to `/ai-assistant` in your browser
3. Start asking questions about SCULPT and COLTRIMS data analysis

### Example Questions

- "How do I choose UMAP parameters?"
- "What does clustering tell me about my data?"
- "How does genetic programming discover features?"
- "How do I set up molecular configurations?"
- "What data format should I use?"

## Current Implementation

The AI Assistant currently uses **mock responses** with keyword-based matching. This provides intelligent, relevant responses for common SCULPT questions without requiring external API calls.

### Mock Response Topics

The service recognizes questions about:
- UMAP parameters (`n_neighbors`, `min_dist`)
- Clustering patterns and interpretation
- Genetic programming and feature discovery
- Molecular configurations (D₂O, HDO, H₂O)
- Data upload and CSV formatting

## Integrating Real AI Services

To connect to actual AI models, modify `src/pages/ai-assistant/-components/aiService.ts`:

### Option 1: OpenAI (GPT-4/3.5)

```bash
npm install openai
```

Add to `.env`:
```
VITE_OPENAI_API_KEY=your-api-key
```

Update `aiService.ts`:
```typescript
import OpenAI from 'openai';

async callOpenAI(messages: Message[], userMessage: string): Promise<string> {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // Only for development
  });

  const chatMessages = messages.map(m => ({
    role: m.role,
    content: m.content
  }));

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...chatMessages,
      { role: 'user', content: userMessage }
    ],
  });

  return response.choices[0].message.content || 'No response';
}
```

### Option 2: Anthropic Claude

```bash
npm install @anthropic-ai/sdk
```

Add to `.env`:
```
VITE_ANTHROPIC_API_KEY=your-api-key
```

### Option 3: Local Model (Ollama)

Run Ollama locally and update the service to call:
```
http://localhost:11434/api/generate
```

No API key required!

## STRUDEL Components Used

- **PageHeader**: Standard page title and description
- **Material UI Components**: Box, Container, Paper, Typography, TextField, IconButton, Avatar
- **Theme**: Uses STRUDEL's theme configuration for consistent colors
- **Layout**: Follows STRUDEL's container and spacing patterns

## Future Enhancements

1. **Data Integration**: Connect to SCULPT's actual data to answer specific questions about loaded datasets
2. **Visualization Generation**: AI could generate and display UMAP plots based on user requests
3. **Code Generation**: Generate Python code snippets for custom analysis
4. **Memory**: Persist conversation history across sessions
5. **Multi-modal**: Support uploading images of plots for analysis
6. **RAG Integration**: Connect to SCULPT documentation for accurate technical details

## How STRUDEL Helps

STRUDEL provides:
- ✅ **UI Framework**: Material UI components pre-configured
- ✅ **Routing**: File-based routing automatically discovers new pages
- ✅ **Layout**: Consistent TopBar, Container, and Footer
- ✅ **Theme**: Professional color scheme and typography
- ✅ **Development**: TypeScript, Vite, hot reload
- ✅ **Navigation**: Automatic link generation on home page

You built:
- Chat message bubbles and conversation UI
- AI service integration layer
- Message state management
- User interaction handling

This combination gives you a professional, production-ready AI assistant interface with minimal custom code!

## Testing

To test the AI Assistant:

1. Start the dev server: `npm run dev`
2. Open http://localhost:5175/ai-assistant
3. Try these example questions:
   - "What UMAP parameters should I use?"
   - "Explain clustering in my data"
   - "How do I upload data?"
   - "What is genetic programming?"

The mock service will provide contextual responses based on the question keywords.
