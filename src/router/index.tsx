import {
  Outlet,
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { dashboardProjectsContent } from './dashboardProjectsContent';
import { HomePage } from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { useEffect } from 'react';

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
    if (location.pathname === '/') {
      navigate('/dashboard/home', { replace: true });
    }
  }, [location]);

  return <Outlet />;
}

function Router() {
  const appRouter = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<NotFoundPage />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index path="home" element={<HomePage />} />
          {dashboardProjectsContent.map((project) => (
            <Route key={project.id} path={project.routes.dashboard} element={<project.component />} />
          ))}
        </Route>
        <Route path="singleView">
          {dashboardProjectsContent.map((project) => (
            <Route key={project.id} path={project.routes.singleView} element={<project.component />} />
          ))}
        </Route>
      </Route>,
    ),
    {
      basename: import.meta.env.DEV ? '/' : '/frontendProjects/',
    },
  );

  return <RouterProvider router={appRouter} />;
}

export { Router };
