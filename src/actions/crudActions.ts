'use server';

import { ORMAdapter } from "../types";


let adapter: ORMAdapter | null = null;

export async function getAdapter(ormAdapter: ORMAdapter){
  adapter = ormAdapter
}

export async function createItem(modelName: string, data: any) {
  await adapter?.create(modelName, data)
}