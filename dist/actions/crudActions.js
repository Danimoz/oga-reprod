'use server';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdapter = getAdapter;
exports.createItem = createItem;
let adapter = null;
async function getAdapter(ormAdapter) {
    adapter = ormAdapter;
    //console.log('Adapter', adapter)
}
async function createItem(modelName, data) {
    console.log('creatingg....', modelName);
    console.log('creatingg....', adapter);
    console.log('creatingg....', data);
    await adapter?.create(modelName, data);
}
