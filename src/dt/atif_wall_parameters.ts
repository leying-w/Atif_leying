// /*External potential. Surface charge density: (C/m^2). Short-range force: monomers,
// positive salt, negative salt, positive counterion, negative counterion, solvent***/
// WALL:
// 0.02; 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
export class AtifWallParameters {
  public surface_charge_density = 0
  public Ext_blocks: number[] = [] // UI 需要更新，判断数据是否足够的逻辑【 AtifPolymerParameters 中 Data block_number 的和 参数判断】
  public Ext_positive_salt = 0
  public Ext_negative_salt = 0
  public Ext_positive_counterion = 0
  public Ext_negative_counterion = 0
  public Ext_solvent = 0

  constructor(data: AtifWallParameters | null = null) {
    if (data != null) {
      Object.assign(this, data)
    }
  }

// /*External potential. Surface charge density: (C/m^2). Short-range force: monomers,
// positive salt, negative salt, positive counterion, negative counterion, solvent***/
// WALL:
// 0.02; 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
// 0.02; 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
  public toString(): string {
    return `
WALL:
${this.surface_charge_density}; ${this.Ext_blocks.join(",")}, ${this.Ext_positive_salt}, ${this.Ext_negative_salt}, ${this.Ext_positive_counterion}, ${this.Ext_negative_counterion}, ${this.Ext_solvent}
`
  }
}
