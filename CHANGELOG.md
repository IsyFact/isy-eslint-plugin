# @isyfact/eslint-plugin

## 5.0.0

### Breaking Changes
- IFS-5736: Update auf ESLint 10.
    - ESLint 10 wird vorausgesetzt.
    - Die unterstützten Node.js-Versionen wurden an die Anforderungen von ESLint 10 angepasst.
    - Consumer müssen `eslint` und `typescript-eslint` als Entwicklungsabhängigkeiten installieren.
    - In der `eslint.config.js` des Consumers sind der direkte Import von `@typescript-eslint/parser` und die explizite Angabe `languageOptions.parser` nicht mehr erforderlich.
    - Bestehende Angaben unter `parserOptions.project` und `parserOptions.tsconfigRootDir` müssen weiterhin beibehalten werden.
    - Die TypeScript-Konfiguration verwendet jetzt `typescript-eslint` und dessen typgeprüfte Standardkonfiguration `recommendedTypeChecked`.


## 4.1.0

### Features
- keine

### Breaking Changes
- IFS-4608: @stylistic/eslint-plugin wurde entfernt.
    - Die Formatierung erfolgt nicht mehr über das @isyfact/eslint-plugin. Um weiterhin eine einheitlich Formatierung zu gewährleisten, kann das [@isyfact/prettier-plugin](https://isyfact.github.io/isyfact-standards-doku/current/werkzeuge/formatter.html) eingebunden werden.

