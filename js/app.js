var viewModel = function (){
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/tabbyCat.jpg");
    this.incrementCount = function(){
        this.clickCount(this.clickCount + 1)
    }
}
ko.applyBindings(new viewModel())