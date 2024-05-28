const itemList = document.getElementById('item-list');

itemList.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI' && event.relatedTarget.tagName === 'LI') {
        event.relatedTarget.classList.remove('highlight');
    }
});

itemList.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'LI' && event.relatedTarget.tagName === 'LI') {
        event.relatedTarget.classList.add('highlight');
    }
});

const draggable = document.getElementById('draggable');
let offsetX, offsetY;

draggable.ondragstart = function() {
    return false;
}

draggable.addEventListener('mousedown', function(event) {
    offsetX = event.clientX - draggable.getBoundingClientRect().left;
    offsetY = event.clientY - draggable.getBoundingClientRect().top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(event) {
    draggable.style.left = event.clientX - offsetX + 'px';
    draggable.style.top = event.clientY - offsetY + 'px';
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}
