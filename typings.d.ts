interface IStreamDeck {
	readonly ICON_SIZE: number;
	write(buffer: Buffer): void;
	sendFeatureReport(buffer: Buffer): void;

	setBrightness(percentage: number): void;

	clearKey(keyIndex: number): void;
	fillColor(keyIndex: number, r: number, g: number, b: number): void;

	bufferToIntArray(buffer: Buffer): number[];

	on(event: 'up', handler: (key: number) => void): this;
	on(event: 'down', handler: (key: number) => void): this;

	on(event: 'error', handler: (error: Error) => void): this;
}

const streamDeck: IStreamDeck;
export = streamDeck;
