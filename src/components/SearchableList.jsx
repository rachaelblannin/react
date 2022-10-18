import { useState } from 'react';
import Search from './Search';

function Searchablelist(){
const [items, setItems] = useState(['chocolate', 'sweets', 'pepsi', 'lemons']);
const [search, setSearch] = useState('');
const [newItem, setNewItem] = useState('');

const addNewItem = (event) => {
    event.preventDefault();
    setItems((currentItems) => [...currentItems, newItem]);
    setNewItem("");
}


return(
    <div>
        <form onSubmit={addNewItem}>
            <label htmlFor="newItem">
                New Item:
                <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            </label>
            <button type="submit">Add New</button>
        </form>
        <br/>
        <Search text={search} changeHandler={(e) => setSearch(e.target.value)}/>
        {
            items
            .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
            .map((item, i) => (
                <p>{`${item}`}
                <button type='button' onClick={()=>removeItem(i)}>x</button>
                </p>
            )) 
            
        }
    </div>
            );
    }


export default Searchablelist;