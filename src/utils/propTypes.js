import PropTypes from 'prop-types';

const IngredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired
});

const IngredientsPropTypes = PropTypes.arrayOf(
    PropTypes.shape(IngredientPropTypes.isRequired),
);

const ConstItemsPropTypes = PropTypes.shape({
    isTop: PropTypes.bool,
    isBottom: PropTypes.bool,
    isLocked: PropTypes.bool,
    text: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string
});

export { IngredientPropTypes, IngredientsPropTypes, ConstItemsPropTypes };