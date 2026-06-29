// PIfekT.action.js
// reFINAL: Aktions-Modul für PIfekT

import { PIfekTItem } from './PIfekT.item.js';
import { PIfekTCheck } from './PIfekT.check.js';
import { PIfekTScore } from './PIfekT.score.js';

export class PIfekTAction {
  constructor({ id = null, label = '', physik = 0, essenz = 0 } = {}) {
    this.id = id;
    this.label = label;
    this.physik = physik;
    this.essenz = essenz;
    this.score = PIfekTScore.compute(physik, essenz);
  }

  toItem() {
    return new PIfekTItem({
      id: this.id,
      label: this.label,
      type: 'action',
      value: this.score,
      meta: {
        physik: this.physik,
        essenz: this.essenz,
      },
    });
  }

  summary() {
    const item = this.toItem();
    return {
      id: this.id,
      label: this.label,
      physik: this.physik,
      essenz: this.essenz,
      score: this.score,
      check: PIfekTCheck.summary(item),
    };
  }
}

