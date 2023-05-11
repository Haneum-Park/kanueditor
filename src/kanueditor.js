"use strict";

function resizerRender() {
	// ? editor content wrapper resizer
	const resizer = document.createElement("div");
	resizer.classList.add("kanu-editor-resizer");

	return resizer;
}

function contentRender() {
	// ? editor content wrapper
	const content = document.createElement("div");
	content.classList.add("kanu-editor-content");

	return content;
}

function toolbarRender() {
	// ? editor toolbar wrapper
	const toolbar = document.createElement("div");
	toolbar.classList.add("kanu-editor-toolbar");

	// ? toolbar button wrapper
	// TODO bold, italic, underline, strike
	const btnGroup = document.createElement("div");
	btnGroup.classList.add("kanu-editor-toolbar-btngroup");
	const btnBold = document.createElement("button");
	btnBold.type = "button";
	btnBold.id = "font-bold";
	btnBold.classList.add("toolbar-font-bold");
	btnBold.textContent = "B";
	const btnItalic = document.createElement("button");
	btnItalic.type = "button";
	btnItalic.id = "font-italic";
	btnItalic.classList.add("toolbar-font-italic");
	btnItalic.textContent = "I";
	const btnUnderline = document.createElement("button");
	btnUnderline.type = "button";
	btnUnderline.id = "font-underline";
	btnUnderline.classList.add("toolbar-font-underline");
	btnUnderline.textContent = "U";
	const btnStrike = document.createElement("button");
	btnStrike.type = "button";
	btnStrike.id = "font-strike";
	btnStrike.classList.add("toolbar-font-strike");
	btnStrike.textContent = "S";

	// TODO align-left, align-center, align-right, align-justify
	// TODO link, image, video
	// TODO table, code, quote
	// TODO ordered-list, unordered-list, horizontal-rule
	// TODO undo, redo, clean

	btnGroup.appendChild(btnBold);
	btnGroup.appendChild(btnItalic);
	btnGroup.appendChild(btnUnderline);
	btnGroup.appendChild(btnStrike);

	toolbar.appendChild(btnGroup);

	return toolbar;
}

function render() {
	// ? editor wrapper
	const editor = document.createElement("div");
	editor.classList.add("kanu-editor");

	// ? 툴바의 모든 버튼을 삽입 후 삽입
	editor.appendChild(toolbarRender());
	editor.appendChild(contentRender());
	editor.appendChild(resizerRender());

	// ? rendering document
	document.body.appendChild(editor);
}

// ? init 함수 렌더링과 동시에 실행
function init() {
	render();
}

init();
