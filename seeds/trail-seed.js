const { Trail } = require('../models');

const trailData = [
    {
        name: 'Crater Lake',
        location: 'Oregon',
        zipcode: '97604',
        image_source: 'https://pbs.twimg.com/media/CwJ0fRRWAAA0PD9.jpg',
        date_been_there: '2021-06-26',
        category: '360 View',
        season: 'Autums',
        difficulty: 'Medium',
        user_id: 4
    },
    {
        name: 'Poo Poo Point',
        location: 'Chrico Trail',
        zipcode: '98027',
        image_source: 'https://i.redd.it/h02jk0942af21.jpg',
        date_been_there: '2021-06-26',
        category: '360 View',
        season: 'Spring',
        difficulty: 'Easy',
        user_id: 1
    },
    {
        name: 'Mailbox Peak',
        location: 'Snoqualmie',
        zipcode: '98024',
        image_source: 'https://www.wta.org/site_images/hikes/mount-si_daniel.jpg/@@images/7becb07d-5903-430c-a681-21169c3ab274.jpeg',
        date_been_there: '2021-07-20',
        category: '360 View',
        season: 'Autums',
        difficulty: 'Hard',
        user_id: 1
    },
    {
        name: 'Franklin Falls',
        location: 'Snoqualmie',
        zipcode: '98024',
        image_source: 'https://www.wta.org/site_images/hikes/p6280069_pan.jpg/@@images/7c7da2fa-d2c8-4d05-b2a3-57becf72cd38.jpeg',
        date_been_there: '2021-01-05',
        category: 'Falls',
        season: 'Winter',
        difficulty: 'Easy',
        user_id: 2
    },
    {
        name: 'Rattlesnake Ledge',
        location: 'Snoqualmie',
        zipcode: '98003',
        image_source: 'https://static-15.sinclairstoryline.com/resources/media/65f14cc5-ac33-40e9-8cce-0ad266469250-smallScale_RYAN6833.jpg?1539396932081',
        date_been_there: '2014-08-10',
        category: 'Lake',
        season: 'Autums',
        difficulty: 'Medium',
        user_id: 3
    },
    
    {
        name: 'Grand Canyon',
        location: 'Arizona',
        zipcode: '86023',
        image_source: 'https://live.staticflickr.com/3825/13319969495_5ebb03f93b_b.jpg',
        date_been_there: '2021-06-26',
        category: '360 View',
        season: 'Spring',
        difficulty: 'Medium',
        user_id: 4
    },
    {
        name: 'Blanca Lake',
        location: 'North Cascades',
        zipcode: '98201',
        image_source: 'https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/torres-del-paine-w-trek-1549014923-785X440.jpg',
        date_been_there: '2015-02-26',
        category: 'Mountain',
        season: 'Autums',
        difficulty: 'Medium',
        user_id: 5
    },
];

const seedTrail = () => Trail.bulkCreate(trailData);

module.exports = seedTrail;
