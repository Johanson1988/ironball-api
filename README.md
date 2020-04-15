<h2 class="western" align="justify"><a name="user-content-description"></a>
Description</h2>
<p align="justify"><i><span style="font-weight: normal">This project
is a clone of the Arkanoid game. </span></i><i><b>Arkanoid</b></i>
<span style="font-weight: normal">(</span><font face="Droid Sans Fallback"><font size="2" style="font-size: 10pt"><span lang="zh-CN"><span lang="ja-JP"><span style="font-weight: normal">アルカノイド</span></span><span style="font-weight: normal">
</span></span></font></font><i><span style="font-weight: normal">Arukanoido</span></i><span style="font-weight: normal">)</span>
is an <a href="https://en.wikipedia.org/wiki/Arcade_game">arcade game</a>
released by <a href="https://en.wikipedia.org/wiki/Taito">Taito</a>
in 1986. The player controls the &quot;Vaus&quot;, a space vessel
that acts as the game's &quot;paddle&quot; which prevents a <a href="https://en.wikipedia.org/wiki/Ball">ball</a>
from falling from the playing field, attempting to bounce it against
a number of <a href="https://en.wikipedia.org/wiki/Brick">bricks</a>.
The ball striking a brick causes the brick to disappear. When all the
bricks are gone, the player goes to the next level, where another
pattern of bricks appears (Wikipedia, 2019).</p>
<p align="justify" style="margin-bottom: 0cm; line-height: 100%"><i>Wikipedia.
(2019, October 29). Arkanoid. Retrieved October 31, 2019, from
https://en.wikipedia.org/wiki/Arkanoid.</i></p>
<h2 class="western" align="justify"><a name="user-content-mvp-dom---canvas"></a>
MVP (DOM - CANVAS)</h2>
<ul>
	<li><p align="justify">A container where the ball will bounce with
	the top, left and right borders and will fall if reaches the bottom
	border.</p>
	<li><p align="justify">A ball that will bounce in the directions
	below when it hits a brick or a border of the container.</p>
	<img src="images/compass.gif" name="compass" align="left" width="228" height="203" border="0" alt="compass pointing in all 8 directions"/>
	<li><p align="justify">A set of bricks that will disappear when the
	ball hits them.</p>
	<li><p align="justify">A scores list based on the time the player
	has been playing.</p>
	<li><p align="justify">A life counter. The game will finish when the
	player runs out of life.</p>
	<li><p align="justify">A space vessel able to move in the X-axis and
	will be controlled with the keyboard. 
	</p>
</ul>
<h2 class="western" align="justify"><a name="user-content-backlog"></a>
Backlog</h2>
<ul>
	<li><p align="justify">Score system based on the number of bricks
	destroyed.</p>
	<li><p align="justify">Sounds</p>
	<li><p align="justify">Different kind of bricks.</p>
	<li><p align="justify">Special balls.</p>
	<li><p align="justify">Control by mouse/touch support.</p>
	<li><p align="justify">Add different levels.</p>
</ul>
<h2 class="western" align="justify"><a name="user-content-data-structure"></a>
Data structure</h2>
<ul>
	<li><p align="justify">Main.js</p>
</ul>
<ul>
	<li><pre style="text-align: justify"><code>buildSplashScreen() { </code><code>}</code></pre>
	<li><pre style="text-align: justify"><code>buildGameScreen() { }</code></pre>
	<li><pre style="text-align: justify"><code>buildScoreScreen() { }</code></pre>
</ul>
<ul>
	<li><pre style="text-align: justify"><code>Game.js</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>Game() { </code></pre>
		<ul>
			<li><pre style="text-align: justify"><code>this.canvas</code></pre>
			<li><pre style="text-align: justify"><code>this.lifes</code></pre>
			<li><pre style="text-align: justify"><code>this.points</code><code> }</code></pre>
		</ul>
		<li><pre style="text-align: justify"><code>Game.prototype.startLoop() { }</code></pre>
		<li><pre style="text-align: justify"><code>Game.prototype.check</code><code>Wall</code><code>Collisions </code><code>()</code><code> { }</code></pre>
		<li><pre style="text-align: justify"><code>Game.prototype.clearCanvas = function () { }</code></pre>
		<li><pre style="text-align: justify"><code>Game.prototype.updateCanvas = function () { }</code></pre>
		<li><pre style="text-align: justify"><code>Game.prototype.drawCanvas = function () { }</code></pre>
		<li><pre style="text-align: justify"><code>G</code><code>ame.prototype.setGameOver = function () { }</code></pre>
		<li><pre style="text-align: justify"><code>Game.prototype.showScores() = function () { }</code></pre>
	</ul>
	<li><pre style="text-align: justify"><code>ball.js</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>Ball() {</code></pre>
		<ul>
			<li><pre style="text-align: justify"><code>this.x</code></pre>
			<li><pre style="text-align: justify"><code>this.y</code></pre>
			<li><pre style="text-align: justify"><code>this.size</code></pre>
			<li><pre style="text-align: justify"><code>this.direction</code></pre>
			<li><pre style="text-align: justify"><code>this.speed</code></pre>
			<li><pre style="text-align: justify"><code>this.color }</code></pre>
		</ul>
		<li><pre style="text-align: justify"><code>ball.prototype.draw ()</code></pre>
		<li><pre style="text-align: justify"><code>ball.prototype.start ()</code></pre>
		<li><pre style="text-align: justify"><code>ball.prototype.setDirection ()</code></pre>
		<li><pre style="text-align: justify"><code>ball.prototype.bounce ()</code></pre>
		<li><pre style="text-align: justify"><code>ball.prototype.fall ()</code></pre>
	</ul>
	<li><pre style="text-align: justify"><code>Platform.js</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>Platform() {</code></pre>
		<ul>
			<li><pre style="text-align: justify"><code>this.x</code></pre>
			<li><pre style="text-align: justify"><code>this.y</code></pre>
			<li><pre style="text-align: justify"><code>this.size</code></pre>
			<li><pre style="text-align: justify"><code>this.sectionSize</code></pre>
			<li><pre style="text-align: justify"><code>this.color</code></pre>
			<li><pre style="text-align: justify"><code>this.initPos }</code></pre>
		</ul>
		<li><pre style="text-align: justify"><code>Platform.prototype.draw ()</code></pre>
		<li><pre style="text-align: justify"><code>Platform.prototype.move ()</code></pre>
		<li><pre style="text-align: justify"><code>Platform.prototype.returnToInitPos ()</code></pre>
	</ul>
	<li><pre style="text-align: justify"><code>brick.js</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>brick {</code></pre>
		<ul>
			<li><pre style="text-align: justify"><code>this.x</code></pre>
			<li><pre style="text-align: justify"><code>this.y</code></pre>
			<li><pre style="text-align: justify"><code>this.size</code></pre>
			<li><pre style="text-align: justify"><code>this.color }</code></pre>
		</ul>
		<li><pre style="text-align: justify"><code>Platform.prototype.draw ()</code></pre>
		<li><pre style="text-align: justify"><code>Platform.prototype.dissapear ()</code></pre>
	</ul>
</ul>
<h2 class="western" align="justify"><a name="user-content-states-y-states-transitions"></a>
States y States Transitions</h2>
<p align="justify">Definition of the different states and their
transition (transition functions).</p>
<ul>
	<li><pre style="text-align: justify"><code>SplashScreen ()</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>buildSplash ()</code></pre>
		<li><pre style="text-align: justify"><code>addEventListener (startGame)</code></pre>
	</ul>
	<li><pre style="text-align: justify"><code>starGame ()</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>create new Game ()</code></pre>
		<li><pre style="text-align: justify"><code>game.start ()</code></pre>
		<li><pre style="text-align: justify"><code>gameOver ()</code></pre>
		<li><pre style="text-align: justify"><code>buildGameOver ()</code></pre>
		<li><pre style="text-align: justify"><code>addEventListener (start</code><code>Ball</code><code>)</code></pre>
	</ul>
	<li><pre style="text-align: justify"><code>scoresScreen ()</code></pre>
	<ul>
		<li><pre style="text-align: justify"><code>readScores ()</code></pre>
		<li><pre style="text-align: justify"><code>showScores ()</code></pre>
	</ul>
</ul>
<h2 class="western" align="justify"><a name="user-content-task"></a>Task</h2>
<ul>
	<li><p align="justify">Main – buildDom</p>
	<li><p align="justify">Main – buildSplashScreen</p>
	<li><p align="justify">Main – addEventListener</p>
	<li><p align="justify">Main – buildGameScreen</p>
	<li><p align="justify">Main – buildGameOverScreen</p>
	<li><p align="justify">Game – buildCanvas</p>
	<li><p align="justify">Game – clearCanvas</p>
	<li><p align="justify">Game – updateCanvas</p>
	<li><p align="justify">Game – drawCanvas</p>
	<li><p align="justify">Game – setGameOver</p>
	<li><p align="justify">Game – addEventListener</p>
	<li><p align="justify">Platform – create</p>
	<li><p align="justify">Platform – move</p>
	<li><p align="justify">Platform – returnToInitialPosition</p>
	<li><p align="justify">Ball – create</p>
	<li><p align="justify">Ball – move</p>
	<li><p align="justify">Ball – bounce</p>
	<li><p align="justify">Ball – fall</p>
	<li><p align="justify">Brick – create</p>
	<li><p align="justify">Brick - dissapear 
	</p>
	<li><p align="justify">Game – addLifeCounter</p>
	<li><p align="justify">Game – addPointsCounter</p>
</ul>
<p align="justify"><br/>
<br/>

</p>
<h2 class="western" align="justify"><a name="user-content-links"></a>Links</h2>
<h3 class="western" align="justify"><a name="user-content-trello"></a>
Trello</h3>
<p align="justify"><a href="https://trello.com/b/eZAaYGcE/ironhack-project1>Trello Lin</a></p>
<h3 class="western" align="justify"><a name="user-content-git"></a>Git</h3>
<p align="justify">URls for the project repo and deploy <a href="http://github.com/">Link
Repo</a> <a href="http://github.com/">Link Deploy</a></p>
<h3 class="western" align="justify"><a name="user-content-slides"></a>
Slides</h3>
<p align="justify">URls for the project presentation (slides) <a href="http://slides.com/">Link
Slides.com</a></p>
<p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

</p>
