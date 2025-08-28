import { Suspense } from 'react';
import { renderApp } from 'modelence/client';
import { toast } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import favicon from './assets/favicon.svg';
import './index.css';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './components/ThemeProvider';

renderApp({
  routesElement: (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  ),
  errorHandler: (error) => {
    toast.error(error.message);
  },
  loadingElement: <LoadingSpinner fullScreen />,
  favicon
});

