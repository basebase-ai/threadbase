'use client';

import { getAuthState } from 'basebase-js';
import { appConfig } from '../../config';

export function FloatingActionButton() {
  const handleClick = () => {
    const authState = getAuthState();
    const token = authState.token || '';
    
    // Construct the URL
    const url = `https://editor.basebase.ai/${appConfig.projectId}?repo=${encodeURIComponent(appConfig.githubUrl)}&token=${encodeURIComponent(token)}`;
    
    // Open in new tab
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'linear-gradient(45deg, var(--mantine-color-violet-6), var(--mantine-color-blue-6))',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(34, 139, 230, 0.3)',
        zIndex: 1000,
        transition: 'all 0.2s ease',
        fontFamily: 'inherit',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(34, 139, 230, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(34, 139, 230, 0.3)';
      }}
    >
      ✨ Edit This!
    </button>
  );
} 