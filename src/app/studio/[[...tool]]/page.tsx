/**
 * This route hosts the Sanity Studio at /studio.
 *
 * The Studio is rendered client-side only (see StudioClient). Server-rendering
 * it pulls the whole Sanity Studio bundle into the serverless function, which
 * crashed the Vercel runtime with SIGSEGV.
 */
import type {Metadata, Viewport} from 'next'

import StudioClient from './StudioClient'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Sanity Studio',
  robots: {index: false, follow: false},
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
}

export default function StudioPage() {
  return <StudioClient />
}
