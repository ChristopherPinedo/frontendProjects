import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { dashboardProjectsContent } from '@/router/dashboardProjectsContent';
import { dashboardProjectsLevels } from '@/router/dashboardProjectsLevels';
import { CodeXml } from 'lucide-react';

function HomePage() {
  return (
    <div className="container">
      <div className="my-12 flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex w-full flex-row items-center justify-center gap-2 text-3xl font-semibold">
            <CodeXml className="h-9 w-9" />
            <span>Frontend Projects</span>
          </div>
          <Separator />
        </div>
        {Object.values(dashboardProjectsLevels).map((routeLevel, routeLevelIndex) => (
          <div key={routeLevelIndex} className="flex flex-col gap-8">
            <div className="flex w-full flex-row items-center text-xl font-semibold">
              {/* <CodeXml className="h-6 w-6" /> */}
              <span>{routeLevel.name}</span>
            </div>
            {dashboardProjectsContent
              .filter((route) => routeLevel.name === route.level.name)
              .map((route, routeIndex) => (
                <Card key={routeIndex}>
                  <CardTitle>{route.name}</CardTitle>
                </Card>
                // <NavLink
                //   to={route.routes.dashboard}
                //   className={({ isActive }) => (isActive ? 'font-semibold' : 'font-normal')}
                // >
                //   <CommandItem key={routeIndex} className="cursor-pointer">
                //     <span>{route.name}</span>
                //   </CommandItem>
                // </NavLink>
              ))}
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}

export { HomePage };
