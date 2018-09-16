export enum TagVersion {
    v23 = 'ID3v2.3',
    v24 = 'ID3v2.4',
    unknown = 'unknown',
}

/*
 **  List of official text information frames
 **  LibraryName: "T***"
 **  Value is the ID of the text frame specified in the link above,
 ** the object's keys are just for simplicity, you can also use the ID directly.
 */

export const ID3v24Frames: any = {
    album:                  'TALB',
    albumSortOrder:         'TSOA',
    artist:                 'TPE1',
    artistSortOrder:        'TSOP',
    bpm:                    'TBPM',
    composer:               'TCOM',
    conductor:              'TPE3',
    contentGroup:           'TIT1',
    copyright:              'TCOP',
    date:                   'TDRC',
    encodedBy:              'TENC',
    encodingTechnology:     'TSSE',
    fileOwner:              'TOWN',
    fileType:               'TFLT',
    genre:                  'TCON',
    initialKey:             'TKEY',
    internetRadioName:      'TRSN',
    internetRadioOwner:     'TRSO',
    isrc:                   'TSRC',
    language:               'TLAN',
    length:                 'TLEN',
    mediaType:              'TMED',
    mood:                   'TMOO',
    originalArtist:         'TOPE',
    originalFilename:       'TOFN',
    originalReleaseDate:    'TDOR',
    originalTextwriter:     'TOLY',
    originalTitle:          'TOAL',
    partOfSet:              'TPOS',
    performerInfo:          'TPE2',
    playlistDelay:          'TDLY',
    producedNotice:         'TPRO',
    publisher:              'TPUB',
    remixArtist:            'TPE4',
    subtitle:               'TIT3',
    textWriter:             'TEXT',
    time:                   'TIME',
    title:                  'TIT2',
    titleSortOrder:         'TSOT',
    trackNumber:            'TRCK',
};

export const ID3v23Frames: any = {
    album:                  'TALB',
    albumSortOrder:         'TSOA',
    artist:                 'TPE1',
    artistSortOrder:        'TSOP',
    bpm:                    'TBPM',
    composer:               'TCOM',
    conductor:              'TPE3',
    contentGroup:           'TIT1',
    copyright:              'TCOP',
    date:                   'TDAT',
    encodedBy:              'TENC',
    encodingTechnology:     'TSSE',
    fileOwner:              'TOWN',
    fileType:               'TFLT',
    genre:                  'TCON',
    initialKey:             'TKEY',
    internetRadioName:      'TRSN',
    internetRadioOwner:     'TRSO',
    isrc:                   'TSRC',
    language:               'TLAN',
    length:                 'TLEN',
    mediaType:              'TMED',
    originalArtist:         'TOPE',
    originalFilename:       'TOFN',
    originalReleaseDate:    'TORY',
    originalTextwriter:     'TOLY',
    originalTitle:          'TOAL',
    partOfSet:              'TPOS',
    performerInfo:          'TPE2',
    playlistDelay:          'TDLY',
    publisher:              'TPUB',
    remixArtist:            'TPE4',
    size:                   'TSIZ',
    subtitle:               'TIT3',
    textWriter:             'TEXT',
    title:                  'TIT2',
    trackNumber:            'TRCK',
};

/**
 * These are v2.3 frames that were remapped in v2.4
 * Listing them separately allows us to map them to the same key when saving for v2.4
 * http://id3.org/id3v2.4.0-changes
 */
export const LegacyFramesRemapped: any = {
    TYER: 'date',
    TIME: 'date',
    TRDA: 'date',
};
