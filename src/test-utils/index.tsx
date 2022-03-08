import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import Theme from '@/styles/theme';

const AllTheProviders: FC = ({ children }) => {
	return <Theme>{children}</Theme>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
