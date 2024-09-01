let target = {
    message1: "hello",
    message2: "everyone"
};

let handler = {
    get: function(target, prop, receiver) {
        return prop in target ? target[prop] : "Property does not exist";
    }
};

let proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // everyone
console.log(proxy.nonExistent); // Property does not exist
