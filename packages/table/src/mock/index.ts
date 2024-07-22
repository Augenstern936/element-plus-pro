/*
 * @Description:
 * @Date: 2024-07-17 09:47:00
 * @LastEditTime: 2024-07-18 15:15:16
 */

import { setupWorker } from 'msw/browser';
import { service } from './service';

export const server = setupWorker(...service);

server.start();
server.use(...service);

const cli = {
	playwright: '6,164,512',
	cypress: '5,371,088',
};
