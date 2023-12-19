# Storybook 7 Component Library

This is a component library foundation built using Storybook 7 and SASS.

## Contents

- [Installation and setup](#installation-and-setup)
- [Working locally on the project](#working-locally-on-the-project)
- [Creating Components](#creating-components)

## Installation and setup

### Compatibility

- **Node:** ^18.18.0
- **React:** ^18.2.0

### Setting up the project locally

1. Clone the repo from Github: `git clone git@github.com:millnut/storybook_foundations.git`
2. Install Node Modules by running `bun install` from the project root

## Working locally on the project

Run `bun run storybook` from the project root. This will run a new instance of [Storybook](https://storybook.js.org/) that can be accessed from `localhost:6006`.

Changes made locally are automatically compiled and the browser instance of Storybook will automaticaly refresh, hot-loading changes very quickly where possible.

## Creating components

Components should always be created within the `src/components` folder.

### Naming component folders

You can create a new folder within `src/components` that is based on the chosen name for your component. The format of this folder name, react component and story should always be PascalCase i.e. `MyNewComponent`. SASS files should always be camelCase i.e. `myNewComponent`

### Component file structure

Within the component folder you must create the following 3 files:

```
ComponentName
 |_ {ComponentName}.tsx
 |_ {ComponentName}.stories.ts
 |_ {componentName}.scss
```

#### {ComponentName}.tsx

This file is where the Component Structure is defined.

#### {ComponentName}.stories.ts

This file allows developers to pass in mockup content to the component that will render within Storybook. More information is available in the Storybook docs [Storybook JS - Defining Stories](https://storybook.js.org/docs/react/writing-stories/introduction#defining-stories)

#### {componentName}.scss

This is where component styling is defined using SASS/CSS.
