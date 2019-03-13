export class Recipe {
  public name: string;
  public descrition: string;
  public imagePath: string;

  constructor(name: string, descrition: string, imagePath: string) {
    this.name = name;
    this.descrition = descrition;
    this.imagePath = imagePath;
  }
}