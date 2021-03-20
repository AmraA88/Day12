function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    var gloveBoxContents = myStorage.car.inside["glove box"];
    console.log(myNes(myStorage.car.inside["glove box"]));
    module.exports = myNes;
