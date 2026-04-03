import Cl_Suscriptor from "./Cl_Suscriptor.js";
export default class Cl_Agencia {
    constructor() {
        this._contNoConex = 0;
        this._contSuscriptor = 0;
        this._contPlanA = 0;
        this._contPlanB = 0;
        this._contPlanC = 0;
    }
    procesarSuscriptor(suscriptor) {
        this._contSuscriptor++;
        if (suscriptor.tipoplan == "A" && "B")
            this._contNoConex++;
        if (suscriptor.tipoplan == "A") {
            this._contPlanA++;
        }
        else if (suscriptor.tipoplan == "B") {
            this._contPlanB++;
        }
        else
            this._contPlanC++;
    }
    porcSucNoConex() {
        return (this._contNoConex / this._contSuscriptor) * 100;
    }
    planFavorito() {
        if (this._contPlanA > this._contPlanB && this._contPlanA > this._contPlanC) {
            return "A";
        }
        else if (this._contPlanB > this._contPlanA && this._contPlanB > this._contPlanC) {
            return "B";
        }
        else if (this._contPlanC > this._contPlanA && this._contPlanC > this._contPlanB) {
            return "C";
        }
        else
            return "Iguales favorito";
    }
}


