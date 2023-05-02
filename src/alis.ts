type CrushType = {
    name: string;
    age?: number;
    address: string;
}

const crush1: CrushType = {
    name: 'moina pakhi',
    age: 22,
    address: 'ugnda'
}
const crush2: CrushType = {
    name: 'tia pakhi',
    age: 22,
    address: 'ugnda'
}


//function 

type OperationType = (
    x: number,
    y: number
) => number;
const calculate = (
    n1: number,
    n2: number,
    operation: OperationType
) => {
    return operation(n1, n2);
}

calculate(12, 12, (x, y) => x + y);
calculate(12, 12, (x, y) => x - y);
calculate(12, 12, (x, y) => x * y);
calculate(12, 12, (x, y) => x / y); 