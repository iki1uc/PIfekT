// PIfekT.item.js
// RAW-Basis für ein Item im PIfekT-System

export class PIfekTItem {
  constructor({
    id = null,
    label = '',
    type = 'default',
    meta = {},
    value = null,
  } = {}) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.meta = meta;
    this.value = value;
  }

  // Setzt einen Wert RAW
  setValue(newValue) {
    this.value = newValue;
    return this;
  }

  // Gibt den Wert zurück
  getValue() {
    return this.value;
  }

  // Einfaches Meta-Update
  setMeta(key, val) {
    this.meta[key] = val;
    return this;
  }

  getMeta(key) {
    return this.meta[key];
  }

  // RAW-Export als plain Object
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

// Optional: Factory-Funktion
export function createPIfekTItem(config = {}) {
  return new PIfekTItem(config);
}

