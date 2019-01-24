'use strict';

/* global Item */

const store = (function () {
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false },
        
    ];
    const hideCheckedItems = false;
    const searchTerm = '';

    const findById = function(id) {
        return this.items.find(item => id === item.id);
    };

    const addItem = function(name) {
        try {
            Item.validateName(name);
            const item = Item.create(name);
            this.items.push(item);
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
    };

    const findAndToggleChecked = function(id) {
        const item = this.findById(id);
        item.checked = !item.checked;
    };

    const findAndUpdateName = function(id, newName) {
        try {
            Item.validateName(newName);
            const item = this.findById(id);
            item.name = newName;
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
    };

    const findAndDelete = function(id) {
        // const index = items.findIndex(item => item.id === id);
        // items.splice(index, 1);
        this.items = this.items.filter(item => item.id !== id);
    };

    const toggleCheckedFilter = function(){
        this.hideCheckedItems = !this.hideCheckedItems;
    }

    const setSearchTerm = function(val){
        this.searchTerm = val;
    }

    return {items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete, toggleCheckedFilter, setSearchTerm};
}());