export type Account = {
  _id: string;
  username: string;
  password: string;
  approved: boolean;
  confirmPassword?: string;
};
