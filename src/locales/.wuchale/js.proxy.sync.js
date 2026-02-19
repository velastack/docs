
            import * as _w_c_js_0_ from './main.main.en.compiled.js'
import * as _w_c_js_1_ from './main.main.es.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {en: _w_c_js_0_,es: _w_c_js_1_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['js']
        