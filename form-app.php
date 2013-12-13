<div class="debt-form-app">
	<form id="debtform">
		<div class="step-one">
			<h3>How Much Debt Do You Have?</h3>
			<p>{ pick closest one }</p>
			<div class="button-wrap">
				<button class="dbamt" name="debt-value" value="5000">$5,000</button>
				<button class="dbamt" name="debt-value" value="8000">$8,000</button>
				<button class="dbamt" name="debt-value" value="10000">$10,000</button>
				<button class="dbamt" name="debt-value" value="15000">$15,000</button>
				<button class="dbamt" name="debt-value" value="25000">$25,000</button>
				<button class="dbamt" name="debt-value" value="40000">$40,000</button>
				<button class="dbamt" name="debt-value" value="50000">$50,000</button>
				<button class="dbamt" name="debt-value" value="75000">$75,000</button>
			</div>
		</div>
		<div class="step-two">
			<h3>What is your Zip Code?</h3>
			<input name="zipcode" placeholder="zipcode" class="zip" type="text" maxlength="5">
			<p>{to see if we have a match - step 2 of 3 }</p>
			<div class="outlet">
				<button>next step</button>
			</div>
		</div>
		<div class="step-three">
			<div class="left-form">
				<h4>Yes! We Have a Company for You.</h4>
				<ul>
					<li><img src="images/checkmark.png">"A" BBB Rating</li>
					<li><img src="images/checkmark.png">8+ YRS. In Business</li>
					<li><img src="images/checkmark.png">Over 11,000 Happy Clients</li>
					<h5>Get Free Report &<br> Savings Quote</h5>
				</ul>
				<img class="garrow" src="images/green-arrow.png">
			</div>
			<div class="right-form">
				<input name="fname" class="first-name" type="text" placeholder="First Name">
				<input name="lname" class="last-name" type="text" placeholder="Last Name">
				<input name="email" class="email" type="email" required placeholder="Email">
				<div class="phone-info">
					<label>Phone Number:</label>
					<input size="4" class="phone-lit areacode" type="text" placeholder="(XXX)" maxlength="3">
					<input size="4" class="phone-lit prefix" type="text" placeholder="XXX" maxlength="3">
					<input size="5" class="phone-lit suffix" type="text" placeholder="XXXX" maxlength="4">
				</div>
			</div>
			<div class="outlet">
				<button>Get Report Now</button>
			</div>
		</div>
		<div class="step-four">
			<h3>Your Request is in Line to Be Processed,<br> Thank You</h3>
			<h3>Your safe debt help company report will be emailed to you </h3>
			<p>{ typically between 1-4 hours depending on how backed up we are }</p>
		</div>
	</form>
</div>