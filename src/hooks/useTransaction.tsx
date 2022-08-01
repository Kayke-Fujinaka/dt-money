import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">; // Ele vai tirar esses valores da interface Transaction
// type TransactionInput = Pick<Transaction, 'title' |  'amount' | 'type' |  'category'> -> Ele vai pegar esses valores da interface Transaction

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(TransactionInput: TransactionInput) {
    const response = await api.post("/transaction", {
      ...TransactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export function useTransaction() {
  const context = useContext(TransactionContext);
  return context;
}
