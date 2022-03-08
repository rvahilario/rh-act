import { render, screen } from '@/test-utils';

import { ExampleComponent } from './ExampleComponent';

describe('<ExampleComponent />', () => {
	it('should render ExampleComponent', () => {
		render(<ExampleComponent title="Example Component" />);

		const testButton = screen.getByRole('button', {
			name: /example component/i,
		});
		expect(testButton).toBeInTheDocument();
	});
});
