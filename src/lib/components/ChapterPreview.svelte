<script>
	const chapters = [
		{
			number: 1,
			title: 'Navigating the Spanish Bureaucracy',
			strapline: 'Understanding Visa, Residency and Legal Essentials',
			excerpt: `Securing your dream home in Spain is an adventure that requires equal parts patience, preparation, and persistence. The Spanish property market can feel like a labyrinth of paperwork, local regulations, and cultural nuances that can overwhelm even the most determined expatriate.
            Your first critical step is understanding the different types of property ownership. While many foreigners dream of a picturesque villa or a quaint apartment in a historic city center, the legal pathways to ownership vary significantly. Residential properties come with layers of administrative requirements that differ dramatically from country to country.
            Consider working with a local gestor—a professional administrative assistant who understands the intricate Spanish bureaucratic system. `
		},
		{
			number: 2,
			title: 'Finding Your Dream Home in Spain',
			strapline: 'From Coastal Villas to Urban Apartments: Where and How to Live',
			excerpt: `Here's an excerpt for Chapter 2 that explores housing options in Spain:
            Spain offers a kaleidoscope of living environments that can satisfy virtually any lifestyle preference. From the sun-drenched coastal regions of Costa del Sol to the historic urban landscapes of Barcelona and Madrid, your housing options are as diverse as the country itself.
            Coastal living presents an alluring option for many expatriates. Towns like Alicante and Málaga offer Mediterranean apartments with breathtaking sea views, often at prices significantly lower than comparable properties in Northern European countries. These areas typically attract a mix of retirees, digital nomads, and remote workers seeking a blend of relaxation and vibrant community life.
            Urban dwellers will find compelling alternatives in major cities.`
		},
		{
			number: 3,
			title: 'Mastering the Spanish Job Market',
			strapline: 'Strategies for Employment and Freelancing in a New Culture',
			excerpt: `Here's an excerpt for Chapter 3 that delves into the intricacies of the Spanish job market:
            Navigating employment in Spain requires more than just a polished resume—it demands cultural intelligence and strategic networking. The Spanish job market operates on relationship-driven principles that can feel dramatically different from more transactional employment landscapes in other countries.
            Networking, or "contactos" as locals call it, is the primary currency of professional opportunities. Unlike the formal job application processes in many countries, Spain relies heavily on personal recommendations and professional connections. Attending industry events, joining local professional associations, and cultivating genuine relationships can often be more effective than submitting online applications.`
		},
		{
			number: 4,
			title: 'Embracing the Spanish Lifestyle',
			strapline: 'Cultural Norms, Social Etiquette and Making New Connections',
			excerpt: `Understanding Spanish social dynamics is less about rules and more about embracing a fundamental philosophy of human connection. The concept of "convivencia"—living together—permeates every aspect of Spanish social interaction, transforming mundane moments into opportunities for genuine connection.
            The legendary Spanish social calendar revolves around shared experiences. Meal times are sacred rituals, not mere nutritional necessities. Lunch can stretch for hours, with conversation flowing as freely as the local wine. Dinner often begins after 9 PM, a timeframe that might shock newcomers but represents the rhythm of social life in Spain.
            Personal space looks dramatically different here. Physical proximity is the norm—kisses on both cheeks are standard greetings, even among relative strangers.`
		},
		{
			number: 5,
			title: 'Budgeting and Finances in Spain',
			strapline: 'Managing Costs, Taxes, and Banking in Your New Home',
			excerpt:`Mastering the financial ecosystem of Spain requires more than converting euros and understanding exchange rates—it demands a comprehensive approach to managing your money in a new cultural and economic context. The Spanish financial system offers both opportunities and challenges for expatriates willing to invest time in understanding its nuances.
            Banking in Spain operates differently from many international models. Traditional banks like Santander and BBVA dominate the landscape, but digital banks are rapidly gaining ground. Opening a local bank account is crucial, yet it involves navigating a maze of documentation. Expect to provide proof of residencia, NIE (tax identification number), passport, and often a local address—a process that can test even the most patient expatriate.`
		}
	];

	let selectedChapterNumber = $state(1); // Initially first chapter selected

	let selectedChapter = $derived(
		chapters.find((chapter) => chapter.number === selectedChapterNumber)
	);

	function selectChapter(chapter) {
		selectedChapterNumber = chapter.number;
	}
</script>

<section class="landing-page-section default-margin">
	<h2 class="mb-l">What you're getting</h2>
	<div class="chapter-container">
		<ul>
			{#each chapters as chapter}
				<li>
					<button
						class="chapter-title"
						class:selected-chapter-title={selectedChapterNumber === chapter.number}
						aria-controls={`chapter-info-${chapter.number}`}
						aria-expanded={selectedChapterNumber === chapter.number}
						onclick={() => selectChapter(chapter)}
					>
						<h3>Chapter {chapter.number}: {chapter.title}</h3>
					</button>
				</li>
			{/each}
		</ul>
		<div class="chapter-info">
			<h3 class="chapter-strapline italic mb-s">
				{selectedChapter.strapline}
			</h3>
			<p>
				{selectedChapter.excerpt}
			</p>
		</div>
	</div>
</section>

<style>
	.chapter-container {
		display: flex;
		justify-content: space-between;
	}

	.chapter-container ul {
		width: 40%;
	}

	.chapter-info {
		width: 55%;
	}

	.chapter-title {
		border-bottom: 1px solid grey;
		width: 100%;
		display: block;
		padding: 10px;
		text-align: left;
	}

	.selected-chapter-title {
		background-color: black;
		border: none;
		color: white;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 1px 3px rgba(0, 0, 0, 0.08);
	}
</style>
