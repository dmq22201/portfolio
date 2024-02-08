import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  name: "light",
  body: "var(--color-gray-50)",
  text: "var(--color-gray-950)",
};
export const darkTheme = {
  name: "dark",
  body: "var(--color-gray-900)",
  text: "var(--color-white)",
};

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f1f5f9;
    --color-gray-200: #e2e8f0;
    --color-gray-300: #cbd5e1;
    --color-gray-400: #94a3b8;
    --color-gray-500: #64748b;
    --color-gray-600: #475569;
    --color-gray-700: #334155;
    --color-gray-800: #1e293b;
    --color-gray-900: #0f172a;
    --color-gray-950: #020617; 

    // Primary
    --color-green-500: #22c55e;
    --color-green-600: #16a34a;

    // Secondary

    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); 
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    --shadow-inner:	inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --shadow-none: 0 0 #0000;
  }


  *, *::before, *::after {
    box-sizing: border-box;
    // Tại sao ta không để margin, padding = 0 vào đây. Bởi vì: pseudo elements don't have a margin or padding by default, and will inherit all the font properties, so there's no need to declare any of those
  }

  * {
    margin: 0;
    padding: 0;
    font-size: inherit;
  }

  html{
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    background-color: var(--color-gray-50); 
    background-color: ${(props) => props?.theme?.body};
    color: ${(props) => props?.theme?.text};
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
  }

  img, picture, svg, video{
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyle;
