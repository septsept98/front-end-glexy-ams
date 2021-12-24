import { Asset } from "./asset";
import { StatusAsset } from "./status-asset";
import { StatusTransaction } from "./status-transaction";
import { Transactions } from "./transactions";

export class TransactionDetail {

	id! : string;
	transactionId! : Transactions;
	durationDate! : string;
	assetId! : Asset;
	statusAssetCheckoutId! : StatusAsset;
	dateCheckin! : string;
	statusEmail! : boolean;
	statusTrCheckinId! : StatusTransaction;
	isActive! : boolean;
	
}
