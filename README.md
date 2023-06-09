# @isyfact/eslint-plugin

Das Paket *@isyfact/eslint-plugin* enthält eine Liste von empfohlenen Regeln, die bei der Entwicklung von TypeScript Projekten in der IsyFact zu beachten sind.

## Getting Started 

### Verwendung in TypeScript Projekten ohne Angular

Für die Verwendung des Plugins müssen zunächst folgende Dependencies installiert werden

```
$ npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @isyfact/isy-eslint-typescript-rules
```

Als minimale Konfiguration der `.eslintrc.json` kann folgendes Beispiel verwendet werden.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true
  },
  "extends": [
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

Anschließend müssen noch folgende Pakete installiert werden.

```
$ npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @isyfact/isy-eslint-typescript-rules
```

Die `.eslintrc.json` muss dann noch um das IsyFact Plugin erweitert werden.
Ggf. muss noch `@typescript-eslint/parser` als Parser eingestellt werden.

```
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  
  "extends": [
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:@isyfact/recommended"
  ]
}
```

## Konfiguration des @isyfact/eslint-plugin

Die IsyFact verwendet als Basis die Regeln von [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) und leitet dann unterschiedliche Konfigurationen daraus ab.  

### recommended

Diese Konfiguration enthält eine Liste von Regeln, die von der Isyfact bei der Entwicklung mit TypeScript empfohlen wird. 

:wrench: = fixable, :speech_left: = benötigt Typinformationen

| Name                                                                                                                                                                                                      | Beschreibung                                                                                                                                       | :wrench: | :speech_left: |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| [@typescript-eslint/brace-style](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/brace-style.md)                                                       | Erzwingt einen konsistenten Klammerstil für Blöcke                                                                                                 | :wrench: |               |
| [@typescript-eslint/comma-dangle](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-dangle.md)                                                     | Verbietet ein Komma am Ende einer Liste                                                                                                            | :wrench: |               |
| [@typescript-eslint/comma-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/comma-spacing.md)                                                   | Erzwingt konsistente Leerzeichen vor und nach Kommas                                                                                               | :wrench: |
| [@typescript-eslint/consistent-type-definitions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/consistent-type-definitions.md)                       | Erlaubt Typ-Definitionen nur über Interfaces                                                                                                       | :wrench: |               |
| [@typescript-eslint/default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/default-param-last.md)                                         | Default Parameter müssen am Ende deklariert werden                                                                                                 |          |               |
| [@typescript-eslint/dot-notation](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/dot-notation.md)                                                     | Erzwingt den Zugriff auf Objekte mit der Punkt-Notation (wo Sinnvoll)                                                                              | :wrench: | :speech_left: |
| [@typescript-eslint/explicit-function-return-type](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-function-return-type.md)                   | Erzwingt die Angabe eines Typs für alle Methoden                                                                                                   |          |               |
| [@typescript-eslint/explicit-member-accessibility](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md)                   | Erringt die Angabe der Sichtbarkeiten von Klassenattributen mit Ausnahme von Öffentlichen                                                          | :wrench: |               |
| [@typescript-eslint/func-call-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/func-call-spacing.md)                                           | Verbietet Leerzeichen zwischen Methodenname und Ausführungsklammern                                                                                | :wrench: |               |
| [@typescript-eslint/indent](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/indent.md)                                                                 | Erzwingt eine konsistente Einrückung von 2 Leerzeichen                                                                                             | :wrench: |               |
| [@typescript-eslint/keyword-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/keyword-spacing.md)                                               | Erzwingt konsistente Leerzeichen vor und nach einem Keyword                                                                                        | :wrench: |               |
| [@typescript-eslint/no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)                                   | Verbietet Duplikate als Klassenattribute                                                                                                           |          |               |
| [@typescript-eslint/no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loop-func.md)                                                     | Verbietet Schleifen, die unsichere Referenzen auf Variablen enthalten                                                                              |          |               |
| [@typescript-eslint/no-loss-of-precision](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-loss-of-precision.md)                                     | Verbreitet Gleitkommazahlen, bei denen die Genauigkeit nicht mehr sichergestellt werden kann                                                       |          |               |
| [@typescript-eslint/no-magic-numbers](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-magic-numbers.md)                                             | Verbindet die Verwendung von [Magic Numbers](https://wiki.c2.com/?MagicNumber), Ausnahme sind Zahlen in Enums, Typen und readonly Klassenattribute |          |               |
| [@typescript-eslint/no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-redeclare.md)                                                     | Verbietet die Re-deklaration von Variablen                                                                                                         |          |               |
| [@typescript-eslint/no-throw-literal](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-throw-literal.md)                                             | Verbietet das Werfen von Literalen als Exception                                                                                                   |          | :speech_left: |
| [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md) | Verbietet unnötige Gleichheitsoperatoren bei Booleans                                                                                              | :wrench: | :speech_left: |
| [@typescript-eslint/no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)                             | Verbietet unnötige oder unbenutzte Namespaces oder Enums                                                                                           | :wrench: | :speech_left: |
| [@typescript-eslint/no-unused-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-expressions.md)                                   | Verbietet ungenutzte Ausdrücke                                                                                                                     |          |               |
| [@typescript-eslint/no-unused-vars](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-unused-vars.md)                                                 | Erlaubt die Verwendung von unbenutzten Variablen                                                                                                   |          |               |
| [@typescript-eslint/no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-use-before-define.md)                                     | Verbietet die Verwendung von Variablen vor ihrer Deklaration                                                                                       |          |               |
| [@typescript-eslint/no-useless-constructor](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/no-useless-constructor.md)                                 | Verbietet unbenutzte Konstruktoren                                                                                                                 |          |               |
| [@typescript-eslint/prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-for-of.md)                                                   | Erzwingt die verwendung einer for-of Loop, falls diese sinnvoll verwendet werden kann                                                              |          |               |
| [@typescript-eslint/prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-includes.md)                                               | Erzwingt die Verwendung der include Methode anstelle von indexOf                                                                                   | :wrench: | :speech_left: |
| [@typescript-eslint/prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)                         | Erlaubt nur Literale als Werte für Enums                                                                                                           |          |               |
| [@typescript-eslint/prefer-nullish-coalescing](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md)                           | Erzwingt die Verwendung des nullish coalescing Operator anstelle von komplexen Vergleichen                                                         |          | :speech_left: |
| [@typescript-eslint/prefer-optional-chain](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-optional-chain.md)                                   | Erzwingt Verwendung des safer Operator anseile von komplexen Vergleichen                                                                           |          |               |
| [@typescript-eslint/prefer-reduce-type-parameter](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md)                     | Erzwingt die Verwendung von Generics anstelle von Casten bei der Array#reduce methode                                                              | :wrench: | :speech_left: |
| [@typescript-eslint/prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)                 | Erzwingt die Verwendung der Methoden String#startsWith und String#endsWith                                                                         | :wrench: | :speech_left: |
| [@typescript-eslint/prefer-ts-expect-error](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md)                                 | Erzwingt die Verwendung von @ts-expect-error anstelle von @ts-ignore                                                                               | :wrench: |               |
| [@typescript-eslint/promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/promise-function-async.md)                                 | Erzwingt die Verwendung des async Keywords für alle Methoden, die ein Promise zurückgeben                                                          | :wrench: | :speech_left: |
| [@typescript-eslint/quotes](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/quotes.md)                                                                 | Erzwingt die konsistente Verwendung von Single-Quoted Strings                                                                                      | :wrench: |               |
| [@typescript-eslint/return-await](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/return-await.md)                                                     | Erzwingt die konsistente Verwendung des await Befehl vor dem return Befehl                                                                         | :wrench: | :speech_left: |
| [@typescript-eslint/semi](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/semi.md)                                                                     | Erzwingt die konsistente Verwendung von Semikolons am Ende einer Befehlszeile                                                                      | :wrench: |               |
| [@typescript-eslint/space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/space-before-function-paren.md)                       | Erzwingt die konsistente Vermeidung von leerzeichen nach Methodennamen                                                                             | :wrench: |               |
