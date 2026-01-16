'use client';

import React, { useState, useEffect, useRef } from 'react';
import './chat.css'; // Import the new CSS file
import {
    Mic, Paperclip, Grid3x3, ChevronDown, Share2,
    Sparkles, Lightbulb, FileText, ArrowUp, MessageSquare
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Use standard Web Speech API types or any if not available
type SpeechRecognitionType = any;

interface Message {
    id: string;
    sender: 'user' | 'ai';
    text: string;
}

export default function AIChatInterface() {
    const { t, language } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [mounted, setMounted] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<SpeechRecognitionType>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const getLocale = (lang: string) => {
        switch (lang) {
            case 'tr': return 'tr-TR';
            case 'en': return 'en-US';
            case 'et': return 'et-EE';
            case 'ru': return 'ru-RU';
            case 'ua': return 'uk-UA';
            case 'ar': return 'ar-SA';
            default: return 'en-US';
        }
    };

    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
            // @ts-ignore
            const SpeechRecognition = window.webkitSpeechRecognition;
            // @ts-ignore
            recognitionRef.current = new SpeechRecognition();
            if (recognitionRef.current) {
                recognitionRef.current.continuous = false;
                recognitionRef.current.interimResults = false;
                recognitionRef.current.lang = getLocale(language);

                recognitionRef.current.onstart = () => {
                    setIsListening(true);
                    window.speechSynthesis.cancel(); // Stop talking when listening starts
                    setIsSpeaking(false);
                };
                recognitionRef.current.onend = () => {
                    setIsListening(false);
                };
                recognitionRef.current.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    setInput(transcript);
                    handleSend(transcript);
                };
            }
        }
    }, []);

    useEffect(() => {
        if (recognitionRef.current) {
            recognitionRef.current.lang = getLocale(language);
        }
    }, [language]);

    const toggleListening = () => {
        if (!recognitionRef.current) return;
        isListening ? recognitionRef.current.stop() : recognitionRef.current.start();
    };

    const speakResponse = (text: string) => {
        if (typeof window === 'undefined') return;

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = getLocale(language);
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    const handleSend = async (textOverride?: string) => {
        const messageText = textOverride || input.trim();
        if (!messageText) return;

        // User Message
        const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageText }),
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            // AI Message
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: data.response
            };
            setMessages(prev => [...prev, aiMessage]);
            speakResponse(data.response);

        } catch (error) {
            console.error(error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: t?.aiChat?.error || "Error"
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!mounted) return null;

    return (
        <div className="ai-chat-layout">

            {/* Main Content */}
            <main className="ai-main-area">

                {/* Header */}
                <header className="ai-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div className="ai-model-badge">
                            <Sparkles size={14} color="#a78bfa" />
                            <span>{t?.aiChat?.badge}</span>
                            <ChevronDown size={14} style={{ opacity: 0.5 }} />
                        </div>
                        {isSpeaking && (
                            <div style={{ fontSize: '0.8rem', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div className="ai-recording" style={{ width: 8, height: 8, borderRadius: '50%', background: '#a78bfa' }} />
                                {t?.aiChat?.speaking}
                            </div>
                        )}
                    </div>

                    <div>
                        <button className="ai-icon-btn">
                            <Share2 size={20} />
                        </button>
                    </div>
                </header>

                {/* Chat Area */}
                <div className="ai-chat-window">
                    {messages.length === 0 ? (
                        <div className="ai-welcome-container">
                            <div className="ai-logo-glow">
                                <Sparkles size={40} color="white" />
                            </div>
                            <h1 className="ai-welcome-title">
                                {t?.aiChat?.welcomeTitle}
                            </h1>
                            <p className="ai-welcome-text">
                                {t?.aiChat?.welcomeText}
                            </p>

                            <div className="ai-suggestions-grid">
                                {[
                                    { icon: Lightbulb, title: t?.aiChat?.suggestions?.safetyPlan?.title, desc: t?.aiChat?.suggestions?.safetyPlan?.desc },
                                    { icon: FileText, title: t?.aiChat?.suggestions?.rights?.title, desc: t?.aiChat?.suggestions?.rights?.desc },
                                    { icon: MessageSquare, title: t?.aiChat?.suggestions?.talk?.title, desc: t?.aiChat?.suggestions?.talk?.desc },
                                    { icon: Grid3x3, title: t?.aiChat?.suggestions?.resources?.title, desc: t?.aiChat?.suggestions?.resources?.desc }
                                ].map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(item.title)}
                                        className="ai-suggestion-card"
                                    >
                                        <div style={{ padding: '0.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '8px' }}>
                                            <item.icon size={18} color="#a78bfa" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{item.desc}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="ai-message-list">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`ai-message ${msg.sender}`}>
                                    {msg.sender === 'ai' && (
                                        <div className="ai-avatar">
                                            <Sparkles size={16} color="white" />
                                        </div>
                                    )}
                                    <div className="ai-bubble">
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="ai-message ai">
                                    <div className="ai-avatar">
                                        <Sparkles size={16} color="white" />
                                    </div>
                                    <div className="ai-bubble" style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                                        {t?.aiChat?.typing}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} style={{ height: '1rem' }} />
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="ai-input-wrapper">
                    <div className="ai-input-container">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder={t?.aiChat?.inputPlaceholder}
                            className="ai-input-field"
                            rows={1}
                        />

                        <div className="ai-input-actions">
                            <div style={{ display: 'flex', gap: '0.25rem' }}>
                                <button className="ai-icon-btn" title={t?.aiChat?.attachFile}>
                                    <Paperclip size={18} />
                                </button>
                                <button
                                    onClick={toggleListening}
                                    className={`ai-icon-btn ${isListening ? 'ai-recording' : ''}`}
                                    title={t?.aiChat?.voiceCommand}
                                    style={isListening ? { color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' } : {}}
                                >
                                    <Mic size={18} />
                                </button>
                            </div>
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim() && !isLoading}
                                className="ai-send-btn"
                            >
                                <ArrowUp size={18} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                    <p className="ai-disclaimer">
                        {t?.aiChat?.disclaimer}
                    </p>
                </div>

            </main>
        </div>
    );
}
