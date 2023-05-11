import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Comentarios() {
    const list = [{ "review_id": "KU_O5udG6zpxOg-VcAEodg", "user_id": "mh_-eMZ6K5RLWhZyISBhwA", "business_id": "XQfwVwDr-v0ZS3_CbbE5Xw", "stars": 3.0, "useful": 0, "funny": 0, "cool": 0, "text": "If you decide to eat here, just be aware it is going to take about 2 hours from beginning to end. We have tried it multiple times, because I want to like it! I have been to it's other locations in NJ and never had a bad experience. \n\nThe food is good, but it takes a very long time to come out. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker.", "date": "2018-07-07 22:09:11" },
    { "review_id": "BiTunyQ73aT9WBnpR9DZGw", "user_id": "OyoGAe7OKpv6SyGZT5g77Q", "business_id": "7ATYjTIgM3jUlt4UM3IypQ", "stars": 5.0, "useful": 1, "funny": 0, "cool": 1, "text": "I've taken a lot of spin classes over the years, and nothing compares to the classes at Body Cycle. From the nice, clean space and amazing bikes, to the welcoming and motivating instructors, every class is a top notch work out.\n\nFor anyone who struggles to fit workouts in, the online scheduling system makes it easy to plan ahead (and there's no need to line up way in advanced like many gyms make you do).\n\nThere is no way I can write this review without giving Russell, the owner of Body Cycle, a shout out. Russell's passion for fitness and cycling is so evident, as is his desire for all of his clients to succeed. He is always dropping in to classes to check in\/provide encouragement, and is open to ideas and recommendations from anyone. Russell always wears a smile on his face, even when he's kicking your butt in class!", "date": "2012-01-03 15:28:18" },
    { "review_id": "saUsX_uimxRlCVr67Z4Jig", "user_id": "8g_iMtfSiwikVnbP2etR0A", "business_id": "YjUWPpI6HXG530lwP-fb2A", "stars": 3.0, "useful": 0, "funny": 0, "cool": 0, "text": "Family diner. Had the buffet. Eclectic assortment: a large chicken leg, fried jalapeño, tamale, two rolled grape leaves, fresh melon. All good. Lots of Mexican choices there. Also has a menu with breakfast served all day long. Friendly, attentive staff. Good place for a casual relaxed meal with no expectations. Next to the Clarion Hotel.", "date": "2014-02-05 20:30:30" },
    { "review_id": "AqPFMleE6RsU23_auESxiA", "user_id": "7bHUi9Uuf5_HHc_Q8guQ", "business_id": "kxX2SOes4o-D3ZQBkiMRfA", "stars": 5.0, "useful": 1, "funny": 0, "cool": 1, "text": "Wow!  Yummy, different,  delicious.   Our favorite is the lamb curry and korma.  With 10 different kinds of naan!!!  Don't let the outside deter you (because we almost changed our minds)...go in and try something new!   You'll be glad you did!", "date": "2015-01-04 00:01:03" },
    { "review_id": "Sx8TMOWLNuJBWer-0pcmoA", "user_id": "bcjbaE6dDog4jkNY91ncLQ", "business_id": "e4Vwtrqf-wpJfwesgvdgxQ", "stars": 4.0, "useful": 1, "funny": 0, "cool": 1, "text": "Cute interior and owner (?) gave us tour of upcoming patio\/rooftop area which will be great on beautiful days like today. Cheese curds were very good and very filling. Really like that sandwiches come w salad, esp after eating too many curds! Had the onion, gruyere, tomato sandwich. Wasn't too much cheese which I liked. Needed something else...pepper jelly maybe. Would like to see more menu options added such as salads w fun cheeses. Lots of beer and wine as well as limited cocktails. Next time I will try one of the draft wines.", "date": "2017-01-14 20:54:15" }]
    return (
        <div>  <ListGroup className="list-group-flush">
            {list.length > 0 ? list.map((l, index) => {
                return (
                    <ListGroup.Item key={index}>
                        <div style={{ textAlign: "right", fontSize: "12px", color: "gray" }}> {l.date}</div>
                        {l.text}</ListGroup.Item>
                )
            }) : <div className='no-recomendations'>Aún no tienes recomendaciones. Primero comenta y/o califica lugares :D</div>}

        </ListGroup></div>
    )
}

export default Comentarios