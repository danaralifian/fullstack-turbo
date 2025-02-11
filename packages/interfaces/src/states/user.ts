import IBaseState from "./base";
import IUser from "../models/user";

interface IUserState extends IBaseState<IUser> {}

export default IUserState;
