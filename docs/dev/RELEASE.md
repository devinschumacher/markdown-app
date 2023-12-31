# Steps to release serpdown

- Create a release candidate
  - Create branch `release-v%version%`
  - Set environment variable `serpdown_IS_STABLE` to `1` (default on AppVeyor and Travis CI)
  - Ensure [changelog](https://github.com/serpdown/serpdown/blob/master/.github/CHANGELOG.md) is up-to-date
  - Bump version in `package.json` and changelog
  - Update all `README.md` files
  - Bump Flathub version ([serpdown.appdata.xml](https://github.com/serpdown/serpdown/blob/master/resources/linux/serpdown.appdata.xml))
  - Create commit `release version %version%`
  - Ensure all tests pass
  - A new draft release should be available or create one
- Publish GitHub release
  - Add git tag `v%version%`
  - Add changelog
  - Add SHA256 checksums
- Update website and documentation
- Publish [Flathub package](https://github.com/flathub/com.github.serpdown.serpdown)
  - Ensure native dependencies
  - Update `runtime` and `SDK` if needed
  - Bump version and update URLs
  - Test the package (`scripts/build-bundle.sh && scripts/test-serpdown.sh`)
  - Create commit `Update to v%version%`

## Work after releasing

- Ensure all issues in the changelog are closed
- :relaxed: :tada:
