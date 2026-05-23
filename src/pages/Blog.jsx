import React from 'react';
import { Terminal, BookOpen, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Dissecting Modern WAF Bypasses',
    date: '2026-03-15',
    category: 'Vulnerability Research',
    excerpt: 'A deep dive into how poorly configured Web Application Firewalls can be bypassed using obfuscation and chunked encoding.',
  },
  {
    id: 2,
    title: 'Zero Trust Architecture in Practice',
    date: '2026-01-20',
    category: 'Infrastructure',
    excerpt: 'Transitioning a legacy corporate network into a Zero Trust model: challenges, solutions, and why VPNs are no longer enough.',
  },
  {
    id: 3,
    title: 'Reverse Engineering IoT Firmware',
    date: '2025-11-10',
    category: 'Reverse Engineering',
    excerpt: 'Extracting and analyzing firmware from a smart camera to discover hardcoded backdoor credentials.',
  }
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
