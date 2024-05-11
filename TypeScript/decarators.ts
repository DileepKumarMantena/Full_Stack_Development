function LogAddition(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(a: number, b: number): number {
        const result = originalMethod.apply(this, [a, b]);
        console.log(`Addition: ${a} + ${b} = ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @LogAddition
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(3, 5);
