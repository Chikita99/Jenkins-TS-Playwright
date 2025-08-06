import {defineConfig} from '@playwright/test'
import {config, timeout} from './global-config'

export default defineConfig({
    globalSetup: require.resolve('../global-setup'),
    globalTeardown: require.resolve('../global-teardown'),
    testDir: '../specs',
    fullyParallel: true,
    testMatch: ['tests/**/*.spec.ts'],
    timeout: 480 * 1000,
    expect: {
        timeout: timeout.expect
    },
    workers: 2,
    reporter: config.pwConfig.reporter,
    use: config.pwConfig.use
})
