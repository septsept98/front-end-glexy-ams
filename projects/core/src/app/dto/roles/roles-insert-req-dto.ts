import { PermissionDetail } from "../../model/permission-detail";
import { Roles } from "../../model/roles";

export class RolesInsertReqDto {

    roles! : Roles;
    data! : PermissionDetail[];
    
}