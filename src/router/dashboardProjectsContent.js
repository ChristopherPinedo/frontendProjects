import { OrderSummaryComponent } from '@/projects/orderSummaryComponent';
import { dashboardProjectsLevels } from './dashboardProjectsLevels';
import TimeTrackingDashboard from '@/projects/timeTrackingDashboard';
import SpaceTourismWebsite from '@/projects/spaceTourismWebsite';

export const dashboardProjectsContent = [
  {
    id: 1,
    name: 'Order Summary component',
    desc: 'Componente tipo card',
    level: dashboardProjectsLevels[1],
    route: `${dashboardProjectsLevels[1].path}/Order-Summary-Component`,
    component: OrderSummaryComponent,
    source: {
      name: 'Frontend Mentor',
      url: '',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Time Tracking Dashboard',
    desc: 'proyect 2',
    level: dashboardProjectsLevels[2],
    route: `${dashboardProjectsLevels[2].path}/Time-Tracking-Dashboard`,
    component: TimeTrackingDashboard,
    source: {
      name: 'Frontend Mentor',
      url: '',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
  {
    id: 3,
    name: 'Space Tourism Website',
    desc: 'proyect 3',
    level: dashboardProjectsLevels[3],
    route: `${dashboardProjectsLevels[3].path}/Space-Tourism-Website`,
    component: SpaceTourismWebsite,
    source: {
      name: 'Frontend Mentor',
      url: '',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
];
