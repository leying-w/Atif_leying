/**
 * Sequence. 1st line: monomer # of each block of poly-1: mb1[]; 2nd line for poly-2
: mb2[]; 3rd line: valency of each block of poly-1: z1[]; 4th line for poly-2: z2[]
 */
export class AtifSequenceParameters {
  public monomer_number_in_block_P1: number[] = []
  public monomer_number_in_block_P2: number[] = []
  public monomer_valency_in_block_P1: number[] = []
  public monomer_valency_in_block_P2: number[] = []

  constructor(data: AtifSequenceParameters | null = null) {
    if (data == null) {
      return
    }
    Object.assign(this, data)
  }

  public toString(): string {
    return `
SEQUENCE:
${this.monomer_number_in_block_P1.join(" ")}
${this.monomer_number_in_block_P1.join(" ")}
${this.monomer_valency_in_block_P1.join(" ")}
${this.monomer_valency_in_block_P2.join(" ")}
`
  }
}
