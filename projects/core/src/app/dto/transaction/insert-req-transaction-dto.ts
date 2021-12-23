import { TransactionDetail } from "../../model/transaction-detail";
import { Transactions } from "../../model/transactions";

export class InsertReqTransactionDto{

    dataTransaction! : Transactions;
    dataDetailTransaction! : TransactionDetail[];

}