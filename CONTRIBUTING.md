# Contributing

#### Table of Contents
* [Changes](#changes)
* [Releasing](#releasing)

## Changes

1. `https://github.com/jmzagorski/aurelia-value-converters.git`
2. `npm i`
3. `jspm install -y`
4. make your changes

## Releasing
1. `gulp prepare-release --bump ` major|minor|path|prerelase
2. `git tag -a v[version#] -m "version X.X"`
3. `git push --follow-tags origin master`

