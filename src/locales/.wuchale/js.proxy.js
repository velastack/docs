
            
            /** @typedef {() => Promise<import("wuchale/runtime").CatalogModule>} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {en: () => import('./main.main.en.compiled.js'),es: () => import('./main.main.es.compiled.js')}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])()
            }
            export const loadIDs = ['js']
        