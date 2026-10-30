
let user = {
    name: "Riya",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();  // undefined

let user2 = {
    name: "Riya",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();  // Riya
