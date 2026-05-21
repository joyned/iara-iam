import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlinePencil } from "react-icons/hi";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import PageBody from "../../components/PageBody";
import PageContent from "../../components/PageContent";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Status from "../../components/Status";
import { Table, TableData, TableRow } from "../../components/Table";
import type { User } from "../../models/User";
import { UserService } from "../../service/UserService";

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getUsers().then((users: User[]) => setUsers(users));
  }, []);

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
          {users.map((user: User) => {
            return (
              <TableRow>
                <TableData className="font-mono">{user.id}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>
                  <Status status={user.status} />
                </TableData>
                <TableData>Jan 1, 2023</TableData>
                <TableData>
                  <div className="flex gap-2 items-center">
                    <Icon>
                      <HiOutlinePencil />
                    </Icon>
                    <Icon variant="DANGER">
                      <FaRegTrashCan />
                    </Icon>
                  </div>
                </TableData>
              </TableRow>
            );
          })}
        </Table>
      </PageBody>
    </PageContent>
  );
}
