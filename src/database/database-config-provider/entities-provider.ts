import { User } from "src/user/user.entity";

export class EntitiesProvider {
    private static readonly entities = [
        User
    ];

    static get() {
        return EntitiesProvider.entities;
    }
}