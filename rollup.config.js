import buble from 'rollup-plugin-buble';
import fileSize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
	{
		input: 'src/mcsub.js',
		output: {
			name: 'Mcsub',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			buble(),
			uglify(),
			fileSize()
		]
	}
];
