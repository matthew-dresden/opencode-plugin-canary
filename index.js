// Dual-shape default export, per docs/v2-migration/reference/plugins-migrate-v1.md
// ("Support V1 and V2 from one package"): V2 calls setup(), V1 calls server().
// Self-contained and dependency-free; the docs' Plugin.define() wrapper is inlined
// here as a plain object so this package ships with zero dependencies.
export default {
  ...{
    id: "canary",
    async setup(ctx) {},
  },
  async server() {
    return {}
  },
}
