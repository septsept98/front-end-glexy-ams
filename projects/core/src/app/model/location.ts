import { Company } from "./company";

export class Location {

	id! : string;
	namePlace! : string;
	code! : string;
	companyId! : Company;
	isActive! : boolean;
	
}
