import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#FAF7F2",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "monospace",
      padding: "2rem"
    }}>
      <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
        <img src="/logo.png" alt="InkeyDecode" style={{ height: "75px" }} />
      </div>

      <div style={{ position: "absolute", top: "1.5rem", right: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#d4a0d4" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d4a0d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <circle cx="12" cy="12" r="4"/>
  <circle cx="17.5" cy="6.5" r="1" fill="#d4a0d4" stroke="none"/>
</svg>
        </a>
        <a href="mailto:inkeydecode@gmail.com" style={{ color: "#d4a0d4" }}>
          <Mail size={18} />
        </a>
      </div>

      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "3.5rem", color: "#d4a0d4", marginBottom: "1.5rem" }}>
        Coming Soon
      </h1>

       <p style={{ color: "#a06aa0", fontSize: "14px", maxWidth: "520px", textAlign: "center", lineHeight: "1.8", marginBottom: "2rem" }}>
        Your skin deserves more than a marketing claim. InkeyDecode is coming soon, an ingredient analyzer that breaks down exactly what is in your skincare products and whether they actually work for you. No more guessing if something is acne safe, fragrance free, or worth the price. We are building something that reads ingredient lists so you don't have to. Clean beauty just got a lot more transparent.
      </p>

      <a href="https://forms.gle/gCx6eGdCAumwJLkh7" target="_blank" rel="noopener noreferrer">
        <button style={{
          border: "1px solid #d4a0d4",
          background: "transparent",
          color: "#a06aa0",
          padding: "10px 28px",
          borderRadius: "20px",
          fontSize: "13px",
          cursor: "pointer",
          fontFamily: "monospace"
        }}>
          Early Access
        </button>
      </a>
  <img 
  src="/windmill.png" 
  alt="windmill" 
  style={{
    width: "220px",
    marginTop: "2rem",
    opacity: 0.9
  }}
/>
    </main>
  )
}