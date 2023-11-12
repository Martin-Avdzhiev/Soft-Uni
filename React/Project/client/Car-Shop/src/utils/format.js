export const numberFormat = (price) => {
    let priceString = price.toString();
    priceString = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return priceString;
}
