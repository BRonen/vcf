import { main } from '../src/index'
import './mocks/Blob'

describe('initial module', () => {
	it('should return the correct string', async () => {
		expect(await main()).toBe('hello world')
	})
})