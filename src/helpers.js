export function isValidUrl(string) {
    if (!string ) {
        return false;
    }
    try {
        new URL(string);
    } catch (_) {
        return false;
    }
    return true;
}