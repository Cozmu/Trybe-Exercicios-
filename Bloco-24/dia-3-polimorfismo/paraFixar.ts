abstract class Character {
  abstract talk():void
  abstract specialMove():void
  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }

}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Melee e mt foda');
  }

  specialMove(): void {
    console.log('parry');
  }
}

const Yoshi = new MeleeCharacter();
const Yasuo = new MeleeCharacter();

// Yoshi.specialMove();
// Yoshi.talk();
Character.characterPresentation(Yasuo);
Character.characterPresentation(Yoshi);



