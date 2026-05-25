import React from 'react';
import { Terminal, BookOpen, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The AI Assistant in Your Terminal Might Be Working for the Bad Guys',
    date: '2026-05-24',
    category: 'AI/ML, Cyber Security',
    excerpt: 'Let’s be honest, we all love how fast AI is moving.',
  },
];

const Blog = () => {
  return (
    <section className="container animate-fade-in" style={{ padding: '6rem 2rem', minHeight: '80vh' }}>
      <h2 className="section-title">Transmission_Logs</h2>
      
      <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
        {blogPosts.map(post => (
          <article key={post.id} className="glass-card blog-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }} onClick={() => alert('Future Feature: Complete Blog Post view.')}>
            <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
              <span className="mono text-secondary" style={{ fontSize: '0.8rem', background: 'rgba(14, 165, 233, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <BookOpen size={14} />
                {post.category}
              </span>
              <span className="mono text-muted flex items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <Clock size={14} />
                {post.date}
              </span>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <Terminal size={24} className="text-primary" />
              <span className="title-text transition">{post.title}</span>
            </h3>
            
            <p className="text-muted" style={{ lineHeight: '1.6' }}>{post.excerpt}</p>
            
            <div style={{ marginTop: '0.5rem' }}>
              <span className="mono text-primary" style={{ fontSize: '0.9rem' }}>Read Article &gt;</span>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        .blog-card:hover .title-text { color: var(--primary-color); }
        .transition { transition: color 0.3s ease; }
      `}</style>
    </section>
  );
};

export default Blog;
