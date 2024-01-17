import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
		font-family: "Inter", Arial, Helvetica, sans-serif;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		text-rendering: optimizeLegibility;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
	}
	input{
		outline: 0;
		border: none;
	}
	html, body, #root{
		height: 100%;
	}
	button{
		outline: 0;
		border: none;
	}

	/* tipografria */
	h1{
		color: #0A194F;
		font-size: 17px;
		font-weight: 800;
	}
	h2{
		font-family: Inter;
		font-size: 14.13px;
		font-style: normal;
		font-weight: 800;
		line-height: normal;
	}
	p{
		color: #555353;
		font-size: 11.636px;
		font-weight: 300;
	}
	a{
		color: black;
	}
	/* tipografia */

	/* reset para navegadores */
	

	/* Para navegadores baseados no Chromium (como o Google Chrome) */
		/* Cor de fundo do autocomplete */
/* Para todos os navegadores */
		input:-webkit-autofill,
		input:-webkit-autofill:hover, 
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			-webkit-box-shadow: none !important;
			transition: background-color 5000s ease-in-out 0s; /* Adiciona um tempo de transição para evitar mudanças bruscas */
		}

		/* Para navegadores baseados no Chromium (como o Google Chrome) */
		input:-webkit-autofill {
			background-color: transparent !important;
		}

		/* Para outros navegadores que suportam o autocompletar */
		input:-moz-autofill {
			background-color: transparent !important;
		}

		/* Para navegadores mais recentes que suportam o autocompletar */
		input:-ms-input-placeholder {
			background-color: transparent !important;
		}
	/* reset para navegadores */
`;

export default ResetStyle;
