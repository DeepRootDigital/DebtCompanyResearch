<?php include 'header.php'; ?>
			<img src="images/free-report-button.png" class="report-button" alt="Free Report Button" />
		<div class="form-area">
			<form class="contactForm" action="mailformprocess.php" method="POST" onsubmit="">
				<p>Your Debt</p>
				<select name="debt" class="debt required">
<option value="nil">Please select a value</option>
<option value="5000">$5,000</option>
<option value="7000">$7,000</option>
<option value="10000">$10,000</option>
<option value="15000">$15,000</option>
<option value="20000">$20,000</option>
<option value="30000">$30,000</option>
<option value="50000">$50,000</option>
<option value="70000">$70,000+</option>
</select>
				<p>Zip Code</p>
				<input name="zip" type="text" placeholder="ie: 94304" class="zip required" maxlength="5" required>
				<p>First Name</p>
				<input name="fname" type="text" placeholder="ie: Bob" class="fname required" required>
				<p>Last Name</p>
				<input name="lname" type="text" placeholder="ie: Williams" class="lname required" required>
				<p>Email</p>
				<input name="email" type="text" placeholder="ie: email@domain.com" class="email required" required>
				<p>Phone</p>
				<input name="phonefirst" type="text" placeholder="ie: 387" class="areacode phone required" maxlength="3" required>
				<input name="phonesecond" type="text" placeholder="ie: 987" class="prefix phone required" maxlength="3" required>
				<input name="phonethird" type="text" placeholder="ie: 3929" class="suffix phonelong required" maxlength="4" required>
                                        <input name="sid" type="hidden" value="<?php echo $_GET['sid'] ?>">
                                        <input name="pid" type="hidden" value="<?php echo $_GET['pid'] ?>">
				<input class="submit-form-ajax" type="image" src="images/form-button.png">
			</form>
		</div>
		<div class="discovery-area">
			<div class="discovery-text">
				<h3>You'll Discover:</h3>
				<p><span>1</span>) Safe Companies To Use</p>
				<p><span>2</span>) 3 Ways To Debt Freedom</p>
				<p><span>3</span>) 8 Critical Questions to Ask</p>
			</div>
			<div class="discovery-photo">
                            <img src="images/debt_book.png" alt="Debt Relief Book" />
			</div>
		</div>




		<div class="tabbed-content">
			<div class="tab-navigation">
				<div class="tab one tab-hover">
					Top Rated <br /><span>Firms</span>
				</div>
				<div class="tab two">
					Free <br /><span>Matching</span>
				</div>
				<div class="tab three">
					Over 69,500 <br /><span>Helped</span>
				</div>
				<div class="tab four">
					Debt Free <br /><span>Safely!</span>
				</div>
			</div>
			<div class="tab-text">
				<div class="tab-one">
					<img class="tab-image" src="images/ben-body.png">
					<div class="tab-content-wrap">
						<h3>Frustrated? Confused?</h3>
						<p>So many companies say they can help you get out of debt but let's face it, it's unlikely you've heard of any of them before.</p>
						<h3>Who can you trust?</h3>
						<p>Our team has been involved in the debt relief business for years. We've witnessed first-hand people's frustrations signing up with companies 
							that are here today and gone tomorrow. A waste of time & money, not to mention added frustration when trying to get out of debt.</p>
							<h4>You need honest help, not more problems!</h4>
							<p>We saw a need to help people like you. As insiders, we know which companies are honest, trustworthy, and have stood the test of time.</p>
							<p>We actually know the people behind the companies we suggest. We've met them and they are all "A" rated with the BBB for extra measure.</p>
							<p>With the thousands of people we've helped, we're pretty confident in our research and we know it can help you too.</p>
						</div>
					</div>
					<div class="tab-two">
						<img class="tab-image" src="images/bob-body.png">
						<div class="tab-content-wrap">
							<p>When you complete the simple form above we determine if you are a candidate for one of our companies. Certain companies only operate in certain states and with particular debt amounts which is why we ask the questions.</p>
							<p>Once a match is made, we provide you with information about the company. You can contact them or they will contact you to provide a free consultation.</p>
							<p>The purpose of the consultation is to learn more about the details of your financial situation so they can be sure you could benefit from their program. If not, they will likely provide you with advice about your options and may even have another suggestion for you.</p>
							<p>Every financial situation is unique, the goal is to find you the right solution for you!</p>
						</div>
					</div>
					<div class="tab-three">
						<img class="tab-image" src="images/nicole-body.png">
						<div class="tab-content-wrap">
							<p>We are a team of hardworking people with husbands, wives, and kids, probably just like you - but most importantly, we're insiders - we have debt relief industry experience since 2006!</p>
							<p>Over the years ten's of thousands of people have benefitted from our research and suggestions. We help people all day, every day and we love the feedback we get from people relieved to have found our service.</p>
							<p>There's no better feeling than opening emails from people relieved to finally see light at the end of a tunnel. They are ecstatic to finally feel as though they are in trustworthy hands that will lead them out of debt.</p>
							<p>Every financial situation is unique, the goal is to find you the right solution for you!</p>
						</div>
					</div>
					<div class="tab-four">
						<img class="tab-image" src="images/marco-body.png">
						<div class="tab-content-wrap">	
							<p>The debt relief industry for many years was lightly regulated which resulted in hundreds of debt relief companies that were more concerned about their fees than getting their clients out of debt. It was the Wild West!</p>
							<p>Many of those companies have been regulated out of business but where there's money to be made there will always be new fly by night companies that pop up.</p>
							<p>Our goal is to steer you out of harm's way.</p>
							<p>You want to consider companies that have been in business for at least 5-7 years, provide honest advice, comply with all the government rules and regulations, don't engage in high pressure sales pitches, and offer excellent customer service after you've become a client.</p>
							<p>In short, you want to get out of debt safely in the shortest time possible - we know the companies that can get you there.</p>
						</div>
					</div>
				</div>
				<img src="images/content-bottom.png">
			</div>
                        <div class="mainpagesidebar">
			<?php include 'sidebar.php'; ?>
                        </div>
		</div>
	</div>
</div>
<?php include 'footer.php'; ?>