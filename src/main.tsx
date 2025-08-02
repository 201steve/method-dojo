import router from '@app/router';
import mixpanel from 'mixpanel-browser';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

mixpanel.init(MIXPANEL_TOKEN, {
  debug: true,
  track_pageview: true,
  persistence: 'localStorage',
});

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
