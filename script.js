// Arrays
const activities = [];

// Elements
// Buttons
const openAddActivityDialogBtn = document.getElementById('open-add-activity-btn');
const closeAddActivityDialogBtn = document.getElementById('close-add-activity-btn');
const confirmAddActivityDialogBtn = document.getElementById('confirm-add-activity-btn');
// Dialogs
const addActivityDialog = document.getElementById('add-activity-dialog');
const inputActivityName = document.getElementById('input-new-activity');


// Opens "add activity" dialog
openAddActivityDialogBtn.addEventListener('click', () => {
    addActivityDialog.showModal();
});

// Closes "add activity" dialog
closeAddActivityDialogBtn.addEventListener('click', () => {
    addActivityDialog.close();
});


// Confirm "add activity"
confirmAddActivityDialogBtn.addEventListener('click', () => {
    // Assigns value from input to 'activityName'
    const activityName = inputActivityName.value;
    // Checks if input is not empty
    if (activityName.trim() !== '') {
        // Create instance of activity -> assign to 'newActivity'
        const newActivity = new Activity(activityName);
        // Push it into array
        activities.push(newActivity);
        // Display activities in container
        displayActivities();
        // Closes "add activity" dialog
        addActivityDialog.close();
        // Clears input field
        inputActivityName.value = '';
    } else {
        // Informs user that input is empty
        alert('Please enter a valid activity name!');
    }
});

function displayActivities() {
    const content = document.getElementById('content');
    // Clear the previous content
    content.innerHTML = '';
    // Display each activity in the array
    activities.forEach(activity => {
        content.innerHTML += /*html*/    `<div class="activity-container">
                                            <div class="a-c-header">
                                                <h3>${activity.header}</h3>
                                            </div>
                                            <div class="a-c-content">
                                                <!-- content: steps + details -->
                                            </div>
                                        </div>`;
    });

};