## New template

<!-- One line: what this template deploys. -->

### Files

- [ ] `src/templates/<template>/meta.ts`, with the template name
- [ ] `src/templates/<template>/default/meta.ts`
- [ ] `src/templates/<template>/default/description.md`
- [ ] `src/templates/<template>/default/docker-compose.yml`
- [ ] `src/templates/<template>/default/template.toml`, one `[[config.domains]]` per routed service
- [ ] Optional: `logo.png`, screenshots in `images/`
- [ ] `bun run generate`, with `src/generated/` committed

### Checked

- [ ] Deployed on a Deplo instance, and it starts
- [ ] Data that has to survive a redeploy sits in a volume
