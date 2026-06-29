// PIfekT.score.js
// FINAL RAW: Physik + Essenz = Score

export class PIfekTScore {
  // Gewichtung (Alpha = Physik, Beta = Essenz)
  static alpha = 0.4;
  static beta = 0.6;

  // Score-Berechnung
  static compute(physik = 0, essenz = 0) {
    const p = Number(physik) || 0;
    const e = Number(essenz) || 0;
    return (this.alpha * p) + (this.beta * e);
  }

  // Flags: Ja/Nein als 1/0
  static flags({ physikOk = false, essenzOk = false } = {}) {
    const PHYSIK_OK = physikOk ? 1 : 0;
    const ESSENZ_OK = essenzOk ? 1 : 0;

    // Aufgabe nur erfüllt, wenn beides OK
    const TASK_OK = PHYSIK_OK * ESSENZ_OK;

    // "Fehler für die Ewigkeit" = Physik OK, Essenz nicht OK
    const FEHLER_EWIG = (PHYSIK_OK === 1 && ESSENZ_OK === 0) ? 1 : 0;

    return {
      PHYSIK_OK,
      ESSENZ_OK,
      TASK_OK,
      FEHLER_EWIG
    };
  }
}
