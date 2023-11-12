import { rootPath } from "@element-plus/pro-build-utils";
import chalk from "chalk";
import consola from "consola";
import { spawn } from "child_process";

export const run = (command: string, cwd: string = rootPath) => {
    return new Promise<void>((resolve: Function, reject: Function) => {
        consola.info(`run：${chalk.green(command)}`);

        const [cmd, ...args] = command.split(' ');

        const app = spawn(cmd, args, {
            cwd,
            stdio: 'inherit',
            shell: process.platform === 'win32'
        });

        //监听进程退出
        const onProcessExit = () => app.kill('SIGHUP');

        app.on('close', code => {
            process.removeListener('exit', onProcessExit);
            if(code === 0){
                resolve();
            }else{
                reject(new Error(`Command failed. \n Command: ${command} \n Code: ${code}`));
            }
        })

        app.on('exit', onProcessExit);
    })
}