//  Class to encapsulate the people model src/app/db/models/swPeopleModel.js

/* 
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: DataTypes.STRING,
            mass: DataTypes.INTEGER,
            height: DataTypes.INTEGER,
            homeworld_name: DataTypes.STRING,
            homeworld_id: DataTypes.STRING,
*/

class CommonPeople extends AbstractPeople {
    constructor(_peopleData){
        throw new Error("To be implemented");
    }
}