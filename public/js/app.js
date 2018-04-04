const app = angular.module("myApp", []);

app.controller("MainController", ["$http", function($http) {
    // this.hello = "hello"

    this.myItems = [];

    this.getItems = () => {
        $http({
            method: "GET",
            url: "/peppers"
        }).then((response) => {
            this.myItems = response.data;
        }, (error) => {
            console.log("error");
        });
    };

    this.createItem = (item) => {
        $http({
            method: "POST",
            url: "/peppers",
            data: {
                title: item.title,
                cover: item.cover,
                year: item.year,
                description: item.description,
                likes: item.likes
            }
        }).then((response) => {
            this.getItems();
        }, (error) => {
            console.log(error);
        }).catch((err) => console.error("Catch: ", err));
    };

    this.deleteItem = (item) => {
        $http({
            method: "DELETE",
            url: "/peppers/" + item._id
        }).then((response) => {
            this.getItems();
        });
    };

    this.editItem = (item) => {
        $http({
            method: "PUT",
            url: "/peppers/" + item._id,
            data: {
                title: this.updateTitle,
                cover: this.updateCover,
                year: this.updateYear,
                description: this.updateDescription
            }
        }).then((response) => {
            this.getItems();
        });
    };

    this.itemLikes = (item) => {
        $http({
            method: "PUT",
            url: "/peppers/" + item._id,
            data: {
                likes: item.likes
            }
        }).then((response) => {
            console.log(response.data.likes)
            item.likes = item.likes + 1
        }, (error) => {
            console.log(error)
        }).catch((err) => console.error("Catch ", error));
    };

    this.getItems();

}]);
