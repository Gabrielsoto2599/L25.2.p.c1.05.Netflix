export default class Cl_Suscriptor{
    private _cedula: string = "";
    private _tipoplan: string ="";
    
    constructor(cedula:string, tipoplan:string){
        this._cedula = cedula;
        this._tipoplan = tipoplan;
        
     }
     set cedula(cedula:string){
        this._cedula = cedula;
     }
     get cedula():string{
        return this._cedula;
     }
     set tipoplan(tipoplan:string){
        this._tipoplan = tipoplan;
     }
     get tipoplan():string{
        return this._tipoplan;
     }     

     montoPagar(){
      switch(this._tipoplan){
         case "A": return 3 *1.10;
         case "B": return 5 *1.10;
         default: return 10;   
      }
     }

     


     

