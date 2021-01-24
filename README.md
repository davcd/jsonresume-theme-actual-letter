# Actual letter theme for JSON Resume

Hacky theme for creating minimalist and modern cover letters using [JSON Resume](https://jsonresume.org/) standard.

- [Export examples](docs/letter.pdf)

If you are looking for a complete resume theme, maybe you would like to take a look at [jsonresume-theme-actual](https://github.com/davcd/jsonresume-theme-actual).

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Prerequisites](#prerequisites)
- [Export letter](#export-letter)
- [Contribute](#contribute)
- [Support](#support)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Prerequisites

- [node.js](https://nodejs.org/en/) runtime with [resume-cli](https://github.com/jsonresume/resume-cli/)

```bash
npm install -g resume-cli
```

## Export letter

- Create your [resume.json](https://jsonresume.org/schema/) file (you can start by editing [this](/resume.json))
- Create your [cover-letter.md](/cover-letter.md) (optional)

> You can inform the body of your letter by adding the `resume.basics.coverLetter` to your `resume.json` file, or by creating a file `cover-letter.md` file


```bash
npm install jsonresume-theme-actual-letter

resume export letter.pdf --format pdf --theme actual-letter
resume export letter.html --format html --theme actual-letter
```

## Contribute

```bash
git clone git@github.com:davcd/jsonresume-theme-actual-letter.git
cd jsonresume-theme-actual-letter

npm install

gulp
```

You can live edit any .scss or .pug file

## Support

### `resume.basics`

This theme supports only the `resume.basics` JSON path

```json
{
  "basics": {
    "name": "Richard Hendriks",
    "email": "rhendriks@mail.com",
    "phone": "(912) 555-4321",
    "coverLetter": "Dear Robert C. Martin, I want to express my interest in the open position...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    }
  }
}
```

- `resume.basics.coverLetter` supports markdown

### `cover-letter.md` file

If `resume.basics.coverLetter` JSON path is missing, this theme will look for a `cover-letter.md` file to retrieve the body of the letter
