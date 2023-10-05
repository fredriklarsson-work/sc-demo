import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import SortableExample from './components/SortableExample';
import FilterExample from './components/FilterExample';
import { Item, Nav } from './components/Navigation';
import GlobalStyle from './styles/globalstyles';

type Theme = {
	fg: string;
	bg: string;
	accent: string;
};

function App() {
	const menu: string[] = ['Example 1', 'Example 2'];
	const theme: Theme = { fg: '#333', bg: '#fff', accent: '#ccc' };
	const invertTheme: Theme = { fg: theme.bg, bg: theme.fg, accent: '#fff' };
	const [active, setActive] = useState<number>(0);
	const [activeTheme, setActiveTheme] = useState<Theme>(theme);

	return (
		<div>
			<ThemeProvider theme={activeTheme}>
				<GlobalStyle />

				<div>
					<span style={{ margin: '0 0.5em' }} onClick={() => setActiveTheme(theme)}>
						Light
					</span>
					<span style={{ margin: '0 0.5em' }} onClick={() => setActiveTheme(invertTheme)}>
						Dark
					</span>
				</div>
				<Nav>
					<ul>
						{menu.map((item: string, index: number) => (
							<Item key={index} item={item} index={index} active={index === active} onClickFunction={setActive} />
						))}
					</ul>
				</Nav>
				{active === 0 && <SortableExample />}
				{active === 1 && <FilterExample />}
			</ThemeProvider>
		</div>
	);
}

export default App;
