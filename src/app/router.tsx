import { HomePage } from '@pages/HomePage';
import { ProblemDetailPage } from '@pages/ProblemDetailPage';
import CenteredLayout from '@shared/layout/centeredLayout';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CenteredLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'problem/:id',
        element: <ProblemDetailPage />,
      },
    ],
  },
]);

export default router;
