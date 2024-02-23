//   * Make a dogs object with three keys:
//   * First key called `raining` with a value of `true`.
//   * Second key called `noise` with a value of "Woof!"
//   * Third key called "`akeNoise`" which contains a function that console.logs the noise to the screen if it is raining dogs.

const dogs = {
    raining: true,
    noise: "woof",

    makeNoise() {
         // The 'this' keyword refers to the object it's called from
         // i.e. this.raining refers to the raining property of 'this' particular object
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}
//   * Next, make a cats object with three keys:
//   * First key called `raining` with a value of `false`.
//   * Second key called `noise` with a value of "Meow!"
//   * Third key called `makeNoise` which contains a function that `console.logs` the noise to the screen if it is raining cats.

const cats = {
    raining: false,
    noise: "Meow",

    makeNoise() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
}

// * Make the dog bark.
// * Make the cat meow.

dogs.makeNoise()
cats.raining = true;
cats.makeNoise()

// * Create a function called `massHysteria` that takes in both the cats and the dogs objects and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" 
//if both of the `raining` keys are equal to `true`.
// * See if there is any way to further optimize your code.

const massHysteria =  (dogs, cats) => dogs.raining === true && cats.raining === true? 
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!"): console.log("DOGS AND CATS are not LIVING TOGETHER!");

massHysteria(dogs, cats)