export interface MidiFile {
    id: string;
    title: string;
    price: number;
    description?: string;
    previewUrl?: string;
    fileUrl: string;
    createdAt: Date;
    tags?: string[];
    bpm?: number;
    key?: string;
}

export interface SamplePack {
    id: string;
    title: string;
    price: number;
    description?: string;
    previewUrl?: string;
    fileUrl: string;
    createdAt: Date;
    tags?: string[];
    numberOfSamples: number;
    sampleTypes?: string[];
    genre?: string;
}

export interface MidiPack {
    id: string;
    title: string;
    price: number;
    description?: string;
    previewUrl?: string;
    fileUrl: string;
    createdAt: Date;
    tags?: string[];
    midiFiles: MidiFile[];
    numberOfFiles: number;
    genre?: string;
}
