import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
// eslint-disable-next-line import/order
import router from '@app/router';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(<RouterProvider router={router} />);
