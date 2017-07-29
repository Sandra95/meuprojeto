test('version is pre-release', async t => {
	const message = 'You must specify a dist-tag using --tag when publishing a pre-release version. This prevents accidentally tagging unstable versions as "latest". https://docs.npmjs.com/cli/dist-tag';
	await t.throws(m('premajor'), message);
	await t.throws(m('preminor'), message);
	await t.throws(m('prepatch'), message);
	await t.throws(m('prerelease'), message);
	await t.throws(m('10.0.0-0'), message);
	await t.throws(m('10.0.0-beta'), message);
});