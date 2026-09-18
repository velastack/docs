import { describe, expect, it } from 'vitest';
import { findFrontmatterEnd, findScriptOpenEnd } from './mdsvex-i18n.js';

describe('findScriptOpenEnd', () => {
	it("finds the page's own script tag", () => {
		const code = `<script lang="ts">\n\tlet x = 1;\n</script>\n\nProse.\n`;
		expect(code.slice(0, findScriptOpenEnd(code))).toBe('<script lang="ts">');
	});

	it('ignores a script tag inside a fenced code block', () => {
		const code = [
			'<!-- @en -->',
			'Wrap copy in the components:',
			'',
			'```svelte',
			'<script lang="ts">',
			"\timport { CmsText } from '@velastack/cms';",
			'</script>',
			'',
			'<CmsText name="hero.title" />',
			'```',
			'<!-- @end -->',
			''
		].join('\n');
		expect(findScriptOpenEnd(code)).toBe(-1);
	});

	it('still finds a real script tag after a fence has closed', () => {
		const code = [
			'```html',
			'<script></script>',
			'```',
			'',
			'<script>',
			'let y;',
			'</script>',
			''
		].join('\n');
		expect(code.slice(0, findScriptOpenEnd(code))).toBe(
			['```html', '<script></script>', '```', '', '<script>'].join('\n')
		);
	});

	it('returns -1 when there is no script tag at all', () => {
		expect(findScriptOpenEnd('Just prose.\n')).toBe(-1);
	});
});

describe('findFrontmatterEnd', () => {
	it('finds the end of frontmatter at the top of the file', () => {
		const code = `---\ntitle: Analytics\n---\n\nProse.\n`;
		expect(code.slice(0, findFrontmatterEnd(code))).toBe('---\ntitle: Analytics\n---');
	});

	it("ignores a table's delimiter row on a page without frontmatter", () => {
		const code = [
			'<!-- @en -->',
			'| Variable | Description |',
			'| --- | --- |',
			'| `PUBLIC_KEY` | The key. |',
			'<!-- @end -->',
			''
		].join('\n');
		expect(findFrontmatterEnd(code)).toBe(-1);
	});

	it('ignores a thematic break further down the page', () => {
		expect(findFrontmatterEnd('Prose.\n\n---\n\nMore.\n\n---\n')).toBe(-1);
	});
});
