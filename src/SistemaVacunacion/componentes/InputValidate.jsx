import React from "react";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  Label,
  ContenedorInput,
  MensajeValidacion,
  IconoValidacion,
} from "./../elementos/Formularios";

export const InputValidate = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  mensajeValidacion,
  expresionRegular,
  funcion,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <ContenedorInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
      </ContenedorInput>
      <MensajeValidacion valido={estado.valido}>{mensajeValidacion}</MensajeValidacion>
    </div>
  );
};
