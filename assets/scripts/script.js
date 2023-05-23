'use strict';

const post = document.getElementById('post');
const profile = document.getElementById('pfp');
const contents = document.getElementById('posts');
const description = document.getElementById('post-text');
const image = document.getElementById('choose-img');
const closeTab = document.getElementById('x');
const select = document.getElementById('select');
const popup = document.getElementById('overlay');
const names = document.getElementById('names');
const id = document.getElementById('identity');
const email = document.getElementById('email');
const pages = document.getElementById('pages');
const groups = document.getElementById('groups');

class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get id(){
        return this._id;
    }

    set name(value){
        this._name = value;
    }

    set id(value){
        this._id = value;
    }

    set email(value){
        this._email = value;
    }

    info(){
        names.innerText = this._name;
        email.innerText = `Email: ${this._email}`;
        id.innerText = `Id: ${this._id}`;
    }
}

class PremiumUser extends User{
    constructor(id, name, email, pages, groups){
        super(name, id, email);
        this.pages = pages;
        this.groups = groups;
    }
     
    set pages(value){
        this._pages = value;
    }

    set groups(value){
        this._groups = value;
    }

    get pages(){
        return this._pages;
    }

    get groups(){
        return this._groups;
    }

    info(){
        names.innerText = this._name;
        email.innerText = `Email: ${this._email}`;
        id.innerText = `Id: ${this._id}`;
        pages.innerText = `Pages: ${this._pages}`;
        groups.innerText = `Groups: ${this._groups}`;
    }
}

post.addEventListener('click', () => {
    if(description.value != "" || image.files.length != 0){
        const message = description.value;
        const img = document.querySelector('input[type=file]').files[0];
        const blockDiv = document.createElement("div");
        const bar = `<img id="pfp0" src="assets/img/yeat.webp"> <p id="name">Hamza Elafifi</p>`;
        blockDiv.innerHTML = bar + `<p id="text">${message}</p>`;
        if(image.files.length != 0){
            const postImage = `<img id="post-img" src="assets/img/${img.name}" >`
            blockDiv.innerHTML = bar + `<p id="text">${message}</p>` + postImage;
            image.value = "";
            select.innerText = "Select File";        
        }
        contents.appendChild(blockDiv);
        description.value = "";
    }
});

function uploaded(){
    const img = document.querySelector('input[type=file]').files[0];
    select.innerText = img.name;
}

closeTab.addEventListener('click', function() {
    popup.classList.remove('visible');
});

pfp.addEventListener('click', function() {
    popup.classList.toggle('visible');
    const user = new PremiumUser('Hamza Elafifi', 1234, 'Hamza@gmail.com', 3, 28);
    user.info();
});