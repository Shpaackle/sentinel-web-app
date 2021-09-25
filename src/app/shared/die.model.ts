export class Die {
    public sides: number;
    public imagePath: string;
    public faceShowing: number;
    public name: string;

    constructor(sides: number = 4) {
        this.sides = sides;
        this.faceShowing = sides;
        this.name = 'D' + sides;
        this.imagePath = './assets/dice-images/' + this.name + '.png';
    }

    roll(): number {
        const roll: number = Math.floor(Math.random() * this.sides) + 1;
        this.faceShowing = roll;
        return roll;
    }
}
