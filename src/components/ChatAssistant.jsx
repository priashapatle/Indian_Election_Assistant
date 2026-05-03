import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const QA_DATABASE = [
  { keywords: ['register', 'form 6', 'eligible', 'voter id', 'apply'], answer: "To register to vote, you must be an Indian citizen and 18+ years old. You need to fill out Form 6 via the NVSP portal (voters.eci.gov.in). Once verified, you will receive your EPIC (Voter ID)." },
  { keywords: ['mcc', 'code of conduct', 'rules', 'announce'], answer: "The Model Code of Conduct (MCC) comes into effect the moment the Election Commission announces the dates. It prevents the ruling party from announcing new schemes to ensure a level playing field." },
  { keywords: ['evm', 'machine', 'how to vote', 'polling day', 'vvpat'], answer: "On Polling Day, you go to your booth, show your ID, and get indelible ink on your finger. You cast your vote by pressing a button on the EVM. A VVPAT machine will show a printed slip for 7 seconds to verify your vote." },
  { keywords: ['count', 'result', 'who won', 'win'], answer: "After polling, EVMs are sealed in Strong Rooms. On Counting Day, votes are tallied under ECI supervision. The candidate with the maximum votes in a constituency wins under the First Past the Post system." },
  { keywords: ['nota', 'none'], answer: "NOTA stands for 'None of the Above'. It is an option on the EVM that allows you to formally register your rejection of all candidates contesting in your constituency." }
];

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am your Election Assistant. Ask me anything about the Indian election process, or click a suggestion below!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { text, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot thinking and replying
    setTimeout(() => {
      let botReply = "I'm not quite sure about that. Try asking about voter registration, EVMs, the Model Code of Conduct, or Polling Day!";
      
      const lowerText = text.toLowerCase();
      for (const entry of QA_DATABASE) {
        if (entry.keywords.some(kw => lowerText.includes(kw))) {
          botReply = entry.answer;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
    }, 600);
  };

  const suggestedQuestions = [
    "How do I register to vote?",
    "What is the Model Code of Conduct?",
    "How does the EVM work?",
    "What is NOTA?"
  ];

  return (
    <div className="chat-container animate-fade-in glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '600px', padding: 0, overflow: 'hidden' }}>
      {/* Chat Messages Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
            maxWidth: '80%'
          }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: msg.sender === 'user' ? 'var(--primary)' : 'var(--secondary)'
            }}>
              {msg.sender === 'user' ? <User size={18} color="white" /> : <Bot size={18} color="white" />}
            </div>
            <div style={{
              padding: '1rem',
              borderRadius: '1rem',
              background: msg.sender === 'user' ? 'rgba(255, 153, 51, 0.2)' : 'rgba(19, 136, 8, 0.2)',
              border: msg.sender === 'user' ? '1px solid rgba(255, 153, 51, 0.3)' : '1px solid rgba(19, 136, 8, 0.3)',
              color: 'var(--text)',
              borderTopRightRadius: msg.sender === 'user' ? 0 : '1rem',
              borderTopLeftRadius: msg.sender === 'bot' ? 0 : '1rem'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <div style={{ padding: '0.5rem 1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: 'var(--glass-border)' }}>
        {suggestedQuestions.map((q, i) => (
          <button key={i} onClick={() => handleSend(q)} style={{
            background: 'var(--surface)', border: 'var(--glass-border)', color: 'var(--text-muted)',
            padding: '0.4rem 0.8rem', borderRadius: '2rem', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.target.style.background = 'var(--surface-hover)'; e.target.style.color = 'var(--text)'; }}
          onMouseOut={(e) => { e.target.style.background = 'var(--surface)'; e.target.style.color = 'var(--text-muted)'; }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ padding: '1rem 1.5rem', background: 'var(--surface)', borderTop: 'var(--glass-border)', display: 'flex', gap: '1rem' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
          placeholder="Type your question..."
          style={{
            flex: 1, padding: '0.75rem 1rem', borderRadius: '0.5rem', border: 'var(--glass-border)',
            background: 'rgba(0,0,0,0.2)', color: 'var(--text)', outline: 'none'
          }}
        />
        <button 
          onClick={() => handleSend(input)}
          style={{
            background: 'var(--primary)', border: 'none', borderRadius: '0.5rem', width: '3rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white'
          }}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
