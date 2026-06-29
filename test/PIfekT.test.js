// PIfekT.test.js (REAL RAW)
// Testet: ALT, NEU, IST, SOLL, OFFEN

import { PIfekTItem } from '../src/PIfekT.item.js';
import { PIfekTCheck } from '../src/PIfekT.check.js';

// ------------------------------
// ALT-Zustand (bestehendes Item)
// ------------------------------

const altItem = new PIfekTItem({
  id: 'ALT-1',
  label: 'AltItem',
  type: 'item',
  value: 10,
  meta: { state: 'old' }
});

// ------------------------------
// NEU-Zustand (neues Item)
// ------------------------------

const neuItem = new PIfekTItem({
  id: 'NEU-1',
  label: 'NeuItem',
  type: 'item',
  value: 99,
  meta: { state: 'new' }
});

// ------------------------------
// IST-Zustand (was wirklich da ist)
// ------------------------------

const ist = {
  alt: altItem.toObject(),
  neu: neuItem.toObject()
};

// ------------------------------
// SOLL-Zustand (was PIfekT verlangt)
// ------------------------------

const soll = {
  requiredFields: ['id', 'label', 'type', 'meta', 'value'],
  validAlt: PIfekTCheck.isValidItem(altItem),
  validNeu: PIfekTCheck.isValidItem(neuItem),
  hasValueAlt: PIfekTCheck.hasValue(altItem),
  hasValueNeu: PIfekTCheck.hasValue(neuItem)
};

// ------------------------------
// OFFEN-LEGEN (alles sichtbar machen)
// ------------------------------

console.log('--- IST ---');
console.log(ist);

console.log('--- SOLL ---');
console.log(soll);

console.log('--- CHECK ALT ---');
console.log(PIfekTCheck.summary(altItem));

console.log('--- CHECK NEU ---');
console.log(PIfekTCheck
