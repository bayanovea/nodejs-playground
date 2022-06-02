interface Throwable {
    message: string;
    getMessage(): string;
}

interface ThrowableWithStack extends Throwable {
    stack: string;
}

var runtimeException1: ThrowableWithStack = {
    message: "Something went wrong in runtime",
    stack: "Stack trace",

    getMessage(): string {
        return this.message;
    }
}

console.log(runtimeException1);