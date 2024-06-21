import { Faq } from './models/faq';
import { Track } from './models/track';

export async function getAllTracks() {
    return await Track.findAll({order: [ ['played', 'DESC']]})
}

export async function getAllFaq() {
    return await Faq.findAll();
}