# @isyfact/eslint-plugin

Das Paket _@isyfact/eslint-plugin_ enthält eine Liste von empfohlenen Regeln, die bei der Entwicklung von TypeScript-Projekten in der IsyFact zu beachten sind.

**Hinweis (Flat Config):** Mit ESLint v10 wird ausschließlich die **Flat Config** unterstützt. Statt `.eslintrc.*` nutzt man **`eslint.config.js`** (oder `.cjs`).
Die Beispiele in dieser Anleitung sind entsprechend angepasst.

## Steckbrief

[_ESLint_](https://eslint.org/) definiert Regeln zur statischen Codeanalyse für JavaScript und führt eine Prüfung des Quellcodes gegenüber den Regeln aus.
Für TypeScript existiert eine ESLint-Erweiterung mit angepassten und zusätzlichen Regeln, die sich auf TypeScript basierten Quellcode beziehen ([_typescript-eslint_](https://github.com/typescript-eslint/typescript-eslint#readme)).

Die Entwickler der ESLint-TypeScript-Erweiterung sprechen eine Empfehlung aus, welche Regeln aus allen verfügbaren Regeln den höchsten Nutzen bringen und verwendet werden sollten (_Recommended-Config_).
Das empfohlene Regelset bietet eine gute Zusammenstellung von Regeln und kann uneingeschränkt verwendet werden.
Dabei sollte die stärkere Variante mit Typprüfung gewählt werden.

Das vollständige Regelset aus ESLint-TypeScript beinhaltet noch weitere Regeln, die verwendet werden können.
In _isy-eslint-typescript-rules_ ist eine Auswahl von nützlichen Regeln aus dem vollständigen Regelset zusammengefasst, die über das empfohlene Regelset hinausgehen.
Die Regeln werden als [_Sharable Config_](https://eslint.org/docs/developer-guide/shareable-configs) bereitgestellt.

Die _isy-eslint-typescript-rules_ verstehen sich als Erweiterung zu den empfohlenen TypeScript-Regeln aus ESLint.

## Getting Started

### Verwendung in TypeScript-Projekten ohne Angular

Für die Verwendung des Plugins müssen zunächst folgende Dependencies installiert werden

```bash
$ npm i --save-dev eslint@^10.8.1 typescript-eslint@^8.67.0 @isyfact/eslint-plugin
```

Als minimale Konfiguration der `eslint.config.js` kann folgendes Beispiel verwendet werden.

```js
const { configs } = require('@isyfact/eslint-plugin');

module.exports = (async () => {
  const recommended = await configs.recommended();

  return [
    { ignores: ['**/node_modules/**'] },

    ...recommended,

    {
      files: ['**/*.ts'],
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.json'],
          tsconfigRootDir: __dirname,
        },
      },
    },
  ];
})();
```

### Verwendung in Angular Projekten

Angular hat einen [Generator](https://github.com/angular-eslint/angular-eslint), welcher die Konfiguration von EsLint in Angular Projekten erleichtert.
Der Generator wird mit folgendem Befehl ausgeführt:

```bash
$ ng add @angular-eslint/schematics
```

Wenn eine bestimmte Angular-Hauptversion verwendet wird, sollte die schematics passend zur Angular-Version installiert werden.

Anschließend müssen noch folgende Pakete installiert werden.

```bash
$ npm i --save-dev eslint@^10.8.1 typescript-eslint@^8.67.0 @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser @isyfact/eslint-plugin
```

Die Konfiguration erfolgt dann in der `eslint.config.js` (Flat Config) anstelle einer `.eslintrc.json` und muss dann noch um das IsyFact-Plugin erweitert werden.
Die Pfade zu den verwendeten TypeScript-Konfigurationen müssen im Consumer über `parserOptions.project` angegeben werden.
Des Weiteren wurde ein zweites Profil mit ESLint-Regeln angelegt, das für Unit-Tests genutzt werden kann.
Die Datei `test.config.js` beinhaltet das zweite Profil.
Dieses Regelset ist flexibler und nicht so streng wie die Regeln für den Produktivcode.

Beispiel für Angular und TypeScript mit _@isyfact/eslint-plugin_ und Flat Config:

```js
// Angular-spezifische Plugins
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');

// Empfohlene und Test-Konfigurationen aus dem isyfact-Plugin laden
const { configs } = require('@isyfact/eslint-plugin');

module.exports = (async () => {
  const recommended = await configs.recommended();

  return [
    // Globale Ausschlüsse
    { ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'] },

    // IsyFact-Regeln nur auf TypeScript-Dateien anwenden
    ...recommended,

    // Projekt-TS-Regeln
    {
      files: ['**/*.ts'],
      languageOptions: {
        parserOptions: {
          // Passe diese Liste an die tsconfig-Pfade an
          project: [
            'apps/*/tsconfig.app.json',
            'apps/*/tsconfig.spec.json',
            'libs/*/tsconfig.lib.json',
            'libs/*/tsconfig.spec.json',
          ],
          tsconfigRootDir: __dirname,
        },
      },
      plugins: { '@angular-eslint': angular },
      rules: {
        ...angular.configs.recommended.rules,
        // Passe Prefix/Style an das Projekt an:
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'app', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'app', style: 'kebab-case' },
        ],
      },
    },

    // HTML-Template-Regeln
    {
      files: ['**/*.html'],
      languageOptions: { parser: angularTemplateParser },
      plugins: { '@angular-eslint/template': angularTemplate },
      rules: {
        ...angularTemplate.configs.recommended.rules,
      },
    },

    // Inline-Templates in Component-Dateien
    {
      files: ['**/*.component.ts'],
      plugins: {
        '@angular-eslint': angular,
        '@angular-eslint/template': angularTemplate,
      },
      processor: angularTemplate.processors['extract-inline-html'],
    },

    // Optionale Test-Regeln aus isyfact
    ...configs.test,
  ];
})();
```

### Weiterführende Anleitungen zur Installation:

Installation von ESLint-TypeScript:
https://www.npmjs.com/package/typescript-eslint

Getting Started mit ESLint-TypeScript:
https://github.com/typescript-eslint/typescript-eslint/blob/main/README.md

Angular spezifische Regeln für ESLint:
https://github.com/angular-eslint/angular-eslint

## Konfiguration des @isyfact/eslint-plugin

Die IsyFact verwendet als Basis die typgeprüfte `recommendedTypeChecked`-Konfiguration von [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) und leitet dann unterschiedliche Konfigurationen daraus ab.

### recommended

Diese Konfiguration enthält eine Liste von Regeln, die von der IsyFact bei der Entwicklung mit TypeScript empfohlen wird.

:wrench: = fixable, 💬 = benötigt Typinformationen

| Name                                                                                                                                   | Beschreibung                                                                                                                                       | :wrench: | 💬 |
|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|----------|----|
| [@typescript-eslint/ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)                                                 | Verbietet den Einsatz von @ts-<directive> Kommentaren, um den Compiler zu umgehen                                                                   |          |    |
| [@typescript-eslint/only-throw-error](https://typescript-eslint.io/rules/only-throw-error)                                             | Verbietet das Werfen von Nicht-Error-Werten als Exception                                                                                                  |          |    |
| [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)                       | Erlaubt Typ-Definitionen nur über Interfaces                                                                                                       | :wrench: |    |
| [@typescript-eslint/default-param-last](https://typescript-eslint.io/rules/default-param-last)                                         | Default Parameter müssen am Ende deklariert werden                                                                                                 |          |    |
| [@typescript-eslint/dot-notation](https://typescript-eslint.io/rules/dot-notation)                                                     | Erzwingt die Verwendung der Punktnotation (wo es sinnvoll ist)                                                                                     | :wrench: | 💬 |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)                   | Erfordert explizite Rückgabewerte für Funktionen und Methoden in Klassen                                                                           |          |    |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)                   | Erfordert explizite Zugriffsmodifikatoren für Klassenvariablen und -methoden                                                                       | :wrench: |    |
| [@typescript-eslint/no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)                                   | Verbietet Duplikate als Klassenattribute                                                                                                           |          |    |
| [@typescript-eslint/no-loop-func](https://typescript-eslint.io/rules/no-loop-func)                                                     | Verbietet Schleifen, die unsichere Referenzen auf Variablen enthalten                                                                              |          |    |
| [@typescript-eslint/no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)                                             | Verbietet die Verwendung von [Magic-Numbers](https://wiki.c2.com/?MagicNumber); Ausnahmen sind Zahlen in Enums, Typen und readonly Klassenattribute |          |    |
| [@typescript-eslint/no-redeclare](https://typescript-eslint.io/rules/no-redeclare)                                                     | Verbietet die Redeklaration von Variablen                                                                                                          |          |    |
| [@typescript-eslint/no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare) | Verbietet unnötige Gleichheitsoperatoren bei Booleans                                                                                              | :wrench: | 💬 |
| [@typescript-eslint/no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)                             | Verbietet unnötige oder unbenutzte Namespaces oder Enums                                                                                           | :wrench: | 💬 |
| [@typescript-eslint/no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)                   | Verbietet die Verwendung des default Types bei der Initialisierung                                                                                 | :wrench: | 💬 |
| [@typescript-eslint/no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)                                   | Verbietet ungenutzte Ausdrücke                                                                                                                     |          |    |
| [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)                                                 | **Deaktiviert:** Verbietet die Verwendung von unbenutzten Variablen                                                                                                   |          |    |
| [@typescript-eslint/no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)                                     | Verbietet die Verwendung von Variablen vor ihrer Deklaration                                                                                       |          |    |
| [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)                                 | Verbietet unbenutzte Konstruktoren                                                                                                                 |          |    |
| [@typescript-eslint/prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)                                                   | Erzwingt die Verwendung einer for-of-Loop, falls diese sinnvoll verwendet werden kann                                                              |          |    |
| [@typescript-eslint/prefer-includes](https://typescript-eslint.io/rules/prefer-includes)                                               | Erzwingt die Verwendung der include Methode anstelle von indexOf                                                                                   | :wrench: | 💬 |
| [@typescript-eslint/prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)                         | Erlaubt nur Literale als Werte für Enums                                                                                                           |          |    |
| [@typescript-eslint/prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)                           | Erzwingt die Verwendung des Nullish-Coalescing-Operators anstelle komplexer Vergleiche                                                             |          | 💬 |
| [@typescript-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)                                   | Erzwingt die Verwendung des Safer-Operators anstelle komplexer Vergleiche                                                                          |          |    |
| [@typescript-eslint/prefer-reduce-type-parameter](https://typescript-eslint.io/rules/prefer-reduce-type-parameter)                     | Erzwingt die Verwendung von Generics anstelle von Casten bei der Array#reduce-Methode                                                              | :wrench: | 💬 |
| [@typescript-eslint/prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)                 | Erzwingt die Verwendung der Methoden String#startsWith und String#endsWith                                                                         | :wrench: | 💬 |
| [@typescript-eslint/promise-function-async](https://typescript-eslint.io/rules/promise-function-async)                                 | Erzwingt die Verwendung des async-Keywords für alle Methoden, die ein Promise zurückgeben                                                          | :wrench: | 💬 |
| [@typescript-eslint/return-await](https://typescript-eslint.io/rules/return-await)                                                     | Erzwingt die konsistente Verwendung des await Befehl vor dem return Befehl                                                                         | :wrench: | 💬 |
| [@typescript-eslint/unbound-method](https://typescript-eslint.io/rules/unbound-method)                                                 | Setzt Option `ignoreStatic` auf `true` um Angular-Validatoren ohne Regelverletzung verwenden zu können                                             |          |    |
