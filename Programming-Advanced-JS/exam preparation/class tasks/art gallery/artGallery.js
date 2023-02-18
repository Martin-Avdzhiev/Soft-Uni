class ArtGallery {
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle( articleModel, articleName, quantity ){
        if(!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())){
            throw new Error('This article model is not included in this gallery!');
        }
        articleModel = articleModel.toLowerCase();
        const index = this.listOfArticles.map(x => x.articleModel).indexOf(articleModel);
        if(index !== -1){
            this.listOfArticles[index].quantity += quantity;
        }
        else {
            this.listOfArticles.push({ articleModel, articleName, quantity});   
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest ( guestName, personality){
        const findGuest = this.guests.filter((x=> x.guestName == guestName));
        if(findGuest.length != 0){
            throw new Error(`${guestName} has already been invited.`)
        }
        let points = 50;
        if(personality == 'Vip'){
            points = 500;
        }
        else if(personality == 'Middle'){
            points = 250;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`
    }
    buyArticle ( articleModel, articleName, guestName){
        const indexOfArticle = this.listOfArticles.map(x => x.articleName).indexOf(articleName);
        const index = this.listOfArticles.map(x=> x.articleName).indexOf(articleName);
      //  console.log(this.listOfArticles[indexOfArticle].quantity)
        if(index == -1 || this.listOfArticles[indexOfArticle].quantity == 0){
            throw new Error('This article is not found.');
        }
        const articles = this.listOfArticles.filter(x => x.articleName == articleName);
        if(articles[0].quantity == 0){
            return `The ${articleName} is not available.`;
        }
        let find = false;
        let findIndex = 0;
        for(let i = 0 ; i<articles.length; i++){
            if(articles[i].articleModel == articleModel){
                if(articles[i].quantity > 0){
                    find = true;
                    findIndex = i;
                }
            }
        }
        if(!find){
            throw new Error('This article is not found.');
        }
        const guestsIndex = this.guests.map(x=> x.guestName).indexOf(guestName);
        if(guestsIndex == -1){
            return 'This guest is not invited.';
        }
        const currentGuests = this.guests.filter(x => x.guestName == guestName);
        if(currentGuests[0].points < this.possibleArticles[articleModel]){
            return 'You need to more points to purchase the article.';
        }
        else {
            this.guests[index].points -= this.possibleArticles[articleModel];
            this.guests[index].purchaseArticle++;
            this.listOfArticles[indexOfArticle].quantity--;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }
    showGalleryInfo (criteria){
        const result = [];
        if(criteria == 'article'){
            result.push('Articles information:');
            for(const article of this.listOfArticles){
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
            return result.join('\n');
        }
        else if (criteria == 'guest'){
            result.push('Guests information:');
            for(const guest of this.guests){
                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
            return result.join('\n');
        }
    }
}


let art = new ArtGallery("Curtis Mayfield");

art.addArticle('picture', 'Mona Liza', 3);
art.addArticle('Item', 'Ancient vase', 2);
art.addArticle('picture', 'Mona Liza', 1);

art.inviteGuest('John', 'Vip');
art.inviteGuest('Peter', 'Middle');

art.buyArticle('picture', 'Mona Liza', 'John');
art.buyArticle('item', 'Ancient vase', 'Peter');
console.log(art.showGalleryInfo('article'))
// assert.equal(art.showGalleryInfo('article'),`Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1`);
console.log(art.showGalleryInfo('guest'))
//assert.equal(art.showGalleryInfo('guest'),`Guests information:
//John - 1
//Peter - 1`);


//'Guests information:\nJohn - 1 \nPeter - 1 '
//'Guests information:\nJohn - 1\nPeter - 1'