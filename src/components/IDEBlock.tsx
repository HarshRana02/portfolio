'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Sparkles, Code2, Download, Maximize2, Minimize2 } from 'lucide-react';

interface CodeSnippet {
  name: string;
  icon: string;
  badge: string;
  summary: string;
  code: string;
}

const snippets: CodeSnippet[] = [
  {
    name: 'rag_pipeline.py',
    icon: '📚',
    badge: 'Production RAG Pipeline',
    summary: 'Complete Vector RAG system with chunking, embeddings, Chroma vector store & grounded answering',
    code: `"""
=============================================================================
PROJECT: Complete Production RAG Pipeline (Retrieval-Augmented Generation)
AUTHOR: Harsh Rana | AI & ML Engineer (PwC India | ex-TCS)

HOW TO RUN THIS CODE IN VS CODE:
-----------------------------------------------------------------------------
1. Open your terminal in VS Code and create a virtual environment:
       python -m venv venv
       source venv/bin/activate  # Windows: .\\venv\\Scripts\\activate
2. Install the required dependencies:
       pip install langchain langchain-community langchain-core chromadb sentence-transformers
3. Save this file as 'rag_pipeline.py'.
4. Run the script:
       python rag_pipeline.py
=============================================================================
"""

import os
import json
from typing import List, Dict, Any

from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document

class ProductionRAGPipeline:
    """
    End-to-end RAG system: Ingestion -> Chunking -> Vector Store -> Similarity Search -> Grounded Synthesis.
    """
    def __init__(self, collection_name: str = "enterprise_knowledge"):
        print("[INIT] Loading HuggingFace local embedding model (all-MiniLM-L6-v2)...")
        # Uses local sentence-transformers (free, no API key required!)
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.collection_name = collection_name
        self.vector_store = None

    def ingest_documents(self, raw_texts: List[Dict[str, str]]) -> None:
        """
        Splits text into chunks and indexes them in ChromaDB.
        """
        documents = [
            Document(page_content=item["text"], metadata=item.get("metadata", {}))
            for item in raw_texts
        ]

        # 1. Text Chunking with overlap to preserve semantic context
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=300,
            chunk_overlap=50,
            separators=["\\n\\n", "\\n", " ", ""]
        )
        chunks = text_splitter.split_documents(documents)
        print(f"[CHUNKER] Split {len(documents)} document(s) into {len(chunks)} chunks.")

        # 2. Vector Store Ingestion (in-memory ChromaDB instance)
        self.vector_store = Chroma.from_documents(
            documents=chunks,
            embedding=self.embeddings,
            collection_name=self.collection_name
        )
        print("[VECTOR DB] Embeddings indexed successfully in ChromaDB.")

    def query(self, user_query: str, top_k: int = 2) -> Dict[str, Any]:
        """
        Performs semantic similarity retrieval and synthesizes a grounded answer.
        """
        if not self.vector_store:
            raise ValueError("Vector store is empty! Call ingest_documents() first.")

        print(f"\\n[RETRIEVER] Searching top {top_k} matches for: '{user_query}'")
        results = self.vector_store.similarity_search_with_score(user_query, k=top_k)

        context_snippets = []
        sources = []
        for doc, score in results:
            context_snippets.append(doc.page_content)
            sources.append(doc.metadata.get("source", "unknown"))

        # Grounded Answer Synthesis
        synthesized_answer = (
            f"Based on retrieved context (Sources: {', '.join(set(sources))}):\\n"
            + "\\n".join([f"- {c}" for c in context_snippets])
        )

        return {
            "query": user_query,
            "answer": synthesized_answer,
            "retrieved_chunks": context_snippets,
            "sources": sources
        }

# =============================================================================
# DEMO EXECUTION
# =============================================================================
if __name__ == "__main__":
    print("=" * 65)
    print("RUNNING ENTERPRISE RAG PIPELINE DEMO")
    print("=" * 65)

    sample_kb = [
        {
            "text": "PwC AI pipelines utilize KEDA for event-driven autoscaling of Azure Container Apps based on Redis queue backlogs.",
            "metadata": {"source": "pwc_architecture_doc.pdf", "topic": "cloud"}
        },
        {
            "text": "TraceLog Agent uses LangGraph state machines combined with CrewAI agents to isolate terminal anomalies and generate VS Code patches.",
            "metadata": {"source": "tracelog_spec.md", "topic": "agents"}
        },
        {
            "text": "Google Cloud Vertex AI Vector Search slashes query latency by over 50% compared to baseline in-memory indexes.",
            "metadata": {"source": "tcs_benchmark_report.pdf", "topic": "rag"}
        }
    ]

    rag = ProductionRAGPipeline()
    rag.ingest_documents(sample_kb)

    response = rag.query("How does PwC scale container jobs?")
    print("\\n[FINAL RAG RESPONSE]:")
    print(response["answer"])`
  },
  {
    name: 'ollama_chat.py',
    icon: '🦙',
    badge: 'Local Ollama Streaming Chatbot',
    summary: 'Streaming conversational chatbot with history buffer and zero cloud API fees',
    code: `"""
=============================================================================
PROJECT: Local Ollama Multi-Turn Streaming Chatbot
AUTHOR: Harsh Rana | AI & ML Engineer (PwC India | ex-TCS)

HOW TO RUN THIS CODE IN VS CODE:
-----------------------------------------------------------------------------
1. Download & Install Ollama (Free & Open Source):
       Visit: https://ollama.com
2. Pull your chosen local model in terminal:
       ollama pull llama3
       # Alternatively: ollama pull mistral  OR  ollama pull phi3
3. Install the official Ollama Python library:
       pip install ollama
4. Save this file as 'ollama_chat.py'.
5. Run the script:
       python ollama_chat.py
=============================================================================
"""

import sys
import ollama

SYSTEM_PROMPT = """You are an elite AI Engineering assistant specialized in:
1. Distributed AI Pipelines (KEDA, Redis, Azure Container Apps)
2. Autonomous Multi-Agent Workflows (LangGraph, CrewAI)
3. Retrieval-Augmented Generation (RAG) and Vector Databases
Provide concise, production-grade answers with code examples where relevant."""

class OllamaChatbot:
    """
    Manages multi-turn conversation state and streams tokens locally via Ollama.
    """
    def __init__(self, model_name: str = "llama3"):
        self.model_name = model_name
        self.history = [{"role": "system", "content": SYSTEM_PROMPT}]
        print(f"[OLLAMA] Initialized chat session using local model: {self.model_name}")

    def send_message(self, user_input: str) -> str:
        """
        Appends user input, streams response in real-time, and saves assistant turn.
        """
        self.history.append({"role": "user", "content": user_input})
        print(f"\\nAssistant: ", end="", flush=True)

        full_response = ""
        try:
            # Stream response chunks as they are generated by local GPU/CPU
            stream = ollama.chat(
                model=self.model_name,
                messages=self.history,
                stream=True,
                options={"temperature": 0.4}
            )

            for chunk in stream:
                token = chunk["message"]["content"]
                print(token, end="", flush=True)
                full_response += token

            print("\\n")
            self.history.append({"role": "assistant", "content": full_response})
            return full_response

        except Exception as e:
            error_msg = f"\\n[ERROR] Could not connect to Ollama: {e}\\nMake sure Ollama is installed and running ('ollama serve')."
            print(error_msg)
            return error_msg

# =============================================================================
# INTERACTIVE CLI LOOP
# =============================================================================
if __name__ == "__main__":
    print("=" * 65)
    print("LOCAL OLLAMA MULTI-TURN CHAT (Type '/exit' to quit, '/clear' to reset)")
    print("=" * 65)

    bot = OllamaChatbot(model_name="llama3")

    # Automated demonstration greeting
    bot.send_message("Explain how an event-driven AI pipeline scales with Redis and KEDA in 3 bullet points.")

    while True:
        try:
            user_msg = input("You: ").strip()
            if not user_msg:
                continue
            if user_msg.lower() in ["/exit", "exit", "quit"]:
                print("Exiting Ollama chat session. Goodbye!")
                break
            if user_msg.lower() == "/clear":
                bot.history = [{"role": "system", "content": SYSTEM_PROMPT}]
                print("[SYSTEM] Conversation history cleared.")
                continue

            bot.send_message(user_msg)
        except (KeyboardInterrupt, EOFError):
            print("\\nSession terminated.")
            break`
  },
  {
    name: 'autonomous_agent.py',
    icon: '⚡',
    badge: 'Autonomous ReAct Tool Agent',
    summary: 'Self-contained multi-tool agent implementing the Reasoning + Acting loop in pure Python',
    code: `"""
=============================================================================
PROJECT: Autonomous ReAct AI Agent with Dynamic Tool Execution
AUTHOR: Harsh Rana | AI & ML Engineer (PwC India | ex-TCS)

HOW TO RUN THIS CODE IN VS CODE:
-----------------------------------------------------------------------------
1. Open VS Code in any directory.
2. No external dependencies required! Runs on pure Python 3.9+.
3. Save this file as 'autonomous_agent.py'.
4. Run the script:
       python autonomous_agent.py
=============================================================================
"""

import math
import datetime
from typing import Callable, Dict, Any, List

# =============================================================================
# 1. TOOL DEFINITIONS
# =============================================================================

def calculate(expression: str) -> str:
    """Evaluates mathematical expressions safely."""
    try:
        allowed_names = {"math": math, "sqrt": math.sqrt, "pow": math.pow}
        result = eval(expression, {"__builtins__": {}}, allowed_names)
        return str(result)
    except Exception as err:
        return f"Calculation error: {err}"

def knowledge_lookup(query: str) -> str:
    """Simulated vector database / knowledge store lookup."""
    kb = {
        "keda": "KEDA is a Kubernetes-based Event Driven Autoscaler providing event metrics to scale container apps from 0 to N.",
        "langgraph": "LangGraph is a library for building stateful, multi-actor applications with LLMs using cyclical graphs.",
        "vertex ai": "Google Cloud Vertex AI Vector Search is a fully-managed vector database offering sub-millisecond similarity search.",
        "harsh rana": "Harsh Rana is an AI & ML Engineer at PwC India, ex-TCS, graduated TCET with 9.46 CGPI and Scopus publication."
    }
    for key, val in kb.items():
        if key in query.lower():
            return val
    return "No exact match found in knowledge base."

def get_current_time(timezone: str = "UTC") -> str:
    """Returns current system UTC and IST timestamps."""
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    now_ist = now_utc + datetime.timedelta(hours=5, minutes=30)
    return f"UTC: {now_utc.strftime('%Y-%m-%d %H:%M:%S')}, IST: {now_ist.strftime('%Y-%m-%d %H:%M:%S')}"

# =============================================================================
# 2. AUTONOMOUS REACT AGENT IMPLEMENTATION
# =============================================================================

class AutonomousAgent:
    """
    Implements the ReAct (Reasoning + Acting) decision cycle:
    Observation -> Thought -> Action -> Action Result -> Final Answer
    """
    def __init__(self):
        self.tools: Dict[str, Callable] = {
            "calculate": calculate,
            "knowledge_lookup": knowledge_lookup,
            "get_current_time": get_current_time,
        }

    def execute_plan(self, user_goal: str) -> Dict[str, Any]:
        print(f"\\n[AGENT GOAL]: {user_goal}")
        trace: List[Dict[str, str]] = []

        # Step 1: Decision Logic
        goal_lower = user_goal.lower()

        if any(w in goal_lower for w in ["calculate", "+", "-", "*", "/", "sqrt", "math"]):
            tool_name = "calculate"
            # Extract expression
            expr = "".join([c for c in user_goal if c in "0123456789+-*/.() "]).strip()
            tool_arg = expr or "42 * 2"
            thought = f"User asked for mathematical computation. Routing expression '{tool_arg}' to calculator."
        elif any(w in goal_lower for w in ["time", "clock", "date", "now"]):
            tool_name = "get_current_time"
            tool_arg = "IST"
            thought = "User asked for temporal information. Triggering system clock tool."
        else:
            tool_name = "knowledge_lookup"
            tool_arg = user_goal
            thought = "User asked for factual information. Routing query to local knowledge store."

        print(f"  [THOUGHT] {thought}")
        print(f"  [ACTION]  Invoking tool '{tool_name}' with parameter: '{tool_arg}'")

        # Step 2: Tool Execution
        tool_fn = self.tools[tool_name]
        observation = tool_fn(tool_arg)
        print(f"  [OBSERVE] Result: {observation}")

        # Step 3: Synthesis
        final_answer = f"Task completed successfully: {observation}"
        print(f"  [ANSWER]  {final_answer}\\n")

        return {
            "goal": user_goal,
            "thought": thought,
            "action": tool_name,
            "observation": observation,
            "final_answer": final_answer
        }

# =============================================================================
# DEMO EXECUTION
# =============================================================================
if __name__ == "__main__":
    print("=" * 65)
    print("RUNNING AUTONOMOUS REACT TOOL AGENT DEMO")
    print("=" * 65)

    agent = AutonomousAgent()

    # Query 1: Mathematical reasoning
    agent.execute_plan("Calculate sqrt(144) * 5 + 40")

    # Query 2: Knowledge retrieval
    agent.execute_plan("What is KEDA and how does it relate to container autoscaling?")

    # Query 3: Real-time telemetry
    agent.execute_plan("What is the current time in IST?")`
  }
];

export function IDEBlock() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const lines = snippets[activeTab].code.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border border-sky-200/90 bg-white shadow-sky-card backdrop-blur-xl relative z-10 group"
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#f0f9ff] border-b border-sky-100">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#f87171] border border-[#ef4444]" />
          <div className="w-3 h-3 rounded-full bg-[#fbbf24] border border-[#f59e0b]" />
          <div className="w-3 h-3 rounded-full bg-[#4ade80] border border-[#22c55e]" />
          <span className="ml-2 text-xs font-mono text-slate-500 hidden sm:inline font-semibold">
            runnable-python-studio
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200/80 flex items-center gap-1 font-semibold">
            <Sparkles className="w-3 h-3 text-sky-600" />
            {snippets[activeTab].badge}
          </span>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg hover:bg-sky-100/70 text-slate-500 hover:text-sky-700 transition-colors hidden sm:inline-flex"
            title={isExpanded ? "Collapse View" : "Expand Full Code"}
            aria-label="Toggle Expand"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-mono text-xs font-semibold shadow-sm transition-all"
            title="Copy Full Code for VS Code"
            aria-label="Copy full code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs List */}
      <div className="flex items-center bg-[#f8fafc] border-b border-sky-100 overflow-x-auto scrollbar-none px-2 pt-1 gap-1">
        {snippets.map((snip, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={snip.name}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-3.5 py-2.5 text-xs font-mono rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                isActive
                  ? 'bg-white text-sky-700 border-sky-600 font-bold shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 border-transparent hover:bg-white/60'
              }`}
            >
              <span>{snip.icon}</span>
              <span>{snip.name}</span>
            </button>
          );
        })}
      </div>

      {/* Summary Banner */}
      <div className="px-4 py-2 bg-sky-50/60 border-b border-sky-100/80 flex items-center justify-between text-[11px] text-sky-900 font-sans">
        <span className="font-medium truncate">{snippets[activeTab].summary}</span>
        <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-2">Ready to copy & run in VS Code</span>
      </div>

      {/* Code Display Area */}
      <div className={`p-4 sm:p-5 overflow-x-auto text-xs font-mono leading-relaxed bg-white scrollbar-thin scrollbar-thumb-sky-100 transition-all ${
        isExpanded ? 'max-h-[650px]' : 'max-h-[420px]'
      }`}>
        <pre className="table w-full">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row hover:bg-sky-50/30 transition-colors">
              <span className="table-cell select-none text-right pr-4 text-slate-400 text-[11px] w-9">
                {idx + 1}
              </span>
              <span className="table-cell text-slate-800 font-mono">
                {renderHighlightedText(line)}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* Terminal Footer status */}
      <div className="px-4 py-2.5 bg-[#f8fafc] border-t border-sky-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-emerald-600 font-semibold gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            Verified Runnable
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-medium">Python 3.9+</span>
        </div>
        <div className="text-slate-500 hidden sm:block">
          Step-by-step block comment setup guide included
        </div>
      </div>
    </motion.div>
  );
}

function renderHighlightedText(line: string) {
  const trimmed = line.trim();
  // Docstrings and Comments
  if (trimmed.startsWith('"""') || trimmed.startsWith('*') || trimmed.startsWith('=') || trimmed.startsWith('-') || trimmed.startsWith('#')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  if (line.includes('"""')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // Keywords
  if (line.includes('class ') || line.includes('def ') || line.includes('import ') || line.includes('from ') || line.includes('return ') || line.includes('if ') || line.includes('elif ') || line.includes('else:') || line.includes('for ') || line.includes('while ') || line.includes('try:') || line.includes('except ') || line.includes('raise ') || line.includes('with ')) {
    return (
      <span>
        {line.split(/(\b(?:class|def|import|from|return|if|elif|else|for|while|try|except|raise|with|self|True|False|None)\b)/g).map((part, i) => {
          if (['class', 'def', 'import', 'from', 'return', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'raise', 'with'].includes(part)) {
            return <span key={i} className="text-sky-600 font-bold">{part}</span>;
          }
          if (part === 'self') {
            return <span key={i} className="text-blue-700 italic font-semibold">{part}</span>;
          }
          if (['True', 'False', 'None'].includes(part)) {
            return <span key={i} className="text-purple-600 font-bold">{part}</span>;
          }
          return <span key={i}>{highlightStrings(part)}</span>;
        })}
      </span>
    );
  }
  return highlightStrings(line);
}

function highlightStrings(str: string) {
  const parts = str.split(/(".*?"|'.*?'|\b\d+\b)/g);
  return (
    <>
      {parts.map((p, i) => {
        if ((p.startsWith('"') && p.endsWith('"')) || (p.startsWith("'") && p.endsWith("'"))) {
          return <span key={i} className="text-emerald-700 font-medium">{p}</span>;
        }
        if (/^\d+$/.test(p)) {
          return <span key={i} className="text-indigo-600 font-bold">{p}</span>;
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}
