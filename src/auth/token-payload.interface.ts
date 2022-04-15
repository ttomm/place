import { Role } from "./role.enum";

export interface TokenPayload {
    id: number;
    email: string;
    role: Role;
    sub: number;
    iat: number;
    exp: number;
}