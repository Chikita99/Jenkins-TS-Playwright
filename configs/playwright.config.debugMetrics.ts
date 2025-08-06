import {config, timeout} from './global-config'
import {defineConfig} from '@playwright/test'

export default defineConfig({
    testDir: '../tests',
    fullyParallel: true,
    testMatch: ['tests/main-pages/contactForm.spec.ts'],
    timeout: 480 * 1000,
    expect: {
        timeout: timeout.expect
    },
    workers: 2,
    reporter: config.pwConfig.reporter,
    use: config.pwConfig.use
})
