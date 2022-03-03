export class EntitiesProvider {
    private static readonly entities = [];

    static get() {
        return EntitiesProvider.entities;
    }
}