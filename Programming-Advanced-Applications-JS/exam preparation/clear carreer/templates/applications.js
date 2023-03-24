import { post, get } from '../api.js';


export const endpoints = {
    applications: '/data/applications', //post
    byOfferId: offerId=> `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`, //get
    byOfferIdAndUserId: (offerId,userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count` //get
}

