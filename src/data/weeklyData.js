// info from https://www.thebump.com/pregnancy-week-by-week

const weeklyData = [
    {
        week: 4,
        fruit: "Poppy Seed",
        imgURL: "./assets/images/poppy-seed.png",
        info: "Congratulations! If you know you’re 4 weeks pregnant, you found out the news earlier than a lot of women do (because you took a test as soon as you missed your period, or even a few days before, instead of waiting a bit). You might be totally excited, or you might be getting used to the idea of having a baby. Either way, you may not be feeling any different (for now, at least), since early pregnancy symptoms don’t always kick in right away."
    },
    {
        week: 5,
        fruit: "Apple Seed",
        imgURL: "./assets/images/apple-seed.png",
        info: "Week 5 is a common time for moms-to-be to find out they’re pregnant. That’s because by now you’ve probably realized you’ve missed your period and then thought, whoa—maybe I should take a test! Plus, at 5 weeks pregnant, heightened hormone levels may be giving you symptoms that are tough to ignore, like sore breasts, nausea and fatigue."
    },
    {
        week: 6,
        fruit: "Sweet Pea",
        imgURL: "./assets/images/pea1.png",
        info: "At week six, pregnancy is still new to you, so it’s normal to feel a little emotional. Add to that some pretty uncomfortable early pregnancy symptoms (which include hormone fluctuations that can feel like PMS—on steroids!), and it’s understandable to feel downright miserable. Did we mention nervous and uncertain? That’s probably part of why you have 40 weeks to adjust to pregnancy."
    },
    {
        week: 7,
        fruit: "Blueberry",
        imgURL: "./assets/images/blueberry1.png",
        info: " Now that you’re 7 weeks pregnant, you’re going about your day knowing you’re expecting—but no one else can see it. That can give you a surreal feeling! And at week 7 of pregnancy, you’re probably wondering what things will be like once it’s obvious to everyone that you’ve got a baby growing in there."
    },
    {
        week: 8,
        fruit: "Raspberry",
        imgURL: "./assets/images/raspberry.png",
        info: "While you may not be showing yet at 8 weeks pregnant, being pregnant is probably finally starting to feel real to you; like most women, you may have your first prenatal appointment right around now. At this visit, an ultrasound may be performed to determine how far along you are."
    },
    {
        week: 9,
        fruit: "Cherry",
        imgURL: "./assets/images/cherry.png",
        info: "Right now, the pregnancy hormone hCG is circulating through your body at its peak level. That means at 9 weeks, some pregnancy symptoms may be at their most severe. Hang in there—you’re just weeks away from those hormones leveling out a bit, leaving you feeling a lot more like yourself."
    },
    {
        week: 10,
        fruit: "Strawberry",
        imgURL: "./assets/images/strawberry.png",
        info: "Wondering what to expect at 10 weeks pregnant? As baby grows, your ligaments and muscles are starting to stretch inside your 10 weeks pregnant belly, your breasts are getting bigger and some other radical changes may be happening."
    },
    {
        week: 11,
        fruit: "Lime",
        imgURL: "./assets/images/Lime.png",
        info: "Around 11 weeks, your body (and mind!) are still completely haywire. It’s probably tough to feel calm right now, since your hormones are still raging and you may still be feeling pretty nauseous. But know there’s light at the end of the tunnel—just a few more weeks left in the first trimester, which is notoriously the worst for pregnancy symptoms!"
    },
    {
        week: 12,
        fruit: "Plum",
        imgURL: "./assets/images/plum.png",
        info: "Here’s the good news about 12 weeks pregnant symptoms: Morning sickness and fatigue may start to fade a bit soon as your hormones start to calm down. The bad? Headaches and dizziness may replace them. We’ll take that trade-off."
    },
    {
        week: 13,
        fruit: "Lemon",
        imgURL: "./assets/images/lemon.png",
        info: "Congrats! The end of week 13 is the end of the first trimester! We’re not just talking about getting through those work meetings without falling asleep (or puking), we’re talking about how you’re now 1/3rd of the way through your pregnancy! At 13 weeks pregnant, you’ve grown a fetus that has vocal cords, teeth and even fingerprints (wow!)."
    },
    {
        week: 14,
        fruit: "Peach",
        imgURL: "./assets/images/peach.png",
        info: "Welcome to the second trimester! 14 weeks pregnant marks a lot of changes—you might be feeling less nauseated, hungrier and more energetic. That’s because you’re embarking on what’s known as the “honeymoon phase” of pregnancy."
    },
    {
        week: 15,
        fruit: "Navel Orange",
        imgURL: "./assets/images/orange.png",
        info: "Now that you’re 15 weeks pregnant, you’re probably feeling high energy, and that may mean high libido, too. Your partner isn’t feeling nearly as frisky at week 15 pregnancy? That’s normal, too."
    },
    {
        week: 16,
        fruit: "Avocado",
        imgURL: "./assets/images/avocado.png",
        info: "You may have another prenatal visit this week, where you will get to hear baby’s heartbeat again. Even more thrilling will be feeling baby kick, which could happen starting this week, so pay attention to those subtle feelings in your 16 weeks pregnant belly. Another cool fact? Baby is starting to be able to hear your voice—and they’ll recognize it at birth."
    },
    {
        week: 17,
        fruit: "Pomegranate",
        imgURL: "./assets/images/pomegranate.png",
        info: "Now that you’re 17 weeks pregnant, start making firm plans, like whether or not you’re going to find out baby’s sex via ultrasound, and what kind of childbirth class you’d like to take. As you start making these decisions, the pregnancy will feel even more real, which is super exciting, but part of you is probably feeling a little anxious, too. After all, you’re at week 17 of your pregnancy; that’s almost halfway through, and there’s so much to do, it can be overwhelming."
    },
    {
        week: 18,
        fruit: "Artichoke",
        imgURL: "./assets/images/artichoke.png",
        info: "Time to switch things up. Starting around 18 weeks pregnant, you should begin to sleep on your side instead of your back. That’s because baby (and your uterus) is getting big enough to press against large veins in the back of your abdomen, which can reduce the amount of blood going to your heart, making you feel lightheaded—or worse, lowering your blood pressure. Sounds scary, but it’s totally preventable by simply sleeping on your side."
    },
    {
        week: 19,
        fruit: "Mango",
        imgURL: "./assets/images/mango.png",
        info: "At 19 weeks pregnant, you’re probably getting psyched for your mid-pregnancy ultrasound. Most parents-to-be think of this test as the chance to find out baby’s sex (if you didn’t already), but you will actually see a lot more than baby’s boy or girl parts. You’ll see all of baby’s body—inside and out—and you’ll be amazed at all the development going on at week 19 of pregnancy."
    },
    {
        week: 20,
        fruit: "Banana",
        imgURL: "./assets/images/banana.png",
        info: "Congrats! During week 20 of pregnancy, you’re at the halfway point. If you’ve recently found out baby’s sex, you’re in a completely new mindset—are we right? Now, those baby names you’re throwing out are more likely to end up as baby’s actual name."
    },
    {
        week: 21,
        fruit: "Endive",
        imgURL: "./assets/images/endive.png",
        info: "At 21 weeks pregnant, your baby has more control over limb movements, which explains why you might be feeling more kicking and stretching going on in there. From the outside, your little one may be leaving his mark in the form of stretch marks — pink, red, purple, reddish-brown or dark brown streaks that can appear as your belly expands."
    },
    {
        week: 22,
        fruit: "Coconut",
        imgURL: "./assets/images/blueberry1.png",
        info: "Now that you’re 22 weeks pregnant, your rapidly growing baby is invading your space—to say the least. That’s why it might be tough to catch your breath and why your back might be killing you. Hey, as baby grows, they may be expanding your belly so much at week 22 of pregnancy that you might start to get some stretch marks —and you might even have a newfound “outie” belly button! "
    },
    {
        week: 23,
        fruit: "Grapefruit",
        imgURL: "./assets/images/grapefruit.png",
        info: "At 23 weeks pregnant, baby is getting ready for their big debut by listening in on what’s going on in the outside world. We know you’re getting ready too. Just remember: While having the nursery painted and stocked with diapers is important, there are some less fun to-dos you should have on your radar—namely, financials. Week 23 of pregnancy is a good time to call your health insurance company to see how you’re currently covered and decide what adjustments you’ll need to make for baby."
    },
    {
        week: 24,
        fruit: "cantaloupe",
        imgURL: "./assets/images/cantaloupe.png",
        info: "Consider this a preview of motherhood: Baby is doing just fine—and you’re, well, kind of a mess. Your week 24 baby is working on being ready to survive (and thrive!) in the outside world. You, on the other hand, are probably experiencing some of the late-pregnancy discomforts at 24 weeks pregnant—leg cramps, backaches and swollen feet."
    },
    {
        week: 25,
        fruit: "Cauliflower",
        imgURL: "./assets/images/cauliflower.png",
        info: "You’re 25 weeks pregnant, and it’s probably dawned on you that soon you’ll actually have to deliver this baby. That might be a little scary, but it’s also exciting! "
    },
    {
        week: 26,
        fruit: "Kale",
        imgURL: "./assets/images/kale.png",
        info: "You haven’t met baby yet, but they’re taking over your life! They’re interfering with your sleep, messing with your memory and even giving you a stress headache or two at 26 weeks pregnant. (They’ll do all those things after birth too!) "
    },
    {
        week: 27,
        fruit: "Lettuce",
        imgURL: "./assets/images/lettuce.png",
        info: "At 27 weeks, baby is breathing (it’s amniotic fluid, not air, but still pretty cool) and even showing brain activity. You’ve got a lot on your brain too, from wondering what the birth is going to be like to trying to find the best pediatrician for baby. As you look ahead to the third trimester, be prepared for some pretty embarrassing stuff (like having to pee all the time—and maybe even when you don’t mean to!). "
    },
    {
        week: 28,
        fruit: "Eggplant",
        imgURL: "./assets/images/eggplant.png",
        info: "Welcome to the third trimester! Moms-to-be who are 28 weeks pregnant and beyond are known for their lack of sleep. If you find yourself up in the middle of the night, do something relaxing. This is not the time to vacuum the house from top to bottom—even though you might feel the urge to do that at some point. (It’s called nesting. You’ve probably heard of it.) "
    },
    {
        week: 29,
        fruit: "Acorn Squash",
        imgURL: "./assets/images/acorn-squash.png",
        info: "You’re probably getting a preview of baby’s personality by feeling them move. By those playful kicks and jabs, you may realize you’ve got a gentle dancer or an active ninja! You’ll also want to start packing a bag with the things you know you’ll want with you at the hospital for baby’s birth."
    },
    {
        week: 30,
        fruit: "Zucchini",
        imgURL: "./assets/images/zucchini.png",
        info: "At week 30 of pregnancy, your dreams might be getting even weirder— if you’re actually sleeping, that is. That could be the result of hormones, but it could also be anxiety, so consider doing some prep work to help you rest easier. One idea? Do a test drive to see exactly how long it takes you to get to the hospital. Then maybe you’ll stop having nightmares about giving birth in your car."
    },
    {
        week: 31,
        fruit: "Asparagus",
        imgURL: "./assets/images/asparagus.png",
        info: "Can you believe all five of baby’s senses are fully developed at 31 weeks pregnant? Baby is also getting smarter! In the meantime, you might actually feel a little… dumb. You’re not! It’s just that many moms-to-be find themselves acting absentmindedly during the third trimester. Some say that “pregnancy brain” isn’t a real thing, but can you honestly think of another time in your life when you’ve had as much on your mind as now?"
    },
    {
        week: 32,
        fruit: "Squash",
        imgURL: "./assets/images/squash.png",
        info: "Ready or not?! At 32 weeks pregnant, baby’s birth still seems far into the future, but you and baby are getting ready in a lot of ways… just in case there’s an early arrival. Your 32-week fetus has probably turned into the head-down position (or will turn soon), so they’re poised for the trip down the birth canal."
    },
    {
        week: 33,
        fruit: "Celery",
        imgURL: "./assets/images/celery.png",
        info: "We’d tell you to take a deep breath and relax, but it’s probably tough to do either of those at 33 weeks pregnant. In fact, it’s probably hard to get comfortable at all, since you might be feeling overheated on top of your other symptoms too. But you’re probably getting super excited to meet baby, and we can’t blame you."
    },
    {
        week: 34,
        fruit: "Butternut Squash",
        imgURL: "./assets/images/butternut-squash.png",
        info: "Your curious baby can hear your voice and is listening in on your conversations at 34 weeks pregnant. In fact, baby might enjoy a lullaby or two—so go ahead and sing to them. Some experts say that, after birth, babies can recognize songs mom sang while pregnant; they may even be more easily soothed by those familiar tunes once they're “on the outside.\""
    },
    {
        week: 35,
        fruit: "Pineapple",
        imgURL: "./assets/images/pineapple.png",
        info: "At 35 weeks, some moms-to-be feel like they have a ton of stuff left to do before baby’s arrival. Others can barely wait for baby to make their debut. Either way, try not to stress; baby will show up when they’re ready and won’t care if you haven’t checked every little detail off your list."
    },
    {
        week: 36,
        fruit: "Papaya",
        imgURL: "./assets/images/papaya.png",
        info: "Time is flying! Since baby really could decide to arrive any day now, try to put in your final prep work at 36 weeks pregnant. For example, if you took a childbirth class a few months ago, reread the materials you were given and practice the breathing techniques you learned with your partner. Go over your plan for getting to the hospital and all the what-ifs."
    },
    {
        week: 37,
        fruit: "Romaine Lettuce",
        imgURL: "./assets/images/romaine.png",
        info: "Around week 37 of pregnancy, many moms-to-be find themselves organizing cupboards and scrubbing floors. That’s the phenomenon people lovingly refer to as “nesting.” It may be instinctual—your body senses baby will be here really soon. After all, you’re 37 weeks pregnant, which is considered “early term,” meaning baby is almost ready."
    },
    {
        week: 38,
        fruit: "Winter Melon",
        imgURL: "./assets/images/winter-melon.png",
        info: "If you feel a lightning bolt-like sensation running up and down your legs (and in your vagina!), don’t freak out. At 38 weeks pregnant, baby is probably sitting pretty low in your pelvis, which means they’re bumping into all kinds of nerves down there—including some super-sensitive ones you might not know you had."
    },
    {
        week: 39,
        fruit: "Pumpkin",
        imgURL: "./assets/images/pumpkin.png",
        info: "Baby has finally reached full term! You’re probably feeling like you want to get this baby OUT. We’re not sure, but the impatience and discomfort moms-to-be feel around 39 weeks pregnant (and beyond!) might be nature’s way of getting you mentally prepared for delivery."
    },
    {
        week: 40,
        fruit: "Watermelon",
        imgURL: "./assets/images/watermelon.png",
        info: "Week 40 of pregnancy can be mentally rough, since you’ll be constantly wondering when baby will decide to make their entrance and question every twinge you have. Pay close attention to fetal movement. If you notice a decrease in the way baby moves, call your heathcare provider immediately. Try not to stress, and rest assured that baby will arrive when they’re ready—and your body will give you the right signals that it’s time."
    },
]

export default weeklyData