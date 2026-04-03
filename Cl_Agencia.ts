import Cl_Suscriptor from "./Cl_Suscriptor";

export default class Cl_Agencia {
    private _contNoConex: number;
    private _contSuscriptor: number;
    private _contPlanA: number;
    private _contPlanB: number;
    private _contPlanC: number;
    
    constructor() {
        this._contNoConex = 0;
        this._contSuscriptor = 0;
        this._contPlanA = 0;
        this._contPlanB = 0;
        this._contPlanC = 0;
    }

    procesarSuscriptor(suscriptor: Cl_Suscriptor): void {
        this._contSuscriptor++;

        // CORRECCIÓN: Los planes A y B son los que pagan conexión
        // Si queremos contar los que NO PAGARON (solo el Plan C)
        if (suscriptor.tipoplan === "C") {
            this._contNoConex++;
        }

        // Conteo por tipo de plan
        if (suscriptor.tipoplan === "A") {
            this._contPlanA++;
        } else if (suscriptor.tipoplan === "B") {
            this._contPlanB++;
        } else if (suscriptor.tipoplan === "C") {
            this._contPlanC++;
        }
    }

    porcSucNoConex(): number {
        return this._contSuscriptor > 0 ? (this._contNoConex / this._contSuscriptor) * 100 : 0;
    }

    planFavorito(): string {
        const max = Math.max(this._contPlanA, this._contPlanB, this._contPlanC);
        if (this._contPlanA === this._contPlanB && this._contPlanB === this._contPlanC) return "Empate (A, B y C)";
        if (max === this._contPlanA) return "Plan A";
        if (max === this._contPlanB) return "Plan B";
        return "Plan C";
    }
}


    
