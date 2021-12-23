import { Asset } from "./asset";
import { StatusAsset } from "./status-asset";
import { StatusTransaction } from "./status-transaction";
import { Transactions } from "./transactions";

export class TransactionDetail {

	id! : string;
	transactionId! : Transactions;
	durationDate! : Date;
	assetId! : Asset;
	statusAssetCheckoutId! : StatusAsset;
	dateCheckin! : Date;
	statusEmail! : boolean;
	statusTrCheckinId! : StatusTransaction;
	isActive! : boolean;
	
}
