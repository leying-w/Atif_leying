// /*****Set valency. Salt(positive : negative); counterion(positive : negative)*****/
export class AtifValencyParameters {

  public valency_positive_salt = 0
  public valency_negative_salt = 0
  public valency_positive_counterion = 0
  public valency_negative_counterion = 0

  constructor(data: AtifValencyParameters | null = null) {
    if (data == null) {
      return
    }

    Object.assign(this, data)
  }

// VALENCY:
// 1 : -1; 1 : -1
  public toString(): string {
    return `
VALENCY:
${this.valency_positive_salt} : ${this.valency_negative_salt}; ${this.valency_positive_counterion} : ${this.valency_negative_counterion}
`
  }
}
