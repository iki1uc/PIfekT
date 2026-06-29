// PIfekT.item.js
// RAW-Basis für ein Item im PIfekT-System

export class PIfekTItem {
  constructor({ id = null, label = '', type = 'item', meta = {}, value = null } = {}) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.meta = meta;
    this.value = value;
  }

  setValue(v) {
    this.value = v;
    return this;
  }

  getValue() {
    return this.value;
  }

  setMeta(k, v) {
    this.meta[k] = v;
    return this;
  }

  getMeta(k) {
    return this.meta[k];
  }

  toObject() {
    return {
      id: this.id,
      label: this.label,
      type: this.type,
      meta: { ...this.meta },
      value: this.value,
    };
  }
}

export function createPIfekTItem(cfg = {}) {
  return new PIfekTItem(cfg);
}

