# 1.2.0 - 13.08.2024

## Features

- Anhebung von Package Versionen 
  * @typescript-eslint/parser@8
  * @typescript-eslint/eslint-plugin@8 
  * eslint@9 
  * @stylistic/eslint-plugin-ts@2

## Breaking Changes

### Konfigurationen _recommended_ und _test_
- Migration von der Regel `@typescript-eslint/no-throw-literal` auf `@typescript-eslint/only-throw-error`
- Migration von Code-Style Regeln von `eslint` nach `@stylistic/ts`
- Ersetzen der Deprecated Regel `@typescript-eslint/no-loss-of-precision` durch `eslint/no-loss-of-precision`
- Ersetzen der Deprecated Regel `@typescript-eslint/prefer-ts-expect-error` durch `@typescript-eslint/ban-ts-comment`

# 1.4.1 - 09.11.2023

## Fixes

- Die Regel `@typescript-eslint/unbound-method` ist für das Testprofil jetzt wieder deaktiviert

# 1.4.0 - 07.11.2023

## Features

- Die ECMAScript Version wurde von 2020 auf 2022 angehoben
- Die Regel `@typescript-eslint/unbound-method` verwendet jetzt standardmäßig die Option `ignoreStatic=true` um Angular Validatoren ohne Regelverletzung verwenden zu können

# 1.3.0 - 20.10.2023

## Features

- Hinzufügen von Leerzeichen vor den Klammern einer Methode ist nun möglich, da sonst die Regel `@typescript-eslint/space-before-function-paren` einen Konflikt mit Prettier Code-Formatierungsregeln aufweist

# 1.2.0

## Features

- Bereitstellung eines zusätzlichen Regelsatzes mit weniger scharfen Regeln für Testfälle

# 1.1.0 - 15.02.2022

## Features

- Die Regel `no-magic-numbers` erlaubt die Zuweisung der Zahlen 0 und 1

# 1.0.0

## Features

- IFE-165: Provide eslint configuration containing recommended rules for IsyFact TypeScript or Angular projects
