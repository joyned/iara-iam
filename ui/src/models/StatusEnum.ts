const StatusEnum = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
};

type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum];

export { StatusEnum };
