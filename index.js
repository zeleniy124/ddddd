addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneLuckyNumbers = document.querySelector(".fc-lucky-numbers span"),
		fortuneList = [
                "You will get rugged today",
                "You will hit 10x today",
                "Dev will fuck you up again…",
                "Your next meme will be rugged, but than you will get CTO for 100x",
                "Just keep trying, and you will find the one",
                "It only takes one play to get everything back",
                "You need to stop pump.fun for today",
                "If you will stop buying coins, you will be a shame for your family",
                "Luck is on your side today",
                "Mr.Frog will shill your next coin",
                "It is better not to buy catcoins today",
                "It is better not to buy dogcoins today"
		],
		fortune = new Fortune(),

		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}