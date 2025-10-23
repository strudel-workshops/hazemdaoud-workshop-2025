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

// Cache for GitHub context to avoid repeated fetches
let githubContextCache: string | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Fetch GitHub repo content to provide context to AI
async function fetchGitHubContext(): Promise<string> {
  // Return cached context if still fresh
  const now = Date.now();
  if (githubContextCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return githubContextCache;
  }
  
  try {
    // Fetch README from CoInML repository
    const readmeResponse = await fetch(
      'https://raw.githubusercontent.com/AMOS-experiment/CoInML/main/README.md'
    );
    
    if (!readmeResponse.ok) {
      return '';
    }
    
    const readmeText = await readmeResponse.text();
    
    // Try to fetch additional documentation if available
    let docsText = '';
    try {
      const docsResponse = await fetch(
        'https://raw.githubusercontent.com/AMOS-experiment/CoInML/main/docs/documentation.md'
      );
      if (docsResponse.ok) {
        docsText = await docsResponse.text();
      }
    } catch {
      // Docs might not exist, that's ok
    }
    
    // Format context for AI
    let context = `

=== COINML/SCULPT GITHUB REPOSITORY CONTEXT ===
Repository: https://github.com/AMOS-experiment/CoInML

=== README.md ===
${readmeText}
`;
    
    if (docsText) {
      context += `

=== ADDITIONAL DOCUMENTATION ===
${docsText}
`;
    }
    
    context += `

=== END OF REPOSITORY CONTEXT ===
Use this information to provide accurate, specific answers about CoInML/SCULPT.
`;
    
    // Cache the result
    githubContextCache = context;
    cacheTimestamp = Date.now();
    
    return context;
    
  } catch {
    return '';
  }
}

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
    // Route to appropriate provider based on config
    switch (this.config.provider) {
      case 'openai':
        return this.callOpenAI(messages, userMessage);
      case 'anthropic':
        return this.callAnthropic(messages, userMessage);
      case 'ollama':
        return this.callOllama(messages, userMessage);
      case 'mock':
      default:
        return this.getMockResponse(userMessage);
    }
  }

  private getMockResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    // UMAP related queries
    if (
      lowerMessage.includes('umap') ||
      lowerMessage.includes('n_neighbor') ||
      lowerMessage.includes('min_dist')
    ) {
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
    
    // Genetic programming and feature discovery
    if (
      lowerMessage.includes('genetic') ||
      lowerMessage.includes('feature') ||
      lowerMessage.includes('generation')
    ) {
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

    // Clustering related queries
    if (
      lowerMessage.includes('cluster') ||
      lowerMessage.includes('pattern')
    ) {
      return `Clustering patterns in SCULPT reveal correlations in the momentum data that correspond to different physical processes.

When interpreting clusters:
1. **Check confidence scores**: High confidence suggests reliable grouping
2. **Examine momentum distributions**: Look at Px, Py, Pz values within clusters
3. **Compare molecular configurations**: D₂O vs HDO may show different patterns
4. **Use genetic programming features**: Automatically discovered features often highlight physically meaningful correlations

Dense, well-separated clusters typically indicate distinct reaction pathways or fragmentation patterns.`;
    }

    // Molecular configuration queries
    if (
      lowerMessage.includes('molecular') ||
      lowerMessage.includes('configuration') ||
      lowerMessage.includes('molecule') ||
      lowerMessage.includes('d2o') ||
      lowerMessage.includes('hdo') ||
      lowerMessage.includes('h2o')
    ) {
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

    // Data preparation and upload queries
    if (
      lowerMessage.includes('upload') ||
      lowerMessage.includes('csv') ||
      lowerMessage.includes('file') ||
      lowerMessage.includes('import')
    ) {
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

    // COLTRIMS and physics queries
    if (
      lowerMessage.includes('coltrims') ||
      lowerMessage.includes('momentum') ||
      lowerMessage.includes('physics') ||
      lowerMessage.includes('spectroscopy')
    ) {
      return `COLTRIMS (COLd Target Recoil Ion Momentum Spectroscopy) is a powerful technique for studying atomic and molecular collision processes.

In SCULPT, we analyze:
- **Momentum vectors** (Px, Py, Pz) for each particle
- **Coincidence events** where multiple particles are detected
- **Fragmentation patterns** revealing reaction dynamics

The momentum data encodes:
1. Energy and angular distributions
2. Correlations between particles
3. Signatures of different reaction pathways

SCULPT uses machine learning to automatically identify patterns in this high-dimensional data that correspond to distinct physical processes.`;
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

Try asking specific questions like:
- "Tell me about UMAP"
- "Explain clustering patterns"
- "How to upload data"
- "What is genetic programming"

What would you like to know?`;
  }

  // Method to add for future API integration
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async callOpenAI(_messages: Message[], _userMessage: string): Promise<string> {
    // Placeholder for OpenAI integration
    // When implemented, use SYSTEM_PROMPT as the system message
    throw new Error('OpenAI integration not yet implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async callAnthropic(_messages: Message[], _userMessage: string): Promise<string> {
    // Placeholder for Anthropic integration
    // When implemented, use SYSTEM_PROMPT as the system message
    throw new Error('Anthropic integration not yet implemented');
  }

  async callOllama(messages: Message[], userMessage: string): Promise<string> {
    try {
      // Fetch GitHub repository context (cached for performance)
      const githubContext = await fetchGitHubContext();
      
      // Combine system prompt with GitHub context
      const fullSystemPrompt = SYSTEM_PROMPT + githubContext;
      
      // Format conversation history for Ollama
      const conversationHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      }));

      // Add system prompt (with GitHub context) and current user message
      const prompt = [
        { role: 'system', content: fullSystemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage },
      ];

      // Call Ollama API
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: this.config.model || 'llama2',
          messages: prompt,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.message.content;
    } catch {
      // Fallback to mock response if Ollama is not available
      return `⚠️ Ollama connection failed. Please ensure Ollama is running on localhost:11434.
      
To start Ollama:
1. Install Ollama from https://ollama.ai
2. Run: ollama serve
3. Pull a model: ollama pull llama2

Falling back to mock response:

${this.getMockResponse(userMessage)}`;
    }
  }
}

// Auto-detect environment and choose appropriate provider
const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || 
   window.location.hostname === '127.0.0.1');

export const aiService = new AIService({ 
  provider: isLocalhost ? 'ollama' : 'mock',
  model: 'llama2'
});
