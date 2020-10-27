import {
    USERNAME,
} from './index.js';

import {
    renderWishlists,
    updateWishlistNode,
} from './helpers.js';

import {
    SELECTED_STORE_ID,
} from './stores.js';

import {
    fetchNearbyWishlists,
    addWishlist,
    updateWishlist,
} from './api.js';

/**
 * Fetch and display wishlists from users nearby you
 * @param {number} latitude
 * @param {number} longitude
 */
export async function displayNearbyWishlists(latitude, longitude) {

}

/**
 * Fetch and display wishlists that you created in a neighborhood
 * @param {number} latitude
 * @param {number} longitude
 */
export async function displayMyRequests(latitude, longitude) {

}

/**
 * Fetch and display wishlists that you picked up
 * @param {number} latitude
 * @param {number} longitude
 */
export async function displayMyTrips(latitude, longitude) {

}

/**
 * Create a new wishlist
 */
export async function createWishlist() {

}

/**
 * Update a wishlist's status
 * @param {Event} event
 */
export async function updateWishlistStatus(event) {

}
