// see https://gist.github.com/sys9kdr/477d4c44b51c722331951c3f4b0b0c13
// main.js
// npm install puppeteer
const pptr = require('puppeteer');

async function run(){
    // ブラウザを起動する
    const browser = await pptr.launch({
        args: ['--lang=ja,en-US,en'] // デフォルトでは言語設定が英語なので日本語に変更
    })

    // ページつくる
    const page = await browser.newPage()

    // サイズ決める
    await page.setViewport({ width: 720, height: 600 })

    // Chromeの開発者向け資料Webサイトに移動
    await page.goto('https://developer.chrome.com/home/platform-pillar')

    // ページタイトル取得
    console.log(await page.title())

    // スクリーンショット取っちゃう
    await page.screenshot({path: 'sample1.png', fullPage: true})

    // ページ遷移してスクリーンショット取る
    await page.click('article a:not([href^=http])') // セレクタ指定してクリックだけと楽
    await page.screenshot({path: 'sample2.png', fullPage: true})

    // 終了
    await browser.close()
}

run() //node main.jsで実行