# Opgaveliste-app (iteration 2)

En opgaveliste (to-do liste) bygget i React Native med Expo, som del af den
obligatoriske opgave 2 (Stakeholders og kode) på INNT. Appen bygger videre på
versionen fra obligatorisk opgave 1.

Udviklet individuelt af Emil Johan Fredrick Guntofte (S179848).

## Demovideo
Link her: INDSÆT LINK TIL DEMOVIDEO

## Hvad er nyt i iteration 2?
Ændringerne bygger på interviewene fra første iteration:
- **Swipe-to-delete:** Begge brugere prøvede at swipe opgaver væk. Nu kan man swipe en opgave til venstre for at slette den.
- **Kategorier:** Bertram ville gerne holde skole og fritid adskilt. Opgaver kan nu have en kategori, og der er en ny fane med kategorier.
- **Søgning:** Bertram efterspurgte en søgefunktion. Der er nu et søgefelt i opgavelisten.
- **Mere feedback:** Appen viser nu, hvor mange opgaver man har fuldført, spørger før man sletter, og giver besked, hvis titlen mangler.
- **Datalagring:** Opgaver og kategorier gemmes med AsyncStorage, så de er der stadig, når appen lukkes.

## Struktur
```
App.js                     Bundmenu (bottom tabs)
context/TaskContext.js     Delt state + gemning/hentning med AsyncStorage
data/const.js              Standard-opgaver og -kategorier appen starter med
components/                Genbrugelige komponenter (knap, tekstfelt, listeelement)
                           + TaskStackComponent.js og CategoryStackComponent.js (stack-navigation)
screens/                   De 6 screens i appen
styles/GlobalStyle.js      Al styling samlet ét sted
```

### Screens
1. **Opgaveliste** – liste over opgaver med søgefelt
2. **Tilføj opgave** – formular med titel og kategori
3. **Opgavedetaljer** – detaljevisning af én opgave
4. **Indstillinger** – app-info + ryd fuldførte opgaver
5. **Kategorier** (ny) – oversigt over kategorier og oprettelse af nye
6. **Kategori** (ny) – opgaverne i én kategori

### Navigation
- Bundmenu med tre faner: Opgaver, Kategorier og Indstillinger
- Stack under "Opgaver": Opgaveliste → Tilføj opgave / Opgavedetaljer
- Stack under "Kategorier": Kategorioversigt → Kategori → Tilføj opgave / Opgavedetaljer

### Nye knapper i iteration 2
- "Tilføj kategori" → opretter en ny kategori
- "+ Tilføj opgave i kategorien" → åbner formularen med kategorien valgt
- "Slet" (kommer frem ved swipe) → sletter opgaven

### Datalagring
Opgaver og kategorier gemmes som JSON med `@react-native-async-storage/async-storage`.
De hentes, når appen starter, og gemmes, hver gang de ændrer sig.

## Kom i gang
```bash
npm install
npx expo install @react-native-async-storage/async-storage
npx expo start
```
Scan QR-koden med Expo Go-appen på din telefon.
