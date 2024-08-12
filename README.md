# @isyfact/eslint-plugin

Das Paket _@isyfact/eslint-plugin_ enthält eine Liste von empfohlenen Regeln, die bei der Entwicklung von TypeScript-Projekten in der IsyFact zu beachten sind.

## Steckbrief

[_ESLint_](https://eslint.org/) definiert Regeln zur statischen Codeanalyse für JavaScript, und führt eine Prüfung des Quellcodes
gegenüber den Regeln aus. Für TypeScript existiert eine ESLint-Erweiterung mit angepassten und zusätzlichen Regeln, die sich auf
TypeScript basierten Quellcode beziehen ([_typescript-eslint_](https://github.com/typescript-eslint/typescript-eslint#readme)).

Die Entwickler der ESLint-TypeScript-Erweiterung sprechen eine Empfehlung aus, welche Regeln aus allen verfügbaren Regeln
den höchsten Nutzen bringen, und verwendet werden sollten (_Recommended-Config_). Das empfohlene Regelset bietet eine
gute Zusammenstellung von Regeln und kann uneingeschränkt verwendet werden. Dabei sollte die stärkere Variante mit
Typprüfung gewählt werden.

Das vollständige Regelset aus ESLint-TypeScript beinhaltet noch weitere Regeln, die verwendet werden
können. In _isy-eslint-typescript-rules_ ist eine Auswahl von nützlichen Regeln aus dem vollständigen Regelset
zusammengefasst, die über das empfohlene Regelset hinausgehen. Die Regeln werden
als [_Sharable Config_](https://eslint.org/docs/developer-guide/shareable-configs) bereitgestellt.

ESLint hat ab Version 8.53.0 die TypeScript-Formatierungsregeln eingestellt und empfiehlt den Umstieg auf [_ESLint-Stylistic_](https://eslint.style/). In ESLint-Stylistic sind diese Regeln bereits migriert und werden weiterhin gepflegt.
Dieser [_Leitfaden_](https://eslint.style/guide/migration) unterstützt bei der Migration.

_isy-eslint-typescript-rules_ versteht sich als Erweiterung zu den empfohlenen TypeScript-Regeln aus ESLint und ESLint-Stylistic.

## Getting Started

### Verwendung in TypeScript-Projekten ohne Angular

Für die Verwendung des Plugins müssen zunächst folgende Dependencies installiert werden

```
$ npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @stylistic/eslint-plugin-ts @isyfact/eslint-plugin
```

Als minimale Konfiguration der `.eslintrc.json` kann folgendes Beispiel verwendet werden.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "@stylistic/ts"],
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@isyfact/recommended"
  ]
}
```

### Verwendung in Angular Projekten

Angular hat einen [Generator](https://github.com/angular-eslint/angular-eslint), welcher die Konfiguration von EsLint in Angular Projekten erleichtert.
Der Generator wir mit folgendem Befehl ausgeführt:

```
$ ng add @angular-eslint/schematics
```

Wenn eine bestimmte Angular-Hauptversion verwendet wird, sollte die schematics passend zur Angular-Version installiert werden.

Anschließend müssen noch folgende Pakete installiert werden.

```
$ npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @stylistic/eslint-plugin-ts @isyfact/eslint-plugin
```

Die `.eslintrc.json` muss dann noch um das IsyFact-Plugin erweitert werden.
Ggf. muss noch `@typescript-eslint/parser` als Parser eingestellt werden.

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "@stylistic/ts"],

  "extends": [
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:@isyfact/recommended"
  ]
}
```

Des Weiteren wurde ein zweites Profil mit ESLint-Regeln angelegt, das für Unit-Tests genutzt werden kann.
Die Datei `test.json` beinhaltet das zweite Profil.
Dieses Regelset ist flexibler und nicht so streng wie die Regeln für den Produktivcode.
Für die Anbindung wird folgender Code innerhalb der `.eslintrc.json` Datei benötigt:

```json
{
  "files": ["*.spec.ts"],
  "extends": ["plugin:@isyfact/test"]
}
```

Somit wird das ESLint-Regelset auf `.spec` Dateien angewandt.

### Weiterführende Anleitungen zur Installation:

Installation von ESLint-TypeScript:
https://www.npmjs.com/package/@typescript-eslint/eslint-plugin

Installation von ESLint-TypeScript-Formatierungsregeln:
https://www.npmjs.com/package/@stylistic/eslint-plugin-ts

Getting Started mit ESLint-TypeScript:
https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

Angular spezifische Regeln für ESLint:
https://github.com/angular-eslint/angular-eslint

## Konfiguration des @isyfact/eslint-plugin

Die IsyFact verwendet als Basis die Regeln von [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) und leitet dann unterschiedliche Konfigurationen daraus ab.

### recommended

Diese Konfiguration enthält eine Liste von Regeln, die von der Isyfact bei der Entwicklung mit TypeScript empfohlen wird.

:wrench: = fixable, 💬 = benötigt Typinformationen

| Name                                                                                                                                                                                                      | Beschreibung                                                                                                                                       | :wrench: | 💬  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --- |
| [@stylistic/ts/brace-style](https://eslint.style/rules/ts/brace-style#ts-brace-style)                                                                                                                     | Erzwingt einen konsistenten Klammerstil für Blöcke                                                                                                 | :wrench: |     |
| [@stylistic/ts/comma-dangle](https://eslint.style/rules/ts/comma-dangle)                                                                                                                                  | Verbietet ein Komma am Ende einer Liste                                                                                                            | :wrench: |     |
| [@stylistic/ts/comma-spacing](https://eslint.style/rules/ts/comma-dangle)                                                                                                                                 | Erzwingt konsistente Leerzeichen vor und nach Kommas                                                                                               | :wrench: |
| [@stylistic/ts/function-call-spacing](https://eslint.style/rules/ts/function-call-spacing)                                                                                                                | Verbietet Leerzeichen zwischen Methodenname und Ausführungsklammern                                                                                | :wrench: |     |
| [@stylistic/ts/keyword-spacing](https://eslint.style/rules/ts/keyword-spacing)                                                                                                                            | Erzwingt konsistente Leerzeichen vor und nach einem Keyword                                                                                        | :wrench: |     |
| [@stylistic/ts/quotes](https://eslint.style/rules/ts/quotes)                                                                                                                                              | Erzwingt die konsistente Verwendung von Single-Quoted Strings                                                                                      | :wrench: |     |
| [@stylistic/ts/semi](https://eslint.style/rules/ts/semi)                                                                                                                                                  | Erzwingt die konsistente Verwendung von Semikolons am Ende einer Befehlszeile                                                                      | :wrench: |     |
| [@stylistic/ts/indent](https://eslint.style/rules/ts/indent)                                                                                                                                              | Erzwingt eine konsistente Einrückung von 2 Leerzeichen                                                                                             | :wrench: |     |
| [@stylistic/ts/space-before-function-paren](https://eslint.style/rules/ts/space-before-function-paren)                                                                                                    | Erzwingt die konsistente Vermeidung von leerzeichen nach Methodennamen                                                                             | :wrench: |     |
| [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)                       | Erlaubt Typ-Definitionen nur über Interfaces                                                                                                       | :wrench: |     |
| [@typescript-eslint/default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/default-param-last.md)                                         | Default Parameter müssen am Ende deklariert werden                                                                                                 |          |     |
| [@typescript-eslint/dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/dot-notation.md)                                                     | Erzwingt den Zugriff auf Objekte mit der Punkt-Notation (wo Sinnvoll)                                                                              | :wrench: | 💬  |
| [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)                   | Erzwingt die Angabe eines Typs für alle Methoden                                                                                                   |          |     |
| [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)                   | Erringt die Angabe der Sichtbarkeiten von Klassenattributen mit Ausnahme von Öffentlichen                                                          | :wrench: |     |
| [@typescript-eslint/no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)                                   | Verbietet Duplikate als Klassenattribute                                                                                                           |          |     |
| [@typescript-eslint/no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loop-func.md)                                                     | Verbietet Schleifen, die unsichere Referenzen auf Variablen enthalten                                                                              |          |     |
| ~~[@typescript-eslint/no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)~~                                 | Verbreitet Gleitkommazahlen, bei denen die Genauigkeit nicht mehr sichergestellt werden kann                                                       |          |     |
| [@typescript-eslint/no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-magic-numbers.md)                                             | Verbindet die Verwendung von [Magic-Numbers](https://wiki.c2.com/?MagicNumber), Ausnahme sind Zahlen in Enums, Typen und readonly Klassenattribute |          |     |
| [@typescript-eslint/no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-redeclare.md)                                                     | Verbietet die Re-deklaration von Variablen                                                                                                         |          |     |
| [@typescript-eslint/no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-throw-literal.md)                                             | Verbietet das Werfen von Literalen als Exception                                                                                                   |          | 💬  |
| [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md) | Verbietet unnötige Gleichheitsoperatoren bei Booleans                                                                                              | :wrench: | 💬  |
| [@typescript-eslint/no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)                             | Verbietet unnötige oder unbenutzte Namespaces oder Enums                                                                                           | :wrench: | 💬  |
| [@typescript-eslint/no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-expressions.md)                                   | Verbietet ungenutzte Ausdrücke                                                                                                                     |          |     |
| [@typescript-eslint/no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-vars.md)                                                 | Erlaubt die Verwendung von unbenutzten Variablen                                                                                                   |          |     |
| [@typescript-eslint/no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-use-before-define.md)                                     | Verbietet die Verwendung von Variablen vor ihrer Deklaration                                                                                       |          |     |
| [@typescript-eslint/no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md)                                 | Verbietet unbenutzte Konstruktoren                                                                                                                 |          |     |
| [@typescript-eslint/prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-for-of.md)                                                   | Erzwingt die verwendung einer for-of-Loop, falls diese sinnvoll verwendet werden kann                                                              |          |     |
| [@typescript-eslint/prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-includes.md)                                               | Erzwingt die Verwendung der include Methode anstelle von indexOf                                                                                   | :wrench: | 💬  |
| [@typescript-eslint/prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)                         | Erlaubt nur Literale als Werte für Enums                                                                                                           |          |     |
| [@typescript-eslint/prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)                           | Erzwingt die Verwendung des Nullish-Coalescing-Operators anstelle komplexer Vergleiche                                                             |          | 💬  |
| [@typescript-eslint/prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)                                   | Erzwingt die Verwendung des Safer-Operators anstelle komplexer Vergleiche                                                                          |          |     |
| [@typescript-eslint/prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)                     | Erzwingt die Verwendung von Generics anstelle von Casten bei der Array#reduce-Methode                                                              | :wrench: | 💬  |
| [@typescript-eslint/prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)                 | Erzwingt die Verwendung der Methoden String#startsWith und String#endsWith                                                                         | :wrench: | 💬  |
| ~~[@typescript-eslint/prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)~~                             | Erzwingt die Verwendung von @ts-expect-error anstelle von @ts-ignore                                                                               | :wrench: |     |
| [@typescript-eslint/promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md)                                 | Erzwingt die Verwendung des async-Keywords für alle Methoden, die ein Promise zurückgeben                                                          | :wrench: | 💬  |
| [@typescript-eslint/return-await](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/return-await.md)                                                     | Erzwingt die konsistente Verwendung des await Befehl vor dem return Befehl                                                                         | :wrench: | 💬  |
| [@typescript-eslint/unbound-method](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/unbound-method.md)                                                 | Setzt Option `ignoreStatic` auf `true` um Angular-Validatoren ohne Regelverletzung verwenden zu können                                             |          |     |
