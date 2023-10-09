# Travelling Salesman

With this template, you can easily create a project using Three.js.
We use here the bundler Vite, and ESLint as the linter.

## Installation

```sh
npm install
```
should put in your project folder everything necessary inside `/node_modules`.

## Change linter

```sh
npx eslint --init
```
This command should prompt you your coding style and save it either as a Javascript file / JSON / other.
This template comes with a JSON file (`.eslintrc.json`) that you can change or remove if necessary.

## Starting the development server

```sh
npx vite
```
After using this command, you can preview your website using the link given in the terminal.
Other commands are available while the server is running.

## Module

This program has been developed with an ease of use in mind.

Import it with:
```js
import * as THREE from 'three';
```

You have several tools at your disposal:
- `salesman.anchor` : the 3D empty object where all cities and lines will connect after and while generating.
- `salesman.init()`: initializes the travelling salesman environment.
- `salesman.generate()`: starts the solution generation.
- `salesman.start()`: does the initialization then the generation in one call.
- `salesman.stop()`: 
- `salesman.settings` : settings as an object, to use with `dat.gui`.
    - `pointCount`
    - `populationMax`
    - `generations`
    - `mutationFrequency`
    - `crossFrequency`

