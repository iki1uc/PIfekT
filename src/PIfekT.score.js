// PIfekT.score.js
// reFINAL: Score-Modul für Physik + Essenz

export class PIfekTScore {
  // feste Gewichte (kannst du später tunen)
  static alpha = 0.4; // Physik
  static beta = 0.6;  // Essenz

  static compute(physik = 0, essenz = 0) {
    const p = Number(physik) || 0;
    const e = Number(essenz) || 0;
    return this.alpha * p + this.beta * e;
  }

  static flags({ physikOk = false, essenzOk = false } = {}) {
    const PHYSIK_OK = physikOk ? 1 : 0;
    const ESSENZ_OK = essenzOk ? 1 : 0;
    const TASK_OK = PHYSIK_OK * ESSENZ_OK;
    const FEHLER_EWIG = PHYSIK_OK === 1 && ESSENZ_OK === 0 ? 1 : 0;

    return {
      PHYSIK_OK,
      ESSENZ_OK,
      TASK_OK,
      FEHLER_EWIG,
    };
  }
}

