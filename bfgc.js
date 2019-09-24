const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder() {
tabItems.forEach(item => {
item.classList.remove('tab-border');
});
}

function removeShow() {
tabContentItems.forEach(item =>{
item.classList.remove('show');
});
}

function selectItem(e) {
removeBorder();
removeShow();
this.classList.add('tab-border');
const tabContentItem = document.querySelector(`#${this.id}-content`);
tabContentItem.classList.add('show');
}

tabItems.forEach(item => {
item.addEventListener('click',selectItem);
});

