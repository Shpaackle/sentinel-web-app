export class Die {
  public sides: number;
  public imagePath: string;
  public faceShowing: number;

  constructor(sides: number = 4) {
    this.sides = sides;
    this.faceShowing = sides;
    this.imagePath = './assets/dice-images/D' + sides + '.jpg';
  }
}
