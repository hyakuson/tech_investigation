// see https://gist.github.com/sys9kdr/477d4c44b51c722331951c3f4b0b0c13
// main.js
// npm install puppeteer
const pptr = require('puppeteer');

async function run(){
    // �u���E�U���N������
    const browser = await pptr.launch({
        args: ['--lang=ja,en-US,en'] // �f�t�H���g�ł͌���ݒ肪�p��Ȃ̂œ��{��ɕύX
    })

    // �y�[�W����
    const page = await browser.newPage()

    // �T�C�Y���߂�
    await page.setViewport({ width: 720, height: 600 })

    // Chrome�̊J���Ҍ�������Web�T�C�g�Ɉړ�
    await page.goto('https://developer.chrome.com/home/platform-pillar')

    // �y�[�W�^�C�g���擾
    console.log(await page.title())

    // �X�N���[���V���b�g������Ⴄ
    await page.screenshot({path: 'sample1.png', fullPage: true})

    // �y�[�W�J�ڂ��ăX�N���[���V���b�g���
    await page.click('article a:not([href^=http])') // �Z���N�^�w�肵�ăN���b�N�����Ɗy
    await page.screenshot({path: 'sample2.png', fullPage: true})

    // �I��
    await browser.close()
}

run() //node main.js�Ŏ��s