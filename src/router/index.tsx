import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { dashboardProjectsContent } from './dashboardProjectsContent';
import { HomePage } from '@/components/HomePage';

// const dashboardProjectsRoutes = [
//   {
//     id: 1,
//     name: 'Order Summary Component',
//     level: dashboardProjectsLevels[1],
//     route: `${dashboardProjectsLevels[1].path}Order-Summary-Component`,
//     component: <OrderSummaryComponent />,
//   },
//   {
//     id: 2,
//     name: 'Time Tracking Dashboard',
//     level: dashboardProjectsLevels[2],
//     route: `${dashboardProjectsLevels[2].path}Time-Tracking-Dashboard`,
//     component: <TimeTrackingDashboard />,
//   },
//   {
//     id: 3,
//     name: 'Space Tourism Website',
//     level: dashboardProjectsLevels[3],
//     route: `${dashboardProjectsLevels[3].path}Space-Tourism-Website`,
//     component: <SpaceTourismWebsite />,
//   },
// ];
// const dashboardProjectsRoutes = dashboardProjectsContent.map((project) => ({
//   path: project.route,
//   element: project.component,
// }));

function Router() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Dashboard />,
  //     children: dashboardProjectsRoutes.map((ele) => ({
  //       path: ele.path,
  //       element: <ele.element />,
  //     })),
  //   },
  // ]);

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        {dashboardProjectsContent.map((project) => (
          <Route key={project.id} path={project.route} element={<project.component />} />
        ))}
      </Route>,
    ),
  );

  return <RouterProvider router={appRouter} />;
}

export { Router };
