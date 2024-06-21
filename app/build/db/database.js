"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFaq = exports.getAllTracks = void 0;
const faq_1 = require("./models/faq");
const track_1 = require("./models/track");
function getAllTracks() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield track_1.Track.findAll({ order: [['played', 'DESC']] });
    });
}
exports.getAllTracks = getAllTracks;
function getAllFaq() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield faq_1.Faq.findAll();
    });
}
exports.getAllFaq = getAllFaq;
