// PIfekT.core.js
// RAW-Kernlogik für PIfekT

import { PIfekTItem } from './PIfekT.item.js';

export class PIfekTCore {
  constructor() {
    this.items = new Map();
  }

  add(item) {
    if (!(item instanceof PIfekTItem)) return false;
    this.items.set(item.id, item);
    return true;
  }

  get(id) {
    return this.items.get(id) || null;
  }

  all() {
    return [...this.items.values()];
  }

  remove(id) {
    return this.items.delete(id);
  }

  toObject() {
    return this.all().map(i => i.toObject());
  }
}

export function createCore() {
  return new PIfekTCore();
}

