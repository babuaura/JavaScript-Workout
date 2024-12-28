let isModalOpen = false;

const addButton = document.querySelector('#addButton')
const myList = document.querySelector('#myList')

const modelCloseButton = document.querySelector('#modelCloseButton')
const model = document.querySelector("#model")
model.style.display = 'none';

const addItemButton = document.querySelector("#clickButton")
const inputValue = document.querySelector("#inputValue")

addItemButton.onclick = () => {
    if(inputValue.value != null || inputValue.value != '') {
        addItemToList(inputValue.value);
    }
}

const addItemToList = (inputItem) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const listItems = document.querySelectorAll('.listItem');
    span.innerText = ++listItems.length + '.';

    const deleteButton = document.createElement('button');
    deleteButton.className = "bg-red-500 text-white p-2 rounded-full w-6 h-6 text-xs font-semibold flex items-center justify-center";
    deleteButton.innerText = "X";
    deleteButton.onclick = deleteItem;

    const p = document.createElement('p');
    p.innerText = inputItem;

    li.className = 'listItem flex gap-3';
    li.append(span);
    li.append(p);
    li.append(deleteButton);

    myList.append(li);
    closeModal();
}

addButton.onclick = () => { 
    openModal();
    inputValue.value = '';
}

function deleteItem(){
    const itemNo = +this.parentElement.getElementsByTagName('span')[0].innerText.split('.')[0];
    const filteredList = Array.from(myList.children).filter((item) => {
        const itemNumber = +item.getElementsByTagName('span')[0].innerText.split('.')[0];
        
        if(itemNumber === itemNo) {
            return false;
        }
        return true;
    });

    clearList();
    filteredList.forEach((item) => item && addItemToList(item.getElementsByTagName('p')[0].innerText));
}

function clearList (){
    Array.from(myList.children).forEach(element => element.remove());
}

const openModal = () => {
    isModalOpen = true;
    model.style.display = 'flex';
}
const closeModal = () => {
    isModalOpen = false;
    model.style.display = 'none';
}