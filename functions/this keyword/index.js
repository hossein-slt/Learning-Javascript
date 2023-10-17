
const video = {
    title: 'a',
    tags: ['b', 'c', 'd', 'e'],
    showtags(){
        this.tags.forEach(function(tags){
            console.log(this.title, tags);
        }, this);
    }
};

video.showtags();

//Here we show both tags and title together.
