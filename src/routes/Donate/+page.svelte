<script>
	let company = '';
	let email = '';
	let amount = '';
	let message = '';

	const handleSubmit = () => {
		alert(`Thank you, ${company}! We have received your donation request.`);
	};
</script>

<div class="container mx-auto text-center p-2 mt-8">
	<h1 class="h1">Help support us!</h1>
</div>

<div class="container mx-auto text-center p-2 mt-8">
	<div class="row">
		<div class="twelve columns">
			<h2>Contact Us About Donations</h2>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="row">
					<div class="six columns">
						<label for="company">Company Name</label>
						<input
							class="u-full-width text-black mt-8 placeholder:text-black"
							type="text"
							placeholder="Enter your company name"
							id="company"
							bind:value={company}
							required
						/>
					</div>
					<div class="six columns">
						<label for="email">Email Address</label>
						<input
							class="u-full-width text-black placeholder:text-black"
							type="email"
							placeholder="Enter your email address"
							id="email"
							bind:value={email}
							required
						/>
					</div>
				</div>
				<div class="row">
					<div class="six columns">
						<label for="amount">Donation Amount</label>
						<input
							class="u-full-width text-black placeholder:text-black"
							type="number"
							placeholder="Enter the donation amount"
							id="amount"
							bind:value={amount}
							required
						/>
					</div>
				</div>
				<div class="row">
					<div class="twelve columns">
						<label for="message">Message</label>
						<textarea
							class="u-full-width text-black placeholder:text-black"
							placeholder="Enter a message (optional)"
							id="message"
							bind:value={message}
							rows="4"
						/>
					</div>
				</div>
				<button type="button" class="btn variant-filled"
					><input class="btn-ghost-primary" type="submit" value="Submit" /></button
				>
			</form>
		</div>
	</div>
</div>
