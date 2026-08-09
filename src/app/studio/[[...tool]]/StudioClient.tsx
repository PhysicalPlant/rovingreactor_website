'use client'

import dynamic from 'next/dynamic'

/**
 * Sanity Studio is loaded only in the browser. `ssr: false` keeps the entire
 * Studio module graph out of the server render, which is what was crashing
 * the Vercel function (SIGSEGV) on /studio.
 */
const StudioInner = dynamic(() => import('./StudioInner'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        font: '16px/1.4 system-ui, sans-serif',
        color: '#666',
      }}
    >
      Loading Studio…
    </div>
  ),
})

export default function StudioClient() {
  return <StudioInner />
}
