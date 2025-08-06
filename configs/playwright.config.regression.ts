import {defineConfig} from '@playwright/test'
import {config, timeout} from './global-config'

export default defineConfig({
    testDir: '../tests',
    fullyParallel: true,
    retries: process.env.CI ? 2 : 0,
    testMatch: ['tests/**/*.spec.ts'],
    timeout: 480 * 1000,
    expect: {
        timeout: timeout.expect
    },
    workers: 2,
    reporter: config.pwConfig.reporter,
    use: config.pwConfig.use
})
