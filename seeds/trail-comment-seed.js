const { TrailComment } = require('../models');

const trailCommentData = [
        {
            comment: 'Started the hike at 10 AM and parked at the trailhead parking lot (only room for 6-7 cars). Trail was in excellent condition and well marked. Encountered several other groups but not too busy.',
            trail_id: 1,
        },
        {
            comment: 'Got to the trailhead around 7am on a Saturday, lot was full. I continued with the road a bit further until there was a place where I could park my car at the side of the road. There were \'no parking - towing area\' signs, but I saw that more people parked there so I assumed it\'s okay. I didn\'t get a ticket. Took the new trail up & down. Took me about 2:20 hours up, and 2 hours down. The trail was a bit harder than I remembered, especially the last part with the rocks. Anyway, the view from the top is worth it. The trail was quite busy, but people were ok.',
            trail_id: 2,
        },
        {
            comment: 'Arriving around 8:30am, we found the parking lot mostly full with just a few spaces available. Trail has a few muddy areas, but nothing you cant get around easily. The trail itself was surprisingly not crowded considering all the cars in the lot, but I think a lot of people were going to the Denny Creek trail from that lot. The waterfall is rocking! This was my first time going, so I have nothing to compare it to, but it seems like it was going full blast.',
            trail_id: 3,
        },
        {
            comment: 'It was a good thing I picked a low elevation hike for the conditions of the day (snow at 1000 feet). To get there, drive I-90 east to exit 32; turn left (south) and follow the road up the hill for a few miles to the Rattlesnake Lake Recreation Area. The parking lot for the trail is well marked as is the path to the start of the hike. The hike to the ledge is only 1.5 to 2 miles with less than 1000 feet of gain. The trail has lots of moss, ferns, and trees with the occasional peek out to the lake. On this day there was also some slush, snow, and mud but nothing serious to the ledge viewpoint. This is a nice viewpoint with views to the valleys, and the nearby peaks: Si, Mailbox, Washington, etc. Continuing on above the ledge was less clear due to increasing snow depth and lack of foot traffic to punch in a boot path. There is another viewpoint and radio tower about 2.5 miles beyond the ledge. I made it to within 1 mile of that point before the snow depth became crotch deep. The fun meter dropped to zero and I turned around.',
            trail_id: 4,
        },
        {
            comment: 'Cant beat the view you are awarded with after the drive into the park. Plenty of places of take photos. Lots of parking and handicap accessible. There is a walking path that goes along the lake for quite a distance. The day we were there the sun was out and the mountains were reflecting beautifully of the water. We wanted to enjoy a drink at the lodge, but unfortunately because of covid restrictions they were only serving registered guests. We did walk down to the cafe on site and had a cool drink. Places to sit and enjoy a snack. Gift shop is available, restrooms and a nature building. Lots of junior ranger information and there was a forest ranger available for questions.',
            trail_id: 5,
        },
    ];


const seedTrailComment = () => TrailComment.bulkCreate(trailCommentData);

module.exports = seedTrailComment;