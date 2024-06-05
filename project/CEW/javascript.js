function showEventForm() {
    document.getElementById('eventForm').style.display = 'flex';
}

function hideEventForm() {
    document.getElementById('eventForm').style.display = 'none';
}

function addEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventDescription = document.getElementById('eventDescription').value;

    if (eventName && eventDate && eventDescription) {
        const eventList = document.getElementById('eventList');

        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${eventName}</h3>
            <p>${eventDate}</p>
            <p>${eventDescription}</p>
        `;

        eventList.appendChild(eventItem);

        document.getElementById('addEventForm').reset();
        hideEventForm();
    } else {
        alert('Please fill out all fields.');
    }
}
