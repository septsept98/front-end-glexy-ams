import { File } from "./file";

export class Invoice {

	id! : string;
	code! : string;
	purchaseDate! : string;
	totalPrice! : number;
	invoiceImg! : File;
	isActive! : boolean;
	
}
