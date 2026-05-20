import { FaUserPlus } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";
import PageContent from "../../components/PageContent";
import PageBody from "../../components/PageBody";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { CiFilter } from "react-icons/ci";
import { Table, TableData, TableRow } from "../../components/Table";
import Status from "../../components/Status";

export default function UserPage() {
  return (
    <PageContent>
      <PageHeader
        title="Users"
        subtitle="Manage user accounts and permissions"
        buttonLabel="Add Users"
        buttonIcon={<FaUserPlus />}
      />
      <PageBody>
        <Card>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <Input placeholder="Search user by name..." className="w-full" />
              <Select options={[]} />
              <Button icon={<CiFilter />} variant="outline">
                More Filters
              </Button>
            </div>
            <Checkbox label="Show inactive users?" />
          </div>
        </Card>
        <Table header={["ID", "NAME", "EMAIL", "STATUS", "CREATED", "ACTIONS"]}>
          <TableRow>
            <TableData className="font-mono">910ab121-ea5c-45...</TableData>
            <TableData>John Doe</TableData>
            <TableData> johndoe@email.com</TableData>
            <TableData>
              <Status status="ACTIVE"/>
            </TableData>
            <TableData>Jan 1, 2023</TableData>
            <TableData></TableData>
          </TableRow>
        </Table>
      </PageBody>
    </PageContent>
  );
}
