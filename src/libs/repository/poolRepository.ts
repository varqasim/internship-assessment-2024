import { DataTypes } from "sequelize";

import { sequelize } from "./db";

const Pool = sequelize.define("Pool", {
   name: DataTypes.STRING,
   city: DataTypes.STRING,
   ownerId: DataTypes.STRING
});

export class PoolRepository {
    async createPool() {
        // TODO
    }
}