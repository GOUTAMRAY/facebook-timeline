
const posts = [
    {
        id: 1,
        Image : "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/356919005_825022638991113_6169268339055235799_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEmpF6GmWSPnDFf5sGXb156vCYHMk7sFzi8JgcyTuwXONOofdJ9yEm6sEBT-uHeZynrV623g-QvNSjkJ30lXFMu&_nc_ohc=8gB7gS-VN9AAX_ywm-A&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAPYeaISDriznLHx89mpjc_BplOFejH6Br2XlxAlGwrbg&oe=64A6D0E1",
        content :`সবার মন জয় করে আমাদের চলচ্চিত্রকে এক অনন্য অবস্থানে নিয়ে যাচ্ছে 'প্রিয়তমা'। বাবা-মা, ভাই-বোন পরিবার-পরিজন, বন্ধুবান্ধব, আত্মীয়স্বজন সকলকে সাথে নিয়ে দেখার মতো সিনেমা 'প্রিয়তমা'। তাই আপনার প্রিয়জনকে নিয়ে এবারের ঈদ আনন্দ উপভোগ করুন 'প্রিয়তমা'র সাথে`,
        like : 200,
        Comment : 30,
        timeAgo : "20 min",
        author :{
            name : "Sakib khan",
            photo : "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FraWIlMjBraGFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
    },
    {
        id: 2,
        Image : "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/357023739_972909453952812_3092659710355949370_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeG4b0fRUpJDF--hEyV2_SbW_NQabDxvpXH81BpsPG-lcbfwoYb2Vd_T10hBrIGyUNvgRgEjuhLlrTC2sNAeCa4g&_nc_ohc=wByI6WTZgxIAX_hG24g&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCs6e_oR9K1rd9uLRI_xvk9ObDvZoU7V0ul79fVe6Mi-w&oe=64A81F57",
        content :`আন্তর্জাতিক ক্রিকেটে তামিম ও লিটন এখন পর্যন্ত একসঙ্গে খেলেছে ৯৯ ম্যাচ
        তামিম : ৩৯৮৯ রান , ৩৬.৫৯ গড় , ৭৬.৮৮ স্ট্রাইক রেট , ৫ সেঞ্চুরি , ২৭ হাফসেঞ্চুরি , ৪৮১ চার , ৪৯ ছয় । 
        লিটন : ৩৫১৯ রান , ৩১.৯৯ গড় , ৭৬.৯১ স্ট্রাইক রেট , ৫ সেঞ্চুরি , ২০ হাফসেঞ্চুরি ,  ৩৪৬ চার  , ৫৭ ছয় ।`,
        like : 500,
        Comment : 90,
        timeAgo : "10 min",
        author :{
            name : "Liton das",
            photo : "https://cricket.upcomingwiki.com/public/images/gallery/97860.jpeg"
        },
    },
    {
        id: 3,
        Image : "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/357010100_598101615743128_7162235764692106790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG2b58fimuvdRZux22FomtWlDyLuzOmOz-UPIu7M6Y7PwIfU8AxhZEUSknLa9Sg2O9Q9o9L3UEK6O9LtxgvUsK2&_nc_ohc=DIwFLfkGdwgAX-W011L&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBptEP5KJvnmvFxMVO_LwMUy82FGV6Xt3cnNGEqQ_Yeeg&oe=64A6BBBD",
        content :`ইন্ডিয়ায় হতে যাওয়া ২০২৩ বিশ্বকাপে কোয়ালিফাই করতে পারল না উইন্ডিজ 
        উইন্ডিজের কিংবদন্তি ব্রায়ান লারা নাকি ২০০৬ সালে বলেছিল বাংলাদেশ নাকি বড় টুর্নামেন্টের  সৌন্দর্য নষ্ট করছে 
        এখন তাদের টিম তো বিশ্বকাপে কোয়ালিফাই করতে পারল না `,
        like : 200,
        Comment : 50,
        timeAgo : "50 min",
        author :{
            name : "Tamim iqbal",
            photo : "https://www.mykhel.com/img/2017/06/tamim-iqbal-century-vs-england-icc-01-1496332599.jpg"
        },
    },
    {
        id: 4,
        Image : "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/356849338_952904882603297_7349500677186229929_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeFB7Ht2SEh5eFjP35YugAQxTzO8-JPA-XhPM7z4k8D5eEo28g38wamBIlNerrU0eJ_2YxvRKijEDSCESCSVF1qB&_nc_ohc=uEbc-4eqWpIAX_afXzG&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAmkv78H4MdV7r5UMCeRDtciBcyiNv6OLw1CE7YVqwO-Q&oe=64A7F253",
        content :`আমি একটা Website হোস্ট করতে চাচ্ছি, তো এর জন্য আমার ডোমেইন এবং NodeJS based হোস্টিং দরকার।
        >> ১ম বারের মতো Use করবো তাই সাজেশন চাচ্ছি যাতে Cheap and Secure (also hassle-free) হয়, পরবর্তীতে এক্সপেন্সিভ হোস্টিং এর দিকে যাবো *(এক্সপেরিএন্স এর উপর নির্ভর করবে)`,
        like : 20,
        Comment : 60,
        timeAgo : "25 min",
        author :{
            name : "Goutam ray",
            photo : "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/357730009_6354166487982805_4531702520374344085_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeGGOtg9dWeRthCPYhsyqyd7xapp9UC8RyXFqmn1QLxHJcQjvW6bktFq5v-W6KY-UoQmLgOfnU1HoNsx3wCUDSk3&_nc_ohc=UaK0ESdVfRkAX8IqeKk&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAgYAv-dG26oEhpkLPoShYf5pqGPaj2A7EaAtCJLs5SDA&oe=64A642BF"
        },
    },
    {
        id: 5,
        Image : "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/357109845_658401096314980_6406417597289387530_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFpLSvQpDE-v-TK1SYQHqKEwCBQYWYNLBzAIFBhZg0sHMmXoiTpcgOyVbCg2npo9iJSJK1mCEUA3C_bwMncNEqy&_nc_ohc=xCfaiU6MJFsAX99Jzwr&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAiBxz-djF-yb6Us6Lf6B2xGLtqdrX7gHwpYn-ElNGUmA&oe=64A6D778",
        content :`𝐆𝐨𝐨𝐠𝐥𝐞 𝐁𝐚𝐫𝐝 𝐀𝐈 was born to solve the disadvantages of 𝐂𝐡𝐚𝐭𝐆𝐏𝐓 and upgrade the advantages that 𝐂𝐡𝐚𝐭𝐆𝐏𝐓 has.
        Download the trial version here:  https://drive.google.com/u/0/uc...
        Installation code : 888
        So 𝐁𝐚𝐫𝐝 𝐀𝐈 is so perfect? Yes more than perfection and you can be the first to discover this super AI.`,
        like : 70,
        Comment : 22,
        timeAgo : "3 min",
        author :{
            name : "Shanto ray",
            photo : "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/357115056_657436393078117_8444336852082231432_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG-j4x-LnGkIksqT2JYbmEgftCX0TrGqhB-0JfROsaqELaaE4a3FpsQSsWtjT65qwK3MoQwCnjwjfvADD65bKd7&_nc_ohc=1C4riMqlOtsAX9PzWix&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBx9U7KeuieDEAwO8jWJM5PzMQw4ZiPVh3gEf7GZp8I4A&oe=64A6D7C9"
        },
    },
    {
        id: 6,
        Image : "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/357578521_750036843793050_8564941895968131581_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHiM9eZF3F51WUTMj79TlsnMbO7UQiz9vUxs7tRCLP29SnulxVf3OkVlOrlPT0BCTgSw6s5UOsPBAMNP16TB_xk&_nc_ohc=4MC766EhffcAX_NwgdS&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCa339_KoKOwKyoNNw9UlWuFMu1IVc_zSIkrPNwGcfhtg&oe=64A7DF5A",
        content :`ইতোমধ্যে মাংসের দামকে পিছনে পেলে দ্রুত এগিয়ে যাচ্ছে কাঁচা মরিচ। কাঁচা মরিচ কী পারবে ইলিশ মাছের দামকে পিছনে ফেলে সামনে এগিয়ে যেতে ??`,
        like : 90,
        Comment : 220,
        timeAgo : "38 min",
        author :{
            name : "Hori ray",
            photo : "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/234833695_2990520897885707_3047968685832903488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFez21YVEV4GPaycNKj6H9u9sh2Owj9-bb2yHY7CP35tvNx9dJY6q30HDYx4Wgrk0kosglmyWFhHtaLU9aAwCUl&_nc_ohc=BJ-AiKRfMwYAX8pYcGJ&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBy1lx3kMDHtmOkAb-XWQioX1QwpnY2fszlHDWfvd_zxw&oe=64A78BD1"
        },
    },
    {
        id: 7,
        Image : "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/356264019_192883043731238_3863894259113504606_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHJJUCeD8xuu_qp-JBU7psByYgKRAOmRybJiApEA6ZHJlbZxAlrPk1iEp7JZZkGIqO7oK6tHpwMoQGyMPqWLjwJ&_nc_ohc=dXxPdcGVfkMAX-1zUGx&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCnLtO7WeL_wqdODnVqo-L7WC5CmiFJDd6ADm3mKtUIFA&oe=64A7B63E",
        content :`এক নজরে দেখে নিন 2023 এশিয়া কাপে কে কতদূর এগিয়ে।
        ইন্ডিয়া 10%🇮🇳
        নেপাল 30%🇳🇵
        পাকিস্তান 40%🇵🇰
        আফগানিস্তান 60%🇦🇫
        শ্রীলংকা 80%🇱🇰
        বাংলাদেশ 100%🇧🇩`,
        like : 55,
        Comment : 22,
        timeAgo : "1 hours",
        author :{
            name : "Kutubul ray",
            photo : "https://images.unsplash.com/photo-1685118148066-da2c5c61e291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        },
    },
    {
        id: 8,
        Image : "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/357364825_1635741420242541_4106611008957137396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHb33J4-C1Zx4WueLDEzMzwVncpagtBFh5WdylqC0EWHukR1BjyaSJsTnLpodYz-9EelIUab72EeQjrhw-Juag2&_nc_ohc=5zWJCUDhNMQAX8zAH6H&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDju5dHKpZbWhgEfnBUEqRVNlkTHUHMDtheeb3x9ZTFIg&oe=64A6820A",
        content :`পড়ালেখার পাশাপাশি বা জবের পাশাপাশি  ফ্রিল্যান্সিং শিখে, আপনি বাসায় বসেই বাড়তি ইনকাম করতে পারবেন 💪`,
        like : 70,
        Comment : 20,
        timeAgo : "60 min",
        author :{
            name : "Hori ray",
            photo : "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/357377508_1634318467051503_7341846985742124348_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBZH-zxHdiezi-DY3S2XFJbhyatSD0NVNuHJq1IPQ1U-HYry38EHmFHt7X-UgJg-7QorxDXzeFD2WV1tO1HxWi&_nc_ohc=JbRDPXvGjd4AX9-vthl&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCIplfKQl60K1SK2UMXSsgKPqCgqSxYsF4640QVdMcHJQ&oe=64A68C91"
        },
    },
    {
        id: 9,
        Image : "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/357177480_3538421976394069_1539145580860899710_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeFp1mX7CgIglPn3wUjE98gbDdK9gqyyYGkN0r2CrLJgaXEmR7U4PEYjiQVgN7jAUtllVWG_gAvW8GlbYYS41BE5&_nc_ohc=VBvh5jj1maIAX_jNK7t&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCMOp00oiI5jNuEdsfQ5W8K37TdWcBdrYILUmAOOGmSBw&oe=64A726E3",
        content :`শুভ সকাল`,
        like : 90,
        Comment : 220,
        timeAgo : "38 min",
        author :{
            name : "shuvo ray",
            photo : "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/331423839_615676013702703_6775645154592756577_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEWSakRpDKW9JG_6ZznMzgIpirX4uspPuCmKtfi6yk-4Bo2qT3oq-S10RbU8eJEGnpsfgxzsKYrpm83kR3_girl&_nc_ohc=XmpdMpETuFMAX8gCtNt&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAvtyUgsOVgRuZE7yVL-esapuneMfDbHcfL1-Lz9Bmtzg&oe=64A75C8B"
        },
    },
    {
        id: 10,
        Image : "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/356925815_581982890755955_4038307188975492325_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGvq02QIiEndN0Of25lTrjYaT19xDIaueRpPX3EMhq55LPiJwllVm4xwslIfWCzg6yRGqsa6Z52dDRmECS7tnXi&_nc_ohc=H_RvgRjNxbIAX_UmuRB&_nc_ht=scontent.fdac24-1.fna&oh=00_AfC2gtjlfMO55LKVpMDvRTabCq5wOWvkwpzesjHTb_KqTw&oe=64A7EA34",
        content :`ফেসবুক পোস্টে শান্ত লিখেছেন, "এবং এরপর জীবন বদলে গেলো"....
        `,
        like : 9,
        Comment : 20,
        timeAgo : "55 min",
        author :{
            name : "shuvo ray",
            photo : "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
    },
]






















