export class MyObject {
  myDefaultProperty: boolean;
  private myPrivateProperty: number;
  public myPublicProperty: string;

  constructor(
    myDefaultProperty: boolean,
    myPrivateProperty: number,
    myPublicProperty: string
  ) {
    //ici on ajoutera les informations qui s'executeront lors de l'instanciation de MyObject
    this.myDefaultProperty = myDefaultProperty;
    this.myPrivateProperty = myPrivateProperty;
    this.myPublicProperty = myPublicProperty;
  }

  //ici on declarera les methodes dont on aura besoin
  //des getters setters pour remplir les proprietes
  public get MyPrivateProperty(): number {
    return this.myPrivateProperty;
  }

  public set MyPrivateProperty(myPrivateProperty: number) {
    this.myPrivateProperty = myPrivateProperty;
  }

  //ou des methods
  myFunction() {}
}
