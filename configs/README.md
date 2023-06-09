# isy-eslint-typescript-rules

Ein Regelset mit ausgewählten ESLint Regeln für TypeScript basierten Quellcode.  

## Steckbrief

[*ESLint*](https://eslint.org/) definiert Regeln zur statischen Code Analyse für JavaScript, und führt eine Prüfung des Quellcodes 
gegenüber den Regeln aus. Für TypeScript existiert eine ESLint Erweiterung mit angepassten und zusätzlichen Regeln, die sich auf 
TypeScript basierten Quellcode beziehen ([*typescript-eslint*](https://github.com/typescript-eslint/typescript-eslint#readme)). 

Die Entwickler der ESLint TypeScript Erweiterung sprechen eine Empfehlung aus, welche Regeln aus allen verfügbaren Regeln
den höchsten Nutzen bringen, und verwendet werden sollten (*Recommended Config*). Das empfohlene Regelset bietet eine 
gute Zusammenstellung von Regeln und kann uneingeschränkt verwendet werden. Dabei sollte die stärkere Variante mit 
Typprüfung gewählt werden.         

Das vollständige Regelset aus ESLint TypeScript beinhaltet noch weitere Regeln, die verwendet werden 
können. In *isy-eslint-typescript-rules* ist eine Auswahl von nützlichen Regeln aus dem vollständigen Regelset 
zusammengefasst, die über das empfohlene Regelset hinausgehen. Die Regeln werden 
als [*Sharable Config*](https://eslint.org/docs/developer-guide/shareable-configs) bereitgestellt. 

*isy-eslint-typescript-rules* versteht sich als Erweiterung zu den empfohlenen TypeScript Regeln aus ESLint.  


## Getting Started

### Verwendung der Rules in Node Projekten ohne Angular

#### Installation 

Das Regelset wird über npm in die dev dependencies eingebunden. Voraussetzung ist die Installation von ESLint und das 
TypeScript Plugin für ESLint.  

```
$ npm i --save-dev eslint eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin

$ npm i --save-dev @isyfact/isy-eslint-typescript-rules
```


#### Konfiguration

Im Erweiterungsteil der ESLint Konfigurationsdatei `.eslintrc.json` wird das Isy Regelset zusätzlich zu den
empfohlenen ESLint TypeScript Regeln hinzugefügt.

```
   "extends": [    
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "@isyfact/isy-eslint-typescript-rules"
   ]
```

### Verwendung der Rules in Angular Projekten

Für Angular Projekte, insbesondere für Monorepos, gibt es ein Schematics, welches die Installation und Konfiguration erleichtert.

> Das Monorepo für EsLint Tooling und eine detailiertet Dokumentation ist [hier](https://github.com/angular-eslint/angular-eslint) zu finden.

Der folgenden Befehle installieren alle notwendingen Pakete für die Verwendung von eslint in Angular Projekten

```
$ ng add @angular-eslint/schematics

$ npm i --save-dev eslint eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Anschließend muss eine zentrale `.eslintrc.json` Datei im Root Verzeichnis angelegt werden. 
Dabei kann zunächst folgende minimale Konfiguration verwendet werden.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "@isyfact/isy-eslint-typescript-rules"
  ]
}
```

Für Monorepos mit mehreren Teilprojekten kann anschließend die jeweilige `.eslintrc.json` Datei generiert werden.

```
ng g @angular-eslint/schematics:add-eslint-to-project {{YOUR_PROJECT_NAME_GOES_HERE}}
```

#### Verwendung der EsLint Rules in IntelliJ

Bei Monorepos funktioniert die automatische Erkennung der `.eslintrc.json` Dateien von IntelliJ nicht zuverlässig.
In diesem Fall kann unter `File > Settings > EsLint` die Option _Detect package and configuration file from the nearest package.json_ ausgewählt werden.
Anschließend müssen noch alle Ordner in die darunter stehnde Liste aufgenommen werden, welche eine `.eslintrc.json` enthalten.

### Ausführung

Für die Ausführung von ESLint wird der Linter mit der Angabe des zu prüfenden Source Code Ordners aufgerufen. Der Linter 
liefert eine Liste mit allen gefundenen Regelverstößen und Warnungen. Wenn der Linter als Build Skript in der Package 
json aufgerufen wird, schlägt der Build fehlt.

```
npx eslint source-dir
```

### Weiterführende Anleitungen zur Installation:

Installation von ESLint TypeScript: 
https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

Getting Started mit ESLint TypeScript:
https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

Angular spezifische Regeln für ESLint:
https://github.com/angular-eslint/angular-eslint


## Beschreibung der Regeln 

Die von ESLint empfohlenen Regeln zur TypeScript Code-Anylse sind auf der Seite 
[*typescript-eslint/eslint-plugin*](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) 
im Detail beschrieben. Dort befindet sich auch eine Auflistung über alle verfügbaren Regeln. 

Das Regelset von *isy-eslint-typescript-rules* beinhaltet folgende Regeln: 

### Base Rules - Erweiterungen

| Name                                                                                                                                                                                                          | Description                                                                                                             | Configuration   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| [`@typescript-eslint/consistent-type-definitions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)                       | Consistent with type definition either `interface` or `type`                                                            | interface       |
| [`@typescript-eslint/explicit-function-return-type`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)                   | Require explicit return types on functions and class methods                                                            |                 |
| [`@typescript-eslint/explicit-member-accessibility`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)                   | Require explicit accessibility modifiers on class properties and methods                                                | public          |
| [`@typescript-eslint/no-unnecessary-boolean-literal-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md) | Flags unnecessary equality comparisons against boolean literals                                                         |                 |
| [`@typescript-eslint/no-unnecessary-qualifier`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)                             | Warns when a namespace qualifier is unnecessary                                                                         |                 |
| [`@typescript-eslint/no-unnecessary-type-constraint`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)                 | Disallows unnecessary constraints on generic types                                                                      |                 |
| [`@typescript-eslint/prefer-for-of`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md)                                                   | Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated          |                 |
| [`@typescript-eslint/prefer-includes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md)                                               | Enforce `includes` method over `indexOf` method                                                                         |                 |
| [`@typescript-eslint/prefer-literal-enum-member`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)                         | Require that all enum members be literal values to prevent unintended enum member name shadow issues                    |                 |
| [`@typescript-eslint/prefer-nullish-coalescing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)                           | Enforce the usage of the nullish coalescing operator instead of logical chaining                                        |                 |
| [`@typescript-eslint/prefer-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)                                   | Prefer using concise optional chain expressions instead of chained logical ands                                         |                 |
| [`@typescript-eslint/prefer-reduce-type-parameter`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)                     | Prefer using type parameter when calling `Array#reduce` instead of casting                                              |                 |
| [`@typescript-eslint/prefer-string-starts-ends-with`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)                 | Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings |                 |
| [`@typescript-eslint/prefer-ts-expect-error`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)                                 | Recommends using `@ts-expect-error` over `@ts-ignore`                                                                   |                 |
| [`@typescript-eslint/promise-function-async`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md)                                 | Requires any function or method that returns a Promise to be marked async                                               |                 |

### Extension Rules - Erweiterungen

| Name                                                                                                                                                                                    | Description                                                                          | Configuration                                                                         | 
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [`@typescript-eslint/brace-style`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md)                                 | Enforce consistent brace style for blocks                                            |                                                                                       | 
| [`@typescript-eslint/comma-dangle`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md)                               | Require or disallow trailing comma                                                   |                                                                                       | 
| [`@typescript-eslint/comma-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md)                             | Enforces consistent spacing before and after commas                                  |                                                                                       | 
| [`@typescript-eslint/default-param-last`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md)                   | Enforce default parameters to be last                                                |                                                                                       |  
| [`@typescript-eslint/dot-notation`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md)                               | enforce dot notation whenever possible                                               |                                                                                       | 
| [`@typescript-eslint/func-call-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md)                     | Require or disallow spacing between function identifiers and their invocations       |                                                                                       | 
| [`@typescript-eslint/indent`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)                                           | Enforce consistent indentation                                                       | 2                                                                                     | 
| [`@typescript-eslint/keyword-spacing`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md)                         | Enforce consistent spacing before and after keywords                                 |                                                                                       | 
| [`@typescript-eslint/no-dupe-class-members`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)             | Disallow duplicate class members                                                     |                                                                                       | 
| [`@typescript-eslint/no-loop-func`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md)                               | Disallow function declarations that contain unsafe references inside loop statements |                                                                                       |  
| [`@typescript-eslint/no-loss-of-precision`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)               | Disallow literal numbers that lose precision                                         |                                                                                       | 
| [`@typescript-eslint/no-magic-numbers`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md)                       | Disallow magic numbers                                                               |ignoreEnums: true, ignoreNumericLiteralTypes: true, ignoreReadonlyClassProperties: true| 
| [`@typescript-eslint/no-redeclare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md)                               | Disallow variable redeclaration                                                      |                                                                                       |
| [`@typescript-eslint/no-throw-literal`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md)                       | Disallow throwing literals as exceptions                                             |                                                                                       |
| [`@typescript-eslint/no-unused-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md)             | Disallow unused expressions                                                          |                                                                                       |
| [`@typescript-eslint/no-use-before-define`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md)               | Disallow the use of variables before they are defined                                |                                                                                       | 
| [`@typescript-eslint/no-useless-constructor`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md)           | Disallow unnecessary constructors                                                    |                                                                                       |  
| [`@typescript-eslint/quotes`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md)                                           | Enforce the consistent use of either backticks, double, or single quotes             | single                                                                                |
| [`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md)                               | Enforces consistent returning of awaited values                                      |                                                                                       | 
| [`@typescript-eslint/semi`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md)                                               | Require or disallow semicolons instead of ASI                                        |  always                                                                               | 
| [`@typescript-eslint/space-before-function-paren`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md) | Enforces consistent spacing before function parenthesis                              |  never                                                                                | 

## Anmerkungen

Der Packagename des npm Moduls entspricht nicht dem Ordernamen für das Projekt. Der Grund liegt in der Funktionsweise von ESLint und wie *Shareable Configs* 
bereitgestellt werden müssen. Eine *Shareable Config* muss immer mit dem Präfix *eslint-config* beginnen. Dies weicht allerdings vom Präfix *isy* ab, 
deshalb unterschieden sich Packagename und Ordnername in diesem Projekt.


## Changelog

Siehe [CHANGELOG.md](CHANGELOG.md)
