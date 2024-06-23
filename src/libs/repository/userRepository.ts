import { randomUUID } from "node:crypto";

import { DataTypes } from "sequelize";

import { sequelize } from "./db";

const User = sequelize.define("User", {
  userId: DataTypes.STRING,
  name: DataTypes.STRING,
  email: DataTypes.STRING
});

export class UserRepository {
    async createUser(name: string, email: string) {
        const userId = randomUUID();
        return User.create({
            userId: userId,
            name: name,
            email: email
        });
    }
}