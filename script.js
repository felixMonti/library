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
