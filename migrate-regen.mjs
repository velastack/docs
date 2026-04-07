import fs from 'fs';
import path from 'path';

const BASE = 'src/routes/(public)';
const SKIP = ['[...path]', 'dev'];

function parseFrontmatter(raw) {
	const match = raw.match(/^---\n([\s\S]*?)\n---/);
	if (!match) return { rest: raw };
	return { rest: raw.slice(match[0].length).replace(/^\n+/, '') };
}

function extractScript(content) {
	const match = content.match(/^(<script[^>]*>[\s\S]*?<\/script>)\n*/);
	if (!match) return { script: '', body: content };
	return { script: match[1], body: content.slice(match[0].length) };
}

function buildPageSvx(enBody, esBody, scriptBlock) {
	const parts = [];

	if (scriptBlock) {
		parts.push(scriptBlock);
		parts.push('');
	}

	parts.push('<!-- @en -->');
	parts.push(enBody.trim());
	parts.push('<!-- @es -->');
	parts.push(esBody.trim());
	parts.push('<!-- @end -->');
	parts.push('');

	return parts.join('\n');
}

function findDirs(dir) {
	const results = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		if (SKIP.includes(entry.name)) continue;
		const full = path.join(dir, entry.name);
		results.push(full);
		results.push(...findDirs(full));
	}
	return results;
}

const dirs = [BASE, ...findDirs(BASE)];
let migrated = 0;
const toDelete = [];

for (const dir of dirs) {
	const enPath = path.join(dir, 'en.svx');
	const esPath = path.join(dir, 'es.svx');

	if (!fs.existsSync(enPath) || !fs.existsSync(esPath)) continue;

	const enRaw = fs.readFileSync(enPath, 'utf-8');
	const esRaw = fs.readFileSync(esPath, 'utf-8');

	const enParsed = parseFrontmatter(enRaw);
	const esParsed = parseFrontmatter(esRaw);

	const enExtracted = extractScript(enParsed.rest);
	const esExtracted = extractScript(esParsed.rest);

	const scriptBlock = enExtracted.script || esExtracted.script;

	const pageSvx = buildPageSvx(enExtracted.body, esExtracted.body, scriptBlock);

	const svxPath = path.join(dir, '+page.svx');
	fs.writeFileSync(svxPath, pageSvx);

	toDelete.push(enPath, esPath);
	migrated++;
}

for (const f of toDelete) {
	fs.unlinkSync(f);
}

console.log(`Regenerated ${migrated} +page.svx files, deleted ${toDelete.length} old files`);
