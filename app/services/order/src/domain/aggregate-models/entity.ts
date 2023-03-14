export abstract class Entity {
    _id: number;
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _domainEvents: any[]; // TODO: Interface for DoaminEvent
    get domainEvents() {
        return this._domainEvents;
    }

    addDomainEvent(eventItem: any) {
        this._domainEvents = this._domainEvents ?? [];
        this._domainEvents = [...this._domainEvents, eventItem];
    }

    removeDomainEvent(eventItem: any) {
        this._domainEvents = this._domainEvents?.filter(
            (de) => de.uid === eventItem.uid
        );
    }

    clearDomainEvents() {
        this._domainEvents = null;
    }
}
