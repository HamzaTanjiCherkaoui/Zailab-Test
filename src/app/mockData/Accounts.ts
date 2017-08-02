import {Account} from "../models/account.model";
const accounts: Account[] = [
    {
      name: 'Jhon',
      currentAccount: [
        {
          balance: 50000,
          overdraft: 8000,
          id: 1,
          history: [],
        },
        {
          balance: 15800,
          overdraft: 8000,
          id: 2,
          history: [],
        }
      ],
      savingAccount: [
        {
          balance: 500000,
          minimumBalance: 1000,
          minimumDeposit: 1000,
          id: 513,
          history: [],
        }
      ]
    },
  ]
  ;
export const UsersAccounts = accounts;
