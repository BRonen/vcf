const createObjectURL = (_: Blob) => { // eslint-disable-line
	return 'http://host/fake_url'
}

URL.createObjectURL = createObjectURL

export default { createObjectURL }