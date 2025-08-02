import CommonLayout from '@shared/ui/layout/common-layout';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
  },
]);

export default router;
