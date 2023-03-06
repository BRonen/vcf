export async function main() {
	const b = new Blob(['hello world'])

	return b.text()
}