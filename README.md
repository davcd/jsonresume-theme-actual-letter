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

This theme supports only the `resume.basics` JSON path

### `resume.basics`

```json
{
  "basics": {
    "name": "Richard Hendriks",
    "email": "rhendriks@mail.com",
    "phone": "(912) 555-4321",
    "summary": "Dear Robert C. Martin, I want to express my interest in the open position...",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    }
  }
}
```

- `resume.basics.summary` supports markdown and contains the cover letter
