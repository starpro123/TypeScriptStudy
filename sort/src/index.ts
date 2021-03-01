import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollecion } from './CharactersCollecion';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([15, -3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const character = new CharactersCollecion('aaCaxaX');
character.sort();
console.log(character);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.sort();
linkedList.print();
