let Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/tabbyCat.jpg");
    this.level = ko.observable("Infant");
    this.nickNames = ko.observableArray([
        "Tabby", "Mick", "Taamara", "Lincoln"
    ])
}

let viewModel = function (){
   this.currentCat = ko.observable(new Cat())
    // let v = 0
    this.incrementCount = function(){
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
        // console.log(this.clickCount());
        if(this.currentCat().clickCount() > 10){
            this.level("Teen");
        }if(this.currentCat().clickCount() > 20){
            this.level("Older Teen")
        }
    }
};
ko.applyBindings(new viewModel())