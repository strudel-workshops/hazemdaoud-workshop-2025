import { Message } from './ChatMessage';

/**
 * AI Service for SCULPT Assistant
 * 
 * This is a placeholder implementation. To integrate with a real AI service:
 * 
 * 1. OpenAI Integration:
 *    - Install: npm install openai
 *    - Add API key to .env: VITE_OPENAI_API_KEY=your-key
 *    - Use OpenAI SDK to call GPT-4 or GPT-3.5
 * 
 * 2. Anthropic Claude Integration:
 *    - Install: npm install @anthropic-ai/sdk
 *    - Add API key to .env: VITE_ANTHROPIC_API_KEY=your-key
 *    - Use Anthropic SDK to call Claude
 * 
 * 3. Local Model (Ollama):
 *    - Run Ollama locally
 *    - Use fetch to call http://localhost:11434/api/generate
 */

const SYSTEM_PROMPT = `You are an AI assistant for SCULPT (Supervised Clustering and Uncovering Latent Patterns with Training), 
a machine learning framework for analyzing high-dimensional coincidence spectroscopy data from COLTRIMS experiments.

Your expertise includes:
- UMAP dimensionality reduction and parameter tuning (n_neighbors, min_dist)
- Analyzing momentum data (Px, Py, Pz) from atomic/molecular collisions
- Clustering validation and confidence scoring
- Genetic programming for feature discovery
- Deep autoencoder architectures for feature extraction
- Molecular configuration (D₂O, HDO, etc.)
- Physics interpretation of clustering patterns

Provide clear, actionable advice to help researchers analyze their data effectively.
When discussing parameters, explain their impact on the visualization and analysis.`;

export interface AIServiceConfig {
  provider: 'mock' | 'openai' | 'anthropic' | 'ollama';
  apiKey?: string;
  model?: string;
}

class AIService {
  private config: AIServiceConfig;

  constructor(config: AIServiceConfig = { provider: 'mock' }) {
    this.config = config;
  }

  async sendMessage(
    messages: Message[],
    userMessage: string
  ): Promise<string> {
    // For now, return mock responses
    // Replace this with actual API calls based on config.provider
    return this.getMockResponse(userMessage);
  }

  private getMockResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('umap')) {
      return `UMAP (Uniform Manifold Approximation and Projection) is excellent for visualizing high-dimensional COLTRIMS momentum data. 

Key parameters to consider:
- **n_neighbors** (default: 15): Controls local vs global structure
  - Lower values (5-10): Emphasize local structure, more clusters
  - Higher values (30-50): Emphasize global structure, broader patterns
  
- **min_dist** (default: 0.1): Controls point spacing in embedding
  - Lower values (0.0-0.1): Points packed tightly, detailed clusters
  - Higher values (0.3-0.5): More spread out, general structure

For COLTRIMS data, I recommend starting with:
- n_neighbors: 15-30
- min_dist: 0.1-0.2

Then adjust based on whether you see too much or too little clustering.`;
    }

    if (lowerMessage.includes('cluster') || lowerMessage.includes('pattern')) {
      return `Clustering patterns in SCULPT reveal correlations in the momentum data that correspond to different physical processes.

When interpreting clusters:
1. **Check confidence scores**: High confidence suggests reliable grouping
2. **Examine momentum distributions**: Look at Px, Py, Pz values within clusters
3. **Compare molecular configurations**: D₂O vs HDO may show different patterns
4. **Use genetic programming features**: Automatically discovered features often highlight physically meaningful correlations

Dense, well-separated clusters typically indicate distinct reaction pathways or fragmentation patterns.`;
    }

    if (lowerMessage.includes('genetic') || lowerMessage.includes('feature')) {
      return `Genetic programming in SCULPT automatically discovers meaningful features from your momentum data.

How it works:
1. Starts with basic operations (+, -, *, /) on Px, Py, Pz
2. Evolves complex expressions that maximize cluster separation
3. Discovers physics-meaningful combinations (e.g., total momentum, angular momentum components)

Best practices:
- Run for 50-100 generations for good feature discovery
- Examine top-ranked features for physical interpretability
- Use discovered features in UMAP for improved embeddings
- Combine with expert knowledge of your molecular system`;
    }

    if (lowerMessage.includes('molecular') || lowerMessage.includes('configuration')) {
      return `Molecular configuration in SCULPT defines the expected particle types and masses for your system.

Common configurations:
- **D₂O**: Two deuterons + one oxygen
- **HDO**: One hydrogen + one deuteron + one oxygen
- **H₂O**: Two hydrogens + one oxygen

The configuration affects:
1. Mass assignment for momentum analysis
2. Energy calculations
3. Physical constraints on fragmentation patterns

You can create custom configurations for other molecules. Make sure to specify correct atomic masses and particle counts.`;
    }

    if (lowerMessage.includes('data') || lowerMessage.includes('upload') || lowerMessage.includes('csv')) {
      return `To analyze COLTRIMS data in SCULPT:

1. **Prepare your CSV file** with columns: Px, Py, Pz for each particle
   - Each row represents one coincidence event
   - Momentum values typically in atomic units

2. **Upload to SCULPT**: Drag and drop your CSV file

3. **Assign molecular profile**: Select D₂O, HDO, or custom configuration

4. **Run UMAP**: Choose features and parameters

5. **Explore results**: Use selection tools and filters

Expected data size: Thousands to millions of events work well. Very small datasets (<1000 events) may not cluster meaningfully.`;
    }

    // Default response
    return `I'm here to help you analyze COLTRIMS data with SCULPT! 

You can ask me about:
- UMAP parameter selection and tuning
- Interpreting clustering results
- Setting up molecular configurations
- Using genetic programming for feature discovery
- Understanding momentum correlations
- Data preparation and analysis workflows

What would you like to know?`;
  }

  // Method to add for future API integration
  async callOpenAI(messages: Message[], userMessage: string): Promise<string> {
    // Placeholder for OpenAI integration
    throw new Error('OpenAI integration not yet implemented');
  }

  async callAnthropic(messages: Message[], userMessage: string): Promise<string> {
    // Placeholder for Anthropic integration
    throw new Error('Anthropic integration not yet implemented');
  }

  async callOllama(messages: Message[], userMessage: string): Promise<string> {
    // Placeholder for Ollama integration
    throw new Error('Ollama integration not yet implemented');
  }
}

export const aiService = new AIService({ provider: 'mock' });
