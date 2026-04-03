export default class Cl_Suscriptor {
    public cedula: string;
    public tipoplan: string;

    constructor(cedula: string, tipoplan: string) {
        this.cedula = cedula;
        this.tipoplan = tipoplan.toUpperCase();
    }

    montoPagar(): number {
        switch (this.tipoplan) {
            case "A": return 3 * 1.10;
            case "B": return 5 * 1.10;
            case "C": return 10;
            default: return 0;
        }
    }

    pagaConexion(): boolean {
        return this.tipoplan !== "C";
    }
}
