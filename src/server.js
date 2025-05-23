import { MongoClient, ServerApiVersion } from 'mongodb';
import {faker} from '@faker-js/faker';

const client = new MongoClient("mongodb+srv://Stas:stas0202@my-everyday-assistant.pnyxguh.mongodb.net/?retryWrites=true&w=majority&appName=my-everyday-assistant");

const db = client.db("app");
const users = db.collection("users");

async function run() {
    const fakeUsers = [];
    for (let i = 0; i < 50; i++) {
        fakeUsers.push({
            username: faker.person.fullName(),
            email: faker.internet.email(),
            age: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        });
    }
    users.insertMany(fakeUsers);

    client.close();
}
run();


