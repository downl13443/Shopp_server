export type UserRole = "buyer" | "seller";

export type NewUser = {
  email: string;
  phone_number: string;
  nationality: string | null;
  password: string;
  role: UserRole;
};

export type User = {
  full_name: string;
  email: string;
  phone_number: string;
  nationality: string | null;
  password: string;
  role: UserRole;
  date_of_birth: string;
  refresh_token?: string;
};

export type UpdateUser = {
    full_name: string;
    date_of_birth: string;
    avatarImg: string;
    userId: number;
    phone_number: string;
    email: string;
    nationality: string | null;
}

