
            import * as _w_c_main_0_ from './main.main.en.compiled.js'
import * as _w_c_main_1_ from './main.main.es.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {main: {en: _w_c_main_0_,es: _w_c_main_1_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['main']
        