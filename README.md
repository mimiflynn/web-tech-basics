# Web Technology Basics

## Purpose

Briefly explain web technologies so designers can have a better understanding of technical constraints and possibilities.

Slideshow created using [reveal.js](https://github.com/hakimel/reveal.js/).

To run the slideshow:

```
npm install
grunt serve
```

## To Do

- basic sample code
- explanation of box model
- create show / hide component
- peer review

## Sample Code

The sample code is organized according to presentaion steps and linked to in the index.html.

- dashed line boxes to indication boundaries
- illustrate padding and margin and border and how it impacts spacing and box size

## Code Sample Notes

### Sample 1

- Show plain header and paragraph
- Add button
  - Show button with no finger pointer
  - add `cursor: pointer` with css
- Describe reason for show hide functionality... something about 'above the fold people dont read wall of text'
  - add hide class
  - add `max-height`
  - add `overflow: hidden`
  - add show class
  - add `max-height`
- Create logic for interaction with JS
  - Add ID to paragraph


### Sample 2

- Explain need for more paragraphs and images to be hidden instead of just one paragraph
    - add new `div` wrapper around existing paragraph
    - move `id` and `class` to the new wrapper `div`

### Sample 3

- Explain the use of tag names as CSS selectors
  - add `html` selector with `font-family: sans-serif`
  - add `section` selector with `width: 800px` and `margin: 0 auto`




Start with show more module constrained to the paragraph tag and refactor to a div to illustrate content grouping and box model / content type difference / issues.

## Research and References

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction



