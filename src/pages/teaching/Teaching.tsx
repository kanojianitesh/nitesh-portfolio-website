import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Teaching() {
  return (
    <section className="flex justify-center">
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Courses </CardTitle>
          <CardDescription>
            Courses taught at IIT Delhi as a teaching assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>BBL131 – Principles of Biochemistry, IIT Delhi</li>
            <li>
              BBL757 – Electromicrobiology and Bioelectrochemical Systems, IIT
              Delhi
            </li>
            <li>
              Assisted in laboratory course design and evaluation for
              undergraduate and postgraduate students.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default Teaching;
