import type { StatusEnum } from "./StatusEnum";

export interface User {
  id?: string;
  name: string;
  email: string;
  status: StatusEnum;
  createdAt?: Date;
}
