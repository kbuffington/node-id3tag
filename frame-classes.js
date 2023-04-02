"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = exports.TagVersion = void 0;
var TagVersion;
(function (TagVersion) {
    TagVersion["v22"] = "ID3v2.2";
    TagVersion["v23"] = "ID3v2.3";
    TagVersion["v24"] = "ID3v2.4";
    TagVersion["unknown"] = "unknown";
})(TagVersion = exports.TagVersion || (exports.TagVersion = {}));
class Chapter {
    elementID;
    startTimeMs;
    endTimeMs;
    startOffsetBytes;
    endOffsetBytes;
    tags;
}
exports.Chapter = Chapter;
//# sourceMappingURL=frame-classes.js.map