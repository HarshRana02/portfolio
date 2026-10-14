'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Sparkles,
  Terminal,
  Cpu,
  CheckCircle2,
  RefreshCw,
  Zap,
  Copy,
  Check,
  CornerDownLeft,
  Search,
  Database,
  Activity,
  Shield,
  Layers,
  ArrowUpRight,
  Bot
} from 'lucide-react';

interface AgentMission {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  icon: string;
  prompt: string;
  thought: string;
  toolName: string;
  toolArgs: string;
  latencyMs: number;
  outputSummary: string;
  outputPayload: string;
  metricBadge: string;
  confidence: number;
}

const missions: AgentMission[] = [
  {
    id: 'keda-scaling',
    title: 'KEDA Redis Lag Remediation',
    tag: 'PwC India • Event-Driven Autoscaler',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: '⚡',
    prompt: 'Analyze Redis stream consumer lag on "pwc:pan-india:transcripts:stream" and autoscale Azure Container Jobs.',
    thought: 'LangGraph orchestrator isolated consumer backlog starvation (lag = 4,812 messages > threshold 1,000). Triggering KEDA autoscaler with dynamic replica expansion.',
    toolName: 'keda_autoscaler.dispatch_scaling_policy',
    toolArgs: '{"stream": "pwc:pan-india:transcripts:stream", "min_replicas": 4, "max_replicas": 32, "batch_size": 50}',
    latencyMs: 24,
    outputSummary: 'Autoscaler scaled target container jobs from 4 to 18 replicas. Redis queue cleared in 24ms with zero message drop.',
    outputPayload: `# keda_scaler_patch.yaml (Synthesized by TraceLog Agent)
apiVersion: keda.sh/v1alpha1
kind: ScaledJob
metadata:
  name: transcript-nlp-consumer-job
spec:
  jobTargetRef:
    parallelism: 18 # Auto-adjusted from 4
  triggers:
  - type: redis-streams
    metadata:
      stream: pwc:pan-india:transcripts:stream
      consumerGroup: nlp-workers
      targetLag: "250" # Dynamic backpressure threshold`,
    metricBadge: 'Consumer Lag Cleared: -100%',
    confidence: 99.4,
  },
  {
    id: 'rag-search',
    title: 'Low-Latency Vector RAG Retrieval',
    tag: 'TCS • GCP Vertex AI Vector Search',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: '🔍',
    prompt: 'Query enterprise knowledge base for "VNet-enclosed private LLM endpoints with Azure Private Link compliance".',
    thought: 'Query received. Converting text to 768-dim normalized embedding. Bypassing baseline FAISS index to query GCP Vertex AI Vector Search endpoint.',
    toolName: 'vertex_ai_search.similarity_query',
    toolArgs: '{"embedding_dim": 768, "top_k": 3, "metric": "COSINE_DISTANCE", "private_endpoint": true}',
    latencyMs: 38,
    outputSummary: 'Retrieved 3 grounded enterprise architectural records in 38ms (slashed latency by 59% vs 140ms baseline).',
    outputPayload: `/* Synthesized Grounded Response */
{
  "query": "VNet-enclosed private LLM endpoints with Azure Private Link",
  "status": "GROUNDED_SUCCESS",
  "latency_ms": 38.2,
  "sources_retrieved": [
    {
      "source": "tcs_azure_openai_vnet_arch.pdf",
      "similarity_score": 0.962,
      "snippet": "All GPT-4.1 inference calls route strictly through Azure Private Endpoints inside tenant VNet. Public Internet egress is fully disabled."
    },
    {
      "source": "vertex_ai_migration_benchmark.pdf",
      "similarity_score": 0.918,
      "snippet": "Vertex AI Vector Search index reduces P99 lookup latency from 140ms to 58ms across high-dimensional semantic spaces."
    }
  ]
}`,
    metricBadge: 'Latency Cut: -59% (140ms → 38ms)',
    confidence: 98.7,
  },
  {
    id: 'cosmos-audit',
    title: 'Cosmos DB Immutable Compliance Audit',
    tag: 'PwC India • Zero-Trust Compliance',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: '🛡️',
    prompt: 'Validate incoming government compliance audit record and generate cryptographic SHA-256 seal for Cosmos DB.',
    thought: 'Validating payload schema. Record lacks mandatory partition key "/department". Injecting automatic partition router and generating immutable cryptographic hash.',
    toolName: 'cosmos_compliance.enforce_immutable_audit',
    toolArgs: '{"partition_key": "/department", "fallback": "regulatory_affairs", "algorithm": "SHA256"}',
    latencyMs: 19,
    outputSummary: 'Immutable partition key mapped to "/regulatory_affairs" and SHA-256 hash verified. Committed to Cosmos DB audit vault.',
    outputPayload: `# Cosmos DB Immutable Audit Record (Generated in 19ms)
{
  "record_id": "aud_7a9f810e-20261013",
  "department": "regulatory_affairs",
  "audit_timestamp": "2026-10-13T18:04:12.891Z",
  "status": "COMPLIANCE_VERIFIED",
  "payload_signature": "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "storage_tier": "Azure Cosmos DB Global Distributed (Strong Consistency)"
}`,
    metricBadge: 'Compliance Audit: 100% Immutable',
    confidence: 99.8,
  },
  {
    id: 'tracelog-agent',
    title: 'Self-Healing TraceLog AST Debugger',
    tag: 'Autonomous AI Companion • LangGraph + CrewAI',
    tagColor: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: '🤖',
    prompt: 'Intercept unhandled IndexOutOfBounds exception in microservice pipeline and generate instant VS Code AST patch.',
    thought: 'TraceLog Agent intercepted terminal stderr stream. CrewAI AST parser localized index overflow in array iterator at worker.py:42. Synthesizing boundary guard.',
    toolName: 'tracelog_ast.synthesize_inline_patch',
    toolArgs: '{"file": "worker.py", "line": 42, "strategy": "defensive_boundary_guard"}',
    latencyMs: 29,
    outputSummary: 'Synthesized defensive slice boundary check. Unit tests passed with zero regression across 4 test suites.',
    outputPayload: `--- a/src/worker.py
+++ b/src/worker.py
@@ -40,4 +40,7 @@ def process_transcripts(batch: List[Transcript]):
-    for i in range(len(batch) + 1): # BUG: Off-by-one boundary fault
-        primary_item = batch[i]
+    # TraceLog Agent Automated Fix: Guard against index overflow
+    for idx, item in enumerate(batch):
+        primary_item = item
+        process_chunk(primary_item)`,
    metricBadge: 'Patch Synthesized & Validated in 29ms',
    confidence: 99.1,
  },
];

interface RagBenchmarkPreset {
  query: string;
  category: string;
  faissLatency: number;
  vertexLatency: number;
  speedup: string;
  topResult: string;
  source: string;
}

const ragPresets: RagBenchmarkPreset[] = [
  {
    query: 'How does KEDA autoscale Azure Container Jobs based on Redis stream lag?',
    category: 'Cloud & Event-Driven AI',
    faissLatency: 142,
    vertexLatency: 48,
    speedup: '66% faster',
    topResult: 'KEDA actively queries Redis consumer group lag metrics. When pending items exceed threshold, KEDA signals Azure Container Jobs to autoscale replica pods.',
    source: 'PwC Pan-India Architecture Spec (2026)',
  },
  {
    query: 'How did Vertex AI Vector Search achieve a 50% latency cut compared to FAISS?',
    category: 'Vector Database & RAG',
    faissLatency: 155,
    vertexLatency: 58,
    speedup: '62% faster',
    topResult: 'Migrated from in-memory CPU-bound FAISS indexes to GCP Vertex AI Vector Search with ScaNN (Score-aware Quantization) sub-millisecond tree search.',
    source: 'TCS Vertex AI Benchmark Report (2025)',
  },
  {
    query: 'What security model protects Azure OpenAI private endpoints from public egress?',
    category: 'Enterprise AI Security',
    faissLatency: 138,
    vertexLatency: 42,
    speedup: '69% faster',
    topResult: 'Azure Private Link injects dedicated private IP addresses into the enterprise Virtual Network (VNet), routing all GPT-4.1 traffic offline with 0 public exposure.',
    source: 'Enterprise Security Architecture Dossier',
  },
];

export function AIAgentPlayground() {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag'>('agents');

  // Agent Sandbox State
  const [selectedMission, setSelectedMission] = useState<AgentMission>(missions[0]);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [agentStep, setAgentStep] = useState<number>(3); // 0=idle/prompt, 1=thinking, 2=tool calling, 3=complete
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simSpeed, setSimSpeed] = useState<'normal' | 'fast'>('normal');
  const [copiedPayload, setCopiedPayload] = useState<boolean>(false);

  // RAG Benchmark State
  const [selectedRag, setSelectedRag] = useState<RagBenchmarkPreset>(ragPresets[0]);
  const [ragProgress, setRagProgress] = useState<number>(100);
  const [isBenchmarking, setIsBenchmarking] = useState<boolean>(false);

  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = () => {
    timeoutRefs.current.forEach((t) => clearTimeout(t));
    timeoutRefs.current = [];
  };

  useEffect(() => {
    return () => clearAllTimeouts();
  }, []);

  const triggerAgentRun = (mission: AgentMission) => {
    clearAllTimeouts();
    setSelectedMission(mission);
    setCustomPrompt('');
    setIsSimulating(true);
    setAgentStep(0);

    const step1Time = simSpeed === 'fast' ? 250 : 500;
    const step2Time = simSpeed === 'fast' ? 650 : 1200;
    const step3Time = simSpeed === 'fast' ? 1000 : 1900;

    const t1 = setTimeout(() => setAgentStep(1), step1Time);
    const t2 = setTimeout(() => setAgentStep(2), step2Time);
    const t3 = setTimeout(() => {
      setAgentStep(3);
      setIsSimulating(false);
    }, step3Time);

    timeoutRefs.current.push(t1, t2, t3);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    // Create a dynamic mission based on user prompt
    const dynamicMission: AgentMission = {
      id: 'custom-' + Date.now(),
      title: 'Custom User Request',
      tag: 'Dynamic ReAct Loop Execution',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: '✨',
      prompt: customPrompt,
      thought: `Parsing user request: "${customPrompt}". Identifying required tools and routing to LangGraph multi-agent decision cycle.`,
      toolName: 'autonomous_orchestrator.execute_task',
      toolArgs: JSON.stringify({ query: customPrompt, mode: 'enterprise_production', max_iterations: 3 }),
      latencyMs: 31,
      outputSummary: `Task formulated and executed autonomously in 31ms. Synthesized solution matches Harsh's enterprise architectural standards.`,
      outputPayload: `# Autonomous Agent Execution Trace
{
  "user_prompt": "${customPrompt.replace(/"/g, '\\"')}",
  "reasoning_model": "LangGraph StateGraph + CrewAI Specialist Crew",
  "status": "TASK_COMPLETED",
  "execution_metrics": {
    "latency": "31ms",
    "token_efficiency": "98.4%",
    "tools_utilized": ["vector_retriever", "ast_evaluator", "compliance_gate"]
  },
  "action_resolution": "The system successfully decomposed and answered your inquiry utilizing production RAG, local LLM orchestration, and resilient microservices."
}`,
      metricBadge: 'Dynamic Task Resolved (31ms)',
      confidence: 99.2,
    };

    triggerAgentRun(dynamicMission);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedMission.outputPayload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  const runBenchmarkTest = (preset: RagBenchmarkPreset) => {
    setSelectedRag(preset);
    setIsBenchmarking(true);
    setRagProgress(0);

    const interval = setInterval(() => {
      setRagProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBenchmarking(false);
          return 100;
        }
        return prev + 25;
      });
    }, 80);
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-8 bg-offwhite-100 relative border-t border-sky-100 selection:bg-sky-500/20">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-sky-200/25 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 font-mono text-xs mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold">Interactive Agent Sandbox</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">Live Architecture Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Autonomous AI Systems in Action
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Experience Harsh&apos;s real-world AI architectures hands-on: run multi-agent incident remediations (LangGraph + CrewAI) or benchmark GCP Vertex AI low-latency vector search.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <button
              onClick={() => setActiveTab('agents')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'agents'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Multi-Agent ReAct Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('rag')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'rag'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Vector Search Latency Benchmark</span>
            </button>
          </div>
        </motion.div>

        {/* TAB 1: MULTI-AGENT REACT ENGINE */}
        {activeTab === 'agents' && (
          <div className="space-y-6">
            {/* Quick Mission Preset Pills */}
            <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-7 shadow-sky-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-sky-100">
                <div>
                  <div className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Choose an Incident Mission or Enter Custom Prompt:</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a pre-built production scenario to see the autonomous agent detect, reason, call tools, and resolve live.
                  </p>
                </div>

                {/* Speed Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">Speed:</span>
                  <button
                    onClick={() => setSimSpeed('normal')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                      simSpeed === 'normal'
                        ? 'bg-sky-100 text-sky-800 border border-sky-300 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    1x Normal
                  </button>
                  <button
                    onClick={() => setSimSpeed('fast')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                      simSpeed === 'fast'
                        ? 'bg-sky-100 text-sky-800 border border-sky-300 font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    ⚡ Fast (2x)
                  </button>
                </div>
              </div>

              {/* Mission Preset Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {missions.map((m) => {
                  const isSelected = selectedMission.id === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => triggerAgentRun(m)}
                      disabled={isSimulating}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 relative group ${
                        isSelected
                          ? 'bg-sky-50/80 border-sky-400 shadow-sm shadow-sky-500/10'
                          : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg">{m.icon}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${m.tagColor}`}>
                          {m.latencyMs}ms
                        </span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 group-hover:text-sky-700 transition-colors">
                        {m.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-mono">
                        {m.tag}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Prompt Interactive Input */}
              <form onSubmit={handleCustomSubmit} className="mt-4 pt-4 border-t border-sky-100">
                <div className="flex items-center gap-2 bg-offwhite-100 border border-sky-200 rounded-2xl p-1.5 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200 transition-all">
                  <div className="pl-3 text-sky-600">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Or type your own challenge, e.g. 'Scale Azure Container Apps when CPU > 85%'..."
                    className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none px-2 py-1.5 font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isSimulating || !customPrompt.trim()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold text-xs shadow-sm shadow-sky-500/20 transition-all disabled:opacity-50 shrink-0"
                  >
                    <span>Execute</span>
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* LIVE AGENT EXECUTION MONITOR */}
            <div className="bg-white rounded-3xl border border-sky-200 p-6 sm:p-8 shadow-sky-card">
              {/* Header Status Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sky-100 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-base">
                        {selectedMission.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold">
                        {isSimulating ? 'EXECUTING' : 'RESOLVED'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      Target Engine: LangGraph State Machine + CrewAI Specialized Toolset
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Confidence Score</div>
                    <div className="text-xs font-mono font-bold text-sky-700">{selectedMission.confidence}% Grounded</div>
                  </div>
                  <button
                    onClick={() => triggerAgentRun(selectedMission)}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-sky-200 hover:bg-sky-50 text-sky-700 text-xs font-semibold font-mono transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                    <span>Re-Run</span>
                  </button>
                </div>
              </div>

              {/* 4-Step ReAct State Machine Progression */}
              <div className="py-6 border-b border-sky-100">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {[
                    { step: 0, label: '1. Ingestion', desc: 'Observe event & query intent', icon: Search },
                    { step: 1, label: '2. Reasoning', desc: 'LangGraph State Decomposition', icon: Cpu },
                    { step: 2, label: '3. Tool Action', desc: 'Dispatch autonomous function', icon: Zap },
                    { step: 3, label: '4. Resolution', desc: 'Grounded output & verified AST', icon: CheckCircle2 },
                  ].map((s) => {
                    const isPassed = agentStep >= s.step;
                    const isCurrent = agentStep === s.step && isSimulating;

                    return (
                      <div
                        key={s.step}
                        className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                          isCurrent
                            ? 'bg-sky-50 border-sky-400 shadow-sm shadow-sky-500/10 scale-[1.02]'
                            : isPassed
                            ? 'bg-white border-sky-200'
                            : 'bg-offwhite-100/50 border-slate-200 opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isCurrent
                              ? 'bg-sky-600 text-white font-bold animate-pulse'
                              : isPassed
                              ? 'bg-sky-100 text-sky-800 font-bold'
                              : 'bg-slate-100 text-slate-500'
                          }`}>
                            Phase 0{s.step + 1}
                          </span>
                          {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />}
                        </div>
                        <div className="font-bold text-xs text-slate-900">{s.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{s.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Streaming Execution Log Terminal */}
              <div className="grid lg:grid-cols-12 gap-6 pt-6">
                {/* Left Column: Thought & Tool Call */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Observation / Prompt Box */}
                  <div className="p-4 rounded-2xl bg-offwhite-100 border border-sky-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider">
                      Input Task / Telemetry Trigger
                    </span>
                    <p className="text-xs text-slate-800 font-mono mt-1.5 leading-relaxed bg-white p-2.5 rounded-xl border border-sky-100">
                      &gt; {selectedMission.prompt}
                    </p>
                  </div>

                  {/* Agent Internal Reasoning (Thought) */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    agentStep >= 1 ? 'bg-sky-50/70 border-sky-300' : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-sky-600" />
                        <span>ReAct Thought Process</span>
                      </span>
                      {agentStep === 1 && isSimulating && (
                        <span className="text-[10px] font-mono text-sky-600 animate-pulse">Decomposing AST...</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      {agentStep >= 1 ? selectedMission.thought : 'Waiting for orchestrator trigger...'}
                    </p>
                  </div>

                  {/* Tool Dispatch Call */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    agentStep >= 2 ? 'bg-white border-sky-300 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-600 uppercase font-bold tracking-wider flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>Invoking Autonomous Tool</span>
                      </span>
                      {agentStep >= 2 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          {selectedMission.latencyMs}ms Latency
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs text-sky-700 font-bold">
                      {agentStep >= 2 ? selectedMission.toolName : 'idle'}
                    </div>
                    <pre className="mt-2 text-[11px] font-mono text-slate-600 bg-offwhite-100 p-2.5 rounded-xl border border-slate-200 overflow-x-auto">
                      {agentStep >= 2 ? selectedMission.toolArgs : '// Awaiting parameter payload'}
                    </pre>
                  </div>
                </div>

                {/* Right Column: Code Patch / Output Synthesis */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center justify-between p-3.5 bg-slate-900 rounded-t-2xl border border-slate-800 text-slate-300">
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="font-semibold text-slate-200">execution_output.diff</span>
                      <span className="text-slate-500">|</span>
                      <span className="text-sky-400">{selectedMission.metricBadge}</span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all font-mono"
                    >
                      {copiedPayload ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Trace</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-b-2xl border-x border-b border-slate-800 flex-1 font-mono text-xs text-slate-200 overflow-x-auto min-h-[260px] flex flex-col justify-between">
                    <div>
                      {agentStep >= 3 ? (
                        <pre className="text-sky-300 leading-relaxed font-mono whitespace-pre-wrap text-[11px]">
                          {selectedMission.outputPayload}
                        </pre>
                      ) : (
                        <div className="h-44 flex flex-col items-center justify-center text-slate-500 font-mono text-xs gap-3">
                          <RefreshCw className="w-6 h-6 animate-spin text-sky-500" />
                          <span>Agent State Machine Executing in Real-Time...</span>
                        </div>
                      )}
                    </div>

                    {agentStep >= 3 && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between font-sans">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {selectedMission.outputSummary}
                        </span>
                        <span className="font-mono text-slate-500 text-[10px]">Zero Egress • VNet Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE RAG VECTOR BENCHMARK */}
        {activeTab === 'rag' && (
          <div className="bg-white rounded-3xl border border-sky-200/80 p-6 sm:p-9 shadow-sky-card">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-sky-100">
                <div>
                  <div className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-sky-600" />
                    <span>Real-World Benchmark: GCP Vertex AI Vector Search vs Baseline FAISS</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    At TCS, Harsh engineered a migration from in-memory FAISS indexes to GCP Vertex AI Vector Search with Streamlit + LangChain, cutting latency by 50%+.
                  </p>
                </div>
              </div>

              {/* Preset Query Buttons */}
              <div className="my-6">
                <span className="text-xs font-mono text-slate-600 font-semibold mb-2 block">
                  Select Enterprise Query to Benchmark:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ragPresets.map((preset, idx) => {
                    const isSelected = selectedRag.query === preset.query;
                    return (
                      <button
                        key={idx}
                        onClick={() => runBenchmarkTest(preset)}
                        className={`text-left p-3.5 rounded-2xl border transition-all ${
                          isSelected
                            ? 'bg-sky-50 border-sky-400 shadow-sm shadow-sky-500/10'
                            : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/30'
                        }`}
                      >
                        <div className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold w-fit mb-2">
                          {preset.category}
                        </div>
                        <div className="text-xs font-bold text-slate-900 line-clamp-2">
                          {preset.query}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Visual Comparison Bars */}
              <div className="p-6 rounded-2xl bg-offwhite-100 border border-sky-100 space-y-6 my-6">
                {/* Baseline FAISS Bar */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-slate-600 font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                      Standard FAISS In-Memory Baseline (CPU Bound)
                    </span>
                    <span className="text-slate-700 font-bold">{selectedRag.faissLatency}ms</span>
                  </div>
                  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedRag.faissLatency / 160) * 100}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-slate-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Harsh's Vertex AI Bar */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-sky-800 font-bold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-sky-600" />
                      Harsh&apos;s GCP Vertex AI Vector Search Pipeline
                    </span>
                    <span className="text-sky-700 font-bold">
                      {selectedRag.vertexLatency}ms ({selectedRag.speedup})
                    </span>
                  </div>
                  <div className="w-full h-4 bg-sky-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(selectedRag.vertexLatency / 160) * 100}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Retrieved Semantic Chunk Card */}
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200">
                <div className="flex items-center justify-between text-xs font-mono text-sky-800 font-bold mb-2">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-sky-600" />
                    Top Retrieved Semantic Chunk (Score: 0.96)
                  </span>
                  <span className="text-slate-500 text-[11px] font-medium font-sans">
                    Source: {selectedRag.source}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans bg-white p-3.5 rounded-xl border border-sky-100">
                  &ldquo;{selectedRag.topResult}&rdquo;
                </p>
              </div>

              {/* 3 Metrics Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-white border border-sky-200 text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-sky-700 font-mono">50%+</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">Latency Cut</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">ScaNN Tree Quantization</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-sky-200 text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-sky-700 font-mono">0 Egress</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">Azure Private Link</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Air-gapped enterprise VNet</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-sky-200 text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-sky-700 font-mono">100%</div>
                  <div className="text-xs text-slate-600 mt-1 font-semibold">Grounding Reliability</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Zero Hallucination Guardrails</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
