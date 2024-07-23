import { myNotes as myN} from './notes';
import { printGrid } from './notes';
import { noteToStorage } from './storage';



const deleteNote = (e) => {
    let getNoteId = e.target.parentNode.getAttribute('id');
    console.log(getNoteId);
    myN.splice(getNoteId,1);
    console.log(myN);
    noteToStorage();
    printGrid();

}

export default deleteNote