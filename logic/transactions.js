import { v4 } from "uuid";
import { getTransactionsData } from "../controller/transactionsController";

export const fetchAndPrepareTransactionsData = async () => {
  let transactionsData = await getTransactionsData();
  transactionsData = transactionsData.data;

  transactionsData = transactionsData.map((entry, i) => ({
    ...entry,
    // id: v4(),
    id: i + 1,
  }));

  return transactionsData;
};
