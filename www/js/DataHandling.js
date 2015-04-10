

document.addEventListener("DOMContentLoaded", function(){
    hammerStuff();
});
    var formHandlers = {
        
//            text inputs
        inputPersonOccasion: document.getElementById("new-per-occ"),
        inputGift: document.getElementById("new-idea"),

//            dropdown menue
        inputOptionsHolder: document.getElementById("list-per-occ"),
        
//            lists
        listOfPeople: document.querySelector("#people-list ul"),
        listOfPeople: document.querySelector("#occasion-list ul"),


//            functions
        
        SubmitPersonOccasion: function(ev){
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.addPersonOccasion);
            ev.preventDefault();
            var saveableData = formHandlers.inputPersonOccasion.value;
            if(document.getElementById("personOrOccasionH3").innerHTML == "New Person"){
                AddToPeople(saveableData);
                ListResultsForPeople();
            }else if(document.getElementById("personOrOccasionH3").innerHTML = "New Occasion"){
                AddToOccasions(saveableData);
                ListResultsForOccasions();
            }else{
                alert("something is wrong");
            }
        visualControls.addPersonOccasion.removeAttribute("data-person-name");
        visualControls.addPersonOccasion.removeAttribute("data-person-id");
        visualControls.addPersonOccasion.removeAttribute("data-occasion-name");
        visualControls.addPersonOccasion.removeAttribute("data-occasion-id");
        },
        SubmitGift: function(ev){
                ev.preventDefault();
//                visualControls.addGift.setAttribute("data-person-id", 3);
            
//            visualControls.Activate(visualControls.addGift);
                var saveableText = formHandlers.inputGift.value;
            visualControls.addGift = document.getElementById('add-gift');
                var occ_id = visualControls.addGift.getAttribute("data-occasion-id");
                var person_id = visualControls.addGift.getAttribute("data-person-id");
                var occ_name = visualControls.addGift.getAttribute("data-occasion-name");
                var person_name = visualControls.addGift.getAttribute("data-person-name");
                if(occ_name == null){
                    occ_id = formHandlers.inputOptionsHolder.value;
                    AddToGifts(occ_id, person_id, saveableText, 'false');
//                    alert("Should be on person occ id from dropdown: " + occ_id +", person od from modal: "+ person_id);
                }else if(person_name == null){
                    person_id = formHandlers.inputOptionsHolder.value;
                    AddToGifts(occ_id, person_id, saveableText, 'false');
//                    alert("should be on occasion person id from dropdown: " + person_id +", occ od from modal: "+ occ_id);
                }else{
                    alert("ugh oh");
                };
        visualControls.addGift.removeAttribute("data-person-name");
        visualControls.addGift.removeAttribute("data-person-id");
        visualControls.addGift.removeAttribute("data-occasion-name");
        visualControls.addGift.removeAttribute("data-occasion-id");
           
        },
        
        ClickedListOfPeople: function(ev){
//            ev.stopPropagation();
            var personId = ev.target.getAttribute("data-person");
            var personName = ev.target.innerHTML;
            visualControls.Activate(visualControls.pagePersonGiftList);
            visualControls.pagePersonGiftList.setAttribute("data-person-id", personId);
            visualControls.pagePersonGiftList.setAttribute("data-person-name", personName);
            
            document.getElementById("person-title").innerHTML= personName;
            document.getElementById("person-name").innerHTML= personName;
            ListGiftResults('person_id', personId);
            visualControls.Hide(visualControls.pagePeopleList);
            visualControls.Activate(visualControls.pagePersonGiftList);
        },
        
        ClickedListOfOccasions: function(ev){
//            ev.stopPropagation();
            var occasionId = ev.target.getAttribute("data-occ");
            var occasionName = ev.target.innerHTML;
            visualControls.Activate(visualControls.pageOccasionGiftList);
            visualControls.pageOccasionGiftList.setAttribute("data-occasion-id", occasionId);
            visualControls.pageOccasionGiftList.setAttribute("data-occasion-name", occasionName);
            document.getElementById("occasion-title").innerHTML= occasionName;
            document.getElementById("occasion-name").innerHTML= occasionName;
            ListGiftResults('occ_id', occasionId);
            visualControls.Hide(visualControls.pageOccasionList);
            visualControls.Activate(visualControls.pageOccasionGiftList);
        },
        
    };
//    
//    visualControls.listOfPeople.addEventListener("click", function(ev){
//        formHandlers.ClickedListOfPeople(ev);
//    });
//    
//    visualControls.listOfOccasions.addEventListener("click", function(ev){
//        formHandlers.ClickedListOfOccasions(ev);
//    });
//    
//    visualControls.btnPersonOccasionSave.addEventListener("click", function(ev){
//        formHandlers.SubmitPersonOccasion(ev);
//    });
//    
//    not working
    formHandlers.inputPersonOccasion.addEventListener("submit", function(ev){
        formHandlers.SubmitPersonOccasion(ev);
    });
//              
//    
//    visualControls.btnAddGiftSave.addEventListener("click", function(ev){
//        formHandlers.SubmitGift(ev);
//    });
//    
//     visualControls.btnGiftPeopleAdd.addEventListener("click", function(ev){
//        var person_id = visualControls.pageOccasionGiftList.getAttribute("data-occasion-id");
//        var occ_id = visualControls.pageOccasionGiftList.getAttribute("data-occasion-id");
//        if(occ_id == null){
//            var optionString = null;
//            db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM occasions", [], function (tx, results) {
//   var len = results.rows.length, i;
//   for (i = 0; i < len; i++){
//       optionString +=  "<option value='" + results.rows.item(i).occ_id + "'>" + results.rows.item(i).occ_name + "</option>";
//   }
//   document.getElementById("list-per-occ").innerHTML = optionString;
// }, null);
//});
//            
//        }else{
//            var optionString = null;
//            db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM people", [], function (tx, results) {
//   var len = results.rows.length, i;
//   for (i = 0; i < len; i++){
//       optionString +=  "<option value='" + results.rows.item(i).person_id + "'>" + results.rows.item(i).person_name + "</option>";}
//   document.getElementById("list-per-occ").innerHTML = optionString;
// }, null);
//});
//            
////        }else{
////            alert("broke it!!");
//        };
//        visualControls.selectOptions.innerHTML = null;
//     });
//    
//     visualControls.btnGiftOccasionsAdd.addEventListener("click", function(ev){
//        var person_id = visualControls.pagePersonGiftList.getAttribute("data-person-id");
//        var occ_id = visualControls.pagePersonGiftList.getAttribute("data-occasion-id");
//        if(occ_id == null){
//            var optionString = null;
//            db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM occasions", [], function (tx, results) {
//   var len = results.rows.length, i;
//   for (i = 0; i < len; i++){
//       optionString +=  "<option value='" + results.rows.item(i).occ_id + "'>" + results.rows.item(i).occ_name + "</option>";
//   }
//   document.getElementById("list-per-occ").innerHTML = optionString;
// }, null);
//});
//            
//        }else if(person_id == null){
//            var optionString = null;
//            db.transaction(function (tx) {
//   tx.executeSql("SELECT * FROM people", [], function (tx, results) {
//   var len = results.rows.length, i;
//   for (i = 0; i < len; i++){
//       optionString +=  "<option value='" + results.rows.item(i).person_id + "'>" + results.rows.item(i).person_name + "</option>";}
//   document.getElementById("list-per-occ").innerHTML = optionString;
// }, null);
//});
//            
//        }else{
//            alert("broke it!!");
//        };
//        visualControls.selectOptions.innerHTML = null;
//     });
//
//    visualControls.btnPersonOccasionCancel.addEventListener("click", function(ev){
//        ev.preventDefault();
//        visualControls.addGift.removeAttribute("data-occasion-id");
//        visualControls.addGift.removeAttribute("data-person-id");
//        visualControls.addGift.removeAttribute("data-occasion-name");
//        visualControls.addGift.removeAttribute("data-person-name");
//    });
//    
//    visualControls.btnAddGiftCancel.addEventListener("click", function(ev){
//        ev.preventDefault();
//        visualControls.addGift.removeAttribute("data-occasion-id");
//        visualControls.addGift.removeAttribute("data-person-id");
//        visualControls.addGift.removeAttribute("data-occasion-name");
//        visualControls.addGift.removeAttribute("data-person-name");
//    });
//});