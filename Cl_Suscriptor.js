export default class Cl_Suscriptor {
    constructor(cedula, tipoplan) {
        this._cedula = "";
        this._tipoplan = "";
        this._cedula = cedula;
        this._tipoplan = tipoplan;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set tipoplan(tipoplan) {
        this._tipoplan = tipoplan;
    }
    get tipoplan() {
        return this._tipoplan;
    }
    montoPagar() {
        switch (this._tipoplan) {
            case "A": return 3 * 1.10;
            case "B": return 5 * 1.10;
            default: return 10;
        }
    }
}
