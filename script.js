let activities = [];

// btns
const addActivityBtn = document.getElementById('add-activity-btn');
// dialogs/modal
const modalAddActivity = document.getElementById('dialog-add-activity');
const newActivityHeader = document.getElementById('new-activity-header');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.querySelector('.confirm-btn');


// 'addActivityBtn' button opens the <dialog> modally
addActivityBtn.addEventListener('click', () => {
    modalAddActivity.showModal();
});


//
closeBtn.addEventListener('click', () => {
    modalAddActivity.close();
});



/**
 * class activity
 */

class Activity {
    constructor(header, step) {
        this._header = header,
        this._step = step
    }

    // getters
    get header() {
        return this._header;
    }

    get step() {
        return this._step;
    }
}

// function addActivity() {
    
// }