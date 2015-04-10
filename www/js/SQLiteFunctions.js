
var selectedPerson = "bob";
var selectedOccasion = "Halloween";
var db = openDatabase('Oudyy0001GIFTRAppDB', '1.0', 'Oudy0001 DB', 2 * 1024 * 1024);

var tables = {people: {name: "people", id: "person_id", text: "person_name"}, occasions: {name: "occasions", id: "occ_id", text: "occ_name"}, gifts: {name: "gifts", id: "gift_id", person: "person_id", occ: "occ_id", idea: "gift_idea", purchased: "purchased"}};

function DeleteFromTable(tableName, conditionName, conditionValue){
//function DeleteFromTable(){
    db.transaction(function (tx) {
        var query = "DELETE FROM " + tableName + " WHERE " + conditionName + "=" + conditionValue + "";
//        var query = "DELETE FROM occasions WHERE occ_id=2";
        tx.executeSql(query);
    }, null);
};

function AddToOccasions(occ_name){
    db.transaction(function (tx) {
        var query = "INSERT INTO occasions ('occ_name') VALUES ('" +
            occ_name + "')";
        tx.executeSql(query);
    }, null);
};

function AddToPeople(person_name){
    db.transaction(function (tx) {
        var query = "INSERT INTO people ('person_name') VALUES ('" + person_name + "')";
        tx.executeSql(query);
    }, null);
};

function ListResultsForPeople(){
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM people', [], function (tx, results) {
            var len = results.rows.length;
            if(len == 1){
                msg = "<p>Found 1 person</p>";
            }else{
                msg = "<p>Found " + len + " people</p>";
            }
            document.querySelector('#people-list #status').innerHTML =  msg;
            document.querySelector("#people-list ul").innerHTML = null;
            var htmlstring = "";
            for (i = 0; i < len; i++){
    //      alert(results.rows.item(i).name );

                htmlstring +=  "<li data-person-id='" + results.rows.item(i).person_id + "' >" + results.rows.item(i).person_name + "</li>";
            }
            document.querySelector("#people-list ul").innerHTML = htmlstring;
        }, null);
    });
};

function ListResultsForOccasions(){
    db.transaction(function (tx) {
   tx.executeSql("SELECT * FROM occasions", [], function (tx, results) {
       var htmlstring = "";
   var len = results.rows.length, i;
       var result
            if(len == 1){
                msg = "<p>Found 1 occasion</p>";
            }else{
                msg = "<p>Found " + len + " occasions</p>";
            }
   document.querySelector('#occasion-list #status').innerHTML =  msg;
       document.querySelector("#occasion-list ul").innerHTML = null;
   for (i = 0; i < len; i++){
//      alert(results.rows.item(i).name );
       
   htmlstring +=  "<li data-occ='" + results.rows.item(i).occ_id + "'>" + results.rows.item(i).occ_name + "</li>";
   }
        document.querySelector("#occasion-list ul").innerHTML = htmlstring;
 }, null);
});
};

function AddToGifts(occ_id, person_id, gift_idea, purchased){
    db.transaction(function (tx) {
        var query = "INSERT INTO gifts (person_id, occ_id, 'gift_idea', purchased) VALUES ("+ person_id +", "+ occ_id +", '"+ gift_idea +"', '"+ purchased +"')";
        tx.executeSql(query);
    }, null);
};

function UpdateGifts(occ_id, person_id, gift_idea, purchased){
    db.transaction(function (tx) {
        var query = "UPDATE gifts (person_id, occ_id, 'gift_idea', purchased) VALUES ("+ person_id +", "+ occ_id +", '"+ gift_idea +"', '"+ purchased +"')";
        tx.executeSql(query);
    }, null);
};

function ListGiftResults(PersonOrOccasion, id){
//            alert("?");
    try{
    db.transaction(function (tx) {
        var query = "SELECT * FROM gifts WHERE "+ PersonOrOccasion +" = "+ id +";";
        var querySelector = null;
        if(PersonOrOccasion == 'person_id'){
            querySelector = '#gifts-for-person [data-role=\"listview\"]';
        }else{
            querySelector = '#gifts-for-occasion [data-role=\"listview\"]';
        }
        
        tx.executeSql(query, [], function(tx, results){
            var len = results.rows.length;
            var listString = "";
//            var listString = "<option data-role=\"1\">richard</option>";
            if(len == 0){
                alert("nothing there");
            };
            for (i = 0; i < len; i++){
                listString += "<li data-role=\""+
                    results.rows.item(i).occ_id +"\">" +
                    results.rows.item(i).gift_idea + ": " +
                    results.rows.item(i).purchased + "</li>";
           }
            document.querySelector(querySelector).innerHTML = listString;
        });
    });
        }catch(error){
            alert(error);
        }
};

function PopulatePeople(){
    db.transaction(function (tx) {
            var query = null;
            query = "INSERT INTO people ('person_name') VALUES ('John')";
            tx.executeSql(query);
            query = "INSERT INTO people ('person_name') VALUES ('Bob')";
            tx.executeSql(query);
            query = "INSERT INTO people ('person_name') VALUES ('Jape')";
            tx.executeSql(query);
            query = "INSERT INTO people ('person_name') VALUES ('Larry')";
            tx.executeSql(query);
    }, null);  
};

function PopulateOccasions(){
    db.transaction(function (tx) {
            var query = "INSERT INTO occasions ('occ_name') VALUES ('Birthday')";
            tx.executeSql(query);
            var query = "INSERT INTO occasions ('occ_name') VALUES ('Christmas')";
            tx.executeSql(query);
            var query = "INSERT INTO occasions ('occ_name') VALUES ('Anniversery')";
            tx.executeSql(query);
    }, null);
};

function PopulateGifts(){
    
    db.transaction(function (tx) {
            var query = "INSERT INTO gifts ('person_id', 'occ_id', 'gift_idea', purchased) VALUES (2,2,'bike', 'false')";
            tx.executeSql(query);
            var query = "INSERT INTO gifts ('person_id', 'occ_id', 'gift_idea', purchased) VALUES (3,3,'game','false')";
            tx.executeSql(query);
            var query = "INSERT INTO gifts ('person_id', 'occ_id', 'gift_idea', purchased) VALUES (1,1,'nothing','false')";
            tx.executeSql(query);
    }, null);
};

document.addEventListener("DOMContentLoaded", function(){
    
//        creating tables if they dont exsist
    db.transaction(function (tx) {
//        clear tables
//        tx.executeSql('DROP TABLE occasions');
//        tx.executeSql('DROP TABLE people');
//        tx.executeSql('DROP TABLE gifts');
        
       tx.executeSql('CREATE TABLE IF NOT EXISTS people (person_id INTEGER PRIMARY KEY AUTOINCREMENT, person_name TEXT)');
       tx.executeSql('CREATE TABLE IF NOT EXISTS occasions (occ_id INTEGER PRIMARY KEY AUTOINCREMENT, occ_name TEXT)');
        
       tx.executeSql('CREATE TABLE IF NOT EXISTS gifts (gift_id INTEGER PRIMARY KEY AUTOINCREMENT, person_id INTEGER, occ_id INTEGER, gift_idea TEXT, purchased BOOLEAN)');

    });
    
//    PopulateGifts();
//    PopulateOccasions();
//    PopulatePeople();
    
//    DeleteFromTable(tables.people.name, tables.people.id, "1");
    
    ListResultsForPeople();
    ListResultsForOccasions();
});