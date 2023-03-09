import { VCFData } from '~/index.d'

export function vcfData({
	name,
	lastname,
	org,
	role,
	email,
	telephone,
	description,
	website,
}: VCFData) {
	const data = [
		'BEGIN:VCARD',
		'VERSION:3.0',
	]

	if(name && lastname)
		data.push(
			`N:${lastname || ''};${name};;;`,
			`FN:${name} ${lastname || ''}`,
		)
		
	if(name && !lastname)
		data.push(
			`N:;${name};;;`,
			`FN:${name}`,
		)

	if(org)
		data.push(
			`ORG:${org};`,
		)

	if(role)
		data.push(
			`TITLE:${role}`,
		)

	if(email)
		data.push(
			`EMAIL;type=INTERNET;type=WORK;type=pref:${email}`,
		)

	if(telephone)
		data.push(
			`TEL;type=CELL;type=pref:${telephone}`,
		)

	if(description)
		data.push(
			`NOTE: ${description}`,
		)

	if(website)
		data.push(
			`item1.URL;type=pref:${website}`,
		)

	data.push('END:VCARD\n')

	return data.join('\n')
}

// export function generateUrl(buffer: string): string {
// 	const vcf = new Blob([buffer], { type: 'text/vcard' })
// 	
// 	return URL.createObjectURL(vcf)
// }
