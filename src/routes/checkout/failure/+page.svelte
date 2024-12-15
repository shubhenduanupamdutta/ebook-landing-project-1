<script>
	import { HeroSection } from '$components';
	import Button from '$components/Button.svelte';
</script>

<HeroSection>
	<h1>ERROR WHILE</h1>
	<h1 class="mb-m">PURCHASING</h1>

	<p class="light-grey mb-s">
		We're sorry, but it looks like there was an error processing your payment. Don't worry, these
		things happen, and we're here to help. Please double check your payment details and try again.
		We apologize for any inconvenience this may have caused and appreciate your patience.
	</p>
	<p class="light-grey mb-m">
		If you like to try again, please click the button below to return to the checkout page.
	</p>
	<Button>Try Again</Button>
</HeroSection>
