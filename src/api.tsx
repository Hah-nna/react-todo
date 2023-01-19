export interface props {
  todos: todoInitial[];
  setTodos: React.Dispatch<React.SetStateAction<todoInitial[]>>;
  isActive?: boolean;
}

export interface todoInitial {
  readonly id: number;
  title: string;
  content: string;
  isDone: boolean;
}
