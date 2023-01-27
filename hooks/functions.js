export const truncate = (text, slicingNum) => {
    if (text.length <= slicingNum) {
        return text
    } else {
        return `${text.slice(0, slicingNum)}...`
    }
}