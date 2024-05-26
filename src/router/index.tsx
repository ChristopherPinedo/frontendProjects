import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { dashboardProjectsContent } from './dashboardProjectsContent';
import { HomePage } from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

function Router() {
  const appRouter = createHashRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Dashboard />} errorElement={<NotFoundPage />}>
          <Route path="home" element={<HomePage />} />
          {dashboardProjectsContent.map((project) => (
            <Route key={project.id} path={project.route} element={<project.component />} />
          ))}
        </Route>
        {dashboardProjectsContent.map((project) => (
          <Route key={project.id} path={`${project.route}/singleView`} element={<project.component />} />
        ))}
        {/* <Route path="singleView">
        </Route> */}
      </>,
    ),
    {
      basename: import.meta.env.DEV ? '/' : '/frontendProjects/',
    },
  );

  return <RouterProvider router={appRouter} />;
}

export { Router };
