import React, { useState } from 'react';
import ElectionTimeline from './components/ElectionTimeline';
import Flashcards from './components/Flashcards';
import InfoPanel from './components/InfoPanel';
import ChatAssistant from './components/ChatAssistant';
import { BookOpen, Map, HelpCircle, MessageSquare } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <div className="app-container">
      <header>
        <h1>Indian Election <span className="gradient-text">Assistant</span></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Your interactive guide to understanding the world's largest democratic process.
        </p>
      </header>

      <div className="nav-tabs">
        <button 
          className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          <Map size={18} /> Process Timeline
        </button>
        <button 
          className={`tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('flashcards')}
        >
          <BookOpen size={18} /> Terminology
        </button>
        <button 
          className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          <HelpCircle size={18} /> FAQs & Info
        </button>
        <button 
          className={`tab-btn ${activeTab === 'chat' ? 'active' : ''}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageSquare size={18} /> Ask AI
        </button>
      </div>

      <main>
        {activeTab === 'timeline' && <ElectionTimeline />}
        {activeTab === 'flashcards' && <Flashcards />}
        {activeTab === 'info' && <InfoPanel />}
        {activeTab === 'chat' && <ChatAssistant />}
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem 0', color: 'var(--text-muted)', borderTop: 'var(--glass-border)' }}>
        <p>Built to educate and empower voters. Not affiliated with the ECI.</p>
      </footer>
    </div>
  );
}

export default App;
