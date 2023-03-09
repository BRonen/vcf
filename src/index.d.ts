declare module 'vcf'

export interface VCFData {
	name: string
	lastname?: string
	org?: string
	role?: string
	email?: string
	telephone?: string
	description?: string
	website?: string
}

export function vcfData(data: VCFData): string