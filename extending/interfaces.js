var runtimeException1 = {
    message: "Something went wrong in runtime",
    stack: "Stack trace",
    getMessage: function () {
        return this.message;
    }
};
console.log(runtimeException1);
