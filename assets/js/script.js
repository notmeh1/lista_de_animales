"use strict";
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  dataPropietario() {
    return `El nombre del dueño es: <b>${this.nombre}</b>. El domicilio está en: <b>${this.direccion}</b>, y el número telefónico de contacto es: <b>${this.telefono}</b>.`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre, telefono, direccion, nombreMascota, tipo, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(newNombreMascota) {
    this._nombreMascota = newNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(newEnfermedad) {
    this._enfermedad = newEnfermedad;
  }
  dataMascota() {
    return `El tipo de animal es un: <b>${this.tipo}</b>, mientras que el nombre de la mascota es: <b>${this._nombreMascota}</b>, y la enfermedad es: <b>${this._enfermedad}</b>.`;
  }
}

const nombreDelPropietario = document.querySelector("#propietario");
const numeroDelPropietario = document.querySelector("#telefono");
const direccionDelPropietario = document.querySelector("#direccion");
const nombreDeLaMascota = document.querySelector("#nombreMascota");
const tipoDeMascota = document.querySelector("#tipo");
const motivoDeLaMascota = document.querySelector("#enfermedad");
const formSubmit = document.querySelector("#form-submit");
const printData = document.querySelector("#resultado");

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  let nombrePropietario = nombreDelPropietario.value;
  let numeroPropietario = numeroDelPropietario.value;
  let direccionPropietario = direccionDelPropietario.value;
  let nombreMascota = nombreDeLaMascota.value;
  let tipoMascota = tipoDeMascota.value;
  let motivoMascota = motivoDeLaMascota.value;

  const datosMascota = new Mascota(
    nombrePropietario,
    numeroPropietario,
    direccionPropietario,
    nombreMascota,
    tipoMascota,
    motivoMascota
  );
  console.log(datosMascota);

  printData.innerHTML = `
    <ul>
    ${datosMascota.dataPropietario()}
     </ul>
     <ul>
    ${datosMascota.dataMascota()}
     </ul>
    `;
});
