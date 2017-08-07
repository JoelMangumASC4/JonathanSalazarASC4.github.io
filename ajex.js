var userID = "";
var HeroUrl = "https://overwatch-api.net/api/v1/hero/";

var GifUrl = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=5b325b5eee184703b021d2b43f799e14&limit=5";
//5b325b5eee184703b021d2b43f799e14









function changeHero(id) {

    $.ajax({
        url: HeroUrl,
        success: function (data) {
            console.log(data);
            var Hero = data.data[id];
            var name = Hero.name;
            var health = Hero.health;
            var age = Hero.age;
            var armour = Hero.armour;
            var description = Hero.description;
            var shield = Hero.shield;
            var difficulty = Hero.difficulty;

            $("#stats_name").text(name);
            $("#stats_description").text(description);
            $("#stats_health").text(health);
            $("#stats_armour").text(armour);
            $("#stats_shield").text(shield);
            $("#stats_difficulty").text(difficulty);
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=overwatch_" + name + "&api_key=5b325b5eee184703b021d2b43f799e14&limit=5");
            xhr.done(function (data) {
                console.log("success got data", data);
                var gif = data.data[0];
                var show = gif.embed_url;
                console.log(show);


                $("#stats_picture").attr("src", show);




            });


        }
    });
}






