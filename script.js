function Book(title,author,pages,read,picture){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.picture=picture;
    this.read=read;
    
    this.info= function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}
 

document.addEventListener('DOMContentLoaded',function(){

    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const pages = document.getElementById('book-pages');
    const status = document.getElementById('read-status');
    const bookCover = document.getElementById('fileInput');

    const addBook = document.querySelector('.add');
    const close = document.querySelector('.close');
    const modal = document.querySelector('.modal');
    const submit = document.querySelector('.submit');
    const form = document.getElementById('form');

})