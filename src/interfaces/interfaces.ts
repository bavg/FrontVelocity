export interface Icredencial{
    id_credencial:number;
    username:String;
    password:String;
}

export interface Irol{
    id_rol:number;
    descripcion_rol:String;
    usuarios:IUsuario[];
}

export interface IUsuario{
    apellido:String;
    correo:String;
    direccion:String;
    fecha_nacimiento:String;
    id:number;
    nombre:String;
    password:String;
    rut:String;
    telefono:number;
    username:String;
    
}

export interface Ifuncionario{
    contratos:IContrato[];
}

export interface IEncarngado_bodega{
    id_encargado_bodega:number;
}

export interface Iproducto{
    id_producto:number;
    nombre:String;
    cantidad:number;
    precio:number;   
}

export interface ICliente{
    apellido:String;
    correo:String;
    direccion:String;
    fecha_nacimiento:String;
    id:number;
    nombre:String;
    password:String;
    rut:String;
    telefono:number;
    username:String;
    contratos: IContrato[];
}

export interface ISupervisor{
    id_supervisor:number;
}

export interface Iplan{
    zona:String;
    descripcion:String;
    id:number;
    tipoServicio:String;
    precio:number;
}

export interface IContrato{
    direccion:String;
    cliente: ICliente;
    estadoPago:String;
    fecha:String;
    fechaVencimiento:String;
    id:number;
    planes:Iplan[];
    ultimaFechaPagado:String;
}

export interface Iorden_trabajo{
    id_orden_trabajo:number;
    hora:String;
    dia:String;
    tipo_de_orden:String;
}