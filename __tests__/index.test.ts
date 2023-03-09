import { vcfData } from '../src/index'
import { completeVCF, onlyNameVCF } from './mocks/Vcards'
import './mocks/Blob'

describe('initial module', () => {
	it('should return the parsed data of a vcard file (only first name)', () => {
		const vcf = vcfData({
			name: 'John'
		})

		expect(vcf).toBe(onlyNameVCF())
	})
	
	it('should return the parsed data of a vcard file (complete data)', () => {
		const vcf = vcfData({
			name: 'John',
			lastname: 'Doe',
			org: 'Some Corp.',
			role: 'Software Engineer',
			email: 'johndoe@some.corp',
			telephone: '+55 2112341234',
			description: 'Lorem ipsum dolor sit amet.',
			website: 'https://some.corp/',
		})

		expect(vcf).toBe(completeVCF())
	})
})