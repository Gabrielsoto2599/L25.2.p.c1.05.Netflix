import Cl_Suscriptor from "./Cl_Suscriptor";

export default class Cl_Agencia {
    private contSuscriptores: number = 0;
    private contNoConex: number = 0;
    private contPlanA: number = 0;
    private contPlanB: number = 0;
    private contPlanC: number = 0;

    procesarSuscriptor(s: Cl_Suscriptor): void {
        this.contSuscriptores++;

        if (!s.pagaConexion()) {
            this.contNoConex++;
        }

        if (s.tipoplan === "A") this.contPlanA++;
        else if (s.tipoplan === "B") this.contPlanB++;
        else if (s.tipoplan === "C") this.contPlanC++;
    }

    porcSucNoConex(): number {
        return this.contSuscriptores > 0 ? (this.contNoConex / this.contSuscriptores) * 100 : 0;
    }

    planFavorito(): string {
        const max = Math.max(this.contPlanA, this.contPlanB, this.contPlanC);
        if (this.contPlanA === this.contPlanB && this.contPlanB === this.contPlanC) return "Empate (A, B y C)";
        if (max === this.contPlanA) return "Plan A";
        if (max === this.contPlanB) return "Plan B";
        return "Plan C";
    }
}

    
