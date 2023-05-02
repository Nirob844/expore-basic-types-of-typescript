const searchName = (value: string | null) => {
    if (value === null) {
        console.log("nothing");
    } else {
        console.log('searching');

    }
}

const getCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertSpeed = (speed * 1000) / 3600;
        console.log(`speed is ${convertSpeed}`);
    }
    else if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ")
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`speed is ${convertSpeed}`);
    }
    else {
        console.log('nothing');

    }

}

getCarSpeed(10);
getCarSpeed('10 kmh')
getCarSpeed(true)

function throwError(message: string): never {
    throw new Error(message);
}
throwError('error hoise')