"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert,
  ShieldCheck, 
  Cpu, 
  Calculator, 
  BookOpen, 
  Clock, 
  Layers 
} from "lucide-react";

// 1. Web Services Maintenance & Development
export function WebMaintWidget() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scores, setScores] = useState({ perf: 0, access: 0, bp: 0, seo: 0 });
  const [url, setUrl] = useState("https://my-local-ap-business.com");

  const runAudit = () => {
    setRunning(true);
    setProgress(0);
    setScores({ perf: 0, access: 0, bp: 0, seo: 0 });
  };

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScores({ perf: 98, access: 95, bp: 100, seo: 98 });
          setRunning(false);
          return 100;
        }
        return prev + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Speed & Quality Audit Simulator</h4>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={running}
          className="flex-grow px-3.5 py-2 rounded-xl border border-border bg-slate-50 dark:bg-slate-950 text-foreground text-xs focus:outline-none focus:border-primary disabled:opacity-50"
        />
        <button 
          onClick={runAudit}
          disabled={running}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white flex items-center gap-1.5 transition-colors disabled:opacity-50"
        >
          {running ? <RefreshCw size={13} className="animate-spin" /> : <Play size={13} />}
          <span>Audit</span>
        </button>
      </div>

      {running && (
        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div className="bg-primary h-2 transition-all duration-100" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {scores.perf > 0 && (
        <div className="grid grid-cols-4 gap-2.5 mt-2 text-center animate-in zoom-in-95 duration-350">
          {[
            { label: "Performance", val: scores.perf, col: "text-emerald-500" },
            { label: "Accessibility", val: scores.access, col: "text-emerald-500" },
            { label: "Best Practices", val: scores.bp, col: "text-emerald-500" },
            { label: "SEO", val: scores.seo, col: "text-emerald-500" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 bg-slate-50 dark:bg-slate-950 p-2 rounded-xl border border-border/40">
              <div className={`text-base font-extrabold ${item.col}`}>{item.val}</div>
              <span className="text-[9px] text-muted leading-tight font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 2. AI & ML Development
export function AiMlWidget() {
  const [text, setText] = useState("I love Beyond the Timeline! Their student developers build high-performance React code.");
  const [result, setResult] = useState<{ sentiment: string; score: number; color: string } | null>(null);

  const analyzeSentiment = () => {
    const lowercase = text.toLowerCase();
    let score = 0.5;
    
    // Simple mock classification
    const positiveWords = ["love", "great", "excellent", "fast", "premium", "best", "good", "happy", "helpful"];
    const negativeWords = ["bad", "slow", "broken", "worst", "hate", "crash", "bug", "sad", "fail"];

    positiveWords.forEach(w => { if (lowercase.includes(w)) score += 0.15; });
    negativeWords.forEach(w => { if (lowercase.includes(w)) score -= 0.15; });
    
    score = Math.max(0.05, Math.min(0.95, score));
    
    let sentiment = "Neutral 😐";
    let color = "text-yellow-500 bg-yellow-500/10";
    if (score > 0.6) {
      sentiment = "Positive 😊";
      color = "text-emerald-500 bg-emerald-500/10";
    } else if (score < 0.4) {
      sentiment = "Negative 😠";
      color = "text-rose-500 bg-rose-500/10";
    }

    setResult({ sentiment, score: Math.round(score * 100), color });
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Sentiment Classifier AI Sandbox</h4>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={2}
        className="w-full p-3 rounded-xl border border-border bg-slate-50 dark:bg-slate-950 text-foreground text-xs focus:outline-none focus:border-primary resize-none"
        placeholder="Type comments to classify sentiment..."
      />
      <button 
        onClick={analyzeSentiment}
        className="w-full py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-1.5 transition-all"
      >
        <Sparkles size={13} />
        <span>Run Real-time Classifier</span>
      </button>

      {result && (
        <div className={`p-3 rounded-xl flex items-center justify-between border border-border/20 ${result.color} animate-in fade-in duration-300`}>
          <span className="text-xs font-bold">{result.sentiment}</span>
          <span className="text-xs font-extrabold">Confidence: {result.score}%</span>
        </div>
      )}
    </div>
  );
}

// 3. UI/UX Design
export function UiUxWidget() {
  const [theme, setTheme] = useState("neon");
  const [style, setStyle] = useState("glass");
  const [size, setSize] = useState("normal");

  const getStyleClass = () => {
    let base = "p-4 rounded-2xl transition-all duration-300 border ";
    if (style === "glass") {
      base += "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-white/30 dark:border-slate-800/30 shadow-md";
    } else if (style === "flat") {
      base += "bg-slate-100 dark:bg-slate-950 border-transparent shadow-none";
    } else {
      base += "bg-white dark:bg-slate-900 border-primary/50 shadow-lg shadow-primary/5";
    }
    return base;
  };

  const getThemeClass = () => {
    if (theme === "neon") return "from-indigo-500 to-cyan-400";
    if (theme === "emerald") return "from-emerald-500 to-teal-400";
    return "from-pink-500 to-purple-600";
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">UI Layout Configurator</h4>
      
      {/* Controls */}
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-muted uppercase">Palette</span>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="p-1.5 rounded-lg border border-border bg-slate-50 dark:bg-slate-950 text-foreground">
            <option value="neon">Indigo Cyber</option>
            <option value="emerald">Emerald Sea</option>
            <option value="pink">Pink Aura</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-muted uppercase">Card Style</span>
          <select value={style} onChange={(e) => setStyle(e.target.value)} className="p-1.5 rounded-lg border border-border bg-slate-50 dark:bg-slate-950 text-foreground">
            <option value="glass">Glassmorphism</option>
            <option value="flat">Minimal Flat</option>
            <option value="bordered">Rich Borders</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-muted uppercase">Padding</span>
          <select value={size} onChange={(e) => setSize(e.target.value)} className="p-1.5 rounded-lg border border-border bg-slate-50 dark:bg-slate-950 text-foreground">
            <option value="small">Compact</option>
            <option value="normal">Standard</option>
            <option value="large">Spacious</option>
          </select>
        </div>
      </div>

      {/* Live Preview */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-border/40 flex items-center justify-center min-h-[110px]">
        <div className={getStyleClass()}>
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${getThemeClass()} flex items-center justify-center text-white mb-2 shadow-sm`}>
            <Sparkles size={16} />
          </div>
          <h5 className={`font-bold text-foreground leading-tight ${size === "small" ? "text-xs" : size === "large" ? "text-base" : "text-sm"}`}>
            Custom Prototype Card
          </h5>
          <p className="text-[10px] text-muted mt-1 leading-normal max-w-[200px]">
            Live layout adjusting variables in real-time.
          </p>
        </div>
      </div>
    </div>
  );
}

// 4. Video & Photo Editing
export function VideoPhotoWidget() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [blur, setBlur] = useState(0);

  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setBlur(0);
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Color Grade / Image Grading Sandbox</h4>
      
      {/* Dynamic Filter Canvas */}
      <div className="relative h-28 rounded-xl overflow-hidden bg-slate-900 border border-border/50 flex items-center justify-center">
        {/* Abstract design elements that get filtered */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-indigo-600 to-emerald-400 transition-all duration-100"
          style={{
            filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px)`
          }}
        />
        <div className="relative z-10 text-center select-none text-white pointer-events-none drop-shadow-md">
          <span className="text-[10px] font-black uppercase tracking-widest bg-slate-950/80 px-3 py-1 rounded-full border border-white/20">
            Grading Canvas
          </span>
        </div>
      </div>

      {/* Sliders */}
      <div className="flex flex-col gap-2 text-[10px]">
        <div className="flex justify-between items-center text-muted">
          <span>Brightness: {brightness}%</span>
          <input type="range" min="50" max="150" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-2/3 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
        <div className="flex justify-between items-center text-muted">
          <span>Contrast: {contrast}%</span>
          <input type="range" min="50" max="150" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} className="w-2/3 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
        <div className="flex justify-between items-center text-muted">
          <span>Saturation: {saturation}%</span>
          <input type="range" min="0" max="200" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} className="w-2/3 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
        <div className="flex justify-between items-center text-muted">
          <span>Blur: {blur}px</span>
          <input type="range" min="0" max="8" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-2/3 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
      </div>

      <button onClick={resetFilters} className="py-1.5 border border-border hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground font-semibold rounded-xl text-[10px] transition-colors">
        Reset Grading
      </button>
    </div>
  );
}

// 5. Web Security
export function WebSecurityWidget() {
  const [scanning, setScanning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "running" | "safe">("idle");
  const logRef = useRef<HTMLDivElement>(null);

  const startScan = () => {
    setScanning(true);
    setStatus("running");
    setLogs([]);
  };

  useEffect(() => {
    if (status !== "running") return;
    
    const messages = [
      "⚡ Initializing threat engine...",
      "🔍 Checking SSL/TLS v1.3 configuration...",
      "🔍 Auditing HTTP Security Headers (HSTS, CSP)...",
      "🔍 Simulating SQL Injection payload checks...",
      "🔍 Testing DDoS Firewall rules & limits...",
      "🛡️ Applying XSS Cross-Site scripting blocks...",
      "✅ Security scan completed. No active vulnerabilities found!"
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs(prev => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setStatus("safe");
        setScanning(false);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [status]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Firewall Threat Scanner</h4>
        {status === "safe" && (
          <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20">
            Secure A+
          </span>
        )}
      </div>

      <div 
        ref={logRef}
        className="h-28 rounded-xl bg-slate-950 border border-border/20 p-3 font-mono text-[9px] text-green-400 overflow-y-auto leading-relaxed"
      >
        {logs.map((log, idx) => (
          <div key={idx} className="animate-in fade-in duration-200">{log}</div>
        ))}
        {logs.length === 0 && (
          <div className="text-muted-foreground italic text-slate-500">Click Audit to simulate web server firewall audit logs...</div>
        )}
      </div>

      <button 
        onClick={startScan}
        disabled={scanning}
        className="w-full py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
      >
        {scanning ? <ShieldAlert size={13} className="animate-pulse" /> : <ShieldCheck size={13} />}
        <span>{scanning ? "Auditing Servers..." : "Run Security Audit"}</span>
      </button>
    </div>
  );
}

// 6. 3D Websites
export function ThreeDWebsitesWidget() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation angles based on cursor offset from card center
    const xVal = (e.clientX - rect.left - width / 2) / (width / 2) * 15; // Max 15 deg
    const yVal = -(e.clientY - rect.top - height / 2) / (height / 2) * 15;

    setRotate({ x: xVal, y: yVal });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">3D Parallax Perspective Sandbox</h4>
      <p className="text-[10px] text-muted">Hover cursor inside the box below to physically tilt the element in 3D space.</p>
      
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-28 rounded-xl bg-slate-950/20 border border-border/40 flex items-center justify-center cursor-crosshair overflow-hidden [perspective:500px]"
      >
        <div 
          className="w-24 h-16 rounded-xl bg-gradient-to-tr from-primary to-accent shadow-xl border border-white/20 flex flex-col items-center justify-center text-white transition-transform duration-200 ease-out font-bold text-[10px] [transform-style:preserve-3d]"
          style={{
            transform: `rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`
          }}
        >
          <span style={{ transform: "translateZ(20px)" }} className="drop-shadow-md">Tilt Card</span>
        </div>
      </div>
    </div>
  );
}

// 7. Complex AI/ML Models
export function ComplexAiMlWidget() {
  const [training, setTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [loss, setLoss] = useState(0.85);
  const [accuracy, setAccuracy] = useState(48);

  const startTraining = () => {
    setTraining(true);
    setEpoch(0);
    setLoss(0.85);
    setAccuracy(48);
  };

  useEffect(() => {
    if (!training) return;
    const interval = setInterval(() => {
      setEpoch(prev => {
        if (prev >= 50) {
          clearInterval(interval);
          setTraining(false);
          return 50;
        }
        
        // Dynamically compute mock training metrics
        setLoss(l => Math.max(0.02, parseFloat((l - (Math.random() * 0.03)).toFixed(3))));
        setAccuracy(a => Math.min(99, Math.round(a + (Math.random() * 2))));
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [training]);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Neural Net Training Sandbox</h4>
      
      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-border/50 flex flex-col gap-2 text-[10px]">
        <div className="flex justify-between items-center">
          <span className="text-muted">Training Status:</span>
          <span className={`font-bold ${training ? "text-primary animate-pulse" : "text-foreground"}`}>
            {training ? "Fitting weights..." : epoch === 50 ? "Finished Convergence" : "Model Idle"}
          </span>
        </div>
        <div className="flex justify-between items-center border-t border-border/20 pt-1.5">
          <span>Epoch: <strong className="text-foreground">{epoch}/50</strong></span>
          <span>Loss: <strong className="text-rose-500">{loss}</strong></span>
          <span>Accuracy: <strong className="text-emerald-500">{accuracy}%</strong></span>
        </div>
      </div>

      {/* Accuracy progression visuals */}
      <div className="relative h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="bg-emerald-500 h-full transition-all duration-100" style={{ width: `${accuracy}%` }} />
      </div>

      <button 
        onClick={startTraining}
        disabled={training}
        className="w-full py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
      >
        <Cpu size={13} className={training ? "animate-spin" : ""} />
        <span>{training ? "Fitting Neurons..." : "Train Neural Network"}</span>
      </button>
    </div>
  );
}

// 8. Digital Marketing
export function DigitalMarketingWidget() {
  const [budget, setBudget] = useState(10000);
  const [cpc, setCpc] = useState(12);
  const [cvr, setCvr] = useState(3.0);

  const clicks = Math.round(budget / cpc);
  const leads = Math.round(clicks * (cvr / 100));
  const cpa = leads > 0 ? Math.round(budget / leads) : budget;
  
  // Custom ROI logic
  const revenue = leads * 4500; // Assuming value of lead is ₹4500
  const roi = budget > 0 ? Math.round(((revenue - budget) / budget) * 100) : 0;

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Ad Campaign ROI Calculator</h4>

      <div className="flex flex-col gap-3 text-[10px]">
        {/* Sliders */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-muted font-medium">
            <span>Monthly Ad Spend (₹)</span>
            <span className="text-foreground font-bold">₹{budget.toLocaleString()}</span>
          </div>
          <input type="range" min="2000" max="50000" step="1000" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-muted font-medium">
            <span>Cost Per Click (CPC)</span>
            <span className="text-foreground font-bold">₹{cpc}</span>
          </div>
          <input type="range" min="5" max="50" step="1" value={cpc} onChange={(e) => setCpc(Number(e.target.value))} className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-muted font-medium">
            <span>Conversion Rate (%)</span>
            <span className="text-foreground font-bold">{cvr}%</span>
          </div>
          <input type="range" min="0.5" max="10.0" step="0.1" value={cvr} onChange={(e) => setCvr(Number(e.target.value))} className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary" />
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-3 gap-2.5 mt-1 text-center bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-border/40">
        <div className="flex flex-col gap-0.5">
          <div className="text-xs font-extrabold text-foreground">{clicks}</div>
          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Clicks</span>
        </div>
        <div className="flex flex-col gap-0.5 border-x border-border/30">
          <div className="text-xs font-extrabold text-foreground">{leads}</div>
          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">Leads</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className={`text-xs font-extrabold ${roi >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{roi}%</div>
          <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">ROI</span>
        </div>
      </div>
    </div>
  );
}

// 9. Projects Completion
export function ProjectsCompletionWidget() {
  const [phase, setPhase] = useState(0);

  const steps = [
    { title: "Wireframes", task: "Sketch layouts & get user approval", color: "bg-indigo-500" },
    { title: "Database Architecture", task: "Configure Mongo models & endpoints", color: "bg-cyan-500" },
    { title: "Client Handover", task: "Complete API connections & test flows", color: "bg-emerald-500" }
  ];

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Handover Milestone Tracker</h4>
      <p className="text-[10px] text-muted">Click phases to view details of our delayed project rescue framework.</p>

      {/* Visual Phase Buttons */}
      <div className="flex gap-2">
        {steps.map((step, idx) => (
          <button 
            key={idx}
            onClick={() => setPhase(idx)}
            className={`flex-grow py-2 rounded-xl text-[10px] font-bold border transition-all duration-300 ${
              phase === idx 
                ? "bg-primary border-primary text-white shadow-md shadow-primary/10" 
                : "bg-slate-50 dark:bg-slate-950 border-border text-foreground hover:bg-slate-100 dark:hover:bg-slate-900"
            }`}
          >
            Phase {idx + 1}
          </button>
        ))}
      </div>

      {/* Description Box */}
      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-border/40 flex items-center gap-3 animate-in slide-in-from-bottom-2 duration-300 min-h-[55px]">
        <div className={`w-3.5 h-3.5 rounded-full shrink-0 ${steps[phase].color} animate-pulse`} />
        <div>
          <h5 className="text-[10px] font-extrabold text-foreground leading-tight">{steps[phase].title}</h5>
          <p className="text-[9px] text-muted mt-0.5">{steps[phase].task}</p>
        </div>
      </div>
    </div>
  );
}

// 10. Research Paper Writing
export function ResearchPaperWidget() {
  const [style, setStyle] = useState("IEEE");
  const [topic, setTopic] = useState("AI Ethics in Healthcare");

  const getCitationOutput = () => {
    if (style === "IEEE") {
      return `[1] S. Entrepreneurs, "Analyzing the impact of ${topic} in regional centers," Beyond the Timeline Journal of Engineering Technology, vol. 12, no. 3, pp. 142-156, July 2026.`;
    }
    if (style === "APA") {
      return `Entrepreneurs, S. (2026). Analyzing the impact of ${topic} in regional centers. Beyond the Timeline Journal of Engineering Technology, 12(3), 142-156.`;
    }
    return `Entrepreneurs, Student. "Analyzing the impact of ${topic} in regional centers." Beyond the Timeline Journal of Engineering Technology, vol. 12, no. 3, 2026, pp. 142-156.`;
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/60 dark:bg-slate-950/40 backdrop-blur-sm border border-border/40 shadow-sm">
      <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">Citation Mappings Sandbox</h4>

      <div className="flex flex-col gap-2 text-[10px]">
        <div className="flex flex-col gap-1">
          <span className="text-muted font-medium">Research Topic:</span>
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="px-3.5 py-1.5 rounded-lg border border-border bg-slate-50 dark:bg-slate-950 text-foreground text-[10px] focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-muted font-medium">Citation Standard:</span>
          <div className="flex gap-2">
            {["IEEE", "APA", "MLA"].map((st) => (
              <button 
                key={st}
                onClick={() => setStyle(st)}
                className={`px-3 py-1 rounded-lg font-bold border transition-all duration-200 ${
                  style === st 
                    ? "bg-primary border-primary text-white" 
                    : "bg-slate-50 dark:bg-slate-950 border-border text-foreground hover:bg-slate-100"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-950 border border-border/20 rounded-xl font-mono text-[9px] text-sky-400 select-all leading-normal">
        {getCitationOutput()}
      </div>
    </div>
  );
}

// Map service ID to corresponding widget
export default function ServiceWidget({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case "web-maint-dev":
      return <WebMaintWidget />;
    case "ai-ml-dev":
      return <AiMlWidget />;
    case "ui-ux-design":
      return <UiUxWidget />;
    case "video-photo-edit":
      return <VideoPhotoWidget />;
    case "web-security":
      return <WebSecurityWidget />;
    case "three-d-websites":
      return <ThreeDWebsitesWidget />;
    case "complex-ai-ml":
      return <ComplexAiMlWidget />;
    case "digital-marketing":
      return <DigitalMarketingWidget />;
    case "projects-completion":
      return <ProjectsCompletionWidget />;
    case "research-paper":
      return <ResearchPaperWidget />;
    default:
      return null;
  }
}
