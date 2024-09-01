const myModule = (function () {
    let privateVar = 'I am private';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

myModule.publicMethod(); // I am private
