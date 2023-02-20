import React from "react";
import {TextField} from "@mui/material";

import {doParseFloatValue} from "../utils/values";
import {AtifValencyParameters} from "../../dt/atif_valency_parameters";


export function AtifInputValencyUI(props: {
    valencyParameters: AtifValencyParameters
    onValencyParametersChange: (parameter: AtifValencyParameters) => Promise<void>
}) {
    const newData = new AtifValencyParameters(structuredClone(props.valencyParameters))

    return <div>
        <TextField type={"number"}
                   label={"z_positive_salt"}
                   value={props.valencyParameters.valency_positive_salt}
                   onChange={async (event) => {
                       newData.valency_positive_salt = doParseFloatValue(event.target.value, props.valencyParameters.valency_positive_salt)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"z_negative_salt"}
                   value={props.valencyParameters.valency_negative_salt}
                   onChange={async (event) => {
                       newData.valency_negative_salt = doParseFloatValue(event.target.value, props.valencyParameters.valency_negative_salt)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"z_positive_counterion"}
                   value={props.valencyParameters.valency_positive_counterion}
                   onChange={async (event) => {
                       newData.valency_positive_counterion = doParseFloatValue(event.target.value, props.valencyParameters.valency_positive_counterion)
                       await props.onValencyParametersChange(newData)
                   }}/>

        <TextField type={"number"}
                   label={"z_negative_counterion"}
                   value={props.valencyParameters.valency_negative_counterion}
                   onChange={async (event) => {
                       newData.valency_negative_counterion = doParseFloatValue(event.target.value, props.valencyParameters.valency_negative_counterion)
                       await props.onValencyParametersChange(newData)
                   }}/>
    </div>
}
