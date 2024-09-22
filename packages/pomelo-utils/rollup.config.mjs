import typescript from '@rollup/plugin-typescript';


export default {
	input: 'src/index.ts',
	output: [{
		file: 'dist/index.cjs.js',
		format: 'cjs',
		sourcemap: true
	}, {
		file: 'dist/index.esm.js',
		format: 'es',
		sourcemap: true
	}, {
		file: 'dist/index.umd.js',
		format: 'umd',
		sourcemap: true,
		name: 'pTree'
	}],
    plugins: [typescript()]
};