import PropTypes from "prop-types";


export const DEFAULT_PROPS = {
    title: '',
    links: []
}

export const PROP_TYPES = {
    links: PropTypes.array.isRequired,
    title: PropTypes.string
}