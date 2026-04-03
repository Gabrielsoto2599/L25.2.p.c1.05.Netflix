export default class Cl_Agencia {
    constructor() {
        this.contSuscriptores = 0;
        this.contNoConex = 0;
        this.contPlanA = 0;
        this.contPlanB = 0;
        this.contPlanC = 0;
    }

    procesarSuscriptor(s) {
        this.contSuscriptores++;
        
        // El Plan C es el único que NO paga conexión
        if (!s.pagaConexion()) {
            this.contNoConex++;
        }

        if (s.tipoplan === "A") this.contPlanA++;
        else if (s.tipoplan === "B") this.contPlanB++;
        else if (s.tipoplan === "C") this.contPlanC++;
    }

    porcSucNoConex() {
        if (this.contSuscriptores === 0) return 0;
        return (this.contNoConex / this.contSuscriptores) * 100;
    }

    planFavorito() {
        let max = Math.max(this.contPlanA, this.contPlanB, this.contPlanC);
        if (this.contPlanA === this.contPlanB && this.contPlanB === this.contPlanC) 
            return "Empate técnico (A, B y C)";
        
        if (max === this.contPlanA) return "Plan A";
        if (max === this.contPlanB) return "Plan B";
        return "Plan C";
    }
}
