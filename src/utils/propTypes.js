import PropTypes from 'prop-types';

const IngredientPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
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