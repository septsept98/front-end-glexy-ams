import { Employee } from "./employee";
import { File } from "./file";
import { Roles } from "./roles";

export class Users {

	id! : string;
	email! : string;
	pass! : string;
	usersImg! : File;
	rolesId! : Roles;
	employeeId! : Employee;
	isActive! : boolean;

}
 