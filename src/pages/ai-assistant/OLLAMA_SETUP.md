# Ollama Setup Guide for AI Assistant

This guide will help you set up Ollama to use AI-generated responses in the SCULPT AI Assistant.

## What is Ollama?

Ollama is a free, open-source tool that lets you run large language models (LLMs) locally on your computer. No API keys, no usage fees, and your data stays private.

## Installation Steps

### 1. Install Ollama

**macOS/Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

**Windows:**
Download from https://ollama.ai/download/windows

**Or visit:** https://ollama.ai for other installation methods

### 2. Start Ollama Server

After installation, start the Ollama service:

```bash
ollama serve
```

This will start Ollama on `http://localhost:11434`

### 3. Download a Model

Download a language model (this may take a few minutes, ~4GB):

**Recommended models:**

```bash
# Llama 2 (7B) - Good balance of speed and quality
ollama pull llama2

# Mistral (7B) - Fast and efficient
ollama pull mistral

# CodeLlama (7B) - Better for technical/code questions
ollama pull codellama

# Llama 2 (13B) - Better quality, slower (requires more RAM)
ollama pull llama2:13b
```

### 4. Test Ollama

Verify it's working:

```bash
ollama list  # Should show your downloaded models
```

## Switching Between Mock and Ollama Modes

### Current Setup (Mock Mode)
The chatbot is currently using pre-written responses (no AI).

### Enable Ollama Mode

1. Open: `src/pages/ai-assistant/-components/aiService.ts`
2. Find the line at the bottom:
   ```typescript
   export const aiService = new AIService({ provider: 'mock' });
   ```
3. Change it to:
   ```typescript
   export const aiService = new AIService({ 
     provider: 'ollama',
     model: 'llama2'  // or 'mistral', 'codellama', etc.
   });
   ```
4. Save the file
5. The dev server will automatically reload

### Switch Back to Mock Mode

Change back to:
```typescript
export const aiService = new AIService({ provider: 'mock' });
```

## Model Options

You can use different models by changing the `model` parameter:

```typescript
// Fast and lightweight
{ provider: 'ollama', model: 'mistral' }

// Better for code/technical questions
{ provider: 'ollama', model: 'codellama' }

// Higher quality, needs more RAM
{ provider: 'ollama', model: 'llama2:13b' }
```

## Troubleshooting

### Error: "Ollama connection failed"

**Solution:**
1. Make sure Ollama is running: `ollama serve`
2. Check if port 11434 is available
3. Verify model is downloaded: `ollama list`

### Slow responses

**Solutions:**
- Use a smaller model (llama2, mistral instead of llama2:13b)
- Ensure you have enough RAM (8GB minimum, 16GB recommended)
- Close other applications

### Model not found

```bash
ollama pull llama2  # Downloads the model
```

## System Requirements

- **Minimum:** 8GB RAM
- **Recommended:** 16GB RAM
- **Storage:** 5-10GB per model
- **OS:** macOS, Linux, or Windows

## Comparison: Mock vs Ollama

| Feature | Mock Mode | Ollama Mode |
|---------|-----------|-------------|
| Cost | Free | Free |
| Setup | None | Install Ollama + model |
| Response Quality | Limited, pre-written | AI-generated, flexible |
| Internet Required | No | No |
| Speed | Instant | 2-10 seconds |
| Privacy | Complete | Complete (local) |
| Customization | Edit responses manually | Change model/prompt |

## Next Steps

1. Install Ollama
2. Download a model (recommended: `llama2` or `mistral`)
3. Start Ollama server
4. Switch the provider in `aiService.ts`
5. Test the chatbot!

## Useful Commands

```bash
# List installed models
ollama list

# Remove a model
ollama rm llama2

# Show model info
ollama show llama2

# Update Ollama
# macOS/Linux: Re-run install script
# Windows: Download new installer
```

## Support

- Ollama Documentation: https://github.com/ollama/ollama
- Ollama Discord: https://discord.gg/ollama
- Model Library: https://ollama.ai/library
