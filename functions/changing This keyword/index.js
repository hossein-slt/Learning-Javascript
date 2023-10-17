// In previous exercise we use 'this' keyword, but here we're trying to change in different ways.


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showtags(){
        const self = this;                            // here we can define a new const and name to 'this' which references to the obj.
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        }, this)
    }
};
video.showtags();
//=================================================
const video1 = {
    title: 'z',
    tags: ['x', 'y', 'z'],
    showtags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this))                                // here it is possible to use bind() method.
    }
};
video1.showtags();
//=================================================
const video2 = {
    title: 'g',
    tags: ['h', 'i', 'j'],
    showtags(){
        this.tags.forEach(tag => {                  // here it would be even much more easier and shorter.we use arrow.
            console.log(this.title, tag);
        })
    }
};
video2.showtags();



