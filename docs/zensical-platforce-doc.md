<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 20.0px 'Helvetica Neue'"><b>Migrering fra MkDocs til Zensical</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 16.0px"><b></b><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Mål</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Målet er å flytte dokumentasjon fra MkDocs til Zensical.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Resultat fra testen</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Følgende fungerer i Zensical:</p>
<ul style="list-style-type: disc">
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Zensical starter.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Utseendet fungerer.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Navigasjonen fungerer.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Søk fungerer.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Markdown-innhold fungerer.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Ekstra CSS og JavaScript fungerer.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Markdown-utvidelser fungerer.<br>
<br>
</li>
</ul>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Følgende fungerer ikke:</p>
<ul style="list-style-type: disc">
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">GitHub-datoer vises ikke fordi git-revision-date-localized ikke fungerer i Zensical.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">To interne lenker gir advarsel fordi filene ikke finnes på de angitte plasseringene:</li>
<ul style="list-style-type: disc">
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">How-to Guides/Fetch Scratch Org from pool/SFP CLI installed locally</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Development Environment/Install java JDK</li>
</ul>
</ul>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Disse to lenkene fungerer heller ikke i MkDocs og er derfor ikke et Zensical-spesifikt problem.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Tabell 1</b></p>

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

<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'"><br>
</p>

<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Tabell 2</b></p>

Funksjon | Tidligere løsning | Ny løsning
-- | -- | --
GitHub-datoer | git-revision-date-localized | egen løsning for GitHub-datoer
Ugyldige interne lenker | Feil filbane eller filnavn | Oppdatere lenkene til riktig plassering
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Problem 1: GitHub-datoer</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Pluginen <span style="font: 12.0px 'Helvetica Neue'">git-revision-date-localized</span> fungerer ikke i Zensical. Derfor vises ikke GitHub-datoene.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Løsning?</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Etter build kan vi kjøre:</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">zensical build --clean --strict</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">prodockit update-dates</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'"><span style="font: 12.0px 'Helvetica Neue'">prodockit update-dates</span> fyller inn datoer fra placeholders i dokumentene. Dette må testes i vårt eget build-oppsett.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">I tillegg kan <span style="font: 12.0px 'Helvetica Neue'">revision_date</span> brukes til å fastsette en bestemt dato manuelt, slik at den viste datoen ikke endres når filen oppdateres.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Kilde: <a href="https://prodockit.org/update-dates/"><span style="text-decoration: underline">https://prodockit.org/update-dates/&nbsp;</span></a></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Problem 2: Ugyldige interne lenker</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Zensical rapporterer to lenker som peker til filer som ikke finnes:</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">how-to-guides/dev-environment/index.md:13</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">Install java JDK</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">how-to-guides/getOrgFromScratchPool.md:4</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px '.AppleSystemUIFontMonospaced'">SFP CLI installed locally</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Løsning?</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Kontroller at filene finnes, og oppdater lenkene med riktig relativ filbane og filnavn. Siden lenkene heller ikke fungerer i MkDocs, må dette rettes i selve dokumentasjonen og ikke i Zensical-konfigurasjonen.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<p style="margin: 0.0px 0.0px 2.0px 0.0px; font: 16.0px 'Helvetica Neue'"><b>Konklusjon</b></p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Om Zensical brukes videre.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Vi beholder Tabell 1.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Vi erstatter Tabell 2:</p>
<ul style="list-style-type: disc">
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">git-revision-date-localized med prodockit update-dates.</li>
<li style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Feil interne lenker med riktige relative filbaner.<br>
</li>
</ul>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'">Denne dokumentasjonsgruppen bruker ikke <span style="font: 12.0px 'Helvetica Neue'">multirepo</span>, og det er derfor ikke nødvendig å lage en løsning for eksterne repositorier her.</p>
<p style="margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px 'Helvetica Neue'; min-height: 15.0px"><br></p>
<br class="Apple-interchange-newline">Migrering fra MkDocs til Zensical

Mål
Målet er å flytte dokumentasjon fra MkDocs til Zensical.

Resultat fra testen
Følgende fungerer i Zensical:
* Zensical starter.
* Utseendet fungerer.
* Navigasjonen fungerer.
* Søk fungerer.
* Markdown-innhold fungerer.
* Ekstra CSS og JavaScript fungerer.
* Markdown-utvidelser fungerer.  
Følgende fungerer ikke:
* GitHub-datoer vises ikke fordi git-revision-date-localized ikke fungerer i Zensical.
* To interne lenker gir advarsel fordi filene ikke finnes på de angitte plasseringene:
    * How-to Guides/Fetch Scratch Org from pool/SFP CLI installed locally
    * Development Environment/Install java JDK
Disse to lenkene fungerer heller ikke i MkDocs og er derfor ikke et Zensical-spesifikt problem.

Tabell 1
Funksjon	Plugin / løsning
Navigasjon	awesome-nav
Søk	Zensical innebygd søk
Tema og utseende	Material-tema / Zensical theme
Ekstra CSS	extra_css
Ekstra JavaScript	extra_javascript
Markdown-utvidelser	pymdownx og støttede Markdown extensions
Kodeblokker	pymdownx.highlight
Mermaid-diagrammer	pymdownx.superfences
Faner	pymdownx.tabbed
Admonitions	admonition
Oppgavelister	pymdownx.tasklist
Detaljseksjoner	pymdownx.details
Emoji	pymdownx.emoji
 
Tabell 2
Funksjon	Tidligere løsning	Ny løsning
GitHub-datoer	git-revision-date-localized	prodockit update-dates
Ugyldige interne lenker	Feil filbane eller filnavn	Oppdatere lenkene til riktig plassering

Problem 1: GitHub-datoer
Pluginen git-revision-date-localized fungerer ikke i Zensical. Derfor vises ikke GitHub-datoene.

Løsning?
Etter build kan vi kjøre:

zensical build --clean --strict
prodockit update-dates

prodockit update-dates fyller inn datoer fra placeholders i dokumentene. Dette må testes i vårt eget build-oppsett.
I tillegg kan revision_date brukes til å fastsette en bestemt dato manuelt, slik at den viste datoen ikke endres når filen oppdateres.
Kilde: [https://prodockit.org/update-dates/ ](https://prodockit.org/update-dates/)

Problem 2: Ugyldige interne lenker
Zensical rapporterer to lenker som peker til filer som ikke finnes:

how-to-guides/dev-environment/index.md:13
Install java JDK

how-to-guides/getOrgFromScratchPool.md:4
SFP CLI installed locally

Løsning?
Kontroller at filene finnes, og oppdater lenkene med riktig relativ filbane og filnavn. Siden lenkene heller ikke fungerer i MkDocs, må dette rettes i selve dokumentasjonen og ikke i Zensical-konfigurasjonen.

Konklusjon
Om Zensical brukes videre.
Vi beholder Tabell 1.
Vi erstatter Tabell 2:
* git-revision-date-localized med prodockit update-dates.
* Feil interne lenker med riktige relative filbaner. 
Denne dokumentasjonsgruppen bruker ikke multirepo, og det er derfor ikke nødvendig å lage en løsning for eksterne repositorier her.