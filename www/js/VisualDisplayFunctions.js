var visualControls = {

//    buttons
//    add
    btnPeopleAdd: document.querySelector("#people-list button"),
    btnOccasionAdd: document.querySelector("#occasion-list button"),
    btnGiftOccasionsAdd: document.querySelector("#gifts-for-person button"), 
    btnGiftPeopleAdd: document.querySelector("#gifts-for-occasion button"),
//    cancel
    btnPersonOccasionCancel: document.getElementById("btnPersonOccasionCancel"), 
    btnAddGiftCancel: document.getElementById("btnAddGiftCancel"),
//    save
    btnPersonOccasionSave: document.getElementById("btnPersonOccasionSave"), 
    btnAddGiftSave: document.getElementById("btnAddGiftSave"),
    
//    splash screen
    splash: document.getElementById("splash"),
    
//    modals
    addGift: document.getElementById("add-gift"),
    addPersonOccasion: document.getElementById("add-person-occasion"),
    confirmDelete: document.getElementById("confirm-delete"),
    
//    overlay
    overlay: document.querySelector("[data-role=\"overlay\"]"),
    
//    lists
    listPersonGifts: document.querySelector("#gifts-for-person [data-role=\"listview\"]"),
    listOccasionGifts: document.querySelector("#gifts-for-occasion [data-role=\"listview\"]"),
    
//    select
    selectOptions: document.getElementById("list-per-occ"),
    
//    pages
    pagePeopleList: document.getElementById("people-list"),
    pageOccasionList: document.getElementById("occasion-list"),
    pagePersonGiftList: document.getElementById("gifts-for-person"),
    pageOccasionGiftList: document.getElementById("gifts-for-occasion"),
    
//    generated lists
    listOfPeople: document.querySelector("#people-list ul"),
    listOfOccasions: document.querySelector("#occasion-list ul"),
    
//    functions
    Hide: function(htmlObject){
        htmlObject.setAttribute("class", "hidden");
    },

    Activate: function (htmlObject){
        htmlObject.setAttribute("class", "active");
    },

    AddPerson: function(){
        document.getElementById("personOrOccasionH3").innerHTML = "New Person";
        visualControls.Activate(visualControls.overlay);
        visualControls.Activate(visualControls.addPersonOccasion);
    },

    AddOccasion: function(){
        document.getElementById("personOrOccasionH3").innerHTML = "New Occasion";
        visualControls.Activate(visualControls.overlay);
        visualControls.Activate(visualControls.addPersonOccasion);
    },

    GiftForPerson: function(selectedPerson){
        document.getElementById("giftOrOccasionH3").innerHTML = "New Gift for " + selectedPerson;
        visualControls.Activate(visualControls.overlay);
        visualControls.Activate(visualControls.addGift);
    },

    GiftForOccasion: function(selectedOccasion){
        document.getElementById("giftOrOccasionH3").innerHTML = "New Gift for " + selectedOccasion;
        visualControls.Activate(visualControls.overlay);
        visualControls.Activate(visualControls.addGift);
    },
    
    StartupDisplays: function(){
        setTimeout(function(){
            visualControls.Hide(visualControls.splash);
            visualControls.Activate(visualControls.pagePeopleList);
//            visualControls.Activate(visualControls.pageOccasionList);
//            visualControls.Activate(visualControls.pagePersonGiftList);
//            visualControls.Activate(visualControls.pageOccasionGiftList);
        }, 0);
    }
}
function FunctionalInit(){
//    visualControls.Hide(visualControls.listOccasionGifts);
//    visualControls.Hide(visualControls.listPersonGifts);
//    Quick call of the setup display
    visualControls.StartupDisplays();
    
////    Even Listeners for popup modals
//    visualControls.btnPeopleAdd.addEventListener("click", function(ev){
//        ev.preventDefault();
//    });
//    visualControls.btnOccasionAdd.addEventListener("click", function(ev){
//        ev.preventDefault();
////        alert("clicked occasions");
//    });
//    visualControls.btnGiftOccasionsAdd.addEventListener("click", function(ev){
//        ev.preventDefault();
////        alert("clicked gift people");
//    });
//    
//    visualControls.btnGiftPeopleAdd.addEventListener("click", function(ev){
//        ev.preventDefault();
////        alert("clicked gift occasion");
//        
//    });
//    
//    
////    event listeners to cancel modals
//    visualControls.btnPersonOccasionCancel.addEventListener("click", function(ev){
//        ev.preventDefault();
//    });
//    
//    visualControls.btnAddGiftCancel.addEventListener("click", function(ev){
//        ev.preventDefault();
//    });
//    
//    
////    event listeners to save modals
//    
//    visualControls.btnAddGiftSave.addEventListener("click", function(ev){
//        ev.preventDefault();
//    });
    
//    event listeners for panning
}
//    listContacts.hammeredContacts = new Hammer(contactOutput, {});
//    var singleTap = new Hammer.Tap({ event: 'tap' });
//    var doubleTap = new Hammer.Tap({event: 'doubletap', taps: 2 });
//    listContacts.hammeredContacts.add([doubleTap, singleTap]);
//    doubleTap.requireFailure(singleTap);

    
//document.addEventListener("DOMContentLoaded", VisualInit());