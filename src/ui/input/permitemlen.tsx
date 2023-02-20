import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifPermitemlenParameters} from "../../dt/atif_permitemlen_parameters";

export function AtifInputPermitemUI(props: {
    permitemlenParameters: AtifPermitemlenParameters
    onPermitemParametersChange: (parameter: AtifPermitemlenParameters) => Promise<void>
}) {
    const newData = new AtifPermitemlenParameters(structuredClone(props.permitemlenParameters))

    return <div>
        <TextField type={"number"}
                   label={"solution relative dielectric constant"}
                   value={props.permitemlenParameters.dielectric_solution}
                   helperText={"e.g., water 78.5"}
                   onChange={async (event) => {
                       newData.dielectric_solution = doParseFloatValue(event.target.value, props.permitemlenParameters.dielectric_solution)
                       await props.onPermitemParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"surface relative dielectric constant"}
                   value={props.permitemlenParameters.dialectric_surfaces}
                   helperText={"typically, the same with the solution"}
                   onChange={async (event) => {
                       newData.dialectric_surfaces = doParseFloatValue(event.target.value, props.permitemlenParameters.dialectric_surfaces)
                       await props.onPermitemParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"temperature"}
                   helperText={"e.g., T = 298.15K"}
                   value={props.permitemlenParameters.temperature}
                   onChange={async (event) => {
                       newData.temperature = doParseFloatValue(event.target.value, props.permitemlenParameters.temperature)
                       await props.onPermitemParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"unit length"}
                   helperText={"typically, d = 4 nm"}
                   value={props.permitemlenParameters.length_unit_of_system}
                   onChange={async (event) => {
                       newData.length_unit_of_system = doParseFloatValue(event.target.value, props.permitemlenParameters.length_unit_of_system)
                       await props.onPermitemParametersChange(newData)
                   }}/>
    </div>
}
