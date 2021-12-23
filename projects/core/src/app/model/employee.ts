import { Company } from "./company";

export class Employee {

	id! : string;
	nameEmployee! : string;
	nip! : string;
	emailEmployee! : string;
	phoneNumber! : string;
	gender! : string;
	companyId! : Company;
	isActive! : boolean;
}
