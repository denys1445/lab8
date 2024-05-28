
const buttonProperty = document.getElementById('button-property');
const buttonListener = document.getElementById('button-listener');
const buttonHandle = document.getElementById('button-handle');

buttonProperty.addEventListener('click', handleClickProperty);

function handleClickProperty() {
    alert('I was called from onclick property!');
}


function handleClickEvent1() {
    alert('I was called from addEventListener - Handler 1');
}

function handleClickEvent2() {
    alert('I was called from addEventListener - Handler 2');
}

buttonListener.addEventListener('click', handleClickEvent1);
buttonListener.addEventListener('click', handleClickEvent2);

const eventHandlerObject = {
    handleEvent(event) {
        alert('I was called from eventHandlerObject')
        alert(event.type + " on " + event.currentTarget);
    }
};

buttonHandle.addEventListener('click', eventHandlerObject);

setTimeout(() => {
    button4.removeEventListener('click', eventHandlerObject);
}, 5000);


const itemList = document.getElementById('item-list');

itemList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const items = itemList.querySelectorAll('li');
        items.forEach(item => item.classList.remove('highlight'));
        event.target.classList.add('highlight');
    }
});

const menu = document.getElementById('menu');

menu.addEventListener('click', function(event) {
    const action = event.target.dataset.action;
    if (action) {
        alert(`Action triggered: ${action}`);
    }
});
