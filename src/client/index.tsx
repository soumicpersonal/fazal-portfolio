import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { toast } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import favicon from './assets/favicon.svg';
import './index.css';
import LoadingSpinner from './components/LoadingSpinner';
import { ThemeProvider } from './components/ThemeProvider';

// Set favicon
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/svg+xml';
link.rel = 'icon';
link.href = favicon;
document.getElementsByTagName('head')[0].appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  </ThemeProvider>
);

