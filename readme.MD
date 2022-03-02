Vygenerování html a assetů
=

```
gulp (spustí lokální dev, vygeneruje pracovní CSS a JS)
gulp svg (zkomprimuje SVG)
gulp build (z lokální verze udělá produkční)
```

Překopírování do www/assets/
=
```
gulp move:build  - spustí předchozí gulp build a zkopíruje
golp move:files - pouze zkopíruje z dist do www/assets
```

Propojení s backendem
=
```
gulp server:php  - spustí http://localhost:3000
```
