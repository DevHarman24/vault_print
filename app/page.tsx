import UploadFlow from "@/components/UploadFlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden relative selection:bg-emerald-500/30 font-sans">
      {/* Dynamic Ambient Background Orbs */}
      <div className="ambient-glow bg-emerald-500/40 w-[800px] h-[800px] -top-96 -left-96 mix-blend-screen"></div>
      <div className="ambient-glow bg-cyan-500/30 w-[600px] h-[600px] top-1/4 -right-[300px] mix-blend-screen"></div>
      <div className="ambient-glow bg-blue-500/20 w-[900px] h-[900px] -bottom-[400px] left-1/2 -translate-x-1/2 mix-blend-screen"></div>
      
      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-8 flex flex-col min-h-screen">
        
        {/* Sleek Premium Navbar */}
        <nav className="flex items-center justify-between py-6 no-print border-b border-white/5 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              <span className="font-black text-black text-lg tracking-tighter">VP</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white/90">Vault Print</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold border border-emerald-500/30 px-4 py-2 rounded-full bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.1)]">End-to-End Encrypted</span>
          </div>
        </nav>

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 p-4">
          
          {/* Left Hero Section */}
          <div className="w-full lg:w-[55%] text-left space-y-10 no-print">
            <h1 className="text-5xl lg:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.05]">
              Secure.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 glow-text drop-shadow-lg">Zero-Knowledge.</span><br/>
              Printing.
            </h1>
            <p className="text-xl text-white/50 max-w-lg leading-relaxed font-light">
              Print your PAN or Aadhaar card at any public cyber cafe without leaving a digital footprint. Client-side encrypted payloads ensure your privacy is cryptographically guaranteed.
            </p>
            <ul className="space-y-5">
               {['AES-256-GCM Browser Encryption', 'Anti-Screenshot Decryption Zone', 'Automated Post-Print Self-Destruct'].map((feature, idx) => (
                 <li key={idx} className="flex items-center gap-4 text-white/80">
                   <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                   </div>
                   <span className="font-semibold text-base tracking-wide">{feature}</span>
                 </li>
               ))}
            </ul>
          </div>

          {/* Right Upload Flow Section */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end no-print relative group">
            {/* Ambient hover glow for the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <UploadFlow />
          </div>

        </div>
        
        <footer className="py-8 text-center text-white/20 text-xs font-mono uppercase tracking-widest no-print mt-auto border-t border-white/5">
          <p>© {new Date().getFullYear()} Vault Print Infrastructure. Decentralized Trust.</p>
        </footer>
      </div>
    </main>
  );
}
