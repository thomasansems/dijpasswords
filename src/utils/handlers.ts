
import localforage from 'localforage';
import { ItemProps } from '../types';
import { v4 as uuidv4 } from 'uuid';

const localKey = 'my-passwords';


/**
* Get items from local storage
*/
export async function getItems(): Promise<ItemProps[] | null> {
    const items: ItemProps[] | null = await localforage.getItem(localKey);
    return items;
}


/**
* Add unique id using uuidv4 and save it to local storage
*/
export async function createItem(form: ItemProps): Promise<Boolean> {
    let id = uuidv4();
    const newItem: ItemProps = { ...form, id };
    let items = await getItems();
    items = items == null ? [newItem] : [...items, newItem];
    localforage.setItem(localKey, items);
    return true;
}


/**
* Delete item from local storage
*/
export async function deleteItem(id: string): Promise<Boolean> {
    let items = await getItems();
    if (items == null) {
        return false;
    }
    let index: number = items?.findIndex(item => item.id === id);
    if (index > -1) {
        items.splice(index, 1);
        localforage.setItem(localKey, items);
        return true;
    }

    return false;
}