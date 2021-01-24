const pug = require("pug");
const helper = require('./assets/helper');
const fs = require('fs')
const path = require('path');

const render = (resume) => pug.renderFile(__dirname + "/assets/template.pug", {
    resume: mergeResume(resume),
    helper
})


const mergeResume = (resume) => {
    const folder = resolverFolder()
    if (!resume.coverLetter && fs.existsSync(path.join(folder, 'cover-letter.md'))) {
        const coverLetter = fs.readFileSync(path.join(folder, 'cover-letter.md'), 'utf-8')
        resume.basics.coverLetter = coverLetter.toString()
    }
    return resume
}

const resolverFolder = () => {
    const index = process.argv.indexOf('--resume')
    if (index === -1) {
        return process.cwd()
    } else {
        const resumePath = process.argv[index + 1]
        return path.join(process.cwd(), path.dirname(resumePath))
    }
}

const pdfRenderOptions = {}

module.exports = {
    render,
    pdfRenderOptions,
    mergeResume
};
