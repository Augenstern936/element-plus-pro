import * as utils from '../utils';
import type { Project } from '@pnpm/find-workspace-packages';

async function main() {
	const pkgs = await utils.getWorkspacePackages();

	// 把数组转为对象，以name作为key
	const pkgsObj = Object.fromEntries(pkgs.map((pkg) => [pkg.manifest.name, pkg]));

	const proComponents = pkgsObj['@element-plus/pro-components'];

	const gitHead = process.env.GIT_HEAD;

	console.log(gitHead, 'gitHead');

	const writeVersion = async (project: Project) => {
		await project.writeProjectManifest({
			...project.manifest,
			version: project.manifest.version + '-test-01',
		});
	};

	try {
		await writeVersion(proComponents);
	} catch (err) {}
}

main();
