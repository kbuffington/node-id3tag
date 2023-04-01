"use strict";
/*
 **  List of official text information frames
 **  LibraryName: "T***"
 **  Value is the ID of the text frame specified in the link above,
 ** the object's keys are just for simplicity, you can also use the ID directly.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyFramesRemapped = exports.ID3v23Frames = exports.ID3v24Frames = void 0;
exports.ID3v24Frames = {
    album: { key: 'TALB' },
    albumSortOrder: { key: 'TSOA' },
    artist: { key: 'TPE1' },
    artistSortOrder: { key: 'TSOP' },
    bpm: { key: 'TBPM' },
    composer: { key: 'TCOM' },
    conductor: { key: 'TPE3' },
    contentGroup: { key: 'TIT1' },
    copyright: { key: 'TCOP' },
    date: { key: 'TDRC' },
    encodedBy: { key: 'TENC' },
    encodingTechnology: { key: 'TSSE' },
    fileOwner: { key: 'TOWN' },
    fileType: { key: 'TFLT' },
    genre: { key: 'TCON' },
    initialKey: { key: 'TKEY' },
    internetRadioName: { key: 'TRSN' },
    internetRadioOwner: { key: 'TRSO' },
    isrc: { key: 'TSRC' },
    language: { key: 'TLAN' },
    length: { key: 'TLEN' },
    mediaType: { key: 'TMED' },
    mood: { key: 'TMOO' },
    originalArtist: { key: 'TOPE' },
    originalFilename: { key: 'TOFN' },
    originalReleaseDate: { key: 'TDOR' },
    originalTextwriter: { key: 'TOLY' },
    originalTitle: { key: 'TOAL' },
    partOfSet: { key: 'TPOS' },
    performerInfo: { key: 'TPE2' },
    playlistDelay: { key: 'TDLY' },
    producedNotice: { key: 'TPRO' },
    publisher: { key: 'TPUB' },
    remixArtist: { key: 'TPE4' },
    subtitle: { key: 'TIT3' },
    textWriter: { key: 'TEXT' },
    time: { key: 'TIME' },
    title: { key: 'TIT2' },
    titleSortOrder: { key: 'TSOT' },
    trackNumber: { key: 'TRCK' },
};
exports.ID3v23Frames = {
    album: { key: 'TALB' },
    albumSortOrder: { key: 'TSOA' },
    artist: { key: 'TPE1', multiValueSeparator: ' / ' },
    artistSortOrder: { key: 'TSOP' },
    bpm: { key: 'TBPM' },
    composer: { key: 'TCOM', multiValueSeparator: ' / ' },
    conductor: { key: 'TPE3', multiValueSeparator: ' / ' },
    contentGroup: { key: 'TIT1' },
    copyright: { key: 'TCOP' },
    date: { key: 'TDAT' },
    encodedBy: { key: 'TENC' },
    encodingTechnology: { key: 'TSSE' },
    fileOwner: { key: 'TOWN' },
    fileType: { key: 'TFLT' },
    genre: { key: 'TCON', multiValueSeparator: ';' },
    initialKey: { key: 'TKEY' },
    internetRadioName: { key: 'TRSN' },
    internetRadioOwner: { key: 'TRSO' },
    isrc: { key: 'TSRC' },
    language: { key: 'TLAN' },
    length: { key: 'TLEN' },
    mediaType: { key: 'TMED' },
    originalArtist: { key: 'TOPE' },
    originalFilename: { key: 'TOFN' },
    originalReleaseDate: { key: 'TORY' },
    originalTextwriter: { key: 'TOLY' },
    originalTitle: { key: 'TOAL' },
    partOfSet: { key: 'TPOS' },
    performerInfo: { key: 'TPE2', multiValueSeparator: ' / ' },
    playlistDelay: { key: 'TDLY' },
    publisher: { key: 'TPUB' },
    remixArtist: { key: 'TPE4', multiValueSeparator: ' / ' },
    size: { key: 'TSIZ' },
    subtitle: { key: 'TIT3' },
    textWriter: { key: 'TEXT' },
    title: { key: 'TIT2' },
    trackNumber: { key: 'TRCK' },
};
/**
 * These are v2.3 frames that were remapped in v2.4
 * Listing them separately allows us to map them to the same key when saving for v2.4
 * http://id3.org/id3v2.4.0-changes
 */
exports.LegacyFramesRemapped = {
    TYER: 'date',
    TIME: 'date',
    TRDA: 'date',
};
//# sourceMappingURL=frame-definitions.js.map