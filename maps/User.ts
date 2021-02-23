import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    // this.location.lat = 12; // 1. object 초기화를 안해주면 안됨
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}