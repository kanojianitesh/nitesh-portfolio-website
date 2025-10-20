import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { publications, conferences } from "./pubs";

function Publications() {
  return (
    <section className="flex flex-col items-center space-y-6 px-4">
      {/* Publications Card */}
      <Card className="max-w-4xl w-full">
        <CardHeader>
          <CardTitle>Publications</CardTitle>
          <CardDescription>Key research publications</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3">
            {publications.map(({ id, title, description }) => (
              <li key={id}>
                {title}
                {description && <div>{description}</div>}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Conferences / Workshops Card */}
      <Card className="max-w-4xl w-full">
        <CardHeader>
          <CardTitle>Conferences & Workshops</CardTitle>
          <CardDescription>
            Presentations and workshops attended
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3">
            {conferences.map(({ id, description }) => (
              <li key={id}>{description}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

export default Publications;
