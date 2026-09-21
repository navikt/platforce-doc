# Migrering fra MkDocs til Zensical
## Mål
Målet er å flytte dokumentasjon fra MkDocs til Zensical.

### Resultat fra testen
Følgende fungerer i Zensical:
- Zensical starter.
- Utseendet fungerer.
- Navigasjonen fungerer.
- Søk fungerer.
- Markdown-innhold fungerer.
- Ekstra CSS og JavaScript fungerer.
- Markdown-utvidelser fungerer.

Følgende fungerer ikke:
- GitHub datoer vises ikke fordi git-revision-date-localized ikke fungerer i Zensical.
- To interne lenker gir advarsel fordi filene ikke finnes på de angitte plasseringene:

How-to Guides/Fetch Scratch Org from pool/SFP CLI installed locally

Development Environment/Install java JDK

Disse to lenkene fungerer heller ikke i MkDocs og er derfor ikke et Zensical spesifikt problem.

Funksjon | Plugin / løsning
-- | --
Navigasjon | awesome-nav
Søk | Zensical innebygd søk
Tema og utseende | Material-tema / Zensical theme
Ekstra CSS | extra_css
Ekstra JavaScript | extra_javascript
Markdown-utvidelser | pymdownx og støttede Markdown extensions
Kodeblokker | pymdownx.highlight
Mermaid-diagrammer | pymdownx.superfences
Faner | pymdownx.tabbed
Admonitions | admonition
Oppgavelister | pymdownx.tasklist
Detaljseksjoner | pymdownx.details
Emoji | pymdownx.emoji

Funksjon | Tidligere løsning | Ny løsning
-- | -- | --
GitHub-datoer | git-revision-date-localized | egen løsning for GitHub-datoer
Ugyldige interne lenker | Feil filbane eller filnavn | Oppdatere lenkene til riktig plassering

 ### Problem 1: GitHub datoer

Pluginen fungerer ikke i Zensical. Derfor vises ikke GitHub datoene.

### Løsning?
Etter build kan vi kjøre:

zensical build --clean --strict

prodockit update-dates

prodockit update-dates fyller inn datoer fra placeholders i dokumentene. Dette må testes i vårt eget build oppsett.
I tillegg kan revision_date brukes til å fastsette en bestemt dato manuelt, slik at den viste datoen ikke endres når filen oppdateres.

Kilde: https://prodockit.org/update-dates/&nbsp;

### Problem 2: Ugyldige interne lenker

Zensical rapporterer to lenker som peker til filer som ikke finnes:

- how-to-guides/dev-environment/index.md:13

Install java JDK

- how-to-guides/getOrgFromScratchPool.md:4

SFP CLI installed locally

### Løsning?

Kontroller at filene finnes, og oppdater lenkene med riktig relativ filbane og filnavn. Siden lenkene heller ikke fungerer i MkDocs, må dette rettes i selve dokumentasjonen og ikke i Zensical-konfigurasjonen.

### Konklusjon

Om Zensical brukes videre:

- Vi beholder Tabell 1.

- Vi erstatter Tabell 2:

git-revision-date-localized med prodockit update-dates.

Feil interne lenker med riktige relative filbaner.
