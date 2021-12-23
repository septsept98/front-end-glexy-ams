import { StatusAsset } from "./status-asset";

export class StatusTransaction {

	id! : string;
	codeStatusTr! : string;
	nameStatusTr! : string;
	statusAssetId! : StatusAsset;
	isActive! : boolean;
	
}
