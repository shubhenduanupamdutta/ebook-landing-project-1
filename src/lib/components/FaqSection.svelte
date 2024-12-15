<script>
	import InstagramIcon from '$assets/icons/InstagramIcon.svg';
	import { Button, FaqItem } from '$components';

	const faqs = [
		{
			question: 'What will I learn from this ebook?',
			answer: `This ebook provides a comprehensive roadmap for relocating to Spain, covering everything from navigating bureaucracy and finding housing to understanding job markets, cultural nuances, financial management, and practical tips for seamless integration into Spanish life. It's your ultimate expatriate survival guide.`
		},
		{
			question: 'Who is this ebook for?',
			answer: `This ebook is for anyone considering moving to Spain, whether for work, study, retirement, or adventure. It's for those who want to make an informed decision about relocating to Spain and are looking for practical advice and guidance on how to make the transition as smooth as possible.`
		},
		{
			question: 'How much does the ebook cost?',
			answer: `The ebook is priced at $19.99 and is available for purchase on our website. It's a one-time payment that gives you access to the full ebook, including all the valuable information and resources it contains.`
		},
		{
			question: 'Is the information in the ebook up-to-date?',
			answer: `Yes, the information in the ebook is regularly updated to ensure that it remains relevant and accurate. We strive to provide the most current and reliable information to help you make informed decisions about relocating to Spain.`
		},
		{
			question: "Can I get a refund if I'm not satisfied with the ebook?",
			answer: `We offer a 30-day money-back guarantee on all purchases of the ebook. If you're not satisfied with the content or find that it doesn't meet your expectations, you can request a full refund within 30 days of purchase. Your satisfaction is our top priority.`
		}
	];

	let questionCurrentlyExpanded = $state(-1);

	function onclick(index) {
		if (questionCurrentlyExpanded === index) {
			questionCurrentlyExpanded = -1;
		} else {
			questionCurrentlyExpanded = index;
		}
	}
</script>

<section class="landing-page-section">
	<h2 class="mb-l">Frequently Asked Questions</h2>
	<div class="faq-container">
		{#each faqs as faq, index}
			<FaqItem
				{faq}
				isExpanded={index == questionCurrentlyExpanded}
				onclick={() => onclick(index)}
			/>
		{/each}
	</div>
	<div class="additional-info mt-m">
		<Button class="mt-s">BUY NOW</Button>
		<p class="mt-s">Any Other Question?</p>
		<a href="https://www.instagram.com/shubhenduanupamdutta/">
			<p>
				<img src={InstagramIcon} class="insta-icon" alt="Instagram Icon" />
				<span>Hit me up on Instagram</span>
			</p>
		</a>
	</div>
</section>

<style>
	.additional-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: grey;
	}

	.insta-icon {
		width: 14px;
		height: 14px;
	}

	.additional-info span {
		text-decoration: underline;
	}

	section.landing-page-section {
		height: fit-content;
	}
</style>
