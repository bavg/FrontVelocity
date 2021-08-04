export interface Icredencial{
    id_credencial:number;
    username:String;
    password:String;
}

export interface Irol{
    id_rol:number;
    descripcion_rol:String;
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
    id_funcionario:number;
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
    id_cliente:number;
}

export interface ISupervisor{
    id_supervisor:number;
}

export interface Iplan{
    zona:String;
    descripcion:String;
    id_plan:number;
    tipo_servicio:String;
    precio:number;
}

export interface IContrato{
    fecha_vencimiento:String;
    id_contrato:number;
    direccion:String;
    estado:String;
    precio:number;
}

export interface IContrato{
    id_facturacion:number
}

export interface Iorden_trabajo{
    id_orden_trabajo:number;
    hora:String;
    dia:String;
    tipo_de_orden:String;
}