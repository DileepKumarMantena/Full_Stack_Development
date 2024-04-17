interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

type FlyingFish = Bird & Fish;

const flyingFish: FlyingFish = {
    fly: () => console.log("Flying"),
    swim: () => console.log("Swimming")
};

flyingFish.fly();
flyingFish.swim();
