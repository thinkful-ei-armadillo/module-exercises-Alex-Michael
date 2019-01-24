'use strict';

/* global Item */

const store = (function () {
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];
    const hideCheckedItems = false;
    const searchTerm = '';

    const findById = function(id) {
        return items.find(item => id === item.id);
    };

    const addItem = function(name) {
        try {
            Item.validateName(name);
            const item = Item.create(name);
            items.push(item);
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
    };

    const findAndToggleChecked = function(id) {
        const item = findById(id);
        item.checked = !item.checked;
    };

    const findAndUpdateName = function(id, newName) {
        try {
            Item.validateName(newName);
            const item = findById(id);
            item.name = newName;
        } catch(error) {
            console.log(`Cannot add item: ${error.message}`);
        }
    };

    const findAndDelete = function(id) {
        const index = items.findIndex(item => item.id === id);
        items.splice(index, 1);
    };

    return {items, hideCheckedItems, searchTerm, findById, addItem, findAndToggleChecked, findAndUpdateName, findAndDelete};
}());