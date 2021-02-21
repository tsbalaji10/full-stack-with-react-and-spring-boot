import faker from 'faker'
export class User {
    name: string;
    markerContent(): string {
        return `User Name: ${this.name}`
    }
    location: {
        lat: number,
        lng: number
    }
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}