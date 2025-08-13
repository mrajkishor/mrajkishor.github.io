export const CSS = {
    "CSS (Cascading Style Sheets)": {
        "___urlPath___": "css",
        "CSS Core Concepts": {
            "What is CSS? Styling vs Structure (Separation of Concerns)": true,
            "CSS Syntax: Selectors, Properties, Values, Declaration Blocks": true,
            "Cascading, Inheritance, and Specificity": true,
            "Types of CSS (Inline, Internal, External)": true,
            "CSSOM (CSS Object Model) and Relationship to DOM": true
        },
        "Selectors and Combinators": {
            "___urlPath___": "selectors-and-combinators",
            "Basic Selectors (`*`, `element`, `.class`, `#id`)": {
                "___urlPath___": "basic-selectors",
                "___md___": 1078
            },
            "Attribute Selectors (`[type='text']`, `[data-*]`)": {
                "___urlPath___": "attribute-selectors",
                "___md___": 1079
            },
            "Group, Child, Sibling, and Descendant Selectors": {
                "___urlPath___": "group-child-sibling-and-descendant-selectors",
                "___md___": 1080
            },
            "Pseudo-classes (`:hover`, `:focus`, `:nth-child`, `:not`, etc.)": {
                "___urlPath___": "pseudo-classes",
                "___md___": 1081
            },
            "Pseudo-elements (`::before`, `::after`, `::first-line`, etc.)": {
                "___urlPath___": "pseudo-elements",
                "___md___": 1082
            }
        },
        "Box Model and Layout": {
            "___urlPath___": "box-model-and-layout",
            "Box Model (`content`, `padding`, `border`, `margin`)": {
                "___urlPath___": "box-model",
                "___md___": 1083
            },
            "Width, Height, `box-sizing` and Overflow": {
                "___urlPath___": "width-height-box-sizing-and-overflow",
                "___md___": 1084
            },
            "Display Property: `block`, `inline`, `inline-block`, `none`": {
                "___urlPath___": "display-property",
                "___md___": 1085
            },
            "Positioning: `static`, `relative`, `absolute`, `fixed`, `sticky`": {
                "___urlPath___": "positioning",
                "___md___": 1087
            },
            "Z-Index and Stacking Context": {
                "___urlPath___": "z-index-and-stacking-context",
                "___md___": 1086
            }
        },
        "Flexbox Layout": {
            "Flex Container and Item Basics": true,
            "Properties: `flex-direction`, `justify-content`, `align-items`, `align-self`": true,
            "Wrapping and Flow: `flex-wrap`, `flex-flow`": true,
            "Order and Alignment Strategies for UI Layouts": true,
            "Real-World Flexbox Layout Use Cases": true
        },
        "Grid Layout": {
            "Grid Container and Grid Items": true,
            "Defining Rows and Columns (`grid-template-rows`, `grid-template-columns`)": true,
            "Grid Gaps, Auto Placement, and `grid-auto-flow`": true,
            "Grid Areas and `grid-template-areas`": true,
            "Responsive Grid with `fr`, `minmax`, and `auto-fit/auto-fill`": true
        },
        "Typography and Text Styling": {
            "Font Properties (`font-family`, `font-size`, `font-weight`, `line-height`)": true,
            "Text Properties (`color`, `letter-spacing`, `word-spacing`, `text-align`, `text-transform`)": true,
            "Web Fonts (`@font-face`, Google Fonts)": true,
            "Text Overflow, Wrapping, and Truncation (`white-space`, `overflow-wrap`, `text-overflow`)": true
        },
        "Colors, Backgrounds, and Gradients": {
            "Color Formats: Hex, RGB, RGBA, HSL, HSLA": true,
            "Background Properties: `background-color`, `background-image`, `background-size`, `background-position`": true,
            "Linear and Radial Gradients": true,
            "Multiple Background Layers": true,
            "Opacity vs `rgba()` vs `background-blend-mode`": true
        },
        "Borders, Shadows, and Effects": {
            "Border Styling (`border`, `border-radius`)": true,
            "Box Shadows and Text Shadows": true,
            "Outline vs Border vs Box-Shadow": true,
            "Filter Effects (`blur`, `brightness`, `grayscale`, `drop-shadow`)": true
        },
        "Transitions, Transforms, and Animations": {
            "CSS Transitions (`transition`, `transition-delay`, `transition-timing-function`)": true,
            "CSS Transforms (`scale`, `rotate`, `translate`, `skew`)": true,
            "CSS Animations (`@keyframes`, `animation-name`, `animation-duration`, etc.)": true,
            "Easing Functions and Animation Curves": true,
            "Performance Optimization for Animations": true
        },
        "Media Queries and Responsive Design": {
            "Syntax of Media Queries (`@media`, `min-width`, `max-width`)": true,
            "Responsive Units: `em`, `rem`, `vw`, `vh`, `%`": true,
            "Mobile-First vs Desktop-First Strategy": true,
            "Breakpoints and Design Patterns": true,
            "Orientation, Resolution, and Device Capabilities": true
        },
        "CSS Architecture and Methodologies": {
            "___urlPath___": "css-architecture-and-methodologies",
            "BEM (Block Element Modifier) Naming Convention": {
                "___urlPath___": "bem-naming-convention",
                "___md___": 1088
            },
            "OOCSS (Object-Oriented CSS)": {
                "___urlPath___": "oocss-object-oriented-css",
                "___md___": 1089
            },
            "SMACSS (Scalable and Modular Architecture for CSS)": {
                "___urlPath___": "smacss-scalable-and-modular-architecture-for-css",
                "___md___": 1090
            },
            "Atomic CSS and Utility-First Frameworks (e.g., Tailwind CSS)": {
                "___urlPath___": "atomic-css-and-utility-first-frameworks",
                "___md___": 1091
            },
            "Avoiding CSS Bloat and Ensuring Maintainability": true
        },
        "Forms and Input Elements": {
            "Form Tag and Method Attributes (`action`, `method`, `target`)": true,
            "Input Types (`text`, `email`, `file`, `checkbox`, `radio`, etc.)": true,
            "Form Controls (`<label>`, `<select>`, `<textarea>`, `<button>`)": true,
            "Form Validation: `required`, `pattern`, `min`, `max`, `novalidate`": true,
            "Styling Focus, Placeholder, and Invalid States": true
        },
        "Tables and Tabular Data": {
            "Table Structure (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`)": true,
            "Cells and Headers (`<tr>`, `<th>`, `<td>`, `colspan`, `rowspan`)": true,
            "Semantic Tables and Accessibility (`scope`, `caption`)": true,
            "Responsive Table Design Techniques": true,
            "CSS-only Zebra Striping and Hover Effects": true
        },
        "Advanced Topics and Browser Behavior": {
            "Vendor Prefixes and Autoprefixer Usage": true,
            "Critical CSS and First Paint Optimization": true,
            "CSS Containment and Isolation (`contain`, `isolation`)": true,
            "Feature Queries (`@supports`)": true,
            "Custom Properties (CSS Variables)": true
        },
        "CSS Tooling and Preprocessors": {
            "SASS / SCSS Syntax and Nesting": true,
            "Mixins, Variables, Partials, Functions": true,
            "Importing and Combining Stylesheets": true,
            "PostCSS and CSS Modules": true,
            "Linting with Stylelint and Integration with CI/CD": true
        },


        "Modern UI/UX Design": {
            "___urlPath___": "ux-design-systems",
            "___md___": 944
        }
    }
}