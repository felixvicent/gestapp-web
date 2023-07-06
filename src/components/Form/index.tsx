export * from "./CategoryForm/interface";
import { CategoryForm } from "./CategoryForm";

import { LoginForm } from "./LoginForm";

import { RegisterForm } from "./RegisterForm";

export * from "./TransactionForm/interface";
import { TransactionForm } from "./TransactionForm";

export const Form = {
  Category: CategoryForm,
  Login: LoginForm,
  Register: RegisterForm,
  Transaction: TransactionForm,
};
