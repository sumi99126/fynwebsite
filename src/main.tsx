import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WizzTechProtectionProvider } from '@wizztech/protection';
import '@wizztech/protection/dist/style.css';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const platformUrl =
  import.meta.env.VITE_WIZZTECH_PLATFORM_URL ||
  'https://wizztech-demo-website-platform.netlify.app';

createRoot(rootElement).render(
  <StrictMode>
    <WizzTechProtectionProvider platformUrl={platformUrl}>
      <App />
    </WizzTechProtectionProvider>
  </StrictMode>,
);
