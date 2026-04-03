export default class Cl_Suscriptor {
    constructor(cedula, tipoplan) {
        this.cedula = cedula;
        this.tipoplan = tipoplan.toUpperCase();
    }

    montoPagar() {
        switch (this.tipoplan) {
            case "A": return 3 * 1.10; // $3.3
            case "B": return 5 * 1.10; // $5.5
            case "C": return 10; // $10 (Sin cargo extra)
            default: return 0;
        }
    }

    pagaConexion() {
        return this.tipoplan !== "C";
    }
}
