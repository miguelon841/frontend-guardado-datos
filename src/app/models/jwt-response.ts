export interface iJwtResponse {
    sign: string
    tel: string
    name: string
    dateBirth: Date
    email: string
    dataUser:{
        name:string,
        dateBirth:Date,
        tel:string,
        sign:string,
        email:string
    }
}
