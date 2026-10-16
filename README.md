# opencode-plugin-canary

Canary package for publish/install probes during the opencode v1 → v2 plugin migration
(Story 2.0-canary). Zero dependencies, self-contained.

Publishes to GitHub Packages (`npm.pkg.github.com`) via Actions `GITHUB_TOKEN`, and is
installable directly from a git ref (`#v0.0.0-canary.0`) as an alternative to a registry.

## Dual-shape export

Per the frozen migration docs ("Support V1 and V2 from one package"):

- V2 hosts call `setup(ctx)` under plugin id `canary`.
- V1 hosts call `server()` and receive an empty hook map.

## License

Apache-2.0 — see [LICENSE](LICENSE).
