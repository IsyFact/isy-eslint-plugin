# 1.5.0 - 12.08.2024

## Features

- ESLint-Stylistic wurde hinzugefügt
- PeerDependencies wurden angepasst
- Veraltete TypeScript-Formatierungsregeln wurden durch ESLint-Stylistic-Regeln ersetzt
- Veraltete Erweiterungsregel, die nicht mehr erforderlich sind wurden gelöscht
- package-lock.json wurde entfernt
- Readme wurde angepasst

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
