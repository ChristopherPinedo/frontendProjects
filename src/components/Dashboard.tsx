import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { CodeXml, Home, Maximize2, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import { dashboardProjectsLevels } from '@/router/dashboardProjectsLevels';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { dashboardProjectsContent } from '@/router/dashboardProjectsContent';
import { Separator } from './ui/separator';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

function ProjectsMenu() {
  return (
    <div>
      <nav className="px-3">
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'font-semibold' : 'font-normal')}>
          <div className="flex items-center gap-2 rounded-lg py-2 text-sm">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </div>
        </NavLink>
      </nav>
      <Separator className="my-2" />
      <Command>
        <CommandInput placeholder="Buscar proyecto ..." />
        <CommandList>
          <CommandEmpty>Proyecto no encontrado</CommandEmpty>
          {Object.values(dashboardProjectsLevels).map((routeLevel, routeLevelIndex) => (
            <CommandGroup key={routeLevelIndex} heading={routeLevel.name}>
              {dashboardProjectsContent
                .filter((route) => routeLevel.name === route.level.name)
                .map((route, routeIndex) => (
                  <NavLink to={route.route} className={({ isActive }) => (isActive ? 'font-semibold' : 'font-normal')}>
                    <CommandItem key={routeIndex} className="cursor-pointer">
                      <span>{route.name}</span>
                    </CommandItem>
                  </NavLink>
                ))}
              <CommandSeparator />
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}

export function Dashboard() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="item flex gap-2 font-semibold">
              <CodeXml className="h-6 w-6" />
              <span>Frontend Projects</span>
            </Link>
          </div>
          <div className="flex-1">
            <ProjectsMenu />
          </div>
          {/* <div className="mt-auto p-4">
            <p>First card</p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center border-b px-4 md:hidden lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="flex justify-center">
                <Link to="/" className="flex items-center gap-2 text-lg font-medium">
                  <CodeXml className="h-6 w-6" />
                  <p>Frontend Projects</p>
                </Link>
              </nav>
              <ProjectsMenu />
              {/* <div className="mt-auto">
                <p>Second card</p>
              </div> */}
            </SheetContent>
          </Sheet>
          {/* <div className="flex w-full flex-1 flex-row items-center gap-2 text-lg font-medium">
            <h4 className="md:text-ml text-sm font-semibold">Frontend Mentor projects</h4>
            <CodeXml className="h-6 w-6" />
            <p>Frontend Projects</p>
          </div> */}
        </header>
        <main className=" h-full p-4 md:p-6">
          {location.pathname === '/home' ? (
            <Outlet />
          ) : (
            <>
              {dashboardProjectsContent
                .filter((project) => location.pathname === project.route)
                .map((project) => (
                  <div className="flex h-full flex-col gap-4 md:gap-6 lg:flex-row">
                    <section className="lg:flex-1 lg:basis-1/3 xl:basis-1/4">
                      <Card>
                        <CardHeader>
                          <CardTitle>{project.name}</CardTitle>
                          <CardDescription>{project.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-6">
                          <div className="flex cursor-default flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge>{tech}</Badge>
                            ))}
                          </div>
                          <Separator />
                          <Button> Open Reference</Button>
                        </CardContent>
                      </Card>
                    </section>
                    <section className="relative lg:basis-2/3 xl:basis-3/4">
                      <div className="absolute right-4 top-4 lg:right-4 lg:top-4">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Button variant="outline" size="icon">
                                <Maximize2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p>Abrir proyecto en una nueva pestaña</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Outlet />
                    </section>
                  </div>
                ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
