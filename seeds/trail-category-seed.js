const { Trail_Category } = require('../models');

const trailCategoryData = [
    {
        name: '',
        description: '',
        image_source: '',
        been_there: '',
        description: '',
        category_id: ''
    },
];

const seedTrailCategory = () => Trail_Category.bulkCreate(trailCategoryData);

module.exports = seedTrailCategory;