const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
    return isIndex === true ? 'Holberton School' :  'Holberton School main dashboard'
}

export { getFullYear, getFooterCopy }
