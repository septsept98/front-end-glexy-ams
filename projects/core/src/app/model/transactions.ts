import { Asset } from "./asset";
import { Employee } from "./employee";
import { Location } from "./location";
import { Users } from "./users";

export class Transactions {

	id! : string;
	codeTransaction! : string;
	checkOutDate! : string;
	description! : string;
	employeeId! : Employee;
	locationId! : Location;
	assetGeneralId! : Asset;
	userId! : Users;
	isActive! : boolean;


}
