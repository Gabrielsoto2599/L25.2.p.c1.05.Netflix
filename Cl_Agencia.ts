import Cl_Suscriptor from "./Cl_Suscriptor.js";

export default class Cl_Agencia{
    private _contNoConex: number = 0;
    private _contSuscriptor: number = 0;
    private _contPlanA: number =0;
    private _contPlanB: number=0;
    private _contPlanC: number =0;
    
    constructor(){}
    procesarSuscriptor(suscriptor:Cl_Suscriptor){
          this._contSuscriptor++

          if(suscriptor.tipoplan =="A" && "B")
            this._contNoConex++
          

          if(suscriptor.tipoplan =="A"){ 
             this._contPlanA++; 
            }
            else if(suscriptor.tipoplan =="B"){ 
               this._contPlanB++ 
            }
            else this._contPlanC++
          }

         porcSucNoConex(){
            return (this._contNoConex/this._contSuscriptor)*100;
         }

          planFavorito(){
            if(this._contPlanA > this._contPlanB && this._contPlanA > this._contPlanC){
			return "A";
		} else if(this._contPlanB > this._contPlanA && this._contPlanB > this._contPlanC){
			return "B";
		} else if(this._contPlanC > this._contPlanA && this._contPlanC > this._contPlanB){
			return "C";
		} 
        else return "Iguales favorito";       
            }
         }
    
    
