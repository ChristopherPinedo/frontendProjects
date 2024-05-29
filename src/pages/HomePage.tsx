import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { dashboardProjectsContent } from '@/router/dashboardProjectsContent';
import { dashboardProjectsLevels } from '@/router/dashboardProjectsLevels';
import { CodeXml, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className=" my-4 flex flex-col gap-4 md:my-8 md:gap-8 xl:my-12 xl:gap-12">
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
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {dashboardProjectsContent
                .filter((project) => routeLevel.name === project.level.name)
                .map((project, projectIndex) => (
                  <Card key={projectIndex} className="p-2">
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2 rounded border border-dashed p-2">
                        <span>Description:</span>
                        <CardDescription>{project.desc} </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 rounded border border-dashed p-2">
                        <span>Technologies:</span>
                        <div className="flex cursor-default flex-wrap justify-center gap-2">
                          {project.technologies.map((tech) => (
                            <Badge>{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-center gap-2">
                          <Button className="w-full" asChild>
                            <Link to={project.routes.dashboard}>
                              <span>View Project</span>
                              <SquareArrowOutUpRight className=" ml-4 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </>
  );
}

export { HomePage };
