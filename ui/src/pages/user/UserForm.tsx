import { FaPlus } from "react-icons/fa";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { SlidePanel } from "../../components/SlidePanel";
import TextArea from "../../components/TextArea";
import { StatusEnum } from "../../models/StatusEnum";

interface Props {
  id?: string;
  slidePanelRef: any;
}

export default function UserForm(props: Props) {
  return (
    <SlidePanel
      ref={props.slidePanelRef}
      title={props.id ? "Edit User" : "Add User"}
      subtitle={
        props.id
          ? "Manage user account"
          : "Add a new user account to the system"
      }
      icon={<FaPlus />}
    >
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <span className="font-bold text-black/70 border-b border-black/10 pb-2">
            Basic Information
          </span>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-sm font-bold">
              FULL NAME
            </label>
            <Input id="fullname" name="fullname" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-sm font-bold">
                USERNAME
              </label>
              <Input id="username" name="username" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold">
                EMAIL
              </label>
              <Input id="email" name="email" type="email" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold text-black/70 border-b border-black/10 pb-2">
            Password
          </span>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-bold">
                PASSWORD
              </label>
              <Input id="password" name="password" type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmpassword" className="text-sm font-bold">
                CONFIRM PASSWORD
              </label>
              <Input id="confirmpassword" name="confirmpassword" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold text-black/70 border-b border-black/10 pb-2">
            Account Settings
          </span>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-bold">
                STATUS
              </label>
              <Select
                id="status"
                name="status"
                options={[
                  { name: StatusEnum.ACTIVE },
                  { name: StatusEnum.INACTIVE },
                ]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="profile" className="text-sm font-bold">
                PROFILE
              </label>
              <Select id="profile" name="profile" options={[]} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="accountexpiration" className="text-sm font-bold">
                ACCOUNT EXPIRATION
              </label>
              <Input
                id="accountexpiration"
                name="accountexpiration"
                type="date"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold text-black/70 border-b border-black/10 pb-2">
            Metadata
          </span>
          <TextArea rows={5} />
        </div>
      </form>
    </SlidePanel>
  );
}
