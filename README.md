# Web Technology Basics

## Purpose

Briefly explain web technologies so designers can have a better understanding of technical constraints and possibilities.

Slideshow created using [reveal.js](https://github.com/hakimel/reveal.js/).

To run the slideshow:

```
npm install
grunt serve
```

## Sample Code

The sample code is organized according to presentation steps and linked to in the index.html.

- dashed line boxes to indication boundaries
- illustrate padding and margin and border and how it impacts spacing and box size

## Code Sample Notes

### Sample 1

- Show plain header and paragraph
- Talk through the HTML and what it means in the browser
- Add button code
  - show button with no finger pointer
  - connect css file to header
  - add `cursor: pointer` with css
- Describe reason for show hide functionality... something about 'above the fold people dont read wall of text'
  - add hide class
  - add `max-height`
  - add `overflow: hidden`
  - add show class
  - add `max-height`
- Create logic for interaction with JS
  - add script tag to end of file
  - add `id="show-hide"` to paragraph
  - add `class="hide"` to set initial state
  - explain state a little
  - indicate the state in the JS file and explain how its attached to the `className`
  - talk through the code
  - show in browser that the show hide button is working
  - indicate the `onclick` attribute of the button and how its pointing to the `toggleModule` function
  - open up inspector and compare HTML indicating the `className` of the paragraph
  - click on the button and show how the `className` changed
  - make sure everyone saw it


### Sample 2

- Explain how the 'Show More' button keeps saying show more even when it starts to show less
  - store button element in a variable
  - write function for changing the `textContent` of an element
  - add new function to the appropriate spaces inside the `toggleModule` function
  - show it working in the browser
- Explain need for more paragraphs and images to be hidden instead of just one paragraph
    - add new `div` wrapper around existing paragraph
    - move `id` and `class` to the new wrapper `div`

### Sample 3

- Explain the use of tag names as CSS selectors
  - add `html` selector with `font-family: sans-serif`
  - add `section` selector with `width: 800px` and `margin: 0 auto`
  - add styles to button - perhaps audience suggested styles

## Further Reading

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

