# 4.0.0 - 08.08.2025

## Features

- Umstieg auf ESLint Flat Config
- Migration zu @stylistic/eslint-plugin v5
- Aktualisierung von package.json und package-lock.json
- Exports überarbeitet
- Beispielkonfigurationen für Flat Config in der README ergänzt

## CI/CD
- GitHub Actions Workflow aktualisiert:
  - `actions/checkout@v4` und `actions/setup-node@v4`
  - Node.js Version auf `20.x` angehoben

## Breaking Changes

- Es wird jetzt ausschließlich die Flat Config API verwendet
- `@stylistic/eslint-plugin-ts` wurde entfernt, alle Regel-IDs wurden von `@stylistic/ts/...` zu `@stylistic/...` umbenannt
- Neue Peer-Dependencies
  ```json
  "peerDependencies": {
    "eslint": "^9.33.0",
    "typescript-eslint": "^8.39.0",
    "@typescript-eslint/parser": "^8.39.0",
    "@typescript-eslint/eslint-plugin": "^8.39.0",
    "@stylistic/eslint-plugin": "^5.2.3"
  }
  ```
- Node.js Mindestversion: >=18.18

# 3.0.1 - 07.05.2025

## Fixes

- package.json und package-lock.json wurden aktualisiert

# 3.0.0 - 06.05.2025

## Features

- Anhebung von Package Versionen 
  * `eslint` von `^9.9.0` auf `^9.26.0`
  * `@typescript-eslint/parser` von `^8.0.1` auf `^8.32.0`
  * `@typescript-eslint/eslint-plugin` von `^8.0.1` auf `^8.32.0`

## Breaking Changes
- Peer-Dependency `@stylistic/eslint-plugin-ts` von `^2.6.2` auf `^3.1.0` aktualisiert

# 2.0.0 - 13.08.2024

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
