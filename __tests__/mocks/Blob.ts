class MockedBlob extends Blob {
	private _buffer?: string

	constructor(blobParts?: BlobPart[], options?: BlobPropertyBag) {
		super(blobParts, options)
		if(blobParts) this._buffer = blobParts.join()
	}

	async text() {
		return this._buffer || ''
	}
}

global.Blob = MockedBlob

export default MockedBlob