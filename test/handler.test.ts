import { router } from "../src/router";
import makeServiceWorkerEnv from 'service-worker-mock';

declare var global: any;

describe('handle', () => {
    beforeEach(() => {
        Object.assign(global, makeServiceWorkerEnv());
        jest.resetModules();
    });

    test('handle shorten POST', async () => {
        const result = await router.handle(new Request('/api/shorten', { method: 'POST' }));
        expect(result.status).toEqual(200);
        const text = await result.text();
        expect(text).toEqual('shorten your url! :^)');
    });
});
