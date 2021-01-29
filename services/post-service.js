const txtgen = require('txtgen');
const { v4: uuidv4 } = require('uuid');

class Posts {

    constructor(qnt) {
        this.qntImages = 16
        this.nextImage = 1
        this.posts = this.generatePosts(qnt);
    }

    findById(id){
        return this.posts[id]
    }

    all(){
        const localPosts  = []
        const allPosts = this.posts
        Object.keys(this.posts).forEach(function(key) {
            console.log(key)
            localPosts.push(allPosts[key])
        });
        return localPosts
    }

    addDays(base, days) {
        const date = new Date(base.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    generatePosts(qnt) {
        const allPosts = {}
        const dataBase = new Date()
        for (var i = 0; i < qnt; i++) {
            const post = this.generatePost(this.addDays(dataBase, i-qnt))
            allPosts[post.id] = post
        }
        return allPosts
    }

    generatePost(data) {
        const article = txtgen.article();
        const sentence = txtgen.sentence();
        const imageUrl = this.getNextImage()
        return { id: uuidv4(), titulo: sentence, dataPublicacao: data, imagem: imageUrl, corpo: article }
    }

    getNextImage(){
        const urlImage = `/images/img${this.nextImage }.jpg`
        if (this.nextImage === this.qntImages){
            this.nextImage = 1
        }else{
            this.nextImage += 1
        }
        return urlImage
    }

}

module.exports = new Posts(2)