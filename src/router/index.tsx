import { HashRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../components/Dashboard';
import { dashboardProjectsContent } from './dashboardProjectsContent';
import { HomePage } from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ThemeProvider } from '@/common/theme-provider';

// export default function Root() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   useEffect(() => {
//     // console.log(location);
//     if (location.pathname === '/') {
//       navigate('/dashboard/home', { replace: true });
//     }
//   }, [location, navigate]);

//   return (
//     <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
//       <Outlet />
//     </ThemeProvider>
//   );
// }

function Router() {
  return (
    <HashRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="/dashboard/home" element={<HomePage />} />
            {dashboardProjectsContent.map((project) => (
              <Route key={project.id} path={project.routes.dashboard} element={<project.component />} />
            ))}
          </Route>
          {dashboardProjectsContent.map((project) => (
            <Route key={project.id} path={project.routes.singleView} element={<project.component />} />
          ))}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export { Router };
