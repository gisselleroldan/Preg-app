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
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 22,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 23,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 24,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 25,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 26,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 27,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 28,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 29,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 30,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 31,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 32,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 33,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 34,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 35,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 36,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 37,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 38,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 39,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
    {
        week: 40,
        fruit: "Dill pickle",
        imgURL: "./assets/images/blueberry1.png",
        info: "16 weeks along"
    },
]

export default weeklyData