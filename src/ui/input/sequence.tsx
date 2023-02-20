import React from "react";
import { AtifSequenceParameters } from "../../dt/atif_sequence_parameters";
import { MultiNumberValueTextField } from "../blocks/m_values";

export function AtifInputSequenceUI(props: {
    sequenceParameters: AtifSequenceParameters
    blockNumber1: number
    blockNumber2: number
    onSequenceParametersChange: (parameter: AtifSequenceParameters) => Promise<void>
}) {
    const newData = new AtifSequenceParameters(structuredClone(props.sequenceParameters))

    const errorMsg1 = `data format(e.g., 1,2,...,nb1), nb1 is block number: ${props.blockNumber1}`

    const errorMsg2 = `data format(e.g., 1,2,...,nb2), nb2 is block number:: ${props.blockNumber2}`

    return <div>
        <MultiNumberValueTextField
            label={"monomer_number_in_block_P1"}
            helperText={errorMsg1}
            error={props.sequenceParameters.monomer_number_in_block_P1.length != props.blockNumber1}
            onMValuesChange={async (values) => {
                newData.monomer_number_in_block_P1 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"monomer_number_in_block_P2"}
            helperText={errorMsg2}
            error={props.sequenceParameters.monomer_number_in_block_P2.length != props.blockNumber2}
            onMValuesChange={async (values) => {
                newData.monomer_number_in_block_P2 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"monomer_valency_in_block_P1"}
            helperText={errorMsg1}
            error={props.sequenceParameters.monomer_valency_in_block_P1.length != props.blockNumber1}
            onMValuesChange={async (values) => {
                newData.monomer_valency_in_block_P1 = values
                await props.onSequenceParametersChange(newData)
            }} />

        <MultiNumberValueTextField
            label={"monomer_valency_in_block_P2"}
            helperText={errorMsg2}
            error={props.sequenceParameters.monomer_valency_in_block_P2.length != props.blockNumber2}
            onMValuesChange={async (values) => {
                newData.monomer_valency_in_block_P2 = values
                await props.onSequenceParametersChange(newData)
            }} />
    </div>
}
