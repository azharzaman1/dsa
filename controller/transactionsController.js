export const getTransactionsData = async (a) => {
  const res = await fetch("../model/transactions.json");
  const data = res.json();

  return data;
};
