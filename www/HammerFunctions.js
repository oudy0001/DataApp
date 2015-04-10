
function hammerStuff(){
//    add buttons
    var btnPeopleAdd = new Hammer(visualControls.btnPeopleAdd);
    var btnOccasionAdd = new Hammer(visualControls.btnOccasionAdd);
    var btnGiftOccasionsAdd = new Hammer(visualControls.btnGiftOccasionsAdd);
    var btnGiftPeopleAdd = new Hammer(visualControls.btnGiftPeopleAdd);
    
//    cancel buttons
    var btnPersonOccasionCancel = new Hammer(visualControls.btnPersonOccasionCancel);
    var btnAddGiftCancel = new Hammer(visualControls.btnAddGiftCancel);
    
//    save
    var btnPersonOccasionSave = new Hammer(visualControls.btnPersonOccasionSave);
    var btnAddGiftSave = new Hammer(visualControls.btnAddGiftSave);
    
//    splash
    var splash = new Hammer(visualControls.splash);
    
//    modals
    var addGift = new Hammer(visualControls.addGift);
    var addPersonOccasion = new Hammer(visualControls.addPersonOccasion);
    var confirmDelete = new Hammer(visualControls.confirmDelete);
    
//    overlay
    var overlay = new Hammer(visualControls.overlay);
    
//    lists
    var listPersonGifts = new Hammer(visualControls.listPersonGifts);
    var listOccasionGifts = new Hammer(visualControls.listOccasionGifts);
    
//    select
    var selectOptions = new Hammer(visualControls.selectOptions);
    
//    pages
    var pagePeopleList = new Hammer(visualControls.pagePeopleList);
    var pageOccasionList = new Hammer(visualControls.pageOccasionList);
    var pagePersonGiftList = new Hammer(visualControls.pagePersonGiftList);
    var pageOccasionGiftList = new Hammer(visualControls.pageOccasionGiftList);
    var listOfPeople = new Hammer(visualControls.listOfPeople);
    
//    generated lists
    var listOfOccasions = new Hammer(visualControls.listOfOccasions);
    
//     types of hammer
var singleTap = new Hammer.Tap({ event: 'singletap' });
var doubleTap = new Hammer.Tap({event: 'doubletap', taps: 2 });
var swipeleft = new Hammer.Tap({event: 'swipeleft'});
var swiperight = new Hammer.Tap({event: 'swiperight'});
    
singleTap.requireFailure(doubleTap);
    
//    single tap stuff
    btnPeopleAdd.on('singletap', function(ev){
        ev.preventDefault();
        visualControls.Activate(visualControls.overlay);
        visualControls.AddOccasion();
    });
    btnOccasionAdd.on('singletap', function(ev){
        ev.preventDefault();
        visualControls.Activate(visualControls.overlay);
        visualControls.AddOccasion();
    });
    btnGiftOccasionsAdd.on('singletap', function(ev){
        ev.preventDefault();
        var personId = visualControls.pagePersonGiftList.getAttribute("data-person-id");
        var personName = visualControls.pagePersonGiftList.getAttribute("data-person-name");
        
        visualControls.Activate(visualControls.overlay);
        visualControls.GiftForPerson(personName);
        visualControls.addGift.setAttribute("data-person-id", personId);
        visualControls.addGift.setAttribute("data-person-name", personName);
    });
    btnGiftPeopleAdd.on('singletap', function(ev){
        ev.preventDefault();
        var occasionId = visualControls.pageOccasionGiftList.getAttribute("data-occasion-id");
        var occasionName = visualControls.pageOccasionGiftList.getAttribute("data-occasion-name");
        visualControls.Activate(visualControls.overlay);
        visualControls.GiftForOccasion(occasionName);
        visualControls.addGift.setAttribute("data-occasion-id", occasionId);
        visualControls.addGift.setAttribute("data-occasion-name", occasionName);
    });
    btnPersonOccasionCancel.on('singletap', function(ev){
        ev.preventDefault();
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.addPersonOccasion);
    });
    btnAddGiftCancel.on('singletap', function(ev){
        ev.preventDefault();
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.addGift);
    });
    btnAddGiftSave.on('singletap', function(ev){
        ev.preventDefault();
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.addGift);
    });
    
//    originally coded in form handlers
    listOfPeople.on('singletap', function(ev){
        console.log(ev);
        formHandlers.ClickedListOfPeople(ev);
    });
    listOfOccasions.on('singletap', function(ev){
        console.log(ev);
        formHandlers.ClickedListOfOccasions(ev);
    });
    btnPersonOccasionSave.on('singletap', function(ev){
        console.log(ev);
        formHandlers.SubmitPersonOccasion(ev);
    });
//    not working
//    formHandlers.inputPersonOccasion.on('doubletap', function(ev){
//        console.log(ev);
//        formHandlers.inputPersonOccasion(ev);
//    });
    btnAddGiftSave.on('singletap', function(ev){
        console.log(ev);
        formHandlers.SubmitGift(ev);
    });
    btnGiftPeopleAdd.on('singletap', function(ev){
        console.log(ev);
        
        var person_id = visualControls.pageOccasionGiftList.getAttribute("data-occasion-id");
        var occ_id = visualControls.pageOccasionGiftList.getAttribute("data-occasion-id");
        if(occ_id == null){
            var optionString = null;
            db.transaction(function (tx) {
   tx.executeSql("SELECT * FROM occasions", [], function (tx, results) {
   var len = results.rows.length, i;
   for (i = 0; i < len; i++){
       optionString +=  "<option value='" + results.rows.item(i).occ_id + "'>" + results.rows.item(i).occ_name + "</option>";
   }
   document.getElementById("list-per-occ").innerHTML = optionString;
 }, null);
});
            
        }else{
            var optionString = null;
            db.transaction(function (tx) {
   tx.executeSql("SELECT * FROM people", [], function (tx, results) {
   var len = results.rows.length, i;
   for (i = 0; i < len; i++){
       optionString +=  "<option value='" + results.rows.item(i).person_id + "'>" + results.rows.item(i).person_name + "</option>";}
   document.getElementById("list-per-occ").innerHTML = optionString;
 }, null);
});
            
//        }else{
//            alert("broke it!!");
        };
        visualControls.selectOptions.innerHTML = null;
     
    });
    btnGiftOccasionsAdd.on('singletap', function(ev){
        console.log(ev);
        var person_id = visualControls.pagePersonGiftList.getAttribute("data-person-id");
        var occ_id = visualControls.pagePersonGiftList.getAttribute("data-occasion-id");
        if(occ_id == null){
            var optionString = null;
            db.transaction(function (tx) {
   tx.executeSql("SELECT * FROM occasions", [], function (tx, results) {
   var len = results.rows.length, i;
   for (i = 0; i < len; i++){
       optionString +=  "<option value='" + results.rows.item(i).occ_id + "'>" + results.rows.item(i).occ_name + "</option>";
   }
   document.getElementById("list-per-occ").innerHTML = optionString;
 }, null);
});
            
        }else if(person_id == null){
            var optionString = null;
            db.transaction(function (tx) {
   tx.executeSql("SELECT * FROM people", [], function (tx, results) {
   var len = results.rows.length, i;
   for (i = 0; i < len; i++){
       optionString +=  "<option value='" + results.rows.item(i).person_id + "'>" + results.rows.item(i).person_name + "</option>";}
   document.getElementById("list-per-occ").innerHTML = optionString;
 }, null);
});
            
        }else{
            alert("broke it!!");
        };
        visualControls.selectOptions.innerHTML = null;
     
    });
    btnPersonOccasionCancel.on('singletap', function(ev){
        console.log(ev);
        visualControls.addGift.removeAttribute("data-occasion-id");
        visualControls.addGift.removeAttribute("data-person-id");
        visualControls.addGift.removeAttribute("data-occasion-name");
        visualControls.addGift.removeAttribute("data-person-name");
    });
    btnAddGiftCancel.on('singletap', function(ev){
        console.log(ev);
        visualControls.addGift.removeAttribute("data-occasion-id");
        visualControls.addGift.removeAttribute("data-person-id");
        visualControls.addGift.removeAttribute("data-occasion-name");
        visualControls.addGift.removeAttribute("data-person-name");
    });
    
//    swipes
    pageOccasionGiftList.on('swiperight', function(){
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.pageOccasionGiftList);
        visualControls.Activate(visualControls.pageOccasionList);
    });
    pagePersonGiftList.on('swiperight', function(){
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.pagePersonGiftList);
        visualControls.Activate(visualControls.pagePeopleList);
    });
    pageOccasionList.on('swiperight', function(){
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.pageOccasionList);
        visualControls.Activate(visualControls.pagePeopleList);
    });
    pagePeopleList.on('swipeleft', function(){
        visualControls.Hide(visualControls.overlay);
        visualControls.Hide(visualControls.pagePeopleList);
        visualControls.Activate(visualControls.pageOccasionList);
    });
    
//    double tap stuff
    listOfPeople.on('doubletap', function(ev){
        console.log('double tap' + ev);
        var personId = ev.target.getAttribute("data-person-id");
        DeleteFromTable('people','person_id',personId);
        DeleteFromTable('gifts','person_id',personId);
        ListResultsForPeople();
    });
    listOfOccasions.on('doubletap', function(ev){
        console.log('doubletap' + ev);
        var occId = ev.target.getAttribute("data-occ");
        DeleteFromTable('occasions','occ_id',occId);
        DeleteFromTable('gifts','occ_id',occId);
        ListResultsForOccasions();
    });
    
};