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
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[1].path}/Order-Summary-Component`,
      singleView: `/singleView${dashboardProjectsLevels[1].path}/Order-Summary-Component`,
    },
    component: OrderSummaryComponent,
    reference: {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    },
    source: {
      url: 'https://github.com/ChristopherPinedo/frontendProjects/blob/master/src/projects/orderSummaryComponent/index.tsx',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Time Tracking Dashboard',
    desc: 'proyect 2',
    level: dashboardProjectsLevels[2],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[2].path}/Time-Tracking-Dashboard`,
      singleView: `/singleView${dashboardProjectsLevels[2].path}/Time-Tracking-Dashboard`,
    },
    component: TimeTrackingDashboard,
    reference: {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    },
    source: {
      url: '',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
  {
    id: 3,
    name: 'Space Tourism Website',
    desc: 'proyect 3',
    level: dashboardProjectsLevels[3],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[3].path}/Space-Tourism-Website`,
      singleView: `/singleView${dashboardProjectsLevels[3].path}/Space-Tourism-Website`,
    },
    component: SpaceTourismWebsite,
    reference: {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    },
    source: {
      url: '',
    },
    technologies: ['Javascript', 'React JS', 'Tailwind CSS'],
  },
];
