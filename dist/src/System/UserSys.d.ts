import MainRequest from './MainRequest';
export declare class UserSys {
    idUser: number;
    private apikey;
    private userInfoList;
    private userGroupsList;
    private ctrlAccessList;
    private aliasCtrlAccess;
    private idCtrlAccess;
    private accessCRUDList;
    private req;
    private userSQL;
    private errorSys;
    private userGroupSQL;
    private accessGroupSQL;
    private ctrlAccessSQL;
    constructor(req: MainRequest);
    init(): Promise<void>;
    isAccessCtrl(alias: string): Promise<boolean>;
    isAccessCreate(): boolean;
    isAccessRead(): boolean;
    isAccessUpdate(): boolean;
    isAccessDelete(): boolean;
    isOrg(): boolean;
    isOrgAdmin(): boolean;
    isAdmin(): boolean;
    isAuth(): Promise<boolean>;
    fGetApikey(): string;
    getIdUser(): number;
}
