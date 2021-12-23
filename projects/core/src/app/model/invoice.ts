import { File } from "./file";

export class Invoice {

	id! : string;
	code! : string;
	purchaseDate! : Date;
	totalPrice! : number;
	invoiceImg! : File;
	isActive! : boolean;
	
}
