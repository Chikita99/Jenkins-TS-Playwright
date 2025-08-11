import {PlaywrightTestConfig} from '@playwright/test'
import {defineConfig} from '@playwright/test'
export const timeout = {
    action: 20000,
    navigation: 20000,
    expect: 10000
}


interface GConfig {
    pwConfig: PlaywrightTestConfig
}


const pwConfig = defineConfig({
    use: {
        //viewport: {height: 1080, width: 1920},
        headless: true,
        baseURL: "https://automationexercise.com",
        browserName: 'chromium',
        launchOptions: {
            args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']
        },
        contextOptions: {
            ignoreHTTPSErrors: true,
            acceptDownloads: true,
            timezoneId: 'UTC'
        },
        actionTimeout: timeout.action,
        screenshot: 'only-on-failure',
        navigationTimeout: timeout.navigation
    },
    reporter: [
        ['allure-playwright', { outputFolder: 'allure-results' }],
        ['line'],
        ['dot']
    ]
})


export const config: GConfig = {
    pwConfig: pwConfig
}