const pug = require("pug");
const helper = require('./assets/helper');
const fs = require('fs')

const render = (resume) => pug.renderFile(__dirname + "/assets/template.pug", {
    resume: mergeResume(resume),
    helper
})


const mergeResume = (resume) => {
    if (!resume.coverLetter && fs.existsSync(process.cwd() + '/cover-letter.md')) {
        const coverLetter = fs.readFileSync(process.cwd() + '/cover-letter.md', 'utf-8')
        resume.basics.coverLetter = coverLetter.toString()
    }
    return resume
}

const pdfRenderOptions = {}

module.exports = {
    render,
    pdfRenderOptions,
    mergeResume
};
