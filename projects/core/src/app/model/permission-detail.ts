import { Permissions } from "./permissions";
import { Roles } from "./roles";

export class PermissionDetail {
	
	id? : string;
	rolesId? : Roles;
	permissionsId? : Permissions;
	isActive? : boolean;

}
