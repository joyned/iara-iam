import { StatusEnum } from "../models/StatusEnum";
import type { User } from "../models/User";
import { uuid } from "../utils/uuid";

export class UserService {
  static getUsers(): Promise<User[]> {
    return Promise.resolve<User[]>([
      {
        id: uuid(),
        name: "João Silva",
        email: "joao.silva@email.com",
        status: StatusEnum.ACTIVE,
        createdAt: new Date("2024-01-15T10:30:00"),
      },
      {
        id: uuid(),
        name: "Maria Oliveira",
        email: "maria.oliveira@email.com",
        status: StatusEnum.ACTIVE,
        createdAt: new Date("2024-01-20T14:45:00"),
      },
      {
        id: uuid(),
        name: "Carlos Santos",
        email: "carlos.santos@email.com",
        status: StatusEnum.INACTIVE,
        createdAt: new Date("2024-02-01T09:15:00"),
      },
      {
        id: uuid(),
        name: "Ana Paula Costa",
        email: "ana.costa@email.com",
        status: StatusEnum.ACTIVE,
        createdAt: new Date("2024-02-10T16:20:00"),
      },
      {
        id: uuid(),
        name: "Roberto Almeida",
        email: "roberto.almeida@email.com",
        status: StatusEnum.ACTIVE,
        createdAt: new Date("2024-02-15T11:00:00"),
      },
      {
        id: uuid(),
        name: "Fernanda Lima",
        email: "fernanda.lima@email.com",
        status: StatusEnum.INACTIVE,
        createdAt: new Date("2024-02-20T13:30:00"),
      },
      {
        id: uuid(),
        name: "Paulo Mendes",
        email: "paulo.mendes@email.com",
        status: StatusEnum.INACTIVE,
        createdAt: new Date("2024-03-01T08:45:00"),
      },
      {
        id: uuid(),
        name: "Carla Souza",
        email: "carla.souza@email.com",
        status: StatusEnum.ACTIVE,
        createdAt: new Date("2024-03-05T17:10:00"),
      },
    ]);
  }
}
