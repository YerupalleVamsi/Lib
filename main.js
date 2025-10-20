const bookInput = document.getElementById('book_name_input');
const addBookBtn = document.getElementById('add_book');
const bookList = document.getElementById('op');

addBookBtn.addEventListener('click', () => {
    const name = bookInput.value.trim(); // remove leading/trailing spaces nigga
    if(name === "") return; 
    const allBooks = Array.from(bookList.children).map(li => li.firstChild.textContent);
    if(allBooks.includes(name)) {
        alert("This book is already in your library!");
        return;
    }
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    const textNode = document.createTextNode(name);
    li.appendChild(textNode);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';
    removeBtn.classList.add('btn', 'btn-sm', 'btn-danger', 'ms-2');
    removeBtn.addEventListener('click', () => li.remove());

    li.appendChild(removeBtn);
    bookList.appendChild(li);

    bookInput.value = '';
});
