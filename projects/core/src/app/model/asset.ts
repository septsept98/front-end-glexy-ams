import { AssetType } from "./asset-type";
import { Brand } from "./brand";
import { Company } from "./company";
import { File } from "./file";
import { Inventory } from "./inventory";
import { Invoice } from "./invoice";
import { StatusAsset } from "./status-asset";

export class Asset {

	id! : string;
	names! : string;
	code! : string;
	expiredDate! : string;
	assetImg? : File;
	invoiceId! : Invoice;
	companyId! : Company;
	assetTypeId! : AssetType;
	inventoryId! : Inventory;
	statusAssetId! : StatusAsset;
	brandId! : Brand;
	isActive! : boolean;
}
