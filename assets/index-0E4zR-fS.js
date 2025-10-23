var E=Object.defineProperty;var H=(s,t,e)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>H(s,typeof t!="symbol"?t+"":t,e);import{c as g,j as o,g as _,a as N,d,e as F,_ as V,b as m,s as P,h as $,k as B,B as c,P as k,T as h,w as W,x as O,C as Y}from"./index-CZOhQNIK.js";import{P as G}from"./PageHeader-CfT6nTB7.js";import{u as q}from"./useSlot-Da_4-YZB.js";import{C as K,T as X}from"./Tooltip-BjhWMmlA.js";const J=g(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Q(s){return _("MuiAvatar",s)}N("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Z=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],ee=s=>{const{classes:t,variant:e,colorDefault:n}=s;return B({root:["root",e,n&&"colorDefault"],img:["img"],fallback:["fallback"]},Q,t)},te=P("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,t[e.variant],e.colorDefault&&t.colorDefault]}})(({theme:s})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:s.typography.fontFamily,fontSize:s.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(s.vars||s).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:m({color:(s.vars||s).palette.background.default},s.vars?{backgroundColor:s.vars.palette.Avatar.defaultBg}:m({backgroundColor:s.palette.grey[400]},s.applyStyles("dark",{backgroundColor:s.palette.grey[600]})))}]})),oe=P("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(s,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),se=P(J,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(s,t)=>t.fallback})({width:"75%",height:"75%"});function ae({crossOrigin:s,referrerPolicy:t,src:e,srcSet:n}){const[a,r]=d.useState(!1);return d.useEffect(()=>{if(!e&&!n)return;r(!1);let i=!0;const l=new Image;return l.onload=()=>{i&&r("loaded")},l.onerror=()=>{i&&r("error")},l.crossOrigin=s,l.referrerPolicy=t,l.src=e,n&&(l.srcset=n),()=>{i=!1}},[s,t,e,n]),a}const j=d.forwardRef(function(t,e){const n=F({props:t,name:"MuiAvatar"}),{alt:a,children:r,className:i,component:l="div",slots:f={},slotProps:p={},imgProps:u,sizes:y,src:x,srcSet:b,variant:L="circular"}=n,R=V(n,Z);let v=null;const D=ae(m({},u,{src:x,srcSet:b})),M=x||b,T=M&&D!=="error",w=m({},n,{colorDefault:!T,component:l,variant:L}),C=ee(w),[U,z]=q("img",{className:C.img,elementType:oe,externalForwardedProps:{slots:f,slotProps:{img:m({},u,p.img)}},additionalProps:{alt:a,src:x,srcSet:b,sizes:y},ownerState:w});return T?v=o.jsx(U,m({},z)):r||r===0?v=r:M&&a?v=a[0]:v=o.jsx(se,{ownerState:w,className:C.fallback}),o.jsx(te,m({as:l,ownerState:w,className:$(C.root,i),ref:e},R,{children:v}))}),ne=g(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),re=g(o.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),ie=g(o.jsx("path",{d:"M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3M7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13"}),"SmartToy"),le=g(o.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),ce=g(o.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),de=({message:s})=>{const t=s.role==="user";return o.jsxs(c,{sx:{display:"flex",justifyContent:t?"flex-end":"flex-start",mb:2,gap:1},children:[!t&&o.jsx(j,{sx:{bgcolor:"primary.main",width:36,height:36},children:o.jsx(ie,{fontSize:"small"})}),o.jsxs(k,{elevation:1,sx:{p:2,maxWidth:"70%",bgcolor:t?"primary.light":"background.paper",color:t?"primary.contrastText":"text.primary"},children:[o.jsx(h,{variant:"body1",sx:{whiteSpace:"pre-wrap"},children:s.content}),o.jsx(h,{variant:"caption",sx:{display:"block",mt:1,opacity:.7,fontSize:"0.7rem"},children:s.timestamp.toLocaleTimeString()})]}),t&&o.jsx(j,{sx:{bgcolor:"secondary.main",width:36,height:36},children:o.jsx(ne,{fontSize:"small"})})]})},ue=({messages:s,isLoading:t=!1})=>{const e=d.useRef(null),n=()=>{var a;(a=e.current)==null||a.scrollIntoView({behavior:"smooth"})};return d.useEffect(()=>{n()},[s]),o.jsx(c,{sx:{flex:1,overflowY:"auto",p:3,display:"flex",flexDirection:"column"},children:s.length===0?o.jsxs(c,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:2},children:[o.jsx(h,{variant:"h5",color:"text.secondary",children:"SCULPT AI Assistant"}),o.jsx(h,{variant:"body1",color:"text.secondary",textAlign:"center",children:"Ask me anything about:"}),o.jsxs(c,{component:"ul",sx:{textAlign:"left",color:"text.secondary"},children:[o.jsx("li",{children:"Analyzing COLTRIMS momentum data"}),o.jsx("li",{children:"UMAP dimensionality reduction parameters"}),o.jsx("li",{children:"Interpreting clustering results"}),o.jsx("li",{children:"Feature discovery with genetic programming"}),o.jsx("li",{children:"Molecular configuration setup"})]})]}):o.jsxs(o.Fragment,{children:[s.map(a=>o.jsx(de,{message:a},a.id)),t&&o.jsxs(c,{sx:{display:"flex",alignItems:"center",gap:2,mb:2},children:[o.jsx(K,{size:24}),o.jsx(h,{variant:"body2",color:"text.secondary",children:"AI is thinking..."})]}),o.jsx("div",{ref:e})]})})},me=({onSendMessage:s,disabled:t=!1})=>{const[e,n]=d.useState(""),a=i=>{i.preventDefault(),e.trim()&&!t&&(s(e.trim()),n(""))},r=i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),a(i))};return o.jsx(k,{elevation:3,sx:{p:2,borderTop:1,borderColor:"divider"},children:o.jsxs(c,{component:"form",onSubmit:a,sx:{display:"flex",gap:1,alignItems:"flex-end"},children:[o.jsx(W,{fullWidth:!0,multiline:!0,maxRows:4,value:e,onChange:i=>n(i.target.value),onKeyPress:r,placeholder:"Ask about SCULPT data analysis, UMAP parameters, or momentum correlations...",disabled:t,variant:"outlined",size:"small"}),o.jsx(O,{type:"submit",color:"primary",disabled:t||!e.trim(),sx:{bgcolor:"primary.main",color:"white","&:hover":{bgcolor:"primary.dark"},"&:disabled":{bgcolor:"action.disabledBackground"}},children:o.jsx(re,{})})]})})},pe=`You are an AI assistant for SCULPT (Supervised Clustering and Uncovering Latent Patterns with Training), 
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
When discussing parameters, explain their impact on the visualization and analysis.`;let S=null,I=0;const he=5*60*1e3;async function ge(){const s=Date.now();if(S&&s-I<he)return S;try{const t=await fetch("https://raw.githubusercontent.com/AMOS-experiment/CoInML/main/README.md");if(!t.ok)return"";const e=await t.text();let n="";try{const r=await fetch("https://raw.githubusercontent.com/AMOS-experiment/CoInML/main/docs/documentation.md");r.ok&&(n=await r.text())}catch{}let a=`

=== COINML/SCULPT GITHUB REPOSITORY CONTEXT ===
Repository: https://github.com/AMOS-experiment/CoInML

=== README.md ===
${e}
`;return n&&(a+=`

=== ADDITIONAL DOCUMENTATION ===
${n}
`),a+=`

=== END OF REPOSITORY CONTEXT ===
Use this information to provide accurate, specific answers about CoInML/SCULPT.
`,S=a,I=Date.now(),a}catch{return""}}class fe{constructor(t={provider:"mock"}){A(this,"config");this.config=t}async sendMessage(t,e){switch(this.config.provider){case"openai":return this.callOpenAI(t,e);case"anthropic":return this.callAnthropic(t,e);case"ollama":return this.callOllama(t,e);case"mock":default:return this.getMockResponse(e)}}getMockResponse(t){const e=t.toLowerCase();return e.includes("umap")||e.includes("n_neighbor")||e.includes("min_dist")?`UMAP (Uniform Manifold Approximation and Projection) is excellent for visualizing high-dimensional COLTRIMS momentum data. 

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

Then adjust based on whether you see too much or too little clustering.`:e.includes("genetic")||e.includes("feature")||e.includes("generation")?`Genetic programming in SCULPT automatically discovers meaningful features from your momentum data.

How it works:
1. Starts with basic operations (+, -, *, /) on Px, Py, Pz
2. Evolves complex expressions that maximize cluster separation
3. Discovers physics-meaningful combinations (e.g., total momentum, angular momentum components)

Best practices:
- Run for 50-100 generations for good feature discovery
- Examine top-ranked features for physical interpretability
- Use discovered features in UMAP for improved embeddings
- Combine with expert knowledge of your molecular system`:e.includes("cluster")||e.includes("pattern")?`Clustering patterns in SCULPT reveal correlations in the momentum data that correspond to different physical processes.

When interpreting clusters:
1. **Check confidence scores**: High confidence suggests reliable grouping
2. **Examine momentum distributions**: Look at Px, Py, Pz values within clusters
3. **Compare molecular configurations**: D₂O vs HDO may show different patterns
4. **Use genetic programming features**: Automatically discovered features often highlight physically meaningful correlations

Dense, well-separated clusters typically indicate distinct reaction pathways or fragmentation patterns.`:e.includes("molecular")||e.includes("configuration")||e.includes("molecule")||e.includes("d2o")||e.includes("hdo")||e.includes("h2o")?`Molecular configuration in SCULPT defines the expected particle types and masses for your system.

Common configurations:
- **D₂O**: Two deuterons + one oxygen
- **HDO**: One hydrogen + one deuteron + one oxygen
- **H₂O**: Two hydrogens + one oxygen

The configuration affects:
1. Mass assignment for momentum analysis
2. Energy calculations
3. Physical constraints on fragmentation patterns

You can create custom configurations for other molecules. Make sure to specify correct atomic masses and particle counts.`:e.includes("upload")||e.includes("csv")||e.includes("file")||e.includes("import")?`To analyze COLTRIMS data in SCULPT:

1. **Prepare your CSV file** with columns: Px, Py, Pz for each particle
   - Each row represents one coincidence event
   - Momentum values typically in atomic units

2. **Upload to SCULPT**: Drag and drop your CSV file

3. **Assign molecular profile**: Select D₂O, HDO, or custom configuration

4. **Run UMAP**: Choose features and parameters

5. **Explore results**: Use selection tools and filters

Expected data size: Thousands to millions of events work well. Very small datasets (<1000 events) may not cluster meaningfully.`:e.includes("coltrims")||e.includes("momentum")||e.includes("physics")||e.includes("spectroscopy")?`COLTRIMS (COLd Target Recoil Ion Momentum Spectroscopy) is a powerful technique for studying atomic and molecular collision processes.

In SCULPT, we analyze:
- **Momentum vectors** (Px, Py, Pz) for each particle
- **Coincidence events** where multiple particles are detected
- **Fragmentation patterns** revealing reaction dynamics

The momentum data encodes:
1. Energy and angular distributions
2. Correlations between particles
3. Signatures of different reaction pathways

SCULPT uses machine learning to automatically identify patterns in this high-dimensional data that correspond to distinct physical processes.`:`I'm here to help you analyze COLTRIMS data with SCULPT! 

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

What would you like to know?`}async callOpenAI(t,e){throw new Error("OpenAI integration not yet implemented")}async callAnthropic(t,e){throw new Error("Anthropic integration not yet implemented")}async callOllama(t,e){try{const n=await ge(),a=pe+n,r=t.map(p=>({role:p.role==="user"?"user":"assistant",content:p.content})),i=[{role:"system",content:a},...r,{role:"user",content:e}],l=await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:this.config.model||"llama2",messages:i,stream:!1})});if(!l.ok)throw new Error(`Ollama API error: ${l.status} ${l.statusText}`);return(await l.json()).message.content}catch{return`⚠️ Ollama connection failed. Please ensure Ollama is running on localhost:11434.
      
To start Ollama:
1. Install Ollama from https://ollama.ai
2. Run: ollama serve
3. Pull a model: ollama pull llama2

Falling back to mock response:

${this.getMockResponse(e)}`}}}const ye=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),xe=new fe({provider:ye?"ollama":"mock",model:"llama2"}),Pe=function(){const[t,e]=d.useState([]),[n,a]=d.useState(!1),[r,i]=d.useState(!0),l=async f=>{const p={id:`user-${Date.now()}`,role:"user",content:f,timestamp:new Date};e(u=>[...u,p]),a(!0);try{const u=await xe.sendMessage(t,f),y={id:`ai-${Date.now()}`,role:"assistant",content:u,timestamp:new Date};e(x=>[...x,y])}catch{const u={id:`error-${Date.now()}`,role:"assistant",content:"Sorry, I encountered an error. Please try again.",timestamp:new Date};e(y=>[...y,u])}finally{a(!1)}};return o.jsxs(Y,{maxWidth:"xl",sx:{py:4},children:[o.jsx(G,{pageTitle:"AI Assistant & CoInML App",description:"Get help analyzing COLTRIMS data with machine learning"}),o.jsxs(c,{sx:{height:r?"400px":"calc(100vh - 250px)",display:"flex",flexDirection:"column",bgcolor:"background.paper",borderRadius:2,overflow:"hidden",boxShadow:3,mb:3,transition:"height 0.3s ease"},children:[o.jsx(ue,{messages:t,isLoading:n}),o.jsx(me,{onSendMessage:l,disabled:n})]}),o.jsxs(c,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:2},children:[o.jsx(X,{title:r?"Hide CoInML App":"Show CoInML App",children:o.jsx(O,{onClick:()=>i(!r),sx:{bgcolor:"primary.main",color:"white","&:hover":{bgcolor:"primary.dark"}},children:r?o.jsx(ce,{}):o.jsx(le,{})})}),o.jsx(h,{variant:"body2",sx:{ml:2,color:"text.secondary"},children:r?"CoInML App Visible":"CoInML App Hidden"})]}),r&&o.jsx(c,{sx:{width:"100%",height:"calc(100vh - 600px)",minHeight:"400px",border:"1px solid",borderColor:"divider",borderRadius:2,overflow:"hidden",bgcolor:"background.paper",boxShadow:3,animation:"fadeIn 0.3s ease-in","@keyframes fadeIn":{from:{opacity:0},to:{opacity:1}}},children:o.jsx("iframe",{src:"http://127.0.0.1:9000",style:{width:"100%",height:"100%",border:"none"},title:"CoInML Application",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]})};export{Pe as component};
