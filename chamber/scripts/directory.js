document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data));

    function displayMembers(members) {
        directory.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.description}</p>
            `;
            directory.appendChild(memberElement);
        });
    }

    gridViewButton.addEventListener('click', () => {
        directory.classList.remove('list');
        directory.classList.add('grid');
    });

    listViewButton.addEventListener('click', () => {
        directory.classList.remove('grid');
        directory.classList.add('list');
    });
});
