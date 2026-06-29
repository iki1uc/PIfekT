// PIfekT.test.js (FINAL RAW)
// Deckt ALT, NEU, IST, SOLL, OFFEN komplett ab

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
// IST-Zustand (was wirklich existiert)
// ------------------------------

const ist = {
  alt: altItem.toObject(),
  neu: neuItem.toObject()
};

// ------------------------------
// SOLL-Zustand (Systemanforderungen)
// ------------------------------

const soll = {
  requiredFields: ['id', 'label', 'type', 'meta', 'value'],
  validAlt: PIfekTCheck.isValidItem(altItem),
  validNeu: PIfekTCheck.isValidItem(neuItem),
  hasValueAlt: PIfekTCheck.hasValue(altItem),
  hasValueNeu: PIfekTCheck.hasValue(neuItem)
};

// ------------------------------
// OFFEN-LEGEN (alles sichtbar)
// ------------------------------

console.log('--- IST ---');
console.log(ist);

console.log('--- SOLL ---');
console.log(soll);

console.log('--- CHECK ALT ---');
console.log(PIfekTCheck.summary(altItem));

console.log('--- CHECK NEU ---');
console.log(PIfekTCheck.summary(neuItem));
