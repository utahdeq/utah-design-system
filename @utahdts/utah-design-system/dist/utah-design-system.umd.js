(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@utahdts/utah-design-system-header"), require("react"), require("@floating-ui/react-dom"), require("lodash-es"), require("react/jsx-runtime"), require("use-immer"), require("date-fns"), require("react-dom"), require("uuid")) : typeof define === "function" && define.amd ? define([
		"exports",
		"@utahdts/utah-design-system-header",
		"react",
		"@floating-ui/react-dom",
		"lodash-es",
		"react/jsx-runtime",
		"use-immer",
		"date-fns",
		"react-dom",
		"uuid"
	], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["@utahdts/utah-design-system"] = {}, global["@utahdts/utah-design-system-header"], global.React, global["@floating-ui/react-dom"], global["lodash-es"], global.jsxRuntime, global.useImmer, global.dateFns, global.react_dom, global.uuid));
})(this, function(exports, _utahdts_utah_design_system_header, react, _floating_ui_react_dom, lodash_es, react_jsx_runtime, use_immer, date_fns, react_dom, uuid) {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	react = __toESM(react, 1);
	var package_default = {
		name: "@utahdts/utah-design-system",
		description: "Utah Design System React Library",
		displayName: "Utah Design System React Library",
		version: "5.1.0",
		exports: {
			".": {
				"development-local": "./index.js",
				"development": "./dist/utah-design-system.es.js",
				"production": "./dist/utah-design-system.es.js",
				"import": {
					"types": "./dist/index.d.ts",
					"default": "./dist/utah-design-system.es.js"
				},
				"types": "./dist/index.d.ts",
				"require": "./dist/utah-design-system.umd.js",
				"default": [
					"./dist/utah-design-system.es.js",
					"./dist/utah-design-system.umd.js",
					"./index.js"
				]
			},
			"./css": "./dist/style.css",
			"./dist/*": "./dist/*",
			"./src/css/": "./src/css/",
			"./css/index.scss": "./css/index.scss"
		},
		main: "index.js",
		types: "./dist/index.d.ts",
		files: [
			"css",
			"dist",
			"react"
		],
		scripts: {
			"build": "vite build",
			"buildw": "vite build --watch",
			"buildTypes": "node -e \"const fs=require('fs');fs.mkdirSync('./dist',{recursive:true});fs.copyFileSync('./artifacts/index.d.ts','./dist/index.d.ts')\"",
			"generateTypes": "npx tsc",
			"preview": "vite preview",
			"publishLibrary": "npm publish --access public",
			"test:ci": "vitest run --coverage --mode development-local",
			"test-publish": "npm publish --dry-run",
			"test": "vitest",
			"testOnce": "vitest run",
			"tsc": "tsc",
			"tscw": "tsc --watch --skipLibCheck",
			"watch": "vite build --watch"
		},
		repository: {
			"type": "git",
			"url": "https://github.com:utahdts/utah-design-system.git",
			"directory": "library"
		},
		keywords: [
			"design system",
			"dts",
			"utah",
			"components"
		],
		author: "DTS Digital Experience <dxp@utah.gov>",
		license: "Apache 2.0",
		bugs: { "url": "https://github.com/utahdts/utah-design-system/issues" },
		homepage: "https://github.com/utahdts/utah-design-system",
		peerDependencies: { "react": "^18.0.0 || ^19.0.0" },
		dependencies: {
			"@floating-ui/react-dom": "^2.1.8",
			"@utahdts/utah-design-system-header": "5.1.0",
			"date-fns": "4.1.0",
			"immer": "11.1.4",
			"lodash-es": "4.18.1",
			"use-immer": "0.11.0",
			"uuid": "14.0.0"
		},
		devDependencies: {
			"@types/lodash-es": "4.17.12",
			"@types/react": "^19.2.14",
			"@vitejs/plugin-react": "^6.0.1",
			"@vitest/coverage-istanbul": "^4.1.5",
			"@vitest/ui": "^4.1.5",
			"jsdom": "^29.1.1",
			"prop-types": "15.8.1",
			"sass": "^1.99.0",
			"typescript": "^6.0.3",
			"vite": "^8.0.10",
			"vitest": "^4.1.5"
		},
		type: "module"
	};
	//#endregion
	//#region react/enums/popupPlacement.js
	/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */
	/** @enum {PopupPlacement} */
	var popupPlacement = {
		BOTTOM: "bottom",
		BOTTOM_START: "bottom-start",
		BOTTOM_END: "bottom-end",
		LEFT: "left",
		LEFT_START: "left-start",
		LEFT_END: "left-end",
		RIGHT: "right",
		RIGHT_START: "right-start",
		RIGHT_END: "right-end",
		TOP: "top",
		TOP_START: "top-start",
		TOP_END: "top-end"
	};
	//#endregion
	//#region react/hooks/usePopupDelay.js
	var NO_POP_UP_TIMEOUT_MS = 350;
	var POP_UP_TIMEOUT_MS = 350;
	var PopupDelay = class {
		#popupTimeoutId = NaN;
		#noPopupTimeoutId = NaN;
		#isImmediatePopup = false;
		/** wait a little while after a popup closes before turning off immediate popup flag */
		startNoPopupTimer = () => {
			clearTimeout(this.#noPopupTimeoutId);
			clearTimeout(this.#popupTimeoutId);
			if (this.#isImmediatePopup) this.#noPopupTimeoutId = window.setTimeout(() => {
				this.#isImmediatePopup = false;
			}, NO_POP_UP_TIMEOUT_MS);
		};
		/**
		* wait to pop unless the popping period has already lapsed
		* Make sure to call startNoPopupTimer when the popup goes away
		* @param {() => void} callback function to call when waiting is done
		*/
		startPopupTimer = (callback) => {
			clearTimeout(this.#noPopupTimeoutId);
			clearTimeout(this.#popupTimeoutId);
			if (this.#isImmediatePopup) callback();
			else this.#popupTimeoutId = window.setTimeout(() => {
				this.#isImmediatePopup = true;
				callback();
			}, POP_UP_TIMEOUT_MS);
		};
	};
	var POPUP_DELAY = new PopupDelay();
	/**
	* This could easily have been a context, BUT trying to avoid requiring global contexts for the Design System library
	* plus this doesn't have to be a context because changing the isImmediatePopup state doesn't need to trigger a rerender (locally nor globally)
	* @returns {{startNoPopupTimer: () => void, startPopupTimer: (callback: () => void) => void}}
	*/
	function usePopupDelay() {
		return POPUP_DELAY;
	}
	//#endregion
	//#region react/util/joinClassNames.js
	/**
	* pass in comma separated list of class name strings to be trimmed, filtered, and joined together with a space
	* @param {(string | boolean | any[] | null | undefined)[]} classNames really can be anything, but should be string if truey
	* @returns {string}
	*/
	function joinClassNames(...classNames) {
		return (0, lodash_es.castArray)(Array.from(classNames)).flat(Infinity).map((className) => typeof className === "string" ? (0, lodash_es.trim)(className) : className).filter(lodash_es.identity).join(" ");
	}
	//#endregion
	//#region react/components/tooltip/Tooltip.jsx
	/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */
	/**
	* A ToolTip is only in charge of positioning and rendering a tooltip.
	* Pass in a "referenceElement" to have "zero-config" for onMouseEnter and onMouseLeave triggering
	* Pass in a isPopupVisible and setIsPopupVisible to have it be a controlled component
	* @param {object} props
	* @param {import('react').ReactNode} props.children The content of the tool tip
	* @param {string} [props.className] CSS class to apply to the popup
	* @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef] ref of the popup wrapper
	* @param {boolean} [props.isPopupVisible] controlled value for telling if tool tip is visible
	* @param {number | {mainAxis: number, crossAxis: number, alignmentAxis?: number}} [props.offset] default offset is 5 (see popup documentation
	* for details)
	* @param {PopupPlacement} [props.placement] where to put the tooltip in reference to the referenceElement
	* @param {HTMLElement | null} props.referenceElement the referenceElement from which the tool tip will toggle (first render will most likely be null)
	* @returns {import('react').JSX.Element}
	*/
	function Tooltip({ children, className, innerRef: draftInnerRef, isPopupVisible, offset = 5, placement = popupPlacement.BOTTOM, referenceElement: draftReferenceElement }) {
		const [isPopupVisibleInternal, setIsPopupVisibleInternal] = (0, react.useState)(false);
		const [popupElement, setPopupElement] = (0, react.useState)(null);
		const [arrowElement, setArrowElement] = (0, react.useState)(null);
		const { floatingStyles, middlewareData } = (0, _floating_ui_react_dom.useFloating)({
			elements: {
				reference: draftReferenceElement,
				floating: popupElement
			},
			middleware: [
				(0, _floating_ui_react_dom.offset)(offset),
				(0, _floating_ui_react_dom.flip)(),
				(0, _floating_ui_react_dom.shift)(),
				(0, _floating_ui_react_dom.arrow)({ element: arrowElement })
			],
			open: !(isPopupVisible ?? isPopupVisibleInternal),
			placement,
			whileElementsMounted: _floating_ui_react_dom.autoUpdate
		});
		const { startNoPopupTimer, startPopupTimer } = usePopupDelay();
		const onEscape = (e) => {
			if (e.code === "Escape" || e.key === "Escape") {
				setIsPopupVisibleInternal(false);
				document.removeEventListener("keyup", onEscape);
			}
		};
		(0, react.useEffect)(() => {
			if (draftReferenceElement && isPopupVisible === void 0) {
				if (draftReferenceElement.onmouseenter) throw new Error("ToolTip: onMouseEnter previously set");
				if (draftReferenceElement.onmouseleave) throw new Error("ToolTip: onMouseLeave previously set");
				if (draftReferenceElement.onfocus) throw new Error("ToolTip: onfocus previously set");
				if (draftReferenceElement.onblur) throw new Error("ToolTip: onblur previously set");
				draftReferenceElement.onmouseenter = () => startPopupTimer(() => {
					setIsPopupVisibleInternal(true);
				});
				draftReferenceElement.onfocus = () => {
					setIsPopupVisibleInternal(true);
				};
				draftReferenceElement.onmouseleave = () => {
					startNoPopupTimer();
					setIsPopupVisibleInternal(false);
				};
				draftReferenceElement.onblur = () => setIsPopupVisibleInternal(false);
				document.addEventListener("keyup", onEscape);
			}
			return (() => {
				if (draftReferenceElement) {
					draftReferenceElement.onmouseenter = null;
					draftReferenceElement.onmouseleave = null;
					draftReferenceElement.onfocus = null;
					draftReferenceElement.onblur = null;
				}
			});
		}, [
			draftReferenceElement,
			isPopupVisible,
			startNoPopupTimer,
			startPopupTimer,
			onEscape
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			ref: (refValue) => {
				setPopupElement(refValue);
				if (draftInnerRef) draftInnerRef.current = refValue;
			},
			style: floatingStyles,
			className: joinClassNames(className, "tooltip__wrapper", !(isPopupVisible ?? isPopupVisibleInternal) && "tooltip__wrapper--hidden"),
			"aria-hidden": "true",
			"data-popup-placement": middlewareData?.offset?.placement || placement,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "tooltip__content",
				children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					ref: setArrowElement,
					style: {
						left: middlewareData.arrow?.x,
						top: middlewareData.arrow?.y
					},
					className: "tooltip__arrow"
				})]
			})
		});
	}
	//#endregion
	//#region react/enums/buttonEnums.js
	/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
	/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
	/** @typedef {import('@utahdts/utah-design-system').IconButtonAppearance} IconButtonAppearance */
	/** @enum {ButtonAppearance} */
	var BUTTON_APPEARANCE = {
		SOLID: "solid",
		OUTLINED: "outlined"
	};
	/** @enum {ButtonTypes} */
	var BUTTON_TYPES = {
		BUTTON: "button",
		RESET: "reset",
		SUBMIT: "submit"
	};
	/** @enum {IconButtonAppearance} */
	var ICON_BUTTON_APPEARANCE = {
		SOLID: "solid",
		OUTLINED: "outlined",
		BORDERLESS: "borderless"
	};
	//#endregion
	//#region react/enums/componentColors.js
	/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
	/** @enum {ComponentColors} */
	var componentColors = {
		PRIMARY: "primary",
		SECONDARY: "secondary",
		ACCENT: "accent",
		NONE: "none"
	};
	//#endregion
	//#region react/enums/formElementSizesEnum.js
	/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
	/** @enum {FormElementSizes} */
	var formElementSizesEnum = {
		SMALL3X: "small3x",
		SMALL2X: "small2x",
		SMALL1X: "small1x",
		SMALL: "small",
		MEDIUM: "medium",
		LARGE: "large",
		LARGE1X: "large1x"
	};
	//#endregion
	//#region react/util/handleEvent.js
	/**
	* A function used as a callback often needs to the triggering event
	* from triggering other events. Wrapping the function in this handleEvent function
	* automatically stops the event propagation. ie handleEvent(() => { ... do something ... })
	* @param {import('react').MouseEventHandler<HTMLButtonElement>} func The function to run
	* @returns {import('react').MouseEventHandler<HTMLButtonElement>}
	*/
	function handleEvent(func) {
		return (e) => {
			if (e.preventDefault) e.preventDefault();
			if (e.stopPropagation) e.stopPropagation();
			if (e?.nativeEvent?.stopImmediatePropagation) e.nativeEvent.stopImmediatePropagation();
			func.call(e.target, e);
		};
	}
	//#endregion
	//#region react/components/widgetsIndicators/Spinner.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {number} [props.size]
	* @param {number} [props.strokeWidth]
	* @param {number} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function Spinner({ children, className, id, innerRef, size = 60, strokeWidth = 10, value = NaN, ...rest }) {
		const strokeWidthUse = Number.isNaN(strokeWidth) ? 10 : strokeWidth;
		const strokeWidthPlus1Use = Number.isNaN(strokeWidth) ? 10 : (strokeWidth ?? 0) + 1;
		const widthUse = Number.isNaN(size) ? void 0 : size;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			"aria-valuemax": 100,
			"aria-valuemin": 0,
			"aria-valuenow": Number.isNaN(value) ? void 0 : (value ?? 0) * 100,
			className: joinClassNames(className, "spinner", Number.isNaN(value) ? "spinner--indeterminate" : "spinner--determinate"),
			id: id ?? void 0,
			ref: innerRef,
			role: "progressbar",
			"aria-label": Number.isNaN(value) ? "Loading..." : `Loading ${(value ?? 0) * 100}% complete`,
			...rest,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "spinner__animation",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("svg", {
					height: widthUse,
					role: "presentation",
					viewBox: "-10.00 -10.00 120.00 120.00",
					width: widthUse,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						strokeWidth: strokeWidthUse,
						className: "spinner__track",
						d: "M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("path", {
						className: "spinner__value",
						d: "M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90",
						pathLength: "360",
						strokeDasharray: "360 360",
						strokeDashoffset: 360 * (1 - (Number.isNaN(value) ? .25 : value ?? 0)),
						strokeWidth: strokeWidthPlus1Use
					})]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "spinner__children",
				children
			})]
		});
	}
	//#endregion
	//#region react/components/buttons/Button.jsx
	/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
	/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
	/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
	/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
	/**
	* @param {object} props
	* @param {ButtonAppearance} [props.appearance]
	* @param {import('react').ReactNode} props.children most often is the title of the button, but can also contain most anything
	* @param {string} [props.className] modify your button via className like 'button--primary' and other modifiers found in the button.scss
	* @param {ComponentColors} [props.color] the base color of the button
	* @param {import('react').RefObject<HTMLButtonElement | null>} [props.innerRef] a ref to attach to the actual DOM <button> element
	* @param {import('react').ReactNode} [props.iconLeft]
	* @param {import('react').ReactNode} [props.iconRight]
	* @param {string} [props.id]
	* @param {boolean} [props.isBusy] if the button is busy then it shows a spinner indicator on it and disables the button
	* @param {boolean} [props.isDisabled]
	* @param {import('react').MouseEventHandler<HTMLButtonElement>} props.onClick
	* @param {FormElementSizes} [props.size]
	* @param {ButtonTypes} [props.type]
	* @returns {import('react').JSX.Element}
	*/
	function Button({ appearance = BUTTON_APPEARANCE.OUTLINED, children, className, color = componentColors.NONE, innerRef, isBusy, iconLeft, iconRight, isDisabled, id, onClick, size = "medium", type = BUTTON_TYPES.BUTTON, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			className: joinClassNames("button", className, `button--${appearance}`, color && color !== componentColors.NONE ? `button--${color}-color` : null, size && size !== formElementSizesEnum.MEDIUM ? `button--${size}` : null),
			disabled: isDisabled || isBusy,
			id,
			onClick: handleEvent((e) => onClick?.(e)),
			ref: innerRef,
			type,
			...rest,
			children: [
				iconLeft ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "button--icon button--icon-left",
					children: iconLeft
				}) : null,
				children,
				isBusy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {
					className: "ml-spacing-xs",
					size: size === formElementSizesEnum.LARGE1X ? 24 : 22,
					strokeWidth: size === formElementSizesEnum.LARGE1X ? 14 : 12
				}) : null,
				iconRight ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "button--icon button--icon-right",
					children: iconRight
				}) : null
			]
		});
	}
	//#endregion
	//#region react/components/buttons/ClickableTag.jsx
	/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children most often is the title of the tag, but can also contain most anything
	* @param {string} [props.className] modify your tag via className like 'tag--primary' and other modifiers found in the tag.scss
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef] a ref to attach to the wrapper <div>
	* @param {import('react').ReactNode} [props.iconLeft] an icon for the left side of props.children
	* @param {import('react').ReactNode} [props.iconRight] an icon for the right side of props.children
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isSelected]
	* @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick]
	* @param {FormElementSizes} [props.size]
	* @returns {import('react').JSX.Element}
	*/
	function ClickableTag({ children, className, id, iconLeft, iconRight, innerRef, isDisabled, isSelected, onClick, size = formElementSizesEnum.MEDIUM, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "tag__wrapper",
			ref: innerRef,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				"aria-pressed": isSelected,
				className: joinClassNames("tag", "tag__button", `tag--${size}`, className, isSelected ? "tag--selected" : ""),
				disabled: isDisabled,
				id,
				onClick: onClick && handleEvent((e) => onClick(e)),
				type: "button",
				...rest,
				children: [
					iconLeft ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "tag--icon tag--icon-left",
						children: iconLeft
					}) : null,
					children,
					iconRight ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "tag--icon tag--icon-right",
						children: iconRight
					}) : null
				]
			})
		});
	}
	//#endregion
	//#region react/components/buttons/ConfirmationButton/context/ConfirmationButtonContext.js
	var ConfirmationButtonContext = (0, react.createContext)(false);
	//#endregion
	//#region react/components/buttons/ConfirmationButton/context/ConfirmationButtonContextProvider.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {boolean} props.isClicked
	* @returns {import('react').JSX.Element}
	*/
	function ConfirmationButtonContextProvider({ children, isClicked }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmationButtonContext.Provider, {
			value: isClicked,
			children
		});
	}
	//#endregion
	//#region react/components/buttons/ConfirmationButton/ConfirmationButton.jsx
	/** @typedef {import('@utahdts/utah-design-system').ButtonAppearance} ButtonAppearance */
	/** @typedef {import('@utahdts/utah-design-system').ButtonTypes} ButtonTypes */
	/** @typedef {import('@utahdts/utah-design-system').ComponentColors} ComponentColors */
	/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
	/** @typedef {import('@utahdts/utah-design-system').WrapInElement} WrapInElement */
	/**
	* @param {object} props
	* @param {ButtonAppearance} [props.appearance]
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {ComponentColors} [props.color]
	* @param {ComponentColors} [props.confirmationColor]
	* @param {import('react').RefObject<HTMLButtonElement>} [props.innerRef]
	* @param {boolean} [props.isBusy]
	* @param {boolean} [props.isDisabled]
	* @param {string} [props.id]
	* @param {import('react').MouseEventHandler} props.onClick
	* @param {FormElementSizes} [props.size]
	* @param {ButtonTypes} [props.type]
	* @returns {import('react').JSX.Element}
	*/
	function ConfirmationButton({ appearance = BUTTON_APPEARANCE.OUTLINED, children, className, color = componentColors.NONE, confirmationColor, id, innerRef, isBusy, isDisabled, onClick, size = "medium", type = BUTTON_TYPES.BUTTON, ...rest }) {
		const [isClicked, setIsClicked] = (0, react.useState)(false);
		const resetButton = (0, react.useCallback)(() => {
			setIsClicked(false);
		}, []);
		const handleOnClick = handleEvent((e) => {
			if (!isBusy) if (isClicked) {
				onClick?.(e);
				resetButton();
			} else setIsClicked(true);
		});
		const onClickCallback = (0, react.useCallback)(handleOnClick, [handleOnClick]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			className: joinClassNames("button", className, `button--${appearance}`, color && color !== "none" && !(isClicked && confirmationColor) ? `button--${color}-color` : null, size && size !== formElementSizesEnum.MEDIUM ? `button--${size}` : null, isClicked ? "button--confirm" : null, isClicked && confirmationColor ? `button--${confirmationColor}-color` : null),
			disabled: isDisabled || isBusy,
			id,
			ref: innerRef,
			onClick: onClickCallback,
			onBlur: resetButton,
			onKeyUp: handleKeyPress("Escape", resetButton),
			type,
			...rest,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmationButtonContextProvider, {
				isClicked,
				children
			}), isBusy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {
				className: "ml-spacing-xs",
				size: size === formElementSizesEnum.LARGE1X ? 24 : 22,
				strokeWidth: size === formElementSizesEnum.LARGE1X ? 14 : 12
			}) : null]
		});
	}
	//#endregion
	//#region react/components/buttons/ConfirmationButton/context/useConfirmationButtonContext.js
	/** @returns {boolean} */
	function useConfirmationButtonContext() {
		return (0, react.useContext)(ConfirmationButtonContext);
	}
	//#endregion
	//#region react/components/buttons/ConfirmationButton/ConfirmationChildren.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @returns {import('react').JSX.Element | null}
	*/
	function ConfirmationChildren({ children }) {
		return useConfirmationButtonContext() ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children }) : null;
	}
	//#endregion
	//#region react/components/buttons/ConfirmationButton/InitialChildren.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @returns {import('react').JSX.Element | null}
	*/
	function InitialChildren({ children }) {
		return useConfirmationButtonContext() ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children });
	}
	//#endregion
	//#region react/components/buttons/IconButton.jsx
	/** @typedef {import('@utahdts/utah-design-system').IconButtonAppearance} IconButtonAppearance */
	/**
	* @param {object} props
	* @param {IconButtonAppearance} [props.appearance]
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {'primary' | 'secondary' | 'accent' | 'none'} [props.color]
	* @param {import('react').ReactNode} props.icon
	* @param {string} [props.id]
	* @param {import('react').MutableRefObject<HTMLButtonElement | null>} [props.innerRef]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isTitleVisible]
	* @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClick] what to do when the button is clicked
	* @param {number} [props.tabIndex]
	* @param {'small1x' | 'small' | 'medium' | 'large' | 'large1x'} [props.size]
	* @param {string} props.title A title is used for accessibility purposes to describe the button for screen readers
	* @param {string | null} [props.tooltipText]
	* @returns {import('react').JSX.Element}
	*/
	function IconButton({ appearance = ICON_BUTTON_APPEARANCE.OUTLINED, children, className, color = componentColors.NONE, icon, id, innerRef: draftInnerRef, isDisabled, isTitleVisible, onClick, tabIndex, size = "medium", title, tooltipText, ...rest }) {
		const [referenceElement, setReferenceElement] = (0, react.useState)(null);
		if (draftInnerRef && referenceElement) draftInnerRef.current = referenceElement;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			className: joinClassNames("button icon-button", className, `${appearance === ICON_BUTTON_APPEARANCE.BORDERLESS ? "icon-button--" : "button--"}${appearance}`, color && color !== "none" ? `button--${color}-color` : null, isTitleVisible ? "icon-button--visible-title" : null, size && size !== formElementSizesEnum.MEDIUM ? `icon-button--${size}` : null),
			disabled: isDisabled,
			id: id || void 0,
			onClick,
			ref: setReferenceElement,
			tabIndex,
			type: "button",
			...rest,
			children: [
				icon,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: isTitleVisible ? void 0 : "visually-hidden",
					children: title
				}),
				children
			]
		}), referenceElement ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tooltip, {
			referenceElement,
			children: tooltipText ?? title
		}) : null] });
	}
	//#endregion
	//#region react/components/buttons/Tag.jsx
	/** @typedef {import('@utahdts/utah-design-system').FormElementSizes} FormElementSizes */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children most often is the title of the tag, but can also contain most anything
	* @param {string} [props.className]
	* @param {string} [props.clearMessage] the message to show when hover the "x" icon
	* @param {string} [props.id] the tag id
	* @param {object} [props.iconButtonProps] props for the icon button
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef] a ref to attach to the actual DOM <button> or <span> element
	* @param {import('react').ReactNode} [props.iconLeft] an icon for the left side
	* @param {import('react').ReactNode} [props.iconRight] an icon for the right side
	* @param {boolean} [props.isDisabled] tag isDisabled state
	* @param {import('react').MouseEventHandler<HTMLButtonElement>} [props.onClear]
	* @param {FormElementSizes} [props.size]
	* @returns {import('react').JSX.Element}
	*/
	function Tag({ children, className, clearMessage = "Clear Tag", iconButtonProps = {}, innerRef, iconLeft, iconRight, isDisabled, id, onClear, size = formElementSizesEnum.MEDIUM, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("tag__wrapper", onClear && "tag--clearable"),
			ref: innerRef,
			...rest,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: joinClassNames("tag", className, `tag--${size}`),
				id,
				children: [
					iconLeft ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "tag--icon tag--icon-left",
						children: iconLeft
					}) : null,
					children,
					iconRight ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "tag--icon tag--icon-right",
						children: iconRight
					}) : null
				]
			}), onClear ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
				className: "tag__clear-button icon-button--borderless icon-button--small1x",
				icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "utds-icon-before-x-icon",
					"aria-hidden": true
				}),
				onClick: onClear,
				title: clearMessage,
				isDisabled,
				...iconButtonProps
			}) : null]
		});
	}
	//#endregion
	//#region react/components/containers/accordion/Accordion.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.contentClassName]
	* @param {number} [props.headingLevel]
	* @param {string} [props.headerClassName]
	* @param {import('react').ReactNode} props.headerContent
	* @param {string} props.id
	* @param {boolean} [props.isOpen]
	* @param {(previousIsOpen: boolean) => void} [props.onToggle]
	* @returns {import('react').JSX.Element}
	*/
	function Accordion({ children, className, contentClassName, headingLevel = 2, headerClassName, headerContent, id, isOpen, onToggle }) {
		const [stateIsOpen, setStateIsOpen] = (0, react.useState)(isOpen || false);
		(0, react.useEffect)(() => {
			setStateIsOpen(!!isOpen);
		}, [isOpen]);
		function toggleAccordion() {
			if (onToggle) onToggle(stateIsOpen);
			else setStateIsOpen(!stateIsOpen);
		}
		const HeadingTag = `h${headingLevel}`;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames(["accordion", className]),
			id,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				"aria-expanded": stateIsOpen,
				"aria-controls": `accordion-content__${id}`,
				className: joinClassNames([
					"accordion__header",
					headerClassName,
					stateIsOpen ? "accordion__header--open" : ""
				]),
				id: `accordion-button__${id}`,
				onClick: handleEvent(toggleAccordion),
				type: "button",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(HeadingTag, {
					id: `accordion-heading__${id}`,
					children: headerContent
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: `utds-icon-before-circle-chevron-up icon-button__icon ${stateIsOpen ? "" : "icon-button__icon--rotate180"}`,
					"aria-hidden": "true"
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"aria-hidden": !stateIsOpen,
				"aria-labelledby": `accordion-button__${id}`,
				inert: !stateIsOpen,
				className: joinClassNames([
					"accordion__content",
					contentClassName,
					stateIsOpen ? "accordion__content--open" : ""
				]),
				id: `accordion-content__${id}`,
				role: "region",
				children
			})]
		});
	}
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/UtahDesignSystemContext.js
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
	/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */
	var UtahDesignSystemContext = (0, react.createContext)([{
		ariaLive: {
			assertiveMessages: [],
			politeMessages: []
		},
		banners: []
	}, () => {}]);
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/useUtahDesignSystemContext.js
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
	/** @typedef {import('use-immer').ImmerHook<UtahDesignSystemContextValue>} ImmerHookUtahDesignSystemContext */
	/** @returns {ImmerHookUtahDesignSystemContext} */
	function useUtahDesignSystemContext() {
		return (0, react.useContext)(UtahDesignSystemContext);
	}
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/hooks/useAriaMessaging.js
	/** @returns {{addAssertiveMessage: (message: string) => void, addPoliteMessage: (message: string) => void}} */
	function useAriaMessaging() {
		const [, setState] = useUtahDesignSystemContext();
		const addPoliteMessage = (0, react.useCallback)(
			/**
			* @param {string} message
			* @returns {void}
			*/
			(message) => {
				setState((draftState) => {
					draftState.ariaLive.politeMessages.push(message);
				});
			},
			[setState]
		);
		const addAssertiveMessage = (0, react.useCallback)(
			/**
			* @param {string} message
			* @returns {void}
			*/
			(message) => {
				setState((draftState) => {
					draftState.ariaLive.assertiveMessages.push(message);
				});
			},
			[setState]
		);
		return (0, react.useMemo)(() => ({
			addAssertiveMessage,
			addPoliteMessage
		}), [addAssertiveMessage, addPoliteMessage]);
	}
	//#endregion
	//#region react/util/getFocusableElements.js
	/**
	* Based on the list from https://api.jqueryui.com/tabbable-selector/
	* Used to get a list of focusable elements within a modal component
	* @param {HTMLDialogElement} element
	* @returns {HTMLElement[]}
	*/
	function getFocusableElements(element) {
		return [...element.querySelectorAll("a[href], area[href], button, input, textarea, select, object, [tabindex]:not([tabindex=\"-1\"])")].filter((item) => !item.hasAttribute("disabled"));
	}
	//#endregion
	//#region react/hooks/useHandleEscape.js
	/**
	* @param {import('react').KeyboardEventHandler} [onEscape]
	* @returns {(...args: any[]) => void} func
	*/
	function useHandleEscape(onEscape) {
		return (0, react.useCallback)((e) => {
			if (e.code === "Escape" || e.key === "Escape") {
				e.preventDefault();
				e.stopPropagation();
				if (onEscape) onEscape(e);
			}
		}, [onEscape]);
	}
	//#endregion
	//#region react/hooks/useHandleTab.js
	/**
	* @param {HTMLElement | undefined} firstTabElement
	* @param {HTMLElement | undefined} lastTabElement
	* @returns {(...args: any[]) => void} func
	*/
	function useHandleTab(firstTabElement, lastTabElement) {
		return (0, react.useCallback)((e) => {
			if (e.code === "Tab" || e.key === "Tab") {
				if (e.shiftKey) {
					if (document.activeElement === firstTabElement) {
						lastTabElement?.focus();
						e.preventDefault();
					}
				} else if (document.activeElement === lastTabElement) {
					firstTabElement?.focus();
					e.preventDefault();
				}
			}
		}, [firstTabElement, lastTabElement]);
	}
	//#endregion
	//#region react/enums/drawerPlacement.js
	/** @typedef {import('@utahdts/utah-design-system').DrawerPlacement} DrawerPlacement */
	/**
	* Positions for banners
	* @enum {DrawerPlacement}
	*/
	var DRAWER_PLACEMENT = {
		RIGHT: "drawer--right",
		LEFT: "drawer--left"
	};
	//#endregion
	//#region react/components/containers/drawer/Drawer.jsx
	/** @typedef {import('@utahdts/utah-design-system').DrawerPlacement} DrawerPlacement */
	/**
	* @param {object} props
	* @param {string} props.ariaLabelledBy Must match the id of the title of the drawer
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {import('react').KeyboardEventHandler} [props.onEscape]
	* @param {import('react').MouseEventHandler} [props.onClose]
	* @param {DrawerPlacement} [props.position]
	* @returns {React.JSX.Element}
	*/
	function Drawer({ ariaLabelledBy, children, className, id, innerRef, onClose, onEscape, position = DRAWER_PLACEMENT.RIGHT }) {
		const ref = (0, react.useRef)(null);
		const [lastActiveElement] = (0, use_immer.useImmer)(document.activeElement);
		const [firstTabElement, setFirstTabElement] = (0, use_immer.useImmer)(void 0);
		const [lastTabElement, setLastTabElement] = (0, use_immer.useImmer)(void 0);
		const { addAssertiveMessage } = useAriaMessaging();
		const handleEscape = useHandleEscape(onEscape);
		const handleTab = useHandleTab(firstTabElement, lastTabElement);
		(0, react.useEffect)(() => {
			if (ref.current) {
				const list = getFocusableElements(ref.current);
				if (list.length) {
					const firstElement = list[0];
					setFirstTabElement(firstElement);
					const lastElement = list[list.length - 1];
					setLastTabElement(lastElement);
					firstElement?.focus();
				} else console.warn("No focusable element found. Make sure to include a way to close the drawer.");
			}
		}, []);
		(0, react.useEffect)(() => () => {
			addAssertiveMessage("Closing drawer.");
			lastActiveElement?.focus();
		}, []);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "drawer-wrapper",
			ref: innerRef,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "drawer__backdrop backdrop-dark",
				onClick: onClose,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
					"aria-labelledby": ariaLabelledBy,
					className: joinClassNames("drawer__inner", position, className),
					id,
					onClick: (e) => e.stopPropagation(),
					onKeyDown: handleTab,
					onKeyUp: handleEscape,
					ref,
					children: [children, onClose ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
						className: "drawer__close-button",
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-x-icon",
							"aria-hidden": "true"
						}),
						onClick: onClose,
						size: "small",
						title: "Close"
					}) : void 0]
				})
			})
		});
	}
	//#endregion
	//#region react/components/containers/drawer/DrawerContent.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function DrawerContent({ children, className, id }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("drawer__content", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/components/containers/drawer/DrawerFooter.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function DrawerFooter({ children, className, id }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("drawer__footer", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/components/containers/drawer/DrawerTitle.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} props.id Make sure to match the ariaLabelledBy of the drawer
	* @param {string} [props.tagName]
	* @returns {import('react').JSX.Element}
	*/
	function DrawerTitle({ children, className, id, tagName: TagName = "div" }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TagName, {
			className: joinClassNames("drawer__title", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/components/containers/tabs/context/TabGroupContext.jsx
	/** @typedef {import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextValue */
	var TabGroupContext = (0, react.createContext)({
		isVertical: false,
		navigateNext: () => {},
		navigatePrevious: () => {},
		registerTab: () => {},
		selectedTabId: "",
		setSelectedTabId: () => {},
		tabGroupId: "",
		unRegisterTab: () => {}
	});
	//#endregion
	//#region react/components/containers/tabs/context/useTabGroupContext.js
	/** @typedef { import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextType */
	/** @returns {TabGroupContextType} */
	function useTabGroupContext() {
		return (0, react.useContext)(TabGroupContext);
	}
	//#endregion
	//#region react/components/containers/tabs/functions/generateTabId.js
	/**
	* @param {string} tabGroupId
	* @param {string} tabId
	* @returns {string}
	*/
	function generateTabId(tabGroupId, tabId) {
		return `tab__${tabGroupId}__${tabId}`;
	}
	//#endregion
	//#region react/components/containers/tabs/Tab.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.id
	* @returns {import('react').JSX.Element}
	*/
	function Tab({ children, id }) {
		const tabRef = (0, react.useRef)(null);
		const { isVertical, navigateNext, navigatePrevious, registerTab, selectedTabId, setSelectedTabId, tabGroupId, unRegisterTab } = useTabGroupContext();
		const onKeyChange = (event) => {
			if ([
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown"
			].includes(event.key)) event.preventDefault();
			switch (event.key) {
				case "ArrowLeft":
					if (!isVertical) navigatePrevious();
					break;
				case "ArrowRight":
					if (!isVertical) navigateNext();
					break;
				case "ArrowUp":
					if (isVertical) navigatePrevious();
					break;
				case "ArrowDown":
					if (isVertical) navigateNext();
					break;
				default: break;
			}
		};
		(0, react.useEffect)(() => {
			if (tabRef) registerTab(tabRef);
		}, []);
		(0, react.useEffect)(() => (() => {
			unRegisterTab(tabRef);
		}), []);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames(selectedTabId === id && "tab-group__tab--selected", "tab-group__tab"),
			role: "presentation",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				"aria-controls": `tabpanel__${tabGroupId}__${id}`,
				"aria-selected": selectedTabId === id,
				className: joinClassNames(selectedTabId === id && "tab-group__tab-button--selected", "tab-group__tab-button"),
				id: generateTabId(tabGroupId, id),
				onClick: handleEvent(() => setSelectedTabId(id)),
				onKeyDown: onKeyChange,
				ref: tabRef,
				role: "tab",
				tabIndex: selectedTabId === id ? 0 : -1,
				type: "button",
				children
			})
		});
	}
	//#endregion
	//#region react/components/containers/tabs/TabGroup.jsx
	/** @typedef {import('@utahdts/utah-design-system').TabGroupContextValue} TabGroupContextValue */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {boolean} [props.isVertical]
	* @param {(newTabId: string) => void} [props.onChange]
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TabGroup({ children, className, defaultValue, isVertical, onChange, value }) {
		const tabGroupId = (0, react.useId)();
		const tabGroupRef = (0, react.useRef)(null);
		const [tabGroupState, setTabGroupState] = (0, use_immer.useImmer)(() => ({
			selectedTabId: defaultValue || "",
			tabGroupId,
			tabs: []
		}));
		const navigateTab = (0, react.useCallback)((tab) => {
			if (tab) {
				tab?.focus();
				tab?.click();
			}
		}, []);
		const findCurrentTabIndex = (0, react.useCallback)(() => tabGroupState.tabs.findIndex((tab) => tab?.id === generateTabId(tabGroupState.tabGroupId, tabGroupState.selectedTabId)), [tabGroupState]);
		const registerTab = (0, react.useCallback)((tab) => {
			setTabGroupState((draftState) => {
				const checkTab = draftState.tabs.find((tabSearch) => tabSearch?.id === tab?.current?.id);
				if (checkTab) Object.assign(checkTab, tab?.current);
				else draftState.tabs.push(tab?.current);
			});
		}, [tabGroupState, setTabGroupState]);
		const unRegisterTab = (0, react.useCallback)((tab) => {
			setTabGroupState((draftState) => {
				draftState.tabs = draftState.tabs.filter((filterTab) => filterTab?.id !== tab?.current?.id);
			});
		}, []);
		(0, react.useEffect)(() => {
			if (value !== void 0) setTabGroupState((draftState) => {
				draftState.selectedTabId = value;
			});
		}, [value]);
		/** @type {TabGroupContextValue} */
		const contextValue = (0, react.useMemo)(() => ({
			isVertical: !!isVertical,
			navigateNext() {
				const nextIndex = (findCurrentTabIndex() + 1) % tabGroupState.tabs.length;
				navigateTab(tabGroupState?.tabs?.[nextIndex] || null);
			},
			navigatePrevious() {
				const nextIndex = (findCurrentTabIndex() + tabGroupState.tabs.length - 1) % tabGroupState.tabs.length;
				navigateTab(tabGroupState?.tabs?.[nextIndex] || null);
			},
			registerTab,
			selectedTabId: value || tabGroupState.selectedTabId || "",
			setSelectedTabId(tabId) {
				if (onChange) onChange(tabId);
				else setTabGroupState((draftState) => {
					draftState.selectedTabId = tabId;
				});
			},
			tabGroupId: tabGroupState.tabGroupId,
			unRegisterTab
		}), [tabGroupState, isVertical]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TabGroupContext.Provider, {
			value: contextValue,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: joinClassNames("tab-group", className, isVertical && "tab-group--vertical"),
				id: `tab-group__${tabGroupState.tabGroupId}`,
				ref: tabGroupRef,
				children
			})
		});
	}
	//#endregion
	//#region react/components/containers/tabs/TabGroupTitle.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.tagName]
	* @returns {import('react').JSX.Element}
	*/
	function TabGroupTitle({ children, className, tagName: TagName = "div" }) {
		const { tabGroupId } = useTabGroupContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TagName, {
			id: `tab-group__${tabGroupId}`,
			className: joinClassNames("tag-group__title", className),
			children
		});
	}
	//#endregion
	//#region react/components/containers/tabs/TabList.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @returns {import('react').JSX.Element}
	*/
	function TabList({ children, className }) {
		const { isVertical } = useTabGroupContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames(className, "tab-group__list"),
			role: "tablist",
			"aria-orientation": isVertical ? "vertical" : "horizontal",
			children
		});
	}
	//#endregion
	//#region react/components/containers/tabs/TabPanel.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} props.tabId
	* @returns {import('react').JSX.Element}
	*/
	function TabPanel({ children, className, tabId }) {
		const { selectedTabId, tabGroupId } = useTabGroupContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			"aria-labelledby": `tab__${tabGroupId}__${tabId}`,
			className: joinClassNames(className, selectedTabId !== tabId && "visually-hidden", "tab-group__panel"),
			id: `tabpanel__${tabGroupId}__${tabId}`,
			role: "tabpanel",
			tabIndex: selectedTabId === tabId ? 0 : -1,
			inert: selectedTabId !== tabId,
			children
		});
	}
	//#endregion
	//#region react/components/containers/tabs/TabPanels.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @returns {import('react').JSX.Element}
	*/
	function TabPanels({ children }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "tab-group__panels",
			role: "presentation",
			children
		});
	}
	//#endregion
	//#region react/components/footer/FooterAgencyInformation.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @returns {import('react').JSX.Element}
	*/
	function FooterAgencyInformation({ children }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "utah-design-system",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "footer-agency-information",
				children
			})
		});
	}
	//#endregion
	//#region react/components/footer/FooterAgencyInformationColumn.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @returns {import('react').JSX.Element}
	*/
	function FooterAgencyInformationColumn({ children }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "footer-agency-information__column",
			children
		});
	}
	//#endregion
	//#region react/components/footer/FooterAgencyInformationInfo.jsx
	/** @typedef {import('@utahdts/utah-design-system').Address} Address */
	/**
	* @param {object} props
	* @param {string} props.agencyTitleFirstLine ie Utah Department of (smaller font above main title)
	* @param {string} [props.agencyTitleSecondLine] ie Government Operations (larger font below firstLine)
	* @param {Address} props.address
	* @param {string} props.email
	* @param {import('react').ReactNode} props.logo
	* @param {string} [props.phone]
	* @returns {import('react').JSX.Element}
	*/
	function FooterAgencyInformationInfo({ agencyTitleFirstLine, agencyTitleSecondLine, address, email, logo, phone }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "footer-agency-information__title-wrapper",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "footer-agency-information__title-image",
					children: logo
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "footer-agency-information__title",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "footer-agency-information__first-line",
						children: agencyTitleFirstLine
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "footer-agency-information__second-line",
						children: agencyTitleSecondLine
					})]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "footer-agency-information__address",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "footer-agency-information__address-street-address-1",
						children: address.streetAddress1
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
					address.streetAddress2 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "footer-agency-information__address-street-address-2",
						children: address.streetAddress2
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {})] }) : void 0,
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "footer-agency-information__address-city-state-zip",
						children: [
							address.city,
							", ",
							address.state,
							" ",
							address.zipCode
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "footer-agency-information__email",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
					href: `mailto:${email}`,
					children: email
				})
			}),
			phone && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "footer-agency-information__phone",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
					href: `tel:${phone}`,
					children: phone
				})
			})
		] });
	}
	//#endregion
	//#region react/components/footer/FooterSocialMediaBar.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string | null} props.title
	* @returns {import('react').JSX.Element}
	*/
	function FooterSocialMediaBar({ children, title = "Follow us online" }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "utah-design-system",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "footer-social-media-bar",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "footer-social-media-bar__follow-us",
					children: title
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "footer-social-media-bar__icon-bar",
					children
				})]
			})
		});
	}
	//#endregion
	//#region react/util/useOnKeyUp.js
	/**
	* @template KeyboardEventElementT
	* @param {string} targetKey which key to watch for (ie 'Enter') https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
	* @param {import('react').KeyboardEventHandler<KeyboardEventElementT>} func the function to call when the given key is pressed
	* @param {boolean} [stopPropagation]
	* @returns {(event: React.KeyboardEvent<KeyboardEventElementT>) => boolean} function that checks for the keypress and fires function when pressed
	*/
	function useOnKeyUp(targetKey, func, stopPropagation) {
		return (0, react.useCallback)((e) => {
			const isMatchingKey = e.key === targetKey;
			if (isMatchingKey) {
				if (stopPropagation) {
					e.stopPropagation();
					e.preventDefault();
				}
				func(e);
			}
			return isMatchingKey;
		}, [
			func,
			stopPropagation,
			targetKey
		]);
	}
	//#endregion
	//#region react/components/forms/ErrorMessage.jsx
	/**
	* @param {object} props
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @returns {import('react').JSX.Element | null}
	*/
	function ErrorMessage({ errorMessage, id }) {
		return errorMessage ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "input-wrapper__error-message",
			id: `error__${id}`,
			children: errorMessage
		}) : null;
	}
	//#endregion
	//#region react/components/forms/RequiredStar.jsx
	function RequiredStar() {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: "required-star",
			"aria-hidden": true,
			children: "*"
		});
	}
	//#endregion
	//#region react/components/forms/CalendarInput/calendarGrid.js
	/** @typedef {import('@utahdts/utah-design-system').CalendarGridValue} CalendarGridValue */
	/** @typedef {import('@utahdts/utah-design-system').CalendarGridMonth} CalendarGridMonth */
	/**
	* @param {Date} dateA
	* @param {Date} dateB
	* @returns {number} negative, 0, or positive indicative of sort order
	*/
	function dateIsEqualYM(dateA, dateB) {
		return dateA.getFullYear() - dateB.getFullYear() || dateA.getMonth() - dateB.getMonth();
	}
	/**
	* @param {Date | null} dateA
	* @param {Date | null} dateB
	* @returns {boolean}
	*/
	function dateIsEqualYMD(dateA, dateB) {
		return !!dateA && !!dateB && dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
	}
	/**
	* @param {Date} infoDate single cell date in the grid for which to construct an information object
	* @param {Date | null} focusDate date currently receiving focus in the UI
	* @param {Date | null} selectedDate date selected in the UI
	* @param {Date} viewedMonthDate date of a day in the month currently being viewed
	* @returns {CalendarGridValue}
	*/
	function constructCalendarGridValue(infoDate, focusDate, selectedDate, viewedMonthDate) {
		return {
			date: infoDate,
			isFocusDate: dateIsEqualYMD(infoDate, [focusDate, selectedDate].find((testDate) => testDate && (0, date_fns.isValid)(testDate)) ?? /* @__PURE__ */ new Date()),
			isNextMonth: (0, date_fns.add)(viewedMonthDate, { months: 1 }).getMonth() === infoDate.getMonth(),
			isPreviousMonth: (0, date_fns.add)(viewedMonthDate, { months: -1 }).getMonth() === infoDate.getMonth(),
			isSelectedDate: dateIsEqualYMD(infoDate, selectedDate),
			isTodayDate: dateIsEqualYMD(infoDate, /* @__PURE__ */ new Date())
		};
	}
	/**
	* @param {Date | null} focusDate
	* @param {Date | null} selectedDate
	* @returns {CalendarGridMonth}
	*/
	function calendarGrid(focusDate, selectedDate) {
		if (Number.isNaN(focusDate)) throw new Error("calendarGrid: focusDate is invalid");
		if (Number.isNaN(selectedDate)) throw new Error("calendarGrid: selectedDate is invalid");
		const viewedMonthDate = focusDate && (0, date_fns.isValid)(focusDate) ? focusDate : /* @__PURE__ */ new Date();
		const firstOfMonth = new Date(viewedMonthDate.getFullYear(), viewedMonthDate.getMonth(), 1);
		const startDayOfWeek = Number((0, date_fns.format)(firstOfMonth, "e"));
		/** @type {CalendarGridMonth} */
		const calendarGridMonth = [];
		for (let loopDate = (0, date_fns.add)(firstOfMonth, { days: -1 * startDayOfWeek + 1 }); dateIsEqualYM(loopDate, viewedMonthDate) <= 0 || calendarGridMonth[calendarGridMonth.length - 1]?.length !== 7; loopDate = (0, date_fns.add)(loopDate, { days: 1 })) {
			if (calendarGridMonth.length === 0 || calendarGridMonth[calendarGridMonth.length - 1]?.length === 7) calendarGridMonth.push([]);
			calendarGridMonth[calendarGridMonth.length - 1]?.push(constructCalendarGridValue(loopDate, focusDate, selectedDate, viewedMonthDate));
		}
		return calendarGridMonth;
	}
	//#endregion
	//#region react/components/forms/CalendarInput/CalendarInput.jsx
	var oldMoveCurrentValueFocusTimeoutId = NaN;
	/**
	* @param {string} calendarInputId
	* @param {Date | null} oldDate
	* @param {string} dateFormat
	* @param {import('date-fns').Duration} duration
	* @returns {Date | null}
	*/
	function moveCurrentValueFocus(calendarInputId, oldDate, dateFormat, duration) {
		const newDate = (0, date_fns.add)(oldDate && (0, date_fns.isValid)(oldDate) ? oldDate : /* @__PURE__ */ new Date(), duration);
		clearTimeout(oldMoveCurrentValueFocusTimeoutId);
		oldMoveCurrentValueFocusTimeoutId = window.setTimeout(() => {
			document.getElementById(`calendar-input__${calendarInputId}__${(0, date_fns.format)(newDate, dateFormat)}`)?.focus();
		}, 0);
		return newDate;
	}
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} [props.dateFormat] use `date-fns` modifiers for formatting the date https://date-fns.org/v3.2.0/docs/format
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isHidden] a dateInput will hide its calendar popup when not in use
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {(newValue: string) => void} props.onChange
	* @param {boolean} [props.shouldSetFocusOnMount] if rendered in a popup, then set focus to first focusable element when first shown
	* @param {boolean} [props.showTodayButton]
	* @param {string | null} [props.value] expects value to be in format of props.dateFormat
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function CalendarInput({ className, dateFormat = "MM/dd/yyyy", errorMessage, id, innerRef, isDisabled, isHidden, isRequired, label, labelClassName, onChange, shouldSetFocusOnMount, showTodayButton, value, wrapperClassName, ...rest }) {
		const { addPoliteMessage } = useAriaMessaging();
		const calendarInputId = (0, react.useId)();
		const firstFocusableElementRef = (0, react.useRef)(null);
		const currentValueDate = value ? (0, date_fns.parse)(value, dateFormat, /* @__PURE__ */ new Date()) : null;
		const [currentValueDateInternal, setCurrentValueDateInternal] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			if (currentValueDateInternal?.getTime() !== currentValueDate?.getTime()) setCurrentValueDateInternal(currentValueDate && (0, date_fns.isValid)(currentValueDate) ? currentValueDate : /* @__PURE__ */ new Date());
		}, [currentValueDate?.getTime()]);
		(0, react.useEffect)(() => {
			if (shouldSetFocusOnMount && !isHidden) firstFocusableElementRef.current?.focus();
		}, [shouldSetFocusOnMount, isHidden]);
		const calendarMonthDate = currentValueDateInternal && (0, date_fns.isValid)(currentValueDateInternal) ? currentValueDateInternal : /* @__PURE__ */ new Date();
		const calendarGridValues = (0, react.useMemo)(() => calendarGrid(currentValueDateInternal, currentValueDate), [currentValueDateInternal, value]);
		const onDownArrowPress = useOnKeyUp("ArrowDown", (0, react.useCallback)(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { weeks: 1 })), []), true);
		const onUpArrowPress = useOnKeyUp("ArrowUp", (0, react.useCallback)(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { weeks: -1 })), []), true);
		const onLeftArrowPress = useOnKeyUp("ArrowLeft", (0, react.useCallback)(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { days: -1 })), []), true);
		const onRightArrowPress = useOnKeyUp("ArrowRight", (0, react.useCallback)(() => setCurrentValueDateInternal((date) => moveCurrentValueFocus(calendarInputId, date, dateFormat, { days: 1 })), []), true);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper input-wrapper--calendar-input", wrapperClassName, className),
			ref: innerRef,
			...rest,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					className: labelClassName ?? void 0,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "calendar-input__controls",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "calendar-input__controls-month",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [shouldSetFocusOnMount ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								"aria-label": "You are in a calendar date picker. Press tab to interact. Use arrow keys on days to navigate.",
								className: "calendar-input__first-focusable-element",
								ref: firstFocusableElementRef,
								tabIndex: isHidden ? -1 : 0
							}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
								className: "icon-button--small1x icon-button--borderless",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "utds-icon-before-chevron-left",
									"aria-hidden": "true"
								}),
								innerRef: shouldSetFocusOnMount ? void 0 : firstFocusableElementRef,
								isDisabled,
								onClick: () => setCurrentValueDateInternal((draftDate) => {
									const newDate = (0, date_fns.add)(draftDate && (0, date_fns.isValid)(draftDate) ? draftDate : /* @__PURE__ */ new Date(), { months: -1 });
									addPoliteMessage(`Month has changed to ${(0, date_fns.format)(newDate, "MMMM yyyy")}`);
									return newDate;
								}),
								title: "Previous Month",
								tabIndex: isHidden ? -1 : 0
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "calendar-input__month",
								children: (0, date_fns.format)(calendarMonthDate, "MMMM")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
								className: "icon-button--small1x icon-button--borderless",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "utds-icon-before-chevron-right",
									"aria-hidden": "true"
								}),
								isDisabled,
								onClick: () => setCurrentValueDateInternal((draftDate) => {
									const newDate = (0, date_fns.add)(draftDate && (0, date_fns.isValid)(draftDate) ? draftDate : /* @__PURE__ */ new Date(), { months: 1 });
									addPoliteMessage(`Month has changed to ${(0, date_fns.format)(newDate, "MMMM yyyy")}`);
									return newDate;
								}),
								title: "Next Month",
								tabIndex: isHidden ? -1 : 0
							}) })
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "calendar-input__controls-year",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
								className: "icon-button--small1x icon-button--borderless",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "utds-icon-before-double-arrow-left",
									"aria-hidden": "true"
								}),
								isDisabled,
								onClick: () => setCurrentValueDateInternal((draftDate) => {
									const newDate = (0, date_fns.add)(draftDate && (0, date_fns.isValid)(draftDate) ? draftDate : /* @__PURE__ */ new Date(), { years: -1 });
									addPoliteMessage(`Year has changed to ${newDate.getFullYear()}`);
									return newDate;
								}),
								title: "Last Year",
								tabIndex: isHidden ? -1 : 0
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: "calendar-input__year",
								children: calendarMonthDate.getFullYear()
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
								className: "icon-button--small1x icon-button--borderless",
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: "utds-icon-before-double-arrow-right",
									"aria-hidden": "true"
								}),
								isDisabled,
								onClick: () => setCurrentValueDateInternal((draftDate) => {
									const newDate = (0, date_fns.add)(draftDate && (0, date_fns.isValid)(draftDate) ? draftDate : /* @__PURE__ */ new Date(), { years: 1 });
									addPoliteMessage(`Year has changed to ${newDate.getFullYear()}`);
									return newDate;
								}),
								title: "Next Year",
								tabIndex: isHidden ? -1 : 0
							}) })
						]
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "calendar-input__grid",
					id,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "calendar-input__row",
						role: "row",
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Su"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Mo"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Tu"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "We"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Th"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Fr"
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "calendar-input__cell-header",
								role: "gridcell",
								children: "Sa"
							})
						]
					}), calendarGridValues.map((weekGridValues, weekGridValuesIndex) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "calendar-input__row",
						role: "row",
						children: weekGridValues.map((cellGridValue) => {
							const formattedDate = (0, date_fns.format)(cellGridValue.date, dateFormat);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								className: joinClassNames("calendar-input__cell", cellGridValue.isFocusDate && "calendar-input__cell--focused", cellGridValue.isNextMonth && "calendar-input__cell--next-month", cellGridValue.isPreviousMonth && "calendar-input__cell--previous-month", cellGridValue.isSelectedDate && "calendar-input__cell--selected", cellGridValue.isTodayDate && "calendar-input__cell--today"),
								id: `calendar-input__${calendarInputId}__${formattedDate}`,
								isDisabled,
								onClick: () => onChange?.(formattedDate),
								type: "button",
								onKeyDown: (e) => {
									if ([
										"ArrowDown",
										"ArrowUp",
										"ArrowLeft",
										"ArrowRight"
									].includes(e.key)) {
										e.preventDefault();
										e.stopPropagation();
									}
								},
								onKeyUp: (e) => {
									onDownArrowPress(e);
									onUpArrowPress(e);
									onLeftArrowPress(e);
									onRightArrowPress(e);
								},
								role: "gridcell",
								tabIndex: isHidden || !cellGridValue.isFocusDate ? -1 : 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									"aria-label": `${(0, date_fns.format)(cellGridValue.date, "EEEE MMMM do yyyy")}. Press return to select date.`,
									children: cellGridValue.date.getDate()
								})
							}, `calendar-input__cell__${cellGridValue.date.getTime()}`);
						})
					}, `calendar-input__row__${weekGridValuesIndex}`))]
				}),
				showTodayButton ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "calendar-input__today",
					id,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						className: "button--small",
						onClick: () => {
							setCurrentValueDateInternal(/* @__PURE__ */ new Date());
							onChange?.((0, date_fns.format)(/* @__PURE__ */ new Date(), dateFormat));
						},
						tabIndex: isHidden ? -1 : 0,
						type: "button",
						children: "Today"
					})
				}) : null,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id
				})
			]
		});
	}
	//#endregion
	//#region react/util/trailingS.js
	/**
	* returns an 's' if the number is plural
	* @param {number} value
	* @returns {string}
	*/
	function trailingS(value) {
		return value >= 2 ? "s" : "";
	}
	//#endregion
	//#region react/components/forms/CharacterCount.jsx
	/**
	* @param {object} props
	* @param {string | null} [props.className]
	* @param {string} props.id
	* @param {number} props.maxLength
	* @param {string | null} [props.text]
	* @returns {import('react').JSX.Element | null}
	*/
	function CharacterCount({ className, id, maxLength, text }) {
		const timer = (0, react.useRef)(NaN);
		const { addPoliteMessage } = useAriaMessaging();
		const charactersLeft = text?.length ? maxLength - text.length : maxLength;
		const overLimit = text?.length ? text.length > maxLength : false;
		const charactersOver = text?.length ? text.length - maxLength : 0;
		const displayMessage = (0, react.useMemo)(() => overLimit ? `${charactersOver} character${trailingS(charactersOver)} over the limit` : `${charactersLeft} character${trailingS(charactersLeft)} left`, [
			charactersLeft,
			charactersOver,
			overLimit
		]);
		(0, react.useEffect)(() => {
			timer.current = window.setTimeout(() => addPoliteMessage(displayMessage), 1500);
			return () => clearTimeout(timer.current);
		}, [addPoliteMessage, displayMessage]);
		return maxLength !== void 0 && maxLength !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("character-count", className, overLimit && "character-count--over-limit"),
			id: `character-count__${id}`,
			children: displayMessage
		}) : null;
	}
	//#endregion
	//#region react/components/forms/Checkbox.jsx
	/**
	* @template FormEventT
	* @typedef {import('react').FormEvent<FormEventT>} FormEvent
	*/
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {boolean} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} props.id
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] e => {}; can be omitted for uncontrolled
	* @param {boolean} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function Checkbox({ className, defaultValue, errorMessage, innerRef, id, isDisabled, isRequired, label, labelClassName, name, onChange, value, wrapperClassName, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper input-wrapper--checkbox", wrapperClassName),
			ref: innerRef,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "input-wrapper--checkbox-inner",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					className: labelClassName ?? void 0,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					"aria-describedby": errorMessage ? `${id}-error` : void 0,
					defaultChecked: defaultValue,
					checked: value,
					className,
					disabled: isDisabled,
					id,
					name: name || id,
					onChange,
					required: isRequired,
					type: "checkbox",
					...rest
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
				errorMessage,
				id
			})]
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/context/MultiSelectContext.js
	/** @typedef { import('@utahdts/utah-design-system').MultiSelectContext} MultiSelectContext */
	var MultiSelectContext = react.default.createContext([
		{
			clearButtonHasFocus: false,
			comboBoxOptions: [],
			focusedValueTagIndex: NaN,
			isOptionsExpanded: false,
			tagTemplate: null,
			multiSelectId: "default-context-value",
			onChange: () => {
				console.error("calling default MultiSelectContext onChange");
			},
			onClear: () => {
				console.error("calling default MultiSelectContext onChange");
			},
			optionTagClassNames: {},
			selectedValues: [],
			textInputHasFocus: false
		},
		() => {},
		null
	]);
	//#endregion
	//#region react/components/forms/MultiSelect/context/useMultiSelectContext.js
	/** @typedef { import('@utahdts/utah-design-system').MultiSelectContext} MultiSelectContextType */
	/** @returns {MultiSelectContextType} */
	function useMultiSelectContext() {
		return (0, react.useContext)(MultiSelectContext);
	}
	//#endregion
	//#region react/components/forms/ComboBox/context/ComboBoxContext.js
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxContext} ComboBoxContext */
	var ComboBoxContext = (0, react.createContext)([
		{
			filterValue: "",
			optionValueFocused: null,
			isFilterValueDirty: false,
			isOptionsExpanded: false,
			isValueClearedOnSelection: false,
			firstSelectableByEnter: false,
			onChange: () => {},
			options: [],
			optionsFiltered: [],
			optionsFilteredWithoutGroupLabels: [],
			registerOption: () => {},
			optionValueFocusedId: null,
			optionValueHighlighted: null,
			optionValueSelected: null,
			unregisterOption: () => {}
		},
		() => {
			console.error("calling default ComboBoxContext setter... you should probably setup a context provider before trying to use it.");
		},
		{ current: { textInput: null } }
	]);
	//#endregion
	//#region react/components/forms/ComboBox/context/ComboBoxContextProvider.jsx
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxContextNonStateRef} ComboBoxContextNonStateRef */
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
	/**
	* @template MutableRefObjectT
	* @typedef {import('react').MutableRefObject<MutableRefObjectT>} MutableRefObject
	*/
	/**
	* @template UpdaterT
	* @typedef {import('use-immer').Updater<UpdaterT>} Updater
	*/
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.comboBoxId
	* @param {string} [props.defaultValue]
	* @param {boolean} [props.isValueClearedOnSelection]
	* @param {boolean} [props.firstSelectableByEnter]
	* @param {((newValue: string) => void)} [props.onChange]
	* @param {(() => void)} [props.onClear]
	* @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function ComboBoxContextProvider({ children, defaultValue, isValueClearedOnSelection, firstSelectableByEnter, onChange, onClear, onKeyUp, value }) {
		const [, setMultiSelectContext] = useMultiSelectContext();
		const comboBoxImmerRef = (0, react.useRef)(null);
		const onChangeFormValue = (0, react.useCallback)(
			/** @param {string} newValue */
			(newValue) => {
				comboBoxImmerRef.current?.[1]((draftContext) => {
					draftContext.isFilterValueDirty = false;
				});
				if (onChange) onChange(newValue);
				else comboBoxImmerRef.current?.[1]((draftContext) => {
					draftContext.optionValueSelected = newValue;
					draftContext.filterValue = draftContext.options.find((option) => option.value === newValue)?.label || "";
				});
			},
			[onChange]
		);
		const comboBoxContextNonStateRef = (0, react.useRef)({
			currentOptionGroupId: "",
			textInput: null
		});
		const comboBoxImmer = (0, use_immer.useImmer)({
			filterValue: "",
			optionValueFocused: null,
			isFilterValueDirty: false,
			isOptionsExpanded: false,
			isValueClearedOnSelection: !!isValueClearedOnSelection,
			firstSelectableByEnter: !!firstSelectableByEnter,
			onChange: onChangeFormValue,
			onClear,
			onKeyUp,
			options: [],
			optionsFiltered: [],
			optionsFilteredWithoutGroupLabels: [],
			registerOption: (newOption) => {
				comboBoxImmer[1]((draftContext) => {
					const oldOption = draftContext.options.find((searchOption) => searchOption.value === newOption.value);
					if (oldOption) Object.assign(oldOption, newOption);
					else draftContext.options.push(newOption);
					draftContext.filterValue = draftContext.options.find((option) => option.value === draftContext.optionValueSelected)?.label ?? "";
				});
			},
			optionValueFocusedId: null,
			optionValueHighlighted: null,
			optionValueSelected: defaultValue ?? value ?? null,
			unregisterOption: (optionValue) => {
				comboBoxImmer[1]((draftContext) => {
					draftContext.options = draftContext.options.filter((option) => option.value !== optionValue);
				});
			}
		});
		const setComboBoxState = comboBoxImmer[1];
		comboBoxImmerRef.current = comboBoxImmer;
		const { filterValue, optionValueSelected, options, isFilterValueDirty, optionsFilteredWithoutGroupLabels } = comboBoxImmer[0];
		(0, react.useEffect)(() => {
			if (value !== void 0 && value !== comboBoxImmer[0].optionValueSelected) comboBoxImmer[1]((draftState) => {
				draftState.optionValueSelected = value;
				draftState.filterValue = draftState.options.find((option) => option.value === value)?.label ?? draftState.filterValue;
				draftState.isFilterValueDirty = false;
			});
		}, [
			value,
			comboBoxImmer,
			optionValueSelected
		]);
		(0, react.useEffect)(() => {
			if (isFilterValueDirty) {
				const filterValueLowerCase = (0, lodash_es.trim)(filterValue).toLocaleLowerCase();
				const isSelectedValueNew = filterValue === optionValueSelected && !options.find((option) => option.value === optionValueSelected);
				const filteredOptions = options.filter((option) => option.isGroupLabel || !filterValueLowerCase || isSelectedValueNew || option.labelLowerCase.includes(filterValueLowerCase));
				setComboBoxState((draftContextValue) => {
					draftContextValue.optionsFiltered = filteredOptions;
					draftContextValue.optionsFilteredWithoutGroupLabels = filteredOptions.filter((option) => !option.isGroupLabel && !option.isHidden);
				});
			} else setComboBoxState((draftContextValue) => {
				draftContextValue.optionValueHighlighted = null;
				draftContextValue.optionsFiltered = options;
				draftContextValue.optionsFilteredWithoutGroupLabels = options.filter((option) => !option.isGroupLabel && !option.isHidden);
			});
		}, [
			filterValue,
			optionValueSelected,
			options,
			isFilterValueDirty,
			setComboBoxState
		]);
		/** @type {[ComboBoxContextValue, Updater<ComboBoxContextValue>, MutableRefObject<ComboBoxContextNonStateRef>]} */
		const providerValue = (0, react.useMemo)(() => [...comboBoxImmer, comboBoxContextNonStateRef], [comboBoxImmer, comboBoxContextNonStateRef]);
		(0, react.useEffect)(() => {
			if (setMultiSelectContext) setMultiSelectContext((draftContext) => {
				draftContext.comboBoxOptions = options;
			});
		}, [options, setMultiSelectContext]);
		(0, react.useEffect)(() => {
			if (setMultiSelectContext) setMultiSelectContext((draftContext) => {
				draftContext.isOptionsExpanded = comboBoxImmer[0].isOptionsExpanded;
			});
		}, [comboBoxImmer, setMultiSelectContext]);
		(0, react.useEffect)(() => {
			comboBoxImmer[1]((draftContext) => {
				draftContext.onClear = onClear;
			});
		}, [onClear, comboBoxImmer]);
		(0, react.useEffect)(() => {
			if (firstSelectableByEnter && optionsFilteredWithoutGroupLabels.length > 0) setComboBoxState((draft) => {
				draft.optionValueHighlighted = optionsFilteredWithoutGroupLabels[0]?.value ?? null;
			});
			else setComboBoxState((draft) => {
				draft.optionValueHighlighted = null;
			});
		}, [
			firstSelectableByEnter,
			optionsFilteredWithoutGroupLabels,
			setComboBoxState
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxContext.Provider, {
			value: providerValue,
			children
		});
	}
	//#endregion
	//#region react/hooks/useDebounceFunc.js
	/**
	* !!!!! COMMON HOOK !!!!!
	*
	* When you change this hook, make sure to update it also in the stack-base repo:
	* https://github.com/utahdts/dtt-js-stack-base/tree/main/_REACT_/hooks/useDebounceFunc.js
	*
	* !!!!! COMMON HOOK !!!!!
	*/
	/**
	* Given a function, return another function that will prevent the given function
	* from being executed until the "delay" time has expired. It will fire the function
	* immediately and then have a cool down period until it fires again.
	* @param {(...args: any[]) => void} func the function that is called after the delay
	* @param {number} [delay] minimum time in milliseconds between invocations
	* @returns {(...args: any[]) => Promise<any[]>} invoke your func (eventually); returns a promise with invoked args when finally invoked
	*/
	function useDebounceFunc(func, delay = 1e3) {
		const lastInvocationRef = (0, react.useRef)(NaN);
		const lastVarArgsRef = (0, react.useRef)(null);
		const timeoutRef = (0, react.useRef)(NaN);
		(0, react.useEffect)(() => () => clearTimeout(timeoutRef.current), []);
		return (0, react.useCallback)((param) => {
			return new Promise((resolve) => {
				if (!lastInvocationRef.current || lastInvocationRef.current - (/* @__PURE__ */ new Date()).getTime() >= delay) {
					clearTimeout(timeoutRef.current);
					lastInvocationRef.current = (/* @__PURE__ */ new Date()).getTime();
					lastVarArgsRef.current = null;
					func(param);
				} else {
					lastVarArgsRef.current = param;
					lastInvocationRef.current = (/* @__PURE__ */ new Date()).getTime();
					clearTimeout(timeoutRef.current);
					timeoutRef.current = window.setTimeout(() => {
						func(lastVarArgsRef.current);
						lastVarArgsRef.current = null;
						lastInvocationRef.current = NaN;
						resolve(param);
					}, delay);
				}
			});
		}, [delay, func]);
	}
	//#endregion
	//#region react/components/forms/ComboBox/context/useComboBoxContext.js
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxContext} ComboBoxContextType */
	/** @returns {ComboBoxContextType} */
	function useComboBoxContext() {
		return (0, react.useContext)(ComboBoxContext);
	}
	//#endregion
	//#region react/components/forms/ComboBox/context/ComboBoxOptionGroupContext.js
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */
	var ComboBoxOptionGroupContext = (0, react.createContext)("");
	//#endregion
	//#region react/components/forms/ComboBox/context/useComboBoxOptionGroupContext.js
	/** @typedef { import('@utahdts/utah-design-system').ComboBoxOptionGroupContextValue} ComboBoxOptionGroupContextValue */
	/** @returns {ComboBoxOptionGroupContextValue} */
	function useComboBoxOptionGroupContext() {
		return (0, react.useContext)(ComboBoxOptionGroupContext);
	}
	//#endregion
	//#region react/components/forms/ComboBox/functions/isOptionGroupVisible.js
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */
	/**
	* @param {string | null} optionGroupId the id of this option group being checked, or null if not a group
	* @param {string} optionLabel the label of this option group being checked
	* @param {ComboBoxOptionType[]} optionsFiltered including group options that aren't removed from the filter but may not be visible
	* @param {string[]} selectedValues multi-select removes options that have been selected
	* @returns {boolean}
	*/
	function isOptionGroupVisible(optionGroupId, optionLabel, optionsFiltered, selectedValues) {
		return !optionGroupId || !optionsFiltered.length || optionsFiltered.filter((optionFiltered) => !selectedValues?.includes(optionFiltered.value)).some((optionFiltered) => optionFiltered.label !== optionLabel && optionFiltered.optionGroupId === optionGroupId);
	}
	//#endregion
	//#region react/components/forms/ComboBox/functions/moveComboBoxSelectionDown.js
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */
	/**
	* @param {import('immer').Draft<ComboBoxContextValue>} draftContext
	* @param {MultiSelectContextValue} multiSelectContext
	*/
	function moveComboBoxSelectionDown(draftContext, multiSelectContext) {
		const { optionsFiltered: optionsWithHiddenGroups } = draftContext;
		const optionsToUse = optionsWithHiddenGroups.filter((option) => !multiSelectContext?.selectedValues.includes(option.value) && isOptionGroupVisible((option.isGroupLabel ? option.optionGroupId : null) ?? null, option.label, optionsWithHiddenGroups, multiSelectContext.selectedValues));
		const selectionIndex = optionsToUse.findIndex((option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected));
		const nextIndex = (selectionIndex === -1 ? 0 : selectionIndex + 1) % optionsToUse.length;
		draftContext.optionValueHighlighted = optionsToUse[nextIndex]?.value ?? null;
		draftContext.optionValueFocused = optionsToUse[nextIndex]?.value ?? null;
		draftContext.isOptionsExpanded = true;
	}
	//#endregion
	//#region react/components/forms/ComboBox/functions/moveComboBoxSelectionUp.js
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */
	/**
	* @param {import('immer').Draft<ComboBoxContextValue>} draftContext
	* @param {HTMLInputElement | null} textInput
	* @param {MultiSelectContextValue} multiSelectContext
	*/
	function moveComboBoxSelectionUp(draftContext, textInput, multiSelectContext) {
		if (draftContext.isOptionsExpanded) {
			const { optionsFiltered: optionsWithHiddenGroups } = draftContext;
			const optionsToUse = optionsWithHiddenGroups.filter((option) => !multiSelectContext?.selectedValues.includes(option.value) && isOptionGroupVisible((option.isGroupLabel ? option.optionGroupId : null) ?? null, option.label, optionsWithHiddenGroups, multiSelectContext.selectedValues));
			const selectionIndex = optionsToUse.findIndex((option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected));
			const currentSelectionIndex = selectionIndex === -1 ? optionsToUse.length - 1 : selectionIndex - 1;
			if (currentSelectionIndex >= 0) {
				const newHighlightedValue = optionsToUse[currentSelectionIndex]?.value ?? null;
				draftContext.optionValueHighlighted = newHighlightedValue;
				draftContext.optionValueFocused = newHighlightedValue;
				document.querySelector(`[value="${newHighlightedValue}"]`)?.[0]?.focus();
			} else {
				draftContext.isOptionsExpanded = false;
				draftContext.optionValueHighlighted = null;
				draftContext.optionValueFocused = null;
				textInput?.focus();
			}
		}
	}
	//#endregion
	//#region react/components/forms/ComboBox/functions/selectComboBoxSelection.js
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
	/**
	* @param {import('immer').Draft<ComboBoxContextValue>} draftContext
	* @param {HTMLInputElement | null} textInput
	*/
	function selectComboBoxSelection(draftContext, textInput) {
		draftContext.optionValueFocused = null;
		if (draftContext.isValueClearedOnSelection) draftContext.filterValue = "";
		if (draftContext.isOptionsExpanded) {
			const selectedOption = draftContext.options.find((option) => option.value === (draftContext.optionValueHighlighted ?? draftContext.optionValueSelected));
			draftContext.isFilterValueDirty = false;
			draftContext.isOptionsExpanded = false;
			if (selectedOption) {
				const selectedOptionLabel = selectedOption.label;
				setTimeout(() => {
					textInput?.setSelectionRange(selectedOptionLabel.length, selectedOptionLabel.length);
					textInput?.focus();
				}, 10);
			}
		} else textInput?.focus();
	}
	//#endregion
	//#region react/components/forms/ComboBox/ComboBoxOption.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.identifiesWithOptionGroupId] some things like group labels are focusable in the list, but not filterable, this is their `id`
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isHidden] multi-select does not show options that are selected
	* @param {boolean} [props.isStatic] static options are always visible and not filterable
	* @param {string} props.label
	* @param {string} props.value
	* @returns {import('react').JSX.Element | null}
	*/
	function ComboBoxOption({ children, className, isDisabled, identifiesWithOptionGroupId, isStatic, isHidden, label, value, ...rest }) {
		const optionId = (0, react.useId)();
		const optionRef = (0, react.useRef)(null);
		const [multiSelectContext] = useMultiSelectContext();
		const [{ isOptionsExpanded, onChange, optionsFiltered, optionsFilteredWithoutGroupLabels, optionValueFocused, optionValueHighlighted, optionValueSelected, registerOption, unregisterOption }, setComboBoxContext, comboBoxContextNonStateRef] = useComboBoxContext();
		const optionGroupId = useComboBoxOptionGroupContext();
		const isVisible = !isHidden && isOptionGroupVisible(identifiesWithOptionGroupId ?? null, label, optionsFiltered, multiSelectContext.selectedValues) && (isStatic || optionsFiltered.find((optionNeedle) => optionNeedle.value === value));
		const isSelected = optionValueSelected !== "" && optionValueSelected !== null && optionValueSelected === value;
		const isHighlighted = optionValueHighlighted !== "" && optionValueHighlighted !== null && optionValueHighlighted === value;
		const onEnterKeyPress = useOnKeyUp("Enter", (0, react.useCallback)(() => {
			if (!isDisabled) {
				onChange(value);
				setComboBoxContext((draftContext) => selectComboBoxSelection(draftContext, comboBoxContextNonStateRef.current.textInput));
			}
		}, [
			isDisabled,
			onChange,
			value,
			setComboBoxContext,
			comboBoxContextNonStateRef
		]), true);
		const onCancelKeyPress = useOnKeyUp("Escape", (0, react.useCallback)(() => setComboBoxContext((draftCombBoxContext) => {
			draftCombBoxContext.isOptionsExpanded = false;
			draftCombBoxContext.optionValueFocused = null;
			draftCombBoxContext.optionValueFocusedId = null;
			comboBoxContextNonStateRef.current.textInput?.focus();
		}), [setComboBoxContext, comboBoxContextNonStateRef]));
		const onUpArrowPress = useOnKeyUp("ArrowUp", (0, react.useCallback)(() => setComboBoxContext((draftContext) => moveComboBoxSelectionUp(draftContext, comboBoxContextNonStateRef.current.textInput, multiSelectContext)), [
			comboBoxContextNonStateRef,
			multiSelectContext,
			setComboBoxContext
		]), true);
		const onDownArrowPress = useOnKeyUp("ArrowDown", (0, react.useCallback)(() => setComboBoxContext((draftContext) => moveComboBoxSelectionDown(draftContext, multiSelectContext)), [multiSelectContext, setComboBoxContext]), true);
		(0, react.useEffect)(() => {
			if (!isStatic) registerOption({
				isHidden,
				isGroupLabel: !!identifiesWithOptionGroupId,
				label,
				labelLowerCase: label.toLocaleLowerCase(),
				optionGroupId,
				value
			});
		}, [
			registerOption,
			unregisterOption,
			value,
			optionGroupId,
			label,
			identifiesWithOptionGroupId,
			isHidden,
			isStatic,
			comboBoxContextNonStateRef
		]);
		(0, react.useEffect)(() => (() => {
			if (!isStatic) unregisterOption(value);
		}), [
			isStatic,
			unregisterOption,
			value
		]);
		(0, react.useEffect)(() => {
			if (optionValueFocused === value) {
				if (optionRef.current !== document.activeElement) optionRef.current?.focus();
			} else if (optionRef.current === document.activeElement) optionRef.current?.blur();
		}, [optionValueFocused, value]);
		(0, react.useEffect)(() => {
			if (isOptionsExpanded && isSelected) optionRef.current?.scrollIntoView({ block: "nearest" });
		}, [isOptionsExpanded, isSelected]);
		return isVisible ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
			"aria-disabled": isDisabled,
			"aria-selected": optionValueSelected === value,
			"aria-setsize": optionsFilteredWithoutGroupLabels.length,
			id: optionId,
			className: joinClassNames(className, "combo-box-input__option", isDisabled && "combo-box-input__option--disabled", isSelected && "combo-box-input__option--selected", isHighlighted && "combo-box-input__option--highlighted", optionGroupId && "combo-box-input__option--in-group"),
			onClick: () => {
				if (!isDisabled) {
					onChange(value);
					setComboBoxContext((draftContext) => {
						draftContext.isFilterValueDirty = false;
						draftContext.isOptionsExpanded = false;
						draftContext.optionValueHighlighted = null;
						setTimeout(() => {
							comboBoxContextNonStateRef.current.textInput?.setSelectionRange(label.length, label.length);
						}, 0);
					});
				}
			},
			onBlur: () => setComboBoxContext((draftContext) => {
				if (draftContext.optionValueFocused === value) {
					draftContext.optionValueFocused = null;
					draftContext.optionValueFocusedId = null;
					draftContext.isOptionsExpanded = false;
				}
			}),
			onFocus: () => setComboBoxContext((draftContext) => {
				draftContext.optionValueFocused = value;
				draftContext.optionValueFocusedId = optionId;
				draftContext.optionValueHighlighted = value;
			}),
			onKeyDown: (e) => {
				if (e.key === "ArrowUp" || e.key === "ArrowDown") e.preventDefault();
			},
			onKeyUp: (e) => {
				onEnterKeyPress(e);
				onCancelKeyPress(e);
				onUpArrowPress(e);
				onDownArrowPress(e);
			},
			onMouseDown: (e) => e.preventDefault(),
			ref: optionRef,
			role: "option",
			tabIndex: isSelected && isOptionsExpanded ? 0 : -1,
			...rest,
			children: children ?? label
		}) : null;
	}
	//#endregion
	//#region react/components/forms/ComboBox/internal/CombBoxListBox.jsx
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry] if allowing custom entry, add the custom item if the list is empty; Must be a controlled component
	* @param {string} props.ariaLabelledById
	* @param {import('react').ReactNode | null} [props.children]
	* @param {HTMLElement | null} props.popupReferenceElement
	* @param {string} props.id
	* @param {HTMLElement | null} [props.portalTarget] Element to portal the dropdown into.
	*   Pass `document.body` (or any element outside CSS containment contexts) to fix
	*   misalignment caused by `container-type:inline-size` / `contain:layout` ancestors.
	*   Defaults to `null` (renders inline — original behaviour, safe for all existing apps).
	*   When a portalTarget is provided, Popper automatically switches to `strategy:'fixed'`
	*   so positions are computed in pure viewport coordinates.
	* @returns {import('react').JSX.Element}
	*/
	function CombBoxListBox({ allowCustomEntry, ariaLabelledById, children, id, popupReferenceElement, portalTarget = null }) {
		const [{ selectedValues }] = useMultiSelectContext();
		const { addPoliteMessage } = useAriaMessaging();
		const [{ filterValue, isOptionsExpanded, options, optionsFiltered, optionsFilteredWithoutGroupLabels, optionValueFocused, optionValueSelected, firstSelectableByEnter }, , comboBoxContextNonStateRef] = useComboBoxContext();
		const ulRef = (0, react.useRef)(null);
		const announcedArrowKeysRef = (0, react.useRef)(false);
		const { floatingStyles } = (0, _floating_ui_react_dom.useFloating)({
			elements: {
				reference: popupReferenceElement,
				floating: ulRef.current
			},
			middleware: [
				(0, _floating_ui_react_dom.offset)({
					mainAxis: 4,
					crossAxis: 0,
					alignmentAxis: 0
				}),
				(0, _floating_ui_react_dom.flip)(),
				(0, _floating_ui_react_dom.shift)()
			],
			open: isOptionsExpanded,
			strategy: portalTarget ? "fixed" : "absolute",
			placement: popupPlacement.BOTTOM,
			whileElementsMounted: _floating_ui_react_dom.autoUpdate
		});
		const lastMessageRef = (0, react.useRef)(null);
		const addPoliteMessageDebounced = useDebounceFunc((0, react.useCallback)((message) => {
			if (lastMessageRef.current !== message) {
				addPoliteMessage(message);
				lastMessageRef.current = message;
			}
		}, [addPoliteMessage]), 1500);
		(0, react.useEffect)(() => {
			const message = [];
			if (optionValueFocused || document.activeElement === comboBoxContextNonStateRef.current.textInput) {
				if (isOptionsExpanded && !announcedArrowKeysRef.current) announcedArrowKeysRef.current = true;
				const numGroups = optionsFiltered.filter((option) => option.isGroupLabel && isOptionGroupVisible(option.isGroupLabel ? option.optionGroupId ?? null : null, option.label, optionsFiltered, selectedValues)).length;
				if (numGroups) message.push(`${optionsFilteredWithoutGroupLabels.length} result${optionsFilteredWithoutGroupLabels.length === 1 ? "" : "s"} available in ${numGroups} group${numGroups === 1 ? "" : "s"}.`);
				else message.push(`${optionsFilteredWithoutGroupLabels.length} result${optionsFilteredWithoutGroupLabels.length === 1 ? "" : "s"} available.`);
				if (firstSelectableByEnter && optionsFilteredWithoutGroupLabels.length > 0) {
					const topOption = optionsFilteredWithoutGroupLabels[0];
					message.push(`Press enter to select ${topOption?.label} or use the down arrow to begin selecting.`);
				} else message.push("Use the down arrow key to begin selecting.");
				if (allowCustomEntry && filterValue && !options.some((option) => option.labelLowerCase === filterValue.toLocaleLowerCase())) message.push(`Press Enter to add ${filterValue} to the combo box list.`);
				addPoliteMessageDebounced(message.join(" "));
			}
		}, [
			isOptionsExpanded,
			optionsFilteredWithoutGroupLabels,
			filterValue,
			firstSelectableByEnter
		]);
		const listBox = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
			id,
			"aria-labelledby": ariaLabelledById,
			className: joinClassNames("combo-box-input__list-box", portalTarget && "combo-box-input__list-box--portaled", !isOptionsExpanded && "visually-hidden"),
			ref: ulRef,
			role: "listbox",
			style: {
				...floatingStyles,
				minWidth: popupReferenceElement?.scrollWidth
			},
			tabIndex: -1,
			children: [
				children,
				!optionsFilteredWithoutGroupLabels.length && !allowCustomEntry ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
					isStatic: true,
					isDisabled: true,
					label: "",
					value: "",
					children: "No results found"
				}) : null,
				!optionsFilteredWithoutGroupLabels.length && allowCustomEntry && optionValueSelected !== filterValue ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
					isStatic: true,
					isDisabled: true,
					label: "",
					value: "",
					children: "Press enter to add custom item"
				}) : null
			]
		});
		if (portalTarget) return (0, react_dom.createPortal)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "utah-design-system",
			style: { display: "contents" },
			children: listBox
		}), portalTarget);
		return listBox;
	}
	//#endregion
	//#region react/hooks/useRememberCursorPosition.js
	/**
	* sometimes an input's onchange is asynchronous
	* because the state doesn't change immediately, the input gets recreated later
	* this causes the cursor position to be lost and the cursor jumps to the end of the input
	* this hook remembers the cursor position between updates so that it doesn't jump
	* after a state change.
	* Make sure to call the returned onChange function when the input's value changes.
	* @param {import('react').RefObject<HTMLElement | null>} ref
	* @param {string} value
	* @returns {import('react').ChangeEventHandler<HTMLElement> }
	*/
	function useRememberCursorPosition(ref, value) {
		const [cursor, setCursor] = (0, use_immer.useImmer)(NaN);
		(0, react.useEffect)(() => {
			ref.current?.setSelectionRange(cursor, cursor);
		}, [
			ref,
			cursor,
			value
		]);
		return (0, react.useCallback)((e) => {
			setCursor(e.target.selectionStart ?? NaN);
		}, [setCursor]);
	}
	//#endregion
	//#region react/components/forms/TextInput.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {import('react').MutableRefObject<HTMLButtonElement | null>} [props.clearIconRef]
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {boolean} [props.isClearable] should the clearable "X" icon be shown; is auto set to true if onClear is passed in
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isInvalid]
	* @param {boolean} [props.isLabelSkipped] highly recommended to not skip the label; instead, hide it; multiselect skips label - it renders its own
	* @param {boolean} [props.isRequired]
	* @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] can be omitted to be uncontrolled
	* @param {import('react').KeyboardEventHandler<HTMLInputElement>} [props.onKeyUp]
	* @param {import('react').UIEventHandler<HTMLInputElement>} [props.onClear]
	* @param {string} [props.placeholder]
	* @param {import('react').ReactNode} [props.rightContent] custom content to put to the right of the text input
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function TextInput({ className, clearIconRef, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isInvalid, isLabelSkipped, isRequired, isShowingClearableIcon, label, labelClassName, name, onChange, onClear, onKeyUp, placeholder, rightContent, value, wrapperClassName, ...rest }) {
		const inputRef = (0, react.useRef)(null);
		const [multiSelectContext] = useMultiSelectContext();
		const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || "");
		const { addPoliteMessage } = useAriaMessaging();
		const showClearIcon = isShowingClearableIcon ?? !!((isClearable || onClear) && value);
		const clearInput = (0, react.useCallback)(
			/** @param {import('react').UIEvent<HTMLInputElement>} e */
			(e) => {
				if (onClear) onClear(e);
				else if (inputRef.current) inputRef.current.value = "";
				addPoliteMessage(`${label} input was cleared`);
				inputRef.current?.focus();
			},
			[
				addPoliteMessage,
				onClear,
				label
			]
		);
		const checkKeyPressed = (0, react.useCallback)(
			/** @param {import('react').KeyboardEvent<HTMLInputElement>} e */
			(e) => {
				if (e.key === "Escape" && showClearIcon) clearInput(e);
			},
			[clearInput, showClearIcon]
		);
		const onChangeCallback = (0, react.useCallback)(
			/** @param {import('react').ChangeEvent<HTMLInputElement>} e */
			(e) => {
				onChangeSetCursorPosition(e);
				onChange?.(e);
			},
			[onChangeSetCursorPosition, onChange]
		);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper", "input-wrapper--text-input", wrapperClassName),
			ref: innerRef,
			children: [
				isLabelSkipped ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					className: labelClassName ?? void 0,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "text-input__inner-wrapper",
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							"aria-describedby": errorMessage ? `${id}-error` : void 0,
							"aria-invalid": !!errorMessage || isInvalid,
							className: joinClassNames(className, showClearIcon ? "text-input--clear-icon-visible" : null, multiSelectContext.multiSelectId === "default-context-value" ? null : "inside-invalid-wrapper"),
							defaultValue,
							disabled: isDisabled,
							id,
							name: name || id,
							onChange: onChange && onChangeCallback,
							onKeyUp: onKeyUp || checkKeyPressed,
							placeholder: placeholder || void 0,
							ref: inputRef,
							required: isRequired,
							type: "text",
							value,
							...rest
						}),
						showClearIcon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
							className: joinClassNames("text-input__clear-button icon-button--borderless icon-button--small1x"),
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: "utds-icon-before-x-icon",
								"aria-hidden": "true"
							}),
							innerRef: clearIconRef,
							isDisabled,
							onClick: clearInput,
							title: "Clear input"
						}) : null,
						rightContent
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id
				})
			]
		});
	}
	//#endregion
	//#region react/components/forms/ComboBox/functions/clearComboBoxSelection.js
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxContextValue} ComboBoxContextValue */
	/**
	* @param {import('immer').Draft<ComboBoxContextValue>} draftContext
	*/
	function clearComboBoxSelection(draftContext) {
		draftContext.filterValue = "";
		draftContext.isFilterValueDirty = false;
		draftContext.isOptionsExpanded = false;
		draftContext.optionValueHighlighted = "";
		draftContext.optionValueSelected = "";
	}
	//#endregion
	//#region react/components/forms/ComboBox/internal/ComboBoxTextInput.jsx
	/** @typedef {import('@utahdts/utah-design-system').EventAction} EventAction */
	/**
	* @template MutableRefT
	* @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
	*/
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry]
	* @param {string} [props.className]
	* @param {string} props.comboBoxListId
	* @param {string} [props.errorMessage]
	* @param {(isOptionsExpanded: boolean) => React.ReactNode} [props.iconCallback] Can provide a custom icon to show for the popup icon
	* @param {string} props.id
	* @param {MutableRef<HTMLInputElement | null>} [props.innerRef]
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isInvalid]
	* @param {boolean} [props.isRequired]
	* @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {import('react').UIEventHandler} [props.onBlur]
	* @param {EventAction} [props.onClear]
	* @param {(customValue: string) => void} [props.onCustomEntry]
	* @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp] return true if the key press was handled by this handler
	* @param {string} [props.placeholder]
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function ComboBoxTextInput({ allowCustomEntry, className, comboBoxListId, errorMessage, iconCallback, id, innerRef: draftInnerRef, isClearable, isInvalid, isShowingClearableIcon, isDisabled, onBlur, onClear, onCustomEntry, onKeyUp, placeholder, ...rest }) {
		const [multiSelectContext, , multiSelectContextRefs] = useMultiSelectContext();
		const [{ filterValue, isOptionsExpanded, onClear: onClearComboBoxContext, onKeyUp: onKeyUpFromContext, onChange, options, optionValueFocusedId, optionValueSelected, optionValueHighlighted, optionsFilteredWithoutGroupLabels }, setComboBoxContext, comboBoxContextNonStateRef] = useComboBoxContext();
		const onCancelKeyPress = useOnKeyUp("Escape", (0, react.useCallback)(() => isClearable && setComboBoxContext(clearComboBoxSelection), [isClearable, setComboBoxContext]));
		const onUpArrowPress = useOnKeyUp("ArrowUp", (0, react.useCallback)(() => setComboBoxContext((draftContext) => moveComboBoxSelectionUp(draftContext, comboBoxContextNonStateRef.current.textInput, multiSelectContext)), [
			comboBoxContextNonStateRef,
			multiSelectContext,
			setComboBoxContext
		]));
		const onDownArrowPress = useOnKeyUp("ArrowDown", (0, react.useCallback)(() => {
			if (multiSelectContext.selectedValues.length !== options.filter((option) => !option.isGroupLabel).length) setComboBoxContext((draftContext) => moveComboBoxSelectionDown(draftContext, multiSelectContext));
		}, [
			multiSelectContext,
			options,
			setComboBoxContext
		]));
		const onEnterPress = useOnKeyUp("Enter", (0, react.useCallback)(
			/** @param {React.KeyboardEvent<HTMLInputElement>} e */
			(e) => {
				/** @type {HTMLInputElement} */
				const { target } = e;
				const currentTextInputValue = target.value;
				const currentTextInputValueLowerCase = currentTextInputValue.toLowerCase();
				if (!options.find((option) => option.labelLowerCase === currentTextInputValueLowerCase) && allowCustomEntry) {
					onCustomEntry?.(currentTextInputValue);
					onChange(currentTextInputValue);
					setComboBoxContext((draftContext) => {
						draftContext.isOptionsExpanded = false;
					});
					return;
				}
				if (optionValueHighlighted) {
					const selectedOption = optionsFilteredWithoutGroupLabels.find((opt) => opt.value === optionValueHighlighted);
					if (selectedOption) {
						onChange(selectedOption.value);
						setComboBoxContext((draftContext) => {
							draftContext.isOptionsExpanded = false;
							draftContext.optionValueSelected = selectedOption.value;
							draftContext.filterValue = selectedOption.label;
							draftContext.isFilterValueDirty = false;
						});
						e.preventDefault();
					}
				}
			},
			[
				allowCustomEntry,
				options,
				setComboBoxContext,
				onChange,
				onCustomEntry,
				optionValueHighlighted,
				optionsFilteredWithoutGroupLabels
			]
		));
		const clearIconRef = (0, react.useRef)(null);
		const onKeyUpPreviousValue = (0, react.useRef)("");
		(0, react.useEffect)(() => {
			if (!optionValueSelected) setComboBoxContext((draftContext) => {
				draftContext.filterValue = "";
			});
		}, [optionValueSelected, setComboBoxContext]);
		const textInputRef = (0, react.useRef)(null);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextInput, {
			"aria-activedescendant": optionValueFocusedId,
			"aria-autocomplete": "list",
			"aria-controls": comboBoxListId,
			"aria-expanded": isOptionsExpanded,
			"aria-haspopup": "listbox",
			"aria-owns": comboBoxListId,
			className: joinClassNames("combo-box-input", className),
			clearIconRef,
			id,
			innerRef: (ref) => {
				const input = ref?.querySelector("input") ?? null;
				textInputRef.current = input;
				comboBoxContextNonStateRef.current.textInput = input;
				if (multiSelectContextRefs) multiSelectContextRefs.current.textInput = input;
				if (draftInnerRef) if ((0, lodash_es.isFunction)(draftInnerRef)) draftInnerRef(input);
				else draftInnerRef.current = input;
			},
			isClearable,
			isDisabled,
			isInvalid: !!errorMessage || isInvalid,
			isShowingClearableIcon,
			errorMessage,
			onBlur: (e) => {
				onBlur?.(e);
				onKeyUpPreviousValue.current = filterValue;
				setTimeout(() => {
					if (clearIconRef.current !== document.activeElement) setComboBoxContext((draftContext) => {
						if (!draftContext.optionValueFocused && !document.activeElement?.classList.contains("combo-box-input__list-box") && !document.activeElement?.classList.contains("multi-select__chevron")) {
							draftContext.filterValue = options.find((option) => option.value === optionValueSelected)?.label ?? optionValueSelected ?? "";
							draftContext.isFilterValueDirty = false;
							draftContext.isOptionsExpanded = false;
						}
					});
				}, 1);
			},
			onChange: (e) => {
				const newValue = e.target.value;
				setComboBoxContext((draftContext) => {
					draftContext.filterValue = newValue;
					draftContext.isFilterValueDirty = true;
				});
			},
			onClear: isClearable ? ((e) => {
				if (onClear) onClear(e);
				else if (onClearComboBoxContext) {
					onClearComboBoxContext();
					setComboBoxContext((draftContext) => {
						draftContext.filterValue = "";
						draftContext.isFilterValueDirty = false;
					});
				} else setComboBoxContext((draftContext) => {
					draftContext.filterValue = "";
					draftContext.isFilterValueDirty = false;
					draftContext.isOptionsExpanded = false;
					draftContext.optionValueHighlighted = null;
					draftContext.optionValueSelected = null;
				});
			}) : void 0,
			onClick: () => {
				setComboBoxContext((draftContext) => {
					draftContext.isOptionsExpanded = true;
				});
			},
			onKeyDown: (e) => e.stopPropagation(),
			onKeyUp: (e) => {
				if (!onKeyUp?.(e, onKeyUpPreviousValue.current) && !onKeyUpFromContext?.(e, onKeyUpPreviousValue.current)) {
					if (![
						onCancelKeyPress(e),
						onUpArrowPress(e),
						onDownArrowPress(e),
						allowCustomEntry && onEnterPress(e)
					].some(lodash_es.identity)) {
						if (![
							"Alt",
							"Control",
							"Meta",
							"Tab",
							"Shift",
							"ShiftLeft",
							"ShiftRight"
						].includes(e.key)) setComboBoxContext((draftContext) => {
							if (draftContext.filterValue) draftContext.isOptionsExpanded = true;
							else draftContext.isFilterValueDirty = false;
						});
					}
				}
				onKeyUpPreviousValue.current = filterValue;
			},
			placeholder,
			rightContent: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
				className: "combo-box-input__chevron icon-button--borderless icon-button--small1x",
				icon: iconCallback?.(isOptionsExpanded) ?? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: isOptionsExpanded ? "utds-icon-before-chevron-up" : "utds-icon-before-chevron-down"
				}),
				isDisabled,
				onClick: (e) => {
					e.stopPropagation();
					setComboBoxContext((draftContext) => {
						draftContext.isOptionsExpanded = !draftContext.isOptionsExpanded;
						textInputRef.current?.focus();
					});
				},
				title: "Toggle popup menu",
				onMouseDown: (e) => e.preventDefault()
			}),
			role: "combobox",
			value: filterValue,
			...rest
		}) });
	}
	//#endregion
	//#region react/components/forms/ComboBox/ComboBox.jsx
	/** @typedef {import('@utahdts/utah-design-system').Event} Event */
	/**
	* @template MutableRefT
	* @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
	*/
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry] can the user type in their own items to add to the list?
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {(isOptionsExpanded: boolean) => React.ReactNode} [props.iconCallback] Can provide a custom icon to show for the popup icon
	* @param {string} props.id
	* @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isInvalid]
	* @param {boolean} [props.isRequired]
	* @param {boolean} [props.isShowingClearableIcon] if `isClearable` is true, this can override the logic for showing the clearable `x`
	* @param {boolean} [props.isValueClearedOnSelection] after selection, is the value cleared so it appears to not be selected (multi-select uses this)
	* @param {boolean} [props.isLabelSkipped] when true, the internal text input skips rendering its label
	* @param {boolean} [props.isWrapperSkipped] wrapper div is optional
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {((newValue: string) => void)} [props.onChange]
	* @param {() => void} [props.onClear]
	* @param {(customValue: string) => void} [props.onCustomEntry] caller is responsible for adding options when they are added
	* @param {import('react').UIEventHandler} [props.onBlur]
	* @param {(e: Event, currentFilterValue: string) => boolean} [props.onKeyUp]
	* @param {import('react').UIEventHandler} [props.onFocus]
	* @param {string} [props.placeholder]
	* @param {HTMLElement | null} [props.popupContentRef] for multi-select the popup relates to the multi-select wrapper, not the input
	* @param {HTMLElement | null} [props.portalTarget] Element to portal the dropdown into.
	*   Pass `document.body` (or any element outside CSS containment contexts) to fix
	*   misalignment caused by `container-type:inline-size` / `contain:layout` ancestors.
	*   Defaults to `null` (renders inline — original behaviour, safe for all existing apps).
	* @param {import('react').ReactNode} [props.tagChildren]
	* @param {string} [props.textInputClassName] className to put on the TextInput
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @param {boolean} [props.firstSelectableByEnter] if true, the first option will be highlighted by default and selectable by pressing Enter
	* @returns {import('react').JSX.Element}
	*/
	function ComboBox({ allowCustomEntry, children, className, defaultValue, errorMessage, iconCallback, id, innerRef: draftInnerRef, isClearable, isDisabled, isInvalid, isRequired, isShowingClearableIcon, label, labelClassName, name, onChange, onCustomEntry, onClear, onKeyUp, placeholder, popupContentRef, portalTarget = null, isValueClearedOnSelection, isWrapperSkipped, tagChildren, textInputClassName, value, wrapperClassName, firstSelectableByEnter, ...rest }) {
		const comboBoxListId = `${id}__${(0, react.useId)()}`;
		const [contentRefState, setContentRefState] = (0, react.useState)(null);
		const child = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("combo-box-input__inner-wrapper", className),
			children: [
				tagChildren,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxTextInput, {
					allowCustomEntry,
					className: textInputClassName,
					comboBoxListId,
					errorMessage,
					iconCallback,
					id,
					innerRef: (ref) => {
						setContentRefState(ref);
					},
					isClearable,
					isInvalid: !!errorMessage || isInvalid,
					isShowingClearableIcon,
					isDisabled,
					isRequired,
					label,
					labelClassName,
					name,
					onCustomEntry,
					placeholder,
					value,
					...rest
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CombBoxListBox, {
					allowCustomEntry,
					id: comboBoxListId,
					ariaLabelledById: id,
					popupReferenceElement: popupContentRef ?? contentRefState ?? null,
					portalTarget,
					children
				})
			]
		});
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxContextProvider, {
			comboBoxId: id,
			defaultValue,
			firstSelectableByEnter,
			isValueClearedOnSelection,
			onChange,
			onClear,
			onKeyUp,
			value,
			children: isWrapperSkipped ? child : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: joinClassNames("input-wrapper input-wrapper--combo-box", wrapperClassName),
				ref: draftInnerRef,
				children: child
			})
		});
	}
	//#endregion
	//#region react/components/forms/ComboBox/context/ComboBoxOptionGroupContextProvider.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.optionGroupId
	* @returns {import('react').JSX.Element}
	*/
	function ComboBoxOptionGroupContextProvider({ children, optionGroupId }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOptionGroupContext.Provider, {
			value: optionGroupId,
			children
		});
	}
	//#endregion
	//#region react/components/forms/ComboBox/ComboBoxOptionGroup.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} props.label
	* @returns {import('react').JSX.Element}
	*/
	function ComboBoxOptionGroup({ children, className, label }) {
		const optionGroupId = (0, react.useId)();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(ComboBoxOptionGroupContextProvider, {
			optionGroupId,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
				className: joinClassNames("combo-box-input__group-wrapper", "combo-box-input__group-title", className),
				identifiesWithOptionGroupId: optionGroupId,
				isDisabled: true,
				label,
				value: `${label}--group`,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label })
			}), children]
		});
	}
	//#endregion
	//#region react/hooks/useRefAlways.js
	/**
	* always sets ref to the given value
	* @template UseRefAlwaysT
	* @param {UseRefAlwaysT} value
	* @returns {import('react').MutableRefObject<UseRefAlwaysT>}
	*/
	function useRefAlways(value) {
		const ref = (0, react.useRef)(value);
		ref.current = value;
		return ref;
	}
	//#endregion
	//#region react/hooks/useInterval.js
	/**
	* @typedef UseIntervalOptions {
	*  @property {boolean} [isDisabled] even though have delay and callback, still don't fire the interval
	* }
	*/
	/**
	* @param {() => void} callback function to call after delay expires
	* @param {number} delay how long to wait before firing callback
	* @param {UseIntervalOptions} [options]
	*/
	function useInterval(callback, delay, options) {
		const savedCallbackRef = useRefAlways(callback);
		(0, react.useEffect)(() => {
			let intervalId = NaN;
			if (!Number.isNaN(delay) && !options?.isDisabled) intervalId = setInterval(savedCallbackRef.current, delay);
			return () => clearInterval(intervalId);
		}, [delay, options?.isDisabled]);
	}
	//#endregion
	//#region react/components/forms/DateInput.jsx
	/**
	* @param {HTMLDivElement | null} myWrapper
	* @returns {boolean}
	*/
	function isActiveElementInsideCalendarInput(myWrapper) {
		return document.activeElement?.closest(".input-wrapper--date-input") === myWrapper;
	}
	/**
	* @param {object} props
	* @param {string} [props.ariaLabel]
	* @param {string} [props.className]
	* @param {string} [props.dateFormat] use `date-fns` modifiers for formatting the date; used for CalendarInput
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {boolean} [props.hasCalendarPopup] defaults to true so that the calendar popup opens; otherwise entry is only textual keyboard
	* @param {string} props.id
	* @param {import('react').MutableRefObject<HTMLDivElement | null>} [props.innerRef]
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name] defaults to id if not provided
	* @param {(newValue: string) => void} [props.onChange] e => {}; can be omitted for uncontrolled
	* @param {() => void} [props.onClear]
	* @param {(e: React.KeyboardEvent<HTMLInputElement>) => void} [props.onKeyUp]
	* @param {string} [props.placeholder]
	* @param {boolean} [props.showCalendarTodayButton] on the calendar popup, should the `today` button be shown
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function DateInput({ ariaLabel, className, dateFormat, defaultValue, errorMessage, hasCalendarPopup = true, id, innerRef: draftInnerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, onKeyUp, placeholder, showCalendarTodayButton, value, wrapperClassName, ...rest }) {
		const wrapperInternalRef = (0, react.useRef)(null);
		const [isCalendarPopupOpen, setIsCalendarPopupOpen] = (0, use_immer.useImmer)(false);
		const popupReferenceElementRef = (0, react.useRef)(null);
		const calendarRef = (0, react.useRef)(null);
		const { floatingStyles } = (0, _floating_ui_react_dom.useFloating)({
			elements: {
				reference: popupReferenceElementRef.current,
				floating: calendarRef.current
			},
			middleware: [
				(0, _floating_ui_react_dom.offset)({
					mainAxis: 4,
					crossAxis: 0,
					alignmentAxis: 0
				}),
				(0, _floating_ui_react_dom.flip)(),
				(0, _floating_ui_react_dom.shift)()
			],
			open: isCalendarPopupOpen,
			placement: popupPlacement.BOTTOM,
			whileElementsMounted: _floating_ui_react_dom.autoUpdate
		});
		useInterval(() => {
			if (!isActiveElementInsideCalendarInput(wrapperInternalRef.current)) setIsCalendarPopupOpen(false);
		}, 250, { isDisabled: !isCalendarPopupOpen });
		const onDownArrowPress = useOnKeyUp("ArrowDown", (0, react.useCallback)(() => setIsCalendarPopupOpen(true), []), true);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("input-wrapper input-wrapper--date-input", wrapperClassName),
			ref: (ref) => {
				if (draftInnerRef) draftInnerRef.current = ref;
				wrapperInternalRef.current = ref;
			},
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "date-input__inner-wrapper",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextInput, {
					"aria-label": joinClassNames(ariaLabel, "Press down arrow to open a calendar picker"),
					className: joinClassNames(className, "date-input"),
					defaultValue,
					errorMessage,
					id,
					innerRef: popupReferenceElementRef,
					isClearable,
					isDisabled,
					isRequired,
					label,
					labelClassName,
					name,
					onChange: (e) => onChange?.(e.target.value),
					onClear: isClearable ? onClear : void 0,
					onKeyUp: (e) => {
						onDownArrowPress(e);
						onKeyUp?.(e);
					},
					placeholder,
					value: value ?? "",
					rightContent: hasCalendarPopup ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						"aria-hidden": "true",
						className: "date-input__calendar-icon icon-button--borderless icon-button--small",
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-calendar ",
							"aria-hidden": "true"
						}),
						isDisabled,
						onClick: (e) => {
							e.stopPropagation();
							setIsCalendarPopupOpen((isOpen) => {
								if (isOpen) (popupReferenceElementRef.current?.querySelector("input[type=\"text\"]"))?.focus();
								return !isOpen;
							});
						},
						title: "Open popup calendar",
						onMouseDown: (e) => e.preventDefault(),
						onFocus: () => setIsCalendarPopupOpen(false)
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: joinClassNames("date-input__calendar-icon date-input__icon-static", isDisabled && "date-input__calendar-icon--is-disabled"),
						onMouseDown: (e) => {
							e.preventDefault();
							popupReferenceElementRef.current?.querySelector("input")?.focus();
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-calendar ",
							"aria-hidden": "true"
						})
					}),
					onBlur: () => {
						setTimeout(() => {
							if (!isActiveElementInsideCalendarInput(wrapperInternalRef.current)) setIsCalendarPopupOpen(false);
						}, 0);
					},
					onClick: () => setIsCalendarPopupOpen(true),
					...rest
				}) }), hasCalendarPopup ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: joinClassNames("date-input__popup", isCalendarPopupOpen ? "" : "visually-hidden"),
					ref: calendarRef,
					style: {
						...floatingStyles,
						minWidth: popupReferenceElementRef.current?.offsetWidth
					},
					onKeyUp: (e) => {
						if (e.key === "Escape") setIsCalendarPopupOpen(false);
					},
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CalendarInput, {
						dateFormat,
						label,
						labelClassName: "visually-hidden",
						isDisabled,
						isHidden: !isCalendarPopupOpen,
						onChange: (newValue) => {
							onChange?.(newValue);
							setIsCalendarPopupOpen(false);
							(popupReferenceElementRef.current?.querySelector("input[type=\"text\"]"))?.focus();
						},
						id: `calendar-input__${id}`,
						shouldSetFocusOnMount: true,
						showTodayButton: showCalendarTodayButton,
						value
					})
				}) : null]
			})
		});
	}
	//#endregion
	//#region react/components/forms/FileInput.jsx
	/**
	* @param {object} props
	* @param {string} [props.acceptedFileTypes]
	* @param {(file: File, removeFile: (file: File, event?: import('react').MouseEvent<HTMLButtonElement, MouseEvent> | null) => void) => React.ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.errorMessage]
	* @param {string} [props.hint]
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {boolean} [props.multiple]
	* @param {string} [props.name]
	* @param {(files: FileList | null, event: import('react').ChangeEvent<HTMLInputElement> | import('react').MouseEvent<HTMLButtonElement, MouseEvent> | null | undefined) => void} [props.onChange]
	* @param {FileList} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function FileInput({ acceptedFileTypes, children, className, errorMessage, hint, id, innerRef, isDisabled, isRequired, label, multiple, name, onChange, value }) {
		const { addPoliteMessage } = useAriaMessaging();
		const lf = new Intl.ListFormat("en");
		const [isDragged, setDragged] = (0, use_immer.useImmer)(false);
		const [files, setFiles] = (0, use_immer.useImmer)(value || null);
		const inputRef = (0, react.useRef)(null);
		const checkFiles = (0, react.useCallback)((filesList) => {
			let allowed = true;
			if (acceptedFileTypes && files) {
				const types = acceptedFileTypes.split(/[,/]/).map((type) => type.trim().split(".").join(""));
				[...filesList || []].forEach((file) => {
					const fileType = /\.[0-9a-z]+$/i.exec(file.name)?.[0].split(".").join("");
					if (fileType && !types.includes(fileType)) {
						allowed = false;
						addPoliteMessage("File type not accepted.");
					}
				});
			}
			return allowed;
		}, [acceptedFileTypes]);
		const currentOnChange = (0, react.useCallback)((event) => {
			if (checkFiles(inputRef.current?.files)) {
				onChange?.(inputRef.current?.files || null, event);
				setFiles(inputRef.current?.files || null);
			}
		}, [acceptedFileTypes]);
		const removeFile = (0, react.useCallback)((file, event) => {
			const currentFiles = [...inputRef.current?.files || []];
			const fileIndex = currentFiles.findIndex((item) => (0, lodash_es.isEqual)(file, item));
			if (fileIndex !== -1) {
				currentFiles.splice(fileIndex, 1);
				const dataTransfer = new DataTransfer();
				currentFiles.forEach((item) => dataTransfer.items.add(item));
				if (inputRef.current) inputRef.current.files = dataTransfer.files;
				currentOnChange(event);
			}
		}, [currentOnChange]);
		(0, react.useEffect)(() => {
			if (files?.length) addPoliteMessage(`You have selected the file${files.length > 1 ? "s" : ""}: ${lf.format([...files].map((item) => item.name))}.`);
			else addPoliteMessage("No file selected.");
		}, [files]);
		let ariaDescribedBy = "";
		if (errorMessage) ariaDescribedBy = `${id}-error`;
		else if (hint) ariaDescribedBy = `${id}-hint`;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper", className),
			ref: innerRef,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				hint ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "info-box file-input__info-box my-spacing-xs",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "info-box__content",
						id: `hint__${id}`,
						children: hint
					})
				}) : null,
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: joinClassNames("file-input__box", isDragged ? "file-input__box--dragged" : "", isDisabled ? "file-input__box--disabled" : ""),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: "file-input__safari" }),
						!files?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "file-input__instructions",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
								"Drag ",
								multiple ? "files" : "a file",
								" here or click to upload"
							] })
						}) : "",
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							accept: acceptedFileTypes,
							"aria-describedby": ariaDescribedBy,
							disabled: isDisabled,
							id,
							multiple,
							name: name || id,
							onChange: currentOnChange,
							onDragEnter: () => setDragged(true),
							onDragLeave: () => setDragged(false),
							onDrop: () => setDragged(false),
							ref: inputRef,
							type: "file"
						}),
						files?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: "file-input__file-selected",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-center",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: "font-bold mr-spacing",
										children: [
											files.length,
											" file",
											files.length > 1 ? "s" : "",
											" selected"
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["Change file", files.length > 1 ? "s" : ""] })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("hr", {}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: "file-input__file-list flex-wrap",
									children: [...files].map((file) => (0, lodash_es.isFunction)(children) ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: children(file, removeFile) }, file.name) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tag, {
										clearMessage: `Remove file: ${file.name}.`,
										isDisabled,
										onClear: (event) => removeFile(file, event),
										children: file.name
									}, file.name))
								})
							]
						}) : ""
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id
				})
			]
		});
	}
	//#endregion
	//#region react/components/forms/Form.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @returns {import('react').JSX.Element}
	*/
	function Form({ children, className, ...rest }) {
		const formId = (0, react.useId)();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("form", {
			className: joinClassNames("form", className),
			id: `form-${formId}`,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectClearIcon.jsx
	/**
	* @param {object} props
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @returns {import('react').JSX.Element | null}
	*/
	function MultiSelectClearIcon({ isClearable, isDisabled }) {
		const [multiSelectContextValue, setMultiSelectContextValue] = useMultiSelectContext();
		return isClearable && multiSelectContextValue.selectedValues.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
			className: joinClassNames("multi-select__clear-button icon-button--borderless icon-button--small1x"),
			icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "utds-icon-before-x-icon",
				"aria-hidden": "true"
			}),
			isDisabled,
			onClick: (e) => {
				e.stopPropagation();
				multiSelectContextValue.onClear();
			},
			title: "Clear all selected values",
			onFocus: () => setMultiSelectContextValue((draftContext) => {
				draftContext.clearButtonHasFocus = true;
			}),
			onBlur: () => setMultiSelectContextValue((draftContext) => {
				draftContext.clearButtonHasFocus = false;
			})
		}) : null;
	}
	//#endregion
	//#region react/components/forms/MultiSelect/functions/removeSelectedOption.jsx
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */
	/**
	* Ick, so many parameters...
	* @param {MultiSelectContextValue} draftContext the context for updating state
	* @param {(message: string) => void} addPoliteMessage accessibility announcer
	* @param {number} selectedValueIndex the index of the tag being deleted
	* @param {ComboBoxOptionType} selectedOption the option being removed
	* @param {import('react').MutableRefObject<MultiSelectContextNonStateRef> | null} multiSelectContextNonStateRef
	*/
	function removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, multiSelectContextNonStateRef) {
		draftContext.selectedValues.splice(selectedValueIndex, 1);
		addPoliteMessage(`Removed ${selectedOption?.label}`);
		if (selectedValueIndex >= draftContext.selectedValues.length) {
			draftContext.focusedValueTagIndex = NaN;
			multiSelectContextNonStateRef?.current.comboBoxDivElement?.querySelector(".combo-box-input")?.focus();
		}
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectTagWrapper.jsx
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */
	/**
	* wraps a div around a tag to perform common functionality like left/right arrows, backspace
	* focusing, etc. Both tag templated and normal selected option tags are wrapped in this.
	* @param {object} props
	* @param {import('react').ReactNode} props.children the actual tag
	* @param {ComboBoxOptionType} props.selectedOption the selected option's details
	* @param {number} props.selectedValueIndex the index of this selected value in the selected values list
	* @returns {import('react').JSX.Element | null}
	*/
	function MultiSelectTagWrapper({ children, selectedOption, selectedValueIndex }) {
		const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
		const { addPoliteMessage } = useAriaMessaging();
		(0, react.useLayoutEffect)(() => {
			const tagWrapper = document.activeElement?.closest(".tag__wrapper");
			if ((multiSelectContext.focusedValueTagIndex || multiSelectContext.focusedValueTagIndex === 0) && tagWrapper !== multiSelectContextNonStateRef?.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]) multiSelectContextNonStateRef?.current.selectedOptionTagRefs[multiSelectContext.focusedValueTagIndex]?.focus();
		});
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
			className: joinClassNames("multi-select__tag-wrapper", selectedValueIndex === multiSelectContext.focusedValueTagIndex ? "multi-select__tag-wrapper--focused" : false),
			ref: (ref) => {
				if (multiSelectContextNonStateRef) multiSelectContextNonStateRef.current.selectedOptionTagRefs[selectedValueIndex] = ref;
			},
			onBlur: () => setMultiSelectContext((draftContext) => {
				if (draftContext.focusedValueTagIndex === selectedValueIndex) draftContext.focusedValueTagIndex = NaN;
			}),
			onClick: () => setMultiSelectContext((draftContext) => {
				draftContext.focusedValueTagIndex = selectedValueIndex;
			}),
			onFocus: () => setMultiSelectContext((draftContext) => {
				draftContext.focusedValueTagIndex = selectedValueIndex;
			}),
			onKeyUp: (e) => {
				if (e.code === "Delete" || e.code === "Backspace") setMultiSelectContext((draftContext) => {
					removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, multiSelectContextNonStateRef);
				});
				else if (e.code === "ArrowLeft") setMultiSelectContext((draftContext) => {
					draftContext.focusedValueTagIndex = Math.max(0, selectedValueIndex - 1);
				});
				else if (e.code === "ArrowRight") setMultiSelectContext((draftContext) => {
					const newIndex = selectedValueIndex + 1;
					if (newIndex >= multiSelectContext.selectedValues.length) {
						draftContext.focusedValueTagIndex = NaN;
						multiSelectContextNonStateRef.current.comboBoxDivElement?.querySelector(".combo-box-input")?.focus();
					} else draftContext.focusedValueTagIndex = newIndex;
				});
			},
			tabIndex: 0,
			"aria-label": `${selectedOption.label}, press delete to remove.`,
			"aria-selected": "true",
			children
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectTags.jsx
	/**
	* @param {object} props
	* @param {boolean | undefined} props.isDisabled
	* @returns {import('react').JSX.Element}
	*/
	function MultiSelectTags({ isDisabled }) {
		const [multiSelectContext, setMultiSelectContext, multiSelectContextNonStateRef] = useMultiSelectContext();
		const { addPoliteMessage } = useAriaMessaging();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
			className: "multi-select-tags flex flex-wrap gap-xs",
			children: multiSelectContext.selectedValues.map((selectedValue, selectedValueIndex) => {
				const selectedValueLowerCase = selectedValue.toLowerCase();
				const selectedOption = multiSelectContext.comboBoxOptions.find((option) => option.value === selectedValue || option.value.toLowerCase() === selectedValueLowerCase);
				return selectedOption ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectTagWrapper, {
					selectedOption,
					selectedValueIndex,
					children: multiSelectContext.tagTemplate ? multiSelectContext.tagTemplate(selectedValue, selectedOption) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Tag, {
						"aria-label": `Press delete to remove ${selectedOption.label}`,
						className: joinClassNames("multi-select__tag", multiSelectContext.optionTagClassNames[selectedOption.value]),
						iconButtonProps: {
							"aria-hidden": true,
							tabIndex: -1,
							title: "selected. Press delete to remove this tag",
							tooltipText: "Clear Tag"
						},
						isDisabled,
						onClear: () => setMultiSelectContext((draftContext) => {
							removeSelectedOption(draftContext, addPoliteMessage, selectedValueIndex, selectedOption, multiSelectContextNonStateRef);
						}),
						size: formElementSizesEnum.SMALL,
						children: selectedOption.label
					})
				}, `multi-select-tag-wrapper__${multiSelectContext.multiSelectId}--${selectedValue}`) : null;
			})
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectComboBox.jsx
	/**
	* @template MutableRefT
	* @typedef {import('@utahdts/utah-design-system').MutableRef<MutableRefT>} MutableRef
	*/
	/** @typedef {import ('react').UIEventHandler} UIEventHandler */
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry] can the user type in their own items to add to the list?
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.errorMessage]
	* @param {MutableRef<HTMLDivElement | null>} [props.innerRef]
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {UIEventHandler} [props.onBlur]
	* @param {UIEventHandler} [props.onFocus]
	* @param {(customValue: string) => void} [props.onCustomEntry] caller is responsible for adding options when they are added
	* @param {string} [props.placeholder]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function MultiSelectComboBox({ allowCustomEntry, children, className, errorMessage, innerRef: draftInnerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onBlur, onCustomEntry, onFocus, placeholder, wrapperClassName, ...rest }) {
		const [multiSelectContextValue, setMultiSelectContextValue, multiSelectContextNonStateRef] = useMultiSelectContext();
		const multiSelectContextValueRef = useRefAlways(multiSelectContextValue);
		const selectedValuesRef = useRefAlways(multiSelectContextValue.selectedValues);
		const { addPoliteMessage } = useAriaMessaging();
		const wrapperRef = (0, react.useRef)(null);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper input-wrapper--multi-select", wrapperClassName),
			ref: (ref) => {
				if (draftInnerRef) if (typeof draftInnerRef === "function") draftInnerRef(ref);
				else draftInnerRef.current = ref;
				wrapperRef.current = ref;
			},
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: multiSelectContextValue.multiSelectId,
					className: labelClassName ?? void 0,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "multi-select__wrapper",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						"aria-describedby": errorMessage ? `${multiSelectContextValue.multiSelectId}-error` : void 0,
						className: joinClassNames(className, "multi-select", isClearable ? "multi-select--clear-icon-visible" : "", isDisabled ? "multi-select--disabled" : "", multiSelectContextValue.focusedValueTagIndex || multiSelectContextValue.focusedValueTagIndex === 0 || multiSelectContextValue.textInputHasFocus || multiSelectContextValue.clearButtonHasFocus ? "multi-select--focused" : "", errorMessage ? "invalid" : null),
						onClick: () => {
							if (multiSelectContextValue.isOptionsExpanded) multiSelectContextNonStateRef?.current.textInput?.blur();
							else multiSelectContextNonStateRef?.current.textInput?.click();
							multiSelectContextNonStateRef?.current.textInput?.focus();
						},
						onMouseDown: (e) => e.preventDefault(),
						ref: (ref) => {
							if (multiSelectContextNonStateRef) multiSelectContextNonStateRef.current.comboBoxDivElement = ref;
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectTags, { isDisabled }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBox, {
								allowCustomEntry,
								className: "multi-select__combo-box",
								id: multiSelectContextValue.multiSelectId,
								isDisabled,
								isInvalid: !!errorMessage,
								isRequired,
								isValueClearedOnSelection: true,
								isWrapperSkipped: true,
								label,
								labelClassName: joinClassNames("visually-hidden", labelClassName),
								name,
								onChange: (newValue) => {
									multiSelectContextValue.onChange((0, lodash_es.uniq)(selectedValuesRef.current.concat(newValue)));
								},
								onCustomEntry,
								onKeyUp: (e, currentFilter) => {
									let eventIsHandled = false;
									if (!currentFilter && multiSelectContextValueRef.current.selectedValues.length) {
										if (e.key === "Backspace") {
											eventIsHandled = true;
											setMultiSelectContextValue((draftContext) => {
												const deadTag = draftContext.selectedValues.pop();
												addPoliteMessage(`${deadTag} removed`);
											});
											const { activeElement } = document;
											activeElement?.blur();
											activeElement?.focus();
										}
										if (e.key === "ArrowLeft") {
											eventIsHandled = true;
											setMultiSelectContextValue((draftContext) => {
												draftContext.focusedValueTagIndex = draftContext.selectedValues.length - 1;
											});
										}
									}
									return eventIsHandled;
								},
								placeholder,
								popupContentRef: multiSelectContextNonStateRef?.current.comboBoxDivElement,
								value: "",
								wrapperClassName,
								isLabelSkipped: true,
								onFocus: ((e) => {
									onFocus?.(e);
									setTimeout(() => setMultiSelectContextValue((draftContext) => {
										draftContext.textInputHasFocus = true;
									}), 0);
								}),
								onBlur: ((e) => {
									onBlur?.(e);
									setTimeout(() => setMultiSelectContextValue((draftContext) => {
										draftContext.textInputHasFocus = false;
										if (!draftContext.clearButtonHasFocus) draftContext.isOptionsExpanded = false;
									}), 0);
								}),
								...rest,
								children
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectClearIcon, {
								isClearable,
								isDisabled
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
								tabIndex: -1,
								className: joinClassNames("multi-select__chevron", "icon-button--borderless", "icon-button--small1x", isDisabled ? "multi-select__chevron--is-disabled" : ""),
								icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: multiSelectContextValue.isOptionsExpanded ? "utds-icon-before-chevron-up" : "utds-icon-before-chevron-down",
									"aria-hidden": "true"
								}),
								isDisabled,
								onClick: () => {
									if (multiSelectContextValue.isOptionsExpanded) {
										multiSelectContextNonStateRef?.current.textInput?.blur();
										multiSelectContextNonStateRef?.current.textInput?.focus();
									} else multiSelectContextNonStateRef?.current.textInput?.click();
								},
								title: "Toggle popup menu",
								onBlur: () => {
									setTimeout(() => {
										const { activeElement } = document;
										multiSelectContextNonStateRef?.current.textInput?.focus();
										activeElement?.focus();
									}, 100);
								},
								onMouseDown: (e) => e.preventDefault()
							})
						]
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id: multiSelectContextValue.multiSelectId
				})
			]
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/context/MultiSelectContextProvider.jsx
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContext} MultiSelectContextType */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextNonStateRef} MultiSelectContextNonStateRef */
	/** @typedef {import('@utahdts/utah-design-system').MultiSelectContextValue} MultiSelectContextValue */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.multiSelectId
	* @param {string[]} [props.defaultValues]
	* @param {((newValues: string[]) => void)} [props.onChange]
	* @param {(() => void)} [props.onClear]
	* @param {string[]} [props.values]
	* @returns {import('react').JSX.Element}
	*/
	function MultiSelectContextProvider({ children, multiSelectId, defaultValues, onChange, onClear, values }) {
		const onChangeRef = useRefAlways(onChange);
		const multiSelectContextNonStateRef = (0, react.useRef)({
			comboBoxDivElement: null,
			selectedOptionTagRefs: [],
			textInput: null
		});
		const multiSelectImmer = (0, use_immer.useImmer)(() => ({
			clearButtonHasFocus: false,
			comboBoxOptions: [],
			focusedValueTagIndex: NaN,
			tagTemplate: null,
			isOptionsExpanded: false,
			multiSelectId,
			onChange: (newValues) => {
				if (onChangeRef.current) onChangeRef.current(newValues);
				else multiSelectImmer[1]((draftContext) => {
					draftContext.selectedValues = newValues;
				});
			},
			onClear: onClear ?? (() => multiSelectImmer[1]((draftContext) => {
				draftContext.selectedValues = [];
			})),
			optionTagClassNames: {},
			selectedValues: values ?? defaultValues ?? [],
			textInputHasFocus: false
		}));
		(0, react.useEffect)(() => {
			multiSelectImmer[1]((draftContext) => {
				if (values && draftContext.selectedValues !== values) draftContext.selectedValues = values;
			});
		}, [values]);
		(0, react.useEffect)(() => {
			if (multiSelectImmer[0].selectedValues !== void 0) onChange?.(multiSelectImmer[0].selectedValues);
		}, [multiSelectImmer[0].selectedValues]);
		/** @type {[MultiSelectContextValue, import('use-immer').Updater<MultiSelectContextValue>, import('react').MutableRefObject<MultiSelectContextNonStateRef>]} */
		const providerValue = (0, react.useMemo)(() => [...multiSelectImmer, multiSelectContextNonStateRef], [multiSelectImmer]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectContext.Provider, {
			value: providerValue,
			children
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelect.jsx
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry] can the user type in their own items to add to the list?
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string[]} [props.defaultValues]
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef]
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {((newValue: string[]) => void)} [props.onChange]
	* @param {() => void} [props.onClear]
	* @param {(customValue: string) => void} [props.onCustomEntry] caller is responsible for adding options when they are added
	* @param {string} [props.placeholder]
	* @param {string[]} [props.values]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function MultiSelect({ allowCustomEntry, children, className, defaultValues, errorMessage, id, innerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, onCustomEntry, placeholder, values, wrapperClassName, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectContextProvider, {
			defaultValues,
			multiSelectId: id,
			onChange,
			onClear,
			values,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MultiSelectComboBox, {
				allowCustomEntry,
				className,
				errorMessage,
				innerRef,
				isClearable,
				isDisabled,
				isRequired,
				label,
				labelClassName,
				name,
				onCustomEntry,
				placeholder,
				wrapperClassName,
				...rest,
				children
			})
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectOption.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isStatic] static options are always visible and not filterable
	* @param {string} props.label
	* @param {string} [props.tagClassName] this class will be put on the tag when this option is selected
	* @param {string} props.value
	* @returns {import('react').JSX.Element | null}
	*/
	function MultiSelectOption({ children = null, isDisabled, isStatic, label, tagClassName, value }) {
		const [{ selectedValues }, setMultiSelectContext] = useMultiSelectContext();
		(0, react.useEffect)(() => {
			setMultiSelectContext((draftContext) => {
				draftContext.optionTagClassNames[value] = tagClassName;
			});
			return () => {
				setMultiSelectContext((draftContext) => {
					delete draftContext.optionTagClassNames[value];
				});
			};
		}, []);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
			isDisabled,
			isStatic,
			isHidden: selectedValues.includes(value),
			label,
			value,
			children
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectOptionGroup.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.label
	* @returns {import('react').JSX.Element}
	*/
	function MultiSelectOptionGroup({ children, label }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOptionGroup, {
			className: "multi-select-option-group",
			label,
			children
		});
	}
	//#endregion
	//#region react/components/forms/MultiSelect/MultiSelectTagTemplate.jsx
	/** @typedef {import('@utahdts/utah-design-system').ComboBoxOptionType} ComboBoxOptionType */
	/**
	* just registers its "children" as the option template to render selected tags
	* @param {object} props
	* @param {(selectedValue: string, selectedOption: ComboBoxOptionType) => React.JSX.Element} props.children render a selected option
	* @returns {null}
	*/
	function MultiSelectTagTemplate({ children }) {
		const [, setMultiSelectContext] = useMultiSelectContext();
		(0, react.useEffect)(() => {
			setMultiSelectContext((draftContext) => {
				if (draftContext.tagTemplate) throw new Error("MultiSelect can only have one MultiSelectTagTemplate child.");
				draftContext.tagTemplate = children;
			});
			return () => setMultiSelectContext((draftContext) => {
				draftContext.tagTemplate = null;
			});
		}, []);
		return null;
	}
	//#endregion
	//#region react/components/forms/PlainText.jsx
	/**
	* Sometimes you want a label that has static text next to it that looks and fits in to the
	* layout of a form. The plain text is not an input. It doesn't change. It's not required. It's
	* just plain text. You may think you don't need this, but then you'll want it over and over again.
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} [props.id] one of the few components where `id` is not required
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {boolean} [props.isLabelSkipped] highly recommended to not skip the label; instead, hide it
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {React.ReactNode} [props.value] usually is a string, but you're welcome to drop in whatever you want
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function PlainText({ className, innerRef, id, isLabelSkipped, label, labelClassName, value, wrapperClassName, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper", "input-wrapper--plain-text", wrapperClassName),
			ref: innerRef,
			children: [isLabelSkipped ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: labelClassName ?? void 0,
				children: label
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "plain-text__inner-wrapper",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: joinClassNames(className),
					id,
					...rest,
					children: value || /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: "\xA0" })
				})
			})]
		});
	}
	//#endregion
	//#region react/components/forms/RadioButton/context/RadioButtonGroupContext.js
	/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContext} RadioButtonGroupContext */
	var RadioButtonGroupContext = (0, react.createContext)([void 0, () => {
		console.error("calling default RadioButtonGroupContext setter... you should probably setup a context provider before trying to use it.");
	}]);
	//#endregion
	//#region react/components/forms/RadioButton/context/useRadioButtonGroupContext.js
	/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContext} RadioButtonGroupContextType */
	/** @returns {RadioButtonGroupContextType} */
	function useRadioButtonGroupContext() {
		return (0, react.useContext)(RadioButtonGroupContext);
	}
	//#endregion
	//#region react/components/forms/RadioButton/RadioButton.jsx
	/**
	* wrap in a RadioButtonGroup to control a clump of RadioButtons. Can have a RadioButton without a RadioButtonGroup,
	* but then it is always uncontrolled.
	* @param {object} props
	* @param {string} [props.className]
	* @param {boolean} [props.defaultIsChecked] allows default checking if uncontrolled (not in RadioButtonGroup)
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} props.id
	* @param {boolean} [props.isDisabled]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name] groups radio buttons together in the DOM; from context, though can override or be solo
	* @param {string} props.value
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function RadioButton({ className, defaultIsChecked, id, innerRef, isDisabled, label, labelClassName, name, value, wrapperClassName, ...rest }) {
		const [contextValues] = useRadioButtonGroupContext();
		if (!contextValues && !name) console.warn("RadioButton: in uncontrolled mode, a RadioButton must have a supplied `name` attribute");
		/** @type {string | undefined} */
		let currentValue;
		if (contextValues) currentValue = contextValues.value || "";
		else currentValue = void 0;
		const isControlled = !!contextValues;
		const onChange = (0, react.useCallback)(() => {
			if (contextValues) contextValues.onChange(value);
		}, [
			contextValues,
			name,
			value
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper input-wrapper--radio", wrapperClassName),
			ref: innerRef,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
				htmlFor: id,
				className: labelClassName ?? void 0,
				children: label
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
				checked: isControlled ? currentValue === value : void 0,
				defaultChecked: defaultIsChecked,
				className,
				disabled: isDisabled,
				id,
				name: contextValues?.name ?? name,
				onChange: isControlled ? onChange : void 0,
				type: "radio",
				...rest
			})]
		});
	}
	//#endregion
	//#region react/components/forms/RadioButton/context/RadioButtonGroupContextProvider.jsx
	/** @typedef { import('@utahdts/utah-design-system').RadioButtonGroupContextValue} RadioButtonGroupContextValue */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.defaultValue]
	* @param {string} props.name
	* @param {((newValue: string) => void)} [props.onChange]
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function RadioButtonGroupContextProvider({ children, defaultValue, name, onChange, value }) {
		const radioButtonGroupImmer = (0, use_immer.useImmer)({
			name,
			onChange: (newValue) => {
				if (onChange) onChange(newValue);
				else radioButtonGroupImmer[1]((draftState) => {
					if (draftState) draftState.value = newValue;
				});
			},
			value: defaultValue ?? null
		});
		const setRadioButtonGroupState = radioButtonGroupImmer[1];
		(0, react.useEffect)(() => {
			if (value !== void 0 && value !== radioButtonGroupImmer[0]?.value) setRadioButtonGroupState((draftState) => {
				if (draftState) draftState.value = value;
			});
		}, [value]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RadioButtonGroupContext.Provider, {
			value: radioButtonGroupImmer,
			children
		});
	}
	//#endregion
	//#region react/components/forms/RadioButton/RadioButtonGroup.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.defaultValue] starting value if not controlled
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {(newValue: string) => void} [props.onChange] respond to changes of current value if controlled
	* @param {string} [props.value] value of the currently selected Radio Button if controlled
	* @returns {import('react').JSX.Element}
	*/
	function RadioButtonGroup({ children, className, defaultValue, errorMessage, id, isRequired, label, onChange, value }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("fieldset", {
			id,
			className: joinClassNames("fieldset fieldset--radio-wrapper", className),
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("legend", { children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RadioButtonGroupContextProvider, {
				defaultValue,
				name: id,
				onChange,
				value,
				children
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
			errorMessage,
			id
		})] });
	}
	//#endregion
	//#region react/components/forms/SelectOption.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLOptionElement>} [props.innerRef]
	* @param {boolean} [props.isDisabled]
	* @param {string} props.label
	* @param {string | number} props.value
	* @returns {import('react').JSX.Element}
	*/
	function SelectOption({ className, innerRef, isDisabled, label, value, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
			className,
			disabled: isDisabled,
			ref: innerRef,
			value,
			...rest,
			children: label
		});
	}
	//#endregion
	//#region react/components/forms/Select.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children] the options as children
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} props.id
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {import('react').ChangeEventHandler<HTMLInputElement>} [props.onChange] can be omitted to be uncontrolled
	* @param {import('react').UIEventHandler<HTMLElement>} [props.onClear] do something when the field should be cleared
	* @param {string} [props.placeholder]
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function Select({ children, className, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, value, wrapperClassName, ...rest }) {
		const selectInputRef = (0, react.useRef)(null);
		const { addPoliteMessage } = useAriaMessaging();
		const clearInput = (0, react.useCallback)(
			/** @param {import('react').MouseEvent<HTMLInputElement>} e */
			(e) => {
				onClear?.(e);
				addPoliteMessage(`${label} input was cleared`);
				selectInputRef.current?.focus();
			},
			[
				addPoliteMessage,
				onClear,
				label
			]
		);
		const showClearIcon = !!((isClearable || onClear) && value);
		const onChangeCallback = (0, react.useCallback)(
			/** @param {import('react').ChangeEvent<HTMLInputElement>} e */
			(e) => {
				onChange?.(e);
			},
			[onChange]
		);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper input-wrapper--select", wrapperClassName),
			ref: innerRef,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					className: labelClassName ?? void 0,
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "select-input__inner-wrapper",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
						"aria-describedby": errorMessage ? `${id}-error` : void 0,
						"aria-invalid": !!errorMessage,
						className: joinClassNames(className, showClearIcon ? "select-input--clear-icon-visible" : null, value ? "" : "select-input--placeholder"),
						defaultValue: defaultValue ?? void 0,
						disabled: isDisabled,
						id,
						name: name || id,
						onChange: value !== void 0 ? (e) => onChangeCallback(e) : void 0,
						onKeyUp: (0, react.useCallback)(
							/** @param {import('react').KeyboardEvent} e */
							(e) => {
								if (e.key === "Escape" && showClearIcon) clearInput(e);
							},
							[clearInput, showClearIcon]
						),
						ref: selectInputRef,
						required: isRequired ?? void 0,
						value,
						...rest,
						children: [placeholder ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectOption, {
							label: placeholder,
							value: "",
							isDisabled: true
						}) : null, children]
					}), showClearIcon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						className: joinClassNames("select-input__clear-button icon-button--borderless icon-button--small1x"),
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-x-icon",
							"aria-hidden": "true"
						}),
						onClick: (e) => clearInput(e),
						title: "Clear select",
						isDisabled
					}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id
				})
			]
		});
	}
	//#endregion
	//#region react/components/forms/Switch.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {boolean} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {boolean} [props.isDisabled]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.labelOn]
	* @param {string} [props.labelOff]
	* @param {string} [props.name]
	* @param {((e: React.KeyboardEvent) => void)} [props.onChange]
	* @param {'small' | 'medium' | 'large'} [props.size] formElementSizesEnum
	* @param {import('react').ReactNode} [props.sliderChildren]
	* @param {boolean} [props.value]
	* @param {number} [props.width]
	* @returns {import('react').JSX.Element}
	*/
	function Switch({ className, defaultValue, errorMessage, id, innerRef, isDisabled, label, labelClassName, labelOn, labelOff, name, onChange, size, sliderChildren, value, width, ...rest }) {
		const [currentValue, setCurrentValue] = (0, react.useState)(!!(defaultValue ?? value));
		(0, react.useEffect)(() => {
			if (value !== void 0) setCurrentValue(!!value);
		}, [value]);
		const internalOnChange = (0, react.useCallback)(
			/** @param {import('react').KeyboardEvent<HTMLInputElement>} e */
			(e) => {
				setCurrentValue(e.target.checked);
			},
			[id]
		);
		const currentOnChange = onChange ?? internalOnChange;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "input-wrapper input-wrapper--switch",
			ref: innerRef,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: joinClassNames("switch__wrapper", size && (size === formElementSizesEnum.MEDIUM ? null : `switch--${size}`), isDisabled ? "switch--disabled" : null, currentValue && "switch__wrapper--on"),
				htmlFor: id,
				style: width || width === 0 ? { width: `${width}px` } : void 0,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: joinClassNames("switch__label", labelClassName),
						children: label
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						"aria-describedby": errorMessage ? `${id}-error` : null,
						checked: currentValue,
						className: joinClassNames("switch visually-hidden", className),
						disabled: isDisabled,
						id,
						name: name || id,
						onChange: currentOnChange,
						role: "switch",
						type: "checkbox",
						...rest
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: joinClassNames("switch__slider", currentValue && "switch__slider--on"),
						children: sliderChildren
					}),
					labelOn || labelOff ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: "switch__inner-label",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: joinClassNames(currentValue ? "show" : "", "switch__inner-label-on"),
							children: labelOn
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: joinClassNames(currentValue ? "" : "show", "switch__inner-label-off"),
							children: labelOff
						})]
					}) : null
				]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
				errorMessage,
				id
			})]
		});
	}
	//#endregion
	//#region react/components/forms/TextArea.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} props.id
	* @param {boolean} [props.isClearable]
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {import('react').ChangeEventHandler} [props.onChange]
	* @param {import('react').UIEventHandler} [props.onClear]
	* @param {string} [props.placeholder]
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function TextArea({ className, defaultValue, errorMessage, innerRef, id, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, value, wrapperClassName, ...rest }) {
		const inputRef = (0, react.useRef)(null);
		const onChangeSetCursorPosition = useRememberCursorPosition(inputRef, value || "");
		const { addPoliteMessage } = useAriaMessaging();
		const showClearIcon = !!((isClearable || onClear) && value);
		const clearInput = (0, react.useCallback)(
			/** @param {import('react').UIEvent} e */
			(e) => {
				onClear?.(e);
				addPoliteMessage(`${label} input was cleared`);
				inputRef.current?.focus();
			},
			[
				addPoliteMessage,
				onClear,
				label
			]
		);
		const checkKeyPressed = (0, react.useCallback)(
			/** @param {import('react').KeyboardEvent} e */
			(e) => {
				if (e.key === "Escape" && showClearIcon) clearInput(e);
			},
			[clearInput, showClearIcon]
		);
		const onChangeCallback = (0, react.useCallback)(
			/** @param {import('react').ChangeEvent<HTMLElement>} e */
			(e) => {
				onChangeSetCursorPosition(e);
				onChange?.(e);
			},
			[onChangeSetCursorPosition, onChange]
		);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("input-wrapper", "input-wrapper--text-area", wrapperClassName),
			ref: innerRef,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					htmlFor: id,
					className: joinClassNames("text-area__label", labelClassName),
					children: [label, isRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RequiredStar, {}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "text-area__inner-wrapper",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
						"aria-describedby": errorMessage ? `${id}-error` : void 0,
						"aria-invalid": !!errorMessage,
						className: joinClassNames(className, showClearIcon ? "text-area--clear-icon-visible" : null),
						defaultValue,
						disabled: isDisabled,
						id,
						name: name || id,
						onChange: value !== void 0 ? onChangeCallback : void 0,
						onKeyUp: checkKeyPressed,
						placeholder: placeholder ?? void 0,
						ref: inputRef,
						required: isRequired,
						value,
						...rest
					}), showClearIcon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						className: joinClassNames("text-area__clear-button icon-button--borderless icon-button--small1x"),
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-x-icon",
							"aria-hidden": "true"
						}),
						onClick: clearInput,
						title: "Clear input",
						isDisabled
					}) : null]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorMessage, {
					errorMessage,
					id
				})
			]
		});
	}
	//#endregion
	//#region react/components/forms/TimeInput.jsx
	/**
	* @param {object} props
	* @param {boolean} [props.allowCustomEntry] can the user type in their own time that is not in the popup combobox list
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {string} [props.errorMessage]
	* @param {boolean} [props.hasTimePopup] is there a popup from which the user can select the time?
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {boolean} [props.isClearable] should the clearable "X" icon be shown; is auto set to true if onClear is passed in
	* @param {boolean} [props.isDisabled]
	* @param {boolean} [props.isRequired]
	* @param {string} props.label
	* @param {string} [props.labelClassName]
	* @param {string} [props.name]
	* @param {(newValue: string) => void} [props.onChange] can be omitted to be uncontrolled
	* @param {() => void} [props.onClear]
	* @param {string} [props.placeholder]
	* @param {string} [props.timeFormat] use `date-fns` modifiers for formatting the time options
	* @param {number} [props.timeRangeIncrement] for popup, what increment (in minutes) for the options given to the user
	* @param {string} [props.timeRangeBegin] options in popup can start (inclusive) at a given time; format per `props.timeFormat`
	* @param {string} [props.timeRangeEnd] options in popup can end at the given time (inclusive); format per `props.timeFormat`
	* @param {string} [props.value]
	* @param {string} [props.wrapperClassName]
	* @returns {import('react').JSX.Element}
	*/
	function TimeInput({ allowCustomEntry, className, defaultValue, errorMessage, hasTimePopup = true, id, innerRef, isClearable, isDisabled, isRequired, label, labelClassName, name, onChange, onClear, placeholder, timeFormat = "h:mm aaa", timeRangeBegin, timeRangeEnd, timeRangeIncrement = 15, value, wrapperClassName, ...rest }) {
		const timeOptions = (0, react.useMemo)(() => {
			const defaultStartDate = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
			const defaultEndDate = new Date((/* @__PURE__ */ new Date()).setHours(23, 59, 0, 0));
			let optionsBeginDate = timeRangeBegin && (0, date_fns.parse)(timeRangeBegin, timeFormat, /* @__PURE__ */ new Date()) || null;
			optionsBeginDate = optionsBeginDate && (0, date_fns.isValid)(optionsBeginDate) ? optionsBeginDate : defaultStartDate;
			let optionsEndDate = timeRangeEnd && (0, date_fns.parse)(timeRangeEnd, timeFormat, /* @__PURE__ */ new Date()) || null;
			optionsEndDate = optionsEndDate && (0, date_fns.isValid)(optionsEndDate) ? optionsEndDate : defaultEndDate;
			const timeOptionsRet = [];
			for (let loopDate = optionsBeginDate; loopDate.getTime() <= optionsEndDate.getTime(); loopDate = (0, date_fns.add)(loopDate, { minutes: timeRangeIncrement })) timeOptionsRet.push((0, date_fns.format)(loopDate, timeFormat));
			return timeOptionsRet;
		}, [
			timeRangeBegin,
			timeRangeEnd,
			timeRangeIncrement,
			timeFormat
		]);
		const clockIcon = (0, react.useMemo)(() => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: joinClassNames("utds-icon-before-clock", "time-input__clock-icon", isDisabled && "time-input__clock-icon--is-disabled", !hasTimePopup && "time-input__clock-icon--static"),
			"aria-hidden": "true"
		}), [isDisabled, hasTimePopup]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("time-input__wrapper", wrapperClassName),
			ref: innerRef,
			children: hasTimePopup ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBox, {
				className,
				defaultValue,
				errorMessage,
				id,
				isClearable,
				isDisabled,
				isRequired,
				label,
				labelClassName,
				name: name || id,
				onClear: isClearable ? onClear : void 0,
				placeholder,
				value,
				allowCustomEntry,
				iconCallback: () => clockIcon,
				onChange,
				...rest,
				children: timeOptions.map((timeOption) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
					label: timeOption,
					value: timeOption
				}, `time-input__${id}__${timeOption}`))
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextInput, {
				className,
				defaultValue,
				errorMessage,
				id,
				isClearable,
				isDisabled,
				isRequired,
				label,
				labelClassName,
				name: name || id,
				onClear: isClearable ? onClear : void 0,
				placeholder,
				value,
				onChange: (e) => onChange?.(e.target.value),
				rightContent: clockIcon,
				...rest
			})
		});
	}
	//#endregion
	//#region react/components/navigation/ExternalLink.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.href
	* @returns {import('react').JSX.Element}
	*/
	function ExternalLink({ children, href, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
			href,
			target: "_blank",
			rel: "noreferrer",
			...rest,
			children: [
				children,
				" ",
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: "utds-new-tab-link-a11y",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "visually-hidden",
						children: "opens in a new tab"
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-after-external-link",
						"aria-hidden": "true"
					})]
				})
			]
		});
	}
	//#endregion
	//#region react/enums/menuTypes.js
	/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes */
	/** @enum {MenuTypes} */
	var menuTypes = {
		VERTICAL: "vertical",
		HORIZONTAL: "horizontal"
	};
	//#endregion
	//#region react/components/navigation/items/MenuItemNavLink.jsx
	/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
	/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/**
	* @param {object} props
	* @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLAnchorElement | null>} [props.innerRef]
	* @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
	* @param {MenuTypes} [props.menuType]
	* @returns {import('react').JSX.Element}
	*/
	function MenuItemNavLink({ currentMenuItem, id, innerRef, menuItem, menuType }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
			id,
			className: joinClassNames(menuType === menuTypes.VERTICAL ? "vertical-menu__link-title" : "menu-item__link-title", currentMenuItem?.parentLinks?.includes(menuItem.link ?? "") && (currentMenuItem?.children?.length ? "" : "menu-item--selected_parent"), currentMenuItem?.link && menuItem?.link && currentMenuItem.link === menuItem.link ? "menu-item--selected" : ""),
			href: menuItem.link || menuItem.actionUrl?.url || menuItem.actionFunctionUrl?.url || "#",
			onClick: (e) => {
				if ((menuItem.actionFunctionUrl || menuItem.actionFunction) && !menuItem.actionFunctionUrl?.skipHandleEvent) {
					e.stopPropagation();
					e.preventDefault();
				}
				const eany = e;
				if (menuItem.actionFunction) menuItem.actionFunction(eany);
				if (menuItem.actionFunctionUrl) menuItem.actionFunctionUrl.actionFunction(eany);
			},
			ref: innerRef,
			rel: "noreferrer",
			target: menuItem.actionUrl?.openInNewTab || menuItem.actionFunctionUrl?.openInNewTab ? "_blank" : void 0,
			children: menuItem.title
		});
	}
	//#endregion
	//#region react/components/navigation/items/MenuItemInline.jsx
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
	/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
	/**
	* @param {object} props
	* @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {boolean} [props.expandChildrenByDefault=true]
	* @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
	* @param {MenuTypes} [props.menuType]
	* @returns {import('react').JSX.Element}
	*/
	function MenuItemInline({ currentMenuItem, expandChildrenByDefault = true, menuItem, menuType = menuTypes.VERTICAL }) {
		const [isChildrenOpen, setIsChildrenOpen] = (0, use_immer.useImmer)(() => expandChildrenByDefault && !!menuItem.children || !!currentMenuItem?.parentLinks?.includes(menuItem.link ?? ""));
		(0, react.useEffect)(() => {
			setIsChildrenOpen((isChildrenOpenPreviously) => !!(isChildrenOpenPreviously || currentMenuItem?.parentLinks?.includes(menuItem.link ?? "")));
		}, [
			currentMenuItem,
			menuItem,
			setIsChildrenOpen
		]);
		const navLinkRef = (0, react.useRef)(null);
		(0, react.useLayoutEffect)(() => {
			if (navLinkRef.current) if (navLinkRef.current.classList.contains("menu-item--selected")) navLinkRef.current.setAttribute("aria-current", "page");
			else navLinkRef.current.removeAttribute("aria-current");
		});
		if ((!menuItem?.link || menuItem?.link?.includes("::") || menuItem.children) && !menuItem.id) console.error("A parent MenuItem requires an `id` to empower aria-labelledby", menuItem);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
			className: menuType === menuTypes.VERTICAL ? "vertical-menu__item" : "menu-item",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: "menu-item__title",
				children: [
					!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl || menuItem?.link?.includes("::") ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						"aria-expanded": isChildrenOpen ? "true" : "false",
						className: joinClassNames("menu-item__button-title", currentMenuItem?.parentLinks?.includes(menuItem.link ?? "") && (currentMenuItem?.children?.length ? "" : "menu-item--selected_parent")),
						id: encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`),
						onClick: () => setIsChildrenOpen((previouslyOpen) => !previouslyOpen),
						type: "button",
						children: menuItem.title
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemNavLink, {
						currentMenuItem,
						id: menuItem.children ? encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`) : void 0,
						innerRef: navLinkRef,
						menuItem,
						menuType
					}),
					menuItem.children ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
						"aria-labelledby": encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`),
						"aria-expanded": isChildrenOpen ? "true" : "false",
						className: joinClassNames("menu-item__chevron", isChildrenOpen && "menu-item__chevron--open"),
						onClick: () => setIsChildrenOpen((previouslyOpen) => !previouslyOpen),
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-after-chevron-right icon",
							"aria-hidden": "true"
						}),
						title: "Expand sub-menu"
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "menu-chiclet" })
				]
			}), menuItem.children ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
				className: joinClassNames("menu-item__sub-menu", menuType === menuTypes.VERTICAL ? "vertical-menu" : "", isChildrenOpen ? "menu-item__sub-menu--open" : ""),
				children: menuItem.children?.map((menuItemChild) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemInline, {
					currentMenuItem,
					expandChildrenByDefault,
					menuItem: menuItemChild,
					menuType
				}, `menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`))
			}) : null]
		});
	}
	//#endregion
	//#region react/components/navigation/HorizontalMenu.jsx
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {string} props.id
	* @param {WebsiteMainMenu} props.menu
	* @param {string} [props.titleTagClassName]
	* @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.titleTagName]
	* @returns {import('react').JSX.Element}
	*/
	function HorizontalMenu({ className, currentMenuItem, id, menu, titleTagClassName = "visually-hidden", titleTagName: TitleTagName = "h2" }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
			className: joinClassNames(className, "horizontal-menu"),
			"aria-labelledby": id,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(TitleTagName, {
				id,
				className: titleTagClassName,
				children: "Main Menu"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", { children: menu?.menuItems?.map((menuItem) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemInline, {
				menuItem,
				currentMenuItem
			}, `horizontal-menu__nav-link__${menuItem.link}-${menuItem.title}}`)) })]
		});
	}
	//#endregion
	//#region react/components/navigation/LinkCallback.jsx
	/**
	* @param {object} props
	* @param {string} props.actionDescription a description to show to screen readers about what the callback will be performing
	* @param {import('react').MouseEventHandler} props.callback a function to call when the link is clicked
	* @param {import('react').ReactNode} props.children
	* @param {string} props.href the href to show in the link, but not for actual navigation
	* @returns {import('react').JSX.Element}
	*/
	function LinkCallback({ actionDescription, callback, children, href, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("a", {
			href,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				callback(e);
			},
			...rest,
			children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "utds-new-tab-link-a11y",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "visually-hidden",
					children: actionDescription
				})
			})]
		});
	}
	//#endregion
	//#region react/util/htmlDecode.js
	/**
	* @param {string} input
	* @returns {string}
	*/
	function htmlDecode(input) {
		return new DOMParser().parseFromString(input, "text/html").documentElement.textContent ?? "";
	}
	//#endregion
	//#region react/components/navigation/OnThisPageHeadersLevel.jsx
	/** @typedef {import('@utahdts/utah-design-system').HierarchyNode} HierarchyNode */
	/**
	* @typedef Header {
	*  @property {object} node
	*  @property {2 | 3 | 4} level
	*  @property {Header[]} children
	* }
	*/
	/**
	* @param {object} props
	* @param {HierarchyNode[]} props.headersLevel
	* @param {boolean} [props.backToTop]
	* @returns {import('react').JSX.Element}
	*/
	function OnThisPageHeadersLevel({ headersLevel, backToTop = false }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", {
			className: "on-this-page__list",
			children: [backToTop ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
				className: "back-to-top",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
					href: "#",
					children: "Back to top"
				})
			}) : "", headersLevel.map((header) => {
				let node = null;
				if (header.node.id) node = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
					href: `#${header.node.id}`,
					children: htmlDecode(header.node.innerHTML)
				}), header.children?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OnThisPageHeadersLevel, { headersLevel: header.children }) : null] }, `on-this-page-ul-${header.node.id}`);
				return node;
			})]
		});
	}
	//#endregion
	//#region react/util/notNull.js
	/**
	* https://docs.joshuatz.com/cheatsheets/js/jsdoc/#non-null-assertion-in-jsdoc
	* Exclude in JSDoc removes a type from another type. The returned `T` no longer has `null` nor `undefined` in its type
	* @template T
	* @param {T} value
	* @param {string} errorMessage
	* @returns {NonNullable<T>}
	*/
	function notNull(value, errorMessage) {
		if (value === null || value === void 0) throw new Error(errorMessage);
		return value;
	}
	//#endregion
	//#region react/util/notNullArray.js
	/**
	* Makes sure all elements in an array are neither null nor undefined (for type safety)
	* You should be pretty confident that things can't be null or undefined before calling this
	* @template T
	* @param {T[] | null | undefined} array
	* @param {string} errorMessage
	* @returns {NonNullable<T>[]}
	*/
	function notNullArray(array, errorMessage) {
		if (array === null || array === void 0) throw new Error(errorMessage);
		return array.map((value) => notNull(value, errorMessage));
	}
	//#endregion
	//#region react/components/navigation/util/findElementsByTagNameMatch.js
	/**
	* @param {HTMLElement | null} element
	* @returns {Element[]}
	*/
	function findElementsByTagNameMatch(element) {
		return notNullArray([element?.tagName?.match?.(/^h[23]$/i) ? element : null, ...element?.children ? Array.from(element.children).map((child) => findElementsByTagNameMatch(child)) : []].flat(Infinity).filter(lodash_es.identity).filter((elementMaybeHasId) => elementMaybeHasId?.id), "finedElementsByTagNameMatch: how did a null slip by the identity");
	}
	//#endregion
	//#region react/components/navigation/util/groupElementsByHeaderLevel.js
	/** @typedef {import('@utahdts/utah-design-system').HierarchyNode} HierarchyNode */
	/**
	* @param {Element[]} headers
	* @returns {HierarchyNode[]}
	*/
	function groupElementsByHeaderLevel(headers) {
		if (!headers?.length) return [];
		const nodesHierarchy = [];
		const nodesHierarchyStack = [{
			children: nodesHierarchy,
			level: -1
		}];
		headers.forEach((currentHeader) => {
			const newNode = {
				node: currentHeader,
				children: [],
				level: Number(currentHeader.tagName.substring(1))
			};
			const parentNode = nodesHierarchyStack[nodesHierarchyStack.length - 1];
			if (newNode.level === parentNode?.level) {
				nodesHierarchyStack.pop();
				nodesHierarchyStack[nodesHierarchyStack.length - 1]?.children.push(newNode);
			} else if (newNode.level > (parentNode?.level ?? NaN)) parentNode?.children.push(newNode);
			else if (newNode.level < (parentNode?.level ?? NaN)) {
				while ((nodesHierarchyStack[nodesHierarchyStack.length - 1]?.level ?? NaN) >= newNode.level) nodesHierarchyStack.pop();
				nodesHierarchyStack[nodesHierarchyStack.length - 1]?.children.push(newNode);
			}
			nodesHierarchyStack.push(newNode);
		});
		return nodesHierarchy;
	}
	//#endregion
	//#region react/components/navigation/OnThisPage.jsx
	/**
	* @param {object} props
	* @param {import('react').MutableRefObject<HTMLElement | null>} props.contentRef
	* @returns {import('react').JSX.Element}
	*/
	function OnThisPage({ contentRef }) {
		const headersTree = groupElementsByHeaderLevel(findElementsByTagNameMatch(contentRef.current));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "on-this-page",
			children: headersTree?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
				className: "on-this-page__header",
				children: "On this page"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OnThisPageHeadersLevel, {
				headersLevel: headersTree,
				backToTop: true
			})] }) : null
		});
	}
	//#endregion
	//#region react/components/navigation/items/MenuItemPlain.jsx
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
	/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
	/**
	* @param {object} props
	* @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
	* @param {MenuTypes} [props.menuType]
	* @returns {import('react').JSX.Element}
	*/
	function MenuItemPlain({ currentMenuItem, menuItem, menuType }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
			className: menuType === menuTypes.VERTICAL ? "vertical-menu__item" : "menu-item",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: menuType === menuTypes.VERTICAL ? "vertical-menu__title" : "menu-item__title",
				children: [!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl || menuItem?.link?.includes("::") ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: menuType === menuTypes.VERTICAL ? "vertical-menu__title__plain" : "menu-item__title__plain",
					children: menuItem.title
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemNavLink, {
					currentMenuItem,
					menuItem,
					menuType
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "menu-chiclet" })]
			}), menuItem.children?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
				className: menuType === menuTypes.VERTICAL ? "vertical-menu" : "",
				children: menuItem.children.map((menuItemChild) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemPlain, {
					currentMenuItem,
					menuItem: menuItemChild,
					menuType
				}, `menu-item__child__${menuItemChild.link}-${menuItemChild.title}}`))
			}) : null]
		});
	}
	//#endregion
	//#region react/hooks/useClickOutside.js
	/**
	* @param {import('react').RefObject<HTMLElement | null>[]} refs in the case of popups, they have the popup content AND the reference element
	* @param {import('react').EventHandler<any>} handler
	* @param {boolean} isDisabled
	*/
	function useClickOutside(refs, handler, isDisabled = false) {
		(0, react.useEffect)(() => {
			let retVal;
			if (!isDisabled) {
				let startedInside = false;
				let startedWhenMounted = false;
				/** @type {(e: Event) => void} */
				const listener = (event) => {
					if (refs.some((ref) => !startedInside && startedWhenMounted && ref.current && !ref.current.contains(event.target))) handler(event);
				};
				/** @type {(e: Event) => void} */
				const validateEventStart = (event) => {
					startedWhenMounted = refs.some((ref) => !!ref.current);
					startedInside = refs.some((ref) => ref.current === event.target || !!ref.current?.contains?.(event.target));
					if (!startedInside) handler(event);
				};
				document.addEventListener("mousedown", validateEventStart);
				document.addEventListener("touchstart", validateEventStart);
				document.addEventListener("click", listener);
				retVal = () => {
					document.removeEventListener("mousedown", validateEventStart);
					document.removeEventListener("touchstart", validateEventStart);
					document.removeEventListener("click", listener);
				};
			}
			return retVal;
		}, [
			handler,
			isDisabled,
			refs
		]);
	}
	//#endregion
	//#region react/components/navigation/items/MenuItemFlyout.jsx
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/** @typedef {import('@utahdts/utah-design-system').MenuTypes} MenuTypes  */
	/** @typedef {import('@utahdts/utah-design-system').VerticalMenuMenuItemAdditions} VerticalMenuMenuItemAdditions  */
	/**
	* @param {object} props
	* @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {WebsiteMainMenuItem & VerticalMenuMenuItemAdditions} props.menuItem
	* @param {MenuTypes} [props.menuType]
	* @param {boolean} [props.triggerOnHover]
	* @returns {import('react').JSX.Element}
	*/
	function MenuItemFlyout({ currentMenuItem, menuItem, menuType, triggerOnHover = true }) {
		const [isChildrenOpen, setIsChildrenOpen] = (0, use_immer.useImmer)(false);
		const wrapperElement = (0, react.useRef)(null);
		const buttonRef = (0, react.useRef)(null);
		const popupRef = (0, react.useRef)(null);
		const {} = (0, _floating_ui_react_dom.useFloating)({
			elements: {
				reference: buttonRef.current,
				floating: popupRef.current
			},
			middleware: [
				(0, _floating_ui_react_dom.offset)(10),
				(0, _floating_ui_react_dom.flip)(),
				(0, _floating_ui_react_dom.shift)()
			],
			open: isChildrenOpen,
			placement: "right-start",
			whileElementsMounted: _floating_ui_react_dom.autoUpdate
		});
		useClickOutside([popupRef, wrapperElement], () => setIsChildrenOpen(false), !isChildrenOpen);
		const isExpanded = () => {
			let retVal;
			if (!triggerOnHover) retVal = isChildrenOpen;
			return retVal;
		};
		(0, react.useEffect)(() => {
			if (triggerOnHover && buttonRef?.current && popupRef?.current && !buttonRef?.current.onclick) (0, _utahdts_utah_design_system_header.popupFocusHandler)(wrapperElement.current, buttonRef.current, popupRef.current, "menu", {
				shouldFocusOnHover: true,
				doNotClosePopupOnClick: true,
				popupPlacement: "right-start"
			});
		}, [
			triggerOnHover,
			buttonRef,
			popupRef
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
			className: menuType === menuTypes.VERTICAL ? "vertical-menu__item" : "menu-item",
			ref: wrapperElement,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				className: menuType === menuTypes.VERTICAL ? "vertical-menu__title" : "menu-item__title",
				children: [
					!menuItem?.link && !menuItem.actionFunction && !menuItem.actionFunctionUrl && !menuItem.actionUrl || menuItem?.link?.includes("::") ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						"aria-expanded": isExpanded(),
						"aria-controls": `menu-item-${menuItem.id}-${menuItem.link || "link"}-popup`,
						"aria-haspopup": "menu",
						className: joinClassNames("menu-item__button-title", currentMenuItem?.parentLinks?.includes(menuItem.link ?? "") && (currentMenuItem?.children?.length ? "" : "menu-item--selected_parent")),
						id: encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`),
						onClick: triggerOnHover ? void 0 : () => setIsChildrenOpen((previouslyOpen) => !previouslyOpen),
						type: "button",
						title: !triggerOnHover && menuItem.children ? "Expand sub-menu" : "",
						ref: buttonRef,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: menuType === menuTypes.VERTICAL ? "vertical-menu__link-text" : "menu__link-text",
							children: menuItem.title
						}), menuItem.children ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-chevron-right vertical-menu__chevron is-closed",
							"aria-hidden": "true"
						}) : null]
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemNavLink, {
						currentMenuItem,
						menuItem,
						menuType
					}),
					menuItem.children && menuItem.link ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
						"aria-labelledby": encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`),
						"aria-expanded": isChildrenOpen ? "true" : "false",
						className: "menu-item__chevron",
						onClick: () => setIsChildrenOpen((previouslyOpen) => !previouslyOpen),
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-chevron-right icon",
							"aria-hidden": "true"
						}),
						title: "Expand sub-menu"
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: "menu-chiclet" })
				]
			}), menuItem.children ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"aria-labelledby": encodeURI(`menu-item-${menuItem.id}-${menuItem.link || "link"}`),
				className: joinClassNames("popup__wrapper", isChildrenOpen ? "popup__wrapper--visible" : "popup__wrapper--hidden"),
				id: `menu-item__${menuItem.id}__${menuItem.link || "link"}-popup`,
				ref: popupRef,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "popup__content flyout-menu",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: menuType === menuTypes.VERTICAL ? "vertical-menu" : "",
						children: menuItem.children?.map((menuItemChild) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemFlyout, {
							currentMenuItem,
							menuItem: menuItemChild,
							menuType,
							triggerOnHover
						}, `menu-item__child__${menuItemChild.link || "link"}-${menuItemChild.title}}`))
					})
				})
			}) : null]
		});
	}
	//#endregion
	//#region react/components/navigation/VerticalMenu.jsx
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenu} WebsiteMainMenu */
	/** @typedef {import('@utahdts/utah-design-system').WebsiteMainMenuItem} WebsiteMainMenuItem */
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {WebsiteMainMenu | WebsiteMainMenuItem} [props.currentMenuItem]
	* @param {boolean} [props.expandInlineChildrenByDefault=true]
	* @param {WebsiteMainMenu[]} props.menus
	* @param {boolean} [props.triggerOnHover]
	* @returns {import('react').JSX.Element}
	*/
	function VerticalMenu({ className, currentMenuItem, expandInlineChildrenByDefault = true, menus, triggerOnHover = true }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: menus.map((menu) => {
			const TitleTagName = menu.titleTagName || "h2";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className,
				"aria-labelledby": menu.header ? menu.id : void 0,
				children: [menu.header ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TitleTagName, {
					id: menu.id,
					className: joinClassNames(menu.titleTagClassName, "vertical-menu__header"),
					children: menu.header
				}) : null, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: "vertical-menu",
					children: menu.menuItems.map((menuItem) => {
						let result;
						switch (menuItem.childrenMenuType) {
							case _utahdts_utah_design_system_header.childrenMenuTypes.INLINE:
								result = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemInline, {
									menuType: menuTypes.VERTICAL,
									currentMenuItem,
									menuItem,
									expandChildrenByDefault: expandInlineChildrenByDefault
								}, `vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`);
								break;
							case _utahdts_utah_design_system_header.childrenMenuTypes.FLYOUT:
								result = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemFlyout, {
									menuType: menuTypes.VERTICAL,
									currentMenuItem,
									menuItem,
									triggerOnHover
								}, `vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`);
								break;
							default: result = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MenuItemPlain, {
								menuType: menuTypes.VERTICAL,
								menuItem,
								currentMenuItem
							}, `vertical-menu__menu-item__${menuItem.link}-${menuItem.title}}`);
						}
						return result;
					})
				}, `vertical-menu__list__${menu.id}`)]
			}, `vertical-menu__${menu.id}`);
		}) });
	}
	//#endregion
	//#region react/components/navigation/pagination/PaginationLink.jsx
	/**
	* @param {object} props
	* @param {string} [props.className] className to put on this element
	* @param {number} props.currentPageIndex the currently selected page
	* @param {string} props.label the actual value shown on the page
	* @param {number} props.numberOfPages total number of pages
	* @param {(newPageIndex: number) => void} props.onChange controlled component: page # changed
	* @param {number} props.pageIndex index of this page out of all the pages (3 means it's the 4th page, 0 means first page)
	* @returns {import('react').JSX.Element}
	*/
	function PaginationLink({ className, currentPageIndex, onChange, numberOfPages, label, pageIndex, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
			className: "pagination__list-item",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
				"aria-current": pageIndex === currentPageIndex ? "page" : void 0,
				"aria-label": `${pageIndex === numberOfPages - 1 ? "Last page, " : ""}${pageIndex === currentPageIndex ? "" : "Go to "}page ${label}`,
				className: joinClassNames("pagination__link", className, currentPageIndex !== pageIndex && "pagination__link--inactive", currentPageIndex === pageIndex && "pagination__link--active"),
				href: `#pagination-${pageIndex}`,
				onClick: () => onChange(pageIndex),
				...rest,
				children: label
			})
		});
	}
	//#endregion
	//#region react/components/navigation/pagination/util/determinePaginationLinks.js
	/**
	* @param {object} param
	* @param {number} param.currentPageIndex
	* @param {number} param.numberOfPages
	* @returns {{ isEllipsis: boolean, title?: string, label: string | null, pageIndex: number }[]}
	*/
	function determinePaginationLinks({ currentPageIndex, numberOfPages }) {
		const numberOfPagesAtLeastOne = Math.max(numberOfPages, 1);
		let currentPageIndexUse = currentPageIndex || 0;
		if (currentPageIndex < 0 || currentPageIndex >= numberOfPagesAtLeastOne) {
			console.warn(`determinePaginationLinks: currentPageIndex out of range ${currentPageIndex}:${numberOfPages}`);
			currentPageIndexUse = 0;
		}
		if (!Number(currentPageIndex) && currentPageIndex !== 0) {
			console.warn(`determinePaginationLinks: bad currentPageIndex number ${currentPageIndex}:${numberOfPages}`);
			currentPageIndexUse = 0;
		}
		let slotsConsumed = 0;
		const pageIndexKeepers = Array.from({ length: numberOfPagesAtLeastOne }).fill(false);
		pageIndexKeepers[0] = true;
		pageIndexKeepers[numberOfPagesAtLeastOne - 1] = true;
		slotsConsumed += numberOfPagesAtLeastOne === 1 ? 1 : 2;
		if (currentPageIndexUse !== 0 && currentPageIndexUse !== numberOfPagesAtLeastOne - 1) {
			pageIndexKeepers[currentPageIndexUse] = true;
			slotsConsumed += 1;
		}
		const totalSlots = Math.min(7, numberOfPagesAtLeastOne);
		let currentPageLeft = currentPageIndexUse - 1;
		let currentPageRight = currentPageIndexUse + 1;
		while (true) {
			let slotsLeft = totalSlots - slotsConsumed;
			if (currentPageLeft > 0) slotsLeft -= 1;
			if (currentPageRight < numberOfPagesAtLeastOne - 1) slotsLeft -= 1;
			if (slotsLeft && currentPageLeft > 0) {
				slotsConsumed += 1;
				pageIndexKeepers[currentPageLeft] = true;
				currentPageLeft -= 1;
				if (currentPageLeft > 0) slotsLeft -= 1;
			}
			if (slotsLeft && currentPageRight < numberOfPagesAtLeastOne - 1) {
				slotsConsumed += 1;
				pageIndexKeepers[currentPageRight] = true;
				currentPageRight += 1;
				if (currentPageRight < numberOfPagesAtLeastOne - 1) slotsLeft -= 1;
			}
			if (!slotsLeft) break;
		}
		const paginationLinks = [];
		paginationLinks.push({
			isEllipsis: false,
			label: "1",
			pageIndex: 0
		});
		if (currentPageLeft === 1) paginationLinks.push({
			isEllipsis: false,
			pageIndex: currentPageLeft,
			label: `${currentPageLeft + 1}`
		});
		else if (currentPageLeft > 0) paginationLinks.push({
			isEllipsis: true,
			label: null,
			pageIndex: NaN
		});
		for (let pageIndexKeepersIndex = 1; pageIndexKeepersIndex < pageIndexKeepers.length - 1; pageIndexKeepersIndex += 1) if (pageIndexKeepers[pageIndexKeepersIndex]) paginationLinks.push({
			isEllipsis: false,
			label: `${pageIndexKeepersIndex + 1}`,
			pageIndex: pageIndexKeepersIndex
		});
		if (numberOfPagesAtLeastOne - currentPageRight === 2) paginationLinks.push({
			isEllipsis: false,
			label: `${currentPageRight + 1}`,
			pageIndex: currentPageRight
		});
		else if (currentPageRight < numberOfPagesAtLeastOne - 1) paginationLinks.push({
			isEllipsis: true,
			label: null,
			pageIndex: NaN
		});
		if (numberOfPagesAtLeastOne > 1) paginationLinks.push({
			isEllipsis: false,
			label: `${numberOfPagesAtLeastOne}`,
			pageIndex: numberOfPagesAtLeastOne - 1
		});
		return paginationLinks;
	}
	//#endregion
	//#region react/components/navigation/pagination/Pagination.jsx
	/**
	* @param {object} props
	* @param {string} [props.ariaLabel] ariaLabel is used by accessibility to describe the purpose of the pagination
	* @param {string} [props.className] can add your own className to the pagination
	* @param {number} [props.defaultValue] starting page number (for uncontrolled - what good is an uncontrolled Pagination element?)
	* @param {string} [props.id] id to put on the pagination element
	* @param {import('react').RefObject<HTMLElement | null>} [props.innerRef]
	* @param {(newValue: number) => void} [props.onChange] controlled component: page # changed
	* @param {number} props.itemsPerPage how many items on each "page"
	* @param {number} props.totalNumberItems how many total items there are in the full data set
	* @param {number} [props.value] controlled component: value is the current page number (0 based-index)
	* @param {'div' | 'nav'} [props.wrapInElement] if wrapping in `nav`, make sure to provide the ariaLabel
	* @returns {import('react').JSX.Element}
	*/
	function Pagination({ ariaLabel, className, defaultValue = 0, id, innerRef, onChange, itemsPerPage, totalNumberItems, value = 0, wrapInElement = "div", ...rest }) {
		const [currentValue, setCurrentValue] = (0, use_immer.useImmer)(value === void 0 ? defaultValue : value);
		const valueUse = value === void 0 ? currentValue : value;
		const valueRef = useRefAlways(valueUse ?? 0);
		const { onChange: currentOnChange, value: currentPageIndex, valueRef: currentPageIndexRef } = (0, react.useMemo)(() => ({
			onChange: onChange || setCurrentValue,
			value: valueUse ?? 0,
			valueRef
		}), [onChange, valueUse]);
		const { addPoliteMessage } = useAriaMessaging();
		const numberOfPages = Math.ceil(totalNumberItems / itemsPerPage);
		const oldIndex = (0, react.useRef)(currentPageIndex);
		(0, react.useEffect)(() => {
			if ((numberOfPages || currentPageIndex) && (currentPageIndex ?? NaN) >= numberOfPages) currentOnChange(numberOfPages - 1);
			if (currentPageIndex !== oldIndex.current) {
				oldIndex.current = currentPageIndex;
				addPoliteMessage(`You are now on page ${(currentPageIndex || 0) + 1}`);
			}
		}, [
			currentOnChange,
			currentPageIndex,
			numberOfPages
		]);
		const paginationLinks = (0, react.useMemo)(() => determinePaginationLinks({
			currentPageIndex,
			numberOfPages
		}), [currentPageIndex, numberOfPages]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(wrapInElement || "div", {
			ref: innerRef,
			className: joinClassNames("pagination", className),
			id,
			"aria-label": ariaLabel,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
					className: "pagination__prev",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-before-arrow-left",
						"aria-hidden": "true"
					}),
					isDisabled: currentPageIndex === 0,
					onClick: (0, react.useCallback)(() => currentOnChange(currentPageIndexRef.current - 1), [currentOnChange, currentPageIndexRef]),
					title: "Previous page"
				}) }),
				paginationLinks.map((paginationLink, paginationLinkIndex) => paginationLink.isEllipsis ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: "pagination__ellipsis",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-before-more-horizontal",
						"aria-hidden": "true"
					})
				}) }, `pagination-link__ellipsis__${paginationLinkIndex}`) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PaginationLink, {
					currentPageIndex,
					label: paginationLink.label ?? "",
					onChange: currentOnChange,
					pageIndex: paginationLink.pageIndex,
					numberOfPages
				}, `pagination-link__${paginationLink.pageIndex}__${paginationLink.title}`)),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
					className: "pagination__next",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-before-arrow-right",
						"aria-hidden": "true"
					}),
					isDisabled: currentPageIndex === numberOfPages - 1,
					onClick: (0, react.useCallback)(() => currentOnChange(currentPageIndexRef.current + 1), [currentOnChange, currentPageIndexRef]),
					title: "Next page"
				}) })
			] })
		});
	}
	//#endregion
	//#region react/components/navigation/pagination/hooks/usePaginatedList.js
	/**
	* companion to <Pagination>, hook for slicing a list based on the current page number
	* @template ListT
	* @param {object} props
	* @param {ListT[]} props.list list of items
	* @param {number} props.pageIndex current page index (0-based)
	* @param {number} props.itemsPerPage how many items are on each page
	* @returns {ListT[]} new list starting at the given page number
	*/
	function usePaginatedList({ list, pageIndex, itemsPerPage }) {
		return (0, react.useMemo)(() => {
			const totalPages = Math.ceil(list.length / itemsPerPage);
			const startIndex = totalPages ? Math.max(Math.min(totalPages - 1, pageIndex) * itemsPerPage) : 0;
			const endIndex = startIndex + itemsPerPage;
			return list.slice(startIndex, endIndex);
		}, [
			list,
			pageIndex,
			itemsPerPage
		]);
	}
	//#endregion
	//#region react/enums/bannerPlacement.js
	/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
	/**
	* Positions for banners
	* @enum {BannerPlacement}
	*/
	var BANNER_PLACEMENT = {
		INLINE: "inline",
		BOTTOM_LEFT: "bottom-left",
		BOTTOM_RIGHT: "bottom-right",
		BOTTOM_MIDDLE: "bottom",
		TOP_LEFT: "top-left",
		TOP_RIGHT: "top-right",
		TOP_MIDDLE: "top"
	};
	//#endregion
	//#region react/components/popups/Banner/Banner.jsx
	/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {import('react').MouseEventHandler} props.onClose
	* @param {BannerPlacement} [props.position]
	* @param {'small' | 'medium' | 'large'} [props.size]
	* @returns {import('react').JSX.Element}
	*/
	function Banner({ children, className, id, innerRef, onClose, position = BANNER_PLACEMENT.BOTTOM_LEFT, size }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("banner__wrapper", className, `banner--${position}`, size && `banner--${size}`),
			id,
			ref: innerRef,
			children: [children, /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "banner__close-button flex flex-col justify-center",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
					className: "popup__close-button",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-before-x-icon",
						"aria-hidden": "true"
					}),
					onClick: onClose,
					title: "Close banner",
					size: "small"
				})
			})]
		});
	}
	//#endregion
	//#region react/components/popups/Banner/BannerIcon.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @returns {import('react').JSX.Element}
	*/
	function BannerIcon({ children, className }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: joinClassNames("banner__icon", className),
			children
		});
	}
	//#endregion
	//#region react/components/popups/Banner/BannerMessage.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @returns {import('react').JSX.Element}
	*/
	function BannerMessage({ children, className }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("banner__message", className),
			children
		});
	}
	//#endregion
	//#region react/components/popups/Modal/Modal.jsx
	/**
	* @param {object} props
	* @param {string} props.ariaLabelledBy Must match the id of the title of the modal
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} props.id
	* @param {import('react').Ref<HTMLDivElement>} [props.innerRef]
	* @param {import('react').KeyboardEventHandler} [props.onEscape]
	* @param {import('react').MouseEventHandler} [props.onClose]
	* @returns {import('react').JSX.Element}
	*/
	function Modal({ ariaLabelledBy, children, className, id, innerRef, onEscape, onClose }) {
		const ref = (0, react.useRef)(null);
		const [lastActiveElement] = (0, use_immer.useImmer)(document.activeElement);
		const [firstTabElement, setFirstTabElement] = (0, use_immer.useImmer)(void 0);
		const [lastTabElement, setLastTabElement] = (0, use_immer.useImmer)(void 0);
		const { addAssertiveMessage } = useAriaMessaging();
		const handleEscape = useHandleEscape(onEscape);
		const handleTab = useHandleTab(firstTabElement, lastTabElement);
		(0, react.useEffect)(() => {
			if (ref) {
				const list = getFocusableElements(ref.current);
				if (list.length) {
					const firstElement = list[0];
					setFirstTabElement(firstElement);
					const lastElement = list[list.length - 1];
					setLastTabElement(lastElement);
					firstElement?.focus();
				} else console.warn("No focusable element found. Make sure to include a way to close the modal.");
			}
		}, []);
		(0, react.useEffect)(() => () => {
			addAssertiveMessage("Closing dialog");
			lastActiveElement?.focus();
		}, []);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "modal-backdrop backdrop-dark",
			onClick: onClose,
			ref: innerRef,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("dialog", {
				"aria-modal": "true",
				"aria-labelledby": ariaLabelledBy,
				className: joinClassNames("modal__wrapper", className),
				id,
				onClick: (e) => e.stopPropagation(),
				onKeyUp: handleEscape,
				onKeyDown: handleTab,
				ref,
				children: [children, onClose ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
					className: "modal__close-button",
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "utds-icon-before-x-icon",
						"aria-hidden": "true"
					}),
					onClick: onClose,
					size: "small",
					title: "Close modal"
				}) : void 0]
			})
		});
	}
	//#endregion
	//#region react/components/popups/Modal/ModalContent.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function ModalContent({ children, className, id }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("modal__content", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/components/popups/Modal/ModalFooter.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function ModalFooter({ children, className, id }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("modal__footer", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/components/popups/Modal/ModalTitle.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} props.id Make sure to match the ariaLabelledBy of the modal
	* @returns {import('react').JSX.Element}
	*/
	function ModalTitle({ children, className, id }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("modal__title", className),
			id,
			children
		});
	}
	//#endregion
	//#region react/hooks/useGlobalKeyEvent.js
	/**
	* @template KeyboardEventHandlerT
	* @param {object} params
	* @param {string} params.whichKeyCode https://www.w3.org/TR/uievents-key/#named-key-attribute-values
	* @param {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyDown]
	* @param {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} [params.onKeyUp]
	* @returns {boolean}
	*/
	function useGlobalKeyEvent({ whichKeyCode, onKeyDown, onKeyUp }) {
		const [keyPressed, setKeyPressed] = (0, react.useState)(false);
		const keydownFuncRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			keydownFuncRef.current = (e) => {
				if (e.code === whichKeyCode || e.keyCode === whichKeyCode || e.key === whichKeyCode) {
					if (e.type === "keydown") {
						setKeyPressed(true);
						if (onKeyDown) onKeyDown(e);
					} else if (e.type === "keyup") {
						setKeyPressed(false);
						if (onKeyUp) onKeyUp(e);
					}
				}
			};
			document.addEventListener("keydown", keydownFuncRef.current);
			document.addEventListener("keyup", keydownFuncRef.current);
			return () => {
				if (keydownFuncRef.current) {
					document.removeEventListener("keydown", keydownFuncRef.current);
					document.removeEventListener("keyup", keydownFuncRef.current);
				}
				keydownFuncRef.current = null;
			};
		}, [
			onKeyDown,
			onKeyUp,
			whichKeyCode
		]);
		return keyPressed;
	}
	//#endregion
	//#region react/components/popups/Popup.jsx
	/** @typedef {import('@utahdts/utah-design-system-header').PopupPlacement} PopupPlacement */
	/**
	* @param {object} props
	* @param {string} props.ariaLabelledBy usually the id of the button that controls the popup
	* @param {import('react').ReactNode} props.children The content of the popup
	* @param {string} [props.className] CSS class to apply to the popup
	* @param {boolean} [props.hasCloseButton] the top right `X` close button
	* @param {string} props.id used for hooking up to the button that controls the popup by aria-control
	* @param {import('react').RefObject<HTMLDivElement | null>} [props.innerRef] ref to the popup wrapper
	* @param {boolean} props.isVisible Control the visibility of the popup
	* @param {number | {mainAxis: number, crossAxis: number, alignmentAxis?: number}} [props.offset] offset of popped content from
	* @param {(e: React.UIEvent, isVisible: boolean) => void} props.onVisibleChange popup closed; (e, newVisibility) => { ... do something ... }
	* @param {PopupPlacement} [props.placement] The Popup Placement
	* @param {import('react').RefObject<HTMLElement | null>} props.referenceElement the anchor element around which the popup content will pop
	* @param {'dialog' | 'grid' | 'listbox' | 'menu' | 'tree'} props.role popup must tell its role for accessibility
	* @returns {import('react').JSX.Element}
	*/
	function Popup({ ariaLabelledBy, children, className, hasCloseButton, id, innerRef: draftInnerRef, isVisible, offset = {
		mainAxis: 10,
		crossAxis: 0
	}, onVisibleChange, placement = popupPlacement.BOTTOM, referenceElement, role, ...rest }) {
		const popupRef = (0, react.useRef)(null);
		const arrowRef = (0, react.useRef)(null);
		if (draftInnerRef) draftInnerRef.current = popupRef.current;
		const { floatingStyles, middlewareData } = (0, _floating_ui_react_dom.useFloating)({
			elements: {
				reference: referenceElement.current,
				floating: popupRef.current
			},
			middleware: [
				(0, _floating_ui_react_dom.offset)(offset),
				(0, _floating_ui_react_dom.flip)(),
				(0, _floating_ui_react_dom.shift)(),
				(0, _floating_ui_react_dom.arrow)({ element: arrowRef.current })
			],
			open: isVisible,
			placement,
			whileElementsMounted: _floating_ui_react_dom.autoUpdate
		});
		useGlobalKeyEvent({
			whichKeyCode: "Escape",
			onKeyUp: (e) => onVisibleChange(e, false)
		});
		const onVisibleChangeCallback = (0, react.useCallback)(
			/** @param {import('react').KeyboardEvent} e */
			(e) => {
				onVisibleChange(e, false);
			},
			[onVisibleChange]
		);
		useClickOutside([popupRef, referenceElement], onVisibleChangeCallback, !isVisible);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			"aria-labelledby": ariaLabelledBy,
			id,
			ref: popupRef,
			style: floatingStyles,
			className: joinClassNames("popup__wrapper", className, hasCloseButton ? "popup__wrapper--close-button" : null, isVisible ? "popup__wrapper--visible" : "popup__wrapper--hidden"),
			role,
			"data-popup-placement": middlewareData?.offset?.placement || placement,
			inert: !isVisible,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "popup__content",
				children: [
					hasCloseButton ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						appearance: ICON_BUTTON_APPEARANCE.BORDERLESS,
						className: "popup__close-button",
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-x-icon",
							"aria-hidden": "true"
						}),
						onClick: (e) => onVisibleChange(e, false),
						title: "Close popup",
						size: "small"
					}) : void 0,
					children,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						ref: arrowRef,
						style: {
							left: middlewareData.arrow?.x,
							top: middlewareData.arrow?.y
						},
						className: "popup__arrow"
					})
				]
			})
		});
	}
	//#endregion
	//#region react/components/table/Table.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLTableElement>} [props.innerRef]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function Table({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("table", {
			className: joinClassNames("table", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableBody.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLTableSectionElement>} [props.innerRef]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function TableBody({ children, className, innerRef, id, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", {
			className: joinClassNames("table-body", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/util/chainSorters.js
	/**
	* Oftentimes you want to sort by multiple levels so that if the first level of sorting results in an equals result then compare the next level
	* @param {((a: any, b: any, ...rest: any[]) => number)[]} sorters sorter funcs in sort order; ie (a, b) => a - b
	* @param {any} [sorterParams] can add extra parameters to pass in to each sorter; these are spread in to the sorter
	* @returns {(a: any, b: any) => number} func that takes a & b parameters and if the comparison result is zero then calls the next sorter in the array
	*/
	function chainSorters(sorters, ...sorterParams) {
		return ((a, b) => (sorters || []).reduce((result, sorter) => result === 0 ? sorter(a, b, ...sorterParams) : result, 0));
	}
	//#endregion
	//#region react/util/notNullMap.js
	/**
	* https://docs.joshuatz.com/cheatsheets/js/jsdoc/#non-null-assertion-in-jsdoc
	* Exclude in JSDoc removes a type from another type. The returned `T` no longer has `null` nor `undefined` in its type
	*
	* This function is not as nice as its cousin notNull() because it does not require a message
	* This function is nice to pass to a map function where you know FOR SURE that all the value are not null/undefined.
	* ie myValuesArray.filter(identity).map(notNullMap) so that the type system now knows that all the values are not null
	* @template T
	* @param {T} value
	* @returns {NonNullable<T>}
	*/
	function notNullMap(value) {
		if (value === null || value === void 0) throw new Error("notNullMap: value is null or undefined");
		return value;
	}
	//#endregion
	//#region react/util/state/valueAtPath.js
	/**
	* @template ObjectT
	* @template ValueT
	* @param {object} param
	* @param {ObjectT | null} param.object
	* @param {string} param.path
	* @returns {ValueT}
	*/
	function valueAtPath({ object, path }) {
		return (0, lodash_es.split)(path, ".").reduce((obj, field) => field && obj ? obj[field] : obj, object);
	}
	//#endregion
	//#region react/components/table/TableBodyDataRowContext.jsx
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
	*/
	/** @template TableDataT */
	var TableBodyDataRowContext = (0, react.createContext)({ record: null });
	//#endregion
	//#region react/components/table/util/TableContext.jsx
	/** @typedef {import('@utahdts/utah-design-system').TableContextValue<any>} TableContextValue */
	var TableContext = (0, react.createContext)({
		allData: [],
		filteredData: [],
		registerSortingRule: (sortingRule) => {
			console.error("Context not yet initialized: registerSortingRule", sortingRule);
		},
		unregisterSortingRule: (recordFieldPath) => {
			console.error("Context not yet initialized: unregisterSortingRule", recordFieldPath);
		},
		setBodyData: (allData, filteredData) => {
			console.error("Context not yet initialized: setBodyDataForComponentGuid", allData, filteredData);
		},
		setState: (arg) => {
			console.error("Context not yet initialized: setState", arg);
		},
		state: {
			currentSortingOrderIsDefault: true,
			filterValues: {
				defaultValue: null,
				onChange: null,
				value: {}
			},
			sortingRules: {},
			tableData: {
				allData: [],
				filteredData: []
			},
			tableId: "table-outside-context-id",
			tableSortingOnChange: null,
			tableSortingFieldPath: null,
			tableSortingFieldPaths: null
		}
	});
	//#endregion
	//#region react/components/table/hooks/useTableContext.jsx
	function useTableContext() {
		return (0, react.useContext)(TableContext);
	}
	//#endregion
	//#region react/util/toSafeString.js
	/**
	* @param {string | number | null | undefined} value
	* @returns {string}
	*/
	function toSafeString(value) {
		return !value && value !== 0 ? "" : `${value}`;
	}
	//#endregion
	//#region react/components/table/util/convertRecordsToFilterValue.js
	/**
	* @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValue} TableContextStateFilterValue
	* @typedef {import('@utahdts/utah-design-system').TableRecord} TableRecord
	* @typedef {import('@utahdts/utah-design-system').TableRecordForFiltering} TableRecordForFiltering
	*/
	/**
	* convert a table record in to a filtering record that has the record and each filterable field formatted for filtering
	* @param {TableRecord[]} records the data records in a table that are being filtered
	* @param {Record<string, TableContextStateFilterValue>} filterValues The current filter values and settings
	* @returns {TableRecordForFiltering[]}
	*/
	function convertRecordsToFilterValue(records, filterValues) {
		return records.map((record) => ({
			record,
			filterFields: Object.fromEntries(Object.keys(filterValues || {}).map((filterFieldPath) => [filterFieldPath, toSafeString(valueAtPath({
				object: record.record,
				path: filterFieldPath
			}))?.toLocaleLowerCase()]))
		}));
	}
	//#endregion
	//#region react/components/table/tableConstants.js
	var tableConstants = { dateFilterSeparator: "~~separator~~" };
	//#endregion
	//#region react/components/table/util/createTableFilterFunctions.js
	/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValue} TableContextStateFilterValue */
	/** @typedef {import('@utahdts/utah-design-system').TableFilterFunction} TableFilterFunction */
	/**
	* convert each filter in to a function that will validate that filter rule (value, exactMatch, etc)
	* @param {Record<string, TableContextStateFilterValue>} filterValues the filters
	* @returns {Record<string, TableFilterFunction>} a function for each filter key that takes a value and determines if it matches the filter
	*/
	function createTableFilterFunctions(filterValues) {
		return Object.fromEntries(Object.entries(filterValues || {}).map(([filterKey, filterData]) => {
			/** @type {TableFilterFunction} */
			let testFunc;
			if (filterData.options?.exactMatch) {
				if (filterData.options.isDateRange) throw new Error(`Table Filter: exactMatch is a date range. A date range can not be an exact match: "${filterKey}"=>${filterData.value}`);
				const filterDataValue = filterData.value;
				const filterTestValue = typeof filterDataValue === "number" ? filterDataValue : filterDataValue?.toLocaleLowerCase() || "";
				testFunc = (value) => !filterData.value || value === filterTestValue;
			} else if (filterData.options?.isDateRange) {
				if (typeof filterData.value === "number") throw new Error(`Table Filter: value is a number for a date Range. Date Range filtering must be a string value in the format of '{beginDate}~~separator~~{endDate}': "${filterKey}"=>${filterData.value}`);
				const dateFormat = filterData.options?.dateRangeDateFormat || "MM/dd/yyyyy";
				const [beginDate, endDate] = filterData.value.split(tableConstants.dateFilterSeparator);
				const beginDateDate = beginDate ? (0, date_fns.parse)(beginDate, dateFormat, /* @__PURE__ */ new Date()) : null;
				const endDateDate = endDate ? (0, date_fns.parse)(endDate, dateFormat, /* @__PURE__ */ new Date()) : null;
				testFunc = (value) => {
					if (!beginDateDate && !endDateDate) return true;
					const valueDate = value && new Date(value);
					return !!valueDate && (!beginDateDate || valueDate.getTime() >= beginDateDate.getTime()) && (!endDateDate || valueDate.getTime() <= endDateDate.getTime());
				};
			} else {
				if (typeof filterData.value === "number") console.warn(`Table Filter: value is a number but is not an exact match. Non-exact-matching (partials/contains) only works with strings. Either use a string filter value or have set the 'exactMatch' property on the filter to be 'true': "${filterKey}"=>${filterData.value}`);
				const filterTestValues = (`${filterData.value}` || "").split(" ").map((s) => s.toLowerCase());
				testFunc = (value) => filterTestValues.every((filterString) => !filterString || value.includes(filterString));
			}
			return [filterKey, testFunc];
		}));
	}
	//#endregion
	//#region react/components/table/util/filterTableRecords.js
	/**
	* @typedef {import('@utahdts/utah-design-system').TableFilterFunction} TableFilterFunction
	* @typedef {import('@utahdts/utah-design-system').TableRecord} TableRecord
	* @typedef {import('@utahdts/utah-design-system').TableRecordForFiltering} TableRecordForFiltering
	*/
	/**
	* convert a table record in to a filtering record that has the record and each filterable field formatted for filtering
	* @param {TableRecordForFiltering[]} records the data records in a table that are being filtered
	* @param {Record<string, TableFilterFunction>} filterRules The current filter values and settings
	* @returns {TableRecord[]}
	*/
	function filterTableRecords(records, filterRules) {
		return records.filter((recordData) => Object.entries(recordData.filterFields).every(([filterField, recordValue]) => filterRules[filterField]?.(recordValue))).map((recordData) => recordData.record);
	}
	//#endregion
	//#region react/components/table/TableBodyData.jsx
	/**
	* @template RecordT
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} props.recordIdField
	* @param {(RecordT & object)[]} props.records
	* @returns {import('react').JSX.Element[] | null}
	*/
	function TableBodyData({ children, recordIdField, records }) {
		const timer = (0, react.useRef)(NaN);
		const { addPoliteMessage } = useAriaMessaging();
		const [recordsForContexts, setRecordsForContexts] = (0, use_immer.useImmer)(null);
		const { state: { currentSortingOrderIsDefault, filterValues, pagination, sortingRules, tableSortingFieldPath, tableSortingFieldPaths }, setBodyData } = useTableContext();
		const previousFilterValues = (0, react.useRef)(filterValues.value);
		const [paginatedRecords, setPaginatedRecords] = (0, use_immer.useImmer)([]);
		(0, react.useEffect)(() => {
			let newRecordsForContext = records?.map((record, recordIndex) => ({
				record,
				recordIndex,
				records
			}));
			if (tableSortingFieldPath || tableSortingFieldPaths) {
				const sorters = (0, lodash_es.castArray)(tableSortingFieldPaths || tableSortingFieldPath).map((sortingValue) => sortingRules[sortingValue ?? ""]?.sorter).filter(lodash_es.identity).map(notNullMap);
				newRecordsForContext.sort(chainSorters(sorters, newRecordsForContext));
			}
			const filterRules = createTableFilterFunctions(filterValues.value);
			newRecordsForContext = filterTableRecords(convertRecordsToFilterValue(newRecordsForContext, filterValues.value), filterRules);
			let paginationBeginIndex = pagination ? pagination.currentPageIndex * pagination.itemsPerPage : 0;
			if (paginationBeginIndex >= newRecordsForContext.length) paginationBeginIndex = 0;
			const paginationEndIndex = pagination ? paginationBeginIndex + pagination.itemsPerPage : newRecordsForContext.length;
			setPaginatedRecords(newRecordsForContext.slice(paginationBeginIndex, paginationEndIndex));
			setRecordsForContexts(newRecordsForContext);
			setBodyData(records, newRecordsForContext);
			if (!(0, lodash_es.isEqual)(filterValues.value, previousFilterValues.current)) {
				if (timer.current) {
					clearTimeout(timer.current);
					timer.current = NaN;
				}
				timer.current = window.setTimeout(() => {
					addPoliteMessage(`${newRecordsForContext.length} record${trailingS(newRecordsForContext.length)} shown after filtering`);
				}, 1500);
				previousFilterValues.current = filterValues.value;
			}
		}, [
			currentSortingOrderIsDefault,
			filterValues,
			pagination,
			records,
			sortingRules,
			tableSortingFieldPath,
			tableSortingFieldPaths
		]);
		return recordsForContexts?.length ? paginatedRecords?.map((recordForContext) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableBodyDataRowContext.Provider, {
			value: recordForContext,
			children
		}, `table-body-data-${valueAtPath({
			object: recordForContext.record,
			path: recordIdField
		})}`)) : null;
	}
	//#endregion
	//#region react/components/table/TableCell.jsx
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
	*/
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableCell({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
			className: joinClassNames("table__cell", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableBodyDataCellTemplate.jsx
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
	*/
	/**
	* @template TableDataT
	* @param {object} props
	* @param {import('react').ReactNode | ((record: TableBodyDataRowContextValue<TableDataT>) => React.JSX.Element)} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent, record: TableDataT})) => void)} [props.onClick]
	* @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent, record: TableDataT})) => void)} [props.onDoubleClick]
	* @param {string} [props.recordFieldPath] the field path in the record to the data to render in the <td>; ie 'person.contact.address.city'
	* @returns {import('react').JSX.Element}
	*/
	function TableBodyDataCellTemplate({ children, className, id, innerRef, onClick, onDoubleClick, recordFieldPath, ...rest }) {
		const rowContextData = (0, react.useContext)(TableBodyDataRowContext);
		const { record } = rowContextData;
		let content;
		if ((0, lodash_es.isFunction)(children)) content = children(rowContextData);
		else if (children) content = children;
		else if (recordFieldPath) content = valueAtPath({
			object: record,
			path: recordFieldPath
		});
		else content = null;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableCell, {
			className,
			id,
			innerRef,
			onClick: onClick && ((e) => onClick({
				e,
				...rowContextData
			})),
			onDoubleClick: onDoubleClick && ((e) => onDoubleClick({
				e,
				...rowContextData
			})),
			...rest,
			children: content
		});
	}
	//#endregion
	//#region react/components/table/TableRow.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
	* @param {string} [props.id]
	* @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onClick]
	* @param {import('react').MouseEventHandler<HTMLTableRowElement>} [props.onDoubleClick]
	* @returns {import('react').JSX.Element | null}
	*/
	function TableRow({ children, className, innerRef, id, onClick, onDoubleClick, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
			className: joinClassNames("table__row", className),
			id: id ?? void 0,
			ref: innerRef,
			onClick,
			onDoubleClick,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableBodyDataRowTemplate.jsx
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').TableBodyDataRowContextValue<TableDataT>} TableBodyDataRowContextValue
	*/
	/**
	* @template TableDataT
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {((rowContextData: TableBodyDataRowContextValue<TableDataT>) => string) | string} [props.className]
	* @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
	* @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent})) => void)} [props.onClick]
	* @param {((param: (TableBodyDataRowContextValue<TableDataT> & {e: React.MouseEvent})) => void)} [props.onDoubleClick]
	* @returns {import('react').JSX.Element}
	*/
	function TableBodyDataRowTemplate({ children, className, innerRef, onClick, onDoubleClick, ...rest }) {
		const rowContextData = (0, react.useContext)(TableBodyDataRowContext);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableRow, {
			className: joinClassNames((0, lodash_es.isFunction)(className) ? className(rowContextData) : className),
			onClick: (onClick && ((e) => onClick({
				e,
				...rowContextData
			}))) ?? void 0,
			onDoubleClick: (onDoubleClick && ((e) => onDoubleClick({
				e,
				...rowContextData
			}))) ?? void 0,
			innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/hooks/useTableFilterRegistration.js
	/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValueOptions} TableContextStateFilterValueOptions */
	/**
	* each TableFilterX component needs to set up and register its basic information. The context has context
	* global level filter settings, but each filter has its own settings, like `exactMatch`. This hook sets
	* up context filter information for a filter
	* @param {string} recordFieldPath path to the field in the record on which this filter applies
	* @param {string | number | undefined | null} defaultValue filter can have a default starting value
	* @param {TableContextStateFilterValueOptions} filterOptions
	*/
	function useTableFilterRegistration(recordFieldPath, defaultValue, filterOptions) {
		const { setState } = useTableContext();
		(0, react.useEffect)(() => {
			setState((draftState) => {
				draftState.filterValues.value[recordFieldPath] = {
					value: defaultValue ?? "",
					options: filterOptions
				};
			});
			return (() => {
				setState((draftState) => {
					delete draftState.filterValues.value[recordFieldPath];
				});
			});
		}, [...Object.values(filterOptions), recordFieldPath]);
	}
	//#endregion
	//#region react/util/state/setValueAtPath.js
	/**
	* Deep cloning the entire state is rarely the desired functionality, especially
	* if there are large chunks of data in the state causing the clone to be slow.
	* Keep in mind that React does pointer comparison to see if an object has changed
	* so shallow cloning all objects in the path notifies React of changes along that path.
	* Methodology
	* 1) do a shallow clone of the state
	* 2) shallow clone the object that is changing and all the objects in the path to that object
	* 3) deep clone the new value
	*
	* note: if path to the object doesn't exist then it won't be created; but if the field in the object doesn't exist then it will be created
	*
	* ie field not there
	* state = { a: { b: { c: 3 } } }
	* path = a.b
	* field = d
	* value = 4
	* result: { a: { b: { d: 4, c: 3 } } }
	* note that the 'd' field did get created
	*
	* ie object not there
	* state = { a: { b: { c: 3 } } }
	* path = a.b.d
	* field = e
	* value = 4
	* result: { a: { b: { c: 3 } } }
	* note that the 'e' field did not get created because there is no 'd' object
	* @template SetValueAtPathT
	* @param {object} params
	* @param {Record<string, any>} params.object
	* @param {string} params.path
	* @param {SetValueAtPathT} params.value
	* @returns {Record<string, any>}
	*/
	function setValueAtPath({ object, path, value }) {
		const result = object || {};
		const parts = (path || "").split(".");
		const pathPieces = parts.slice(0, -1);
		const field = notNull(parts.pop(), "setValueAtPath: paths are empty");
		const valueCloned = (0, lodash_es.cloneDeep)(value);
		if (path) {
			const targetObject = pathPieces.reduce((draftNextLevel, pathPiece) => {
				let childObj;
				if ((0, lodash_es.isObject)(draftNextLevel)) {
					childObj = draftNextLevel[pathPiece];
					if (childObj === void 0 || childObj === null) {
						draftNextLevel[pathPiece] = {};
						childObj = draftNextLevel[pathPiece];
					} else if ((0, lodash_es.isObject)(childObj)) {
						if ((0, lodash_es.isArray)(childObj)) childObj = childObj.concat([]);
						else childObj = { ...childObj };
						draftNextLevel[pathPiece] = childObj;
					}
				}
				return childObj;
			}, result);
			if (targetObject && (0, lodash_es.isObject)(targetObject)) targetObject[field] = valueCloned;
		} else if (field) result[field] = valueCloned;
		return result;
	}
	//#endregion
	//#region react/components/table/useCurrentValuesFromStateContext.js
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').RecordOnChangeFunc<TableDataT>} RecordOnChangeFunc
	*/
	/**
	* used only by !!! Table Filters !!! (TableContext)
	* An input can be controlled, uncontrolled, default value, or controlled by a parent context
	* This function takes these values in to account and provides a current value and onChange event
	* The passed in values trump those of the parent context. A local state is used if neither passed in nor
	* context have a value.
	* @template ChangeEventT the change event's type (React.ChangeEvent for input types, or a custom type for things like the table filter date input)
	* @template TableDataT
	* @param {object} param the path to the data inside the state; ie {filterValues:{...}} where filterValues is actual state in the context
	* @param {string} param.contextStatePath path to the data inside the state; ie {filterValues:{...}} where filterValues is actual state in the context
	* @param {(e: ChangeEventT) => TableDataT} param.defaultOnChange
	* @param {TableDataT | null} param.defaultValue starting value for this component (controlled and uncontrolled)
	* @param {(e: ChangeEventT) => TableDataT} [param.onChange]
	* @param {TableDataT | null} param.value the current value of this item
	* @returns {{
	*   currentOnChange: (e: ChangeEventT) => TableDataT
	*   currentValue: (TableDataT | null)
	*   setValue: (newValue: TableDataT) => void
	* }}
	*/
	function useCurrentValuesFromStateContext({ contextStatePath, defaultOnChange, defaultValue, onChange, value }) {
		const defaultValueRef = (0, react.useRef)(defaultValue);
		const { setState: setStateContext, state: stateContext } = (0, react.useContext)(TableContext) || {};
		const [stateLocal, setStateLocal] = (0, use_immer.useImmer)(defaultValue ?? value);
		const fullContextStatePath = `filterValues.value.${contextStatePath}.value`;
		(0, react.useEffect)(() => {
			if (setStateContext && defaultValue) {
				setStateContext((draftStateContext) => {
					setValueAtPath({
						object: draftStateContext,
						path: fullContextStatePath,
						value: defaultValue
					});
				});
				stateContext?.filterValues?.onChange?.({
					recordFieldPath: fullContextStatePath,
					value: defaultValue
				});
			}
		}, []);
		const setValue = (0, react.useCallback)(
			/** @param {TableDataT} newValue */
			(newValue) => {
				if (onChange) onChange(newValue);
				else setStateContext((draftStateContext) => {
					setValueAtPath({
						object: draftStateContext,
						path: fullContextStatePath,
						value: newValue
					});
				});
			},
			[
				fullContextStatePath,
				onChange,
				setStateContext
			]
		);
		let currentValue = value ?? valueAtPath({
			object: stateContext,
			path: fullContextStatePath
		}) ?? stateLocal;
		if (currentValue && currentValue !== defaultValue) defaultValueRef.current = "";
		if (currentValue === null || currentValue === void 0) currentValue = defaultValueRef.current;
		return (0, react.useMemo)(() => ({
			currentOnChange: onChange || stateContext?.filterValues?.onChange && ((e) => stateContext?.filterValues?.onChange?.({
				recordFieldPath: contextStatePath,
				value: defaultOnChange(e)
			})) || setStateContext && ((e) => setStateContext((draftStateContext) => {
				setValueAtPath({
					object: draftStateContext,
					path: fullContextStatePath,
					value: defaultOnChange(e)
				});
			})) || ((e) => {
				setStateLocal(defaultOnChange(e));
			}),
			currentValue: currentValue ?? "",
			setValue
		}), [
			contextStatePath,
			fullContextStatePath,
			onChange,
			setStateContext,
			setStateLocal,
			setValue,
			stateContext,
			stateLocal,
			value
		]);
	}
	//#endregion
	//#region react/components/table/TableFilterComboBox.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string | number} [props.defaultValue]
	* @param {boolean} [props.exactMatch]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} [props.id]
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {(() => {})} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string | number} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterComboBox({ a11yLabel, children, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }) {
		const { currentOnChange, currentValue, setValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (
			/**
			* @param {string} newValue
			* @returns {string}
			*/
(newValue) => newValue),
			defaultValue,
			onChange,
			value
		});
		useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: !!exactMatch });
		const { state: { tableId } } = useTableContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-combo-box", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBox, {
				id: `table-filter-combo-box__${tableId}__${recordFieldPath}`,
				isClearable: true,
				label: `Filter ${a11yLabel}`,
				onChange: currentOnChange,
				onClear: () => setValue(""),
				placeholder: placeholder ?? "Filter",
				value: currentValue?.toString(),
				...rest,
				children
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilterComboBoxAllOptions.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string | number} [props.defaultValue]
	* @param {boolean} [props.exactMatch]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {(() => {})} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterComboBoxAllOptions({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }) {
		const { currentOnChange, currentValue, setValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (
			/**
			* @param {string} newValue
			* @returns {string}
			*/
(newValue) => newValue),
			defaultValue,
			onChange,
			value
		});
		const { allData, state: { tableId } } = useTableContext();
		const dataOptions = (0, react.useMemo)(() => (0, lodash_es.uniq)(allData.map((datum) => datum[recordFieldPath]).filter(lodash_es.identity)).sort(chainSorters([(a, b) => a < b ? -1 : 0, (a, b) => a > b ? 1 : 0])), [allData]);
		useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch: !!exactMatch });
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-combo-box", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(ComboBox, {
				id: `table-filter-combo-box-all-options__${recordFieldPath}__${tableId}`,
				isClearable: true,
				label: `Filter ${a11yLabel}`,
				onChange: currentOnChange,
				onClear: () => setValue(""),
				placeholder: placeholder ?? "Filter",
				value: currentValue?.toString(),
				...rest,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
					className: className ?? void 0,
					label: "",
					value: "",
					...rest
				}), dataOptions.map((dataOption) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
					className: className ?? void 0,
					label: dataOption,
					value: dataOption,
					...rest
				}, `${id || "table-filter-combo-box-all-options"}-${recordFieldPath}-${dataOption}`))]
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilterComboBoxOption.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} props.label
	* @param {string} props.value
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterComboBoxOption({ className, label, value, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ComboBoxOption, {
			className: className ?? void 0,
			label,
			value,
			...rest
		});
	}
	//#endregion
	//#region react/components/table/TableContextConsumer.jsx
	/**
	* @template TableDataT
	* @typedef {import('@utahdts/utah-design-system').TableContextValue<TableDataT>} TableContextValue
	*/
	/**
	* @template TableDataT
	* @param {object} props
	* @param {(tableContext: TableContextValue<TableDataT>) => (React.JSX.Element | null)} props.children
	* @returns {import('react').JSX.Element | null}
	*/
	function TableContextConsumer({ children }) {
		return children(useTableContext());
	}
	//#endregion
	//#region react/components/table/TableFilterCustom.jsx
	/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValueObject} TableContextStateFilterValueObject */
	/** @typedef {(setter: ((param: TableContextStateFilterValueObject) => void)) => void} SetterFunc */
	/**
	* @param {object} props
	* @param {(params: {filterValues: TableContextStateFilterValueObject, setFilterValues: SetterFunc}) => React.JSX.Element} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterCustom({ children, className, id, innerRef, ...rest }) {
		const { setState: setStateContext, state: stateContext } = (0, react.useContext)(TableContext);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children: children({
				filterValues: stateContext.filterValues.value,
				setFilterValues: (setFilterValuesFunc) => {
					setStateContext((draftStateContext) => {
						setFilterValuesFunc(draftStateContext.filterValues.value);
					});
				}
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilterDateRangeButtonTitle.jsx
	/**
	* @param {object} props
	* @param {string | null} props.currentValue
	* @param {string} [props.placeholder]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterDateRangeButtonTitle({ currentValue, placeholder }) {
		const [foundMatch, beginDate, endDate] = new RegExp(`(.+)?${tableConstants.dateFilterSeparator}(.+)?`, "g").exec(currentValue || "") ?? [];
		return foundMatch ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			beginDate,
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "utds-icon-before-arrow-right date-input__icon-static",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "visually-hidden",
				children: "to"
			})] }),
			endDate
		] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: placeholder ?? "Filter" });
	}
	//#endregion
	//#region react/components/table/TableFilterDateRangePopup.jsx
	/** @typedef { 'BEGIN' | 'END' } BeginEndDate */
	/** @enum {BeginEndDate} */
	var BeginEndDates = {
		BEGIN: "BEGIN",
		END: "END"
	};
	/**
	* @param {BeginEndDate} whichInput
	* @param {string} newValue
	* @param {string | undefined} currentBeginDate
	* @param {string | undefined} currentEndDate
	* @returns {string}
	*/
	function formatNewValue(whichInput, newValue, currentBeginDate, currentEndDate) {
		const beginDateStr = whichInput === BeginEndDates.BEGIN ? newValue : currentBeginDate || "";
		const endDateStr = whichInput === BeginEndDates.END ? newValue : currentEndDate || "";
		return `${beginDateStr}${tableConstants.dateFilterSeparator}${endDateStr}`;
	}
	/**
	* @param {object} props
	* @param {string} [props.dateFormat]
	* @param {string} props.id
	* @param {boolean} props.isPopupOpen
	* @param {(newValue: string) => void} props.onChange
	* @param {import('react').RefObject<HTMLDivElement | null>} props.popupReferenceElement
	* @param {(isPopupOpen: boolean) => void} props.setIsPopupOpen
	* @param {string} props.tableFilterDateId
	* @param {string} props.value
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterDateRangePopup({ dateFormat, id, isPopupOpen, onChange, popupReferenceElement, setIsPopupOpen, tableFilterDateId, value }) {
		const beginDateRef = (0, react.useRef)(null);
		const [currentInput, setCurrentInput] = (0, use_immer.useImmer)(BeginEndDates.BEGIN);
		const calendarInputRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			if (isPopupOpen) (beginDateRef.current?.querySelector(".date-input"))?.focus();
		}, [isPopupOpen]);
		const [beginDateStr, endDateStr] = (value || "").split(tableConstants.dateFilterSeparator);
		useGlobalKeyEvent({
			whichKeyCode: "Escape",
			onKeyUp: (0, react.useCallback)(() => setIsPopupOpen(false), [])
		});
		const moveToCalendarInput = (0, react.useCallback)(
			/** @param {React.KeyboardEvent<HTMLInputElement>} e */
			(e) => {
				if (e.key === "ArrowDown") {
					e.preventDefault();
					e.stopPropagation();
					(calendarInputRef.current?.querySelector(".calendar-input__cell--focused"))?.focus();
				}
			},
			[]
		);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Popup, {
			ariaLabelledBy: tableFilterDateId,
			className: joinClassNames("table-filter-date__popup", !isPopupOpen && "visually-hidden"),
			hasCloseButton: true,
			id,
			isVisible: isPopupOpen,
			onVisibleChange: (_, isVisible) => setIsPopupOpen(isVisible),
			referenceElement: popupReferenceElement,
			role: "dialog",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "flex gap-xs full-width",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DateInput, {
					ariaLabel: "Date Filter Date Begin.",
					className: "table-filter-date-popup__begin-date",
					dateFormat,
					hasCalendarPopup: false,
					id: `table-filter-date-range-popup__${tableFilterDateId}__begin-date`,
					innerRef: beginDateRef,
					isClearable: true,
					label: "Date Begin",
					onChange: (newValue) => onChange(formatNewValue(BeginEndDates.BEGIN, newValue, beginDateStr, endDateStr)),
					onClear: () => onChange(formatNewValue(BeginEndDates.BEGIN, "", beginDateStr, endDateStr)),
					value: beginDateStr,
					onKeyUp: moveToCalendarInput,
					onFocus: () => setCurrentInput(BeginEndDates.BEGIN)
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DateInput, {
					ariaLabel: "Date Filter Date End.",
					className: "table-filter-date-popup__end-date",
					dateFormat,
					hasCalendarPopup: false,
					id: `table-filter-date-range-popup__${tableFilterDateId}__end-date`,
					isClearable: true,
					label: "Date End",
					onChange: (newValue) => onChange(formatNewValue(BeginEndDates.END, newValue, beginDateStr, endDateStr)),
					onClear: () => onChange(formatNewValue(BeginEndDates.END, "", beginDateStr, endDateStr)),
					onKeyUp: moveToCalendarInput,
					value: endDateStr,
					onFocus: () => setCurrentInput(BeginEndDates.END)
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "table-filter-date-popup__selected-date-chiclets",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: joinClassNames("table-filter-date-popup__selected-date-chiclet", currentInput === BeginEndDates.BEGIN ? "table-filter-date-popup__selected-date-chiclet--selected" : "table-filter-date-popup__selected-date-chiclet--not-selected") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: joinClassNames("table-filter-date-popup__selected-date-chiclet", currentInput === BeginEndDates.END ? "table-filter-date-popup__selected-date-chiclet--selected" : "table-filter-date-popup__selected-date-chiclet--not-selected") })]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("hr", {}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(CalendarInput, {
					className: "table-filter-date-popup__calendar",
					dateFormat,
					id: `calendar-input__${tableFilterDateId}`,
					innerRef: calendarInputRef,
					label: `Calendar for table filter ${currentInput === BeginEndDates.BEGIN ? "begin" : "end"} date`,
					labelClassName: "visually-hidden",
					onChange: (newValue) => onChange(formatNewValue(currentInput, newValue, beginDateStr, endDateStr)),
					showTodayButton: true,
					value: (currentInput === BeginEndDates.BEGIN ? beginDateStr : endDateStr) ?? ""
				})
			] })]
		});
	}
	//#endregion
	//#region react/components/table/TableFilterDateRange.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} [props.dateFormat]
	* @param {string} [props.defaultValue]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} props.id
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {(newValue: string) => string} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterDateRange({ className, dateFormat = "MM/dd/yyyy", defaultValue, innerRef, id, a11yLabel, onChange, placeholder, recordFieldPath, value, ...rest }) {
		useTableFilterRegistration(recordFieldPath, defaultValue, {
			exactMatch: false,
			isDateRange: true,
			dateRangeDateFormat: dateFormat
		});
		const { state: { tableId } } = useTableContext();
		const popupContentRef = (0, react.useRef)(null);
		const [state, setState] = (0, use_immer.useImmer)({ isPopupOpen: false });
		const { currentOnChange, currentValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (
			/**
			* @param {string} newValue
			* @returns {string}
			*/
(newValue) => newValue),
			defaultValue: defaultValue ?? null,
			onChange,
			value: value ?? null
		});
		useInterval(() => {
			if (!document.activeElement?.closest(".table-header__cell--filter-date")) setState((draftState) => {
				draftState.isPopupOpen = false;
			});
		}, 250, { isDisabled: !state.isPopupOpen });
		const popupId = `${id}-popup`;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-date", className),
			id: id ?? void 0,
			ref: innerRef,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				ref: popupContentRef,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						"aria-controls": popupId,
						"aria-expanded": state.isPopupOpen,
						"aria-haspopup": "dialog",
						className: currentValue ? "" : "table-header__cell--filter-date--is-empty",
						id: `table-filter-date-range__${tableId}__${recordFieldPath}`,
						label: `Filter ${a11yLabel}`,
						...rest,
						onBlur: () => {
							setTimeout(() => {
								if (!document.activeElement?.closest(".table-filter-date__popup")) setState((draftState) => {
									draftState.isPopupOpen = false;
								});
							}, 1);
						},
						onFocus: () => {
							setState((draftState) => {
								draftState.isPopupOpen = false;
							});
						},
						onClick: () => {
							setState((draftState) => {
								draftState.isPopupOpen = true;
							});
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableFilterDateRangeButtonTitle, {
							currentValue,
							placeholder
						})
					}),
					currentValue && currentValue !== tableConstants.dateFilterSeparator ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
						className: joinClassNames("text-input__clear-button icon-button--borderless icon-button--small1x"),
						icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-x-icon",
							"aria-hidden": "true"
						}),
						onClick: () => currentOnChange(""),
						title: "Clear filter"
					}) : null,
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: joinClassNames("date-input__calendar-icon date-input__icon-static", currentValue && currentValue !== tableConstants.dateFilterSeparator ? "visually-hidden" : ""),
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: "utds-icon-before-calendar ",
							"aria-hidden": "true"
						})
					})
				]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableFilterDateRangePopup, {
				dateFormat,
				id: popupId,
				isPopupOpen: state.isPopupOpen,
				onChange: currentOnChange,
				setIsPopupOpen: (newIsPopupOpen) => setState((draftState) => {
					draftState.isPopupOpen = newIsPopupOpen;
				}),
				popupReferenceElement: popupContentRef,
				tableFilterDateId: id,
				value: currentValue || ""
			})]
		});
	}
	//#endregion
	//#region react/components/table/TableFilterNone.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterNone({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-none", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableFilterSelect.jsx
	/**
	* @template TableDataT
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {string | number} [props.defaultValue]
	* @param {boolean} [props.exactMatch]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} [props.id]
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {((e: React.ChangeEvent) => TableDataT)} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string | number} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterSelect({ a11yLabel, children, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }) {
		const { currentOnChange, currentValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (
			/**
			* @param {import('react').BaseSyntheticEvent} e
			* @returns {any}
			*/
(e) => e.target.value),
			defaultValue,
			onChange,
			value
		});
		useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch });
		const { state: { tableId } } = useTableContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-select", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Select, {
				id: `table-filter-select__${tableId}__${recordFieldPath}`,
				label: `Filter ${a11yLabel}`,
				onChange: currentOnChange,
				placeholder: placeholder ?? "Filter",
				value: currentValue?.toString(),
				...rest,
				children
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilterSelectAllOptions.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string | number} [props.defaultValue]
	* @param {boolean} [props.exactMatch]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {(() => {})} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterSelectAllOptions({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }) {
		const { currentOnChange, currentValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (
			/**
			* @param {import('react').BaseSyntheticEvent} e
			* @returns {any}
			*/
(e) => e.target.value),
			defaultValue,
			onChange,
			value
		});
		const { allData, state: { tableId } } = useTableContext();
		const dataOptions = (0, react.useMemo)(() => (0, lodash_es.uniq)(allData.map((datum) => datum[recordFieldPath]).filter(lodash_es.identity)).sort(chainSorters([(a, b) => a < b ? -1 : 0, (a, b) => a > b ? 1 : 0])), [allData]);
		useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch });
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-select", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Select, {
				id: `table-filter-select-all-options__${tableId}__${recordFieldPath}`,
				label: `Filter ${a11yLabel}`,
				onChange: currentOnChange,
				placeholder: placeholder ?? "Filter",
				value: currentValue,
				...rest,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectOption, {
					className: className ?? void 0,
					label: "",
					value: "",
					...rest
				}), dataOptions.map((dataOption) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectOption, {
					className: className ?? void 0,
					label: dataOption,
					value: dataOption,
					...rest
				}, `${id || "table-filter-select-all-options"}-${recordFieldPath}-${dataOption}`))]
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilterSelectOption.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLOptionElement>} [props.innerRef]
	* @param {string} props.label
	* @param {string | number} props.value
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterSelectOption({ className, innerRef, label, value, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SelectOption, {
			className: className ?? void 0,
			innerRef: innerRef ?? void 0,
			label,
			value,
			...rest
		});
	}
	//#endregion
	//#region react/components/table/TableFilterTextInput.jsx
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {string} [props.defaultValue]
	* @param {boolean} [props.exactMatch]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {string} [props.id]
	* @param {string} props.a11yLabel This should be an accessibility readable field name. 'Filter' will be prepended to it.
	* @param {((e: React.ChangeEvent) => (string | void | undefined))} [props.onChange]
	* @param {string} [props.placeholder]
	* @param {string} props.recordFieldPath
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilterTextInput({ a11yLabel, className, defaultValue, exactMatch, id, innerRef, onChange, placeholder, recordFieldPath, value, ...rest }) {
		const { currentOnChange, currentValue, setValue } = useCurrentValuesFromStateContext({
			contextStatePath: recordFieldPath,
			defaultOnChange: (e) => e.target?.value,
			defaultValue,
			onChange,
			value
		});
		useTableFilterRegistration(recordFieldPath, defaultValue, { exactMatch });
		const { state: { tableId } } = useTableContext();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			className: joinClassNames("table-header__cell table-header__cell--filter-text-input", className),
			id: id ?? void 0,
			ref: innerRef,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TextInput, {
				id: `table-filter-text-input__${tableId}__${recordFieldPath}`,
				label: `Filter ${a11yLabel || recordFieldPath}`,
				onChange: currentOnChange,
				onClear: () => setValue(""),
				placeholder: placeholder ?? "Filter",
				value: currentValue,
				...rest
			})
		});
	}
	//#endregion
	//#region react/components/table/TableFilters.jsx
	/** @typedef {import('@utahdts/utah-design-system').TableContextStateFilterValueObject} TableContextStateFilterValueObject */
	/**
	* @template TableDataT
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {TableContextStateFilterValueObject} [props.defaultValue]
	* @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
	* @param {string} [props.id]
	* @param {((param: { recordFieldPath: string, value: TableDataT }) => TableDataT) | null} [props.onChange]
	* @param {TableContextStateFilterValueObject} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableFilters({ children, className, defaultValue, id, innerRef, onChange, value, ...rest }) {
		const { setState, state } = (0, react.useContext)(TableContext);
		(0, react.useEffect)(() => {
			if (state.filterValues.defaultValue || state.filterValues.onChange || state.filterValues.value && Object.values(state.filterValues.value).length) console.warn("defaultValue, onChange, or value were already set for Filters. There should only be one <TableFilters/> section in a table.");
			setState((draftState) => {
				draftState.filterValues.defaultValue = defaultValue ?? null;
				draftState.filterValues.onChange = onChange ?? null;
				draftState.filterValues.value = value || draftState.filterValues.value;
			});
			return () => {
				setState((draftState) => {
					draftState.filterValues.defaultValue = null;
					draftState.filterValues.onChange = null;
					draftState.filterValues.value = {};
				});
			};
		}, []);
		(0, react.useEffect)(() => {
			setState((draftState) => {
				draftState.filterValues.value = value || draftState.filterValues.value;
			});
		}, [value]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
			className: joinClassNames("table-header__row table-header__row--filters", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableFoot.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableSectionElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableFoot({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tfoot", {
			className: joinClassNames("table-foot", className),
			id,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableFootCell.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableFootCell({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
			className: joinClassNames("table-foot__cell", className),
			id,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableFootRow.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function TableFootRow({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
			className: joinClassNames("table-foot__row", className),
			id,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableHead.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLTableSectionElement>} [props.innerRef]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function TableHead({ children, className, id, innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", {
			className: joinClassNames("table-head", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TableHeadCell.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children] if this header cell is "sortable", the children will be wrapped in a <button>, so be careful!
	* @param {string} [props.className]
	* @param {string} [props.id] field related to this column. CellTemplate and RowTemplate can define a field. used for sorting and filtering.
	* @param {import('react').RefObject<HTMLTableCellElement>} [props.innerRef]
	* @param {((e: React.MouseEvent<HTMLElement>) => {})} [props.onClick]
	* @param {string} [props.recordFieldPath]
	* @param {'row' | 'col' | 'rowgroup' | 'colgroup'} [props.scope] MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#scope
	*  row: The header relates to all cells of the row it belongs to.
	*  col: The header relates to all cells of the column it belongs to.
	*  rowgroup: The header belongs to a rowgroup and relates to all of its cells.
	*  colgroup: The header belongs to a colgroup and relates to all of its cells.
	* @param {string[]} [props.tableSortingFieldPaths]
	* @returns {import('react').JSX.Element}
	*/
	function TableHeadCell({ children, className, id, innerRef, onClick, recordFieldPath, scope, tableSortingFieldPaths, ...rest }) {
		const { setState, state: { currentSortingOrderIsDefault, sortingRules, tableSortingFieldPath } } = (0, react.useContext)(TableContext);
		const mySortingRules = sortingRules && (tableSortingFieldPaths || [recordFieldPath]).map((sortingRule) => sortingRules[sortingRule ?? ""]);
		const isSortable = !!(sortingRules[recordFieldPath ?? ""] || tableSortingFieldPaths?.length);
		const onClickCallback = (0, react.useCallback)(((e) => {
			e.stopPropagation();
			if (onClick) onClick(e);
			else if (tableSortingFieldPath === recordFieldPath) setState((draftState) => {
				draftState.currentSortingOrderIsDefault = !draftState.currentSortingOrderIsDefault;
			});
			else if (isSortable) setState((draftState) => {
				draftState.tableSortingFieldPath = recordFieldPath ?? null;
				draftState.tableSortingFieldPaths = tableSortingFieldPaths ?? null;
				draftState.currentSortingOrderIsDefault = true;
			});
		}), [
			isSortable,
			onClick,
			recordFieldPath,
			setState,
			tableSortingFieldPath,
			tableSortingFieldPaths
		]);
		const isAscending = !!mySortingRules?.[0]?.defaultIsAscending === !!currentSortingOrderIsDefault;
		const isCurrentSortingField = recordFieldPath !== null && tableSortingFieldPath === recordFieldPath;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
			"aria-sort": isCurrentSortingField && isSortable && (isAscending ? "ascending" : "descending") || void 0,
			className: joinClassNames("table-header__cell", className, isSortable && "table-header--sortable", isCurrentSortingField && "table-header--sorted", isCurrentSortingField && (isAscending ? "table-header__cell--sort-ascending" : "table-header__cell--sort-descending")),
			id: id ?? void 0,
			onClick: onClickCallback,
			ref: innerRef,
			scope: scope ?? void 0,
			...rest,
			children: isSortable ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				onClick: onClickCallback,
				type: "button",
				children: [isCurrentSortingField ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: "visually-hidden",
					children: ["Currently sorted by ", mySortingRules?.filter(lodash_es.identity)?.map((sortingRule) => {
						const isRuleAscending = !!sortingRule?.defaultIsAscending === !!currentSortingOrderIsDefault;
						return `${sortingRule?.a11yLabel || ""} ${isRuleAscending ? "ascending" : "descending"}`;
					}).join(", ")]
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: "visually-hidden",
					children: ["Sort by ", mySortingRules?.map((sortingRule) => sortingRule?.a11yLabel || "").join(", ")]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children
				})]
			}) : children
		});
	}
	//#endregion
	//#region react/components/table/TableHeadRow.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLTableRowElement>} [props.innerRef]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function TableHeadRow({ children, className, innerRef, id, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tr", {
			className: joinClassNames("table-head__row", className),
			id: id ?? void 0,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/table/TablePagination.jsx
	/**
	* @param {object} props
	* @param {string} [props.ariaLabel]
	* @param {string} [props.className]
	* @param {string} props.id
	* @param {import('react').RefObject<HTMLDivElement | HTMLElement | null>} [props.innerRef]
	* @param {number} props.itemsPerPage
	* @param {'div' | 'nav'} [props.wrapInElement]
	* @returns {import('react').JSX.Element}
	*/
	function TablePagination({ ariaLabel, className, id, innerRef, itemsPerPage, wrapInElement, ...rest }) {
		const { filteredData, setState, state } = useTableContext();
		(0, react.useEffect)(() => {
			setState((draftContext) => {
				if (!draftContext.pagination) draftContext.pagination = {
					currentPageIndex: 0,
					itemsPerPage
				};
				draftContext.pagination.itemsPerPage = itemsPerPage;
			});
			return () => {
				setState((draftContext) => {
					delete draftContext.pagination;
				});
			};
		}, [itemsPerPage]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Pagination, {
			ariaLabel,
			className,
			id,
			innerRef,
			onChange: (newPageIndex) => setState((draftContext) => {
				notNull(draftContext.pagination, "TablePagination: onChange pagination").currentPageIndex = newPageIndex;
			}),
			itemsPerPage,
			totalNumberItems: filteredData.length,
			value: state.pagination?.currentPageIndex ?? 0,
			wrapInElement,
			...rest
		});
	}
	//#endregion
	//#region react/components/table/TableSortingRule.jsx
	/**
	* @template DataT
	* @typedef {import('@utahdts/utah-design-system').TableSortingFunc<DataT>} TableSortingFunc
	*/
	/** @typedef {import('@utahdts/utah-design-system').TableSortingRuleFieldType} TableSortingRuleFieldType */
	/**
	* @template TableDataT
	* @param {object} props
	* @param {string} props.a11yLabel the A11y notification to be read when this sort rule is applied
	* @param {TableSortingFunc<TableDataT>} [props.customSort] should be a function that sorts
	* @param {boolean} [props.defaultIsAscending] should the field sort ascending by default
	* @param {TableSortingRuleFieldType} [props.fieldType] what type of data is in this field, so it knows how to sort it
	* @param {string} [props.recordFieldPath]
	*   recordFieldPath should match with a recordFieldPath for a <TableHeadCell> in the table
	*   OR as one of the tableSortingFieldPaths in a<TableHeadCell>
	*   if your records need a calculated field, it is suggested to calculate the value and store it on the record and set this path to the
	*   calculated value's path. This way the value does not have to be recalculated on every render.
	* @returns {null}
	*/
	function TableSortingRule({ a11yLabel, customSort, defaultIsAscending = true, fieldType = "string", recordFieldPath }) {
		const { registerSortingRule, unregisterSortingRule } = (0, react.useContext)(TableContext) || {};
		(0, react.useEffect)(() => {
			if (registerSortingRule) registerSortingRule({
				a11yLabel,
				customSort: customSort ?? null,
				defaultIsAscending,
				fieldType,
				recordFieldPath: recordFieldPath ?? ""
			});
			return () => unregisterSortingRule?.(recordFieldPath ?? "");
		}, [!registerSortingRule, !unregisterSortingRule]);
		return null;
	}
	//#endregion
	//#region react/components/table/TableSortingRules.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.defaultValue]
	* @param {((param: {recordFieldPath: string}) => void)} [props.onChange]
	* @param {string} [props.value]
	* @returns {import('react').JSX.Element}
	*/
	function TableSortingRules({ children, defaultValue, onChange, value }) {
		const { setState, state } = (0, react.useContext)(TableContext) || {};
		(0, react.useEffect)(() => {
			if (setState && state) if (onChange && state?.tableSortingOnChange || defaultValue && state?.tableSortingFieldPath) console.error("A TableWrapper should only have one TableSortingRules section.");
			else setState((draftState) => {
				draftState.tableSortingFieldPath = defaultValue ?? null;
				draftState.tableSortingOnChange = onChange ?? null;
			});
			return () => {
				if (setState) setState((draftState) => {
					draftState.tableSortingFieldPath = null;
					draftState.tableSortingOnChange = null;
				});
			};
		}, [!setState, !state]);
		(0, react.useEffect)(() => {
			if (value !== void 0 && setState) setState((draftState) => {
				draftState.tableSortingFieldPath = value;
			});
		}, [
			value,
			!setState,
			!state
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children });
	}
	//#endregion
	//#region react/enums/tableSortingRuleFieldType.js
	/** @typedef {import('@utahdts/utah-design-system').TableSortingRuleFieldType} TableSortingRuleFieldType */
	/** @enum {TableSortingRuleFieldType} */
	var tableSortingRuleFieldType = {
		DATE: "date",
		NUMBER: "number",
		STRING: "string"
	};
	//#endregion
	//#region react/components/table/TableWrapper.jsx
	/**
	* @template TableSortingRuleT
	* @typedef {import('@utahdts/utah-design-system').TableSortingRuleType<TableSortingRuleT>} TableSortingRuleType
	*/
	/**
	* @template TableContextStateT
	* @typedef {import('@utahdts/utah-design-system').TableContextState<TableContextStateT>} TableContextState
	*/
	/**
	* @template TableContextStateT
	* @typedef {import('@utahdts/utah-design-system').TableContextValue<TableContextStateT>} TableContextValue
	*/
	/**
	* @template SortByFieldTypeDataT
	* @param {TableSortingRuleType<SortByFieldTypeDataT>} sortingRule
	* @param {any} fieldValueA
	* @param {any} fieldValueB
	* @returns {number}
	*/
	function sortByFieldType(sortingRule, fieldValueA, fieldValueB) {
		/** @type {number} */
		let result;
		switch (sortingRule.fieldType) {
			case tableSortingRuleFieldType.DATE:
				result = (fieldValueA?.getTime() || 0) - (fieldValueB?.getTime() || 0);
				break;
			case tableSortingRuleFieldType.NUMBER:
				result = Number(fieldValueA || 0) - Number(fieldValueB || 0);
				break;
			case tableSortingRuleFieldType.STRING:
				result = (fieldValueA || "").localeCompare(fieldValueB || "");
				break;
			default: throw new Error(`Unknown tableSortingRuleFieldType '${sortingRule.fieldType}'`);
		}
		return result;
	}
	/**
	* @template TableDataT extends TableDataT & { [x: string]: any; }
	* @param {object} props
	* @param {boolean} [props.allowScrollOverflow]
	* @param {string} [props.ariaLabelledBy]
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} [props.id]
	* @returns {import('react').JSX.Element}
	*/
	function TableWrapper({ allowScrollOverflow, ariaLabelledBy, children, className, id, innerRef, ...rest }) {
		if (allowScrollOverflow && !ariaLabelledBy) console.warn(`allowScrollOverflow: TableWrapper is missing a valid ariaLabelledBy attribute`);
		const internalId = (0, react.useId)();
		/** @type {[TableContextState<TableDataT>, import('use-immer').Updater<import('@utahdts/utah-design-system').TableContextState<TableDataT>>]} */
		const [state, setState] = (0, use_immer.useImmer)(
			/** @returns {TableContextState<TableDataT>} */
			() => ({
				currentSortingOrderIsDefault: true,
				filterValues: {
					defaultValue: null,
					onChange: null,
					value: {}
				},
				sortingRules: {},
				tableData: {
					allData: [],
					filteredData: []
				},
				tableId: id ?? internalId,
				tableSortingOnChange: null,
				tableSortingFieldPath: null,
				tableSortingFieldPaths: null
			})
		);
		const stateRef = useRefAlways(state);
		const tableSortingFieldPathOldRef = (0, react.useRef)(state.tableSortingFieldPath);
		const tableSortingFieldPathsOldRef = (0, react.useRef)(state.tableSortingFieldPaths);
		const isAscendingOldRef = (0, react.useRef)(state.currentSortingOrderIsDefault);
		const { addPoliteMessage } = useAriaMessaging();
		(0, react.useEffect)(() => {
			if (tableSortingFieldPathOldRef.current && state.tableSortingFieldPath && (tableSortingFieldPathOldRef.current !== state.tableSortingFieldPath || tableSortingFieldPathsOldRef.current !== state.tableSortingFieldPaths || state.currentSortingOrderIsDefault !== isAscendingOldRef.current)) {
				const sortingRulesMessages = (state.tableSortingFieldPaths || [state.tableSortingFieldPath]).map((sortingField) => state.sortingRules[sortingField]).map((sortingRule) => {
					const isAscending = !!sortingRule?.defaultIsAscending === !!state.currentSortingOrderIsDefault;
					return `${sortingRule?.a11yLabel ?? ""} ${isAscending ? "ascending" : "descending"}`;
				});
				addPoliteMessage(`Sorting changed to ${sortingRulesMessages.join(", ")}`);
				state.tableSortingOnChange?.({ recordFieldPath: state.tableSortingFieldPath });
			}
			isAscendingOldRef.current = state.currentSortingOrderIsDefault;
			tableSortingFieldPathOldRef.current = state.tableSortingFieldPath;
			tableSortingFieldPathsOldRef.current = state.tableSortingFieldPaths;
		}, [addPoliteMessage, state]);
		const contextValue = (0, react.useMemo)(() => ({
			allData: stateRef.current.tableData.allData,
			filteredData: stateRef.current.tableData.filteredData,
			registerSortingRule: (sortingRule) => setState((draftState) => {
				draftState.sortingRules[sortingRule.recordFieldPath] = {
					...sortingRule,
					sorter: (
					/**
					*
					* @param {{ record: TableDataT, recordIndex: number }} recordA
					* @param {{ record: TableDataT, recordIndex: number }} recordB
					* @param {TableDataT[]} records
					* @returns {number}
					*/
(recordA, recordB, records) => {
						const fieldValueA = valueAtPath({
							object: recordA.record,
							path: sortingRule.recordFieldPath
						});
						const fieldValueB = valueAtPath({
							object: recordB.record,
							path: sortingRule.recordFieldPath
						});
						let result;
						if (sortingRule.customSort) result = sortingRule.customSort({
							fieldValueA,
							fieldValueB,
							recordA: recordA.record,
							recordAIndex: recordA.recordIndex,
							recordB: recordB.record,
							recordBIndex: recordB.recordIndex,
							records
						});
						else result = sortByFieldType(sortingRule, fieldValueA, fieldValueB);
						return result * (stateRef.current.currentSortingOrderIsDefault ? 1 : -1) * (sortingRule.defaultIsAscending ? 1 : -1);
					})
				};
			}),
			unregisterSortingRule: (recordFieldPath) => setState((draftState) => {
				delete draftState.sortingRules[recordFieldPath];
			}),
			/**
			* data recording per table body section so as to form a full picture of the currently exposed data
			* @param {TableDataT[] | null} allData the data for this component (or null on unmount)
			* @param {TableDataT[] | null} [filteredData] the filtered data for this component (optional, defaults to [])
			*/
			setBodyData: (allData, filteredData) => {
				setState((draftState) => {
					draftState.tableData = {
						allData: allData ?? [],
						filteredData: filteredData || []
					};
				});
			},
			setState,
			state
		}), [
			setState,
			state,
			stateRef
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TableContext.Provider, {
			value: contextValue,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"aria-labelledby": ariaLabelledBy,
				className: joinClassNames("table__wrapper", className),
				id,
				ref: innerRef,
				tabIndex: allowScrollOverflow ? 0 : void 0,
				role: allowScrollOverflow ? "region" : void 0,
				...rest,
				children
			})
		});
	}
	//#endregion
	//#region react/components/templates/MainContent.jsx
	/**
	* The MainContent component renders a <main> tag.
	* Use primarily to provide a target for the skip link.
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {string} [props.className]
	* @param {string} [props.id]
	* @param {import('react').RefObject<HTMLElement | null>} [props.innerRef]
	* @returns {import('react').JSX.Element}
	*/
	function MainContent({ children, className, id = "main-content", innerRef, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", {
			className,
			id,
			ref: innerRef,
			...rest,
			children
		});
	}
	//#endregion
	//#region react/components/templates/DocumentationTemplate.jsx
	/**
	* @param {object} props
	* @param {() => React.JSX.Element} props.content
	* @param {import('react').RefObject<HTMLElement | null>} [props.contentRef]
	* @param {import('react').ReactNode} props.sidePanelRightContent
	* @param {import('react').ReactNode} [props.sidePanelLeftContent]
	* @returns {import('react').JSX.Element}
	*/
	function DocumentationTemplate({ content: Content, contentRef, sidePanelRightContent, sidePanelLeftContent }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "documentation-template__wrapper",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "documentation-template",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "documentation-template__side-panel-left",
					children: sidePanelLeftContent
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "documentation-template__right-group",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MainContent, {
						className: "documentation-template__content",
						innerRef: contentRef,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Content, {})
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "documentation-template__side-panel-right",
						children: sidePanelRightContent
					})]
				})]
			})
		});
	}
	//#endregion
	//#region react/components/templates/LandingTemplate.jsx
	/**
	* @param {object} props
	* @param {() => React.JSX.Element} props.content
	* @returns {import('react').JSX.Element}
	*/
	function LandingTemplate({ content: Content }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MainContent, {
			className: "landing-page-template__content",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Content, {})
		});
	}
	//#endregion
	//#region react/components/widgetsIndicators/Badge.jsx
	/**
	* @param {object} props
	* @param {import('react').ReactNode} [props.children]
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {string} props.title
	* @returns {import('react').JSX.Element}
	*/
	function Badge({ children, className, innerRef, title, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: joinClassNames("badge", className, (0, lodash_es.isEmpty)(children) ? "badge--blank" : ""),
			ref: innerRef,
			...rest,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "badge__value",
				children
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: "visually-hidden",
				children: title
			})]
		});
	}
	//#endregion
	//#region react/enums/skeletonTypes.js
	/** @typedef {import('@utahdts/utah-design-system').SkeletonTypes} SkeletonTypes */
	/** @enum {SkeletonTypes} */
	var skeletonTypes = {
		CIRCULAR: "skeleton--circle",
		LINEAR: "skeleton--line",
		RECTANGULAR: "skeleton--rectangle"
	};
	//#endregion
	//#region react/components/widgetsIndicators/Skeleton.jsx
	/** @typedef {import('@utahdts/utah-design-system').SkeletonTypes} SkeletonTypes */
	/**
	* @param {object} props
	* @param {string} [props.className]
	* @param {import('react').RefObject<HTMLDivElement>} [props.innerRef]
	* @param {SkeletonTypes} [props.type]
	* @returns {import('react').JSX.Element}
	*/
	function Skeleton({ className, innerRef, type = skeletonTypes.RECTANGULAR, ...rest }) {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: joinClassNames("skeleton", className, type),
			ref: innerRef,
			...rest
		});
	}
	//#endregion
	//#region react/enums/ariaLiveTypes.js
	/** @typedef {import('@utahdts/utah-design-system').AriaLiveType} AriaLiveType */
	/** @enum {AriaLiveType} */
	var ariaLiveTypes = {
		ASSERTIVE: "assertive",
		POLITE: "polite"
	};
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/components/AriaLiveMessages.jsx
	/** @typedef {import('@utahdts/utah-design-system').AriaLiveType} AriaLiveType */
	/**
	* @typedef MessageObject {
	*  @property {string} id
	*  @property {import('react').ReactNode} message
	* }
	*/
	/**
	* @param {number} numberOfLists
	* @returns {MessageObject[][]}
	*/
	function setupDefaultLists(numberOfLists) {
		return Array.from({ length: numberOfLists }).map(() => []);
	}
	var NUMBER_REGIONS = 30;
	/**
	* @param {object} props
	* @param {AriaLiveType} props.ariaLiveType
	* @param {import('react').ReactNode[]} props.messages
	* @returns {import('react').JSX.Element}
	*/
	function AriaLiveMessages({ ariaLiveType, messages }) {
		const messagesLists = (0, react.useMemo)(() => messages.reduce((lists, message, i) => {
			lists[i % NUMBER_REGIONS]?.push({
				id: `${i}-${message}`,
				message
			});
			return lists;
		}, setupDefaultLists(NUMBER_REGIONS)), [messages]);
		/** @type {'alert' | 'log'} */
		let role;
		switch (ariaLiveType) {
			case ariaLiveTypes.ASSERTIVE:
				role = "alert";
				break;
			case ariaLiveTypes.POLITE:
				role = "log";
				break;
			default: throw new Error(`AriaLiveMessages: Unknown ariaLiveType (${ariaLiveType})`);
		}
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "aria-live-regions visually-hidden utah-design-system",
			children: messagesLists.map((messagesList) => messagesList[messagesList.length - 1]).map((messagesListMessage, i) => messagesListMessage ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"aria-live": ariaLiveType,
				role,
				children: messagesListMessage.message
			}, `${ariaLiveType}-messages-${i}`) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"aria-live": ariaLiveType,
				role
			}, `${ariaLiveType}-messages-${i}`))
		}, `aria-live-region-${ariaLiveType}`);
	}
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/hooks/useBanner.js
	/** @typedef {import('@utahdts/utah-design-system').BannerPlacement} BannerPlacement */
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBanner} UtahDesignSystemContextBanner */
	/**
	* @returns {{
	* addBanner: function(UtahDesignSystemContextBanner): void,
	* removeBanner: function(UtahDesignSystemContextBanner): void
	* }}
	*/
	function useBanner() {
		const [, setState] = useUtahDesignSystemContext();
		const addBanner = (0, react.useCallback)(
			/**
			* @param {object} param
			* @param {string} [param.className]
			* @param {number} [param.duration]
			* @param {string} [param.id]
			* @param {import('react').ReactNode} [param.icon]
			* @param {import('react').ReactNode} param.message
			* @param {(e: React.MouseEvent | undefined) => void} [param.onClose]
			* @param {BannerPlacement} [param.position]
			*/
			({ className, duration, id, icon, message, onClose, position = "bottom-left" }) => {
				setState((draftState) => {
					draftState.banners.push({
						className,
						duration,
						icon,
						id: id || (0, uuid.v4)(),
						message,
						onClose,
						position
					});
				});
			},
			[setState]
		);
		const removeBanner = (0, react.useCallback)(
			/**
			* @param {UtahDesignSystemContextBanner} banner
			* @returns {void}
			*/
			(banner) => {
				setState((draftState) => {
					const currentIndex = draftState.banners.findIndex((item) => item.id === banner.id);
					if (currentIndex !== -1) draftState.banners.splice(currentIndex, 1);
				});
			},
			[setState]
		);
		return (0, react.useMemo)(() => ({
			addBanner,
			removeBanner
		}), [addBanner, removeBanner]);
	}
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/components/BannersGlobal.jsx
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextBannerWithId} UtahDesignSystemContextBannerWithId */
	/**
	* @param {object} props
	* @param {UtahDesignSystemContextBannerWithId[]} props.banners
	* @param {number} [props.bannerDuration]
	* @param {string} [props.defaultClassName]
	* @returns {import('react').JSX.Element}
	*/
	function BannersGlobal({ banners, bannerDuration, defaultClassName }) {
		const { removeBanner } = useBanner();
		const timers = (0, react.useMemo)(() => ({}), []);
		const [zones, setZones] = (0, use_immer.useImmer)({});
		const currentOnClose = (0, react.useCallback)(
			/**
			* @param {import('react').MouseEvent | undefined} e
			* @param {UtahDesignSystemContextBannerWithId} banner
			*/
			(e, banner) => {
				if (banner.onClose) banner.onClose(e);
				else removeBanner(banner);
				if (banner.id) clearTimeout(timers[banner.id]);
			},
			[removeBanner, timers]
		);
		(0, react.useEffect)(() => {
			const draftZones = {};
			[...new Set(banners.map((banner) => banner.position))].forEach((zone) => {
				if (zone) draftZones[zone] = [];
			});
			banners.forEach((banner) => {
				const duration = banner.duration || bannerDuration;
				if (duration && !timers[banner.id]) timers[banner.id] = window.setTimeout(() => {
					currentOnClose(void 0, banner);
				}, duration);
				draftZones[banner.position].push(banner);
			});
			setZones(draftZones);
		}, [
			bannerDuration,
			banners,
			currentOnClose,
			removeBanner,
			setZones,
			timers
		]);
		(0, react.useEffect)(() => {
			Object.keys(timers).forEach((key) => clearTimeout(timers[key]));
		}, []);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "utah-design-system banner-global__wrapper",
			"aria-live": "polite",
			children: Object.keys(zones).map((zone) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: joinClassNames(`banner-global__${zone}`, "banner-global__zone"),
				children: zones[zone]?.map((banner) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
					id: `banner__${banner.id}`,
					className: banner.className || defaultClassName,
					position: banner.position,
					onClose: (e) => currentOnClose(e, banner),
					children: [banner.icon ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BannerIcon, { children: banner.icon }) : "", /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BannerMessage, { children: banner.message })]
				}, `banner__${banner.id}`))
			}, `banner-global__${zone}`))
		});
	}
	//#endregion
	//#region react/contexts/UtahDesignSystemContext/UtahDesignSystemContextProvider.jsx
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemDefaultSettings} UtahDesignSystemDefaultSettings */
	/** @typedef {import('@utahdts/utah-design-system').UtahDesignSystemContextValue} UtahDesignSystemContextValue */
	/**
	* provider that wraps the app at the top level
	* @param {object} props
	* @param {import('react').ReactNode} props.children
	* @param {UtahDesignSystemDefaultSettings} [props.defaultSettings]
	* @returns {import('react').JSX.Element}
	*/
	function UtahDesignSystemContextProvider({ children, defaultSettings }) {
		const immerHook = (0, use_immer.useImmer)(() => ({
			ariaLive: {
				assertiveMessages: [],
				politeMessages: []
			},
			banners: []
		}));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(UtahDesignSystemContext.Provider, {
			value: immerHook,
			children: [
				children,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AriaLiveMessages, {
					ariaLiveType: ariaLiveTypes.ASSERTIVE,
					messages: immerHook[0].ariaLive.assertiveMessages
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AriaLiveMessages, {
					ariaLiveType: ariaLiveTypes.POLITE,
					messages: immerHook[0].ariaLive.politeMessages
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(BannersGlobal, {
					banners: immerHook[0].banners,
					bannerDuration: defaultSettings?.bannerDuration,
					defaultClassName: defaultSettings?.defaultClassName
				})
			]
		});
	}
	//#endregion
	//#region react/contexts/utahHeaderContext/UtahHeaderContext.js
	/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */
	var UtahHeaderContext = (0, react.createContext)({
		settings: (0, _utahdts_utah_design_system_header.getUtahHeaderSettings)(),
		setSettings: (() => {}),
		settingsRef: { current: null }
	});
	//#endregion
	//#region react/hooks/useImmerRef.js
	/**
	* Stale state is an issue! Occurs mainly inside event callbacks where the callback's
	* `state` variable is stale compared to the last rendered `state`. Those cases are
	* resolved by setting a ref to the current state and then using the ref in the
	* callback. It's always a bit jarring to see useState followed by useRef with the
	* wiring. This is a simple hook that does that wiring and supplies state, setState,
	* and ref in a visually less distracting hook.
	*
	* Be careful, because setting the value of the ref does NOT update the state and will reset
	* back to the state's value after the next render.
	*
	* Note that because defaultState goes to useState and then flows to useRef, that this
	* hook makes useRef now allow a function to be resolved as its default value! yay!
	* @template StateT
	* @param {StateT} defaultState
	* @returns {[StateT, import('use-immer').Updater<StateT>, import('react').MutableRefObject<StateT>]}
	*/
	function useImmerRef(defaultState) {
		const [state, setState] = (0, use_immer.useImmer)(defaultState);
		return [
			state,
			setState,
			useRefAlways(state)
		];
	}
	//#endregion
	//#region react/contexts/utahHeaderContext/UtahHeaderContextProvider.jsx
	/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */
	/**
	* provider that wraps the app at the top level
	* @param {object} props
	* @param {React.ReactNode} props.children
	* @param {SettingsInput} [props.defaultSettings]
	* @returns {React.JSX.Element}
	*/
	function UtahHeaderContextProvider({ children, defaultSettings }) {
		const [settings, setSettings, settingsRef] = useImmerRef(() => ({
			...(0, _utahdts_utah_design_system_header.getUtahHeaderSettings)(),
			...defaultSettings ?? {}
		}));
		(0, react.useEffect)(() => {
			(0, _utahdts_utah_design_system_header.setUtahHeaderSettings)(settings);
		}, [settings]);
		const providedSettings = (0, react.useMemo)(() => ({
			settings,
			setSettings,
			settingsRef
		}), [
			setSettings,
			settings,
			settingsRef
		]);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(UtahHeaderContext.Provider, {
			value: providedSettings,
			children
		});
	}
	//#endregion
	//#region react/contexts/utahHeaderContext/useUtahHeaderContext.js
	/** @typedef {import('@utahdts/utah-design-system-header').Settings} Settings */
	/** @typedef {import('@utahdts/utah-design-system-header').SettingsInput} SettingsInput */
	/**
	* This hook provides the context's data; most everything should just use this hook and nothing else
	* @returns {{ settings: Settings, setSettings: import('use-immer').Updater<Settings>, settingsRef: import('react').RefObject<Settings> }}
	*/
	function useUtahHeaderContext() {
		return (0, react.useContext)(UtahHeaderContext);
	}
	//#endregion
	//#region react/hooks/useMountingTracker.js
	/** @param {string} title */
	function useMountingTracker(title) {
		const originalTitleRef = (0, react.useRef)(title);
		console.log(`${title}: rendering...`);
		(0, react.useEffect)(() => {
			if (originalTitleRef.current !== title) throw new Error(`useMountingTracker: title changed! '${originalTitleRef.current}' => '${title}'`);
			console.log(`+ ${title}: mounted`);
			return () => {
				console.log(`- ${title}: unmounted`);
			};
		}, [title]);
	}
	//#endregion
	//#region react/hooks/useRefLazy.js
	/**
	* lazy loads the ref like how useState() can lazy load state via a function
	* @template T
	* @param {T | (() => T)} lazyValue
	* @returns {import('react').MutableRefObject<T>}
	*/
	function useRefLazy(lazyValue) {
		const isLoadedRef = (0, react.useRef)(false);
		const ref = (0, react.useRef)(void 0);
		if (!isLoadedRef.current) {
			isLoadedRef.current = true;
			ref.current = (0, lodash_es.isFunction)(lazyValue) ? lazyValue() : lazyValue;
		}
		return ref;
	}
	//#endregion
	//#region react/hooks/useTimeout.js
	/** @param {number[]} timeoutIds */
	function clearTimeoutIds(timeoutIds) {
		timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
		timeoutIds.splice(0, timeoutIds.length);
	}
	/**
	* @param {number} delay how long to wait before firing callback
	* @param {boolean} isDebounced if true, cancels previous timeout; if false, lets previous timeouts also complete
	* @returns {(callback: (() => void)) => void} call this function to fire your timeout
	*/
	function useTimeout(delay, isDebounced) {
		const timeoutIdsRef = (0, react.useRef)([]);
		(0, react.useEffect)(() => () => clearTimeoutIds(timeoutIdsRef.current), []);
		return (0, react.useCallback)((callback) => {
			if (isDebounced) clearTimeoutIds(timeoutIdsRef.current);
			timeoutIdsRef.current.push(window.setTimeout(callback, delay));
		}, [delay, isDebounced]);
	}
	//#endregion
	//#region react/util/handleKeyPress.js
	/**
	* @template KeyboardEventHandlerT
	* @typedef {import('react').KeyboardEventHandler<KeyboardEventHandlerT>} KeyboardEventHandler
	*/
	/**
	* @template KeyboardEventHandlerT
	* @param {string} code
	* @param {import('react').EventHandler<any>} handler
	* @returns {import('react').KeyboardEventHandler<KeyboardEventHandlerT>}
	*/
	function handleKeyPress(code, handler) {
		return (e) => e.code === code && handler(e);
	}
	//#endregion
	//#region react/util/rectContainsPoint.js
	/**
	* determines if a point is inclusively within a rectangle. helpful for checking if a click was on an element.
	* @param {DOMRect} rect ({top, bottom, left, right}) defines an area
	* @param {{ x: number, y: number }} point ({x, y}) defines a point
	* @returns {boolean}
	*/
	function rectContainsPoint(rect, point) {
		return rect.left <= point.x && rect.right >= point.x && rect.top <= point.y && rect.bottom >= point.y;
	}
	//#endregion
	//#region react/util/stringToId.js
	/**
	* Convert an input string such as a title to a valid html id
	* @param {string} inputString The string to convert to an html id string
	* @returns {string}
	*/
	function stringToId(inputString) {
		let retVal;
		retVal = inputString?.toLowerCase();
		retVal = retVal?.replaceAll(" ", "-");
		retVal = retVal?.replaceAll(/[^a-zA-Z0-9-]+/g, "");
		return retVal;
	}
	//#endregion
	//#region index.js
	var { version } = package_default;
	//#endregion
	exports.Accordion = Accordion;
	exports.BANNER_PLACEMENT = BANNER_PLACEMENT;
	exports.BUTTON_APPEARANCE = BUTTON_APPEARANCE;
	exports.BUTTON_TYPES = BUTTON_TYPES;
	exports.Badge = Badge;
	exports.Banner = Banner;
	exports.BannerIcon = BannerIcon;
	exports.BannerMessage = BannerMessage;
	exports.Button = Button;
	exports.CalendarInput = CalendarInput;
	exports.CharacterCount = CharacterCount;
	exports.Checkbox = Checkbox;
	exports.ClickableTag = ClickableTag;
	exports.ComboBox = ComboBox;
	exports.ComboBoxOption = ComboBoxOption;
	exports.ComboBoxOptionGroup = ComboBoxOptionGroup;
	exports.ConfirmationButton = ConfirmationButton;
	exports.ConfirmationChildren = ConfirmationChildren;
	exports.DRAWER_PLACEMENT = DRAWER_PLACEMENT;
	exports.DateInput = DateInput;
	exports.DocumentationTemplate = DocumentationTemplate;
	exports.Drawer = Drawer;
	exports.DrawerContent = DrawerContent;
	exports.DrawerFooter = DrawerFooter;
	exports.DrawerTitle = DrawerTitle;
	exports.ExternalLink = ExternalLink;
	exports.FileInput = FileInput;
	exports.FooterAgencyInformation = FooterAgencyInformation;
	exports.FooterAgencyInformationColumn = FooterAgencyInformationColumn;
	exports.FooterAgencyInformationInfo = FooterAgencyInformationInfo;
	exports.FooterSocialMediaBar = FooterSocialMediaBar;
	exports.Form = Form;
	exports.HorizontalMenu = HorizontalMenu;
	exports.ICON_BUTTON_APPEARANCE = ICON_BUTTON_APPEARANCE;
	exports.IconButton = IconButton;
	exports.InitialChildren = InitialChildren;
	exports.LandingTemplate = LandingTemplate;
	exports.LinkCallback = LinkCallback;
	exports.MainContent = MainContent;
	exports.Modal = Modal;
	exports.ModalContent = ModalContent;
	exports.ModalFooter = ModalFooter;
	exports.ModalTitle = ModalTitle;
	exports.MultiSelect = MultiSelect;
	exports.MultiSelectOption = MultiSelectOption;
	exports.MultiSelectOptionGroup = MultiSelectOptionGroup;
	exports.MultiSelectTagTemplate = MultiSelectTagTemplate;
	exports.OnThisPage = OnThisPage;
	exports.Pagination = Pagination;
	exports.PlainText = PlainText;
	exports.Popup = Popup;
	exports.RadioButton = RadioButton;
	exports.RadioButtonGroup = RadioButtonGroup;
	exports.Select = Select;
	exports.SelectOption = SelectOption;
	exports.Skeleton = Skeleton;
	exports.Spinner = Spinner;
	exports.Switch = Switch;
	exports.Tab = Tab;
	exports.TabGroup = TabGroup;
	exports.TabGroupTitle = TabGroupTitle;
	exports.TabList = TabList;
	exports.TabPanel = TabPanel;
	exports.TabPanels = TabPanels;
	exports.Table = Table;
	exports.TableBody = TableBody;
	exports.TableBodyData = TableBodyData;
	exports.TableBodyDataCellTemplate = TableBodyDataCellTemplate;
	exports.TableBodyDataRowTemplate = TableBodyDataRowTemplate;
	exports.TableCell = TableCell;
	exports.TableContextConsumer = TableContextConsumer;
	exports.TableFilterComboBox = TableFilterComboBox;
	exports.TableFilterComboBoxAllOptions = TableFilterComboBoxAllOptions;
	exports.TableFilterComboBoxOption = TableFilterComboBoxOption;
	exports.TableFilterCustom = TableFilterCustom;
	exports.TableFilterDateRange = TableFilterDateRange;
	exports.TableFilterNone = TableFilterNone;
	exports.TableFilterSelect = TableFilterSelect;
	exports.TableFilterSelectAllOptions = TableFilterSelectAllOptions;
	exports.TableFilterSelectOption = TableFilterSelectOption;
	exports.TableFilterTextInput = TableFilterTextInput;
	exports.TableFilters = TableFilters;
	exports.TableFoot = TableFoot;
	exports.TableFootCell = TableFootCell;
	exports.TableFootRow = TableFootRow;
	exports.TableHead = TableHead;
	exports.TableHeadCell = TableHeadCell;
	exports.TableHeadRow = TableHeadRow;
	exports.TablePagination = TablePagination;
	exports.TableRow = TableRow;
	exports.TableSortingRule = TableSortingRule;
	exports.TableSortingRules = TableSortingRules;
	exports.TableWrapper = TableWrapper;
	exports.Tag = Tag;
	exports.TextArea = TextArea;
	exports.TextInput = TextInput;
	exports.TimeInput = TimeInput;
	exports.Tooltip = Tooltip;
	exports.UtahDesignSystemContext = UtahDesignSystemContext;
	exports.UtahDesignSystemContextProvider = UtahDesignSystemContextProvider;
	exports.UtahHeaderContext = UtahHeaderContext;
	exports.UtahHeaderContextProvider = UtahHeaderContextProvider;
	exports.VerticalMenu = VerticalMenu;
	exports.chainSorters = chainSorters;
	exports.componentColors = componentColors;
	Object.defineProperty(exports, "events", {
		enumerable: true,
		get: function() {
			return _utahdts_utah_design_system_header.events;
		}
	});
	exports.formElementSizesEnum = formElementSizesEnum;
	exports.getFocusableElements = getFocusableElements;
	exports.handleEvent = handleEvent;
	exports.handleKeyPress = handleKeyPress;
	exports.joinClassNames = joinClassNames;
	exports.menuTypes = menuTypes;
	exports.popupPlacement = popupPlacement;
	exports.rectContainsPoint = rectContainsPoint;
	Object.defineProperty(exports, "renderDOMSingle", {
		enumerable: true,
		get: function() {
			return _utahdts_utah_design_system_header.renderDOMSingle;
		}
	});
	exports.setValueAtPath = setValueAtPath;
	exports.skeletonTypes = skeletonTypes;
	exports.stringToId = stringToId;
	exports.tableSortingRuleFieldType = tableSortingRuleFieldType;
	exports.useAriaMessaging = useAriaMessaging;
	exports.useBanner = useBanner;
	exports.useGlobalKeyEvent = useGlobalKeyEvent;
	exports.useHandleEscape = useHandleEscape;
	exports.useHandleTab = useHandleTab;
	exports.useImmerRef = useImmerRef;
	exports.useInterval = useInterval;
	exports.useMountingTracker = useMountingTracker;
	exports.usePaginatedList = usePaginatedList;
	exports.usePopupDelay = usePopupDelay;
	exports.useRefAlways = useRefAlways;
	exports.useRefLazy = useRefLazy;
	exports.useTimeout = useTimeout;
	exports.useUtahDesignSystemContext = useUtahDesignSystemContext;
	exports.useUtahHeaderContext = useUtahHeaderContext;
	exports.valueAtPath = valueAtPath;
	exports.version = version;
});
