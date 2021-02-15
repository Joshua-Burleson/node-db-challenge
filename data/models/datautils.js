const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

class DataTable {
    
    constructor(table, primaryKeyName = 'id'){
        this.primaryKeyName = primaryKeyName;
        this.dbTable = () => db(table);
    }

    getAll(){
        return this.dbTable();
    }

    getByKey(key){
        return this.dbTable()
            .where({[this.primaryKeyName]: key})
            .first();
    }

    insert(newItem){
        return this.dbTable()
            .insert(newItem)
            .then( keyArray => this.getByKey(keyArray[0]) );
    }

    update(key, updatedData){
        return this.dbTable()
            .where({[this.primaryKeyName]: key})
            .update(updatedData);
    }

    delete(key){
        return this.dbTable()
            .where({[this.primaryKeyName]: key})
            .del();
    }

    get_dbTable(){
        return this.dbTable();
    }

}

class Exception extends Error {
    constructor(code, message){
        super(message);
        this.code = code;
    }
}

module.exports = {
                    DataTable,
                    db,
                    Exception
                 };