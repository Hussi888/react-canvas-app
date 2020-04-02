import {updateProperties} from './Canvas';
import {deleteNode} from './Canvas'
import {setProperties} from './Canvas'
import {updateSidebar} from './SelectedSidebar'

export function Callback(node){
    updateProperties(node);
}

export function Delete(){
    deleteNode();
}

export function SetProperties(id, type, properties){
    setProperties(id, type, properties);
}

export function SidebarUpdate(node){
    updateSidebar(node);
}