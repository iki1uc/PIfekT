// PIfekT.check.js
// RAW-Check-Modul für Validierungen

export class PIfekTCheck {
  static isValidItem(obj) {
    return (
      obj &&
      typeof obj.id !== 'undefined' &&
      typeof obj.label === 'string' &&
      typeof obj.type === 'string'
    );
  }

  static hasValue(obj) {
    return obj && obj.value !== null && obj.value !== undefined;
  }

  static summary(obj) {
    return {
      id: obj.id,
      ok: this.isValidItem(obj),
      hasValue: this.hasValue(obj),
    };
  }
}

