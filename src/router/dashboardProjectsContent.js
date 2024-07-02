import { OrderSummaryComponent } from '@/projects/orderSummaryComponent';
import { dashboardProjectsLevels } from './dashboardProjectsLevels';
import TimeTrackingDashboard from '@/projects/timeTrackingDashboard';
import ContactForm from '@/projects/contactForm';
import SocialProofSection from '@/projects/socialProofSection';
import AgeCalculatorApp from '@/projects/ageCalculatorApp';

export const dashboardProjectsContent = [
  {
    id: 1,
    name: 'Order Summary component',
    desc: 'Card component.',
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
    technologies: ['React JS', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'Time Tracking Dashboard',
    desc: 'Simple dashboard',
    level: dashboardProjectsLevels[2],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[2].path}/Time-Tracking-Dashboard`,
      singleView: `/singleView${dashboardProjectsLevels[2].path}/Time-Tracking-Dashboard`,
    },
    component: TimeTrackingDashboard,
    reference: {
      name: 'Frontend Mentor',
      url: 'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
    },
    source: {
      url: 'https://github.com/ChristopherPinedo/frontendProjects/blob/master/src/projects/timeTrackingDashboard/index.tsx',
    },
    technologies: ['React JS', 'Tailwind CSS', 'Typescript'],
  },
  {
    id: 3,
    name: 'Contact Form',
    desc: 'Simple contact form with validations',
    level: dashboardProjectsLevels[2],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[2].path}/Contact-Form`,
      singleView: `/singleView${dashboardProjectsLevels[2].path}/Contact-Form`,
    },
    component: ContactForm,
    reference: {
      name: 'Frontend Mentor',
      url: '',
    },
    source: {
      url: '',
    },
    technologies: ['React JS', 'Tailwind CSS'],
  },
  {
    id: 4,
    name: 'Social Proof Section',
    desc: 'Basic ui section',
    level: dashboardProjectsLevels[1],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[2].path}/Social-Proof-Section`,
      singleView: `/singleView${dashboardProjectsLevels[2].path}/Social-Proof-Section`,
    },
    component: SocialProofSection,
    reference: {
      name: 'Frontend Mentor',
      url: '',
    },
    source: {
      url: '',
    },
    technologies: ['React JS', 'Tailwind CSS'],
  },
  {
    id: 5,
    name: 'Age Calculator App',
    desc: 'Simple form',
    level: dashboardProjectsLevels[2],
    routes: {
      dashboard: `/dashboard${dashboardProjectsLevels[2].path}/Age-Calculator-App`,
      singleView: `/singleView${dashboardProjectsLevels[2].path}/Age-Calculator-App`,
    },
    component: AgeCalculatorApp,
    reference: {
      name: 'Frontend Mentor',
      url: '',
    },
    source: {
      url: '',
    },
    technologies: ['React JS', 'Tailwind CSS'],
  },
];
