import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CodeXml, Eye, Github, Home, Maximize2, Menu } from 'lucide-react';

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
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { dashboardProjectsContent } from '@/router/dashboardProjectsContent';
import { Separator } from './ui/separator';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ModeToggle } from '@/common/mode-toggle';

// function ContactCard() {
//   return (
//     <Card x-chunk="dashboard-02-chunk-0">
//       <CardHeader className="p-2 lg:p-4">
//         {/* <CardTitle>Contact me</CardTitle> */}
//         <CardDescription>Site developed by Christopher Pinedo.</CardDescription>
//         <CardDescription>Visit my portfolio and my social networks.</CardDescription>
//       </CardHeader>
//       <CardContent className="flex justify-between p-2 pt-0 lg:p-4">
//         <Button variant="outline" size="icon">
//           <SquareUserRound className="h-4 w-4" />
//         </Button>
//         <div className="flex gap-2 lg:gap-6">
//           <Button variant="outline" size="icon">
//             <SquareUserRound className="h-4 w-4" />
//           </Button>
//           <Button variant="outline" size="icon">
//             <SquareUserRound className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

function ProjectsMenu() {
  return (
    <div>
      <nav className="px-3">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) => (isActive ? 'font-semibold underline' : 'font-normal')}
        >
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
                  <NavLink
                    to={route.routes.dashboard}
                    className={({ isActive }) => (isActive ? 'font-semibold underline' : 'font-normal')}
                  >
                    <CommandItem key={routeIndex} className="cursor-pointer">
                      <span>{route.name}</span>
                    </CommandItem>
                  </NavLink>
                ))}
              <CommandSeparator className="mb-2" />
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}

export function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location);
    if (location.pathname === '/') {
      navigate('/dashboard/home', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[320px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="fixed flex h-full max-h-screen flex-col gap-2 md:w-[219px] lg:w-[319px]">
          <div className="flex h-14 items-center justify-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/dashboard/home" className="item flex gap-2 font-semibold">
              <CodeXml className="h-6 w-6" />
              <span>Frontend Projects</span>
            </Link>
          </div>
          <div className="flex-1">
            <ProjectsMenu />
          </div>
          <div className="mt-auto flex flex-col gap-2 p-4">
            <ModeToggle />
            {/* <ContactCard /> */}
          </div>
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
              <div className="mt-auto flex flex-col gap-2">
                <ModeToggle />
                {/* <ContactCard /> */}
              </div>
            </SheetContent>
          </Sheet>
          {/* <div className="flex w-full flex-1 flex-row items-center gap-2 text-lg font-medium">
            <h4 className="md:text-ml text-sm font-semibold">Frontend Mentor projects</h4>
            <CodeXml className="h-6 w-6" />
            <p>Frontend Projects</p>
          </div> */}
        </header>
        <main className="mx-auto min-h-screen w-full max-w-screen-2xl p-4 md:px-8 xl:px-12">
          {location.pathname === '/dashboard/home' ? (
            <Outlet />
          ) : (
            <>
              {dashboardProjectsContent
                .filter((project) => location.pathname === project.routes.dashboard)
                .map((project, i) => (
                  <div key={i} className="flex h-full flex-col gap-4 lg:flex-row">
                    <section className="lg:flex-1 lg:basis-1/3 xl:basis-1/4">
                      <Card>
                        <CardHeader>
                          <CardTitle>{project.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                          <Separator />
                          <div className="flex flex-col gap-2 rounded border border-dashed p-2">
                            <span>Description:</span>
                            <CardDescription>{project.desc} </CardDescription>
                          </div>
                          <div className="flex flex-col gap-2 rounded border border-dashed p-2">
                            <span>Technologies:</span>
                            <div className="flex cursor-default flex-wrap justify-center gap-2">
                              {project.technologies.map((tech, i) => (
                                <Badge key={i}>{tech}</Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 rounded border border-dashed p-2">
                            <span>Reference:</span>
                            <div className="flex items-center">
                              <span className="flex-1">{project.reference.name}</span>
                              <Button asChild>
                                <a href={project.reference.url} target="_blank">
                                  <span>View</span>
                                  <Eye className=" ml-4 h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                          <Separator />
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-center gap-2">
                              <Button className="basis-1/2" asChild>
                                <a href={project.source.url} target="_blank">
                                  <span>Source code</span>
                                  <Github className=" ml-4 h-4 w-4" />
                                </a>
                              </Button>
                              <Button className="basis-1/2" asChild>
                                <Link to={project.routes.singleView}>
                                  <span>Open in full screen</span>
                                  <Maximize2 className=" ml-4 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </section>
                    <section className=" lg:basis-2/3 xl:basis-3/4 ">
                      <Card className=" h-full *:h-full *:rounded-lg">
                        <Outlet />
                      </Card>
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
