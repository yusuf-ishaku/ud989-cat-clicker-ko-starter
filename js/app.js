let viewModel = function (){
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/tabbyCat.jpg");
    // let v = 0
    this.incrementCount = function(){
        this.clickCount(this.clickCount() + 1);
        // console.log(this.clickCount());
    }
}
ko.applyBindings(new viewModel())